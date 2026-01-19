export interface Project {
  id: number
  title: string
  description: string[]
  image?: string
  imageAlt?: string
  liveUrl?: string
  githubUrl?: string
  tags: string[]
  gradient: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Todo List Application",
    description: [
      "A Python-based task management application to organize daily activities",
      "Features include adding, removing, and marking tasks as complete",
      "Implements persistent storage to save tasks between sessions",
      "Clean and intuitive user interface for efficient task tracking"
    ],
    githubUrl: "https://github.com/SniperWolfhacker/todo-list-python",
    tags: ["Python", "Task Management", "Productivity", "CLI/GUI"],
    gradient: "from-emerald-500 to-cyan-500"
  },

  {
    id: 2,
    title: "Secure Password Generator",
    description: [
      "Advanced password generation tool for enhanced digital security",
      "Creates complex, random passwords with customizable parameters",
      "Options to include special characters, numbers, and mixed case letters",
      "Helps users maintain strong security posture across accounts"
    ],
    githubUrl: "https://github.com/SniperWolfhacker/password-generator",
    tags: ["Python", "Security", "Cryptography", "Automation"],
    gradient: "from-purple-500 to-blue-500"
  },

  {
    id: 3,
    title: "URL Shortener Service",
    description: [
      "Efficient tool to convert long, unwieldy URLs into short, shareable links",
      "Built with Python to handle URL mapping and redirection",
      "Perfect for social media sharing and link tracking",
      "Demonstrates string manipulation and database interaction"
    ],
    githubUrl: "https://github.com/SniperWolfhacker/URL-shortner-python",
    tags: ["Python", "Web Tool", "URL Manipulation", "Utility"],
    gradient: "from-orange-500 to-red-500"
  }
]
