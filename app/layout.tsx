import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

import { ColorSchemeScript, MantineProvider } from "@mantine/core";

import Navbar from "@/components/common/Navbar";

export const metadata: Metadata = {
  title: "Fotmob",
  description: "Fotmob clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${inter.className} relative text-white bg-black`}>
        <MantineProvider>
          <Navbar />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
