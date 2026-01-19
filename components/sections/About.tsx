'use client'

import { motion } from 'framer-motion'
import { Smartphone, Server, Code, Zap, Cloud, Palette, Shield, Database, Award, ExternalLink } from 'lucide-react'
import { personalInfo } from '@/data/personal'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Server,
  Code,
  Zap,
  Cloud,
  Palette,
  Shield,
  Database,
}

// Stagger animation for paragraphs
const paragraphVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

// Card hover effect
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateY: -10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      type: "spring" as const,
      stiffness: 100
    }
  })
}

// Certificate animation
const certVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
}

export default function About() {
  const { about } = personalInfo
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated heading */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-16 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              About{' '}
            </motion.span>
            <motion.span
              className="text-cyan-500 inline-block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.1, textShadow: '0 0 20px rgba(6, 182, 212, 0.6)' }}
            >
              Me
            </motion.span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Animated paragraphs */}
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.paragraphs.map((paragraph, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={paragraphVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-4 border-l-2 border-cyan-500/50 hover:border-cyan-500 transition-colors"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Animated skill cards */}
            <div className="grid grid-cols-2 gap-4">
              {about.stats.map((stat, i) => {
                const IconComponent = iconMap[stat.icon]
                return (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)',
                      borderColor: 'rgba(6, 182, 212, 0.5)'
                    }}
                    className="p-6 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm transition-all cursor-pointer group"
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {IconComponent && (
                        <IconComponent className="w-8 h-8 text-cyan-500 mb-3 group-hover:text-cyan-400 transition-colors" />
                      )}
                    </motion.div>
                    <h3 className="text-gray-900 dark:text-gray-100 font-semibold group-hover:text-cyan-500 transition-colors">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.sublabel}</p>

                    {/* Animated underline on hover */}
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 mt-3"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Certificates Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            {/* Certificates heading */}
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Award className="w-8 h-8 text-cyan-500" />
              </motion.div>
              <h3 className="text-2xl md:text-3xl font-bold">
                <span>Certifi</span>
                <span className="text-cyan-500">cates</span>
              </h3>
            </motion.div>

            {/* Certificates grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {about.certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={certVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: '0 15px 30px rgba(6, 182, 212, 0.15)',
                  }}
                  className="p-5 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10 backdrop-blur-sm transition-all cursor-pointer group relative overflow-hidden"
                >
                  {/* Gradient accent */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  />

                  {/* Certificate icon */}
                  <motion.div
                    className="flex items-center gap-2 mb-2"
                    whileHover={{ x: 5 }}
                  >
                    <Award className="w-5 h-5 text-cyan-500 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-xs font-medium text-cyan-500 uppercase tracking-wide">Certificate</span>
                  </motion.div>

                  {/* Certificate title */}
                  <h4 className="text-gray-900 dark:text-gray-100 font-semibold mb-2 group-hover:text-cyan-500 transition-colors line-clamp-2">
                    {cert.title}
                  </h4>

                  {/* Issuer */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span>
                    {cert.issuer}
                  </p>

                  {/* Description if available */}
                  {cert.description && (
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-2 italic">
                      {cert.description}
                    </p>
                  )}

                  {/* Hover shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
