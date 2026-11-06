import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prajwal Mhetre | Semiconductor, Embedded & Software Engineer",
  description:
    "Engineering portfolio of Prajwal Mhetre — Electronics & Communication student exploring semiconductor design, embedded systems, AI/ML, backend engineering and cloud-native software.",
  openGraph: {
    title: "Prajwal Mhetre | Engineering Portfolio",
    description: "Silicon, embedded systems, intelligent software and engineering projects.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
