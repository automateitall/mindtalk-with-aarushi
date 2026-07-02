import { getCollection, type CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection("blog", ({ data }) => data.published);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPostsByTag(tag: string, limit?: number): Promise<BlogPost[]> {
  const posts = await getPublishedPosts();
  const filtered = posts.filter((post) => post.data.tags.includes(tag));
  return typeof limit === "number" ? filtered.slice(0, limit) : filtered;
}

export async function getRelatedPosts(current: BlogPost, limit = 3): Promise<BlogPost[]> {
  const posts = await getPublishedPosts();
  return posts
    .filter((post) => post.id !== current.id && post.data.tags.some((tag) => current.data.tags.includes(tag)))
    .slice(0, limit);
}

// Maps a post's tag to the concern page it should cross-link to, so a post
// tagged "anxiety" can link back to /anxiety-stress (see [slug].astro and
// blog/[...slug].astro).
export const tagToConcernSlug: Record<string, string> = {
  anxiety: "anxiety-stress",
  depression: "depression-low-mood",
  trauma: "trauma-ptsd",
  relationships: "relationships-family",
  burnout: "work-stress-burnout",
};
