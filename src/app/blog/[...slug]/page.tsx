import { posts } from "#site/content";
import { getPostFromParams } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";
import { MDXContent } from "@/components/MDXComponent";

export type PostPageParams = {
  params: {
    slug: string[];
  };
};

export async function generateStaticParams(): Promise<
  PostPageParams["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

const PostPage = async ({ params }: PostPageParams) => {
  const post = await getPostFromParams(params);
  if (!post || !post.published) {
    notFound();
  }

  return (
    <section className="py-6 container prose dark:prose-invert max-w-3xl mx-auto">
      <h1 className="mb-2 text-3xl md:text-4xl font-semibold">{post.title}</h1>
      {post.description ? (
        <p className="text-muted-foreground text-xl mt-0 font-medium">
          {post.description}
        </p>
      ) : null}
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </section>
  );
};

export default PostPage;
