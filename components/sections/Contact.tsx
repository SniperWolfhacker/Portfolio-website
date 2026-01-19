'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, Sparkles } from 'lucide-react'
import { personalInfo } from '@/data/personal'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Linkedin,
  Github,
}

export default function Contact() {
  const { contact } = personalInfo
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 dark:via-cyan-500/5 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as const }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
          scale: [1.1, 1, 1.1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Decorative particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-500/40 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            duration: 3 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut" as const
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated heading with sparkle */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="inline-block"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <Sparkles className="w-8 h-8 text-cyan-500 mb-4 mx-auto" />
            </motion.span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {contact.heading.split(' ').slice(0, -1).join(' ')}{' '}
            </motion.span>
            <motion.span
              className="text-cyan-500 inline-block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1, textShadow: '0 0 30px rgba(6, 182, 212, 0.6)' }}
            >
              {contact.heading.split(' ').slice(-1)[0]}
            </motion.span>
          </h2>

          <motion.p
            className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {contact.subheading}
          </motion.p>

          {/* Animated Email Button */}
          <motion.a
            href={`https://mail.google.com/mail/?view=cm&to=${contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 40px rgba(6, 182, 212, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg text-white hover:shadow-2xl hover:shadow-cyan-500/50 transition-all cursor-pointer relative overflow-hidden group"
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            />

            <motion.span
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Mail className="w-6 h-6" />
            </motion.span>
            <span className="relative z-10">{contact.emailButtonText}</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Send className="w-5 h-5" />
            </motion.span>
          </motion.a>

          {/* Social Links with enhanced animations */}
          <motion.div
            className="flex justify-center gap-6 mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {contact.socialLinks.map((social, i) => {
              const IconComponent = iconMap[social.icon]
              return (
                <motion.a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring" as const, stiffness: 200 }}
                  whileHover={{
                    scale: 1.2,
                    y: -8,
                    boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)',
                    borderColor: 'rgba(6, 182, 212, 0.5)'
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-gray-100 dark:bg-white/5 rounded-full border-2 border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 ${social.color} transition-all backdrop-blur-sm relative group`}
                >
                  {IconComponent && (
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.div>
                  )}

                  {/* Tooltip */}
                  <motion.span
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                  >
                    {social.name}
                  </motion.span>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Email display */}
          <motion.p
            className="mt-8 text-gray-500 dark:text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            or reach me at{' '}
            <motion.a
              href={`mailto:${contact.email}`}
              className="text-cyan-500 hover:text-cyan-400 transition-colors underline underline-offset-4"
              whileHover={{ scale: 1.05 }}
            >
              {contact.email}
            </motion.a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
