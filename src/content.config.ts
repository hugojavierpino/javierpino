import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categoria: z.string(),
    resumen: z.string(),
  }),
});

const sermones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sermones' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    pasaje: z.string(),
    youtube: z.string().optional(),
  }),
});

export const collections = { articulos, sermones };