import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Sidebar from "@/components/common/Sidebar";
import Header from "@/components/common/Header";

const interFont = localFont({
  variable: "--font-inter-sans",
  src: [
    { path: "./fonts/Inter_Thin.ttf", weight: "100" },
    { path: "./fonts/Inter_ExtraLight.ttf", weight: "200" },
    { path: "./fonts/Inter_Light.ttf", weight: "300" },
    { path: "./fonts/Inter_Regular.ttf", weight: "400" },
    { path: "./fonts/Inter_Medium.ttf", weight: "500" },
    { path: "./fonts/Inter_SemiBold.ttf", weight: "600" },
    { path: "./fonts/Inter_Bold.ttf", weight: "700" },
    { path: "./fonts/Inter_ExtraBold.ttf", weight: "800" },
    { path: "./fonts/Inter_Black.ttf", weight: "900" },
  ]
});

export const metadata: Metadata = {
  title: "Productivity Tracker",
  description: "Productivity Tracker with Next.js develop by Haris Amjad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${interFont.variable} font-[family-name:var(--font-inter-sans)] antialiased`}
      >
        <main className="flex items-start">
          <Sidebar />
          <div className="w-full">
            <Header />
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
