'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <Link href="/">
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
        </Link>
        <Link href="/music">
            <MenuItem setActive={setActive} active={active} item="Music">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Our Courses</HoveredLink>
                <HoveredLink href="/interface-design">Basic Music Theory</HoveredLink>
                <HoveredLink href="/seo">Advanced Composition</HoveredLink>
                <HoveredLink href="/branding">Song Writing</HoveredLink>
                <HoveredLink href="/branding">Music Production</HoveredLink>
            </div>
            </MenuItem>
        </Link>
        <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
            </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Navbar
