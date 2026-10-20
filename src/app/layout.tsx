import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const heading = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "SentinelStack — Less noise. More control.",
  description: "Clarity across your security landscape. Explore SentinelStack, a cybersecurity SaaS portfolio concept with an interactive simulated security dashboard.",
  applicationName: "SentinelStack",
  openGraph: {
    title: "SentinelStack — Less noise. More control.",
    description: "A new perspective on security. An interactive cybersecurity SaaS portfolio concept.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/images/og-card.png", width: 1200, height: 630, alt: "SentinelStack: Less noise. More control. Cybersecurity SaaS concept." }],
  },
  twitter: { card: "summary_large_image", title: "SentinelStack — Less noise. More control.", description: "Explore an interactive cybersecurity SaaS portfolio concept.", images: ["/images/og-card.png"] },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { themeColor: "#080e15", colorScheme: "dark" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${heading.variable} ${body.variable} ${mono.variable}`}><body>{children}</body></html>;
}
