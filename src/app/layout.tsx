import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Roberto Torres - Portfolio",
  description: "My personal portfolio showcasing my skills and projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} `}>
      <body className="bg-gray-100 text-gray-900 font-sans mt-4">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
