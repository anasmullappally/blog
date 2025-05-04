"use client";

import { IPost, posts } from "@/data/posts";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Thumbnail() {
  const pathname = usePathname().split("/")[2];
  const post = posts.find((p: IPost) => p.slug === pathname);
  console.log(post?.thumbnail,post?.slug)
  return (
    <div className="h-[250px] md:h-[500px] mb-10 overflow-hidden rounded-lg relative">
      <Image
        src={post?.thumbnail || "/images/hero.jpg"}
        alt={post?.thumbnail_alt || "Blogs"}
        fill
        sizes="100vh"
      />
    </div>
  );
}
