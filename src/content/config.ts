import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    duration: z.string(),
    modalidad: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    highlight: z.string(),
    precio: z.string(),
    cta: z.string(),
    beneficios: z.array(z.string()),
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