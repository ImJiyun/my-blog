// app/posts/[...slug]/page.tsx

import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { formatDate } from "@/lib/utils";
import { Calendar } from "lucide-react";
import { notFound } from "next/navigation";

// Params 타입이 Promise<{ slug: string[] }> 라는 가정 하에
type Params = Promise<{ slug: string[] }>;

async function getPostFromParams(paramsPromise: Params) {
  const params = await paramsPromise;
  const slug = params.slug.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);
  return post;
}

export async function generateStaticParams(): Promise<Awaited<Params>[]> {
  return posts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostDetailPage({ params }: { params: Params }) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <div className="container py-6 prose dark:prose-invert max-w-3xl mx-auto items-center gap-3">
      <h1 className="mb-2 text-blue-500 text-2xl sm:text-3xl">{post.title}</h1>
      {post.description ? (
        <p className="text-xl mt-0 text-muted-foreground">{post.description}</p>
      ) : null}
      <div className="flex items-center gap-3">
        <Calendar className="h-4 w-4" />
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </div>
  );
}
