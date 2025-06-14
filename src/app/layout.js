import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "VoteChain - Democracia digital Transparente y Segura",
  description:
    "VoteChain es la plataforma descentralizada que transforma la manera en que votamos. Utilizamos tecnología blockchain para asegurar transparencia, trazabilidad y confianza en cada elección.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
