import type { Metadata } from "next";
import { spaceGrotesk, rwDewiAlt } from "./ui/fonts";
import "./ui/globals.css";
import { Header, Footer } from "./(widgets)";

export const metadata: Metadata = {
  title: "BIRainy | Data analitikası, tətbiqlərin hazırlanması",
  description:
    "BIRainy - Data analitikası, tətbiqlərin hazırlanması, veb saytların hazırlanması, mobil tətbiqlərin hazırlanması",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} ${rwDewiAlt.variable} antialiased min-h-dvh flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
