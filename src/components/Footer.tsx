import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full mb-14 mt-6 flex flex-col items-center gap-10 border-t border-border">
      <div className="mt-6 flex items-center gap-10">
        <Link href="mailto:ikorney@uwaterloo.ca">
          <Mail className="size-8 hover:opacity-75" />
        </Link>
        <Link
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ivan-korneychuk/"
        >
          <Linkedin className="size-8 hover:opacity-75" />
        </Link>
        <Link rel="noopener noreferrer" href="https://github.com/IvanKorne">
          <Github className="size-8 hover:opacity-75" />
        </Link>
      </div>
      <Link
        href="https://ivankorne.vercel.app/"
        className="text-base font-medium hover:underline"
      >
        Personal Portfolio
      </Link>
    </div>
  );
};

export default Footer;
