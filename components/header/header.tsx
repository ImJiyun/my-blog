import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "../theme/mode-toggle";
import Nav from "./nav";
import { MainLogo } from "../icons/main-logo";

export default function Header() {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 ckdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" w-full flex h-16 items-center justify-between px-6">
        <MainLogo />
        <span className="flex items-center space-x-4">
          <Nav />
          <ModeToggle />
          <MobileNav />
        </span>
      </div>
    </header>
  );
}
