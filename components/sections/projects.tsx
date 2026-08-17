'use client'

import { useRef, useEffect } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  techs: string[]
  github?: string
  live?: string
}

const projects: Project[] = [
  {
    title: 'terraform aws autoscaling template',
    description: 'The infrastructure uses an Application Load Balancer, EC2 Launch Templates, an Auto Scaling Group, CloudWatch alarms, IAM, security groups, and a multi-AZ VPC.',
    techs: ['Terraform', 'AWS', 'EC2', 'Auto Scaling'],
    github: 'https://github.com/SageBrian/cloud-backend-engineer-porfolio',
    //live: '#',
  },
  {                                                       
    title: 'CI-CD-project',
    description: 'A production-style CI/CD pipeline on AWS, fully provisioned with Terraform.',
    techs: ['CI/CD', 'github actions', 'AWS', 'terraform'],
    github: 'https://github.com/SageBrian/CI-CD-project',
    //live: '#',
  },
  {
    title: 'Event driven generator',
    description: 'An enterprise-ready, serverless ingestion pipeline built on AWS using Terraform (Infrastructure as Code). This system automatically processes raw business data uploads (.csv) in real-time, generates analytical summaries, and stores them securely in an optimized downstream storage tier.',
    techs: ['Terraform', 'GitHub Actions', 'python', 'lambda', 'boto3'],
    github: 'https://github.com/SageBrian/Event-driven-report-generator',
    //live: '#',
  },
  
]

export function Projects() {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center" ref={sectionRef}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up" data-scroll>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-4">
            <span className="text-[#00d9ff]">$</span> <span className="text-[#d0d0d0]">ls</span> <span className="text-[#a0a0a0]">-la projects/</span>
          </h2>
          <p className="text-[#a0a0a0] font-light">The Forge - Crafting exceptional software</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-scroll>
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group terminal-card flex flex-col justify-between hover:shadow-glow-cyan transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Project Title */}
              <div className="mb-4">
                <h3 className="text-lg font-mono font-bold text-[#d0d0d0] mb-2 group-hover:text-[#00d9ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Tech Stack */}
              <div className="mb-4 pt-4 border-t border-[rgba(0,217,255,0.1)]">
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="inline-block px-2 py-1 text-xs font-mono bg-[rgba(0,217,255,0.1)] text-[#00d9ff] rounded border border-[rgba(0,217,255,0.3)] group-hover:border-[rgba(0,217,255,0.6)] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-[rgba(0,217,255,0.1)]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#00d9ff] transition-colors text-sm font-mono"
                  >
                    <Github size={14} />
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#00d9ff] transition-colors text-sm font-mono"
                  >
                    <ExternalLink size={14} />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
