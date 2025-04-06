"use client";
import { ReactNode, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { links } from "./nav";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="top">
        <MobileLink
          onOpenChange={setOpen}
          href="/"
          className="flex items-center mr-2"
        >
          <span className="font-bold text-xl flex py-auto">
            {siteConfig.name}
          </span>
        </MobileLink>
        <div className="flex flex-col items-center gap-3 mt-3">
          {links.map((link) => {
            return (
              <MobileLink
                key={link.href}
                href={link.href}
                className="w-full text-center"
                onOpenChange={setOpen}
              >
                {link.label}
              </MobileLink>
            );
          })}
          <Link target="_blank" rel="noreferrer" href={siteConfig.links.github}>
            GitHub
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileNavProps extends LinkProps {
  children: ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
}

function MobileLink({
  href,
  className,
  children,
  onOpenChange,
  ...props
}: MobileNavProps) {
  const router = useRouter();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

export default MobileLink;
