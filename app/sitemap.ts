import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://your-domain.vercel.app",
    },
    {
      url: "https://your-domain.vercel.app/features",
    },
    {
      url: "https://your-domain.vercel.app/pricing",
    },
    {
      url: "https://your-domain.vercel.app/blog",
    },
    {
      url: "https://your-domain.vercel.app/contact",
    },
  ];
}
