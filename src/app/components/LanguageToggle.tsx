"use client";

import { motion } from "framer-motion";
import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage, isTransitioning } = useLanguage()

  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-md p-1 relative">
      {/* Sliding background indicator */}
      <motion.div
        className="absolute top-1 bottom-1 bg-white shadow-sm rounded"
        initial={false}
        animate={{
          x: language === 'tr' ? 4 : 28,
          width: 24
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
      
      <motion.button
        onClick={() => setLanguage('tr')}
        className={`px-2 py-1 text-xs font-medium rounded transition-all duration-200 relative z-10 ${
          language === 'tr'
            ? 'text-gray-900'
            : 'text-gray-600 hover:text-gray-900'
        } ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isTransitioning}
      >
        TR
      </motion.button>
      
      <motion.button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 text-xs font-medium rounded transition-all duration-200 relative z-10 ${
          language === 'en'
            ? 'text-gray-900'
            : 'text-gray-600 hover:text-gray-900'
        } ${isTransitioning ? 'opacity-70' : 'opacity-100'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isTransitioning}
      >
        EN
      </motion.button>
      
      {/* Transition indicator */}
      {isTransitioning && (
        <motion.div
          className="absolute inset-0 bg-gray-200 rounded-md opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          exit={{ opacity: 0 }}
        />
      )}
    </div>
  )
} 