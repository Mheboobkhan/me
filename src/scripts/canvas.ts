// Shared plumbing for the decorative canvases: DPR-aware sizing, pausing when
// off-screen, frame throttling, theme colors, and reduced-motion handling.

export interface Stage {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  /** CSS pixel size */
  w: number;
  h: number;
  /** seconds since start */
  t: number;
  /** seconds since last frame */
  dt: number;
}

interface Options {
  fps?: number;
  /** Frames to simulate before drawing a single still when reduced motion is on. */
  stillFrames?: number;
  /** Called on first size and every resize. */
  resize: (s: Stage) => void;
  frame: (s: Stage) => void;
}

export const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

const styles = () => getComputedStyle(document.documentElement);
export const cssVar = (name: string) => styles().getPropertyValue(name).trim();

/** Parse #rgb / #rrggbb / #rrggbbaa into [r, g, b]. */
export function hexToRgb(hex: string): [number, number, number] {
  let h = hex.replace('#', '');
  if (h.length === 3 || h.length === 4) h = h.split('').map((c) => c + c).join('');
  const n = parseInt(h.slice(0, 6), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** Standard normal sample via Box–Muller. */
export function gaussian() {
  let u = 0;
  while (u === 0) u = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random());
}

export function mountCanvas(canvas: HTMLCanvasElement, opts: Options) {
  const ctx = canvas.getContext('2d')!;
  const stage: Stage = { canvas, ctx, w: 0, h: 0, t: 0, dt: 0 };
  const still = reducedMotion();
  const interval = 1000 / (opts.fps ?? 60);
  let visible = false;
  let raf = 0;
  let last = 0;
  let acc = 0;

  const size = () => {
    const r = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (!r.width || !r.height) return false;
    stage.w = r.width;
    stage.h = r.height;
    canvas.width = Math.round(r.width * dpr);
    canvas.height = Math.round(r.height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    opts.resize(stage);
    return true;
  };

  const drawStill = () => {
    for (let i = 0; i < (opts.stillFrames ?? 1); i++) {
      stage.dt = interval / 1000;
      stage.t += stage.dt;
      opts.frame(stage);
    }
  };

  const loop = (now: number) => {
    raf = requestAnimationFrame(loop);
    const elapsed = last ? now - last : interval;
    last = now;
    acc += Math.min(elapsed, 250);
    if (acc < interval) return;
    stage.dt = acc / 1000;
    stage.t += stage.dt;
    acc = 0;
    opts.frame(stage);
  };

  const start = () => {
    if (still || raf || !visible || document.hidden) return;
    last = 0;
    raf = requestAnimationFrame(loop);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  new ResizeObserver(() => {
    if (size() && still) drawStill();
  }).observe(canvas);

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    visible ? start() : stop();
  }).observe(canvas);

  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  // Re-render the still when the color scheme flips.
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => still && drawStill());

  return stage;
}
