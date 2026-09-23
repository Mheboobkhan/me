---
title: "The Threat Hunting Hypothesis Defined ?"
description: "Human intelligence gives us the liberty of interpreting things as per our own will and understanding. This is the drawback of our…"
pubDate: 2021-10-10
category: "essay"
tags: []
originalURL: "https://medium.com/@whiteheart0/the-threat-hunting-hypothesis-defined-5904f3e8043b"
---

Human intelligence gives us the liberty of interpreting things as per our own will and understanding. This is the drawback of our free-thinking since in this way truth will be relative rather than absolute. The same goes for the Hypothesis based hunting term. Many people, organizations, and hunters use it as per their understanding.

Things get complicated when two different ideas or interpretations collide with each other. Threat hunting is a relatively new technology that has no standards defined. In this article, we will try to normalize the definition of the Hypothesis based hunting

### **What is a Hypothesis?**

The first thing we need to understand is that the threat hunting hypothesis is scientific Hypothesis. As per the [Britannica](https://www.britannica.com/science/scientific-hypothesis)

> “scientific Hypothesis, an idea that proposes a tentative explanation about a phenomenon or a narrow set of phenomena observed in the natural world.”

Let’s break down this definition in the realm of cybersecurity with some additional characteristics of threat hunting hypotheses based on the comments of other experts.

#### 1\. Hypothesis Is An Idea

It is quite trivial to understand the above statement in the real world, but in the cybersecurity domain, the idea requires a foundation of valid observations and profound explanations. As explained by Robert M. Lee and David Bianco in the SANS white paper *Generating Hypotheses for Successful Threat Hunting*, the idea must stem from the hunter’s valid observations or predictions based on a complex analysis of APT threats and internal alert assessments.

#### 2\. Hypothesis Must Be Testable

This is a key characteristic of the hypothesis: the hunter must be able to test their hypothesis in the network. For example, consider the following case:

> “A new zero-day vulnerability was released for PHP, affecting only version 8.x. This news reached Bob, a new joiner in the threat hunting team. Bob decided to hunt for this zero-day. Throughout the day, Bob gathered all kinds of data required to hunt the CVE in the network. However, at the end of the day, when Bob consulted the senior hunter, he discovered that all applications in the organization’s network were running on PHP version 9.x or above. Even though Bob had a good hypothesis, it couldn’t be tested in the current environment.”

A good hunter must be aware of the types of data available for the hunt and, based on that, must decide on the hypothesis.

#### 3\. Hypothesis should be flexible to modify or enhance.

Since threat hunting involves human analysis, we should not ignore human psychology when creating and pursuing a hypothesis. Hunters may introduce natural biases while hunting for adversaries.

Although hypotheses guide hunters to focus on specific threats, they can also create tunnel vision. This narrowed perspective can be dangerous if the hunter overlooks critical information that is unrelated to the current hypothesis. Consider the example below to understand this better.

> Alice decided to hunt for the abuse of **regsvr32.exe** in the network. She built a hypothesis around it to check for signs of abuse of this binary by an adversary. While hunting, she ran a query on the EDR to check for network connections made by all binaries. During her analysis, she noticed that **notepad.exe** was also connecting to the domain controller on port 389. However, she completely ignored this behavior since it wasn’t within the scope of her hypothesis.

I also believe that a hypothesis should neither be too specific nor too generic. It should cover the major part of the attack or kill chain the hunter is focusing on but should not extend beyond its scope.

#### Conclusion:

We tried to generalize the term threat hunting hypothesis by providing some characteristics to it. In the conclusion, we can say the threat hunting hypothesis is an idea based on the observed events or complex prediction of the future based on threat intelligence, which must be testable and flexible to modification throughout the life cycle.

This could be just another definition of the threat hunting hypothesis, but the main idea behind this term is not what it means but what it does, and it’s kill before getting killed.

#### References:

[https://sansorg.egnyte.com/dl/qyBaLJHovj](https://sansorg.egnyte.com/dl/qyBaLJHovj)

[https://www.britannica.com/science/scientific-hypothesis](https://www.britannica.com/science/scientific-hypothesis)

[https://www.rsa.com/en-us/blog/2017-07/hypothesis-in-threat-hunting](https://www.rsa.com/en-us/blog/2017-07/hypothesis-in-threat-hunting)
