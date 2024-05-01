import { posts } from "#site/content";
import PostItem from "@/components/PostItem";
import QueryPagination from "@/components/QueryPagination";
import { formatDate, sortPosts } from "@/lib/utils";
import React from "react";

const POSTS_PER_PAGE = 5;
type BlogPageProps = {
  searchParams: {
    page?: string;
  };
};

const BlogPage = ({ searchParams }: BlogPageProps) => {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  return (
    <div className="max-w-4xl container py-6 lg:py-16">
      <div className="w-full flex flex-col gap-5 md:justify-between md:flex-row">
        <div className="flex-1 gap-4 flex flex-col ">
          <h1 className="text-4xl md:text-5xl font-bold ">Blog</h1>
          <p className="text-muted-foreground text0lg">
            My personal blog where I talk all about web dev, university and
            anything that&apos;s on my mind!
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {displayPosts.map((posts) => {
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
      <QueryPagination totalPages={totalPages} className="justify-end mt-4" />
    </div>
  );
};

export default BlogPage;
