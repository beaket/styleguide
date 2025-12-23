import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '*.md', base: '.' }),
  schema: z.object({
    title: z.string().optional(),
  }).passthrough(),
});

export const collections = { guides };
