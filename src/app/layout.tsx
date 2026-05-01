import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const display = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://troy.vercel.app"),
  title: {
    default: "Jhalen Troy L. Jose — Portfolio",
    template: "%s · Jhalen Troy L. Jose",
  },
  description:
    "Information-technology student crafting at the intersection of code, sound, and image — pianist, animator, photographer, cinematographer, video editor, programmer.",
  keywords: [
    "Jhalen Troy Jose",
    "Troy Jose",
    "BS Information Technology",
    "MMSU",
    "portfolio",
    "Logic Pro",
    "Blender",
    "Filipino developer",
    "OJT",
  ],
  authors: [{ name: "Jhalen Troy L. Jose" }],
  creator: "Jhalen Troy L. Jose",
  openGraph: {
    title: "Jhalen Troy L. Jose — Portfolio",
    description:
      "Pianist · Composer · Animator · Photographer · Cinematographer · Editor · Programmer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhalen Troy L. Jose — Portfolio",
    description:
      "Pianist · Composer · Animator · Photographer · Cinematographer · Editor · Programmer.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#121318" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${display.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
