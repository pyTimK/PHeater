import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PHeater",
  description: "A web-interface for the portable-heater device",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/img/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} bg-midnight text-white content-center mx-auto p-4`}
      >
        {children}
      </body>
    </html>
  );
}
