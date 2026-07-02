// Stub until the blog is wired up (Tina CMS, per Build Spec — see README
// "Not yet built"). Empty on purpose: concern pages' "Related reading"
// section is built to render conditionally, and correctly renders nothing
// right now. Swap `posts` for a real content collection later; callers
// (getPostsByTag) don't need to change.

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage?: string;
  date: string;
  tags: string[];
}

export const posts: BlogPost[] = [];

export function getPostsByTag(tag: string): BlogPost[] {
  return posts.filter((post) => post.tags.includes(tag));
}
