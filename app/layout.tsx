import type { Metadata, Viewport } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fluedu | Gestion Educativa para Colegios",
  description:
    "Fluedu es la plataforma que digitaliza la gestion academica de colegios. Matriculas, calificaciones, asistencia, aulas virtuales y mas.",
  generator: "v0.app",
  keywords: [
    "educacion",
    "SaaS",
    "gestion academica",
    "colegios",
    "plataforma educativa",
    "Fluedu",
  ],
  icons: {
    icon: [
      {
        url: "/logo-fluedu.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo-fluedu.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo-fluedu.png",
        type: "image/png",
      },
    ],
    apple: "/logo-fluedu.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
