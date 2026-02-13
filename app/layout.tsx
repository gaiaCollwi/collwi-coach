import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CollWi for Coaches - Scale Your Impact with Group Coaching",
  description: "Join CollWi's community of certified coaches delivering transformative group coaching programs. Scale beyond 1:1 sessions while making a bigger impact.",
  keywords: "group coaching, certified coach, coaching practice, scale coaching business, community coaching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}
