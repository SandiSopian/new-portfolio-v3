// app/layout.tsx
import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "../styles/globals.css";
import Navbar from "@/components/Nav/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Sandi Sopian - Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <body className="antialiased container mx-auto md:w-2/4">
        <Navbar />
        <div className="min-h-screen overflow-hidden pt-16">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
