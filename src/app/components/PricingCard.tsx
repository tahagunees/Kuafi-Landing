"use client";

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

interface Feature {
  text: string;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  period: string;
  features: Feature[];
  popular?: boolean;
  buttonText?: string;
  onClick?: () => void;
}

export default function PricingCard({
  title,
  description,
  price,
  period,
  features,
  popular = false,
  buttonText = "Get Started Now",
  onClick,
}: PricingCardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className={`
        bg-white dark:bg-[#262D31] rounded-xl shadow-sm overflow-hidden border
        ${popular 
          ? 'border-[#25D366] dark:border-[#00A884]' 
          : 'border-gray-200 dark:border-gray-700'
        }
        ${popular ? 'relative' : ''}
      `}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-[#25D366] dark:bg-[#00A884] text-white text-xs font-bold px-3 py-1 rounded-bl-md">
            SAVE 20%
          </div>
        </div>
      )}
      
      <div className="p-8">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{description}</p>
        
        <div className="mt-6 mb-6">
          <span className="text-5xl font-bold text-gray-800 dark:text-white">{price}</span>
          <span className="text-gray-600 dark:text-gray-400">/{period}</span>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick}
          className={`
            w-full rounded-full py-3 font-medium flex items-center justify-center
            ${popular 
              ? 'bg-[#25D366] hover:bg-[#128C7E] text-white' 
              : 'bg-gray-900 dark:bg-white hover:bg-black dark:hover:bg-gray-100 text-white dark:text-gray-900'
            }
          `}
        >
          {buttonText} <span className="ml-2">→</span>
        </motion.button>
      </div>
      
      <div className="bg-gray-50 dark:bg-[#1F2C34] p-8">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
              <FaCheck className="text-[#25D366] mr-3 flex-shrink-0" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
} 