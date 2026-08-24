import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Reggie Omondi | Full-Stack & AI Engineer",
  description:
    "Full-Stack Developer specializing in Flutter, Go & Python. Building cross-platform mobile apps, backend services, and AI-powered systems from Nairobi, Kenya.",
  keywords: [
    "Flutter Developer",
    "Full-Stack Engineer",
    "AI Engineer",
    "Go Developer",
    "Python Developer",
    "Mobile Developer",
    "Nairobi Kenya",
    "Reggie Omondi",
  ],
  authors: [{ name: "Reggie Omondi" }],
  openGraph: {
    title: "Reggie Omondi | Full-Stack & AI Engineer",
    description:
      "Building elegant cross-platform apps, scalable backends, and AI-powered systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
