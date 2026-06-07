'use client'

import { useState, useRef, useEffect } from 'react'

interface TechCategory {
  name: string
  techs: string[]
}

const techCategories: TechCategory[] = [
  {
    name: 'Frontend',
    techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'CSS-in-JS'],
  },
  {
    name: 'Backend',
    techs: ['Node.js', 'Python', 'Express', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'DevOps & Cloud',
    techs: ['Docker', 'Kubernetes', 'AWS', 'Boto3', 'Terraform', 'GitHub Actions', 'lambda'],
  },
  {
    name: 'Tools & Platforms',
    techs: ['Git', 'Linux', 'Nginx', 'Redis', 'Grafana', 'DataDog'],
  },
]

export function TechStack() {
  const [activeTab, setActiveTab] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scroll-reveal')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const children = sectionRef.current?.querySelectorAll('[data-scroll]')
    children?.forEach((child) => observer.observe(child))

    return () => {
      children?.forEach((child) => observer.unobserve(child))
    }
  }, [])

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center" ref={sectionRef}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up" data-scroll>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-4">
            <span className="text-[#00d9ff]">$</span> <span className="text-[#d0d0d0]">cat</span> <span className="text-[#a0a0a0]">tech_stack.txt</span>
          </h2>
          <p className="text-[#a0a0a0] font-light">Technologies and tools I work with</p>
        </div>

        {/* Tabs */}
        <div className="mb-12 border-b border-[rgba(0,217,255,0.2)] overflow-x-auto">
          <div className="flex gap-0 font-mono text-sm">
            {techCategories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 border-b-2 transition-all duration-300 whitespace-nowrap ${
                  activeTab === idx
                    ? 'border-[#00d9ff] text-[#00d9ff]'
                    : 'border-transparent text-[#a0a0a0] hover:text-[#d0d0d0]'
                }`}
              >
                {`< ${category.name} />`}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 animate-fade-in-up" data-scroll>
          {techCategories[activeTab].techs.map((tech, idx) => (
            <div
              key={idx}
              className="terminal-card group cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#00d9ff] group-hover:bg-[#00ff88] transition-colors rounded-full" />
                <span className="text-[#d0d0d0] group-hover:text-[#00d9ff] font-mono text-sm transition-colors">
                  {tech}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 pt-16 border-t border-[rgba(0,217,255,0.2)]" data-scroll>
          {[
            { label: 'Projects', value: '10+' },
            { label: 'Experience', value: '3 yrs' },
            { label: 'Technologies', value: '8+' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-[#00d9ff] mb-2">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-[#a0a0a0] font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
