import Link from "next/link";
import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

type PostItemProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
};

const PostItem = ({ slug, title, description, date }: PostItemProps) => {
  return (
    <article className="px-1 py-3 flex flex-col border-border border-b gap-2">
      <Link className="text-2xl font-semibold" href={slug}>
        {title}
      </Link>

      <p className="font-medium text-base text-muted-foreground max-w-none">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="size-4" />
            <p>{date}</p>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(
            buttonVariants({ variant: "link" }),
            "py-8 flex items-center gap-1"
          )}
        >
          Read More <ArrowRight className="size-4" />
        </Link>
      </div>
    </article>
  );
};

export default PostItem;
