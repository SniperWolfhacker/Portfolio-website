'use client'

import { create } from 'zustand'

interface UIStore {
  darkMode: boolean
  mobileMenuOpen: boolean
  toggleDarkMode: () => void
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
}

export const useUIStore = create<UIStore>((set) => ({
  darkMode: true, // Default to dark mode
  mobileMenuOpen: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  toggleMobileMenu: () => set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  closeMobileMenu: () => set({ mobileMenuOpen: false }),
}))

