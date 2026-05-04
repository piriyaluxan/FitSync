import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Image from "next/image";

type BlogPost = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image?: string;
};

export default function BlogPage() {
  const posts = getAllPosts() as BlogPost[];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <p className="text-sm text-muted-foreground">{post.date}</p>
            <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
            <p className="text-sm mt-3 text-muted-foreground">
              {post.description}
            </p>
            {post.image && (
              <div className="relative w-full h-48 mt-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
