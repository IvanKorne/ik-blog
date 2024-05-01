"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Linkedin, Menu, PanelTop } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="block md:hidden w-full">
      <div className="flex w-full items-center justify-end px-4 gap-5">
        <ModeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Menu className="size-10 text-foreground" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription className="flex flex-col gap-10 items-start p-2">
                <div className="flex flex-col gap-5 font-semibold">
                  <Link
                    href="/blog"
                    className={cn(
                      "text-xl font-medium transition-colors hover:text-foreground/60",
                      pathname === "/blog"
                        ? "text-foreground/60"
                        : "text-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      "text-xl font-medium transition-colors hover:text-foreground/60",
                      pathname === "/about"
                        ? "text-foreground/60"
                        : "text-foreground"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    About
                  </Link>
                </div>
                <div className="flex flex-col gap-5 font-medium">
                  <Link
                    href="https://www.linkedin.com/in/ivan-korneychuk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className=" text-foreground hover:text-foreground/65 transition-colors size-7" />
                    <h2 className="text-base text-foreground hover:text-foreground/65">
                      Linkedin
                    </h2>
                  </Link>

                  <Link
                    href="https://github.com/IvanKorne"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="text-foreground hover:text-foreground/65 transition-colors size-7" />
                    <h2 className="text-base text-foreground hover:text-foreground/65">
                      Github
                    </h2>
                  </Link>

                  <Link
                    href="https://ivankorne.vercel.app/"
                    className="flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PanelTop className="text-foreground hover:text-foreground/65 transition-colors size-7" />
                    <h2 className="text-base text-foreground hover:text-foreground/65">
                      Portfolio
                    </h2>
                  </Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileNav;
