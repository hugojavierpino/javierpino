import { defineCollection, z } from 'astro:content';

const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categoria: z.string(),
    resumen: z.string(),
  }),
});

const sermones = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    pasaje: z.string(),
    youtube: z.string().optional(),
  }),
});

export const collections = { articulos, sermones };