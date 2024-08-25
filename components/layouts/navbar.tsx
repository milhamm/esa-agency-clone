import Link from "next/link";

import { Logo } from "./logo";
import { NavItem } from "./nav-item";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-[1200] flex h-[100px] w-full items-center justify-center">
      <div className="container flex w-full">
        <Link href="/">
          <Logo />
        </Link>
        <div className="ml-auto flex gap-10">
          <NavItem href="/" text="Home" />
          <NavItem href="/works" text="Work" />
          <NavItem href="/agency" text="Agency" />
          <NavItem href="/jobs" text="Jobs" />
          <NavItem href="/contact" text="Contact" />
        </div>
      </div>
    </nav>
  );
}
