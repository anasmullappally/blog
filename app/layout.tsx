import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const work_Sans = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Kerala Property Law Blog – Top Lawyers for Land Disputes & Real Estate",
  description:
    "Explore expert guides on Kerala property law, including legal heir certificates, land reforms, and succession. Connect with top-rated property lawyers in Kerala and Ernakulam for land disputes, partition cases, and real estate issues.",
  keywords: [
    "property lawyer in Kerala",
    "legal help for land disputes",
    "best advocate for property issues in Kerala",
    "property lawyer in Ernakulam",
    "real estate lawyer Kerala",
    "property legal services",
    "legal advisor for property issues",
    "Kerala property law",
  ].join(", "),
  openGraph: {
    title:
      "Kerala Property Law Blog – Top Lawyers for Land Disputes & Real Estate",
    description:
      "Discover property law insights and find the best lawyers for property cases, land disputes, and real estate in Kerala and Ernakulam.",
    images: [
      {
        url: "/images/hero.jpg",
        alt: "Kerala property law blog thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kerala Property Law Blog – Top Lawyers for Land Disputes & Real Estate",
    description:
      "Discover property law insights and find the best lawyers for property cases, land disputes, and real estate in Kerala and Ernakulam.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${work_Sans.className} antialiased bg-white dark:bg-[#242535] text-black dark:text-white max-w-7xl mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
