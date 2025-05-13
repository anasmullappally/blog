'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { use } from 'react';

export default function GoToPost({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params);

  useEffect(() => {
    const message = `Hello, I’m looking for legal assistance regarding a property-related matter. Could you please guide me on how to proceed?`;
    
    // Open WhatsApp in a new tab
    window.open(
      `https://wa.me/9447455372?text=${encodeURIComponent(message)}`,
      '_blank'
    );

    // Redirect to the blog post
    router.replace(`/blog/${slug}`);
  }, [slug, router]);

  return <p>Redirecting to blog post...</p>;
}
