"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowLeft, FaShieldAlt, FaGavel, FaUserLock, FaCreditCard, FaExclamationTriangle } from "react-icons/fa";
import { useLanguage } from "../contexts/LanguageContext";
import LanguageToggle from "../components/LanguageToggle";

export default function Terms() {
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
                <span className="hidden sm:inline">{t('terms.backToHome')}</span>
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
                <FaGavel className="text-[#25D366] text-2xl sm:text-3xl" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 px-4">{t('terms.title')}</h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                {t('terms.subtitle')}
              </p>
              <p className="text-sm text-gray-500 mt-4">{t('terms.lastUpdated')}</p>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('terms.general.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    {t('terms.general.description')}
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.general.scope')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('terms.general.scopeItem1')}</li>
                      <li>{t('terms.general.scopeItem2')}</li>
                      <li>{t('terms.general.scopeItem3')}</li>
                      <li>{t('terms.general.scopeItem4')}</li>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('terms.responsibilities.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.responsibilities.account')}</h3>
                    <p className="text-gray-600">
                      {t('terms.responsibilities.accountDescription')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.responsibilities.prohibited')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('terms.responsibilities.prohibitedItem1')}</li>
                      <li>{t('terms.responsibilities.prohibitedItem2')}</li>
                      <li>{t('terms.responsibilities.prohibitedItem3')}</li>
                      <li>{t('terms.responsibilities.prohibitedItem4')}</li>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('terms.payment.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.payment.conditions')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('terms.payment.conditionsItem1')}</li>
                      <li>{t('terms.payment.conditionsItem2')}</li>
                      <li>{t('terms.payment.conditionsItem3')}</li>
                      <li>{t('terms.payment.conditionsItem4')}</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.payment.cancellation')}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>{t('terms.payment.cancellationItem1')}</li>
                      <li>{t('terms.payment.cancellationItem2')}</li>
                      <li>{t('terms.payment.cancellationItem3')}</li>
                      <li>{t('terms.payment.cancellationItem4')}</li>
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('terms.liability.title')}</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-600">
                    {t('terms.liability.description')}
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.liability.limited')}</h3>
                    <p className="text-gray-600">
                      {t('terms.liability.limitedDescription')}
                    </p>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{t('terms.liability.force')}</h3>
                    <p className="text-gray-600">
                      {t('terms.liability.forceDescription')}
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
                  <h2 className="text-2xl font-bold text-gray-800">{t('terms.contact.title')}</h2>
                  <p className="text-gray-600">
                    {t('terms.contact.description')}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>{t('terms.contact.email')}</li>
                    <li>{t('terms.contact.phone')}</li>
                    
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