import { remark } from "remark";
import remarkParse from "remark-parse";
import { visit } from "unist-util-visit";

export async function extractHeadings(content: string) {
  const tree = remark().use(remarkParse).parse(content);

  const headings: { text: string; id: string; level: number }[] = [];

  visit(tree, "heading", (node: any) => {
    const text = node.children
      .filter((child: any) => child.type === "text")
      .map((child: any) => child.value)
      .join("");

    const id = text
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-");

    headings.push({
      text,
      id,
      level: node.depth,
    });
  });

  return headings;
}
