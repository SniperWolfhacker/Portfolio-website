'use client'


import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useUIStore } from '@/store/uiStore'
import { personalInfo } from '@/data/personal'

// Faster, smoother letter animation variants
const letterVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, damping: 20, stiffness: 300 }
  }
}

const containerVariants = (delay: number, speed: number) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: speed, delayChildren: delay }
  }
})

// Typewriter component with faster, snappier animation
function TypewriterSpan({ text, className, delay = 0, speed = 0.03 }: {
  text: string
  className?: string
  delay?: number
  speed?: number
}) {
  return (
    <motion.span
      className={className}
      variants={containerVariants(delay, speed)}
      initial="hidden"
      animate="visible"
      style={{ display: 'inline-flex' }}
    >
      {text.split('').map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  )
}

// Floating animation for decorative elements
const floatingAnimation = {
  y: [0, -20, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
}

export default function Hero() {
  const { darkMode } = useUIStore()
  const { personal, cta } = personalInfo

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Grid */}
      <motion.div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: darkMode ? 0.2 : 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: darkMode
            ? 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)'
            : 'linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </motion.div>

      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/30 rounded-full blur-3xl"
        animate={floatingAnimation}
      />
      <motion.div
        className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl"
        animate={{ ...floatingAnimation, y: [0, 20, 0] }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-500/30 rounded-full"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut" as const
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Greeting - faster timing */}
          <p className="text-cyan-500 text-sm md:text-base mb-4 font-mono">
            <TypewriterSpan text={personal.greeting} delay={0.1} speed={0.04} />
          </p>

          {/* Name - appears right after greeting */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <TypewriterSpan text={personal.firstName} className="text-cyan-500" delay={0.5} speed={0.06} />
            {' '}
            <TypewriterSpan
              text={personal.lastName}
              className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
              delay={0.9}
              speed={0.06}
            />
          </h1>

          {/* Title - quick follow up */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              {personal.title}
            </span>
          </motion.h2>

          {/* Description - fade in with slide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-4">
              {personal.description.intro}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
              <motion.span
                className="text-cyan-500 font-semibold"
                animate={{ textShadow: ['0 0 10px rgba(6, 182, 212, 0)', '0 0 20px rgba(6, 182, 212, 0.5)', '0 0 10px rgba(6, 182, 212, 0)'] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {personal.description.highlightedTech.primary}
              </motion.span>
              {' '}&amp;{' '}
              <motion.span
                className="text-blue-500 font-semibold"
                animate={{ textShadow: ['0 0 10px rgba(59, 130, 246, 0)', '0 0 20px rgba(59, 130, 246, 0.5)', '0 0 10px rgba(59, 130, 246, 0)'] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                {personal.description.highlightedTech.secondary}
              </motion.span>
            </p>
          </motion.div>

          {/* CTA Buttons - staggered entrance */}
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          >
            <motion.a
              href={cta.primary.href}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
            >
              {cta.primary.text}
            </motion.a>
            <motion.a
              href={cta.secondary.href}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(6, 182, 212, 0.15)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
            >
              {cta.secondary.text}
            </motion.a>
          </motion.div>

          {/* Bouncing scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 2.2 },
              y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" as const }
            }}
            className="mt-20"
          >
            <ChevronDown className="w-8 h-8 mx-auto text-cyan-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
