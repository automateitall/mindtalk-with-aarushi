// Astro content collection for the blog. Schema mirrors what the Build
// Spec describes for the eventual Tina CMS collection (title, slug, date,
// excerpt, coverImage, body (MDX), SEO fields, tags, published) — Tina
// will manage these same Markdown/MDX files once it's wired up (see
// README "Not yet built"), so this schema shouldn't need to change then.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      excerpt: z.string(),
      coverImage: image().optional(),
      tags: z.array(z.string()).default([]),
      seoTitle: z.string().optional(),
      seoDescription: z.string().optional(),
      published: z.boolean().default(true),
    }),
});

export const collections = { blog };
