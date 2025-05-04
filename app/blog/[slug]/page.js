import { getPostBySlug, getPosts } from '../../../lib/posts';
import MdxLayout from '@/components/mdx-layout';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  // Await params to resolve the Promise
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {}; // return empty metadata if post not found

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
  };
}

export default async function Post({ params }) {
  // Await params to resolve the Promise
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return notFound(); // trigger 404 if post not found

  return (
    <MdxLayout post={post}>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </MdxLayout>
  );
}