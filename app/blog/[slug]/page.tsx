import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";

/* ✅ ADD SEO FUNCTION HERE (top level, outside component) */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post.title,
    description: post.description,
  };
}

/* Static generation */
export function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/* Page Component */
export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <article className="container mx-auto px-4 py-20 max-w-5xl grid lg:grid-cols-4 gap-10">
      {/* TOC */}
      <aside className="hidden lg:block col-span-1">
        <div className="sticky top-24">
          <h4 className="font-semibold mb-4">On this page</h4>
          <ul className="text-sm space-y-2 text-muted-foreground">
            {/* Static version (we improve later) */}
            <li>
              <a href="#build-a-strong-community">Build a Strong Community</a>
            </li>
            <li>
              <a href="#use-technology">Use Technology</a>
            </li>
            <li>
              <a href="#focus-on-retention">Focus on Retention</a>
            </li>
          </ul>
        </div>
      </aside>

      {/* CONTENT */}
      <div className="lg:col-span-3">
        {post.image && (
          <img src={post.image} className="rounded-2xl mb-8" alt="" />
        )}

        <p className="text-sm text-muted-foreground">{post.date}</p>

        <h1 className="text-4xl font-bold mt-2">{post.title}</h1>

        <p className="mt-6 text-lg text-muted-foreground">{post.description}</p>

        <div
          className="prose dark:prose-invert mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
