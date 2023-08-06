import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Edu Arcanjo • Portifólio",
  description: "Um portifólio com meus principais trabalhos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="!scroll-smooth bg-slate-50">
      <body className={outfit.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
