import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "FitSync - Gym Management SaaS",
    template: "%s | FitSync",
  },

  description:
    "Modern gym management SaaS for fitness businesses, trainers, and gyms.",

  keywords: [
    "Gym SaaS",
    "Fitness Management",
    "Gym Software",
    "Trainer Platform",
    "Next.js SaaS",
  ],

  authors: [{ name: "Piriyaluxan" }],

  metadataBase: new URL("https://fit-sync.vercel.app"),

  openGraph: {
    title: "FitSync",
    description: "Modern gym management SaaS platform for gyms and trainers.",
    url: "https://fit-sync.vercel.app",
    siteName: "FitSync",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FitSync",
    description: "Modern gym management SaaS platform for gyms and trainers.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
