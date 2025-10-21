import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/widgets/header";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
});

export const metadata: Metadata = {
  title: "Blog",
  description: "Personal development blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
