'use client'

import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'
import { personalInfo } from '@/data/personal'

export default function Navbar() {
  const { darkMode, mobileMenuOpen, toggleDarkMode, toggleMobileMenu, closeMobileMenu } = useUIStore()
  const { personal, navigation } = personalInfo

  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur-xl border-b border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold"
        >
          <span className="text-cyan-500">{personal.firstName}</span>
          <span className="ml-1">{personal.lastName}</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navigation.items.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors border border-gray-200 dark:border-white/10"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white/95 dark:bg-black/90 backdrop-blur-xl border-t border-gray-200 dark:border-white/10"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navigation.items.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                onClick={closeMobileMenu}
              >
                {item}
              </a>
            ))}
            {/* Theme Toggle in Mobile Menu */}
            <button
              onClick={() => {
                toggleDarkMode()
                closeMobileMenu()
              }}
              className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10"
            >
              {darkMode ? (
                <>
                  <Sun className="w-5 h-5 text-yellow-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5 text-gray-700" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

