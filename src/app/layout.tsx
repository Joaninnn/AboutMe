import type { Metadata } from "next";
import { DM_Mono, Syne } from "next/font/google";
import "./globals.scss";
import LayoutClient from "./layout.client";

const dmMono = DM_Mono({ 
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono"
});

const syne = Syne({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne"
});

export const metadata: Metadata = {
  title: "Nurmuhammet Altybaev | Frontend Developer",
  description: "Frontend Developer specializing in React, Next.js, and TypeScript. 406-day GitHub contribution streak. Building clean, scalable web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmMono.variable} ${syne.variable}`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
