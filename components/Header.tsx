"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
const links = [{ displayName: "Blog", herf: "/blog" }];

export default function Header() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Avoid rendering until mounted to prevent mismatch
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="flex justify-between items-center py-9 px-5 md:px-0">
      <Logo />
      <div className="flex space-x-10">
        <nav className="space-x-10">
          {links.map((l, idx) => (
            <Link href={l.herf} key={idx}>
              {l.displayName}
            </Link>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="focus:outline-none"
          aria-label="Toggle theme"
        >
          <Image
            src={
              currentTheme === "light"
                ? "/light-toggle.svg"
                : "/dark-toggle.svg"
            }
            alt="theme toggle"
            width={48}
            height={28}
            priority
          />
        </button>
      </div>
    </header>
  );
}
