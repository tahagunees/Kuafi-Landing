"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt, FaUserShield, FaCookie, FaDatabase, FaEnvelope, FaUserCog, FaPaperPlane } from "react-icons/fa";

export default function PrivacyPolicy() {
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
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Gizlilik Politikası</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Kuafi.com olarak kişisel verilerinizin güvenliği bizim için önceliklidir. Bu politika, verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.
              </p>
              <p className="text-sm text-gray-500 mt-4">Son güncelleme: 17 Haziran 2025</p>
            </div>

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Veri Toplama */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaDatabase className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">1. Topladığımız Bilgiler</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Kişisel Bilgiler</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>kuafiapp@gmail.com</li>
                      <li>+90 505 007 98 55</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Otomatik Toplanan Bilgiler</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>IP adresi ve cihaz bilgileri</li>
                      <li>Tarayıcı türü ve sürümü</li>
                      <li>Sayfa görüntüleme istatistikleri</li>
                      <li>Hizmet kullanım verileri</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">WhatsApp Mesaj Verileri</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Müşteri randevu talepleri</li>
                      <li>Mesaj içerikleri (sadece randevu işlemleri için)</li>
                      <li>Mesaj zamanlamaları</li>
                      <li>Randevu durumu bilgileri</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Veri Kullanımı */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaUserShield className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">2. Verileri Nasıl Kullanırız</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Hizmet Sağlama</h3>
                    <p className="text-gray-600">
                      Randevu asistanı hizmetimizi sağlamak, randevuları yönetmek ve müşterilerinizle iletişim kurmak için verilerinizi kullanırız.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Hizmet İyileştirme</h3>
                    <p className="text-gray-600">
                      Hizmetlerimizi geliştirmek, yeni özellikler eklemek ve kullanıcı deneyimini artırmak için anonim kullanım verilerini analiz ederiz.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">İletişim</h3>
                    <p className="text-gray-600">
                      Önemli hizmet güncellemeleri, güvenlik bildirimleri ve destek hizmetleri için sizinle iletişim kurarız.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Yasal Yükümlülükler</h3>
                    <p className="text-gray-600">
                      Yasal gereklilikleri karşılamak, dolandırıcılığı önlemek ve güvenliği sağlamak için gerekli durumlarda verilerinizi kullanabiliriz.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Veri Paylaşımı */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaEnvelope className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">3. Veri Paylaşımı</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-[#25D366] pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Temel İlkemiz</h3>
                    <p className="text-gray-600">
                      Kişisel verilerinizi <strong>asla</strong> üçüncü taraflarla pazarlama amaçlı paylaşmayız, satmayız veya kiralamayız.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Sınırlı Paylaşım Durumları</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li><strong>Hizmet Sağlayıcılar:</strong> WhatsApp API, bulut depolama ve analitik hizmetleri</li>
                      <li><strong>Yasal Gereklilikler:</strong> Mahkeme kararı veya yasal zorunluluk durumunda</li>
                      <li><strong>Güvenlik:</strong> Dolandırıcılık veya güvenlik tehditleri durumunda</li>
                      <li><strong>İş Devri:</strong> Şirket satışı veya birleşme durumunda (önceden bildirimle)</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              {/* Çerezler */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaCookie className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">4. Çerezler ve Takip Teknolojileri</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Kullandığımız Çerezler</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Gerekli Çerezler</h4>
                        <p className="text-sm text-gray-600">Web sitesinin temel işlevlerini sağlar</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Analitik Çerezler</h4>
                        <p className="text-sm text-gray-600">Site kullanımını anlamamıza yardımcı olur</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Fonksiyonel Çerezler</h4>
                        <p className="text-sm text-gray-600">Tercihlerinizi hatırlar</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">Performans Çerezler</h4>
                        <p className="text-sm text-gray-600">Site performansını optimize eder</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Çerez Kontrolü</h3>
                    <p className="text-gray-600">
                      Tarayıcı ayarlarınızdan çerezleri kontrol edebilir, silebilir veya devre dışı bırakabilirsiniz. 
                      Ancak bu durumda bazı site özellikleri düzgün çalışmayabilir.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Veri Güvenliği */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaShieldAlt className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">5. Veri Güvenliği</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Güvenlik Önlemleri</h3>
                    <p className="text-gray-600">
                      Verilerinizi korumak için endüstri standardı güvenlik önlemleri kullanıyoruz:
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                      <li>SSL/TLS şifreleme</li>
                      <li>Güvenli veri depolama</li>
                      <li>Düzenli güvenlik denetimleri</li>
                      <li>Erişim kontrolü ve yetkilendirme</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Veri Saklama</h3>
                    <p className="text-gray-600">
                      Verilerinizi yalnızca gerekli olduğu sürece saklarız. Hesabınızı sildiğinizde, verileriniz 30 gün içinde tamamen silinir.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Kullanıcı Hakları */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaUserCog className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">6. Kullanıcı Hakları</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    KVKK kapsamında aşağıdaki haklara sahipsiniz:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Erişim Hakkı</h4>
                      <p className="text-sm text-gray-600">Verilerinize erişim ve kopya talep etme hakkı</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Düzeltme Hakkı</h4>
                      <p className="text-sm text-gray-600">Yanlış verilerin düzeltilmesini talep etme hakkı</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">Silme Hakkı</h4>
                      <p className="text-sm text-gray-600">Verilerinizin silinmesini talep etme hakkı</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">İtiraz Hakkı</h4>
                      <p className="text-sm text-gray-600">Veri işlemeye itiraz etme hakkı</p>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* İletişim */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaPaperPlane className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">7. İletişim</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Gizlilik politikamız hakkında sorularınız veya talepleriniz için bizimle iletişime geçebilirsiniz:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        <strong>E-posta:</strong> privacy@kuafi.com
                      </p>
                      <p className="text-gray-600">
                        <strong>Adres:</strong> [Şirket Adresi]
                      </p>
                      <p className="text-gray-600">
                        <strong>Telefon:</strong> [Telefon Numarası]
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Bu gizlilik politikası son olarak 17 Haziran 2025 tarihinde güncellenmiştir.
                    Politikada yapılacak önemli değişiklikler hakkında sizi bilgilendireceğiz.
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
