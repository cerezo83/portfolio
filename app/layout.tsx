import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { asset } from "@/lib/basePath";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://cerezo83.github.io/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Carlos Cerezo — Network Security Engineer",
  description:
    "12+ years securing critical infrastructure — firewalls, SOC operations, cloud hardening — now building AI-augmented security workflows with Claude and Claude Code.",
  keywords: [
    "Carlos Cerezo",
    "Network Security Engineer",
    "Cybersecurity",
    "SOC",
    "Cloud Security",
    "AWS",
    "AI Security Automation",
    "Claude Code",
  ],
  authors: [{ name: "Carlos Cerezo" }],
  openGraph: {
    title: "Carlos Cerezo — Network Security Engineer",
    description:
      "12+ years securing critical infrastructure. Now engineering AI-augmented security workflows with Claude and Claude Code.",
    url: siteUrl,
    siteName: "Carlos Cerezo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Cerezo — Network Security Engineer",
    description:
      "12+ years securing critical infrastructure. Now engineering AI-augmented security workflows with Claude and Claude Code.",
  },
  icons: {
    icon: [{ url: asset("/favicon.svg"), type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-void font-body text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
