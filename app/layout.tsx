import type { Metadata } from "next";
import {Exo, Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"], 
  weight: ["300", "400", "600", "700", "900"],
});

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin"], 
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Evaluation Task",
  description: "Evaluation task for Purple Dice company.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${exo.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
