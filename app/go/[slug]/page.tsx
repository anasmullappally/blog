'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function GoToPost({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params); // ✅ unwrap the Promise safely

  useEffect(() => {
    const message = `Hi, I'm interested in your blog post: https:/blog-nine-omega-94.vercel.app/blog/${slug}`;
    
    // Open WhatsApp in a new tab
    window.open(
      `https://wa.me/9539363694?text=${encodeURIComponent(message)}`,
      '_blank'
    );

    // Redirect to the blog post
    router.replace(`/blog/${slug}`);
  }, [slug, router]);

  return <p>Redirecting to blog post...</p>;
}
