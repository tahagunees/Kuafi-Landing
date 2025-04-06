"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCheck, FaBell, FaRobot, FaMobileAlt, FaStar, FaStarHalfAlt, FaCalendarCheck, FaPaperPlane } from "react-icons/fa";

export default function Home() {
  // Smooth scroll özelliğini aktifleştir
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Component unmount olduğunda smooth scroll özelliğini kaldır
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  // Scroll to section fonksiyonu (menü bağlantıları için)
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white">
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="w-full bg-[#25D366] text-white py-2 px-4 text-center">
          <p className="text-sm font-medium">📢 7 GÜN ÜCRETSİZ DENEYİN - Kredi kartı gerekmez! | <span className="underline">Özel lansman indirimi: %20 tasarruf</span></p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Randevue<span className="text-[#25D366]">.ai</span></h1>
            </div>
            <nav className="hidden md:flex space-x-1">
              <button 
                onClick={() => scrollToSection('features')}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100"
              >
                Özellikler
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100"
              >
                Nasıl Çalışır?
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-700 hover:bg-gray-100"
              >
                Fiyatlandırma
              </button>
            </nav>
            <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md font-medium transition-colors">
              7 Gün Ücretsiz Dene
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4 flex items-center">
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Yeni</span>
                <span className="inline-flex items-center text-sm text-gray-500">
                  <span className="flex -space-x-1 mr-2">
                    <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" alt="User" />
                    <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" alt="User" />
                    <img className="w-6 h-6 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" alt="User" />
                  </span>
                  500+ berber tarafından tercih ediliyor
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
                WhatsApp'tan <span className="text-[#25D366]">Otomatik Randevu</span> Alın. Kolay. Hızlı. Akıllı.
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Berberler, güzellik merkezleri ve kuaförler için AI destekli randevu asistanı.
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src="https://i.pravatar.cc/100?img=4" alt="Testimonial" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">"3 aydır kullanıyorum, randevularım %40 arttı ve asla bir randevuyu kaçırmıyorum!"</p>
                    <p className="mt-1 text-sm font-medium text-gray-900">- Ahmet Kuaför, İstanbul</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <FaWhatsapp className="mr-2" /> Hemen WhatsApp'tan Deneyin
                </motion.button>
                <p className="text-sm text-gray-500 flex items-center mt-2 sm:mt-0">
                  <FaCheck className="text-[#25D366] mr-2" /> 7 gün ücretsiz dene, kart gerekmez
                </p>
              </div>
              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-1 text-[#4285F4]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.5,6v12c0,1.1-0.9,2-2,2h-14c-1.1,0-2-0.9-2-2V6c0-1.1,0.9-2,2-2h14C20.6,4,21.5,4.9,21.5,6z M9.8,12H11v-1.5h-1.2V12z M13,12h1.2v-1.5H13V12z M16.2,12h1.2v-1.5h-1.2V12z M6.5,12h1.2v-1.5H6.5V12z M9.8,15.5H11V14H9.8V15.5z M13,15.5h1.2V14H13V15.5z M16.2,15.5h1.2V14h-1.2V15.5z M6.5,15.5h1.2V14H6.5V15.5z M9.8,8.5H11V7H9.8V8.5z M13,8.5h1.2V7H13V8.5z M16.2,8.5h1.2V7h-1.2V8.5z M6.5,8.5h1.2V7H6.5V8.5z" />
                  </svg>
                  <span className="text-xs text-gray-500">Google Takvim</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-1 text-[#25D366]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.964 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885 2.654 0 5.145 1.035 7.021 2.91 1.875 1.859 2.909 4.35 2.909 6.99-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
                  </svg>
                  <span className="text-xs text-gray-500">WhatsApp API</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 mr-1 text-[#6772E5]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
                  </svg>
                  <span className="text-xs text-gray-500">Güvenli Ödeme</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto w-[280px] h-[560px] md:w-[320px] md:h-[640px]">
                <div className="absolute inset-0 bg-[#25D366] rounded-[60px] opacity-10 transform rotate-6"></div>
                <div className="absolute inset-0 bg-gray-100 rounded-[50px] border-4 border-gray-200 overflow-hidden">
                  <div className="bg-[#00A884] h-16 w-full flex items-center px-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <FaWhatsapp className="text-white text-lg" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium text-white text-sm">Randevue.ai Asistanı</h3>
                      <p className="text-xs text-white/80">Çevrimiçi</p>
                    </div>
                  </div>
                  <div className="bg-[#ECE5DD] h-full p-4">
                    <div className="bg-white p-2 rounded-lg max-w-[80%] mb-3">
                      <p className="text-sm text-gray-800">Merhaba! Ben randevue.ai asistanı. Size nasıl yardımcı olabilirim?</p>
                      <p className="text-right text-xs text-gray-500 mt-1">10:30</p>
                    </div>
                    <div className="bg-[#DCF8C6] p-2 rounded-lg max-w-[80%] ml-auto mb-3">
                      <p className="text-sm text-gray-800">Merhaba, yarın için bir saç kesimi randevusu almak istiyorum</p>
                      <p className="text-right text-xs text-gray-500 mt-1">10:31</p>
                    </div>
                    <div className="bg-white p-2 rounded-lg max-w-[80%] mb-3">
                      <p className="text-sm text-gray-800">Tabii! Yarın için uygun saatlerimiz: 10:00, 14:30 ve 16:00. Hangisi size uygun?</p>
                      <p className="text-right text-xs text-gray-500 mt-1">10:31</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4 bg-white scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sunduğumuz Faydalar</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Neden Randevue.ai?</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="bg-[#e1f5e9] h-16 w-16 rounded-lg flex items-center justify-center mb-6">
                  <FaRobot className="text-[#25D366] text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Zaman Kazandırır</h3>
                <p className="text-gray-600">
                  Randevularınızı artık telefona cevap vererek değil, otomatik olarak alın.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="bg-[#e1f5e9] h-16 w-16 rounded-lg flex items-center justify-center mb-6">
                  <FaBell className="text-[#25D366] text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">%100 Müşteri Memnuniyeti</h3>
                <p className="text-gray-600">
                  Anında yanıt alan müşteriler daha memnun kalır ve sadık müşteriye dönüşür.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="bg-[#e1f5e9] h-16 w-16 rounded-lg flex items-center justify-center mb-6">
                  <FaMobileAlt className="text-[#25D366] text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Takvim Uyumu</h3>
                <p className="text-gray-600">
                  Google Takvim ve diğer takvim uygulamalarıyla tam entegrasyon.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="bg-[#e1f5e9] h-16 w-16 rounded-lg flex items-center justify-center mb-6">
                  <FaWhatsapp className="text-[#25D366] text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Hiçbir Mesajı Kaçırmazsın</h3>
                <p className="text-gray-600">
                  7/24 çalışan asistanınız sayesinde potansiyel müşterileri kaybetmeyin.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="bg-[#e1f5e9] h-16 w-16 rounded-lg flex items-center justify-center mb-6">
                  <FaMobileAlt className="text-[#25D366] text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Her Yerden Kontrol</h3>
                <p className="text-gray-600">
                  Mobil, web, tablet - tüm cihazlardan randevularınızı yönetin.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="bg-[#e1f5e9] h-16 w-16 rounded-lg flex items-center justify-center mb-6">
                  <FaCheck className="text-[#25D366] text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">%100 Türkçe Destekli</h3>
                <p className="text-gray-600">
                  Tamamen Türkçe anlaşma yeteneğiyle doğal konuşma akışı sağlar.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Success Metrics Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Başarı Metrikleri</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Randevue.ai kullanan işletmelerin gerçek sonuçları</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="text-5xl font-bold text-[#25D366] mb-4">%67</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Randevu Doluluk Artışı</h3>
                <p className="text-gray-600">
                  Boş randevu saatleri azalır, iş hacminiz artar
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="text-5xl font-bold text-[#25D366] mb-4">%90</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Telefonda Zaman Kazancı</h3>
                <p className="text-gray-600">
                  Telefon aramalarını cevaplayarak kaybedilen süre azalır
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="text-5xl font-bold text-[#25D366] mb-4">%42</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Yeni Müşteri Artışı</h3>
                <p className="text-gray-600">
                  7/24 randevu alınabilmesi yeni müşteri kazanımını artırır
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="text-5xl font-bold text-[#25D366] mb-4">%78</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">İptal Oranı Azalışı</h3>
                <p className="text-gray-600">
                  Otomatik hatırlatmalar sayesinde daha az randevu iptali
                </p>
              </motion.div>
            </div>
            
            <div className="mt-12 bg-white p-6 rounded-xl shadow-sm">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <div className="w-24 h-24 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-3xl">
                    AK
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <p className="text-xl italic text-gray-700 mb-4">
                    "Randevue.ai ile çalışmaya başladıktan sonra telefonda geçirdiğim vakit %90 azaldı ve randevu doluluk oranim %67 arttı. Artık müşterilerime daha kaliteli hizmet verebiliyorum."
                  </p>
                  <p className="font-bold text-gray-800">Ahmet Kuaför</p>
                  <p className="text-gray-500">İstanbul, Kadıköy</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 px-4 scroll-mt-20 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nasıl Çalışır?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">3 Adımda Basit</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="bg-[#e1f5e9] h-20 w-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaWhatsapp className="text-[#25D366] text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Müşteri Yazıyor</h3>
                <p className="text-gray-600">
                  Müşterileriniz WhatsApp üzerinden size kolayca ulaşır.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="bg-[#e1f5e9] h-20 w-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaRobot className="text-[#25D366] text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Bot Cevaplıyor</h3>
                <p className="text-gray-600">
                  AI destekli asistan randevuları otomatik oluşturur.
                </p>
              </motion.div>
              
              <motion.div 
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="bg-[#e1f5e9] h-20 w-20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaBell className="text-[#25D366] text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Takvime İşleniyor</h3>
                <p className="text-gray-600">
                  Randevu otomatik olarak takviminize eklenir.
                </p>
              </motion.div>
            </div>
            
            {/* Video Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 flex justify-center"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm max-w-sm">
                <div className="aspect-[9/16] relative">
                  <video 
                    ref={(el) => {
                      if (el) {
                        const observer = new IntersectionObserver(
                          ([entry]) => {
                            if (entry.isIntersecting) {
                              el.play().catch(e => console.log("Otomatik oynatma başlatılamadı:", e));
                            } else {
                              el.pause();
                            }
                          },
                          { threshold: 0.6 }
                        );
                        observer.observe(el);
                        return () => observer.disconnect();
                      }
                    }}
                    className="w-full h-full object-cover"
                    controls
                    poster="/video-thumbnail.jpg"
                    playsInline
                    muted
                    loop
                  >
                    <source src="/videos/randevue-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-4 bg-white text-center">
                  <p className="text-[#25D366] font-medium">Randevue.ai'yi 45 saniyede keşfedin</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-gray-50 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full mb-3">⏳ Özel Teklif: %20 İndirim - Son Gün!</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Fiyatlandırma Planları</h2>
              <p className="text-xl text-gray-600">İşletmenize en uygun planı seçin</p>
            </div>
            
            {/* Plan Comparison Table */}
            <div className="mb-12 overflow-x-auto rounded-lg shadow-sm hidden md:block">
              <table className="w-full text-sm text-left text-gray-700">
                <thead className="text-xs uppercase bg-gray-100">
                  <tr>
                    <th scope="col" className="px-6 py-3">Özellikler</th>
                    <th scope="col" className="px-6 py-3 text-center">Randevue.ai</th>
                    <th scope="col" className="px-6 py-3 text-center">Rakip X</th>
                    <th scope="col" className="px-6 py-3 text-center">Rakip Y</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">WhatsApp API</td>
                    <td className="px-6 py-4 text-center text-[#25D366]">✓</td>
                    <td className="px-6 py-4 text-center text-red-500">✗</td>
                    <td className="px-6 py-4 text-center text-[#25D366]">✓</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Türkçe Dil Desteği</td>
                    <td className="px-6 py-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="px-6 py-4 text-center">⭐⭐⭐</td>
                    <td className="px-6 py-4 text-center">⭐⭐</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Takvim Entegrasyonları</td>
                    <td className="px-6 py-4 text-center text-[#25D366]">✓</td>
                    <td className="px-6 py-4 text-center text-[#25D366]">✓</td>
                    <td className="px-6 py-4 text-center text-red-500">✗</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium">7/24 Türkçe Destek</td>
                    <td className="px-6 py-4 text-center text-[#25D366]">✓</td>
                    <td className="px-6 py-4 text-center text-red-500">✗</td>
                    <td className="px-6 py-4 text-center text-red-500">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Free Plan */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:border-[#25D366] transition-all"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800">🎉 Ücretsiz Plan</h3>
                  <p className="text-gray-600 mt-2">Başlangıç için ideal</p>
                  
                  <div className="mt-6 mb-6">
                    <span className="text-5xl font-bold text-gray-800">0₺</span>
                    <span className="text-gray-600">/aylık</span>
                  </div>
                  
                  <button 
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg py-3 font-medium transition-all duration-300"
                  >
                    Başla
                  </button>
                </div>
                
                <div className="bg-gray-50 p-8">
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>30 günlük deneme</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>100 mesaj / ay</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>Email desteği</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Standard Plan */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-[#25D366] relative z-10 md:-mt-4 md:mb-4"
              >
                <div className="bg-[#25D366] text-white py-2 text-center text-sm font-medium">
                  ÖNERİLEN
                </div>
                <div className="p-8 bg-gradient-to-br from-white to-[#f0f7f4]">
                  <h3 className="text-xl font-bold text-gray-800">💼 Standart Plan</h3>
                  <p className="text-gray-600 mt-2">Küçük ve orta işletmeler için</p>
                  
                  <div className="mt-6 mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-500 line-through mr-2">375₺</span>
                      <span className="text-5xl font-bold text-gray-800">299₺</span>
                      <span className="text-gray-600">/aylık</span>
                    </div>
                    <p className="text-center text-sm text-red-500 mt-1">%20 indirim - sınırlı süre!</p>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: '#128C7E' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg py-3 font-medium transition-all duration-300"
                  >
                    Hemen Başla
                  </motion.button>
                </div>
                
                <div className="bg-gray-50 p-8">
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>Sınırsız mesaj</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>Özel takvim entegrasyonu</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>Marka özelleştirmeleri</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>WhatsApp desteği</span>
                    </li>
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <p className="text-gray-500 text-sm">WhatsApp mesaj maliyetleri ($0.0055/mesaj) sizin tarafınızdan karşılanır. Detaylı bilgi için <a href="#" className="text-[#25D366] hover:underline">tıklayın</a>.</p>
                    </div>
                  </ul>
                </div>
              </motion.div>
              
              {/* Pro Plan */}
              <motion.div 
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 hover:border-[#25D366] transition-all"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-800">👑 Premium Plan</h3>
                  <p className="text-gray-600 mt-2">Büyük işletmeler ve zincirler için</p>
                  
                  <div className="mt-6 mb-6">
                    <div className="flex items-center justify-center">
                      <span className="text-lg font-bold text-gray-500 line-through mr-2">749₺</span>
                      <span className="text-5xl font-bold text-gray-800">599₺</span>
                      <span className="text-gray-600">/aylık</span>
                    </div>
                    <p className="text-center text-sm text-red-500 mt-1">%20 indirim - sınırlı süre!</p>
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, backgroundColor: 'black' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gray-900 hover:bg-black text-white rounded-lg py-3 font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    <FaWhatsapp className="mr-2" /> İletişime Geç
                  </motion.button>
                </div>
                
                <div className="bg-gray-50 p-8">
                  <ul className="space-y-4">
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>Tüm özellikler +</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>WhatsApp Business API kurulumu</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>7/24 destek</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span>Öncelikli destek</span>
                    </li>
                    <li className="flex items-center text-gray-600">
                      <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
                      <span className="font-medium">İlk 1000 mesaj bizden! (Değer: $50)</span>
                    </li>
                    <div className="mt-4 border-t border-gray-200 pt-4">
                      <p className="text-gray-500 text-sm">Premium pakette WhatsApp mesaj maliyetleri bizim tarafımızdan karşılanır.</p>
                    </div>
                  </ul>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-12 bg-white rounded-lg border p-4 shadow-sm">
              <h4 className="text-lg font-semibold mb-2">WhatsApp Mesaj Ücretleri Hakkında</h4>
              <p className="text-gray-600 mb-4">WhatsApp mesaj ücretleri sizden gizlenmez! WhatsApp Business API kullanımı için Meta tarafından her mesaj başına ücret alınmaktadır.</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium">Standart Pakette</p>
                  <p className="text-sm text-gray-500">WhatsApp mesaj maliyetleri ($0.0055/mesaj) sizin tarafınızdan karşılanır.</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="font-medium">Premium Pakette</p>
                  <p className="text-sm text-gray-500">WhatsApp mesaj maliyetleri tarafımızdan karşılanır + ilk 1000 mesaj bizden!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
                İşletmenize <span className="text-[#25D366]">WhatsApp Asistanı</span> Eklemek İçin Hazır mısınız?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Daha az iş, daha çok randevu. Müşterilerinize 7/24 yanıt veren asistanınız ile işinizi büyütün.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium text-lg py-3 px-8 rounded-lg transition-colors inline-flex items-center"
              >
                <FaWhatsapp className="mr-2" /> 7 Gün Ücretsiz Deneyin
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-[#f0f7f4] rounded-2xl p-10 shadow-sm"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Canlı Demo
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                    Tek tıkla botla konuşmaya başlayın ve randevue.ai'yi hemen deneyimleyin.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#25D366] hover:bg-[#128C7E] text-white font-medium text-lg py-3 px-8 rounded-lg transition-colors inline-flex items-center"
                    >
                      <FaWhatsapp className="mr-2" /> WhatsApp'tan Deneyin
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white border border-gray-300 hover:border-gray-400 text-gray-800 font-medium text-lg py-3 px-8 rounded-lg transition-colors"
                    >
                      Demo Almak İstiyorum
                    </motion.button>
                  </div>
                </div>
                
                <div className="mx-auto w-full max-w-[280px]">
                  <div className="relative w-[280px] h-[560px]">
                    <div className="absolute inset-0 bg-[#25D366] rounded-[60px] opacity-10 transform rotate-6"></div>
                    <div className="absolute inset-0 bg-gray-100 rounded-[50px] border-4 border-gray-200 overflow-hidden">
                      <div className="bg-[#00A884] h-16 w-full flex items-center px-4">
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                          <FaWhatsapp className="text-white text-lg" />
                        </div>
                        <div className="ml-3">
                          <h3 className="font-medium text-white text-sm">Randevue.ai Asistanı</h3>
                          <p className="text-xs text-white/80">Çevrimiçi</p>
                        </div>
                      </div>
                      
                      <div className="bg-[#ECE5DD] h-[calc(100%-4rem)] p-4 overflow-y-auto">
                        <div className="flex flex-col space-y-3">
                          <div className="bg-white p-2 rounded-lg max-w-[80%] mb-3">
                            <p className="text-sm text-gray-800">Merhaba! Ben randevue.ai asistanı. Size nasıl yardımcı olabilirim?</p>
                            <p className="text-right text-xs text-gray-500 mt-1">10:30</p>
                          </div>
                          <div className="bg-[#DCF8C6] p-2 rounded-lg max-w-[80%] ml-auto mb-3">
                            <p className="text-sm text-gray-800">Merhaba, yarın için bir saç kesimi randevusu almak istiyorum</p>
                            <p className="text-right text-xs text-gray-500 mt-1">10:31</p>
                          </div>
                          <div className="bg-white p-2 rounded-lg max-w-[80%] mb-3">
                            <p className="text-sm text-gray-800">Tabii! Yarın için uygun saatlerimiz: 10:00, 14:30 ve 16:00. Hangisi size uygun?</p>
                            <p className="text-right text-xs text-gray-500 mt-1">10:31</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sık Sorulan Sorular</h2>
              <p className="text-xl text-gray-600">Merak ettiğiniz soruların cevapları</p>
            </div>
            
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp API zor mu kurulur?</h3>
                <p className="text-gray-600">Hayır, Randevue.ai ile WhatsApp API kurulumu tamamen bizim tarafımızdan yapılır. Premium paketimizde WhatsApp Business API kurulumu ve entegrasyonu dahildir.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Deneme süresi ne kadar?</h3>
                <p className="text-gray-600">Tüm özelliklerimizi 7 gün boyunca ücretsiz deneyebilirsiniz. Deneme süresinde herhangi bir kredi kartı bilgisi istenmez.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Bot Türkçe mi?</h3>
                <p className="text-gray-600">Evet, botumuz %100 Türkçe destekli olup, Türkçe dil anlama ve işleme yeteneklerine sahiptir.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Takvim neye entegre oluyor?</h3>
                <p className="text-gray-600">Şu anda Google Takvim, Microsoft Outlook ve Apple Takvim entegrasyonlarını destekliyoruz. Ayrıca özel takvim sistemlerinize de entegrasyon sağlayabiliyoruz.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Eski randevularım ne oluyor?</h3>
                <p className="text-gray-600">Mevcut takvim sisteminizdeki tüm randevular korunur. Randevue.ai, mevcut randevularınıza saygı gösterecek şekilde çalışır.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Contact Section */}
        <section className="py-16 px-4 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full mb-3">
                Hemen İletişime Geç
              </span>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Hızlı İletişim ve Referanslar
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Türkiye'nin önde gelen 500+ işletmesi randevue.ai ile randevu sistemlerini otomatikleştiriyor
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Kullanıcılarımız Ne Diyor?
                </h3>

                {/* Testimonial Carousel */}
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-xl">
                        AK
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Ahmet Kuaför</h4>
                      <p className="text-gray-500 text-sm">İstanbul, Kadıköy</p>
                      <div className="flex text-yellow-400 mt-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <span className="text-gray-600 ml-2 text-sm">5.0</span>
                      </div>
                    </div>
                  </div>
                  <p className="italic text-gray-700 mb-3">
                    "Randevue.ai'yi kullanmaya başladıktan sonra boş randevu saatlerim %80 azaldı. Artık telefonla uğraşmak yerine müşterilerime odaklanabiliyorum."
                  </p>
                  <p className="text-gray-600 text-sm">
                    <FaCalendarCheck className="inline-block mr-1 text-[#25D366]" /> 4 aydır kullanıyor
                  </p>
                </div>

                <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                  <div className="flex mb-4">
                    <div className="mr-4">
                      <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold text-xl">
                        DG
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Deniz Güzellik</h4>
                      <p className="text-gray-500 text-sm">Ankara, Çankaya</p>
                      <div className="flex text-yellow-400 mt-1">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                        <span className="text-gray-600 ml-2 text-sm">4.5</span>
                      </div>
                    </div>
                  </div>
                  <p className="italic text-gray-700 mb-3">
                    "Müşterilerimiz WhatsApp üzerinden 7/24 randevu alabildiği için çok memnunlar. Özellikle hatırlatma mesajları iptal oranlarını ciddi şekilde azalttı."
                  </p>
                  <p className="text-gray-600 text-sm">
                    <FaCalendarCheck className="inline-block mr-1 text-[#25D366]" /> 6 aydır kullanıyor
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Bizimle İletişime Geçin</h3>
                
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      İsim Soyisim
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#25D366] focus:border-[#25D366] outline-none"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefon Numarası
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                        <FaWhatsapp className="text-[#25D366]" />
                      </span>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full pl-10 px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#25D366] focus:border-[#25D366] outline-none"
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-posta
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#25D366] focus:border-[#25D366] outline-none"
                      placeholder="ornek@domain.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                      İşletme Türü
                    </label>
                    <select
                      id="business"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#25D366] focus:border-[#25D366] outline-none"
                    >
                      <option value="">Seçiniz</option>
                      <option value="kuafor">Kuaför / Güzellik Salonu</option>
                      <option value="spa">SPA / Masaj Salonu</option>
                      <option value="diyetisyen">Diyetisyen</option>
                      <option value="doktor">Doktor / Klinik</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#25D366] focus:border-[#25D366] outline-none"
                      placeholder="Sorularınız veya detaylar..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg py-3 font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    <FaPaperPlane className="mr-2" /> Mesaj Gönder
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center mt-2">
                    Bilgileriniz KVKK kapsamında korunmaktadır. <a href="#" className="text-[#25D366] hover:underline">Gizlilik Politikamız</a>
                  </p>
                </form>
              </div>
            </div>

            {/* Trusted By Logos */}
            <div>
              <p className="text-center text-sm text-gray-500 mb-6">Referanslarımız</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
                <img src="/logo1.png" alt="Brand Logo" className="h-8 grayscale hover:grayscale-0 transition-all" />
                <img src="/logo2.png" alt="Brand Logo" className="h-8 grayscale hover:grayscale-0 transition-all" />
                <img src="/logo3.png" alt="Brand Logo" className="h-8 grayscale hover:grayscale-0 transition-all" />
                <img src="/logo4.png" alt="Brand Logo" className="h-8 grayscale hover:grayscale-0 transition-all" />
                <img src="/logo5.png" alt="Brand Logo" className="h-8 grayscale hover:grayscale-0 transition-all" />
                <img src="/logo6.png" alt="Brand Logo" className="h-8 grayscale hover:grayscale-0 transition-all" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-bold text-gray-900 mb-2">Randevue<span className="text-[#25D366]">.ai</span></h2>
              <p className="text-gray-600">WhatsApp üzerinden çalışan randevu asistanınız</p>
            </div>
            
            <div className="flex space-x-4 mb-6 md:mb-0">
              <a href="#" className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
                <span>F</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
                <span>I</span>
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-300 transition-colors">
                <span>L</span>
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <a href="mailto:info@randevue.ai" className="text-gray-600 hover:text-[#25D366] mb-2 transition-colors">
                info@randevue.ai
              </a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 hover:text-[#25D366] flex items-center transition-colors hover:scale-105"
              >
                <FaWhatsapp className="mr-2" /> WhatsApp Desteği
              </motion.a>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex justify-between items-center flex-wrap gap-4">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} randevue.ai. Tüm hakları saklıdır.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-500 hover:text-[#25D366] transition-colors">Gizlilik Politikası</a>
                <a href="#" className="text-gray-500 hover:text-[#25D366] transition-colors">Kullanım Koşulları</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
