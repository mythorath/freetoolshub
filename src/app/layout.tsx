import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FreeToolsHub - Powerful Tools. Zero Cost. Forever.",
  description: "Access professional-grade web tools without paying a dime. PDF converters, image optimizers, JSON formatters, and more. No subscriptions, no hidden fees.",
  keywords: ["free tools", "web tools", "PDF converter", "image optimizer", "JSON formatter", "online tools"],
  authors: [{ name: "FreeToolsHub Team" }],
  creator: "FreeToolsHub",
  publisher: "FreeToolsHub",
  metadataBase: new URL("https://freetoolshub.com"),
  openGraph: {
    title: "FreeToolsHub - Powerful Tools. Zero Cost. Forever.",
    description: "Access professional-grade web tools without paying a dime. No subscriptions, no hidden fees.",
    url: "https://freetoolshub.com",
    siteName: "FreeToolsHub",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FreeToolsHub - Free Web Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FreeToolsHub - Powerful Tools. Zero Cost. Forever.",
    description: "Access professional-grade web tools without paying a dime. No subscriptions, no hidden fees.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
