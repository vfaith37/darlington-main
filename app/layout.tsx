// src/app/layout.tsx or src/pages/_app.tsx (based on your project structure)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-satoshi">
      <body className={inter.className}>
        <Header />
        <div className="pt-16 bg-white text-black">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
