import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="sticky top-0 flex  bg-background/95 border-b border-border w-full backdrop-blur">
      <div className="container flex  items-center  p-4 gap-28">
        <Link href="/" className="items-center gap-2 flex">
          <Image src={logo} alt="Personal Logo" width={60} height={60} />
          <h1 className="text-2xl md:text-3xl font-semibold text-foreground hover:text-foreground/70">
            IKBlog
          </h1>
        </Link>
        <section className="w-full">
          <MainNav />
          <MobileNav />
        </section>
      </div>
    </header>
  );
};

export default Header;
