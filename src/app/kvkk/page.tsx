"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt, FaUserShield, FaDatabase, FaGlobe, FaLock } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "../components/LanguageToggle";

export default function KVKK() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors mr-6">
                <FaArrowLeft className="mr-2" />
                {t('kvkk.backToHome')}
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Kuafi<span className="text-[#25D366]">.com</span></h1>
            </div>
            <LanguageToggle />
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
              <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('kvkk.title')}</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('kvkk.subtitle')}
              </p>
              <p className="text-sm text-gray-500 mt-4">{t('kvkk.lastUpdated')}</p>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('kvkk.dataController.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    {t('kvkk.dataController.description')}
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('kvkk.dataController.info')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('kvkk.dataController.company')}</li>
                      <li>{t('kvkk.dataController.address')}</li>
                      <li>{t('kvkk.dataController.email')}</li>
                      <li>{t('kvkk.dataController.phone')}</li>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('kvkk.personalData.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('kvkk.personalData.identity')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('kvkk.personalData.identityItem1')}</li>
                      <li>{t('kvkk.personalData.identityItem2')}</li>
                      <li>{t('kvkk.personalData.identityItem3')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('kvkk.personalData.contact')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('kvkk.personalData.contactItem1')}</li>
                      <li>{t('kvkk.personalData.contactItem2')}</li>
                      <li>{t('kvkk.personalData.contactItem3')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('kvkk.personalData.transaction')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('kvkk.personalData.transactionItem1')}</li>
                      <li>{t('kvkk.personalData.transactionItem2')}</li>
                      <li>{t('kvkk.personalData.transactionItem3')}</li>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('kvkk.processingPurposes.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('kvkk.processingPurposes.primary')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('kvkk.processingPurposes.primaryItem1')}</li>
                      <li>{t('kvkk.processingPurposes.primaryItem2')}</li>
                      <li>{t('kvkk.processingPurposes.primaryItem3')}</li>
                      <li>{t('kvkk.processingPurposes.primaryItem4')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('kvkk.processingPurposes.secondary')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('kvkk.processingPurposes.secondaryItem1')}</li>
                      <li>{t('kvkk.processingPurposes.secondaryItem2')}</li>
                      <li>{t('kvkk.processingPurposes.secondaryItem3')}</li>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('kvkk.dataSecurity.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('kvkk.dataSecurity.security')}</h3>
                    <p className="text-gray-600">
                      {t('kvkk.dataSecurity.securityDescription')}
                    </p>
                    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-2">
                      <li>{t('kvkk.dataSecurity.securityItem1')}</li>
                      <li>{t('kvkk.dataSecurity.securityItem2')}</li>
                      <li>{t('kvkk.dataSecurity.securityItem3')}</li>
                      <li>{t('kvkk.dataSecurity.securityItem4')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('kvkk.dataSecurity.rights')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('kvkk.dataSecurity.rightsItem1')}</li>
                      <li>{t('kvkk.dataSecurity.rightsItem2')}</li>
                      <li>{t('kvkk.dataSecurity.rightsItem3')}</li>
                      <li>{t('kvkk.dataSecurity.rightsItem4')}</li>
                      <li>{t('kvkk.dataSecurity.rightsItem5')}</li>
                      <li>{t('kvkk.dataSecurity.rightsItem6')}</li>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('kvkk.contact.title')}</h2>
                  <p className="text-gray-600">
                    {t('kvkk.contact.description')}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>{t('kvkk.contact.email')}</li>
                    <li>{t('kvkk.contact.phone')}</li>
                   
                  </ul>
                </div>
              </motion.section>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 