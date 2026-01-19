'use client'


import { motion, HTMLMotionProps } from 'framer-motion'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'outline' | 'ghost'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold transition-all"

  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50",
    outline: "border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10",
    ghost: "text-cyan-500 hover:bg-cyan-500/10"
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

