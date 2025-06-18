"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt, FaUserShield, FaCookie, FaDatabase, FaEnvelope, FaUserCog, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "../components/LanguageToggle";

export default function PrivacyPolicy() {
  const { t, isTransitioning } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-3 sm:mr-6">
                <FaArrowLeft className="mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t('privacyPolicy.backToHome')}</span>
                <span className="sm:hidden">Geri</span>
              </Link>
              <h1 className="text-lg sm:text-2xl font-bold text-gray-900">Kuafi<span className="text-[#25D366]">.com</span></h1>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </header>

      <motion.main 
        className="py-12 px-4"
        key={isTransitioning ? 'transitioning' : 'stable'}
        initial={{ opacity: isTransitioning ? 0.7 : 1 }}
        animate={{ opacity: isTransitioning ? 0.7 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Section */}
            <div className="text-center mb-8 sm:mb-12">
              <div className="bg-[#e1f5e9] h-16 w-16 sm:h-20 sm:w-20 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <FaShieldAlt className="text-[#25D366] text-2xl sm:text-3xl" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 px-4">{t('privacyPolicy.title')}</h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                {t('privacyPolicy.subtitle')}
              </p>
              <p className="text-sm text-gray-500 mt-4">{t('privacyPolicy.lastUpdated')}</p>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('privacyPolicy.dataCollection.title')}</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacyPolicy.dataCollection.personal')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('privacyPolicy.dataCollection.personalItem1')}</li>
                      <li>{t('privacyPolicy.dataCollection.personalItem2')}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacyPolicy.dataCollection.automatic')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('privacyPolicy.dataCollection.automaticItem1')}</li>
                      <li>{t('privacyPolicy.dataCollection.automaticItem2')}</li>
                      <li>{t('privacyPolicy.dataCollection.automaticItem3')}</li>
                      <li>{t('privacyPolicy.dataCollection.automaticItem4')}</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacyPolicy.dataCollection.whatsapp')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('privacyPolicy.dataCollection.whatsappItem1')}</li>
                      <li>{t('privacyPolicy.dataCollection.whatsappItem2')}</li>
                      <li>{t('privacyPolicy.dataCollection.whatsappItem3')}</li>
                      <li>{t('privacyPolicy.dataCollection.whatsappItem4')}</li>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('privacyPolicy.dataUsage.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('privacyPolicy.dataUsage.service')}</h3>
                    <p className="text-gray-600">
                      {t('privacyPolicy.dataUsage.serviceDescription')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('privacyPolicy.dataUsage.improvement')}</h3>
                    <p className="text-gray-600">
                      {t('privacyPolicy.dataUsage.improvementDescription')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('privacyPolicy.dataUsage.communication')}</h3>
                    <p className="text-gray-600">
                      {t('privacyPolicy.dataUsage.communicationDescription')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('privacyPolicy.dataUsage.legal')}</h3>
                    <p className="text-gray-600">
                      {t('privacyPolicy.dataUsage.legalDescription')}
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('privacyPolicy.dataSharing.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-[#25D366] pl-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('privacyPolicy.dataSharing.principle')}</h3>
                    <p className="text-gray-600">
                      {t('privacyPolicy.dataSharing.principleDescription')}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacyPolicy.dataSharing.limited')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('privacyPolicy.dataSharing.limitedItem1')}</li>
                      <li>{t('privacyPolicy.dataSharing.limitedItem2')}</li>
                      <li>{t('privacyPolicy.dataSharing.limitedItem3')}</li>
                      <li>{t('privacyPolicy.dataSharing.limitedItem4')}</li>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('privacyPolicy.cookies.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacyPolicy.cookies.types')}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">{t('privacyPolicy.cookies.necessary')}</h4>
                        <p className="text-sm text-gray-600">{t('privacyPolicy.cookies.necessaryDescription')}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">{t('privacyPolicy.cookies.analytics')}</h4>
                        <p className="text-sm text-gray-600">{t('privacyPolicy.cookies.analyticsDescription')}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">{t('privacyPolicy.cookies.functional')}</h4>
                        <p className="text-sm text-gray-600">{t('privacyPolicy.cookies.functionalDescription')}</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">{t('privacyPolicy.cookies.marketing')}</h4>
                        <p className="text-sm text-gray-600">{t('privacyPolicy.cookies.marketingDescription')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('privacyPolicy.cookies.control')}</h3>
                    <p className="text-gray-600">
                      {t('privacyPolicy.cookies.controlDescription')}
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
                    <FaUserCog className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{t('privacyPolicy.dataSecurity.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('privacyPolicy.dataSecurity.measures')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('privacyPolicy.dataSecurity.measuresItem1')}</li>
                      <li>{t('privacyPolicy.dataSecurity.measuresItem2')}</li>
                      <li>{t('privacyPolicy.dataSecurity.measuresItem3')}</li>
                      <li>{t('privacyPolicy.dataSecurity.measuresItem4')}</li>
                      <li>{t('privacyPolicy.dataSecurity.measuresItem5')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('privacyPolicy.dataSecurity.breach')}</h3>
                    <p className="text-gray-600">
                      {t('privacyPolicy.dataSecurity.breachDescription')}
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Haklarınız */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-[#e1f5e9] h-12 w-12 rounded-lg flex items-center justify-center mr-4">
                    <FaPaperPlane className="text-[#25D366] text-xl" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800">{t('privacyPolicy.rights.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>{t('privacyPolicy.rights.item1')}</li>
                    <li>{t('privacyPolicy.rights.item2')}</li>
                    <li>{t('privacyPolicy.rights.item3')}</li>
                    <li>{t('privacyPolicy.rights.item4')}</li>
                    <li>{t('privacyPolicy.rights.item5')}</li>
                    <li>{t('privacyPolicy.rights.item6')}</li>
                  </ul>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600">
                      {t('privacyPolicy.rights.exercise')}
                    </p>
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
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-800">{t('privacyPolicy.contact.title')}</h2>
                  <p className="text-gray-600">
                    {t('privacyPolicy.contact.description')}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>{t('privacyPolicy.contact.email')}</li>
                    <li>{t('privacyPolicy.contact.phone')}</li>
                  
                  </ul>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
