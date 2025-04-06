import Link from "next/link";
import GitHubLogo from "../icons/github-logo";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="flex h-16 items-center justify-between px-6">
      <span>Copyright © 2025 | All rights reserved.</span>
      <Link href={siteConfig.links.github}>
        <GitHubLogo className="h-6 w-6" />
      </Link>
    </footer>
  );
}
