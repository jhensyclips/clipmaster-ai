
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClipMaster AI",
  description: "Tu estudio inteligente de creación de clips",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
