'use client'



interface SectionHeadingProps {
  title: string
  highlight?: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  className = ''
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-6xl font-bold mb-6">
        {title.split(' ').map((word, i) => {
          if (highlight && word.toLowerCase() === highlight.toLowerCase()) {
            return <span key={i} className="text-cyan-500">{word} </span>
          }
          return <span key={i}>{word} </span>
        })}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

