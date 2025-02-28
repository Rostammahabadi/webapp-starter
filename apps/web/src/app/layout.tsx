import type { Metadata, Viewport } from "next";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
import { VercelAnalytics } from "@/lib/analytics/vercel";
import { geistMono, geistSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Providers } from "@/providers/providers";
// Removing Clerk import for simple waitlist page
// import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

export const metadata: Metadata = {
  title: "LivePulse - Real-time Polling & Quiz App",
  description: "Join the waitlist for LivePulse - the real-time polling & quiz app that transforms how conference presenters engage with their audience.",
};
interface RootLayoutProps {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // Removing ClerkProvider wrapper
    <html suppressHydrationWarning lang="en">
      <head>{/* <GoogleAnalytics gaId="G-2L23D2FV55" /> */}</head>

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistMono.variable,
          geistSans.variable,
        )}
      >
        <Providers attribute="class" defaultTheme="system" enableSystem>
          {children}
          <TailwindIndicator />
          <Toaster />
        </Providers>
        <VercelAnalytics />
      </body>
    </html>
  );
}
