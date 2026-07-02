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
            // Tina's local media manager uploads into public/uploads and
            // stores this field as a public-relative URL string —
            // matches src/content.config.ts's `coverImage: z.string()`.
            // Rendered via a plain <img>, not astro:assets' <Image>, as a
            // result (no automatic resize/format conversion).
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
