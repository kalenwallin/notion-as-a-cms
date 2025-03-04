import { defineCollection, z } from 'astro:content';

const slides = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string().optional(),
      type: z.enum(['title', 'content', 'image-content', 'image', 'image-content-demo']),
      order: z.number().optional(),
      hideContent: z.boolean().optional(),
      image: image().optional(),
      pageId: z.string().optional()
    }),
});

export const collections = { slides };
