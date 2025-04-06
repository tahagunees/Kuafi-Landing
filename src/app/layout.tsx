import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Randevue.ai | WhatsApp Üzerinden Çalışan Randevu Asistanınız",
  description: "WhatsApp üzerinden 7/24 otomatik randevu alan, iptal ve değişiklik yapabilen, müşterilerinize hatırlatma mesajları gönderen yapay zeka asistanınız.",
  keywords: "whatsapp randevu, online randevu sistemi, kuaför randevu, otomatik randevu, whatsapp asistan, yapay zeka asistan, randevu otomasyonu, randevue.ai",
  openGraph: {
    title: "Randevue.ai | WhatsApp Üzerinden Çalışan Randevu Asistanınız",
    description: "WhatsApp üzerinden 7/24 otomatik randevu alan, iptal ve değişiklik yapabilen, müşterilerinize hatırlatma mesajları gönderen yapay zeka asistanınız.",
    url: "https://randevue.ai",
    siteName: "randevue.ai",
    images: [
      {
        url: "https://randevue.ai/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "randevue.ai WhatsApp Randevu Asistanı",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Randevue.ai | WhatsApp Üzerinden Çalışan Randevu Asistanınız",
    description: "WhatsApp üzerinden 7/24 otomatik randevu alan, iptal ve değişiklik yapabilen, müşterilerinize hatırlatma mesajları gönderen yapay zeka asistanınız.",
    images: ["https://randevue.ai/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://randevue.ai",
    languages: {
      "tr-TR": "https://randevue.ai",
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
