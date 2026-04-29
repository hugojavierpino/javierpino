import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articulos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    categoria: z.string().optional().default('Artículo'),
    resumen: z.string().optional().default(''),
    imagen: z.string().optional(),
    pasaje: z.string().optional(),
    serie: z.string().optional(),
    youtube: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

const sermones = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sermones' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    pasaje: z.string().optional().default(''),
    youtube: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { articulos, sermones };
