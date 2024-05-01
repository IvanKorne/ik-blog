"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { Linkedin, Github, PanelTop } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./ModeToggle";

const MainNav = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:block w-full ">
      <div className="flex items-center justify-between p-4 w-full ">
        <div className="flex items-center gap-5 ">
          <Link
            href="/blog"
            className={cn(
              "text-base font-medium transition-colors hover:text-foreground ",
              pathname === "/blog" ? "text-foreground" : "text-foreground/60"
            )}
          >
            Blog
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-base font-medium transition-colors hover:text-foreground",
              pathname === "/about" ? "text-foreground" : "text-foreground/60"
            )}
          >
            About
          </Link>
        </div>
        <div className="items-center gap-10 flex ">
          <ModeToggle />
          <Link
            href="https://www.linkedin.com/in/ivan-korneychuk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-foreground/65 text-foreground transition-colors size-7" />
          </Link>
          <Link
            href="https://github.com/IvanKorne"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:text-foreground/65 text-foreground transition-colors size-7" />
          </Link>
          <Link
            href="https://ivankorne.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PanelTop className="hover:text-foreground/65 text-foreground transition-colors size-7" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
