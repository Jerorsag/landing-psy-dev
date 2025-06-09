import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    duration: z.string(),
    featured: z.boolean().default(false),
    icon: z.string(),
    benefits: z.array(z.string()),
    order: z.number(),
    highlight: z.string(),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
    messages: z.array(z.object({
      sender: z.enum(['client', 'carolina']),
      text: z.string(),
      time: z.string(),
      delay: z.number().optional(),
    })),
    order: z.number(),
  }),
});

const timeline = defineCollection({
  type: 'content',
  schema: z.object({
    year: z.string(),
    icon: z.string(),
    title: z.string(),
    subtitle: z.string(),
    content: z.string(),
    frase: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  services,
  testimonials,
  timeline
};