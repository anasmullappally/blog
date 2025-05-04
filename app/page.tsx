import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { posts } from "@/data/posts";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const seoKeywords = [
    "good lawyer for property case near me",
    "best advocate for property issues",
    "legal help for land disputes near me",
    "top-rated property lawyer in my area",
    "who is the best lawyer for property matters",
    "experienced real estate lawyer near me",
    "lawyer for property partition case",
    "advocate for property possession issues",
    "trusted lawyer for house dispute",
    "family property dispute legal expert",
    "civil lawyer for land encroachment",
    "real estate case lawyer with good reviews",
    "legal advisor for property issues",
    "need a lawyer for property litigation",
    "property lawyer for court cases",
    "property lawyer in Ernakulam",
    "best real estate advocate in Ernakulam",
    "property case expert lawyer Ernakulam",
    "top property dispute lawyer near Ernakulam",
    "legal advice for property matters in Ernakulam",
    "property legal help",
    "best civil lawyer for land cases",
    "property legal services",
    "advocate for house ownership dispute",
    "legal advisor for flat registration problems",
    "real estate conflict resolution lawyer",
  ].join(", ");

  // Feature the "Legal Heir Certificates in Kerala" post in the hero section
  const featuredPost =
    posts.find((p) => p.slug === "legal-heir-certificate-kerala") || posts[0];

  return (
    <div>
      <Head>
        <title>
          Property Law Blog – Top Lawyers for Property Cases in Kerala &
          Ernakulam
        </title>
        <meta
          name="description"
          content="Discover expert guides on Kerala property law, including legal heir certificates, land reforms, and succession. Connect with top-rated property lawyers in Ernakulam for land disputes, partition cases, and real estate issues."
        />
        <meta name="keywords" content={seoKeywords} />
        <meta
          property="og:title"
          content="Property Law Blog – Top Lawyers for Property Cases in Kerala & Ernakulam"
        />
        <meta
          property="og:description"
          content="Explore property law insights and find the best lawyers for property cases, land disputes, and real estate in Kerala and Ernakulam."
        />
        <meta property="og:image" content="/images/hero.jpg" />
        <meta
          property="og:image:alt"
          content="Kerala property law hero image"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Property Law Blog – Top Lawyers for Property Cases in Kerala & Ernakulam"
        />
        <meta
          name="twitter:description"
          content="Explore property law insights and find the best lawyers for property cases, land disputes, and real estate in Kerala and Ernakulam."
        />
        <meta name="twitter:image" content="/images/hero.jpg" />
      </Head>
      <Header />

      {/* hero */}
      <div className="mb-20 px-5 md:px-0">
        <div className="h-[250px] md:h-[600px] rounded-md relative">
          <Image
            src={featuredPost.thumbnail}
            alt="Property law in Kerala hero image"
            sizes="100vw"
            fill
            className="object-cover"
          />
          <div className="absolute -bottom-8 bg-white dark:bg-[#242535] p-6 ml-10 rounded-lg shadow-lg max-w-[80%] md:max-w-[40%]">
            <p className="text-xs bg-blue-700 w-fit py-1 px-2 text-white rounded-md mb-1">
              {featuredPost.category}
            </p>
            <h2 className="text-base md:text-3xl font-bold">
              {featuredPost.title}
            </h2>
            <p className="text-sm mt-4">
              {featuredPost.author} | {featuredPost.date}
            </p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-5">
        {posts.map((p, idx) => (
          <Link
            key={idx}
            href={`/go/${p.slug}`}
            className="p-4 group rounded-lg border w-[392px] border-gray-200 dark:border-gray-700"
          >
            {/* image */}
            <div className="h-60 w-full relative overflow-hidden rounded-md object-cover group-hover:scale-105 duration-300 transition-all">
              <Image
                src={p.thumbnail}
                alt={p.thumbnail_alt}
                sizes="100vw"
                fill
              />
            </div>

            {/* category */}
            <p className="text-sm bg-gray-100 dark:bg-gray-700/95 text-blue-700 dark:text-blue-500 font-semibold my-4 w-fit px-2 py-1 rounded-sm">
              {p.category}
            </p>

            {/* title */}
            <h2 className="text-2xl leading-7 font-bold py-1 line-clamp-2">
              {p.title}
            </h2>

            {/* author and date */}
            <div className="text-gray-500 flex text-base space-x-10 py-3">
              <div>{p.author}</div>
              <div>{p.date}</div>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
