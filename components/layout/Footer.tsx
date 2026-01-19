'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { personalInfo } from '@/data/personal'

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { personal, footer } = personalInfo

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} {personal.fullName}. {footer.copyrightText}
          </p>

          {footer.showScrollToTop && (
            <motion.button
              onClick={scrollToTop}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: showScrollTop ? 1 : 0,
                scale: showScrollTop ? 1 : 0
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white rounded-full shadow-lg hover:shadow-cyan-500/50 transition-all fixed bottom-8 right-8 z-50"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          )}
        </div>
      </div>
    </footer>
  )
}

