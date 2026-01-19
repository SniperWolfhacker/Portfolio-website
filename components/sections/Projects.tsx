'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Code, Github } from 'lucide-react'
import { projectsData } from '@/data/projects'
import { personalInfo } from '@/data/personal'

export default function Projects() {
  const { projects } = personalInfo
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ x: [-50, 50, -50], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [50, -50, 50], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated Section Header */}
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {projects.heading.split(' ').slice(0, -1).join(' ')}{' '}
            </motion.span>
            <motion.span
              className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {projects.heading.split(' ').slice(-1)[0]}
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-400 text-center mb-16 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {projects.subheading}
          </motion.p>

          {/* Projects Grid with staggered animation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, i) => {
              const isExpanded = expandedId === project.id

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50, rotateX: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.5,
                    type: "spring" as const,
                    stiffness: 100
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  className="group relative bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  {/* Project Image with enhanced overlay */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-slate-900">
                    {project.image ? (
                      <motion.img
                        src={project.image}
                        alt={project.imageAlt || project.title}
                        className="w-full h-full object-cover object-top"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          e.currentTarget.nextElementSibling?.classList.remove('hidden')
                          e.currentTarget.nextElementSibling?.classList.add('flex')
                        }}
                      />
                    ) : null}

                    {/* Fallback */}
                    <div
                      className={`${project.image ? 'hidden' : 'flex'} absolute inset-0 bg-gradient-to-br ${project.gradient} items-center justify-center`}
                    >
                      <Code className="w-16 h-16 text-white/50" />
                    </div>

                    {/* Animated overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-cyan-500 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description (Expandable) */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 72 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {(isExpanded
                          ? project.description
                          : project.description.slice(0, 2)
                        ).map((point, idx) => (
                          <motion.li
                            key={`${project.id}-${idx}-${point.slice(0, 10)}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <span className="text-cyan-500 mr-2">▹</span> {point}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Read More / Less with animation */}
                    {project.description.length > 2 && (
                      <motion.button
                        onClick={() =>
                          setExpandedId(isExpanded ? null : project.id)
                        }
                        className="mt-3 text-sm font-medium text-cyan-500 hover:text-cyan-600 transition flex items-center gap-1"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isExpanded ? '← Show less' : 'Read more →'}
                      </motion.button>
                    )}

                    {/* Tags with staggered hover */}
                    <div className="flex flex-wrap gap-2 mt-4 mb-4">
                      {project.tags.slice(0, 4).map((tag, j) => (
                        <motion.span
                          key={`${project.id}-tag-${j}`}
                          className="px-3 py-1 text-xs font-medium bg-cyan-50 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 rounded-full border border-cyan-200 dark:border-cyan-500/20"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: 'rgba(6, 182, 212, 0.2)',
                            borderColor: 'rgba(6, 182, 212, 0.5)'
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + j * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Live Link with icon animation */}
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-medium group/link"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.span>
                      </motion.a>
                    )}
                  </div>

                  {/* Corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
