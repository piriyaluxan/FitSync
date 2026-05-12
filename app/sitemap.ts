import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fit-sync.vercel.app",
    },
    {
      url: "https://fit-sync.vercel.app/features",
    },
    {
      url: "https://fit-sync.vercel.app/pricing",
    },
    {
      url: "https://fit-sync.vercel.app/blog",
    },
    {
      url: "https://fit-sync.vercel.app/contact",
    },
  ];
}
