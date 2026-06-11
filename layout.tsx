import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vennix — Marketing That Drives Revenue",
  description:
    "Vennix is a premium digital marketing agency delivering SEO, content, paid media, and social strategies that turn attention into measurable revenue. 200+ campaigns, 4.8x average ROAS, $47M+ generated for clients.",
  keywords: [
    "digital marketing agency",
    "SEO",
    "paid media",
    "content marketing",
    "social media marketing",
    "Vennix",
  ],
  metadataBase: new URL("https://vennix.vercel.app"),
  openGraph: {
    title: "Vennix — Premium Growth Marketing",
    description:
      "Premium digital marketing agency. 200+ campaigns, 4.8x average ROAS, $47M+ generated.",
    type: "website",
    siteName: "Vennix",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vennix — Premium Growth Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vennix — Premium Growth Marketing",
    description:
      "Marketing that drives revenue — not vanity metrics. 200+ campaigns, 4.8x ROAS, $47M+ generated.",
    images: ["/og-image.png"],
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
        className={`${inter.variable} font-sans bg-base text-white antialiased selection:bg-violet/40 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
