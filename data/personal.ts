import personalData from './personal.json'

export interface PersonalData {
  personal: {
    firstName: string
    lastName: string
    fullName: string
    title: string
    jobTitle: string
    email: string
    greeting: string
    description: {
      intro: string
      main: string
      highlightedTech: {
        primary: string
        secondary: string
      }
    }
  }
  about: {
    paragraphs: string[]
    stats: Array<{
      icon: string
      label: string
      sublabel: string
    }>
    certificates: Array<{
      title: string
      issuer: string
      description?: string
    }>
  }
  contact: {
    heading: string
    subheading: string
    email: string
    emailButtonText: string
    socialLinks: Array<{
      name: string
      icon: string
      url: string
      color: string
    }>
  }
  projects: {
    heading: string
    subheading: string
  }
  navigation: {
    items: string[]
  }
  metadata: {
    title: string
    description: string
    keywords: string[]
    openGraph: {
      title: string
      description: string
      type: string
    }
  }
  cta: {
    primary: {
      text: string
      href: string
    }
    secondary: {
      text: string
      href: string
    }
  }
  footer: {
    copyrightText: string
    showScrollToTop: boolean
  }
}

export const personalInfo: PersonalData = personalData as PersonalData

