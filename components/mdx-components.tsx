import Image from "next/image";

export const mdxComponents = {
  img: (props: any) => (
    <Image
      {...props}
      width={800}
      height={400}
      className="rounded-xl my-6"
      alt={props.alt || ""}
    />
  ),

  h2: (props: any) => <h2 className="mt-10 text-2xl font-bold" {...props} />,

  h3: (props: any) => <h3 className="mt-8 text-xl font-semibold" {...props} />,

  p: (props: any) => (
    <p className="leading-7 text-muted-foreground" {...props} />
  ),

  code: (props: any) => (
    <code className="bg-muted px-1 py-0.5 rounded" {...props} />
  ),
};
