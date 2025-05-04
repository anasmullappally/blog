import { posts } from "@/data/posts";

export async function getPosts() {
  return posts;
}

export async function getPostBySlug(slug) {
  if (!slug) return null;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug);
  return post || null;
}
