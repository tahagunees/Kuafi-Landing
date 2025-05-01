import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kuafi | WhatsApp Üzerinden Çalışan Randevu Asistanınız",
  description: "WhatsApp üzerinden 7/24 otomatik randevu alan, iptal ve değişiklik yapabilen, müşterilerinize hatırlatma mesajları gönderen yapay zeka asistanınız.",
  keywords: "whatsapp randevu, online randevu sistemi, kuaför randevu, otomatik randevu, whatsapp asistan, yapay zeka asistan, randevu otomasyonu, kuafi",
  openGraph: {
    title: "Kuafi | WhatsApp Üzerinden Çalışan Randevu Asistanınız",
    description: "WhatsApp üzerinden 7/24 otomatik randevu alan, iptal ve değişiklik yapabilen, müşterilerinize hatırlatma mesajları gönderen yapay zeka asistanınız.",
    url: "https://kuafi.com",
    siteName: "kuafi.com",
    images: [
      {
        url: "https://kuafi.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kuafi WhatsApp Randevu Asistanı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuafi | WhatsApp Üzerinden Çalışan Randevu Asistanınız",
    description: "WhatsApp üzerinden 7/24 otomatik randevu alan, iptal ve değişiklik yapabilen, müşterilerinize hatırlatma mesajları gönderen yapay zeka asistanınız.",
    images: ["https://kuafi.com/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://kuafi.com",
    languages: {
      "tr-TR": "https://kuafi.com",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
