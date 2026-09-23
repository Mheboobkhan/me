import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().default(''),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.string().default('notes'),
      tags: z.array(z.string()).default([]),
      heroImage: image().optional(),
      // Where the post first appeared (e.g. Medium). Shown as a note; this site stays canonical.
      originalURL: z.string().optional(),
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
