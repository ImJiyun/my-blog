"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const links = [
  { href: "/", label: "Home" },
  { href: "/posts", label: "Posts" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="space-x-8">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`hidden sm:inline-block ${
              isActive ? "text-blue-500 font-semibold" : "text-gray-500"
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
