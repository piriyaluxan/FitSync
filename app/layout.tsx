import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

export const metadata = {
  title: "FitSync",
  description: "Modern Gym Management SaaS",
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
