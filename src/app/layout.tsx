import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PwaRegister from "@/components/PwaRegister";
import InstallPWA from "@/components/InstallPWA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "MedicAI | Professional Medical Simulation Core",
  description: "Advanced clinical simulation environment for medical professionals. Master diagnosis and treatment in real-time scenarios.",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon.svg",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "MedicAI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased selection:bg-accent-primary/20">
        <PwaRegister />
        <InstallPWA />
        {children}
      </body>
    </html>
  );
}
