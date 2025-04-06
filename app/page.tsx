import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-3 pt-3 md:px-20 px-5 md:pb-12 md:mt-10 lg:py-16 flex flex-col md:gap-20 gap-10">
        <div className="w-full flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m Jiyun
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Welcome to my blog. Built using tailwind, shadcn, velite and Nextjs
            15.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/posts"
              className={cn(
                buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "bg-blue-500 text-white",
                }),
                "w-full sm:w-fit"
              )}
            >
              View my posts
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center lg:flex-start">
            Latest Posts
          </h2>
          <ul className="flex flex-col">
            {latestPosts.map(
              (post) =>
                post.published && (
                  <li
                    key={post.slug}
                    className="first:border-t first:border-border"
                  >
                    <PostItem
                      slug={post.slug}
                      title={post.title}
                      description={post.description}
                      date={post.date}
                      tags={post.tags}
                    />
                  </li>
                )
            )}
          </ul>
        </div>
      </section>
    </>
  );
}
