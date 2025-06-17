"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt, FaGavel, FaUserLock, FaCreditCard, FaExclamationTriangle } from "react-icons/fa";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-6">
                <FaArrowLeft className="mr-2" />
                Ana Sayfaya Dön
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Kuafi<span className="text-[#25D366]">.com</span></h1>
            </div>
          </div>
        </div>
      </header>

      <main className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="bg-[#e1f5e9] h-20 w-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FaGavel className="text-[#25D366] text-3xl" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Kullanım Koşulları</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kuafi.com hizmetlerini kullanırken uymanız gereken kurallar ve şartlar.
              </p>
              <p className="text-sm text-gray-500 mt-4">Son güncelleme: 17 Haziran 2025</p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Genel Koşullar */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaShieldAlt className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">1. Genel Koşullar</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Bu kullanım koşulları, Kuafi.com hizmetlerini kullanırken uymanız gereken kuralları ve şartları belirler. 
                    Hizmetlerimizi kullanarak bu koşulları kabul etmiş sayılırsınız.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Hizmet Kapsamı</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>WhatsApp üzerinden randevu yönetimi</li>
                      <li>Yapay zeka destekli müşteri iletişimi</li>
                      <li>Takvim entegrasyonu</li>
                      <li>İşletme yönetim araçları</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Kullanıcı Sorumlulukları */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaUserLock className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">2. Kullanıcı Sorumlulukları</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Hesap Güvenliği</h3>
                    <p className="text-gray-600">
                      Hesap bilgilerinizin güvenliğinden siz sorumlusunuz. Şüpheli bir durum fark ederseniz hemen bizimle iletişime geçin.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Yasaklı Kullanımlar</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Spam veya istenmeyen mesaj gönderimi</li>
                      <li>Yasadışı veya etik olmayan faaliyetler</li>
                      <li>Sistemin kötüye kullanımı</li>
                      <li>Başkalarının haklarını ihlal eden davranışlar</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Ödeme ve İptal */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaCreditCard className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">3. Ödeme ve İptal Koşulları</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Ödeme Koşulları</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Aylık veya yıllık abonelik seçenekleri</li>
                      <li>Otomatik yenileme özelliği</li>
                      <li>Güvenli ödeme altyapısı</li>
                      <li>KDV dahil fiyatlandırma</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">İptal ve İade</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>14 gün içinde iade hakkı</li>
                      <li>İstediğiniz zaman iptal edebilme</li>
                      <li>Kullanılmayan süre için iade</li>
                      <li>İptal sonrası dönem sonu kadar kullanım</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Sorumluluk Reddi */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaExclamationTriangle className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">4. Sorumluluk Reddi</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Kuafi.com, hizmetlerinin kesintisiz ve hatasız çalışacağını garanti etmez. Hizmet kaynaklı 
                    oluşabilecek zararlardan, yasaların izin verdiği ölçüde sorumlu değildir.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Sınırlı Sorumluluk</h3>
                    <p className="text-gray-600">
                      Herhangi bir durumda Kuafi.com'un sorumluluğu, son 12 ayda ödediğiniz hizmet bedelini aşamaz.
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Mücbir Sebepler</h3>
                    <p className="text-gray-600">
                      Doğal afetler, savaş, terör, salgın hastalık gibi mücbir sebeplerden kaynaklanan kesinti ve 
                      aksaklıklardan Kuafi.com sorumlu tutulamaz.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* İletişim */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Bu kullanım koşulları hakkında sorularınız için bizimle iletişime geçebilirsiniz:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        <strong>E-posta:</strong> legal@kuafi.com
                      </p>
                      <p className="text-gray-600">
                        <strong>Adres:</strong> Maslak, Büyükdere Cad. No:123, Sarıyer/İstanbul
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Bu kullanım koşulları son olarak 17 Haziran 2025 tarihinde güncellenmiştir.
                    Koşullarda yapılacak önemli değişiklikler hakkında sizi bilgilendireceğiz.
                  </p>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 