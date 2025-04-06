"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaCalendarCheck } from 'react-icons/fa';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

interface CalendarProps {
  onDateSelect: (date: Date) => void;
  selectedDate: Date | null;
}

export default function Calendar({ onDateSelect, selectedDate }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Calculate days for the current month view
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    
    // Add empty slots for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: '', date: null });
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push({ day, date });
    }
    
    return days;
  };
  
  const days = getDaysInMonth(currentMonth);
  
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const handleDateClick = (date: Date | null) => {
    if (date) {
      onDateSelect(date);
    }
  };
  
  const isSelectedDate = (date: Date | null) => {
    if (!date || !selectedDate) return false;
    return date.toDateString() === selectedDate.toDateString();
  };
  
  const isToday = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };
  
  const isPastDate = (date: Date | null) => {
    if (!date) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={goToPreviousMonth}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <FaChevronLeft className="text-gray-600 dark:text-gray-300" />
        </button>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h2>
        <button 
          onClick={goToNextMonth}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <FaChevronRight className="text-gray-600 dark:text-gray-300" />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center py-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => (
          <motion.div
            key={`${day.day}-${index}`}
            whileHover={{ scale: day.date ? 1.1 : 1 }}
            className={`
              aspect-square flex items-center justify-center rounded-full cursor-pointer text-sm
              ${!day.date ? 'opacity-0 cursor-default' : ''}
              ${isSelectedDate(day.date) ? 'bg-blue-600 text-white' : ''}
              ${isToday(day.date) && !isSelectedDate(day.date) ? 'border border-blue-500' : ''}
              ${isPastDate(day.date) && !isSelectedDate(day.date) ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' : ''}
              ${day.date && !isPastDate(day.date) && !isSelectedDate(day.date) ? 'hover:bg-gray-100 dark:hover:bg-gray-700' : ''}
            `}
            onClick={() => !isPastDate(day.date) && handleDateClick(day.date)}
          >
            {day.day}
            {isSelectedDate(day.date) && (
              <FaCalendarCheck className="absolute text-white text-xs -mt-5" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
} 