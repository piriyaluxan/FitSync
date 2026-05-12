import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { extractHeadings } from "./toc";

const blogDir = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  const files = fs.readdirSync(blogDir);

  return files.map((file) => {
    const slug = file.replace(".mdx", "");
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");

    const { data } = matter(fileContent);

    return {
      slug,
      ...(data as {
        title: string;
        description: string;
        date: string;
      }),
    };
  });
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(blogDir, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(source);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  const headings = await extractHeadings(source);

  return {
    slug,
    content: contentHtml,
    headings,
    ...(data as any),
  };
}
