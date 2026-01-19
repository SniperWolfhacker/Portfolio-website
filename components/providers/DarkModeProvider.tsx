'use client'

import { useEffect } from 'react'
import { useUIStore } from '@/store/uiStore'

export default function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useUIStore((state) => state.darkMode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return <>{children}</>
}

