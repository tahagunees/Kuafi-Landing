"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt, FaUserShield, FaDatabase, FaGlobe, FaLock } from "react-icons/fa";

export default function KVKK() {
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
                <FaShieldAlt className="text-[#25D366] text-3xl" />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">KVKK Aydınlatma Metni</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında Aydınlatma Metni
              </p>
              <p className="text-sm text-gray-500 mt-4">Son güncelleme: 17 Haziran 2025</p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Veri Sorumlusu */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaUserShield className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">1. Veri Sorumlusu</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz; 
                    veri sorumlusu olarak Kuafi Teknoloji A.Ş. tarafından aşağıda açıklanan kapsamda işlenebilecektir.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Veri Sorumlusu Bilgileri</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Şirket: Kuafi Teknoloji A.Ş.</li>
                      <li>Adres: Maslak, Büyükdere Cad. No:123, Sarıyer/İstanbul</li>
                      <li>E-posta: kvkk@kuafi.com</li>
                      <li>Tel: +90 (555) 123 4567</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Toplanan Veriler */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaDatabase className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">2. İşlenen Kişisel Veriler</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Kimlik Bilgileri</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Ad ve soyad</li>
                      <li>T.C. Kimlik numarası (gerekli durumlarda)</li>
                      <li>Doğum tarihi</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">İletişim Bilgileri</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Telefon numarası</li>
                      <li>E-posta adresi</li>
                      <li>İşletme adresi</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">İşlem Bilgileri</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Randevu bilgileri</li>
                      <li>Hizmet kullanım verileri</li>
                      <li>Ödeme bilgileri</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* İşleme Amaçları */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaGlobe className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">3. Kişisel Verilerin İşlenme Amaçları</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Temel Amaçlar</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Randevu yönetim hizmetinin sağlanması</li>
                      <li>Müşteri ilişkilerinin yönetimi</li>
                      <li>Hizmet kalitesinin iyileştirilmesi</li>
                      <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">İkincil Amaçlar</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Hizmet geliştirme ve iyileştirme</li>
                      <li>İstatistiksel analizler</li>
                      <li>Bilgilendirme ve pazarlama (izin dahilinde)</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Veri Güvenliği */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaLock className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">4. Veri Güvenliği ve Haklarınız</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Güvenlik Önlemleri</h3>
                    <p className="text-gray-600">
                      Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tüm tedbirleri alıyoruz:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                      <li>SSL/TLS şifreleme</li>
                      <li>Güvenlik duvarları</li>
                      <li>Erişim kontrolleri</li>
                      <li>Düzenli güvenlik testleri</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">KVKK Kapsamındaki Haklarınız</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                      <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                      <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                      <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                      <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
                      <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini isteme</li>
                    </ul>
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
                    KVKK kapsamındaki haklarınızı kullanmak için bizimle iletişime geçebilirsiniz:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        <strong>E-posta:</strong> kvkk@kuafi.com
                      </p>
                      <p className="text-gray-600">
                        <strong>Adres:</strong> Maslak, Büyükdere Cad. No:123, Sarıyer/İstanbul
                      </p>
                      <p className="text-gray-600">
                        <strong>Telefon:</strong> +90 (555) 123 4567
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Bu aydınlatma metni son olarak 17 Haziran 2025 tarihinde güncellenmiştir.
                    Metinde yapılacak önemli değişiklikler hakkında sizi bilgilendireceğiz.
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