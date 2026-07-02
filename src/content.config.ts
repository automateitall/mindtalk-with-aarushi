// Astro content collection for the blog. Schema mirrors what the Build
// Spec describes for the eventual Tina CMS collection (title, slug, date,
// excerpt, coverImage, body (MDX), SEO fields, tags, published) — Tina
// manages these same Markdown files (see tina/config.ts).
//
// coverImage is a plain public-relative URL string, not the astro:assets
// `image()` helper — Tina's media manager uploads into public/uploads and
// stores a URL string there, so the schema needs to match that shape.
// Cover images render via a plain <img> (BlogCard.astro,
// blog/[...slug].astro) rather than the optimized <Image> component as a
// result — a deliberate tradeoff to keep Tina uploads and this schema in
// agreement, at the cost of automatic resizing/format conversion.
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { blog };
