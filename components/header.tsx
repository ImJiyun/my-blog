import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 ckdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" w-full flex h-16 items-center justify-between px-4">
        <div className="text-lg font-bold">Hanul.dev</div>
        <span className="flex items-center space-x-4">
          <Nav />
          <ModeToggle />
          <MobileNav />
        </span>
      </div>
    </header>
  );
}
