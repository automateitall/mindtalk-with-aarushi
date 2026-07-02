import { defineConfig } from "tinacms";

// Branch Tina reads/writes against — falls back to "main" locally where
// none of these CI env vars are set.
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_PUBLIC_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog Posts",
        path: "src/content/blog",
        format: "md",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            ui: { component: "textarea" },
            required: true,
          },
          {
            // NOTE: Tina's local media manager writes uploads into
            // public/uploads and stores this field as a public-relative
            // URL string. Astro's content collection schema
            // (src/content.config.ts) currently types `coverImage` with
            // the `image()` helper, which expects a Vite-resolvable
            // relative path instead (for astro:assets optimization) — a
            // path from here won't validate against that schema as-is.
            // No posts use coverImage yet, so this isn't live-broken, but
            // fix one side before the first real upload: either relax
            // the Astro schema to a plain `z.string()` and swap
            // `<Image>` for a plain `<img>` in BlogCard/[...slug].astro,
            // or reconfigure Tina's mediaRoot to write inside
            // src/content/blog instead of public/uploads.
            type: "image",
            name: "coverImage",
            label: "Cover Image",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "string",
            name: "seoTitle",
            label: "SEO Title",
          },
          {
            type: "string",
            name: "seoDescription",
            label: "SEO Description",
            ui: { component: "textarea" },
          },
          {
            type: "boolean",
            name: "published",
            label: "Published",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
