import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post, posts } from "#site/content";
import { PostPageParams } from "@/app/blog/[...slug]/page";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(str: string | number): string {
  const date = new Date(str);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    } else if (a.date < b.date) {
      return 1;
    } else {
      return 0;
    }
  });
}

export const getPostFromParams = async (params: PostPageParams["params"]) => {
  const slug = params?.slug.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
};
