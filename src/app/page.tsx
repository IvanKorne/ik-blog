import { posts } from "#site/content";
import PostItem from "@/components/PostItem";
import { Button } from "@/components/ui/button";
import { formatDate, sortPosts } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 3);
  return (
    <main className="max-w-4xl container py-6 lg:py-16">
      <div className="w-full items-center flex flex-col gap-16">
        <div className="items-center flex flex-col gap-5 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Hi, I&apos;m Ivan</h1>
          <p className="text-lg md:text-xl text-muted-foreground font-semibold text-center">
            My blog, where I talk about whatever is on my mind! Build using
            NextJS, Markdown, TailwindCSS, and Velite
          </p>
          <div className="flex items-center gap-2 mt-7">
            <Link href="/blog">
              <Button className="w-full">Visit My Blog</Button>
            </Link>
            <Link
              href="https://github.com/IvanKorne"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="w-full" variant={"ghost"}>
                View My Github
              </Button>
            </Link>
          </div>
        </div>
        <div className=" bg-gray-800 w-full h-[1px]" />

        <div className="w-full flex flex-col gap-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center underline">
            Latest Posts
          </h1>
          {latestPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {latestPosts.map((posts) => {
                const { slug, date, title, description } = posts;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={formatDate(date)}
                      title={title}
                      description={description}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <h1 className="font-semibold text-2xl md:text-3xl">
              Nothing to see here...
            </h1>
          )}
        </div>
      </div>
    </main>
  );
}
