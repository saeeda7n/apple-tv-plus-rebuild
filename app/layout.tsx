import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ProvidersLayout from "@/components/providers";

const roboto = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Apple TV+ | Rebuild",
  description: "A Rebuild version of Apple TV+",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ProvidersLayout>
        <body className={roboto.className}>
          <Header />
          {children}
          <footer></footer>
        </body>
      </ProvidersLayout>
    </html>
  );
}
