'use client'

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,217,255,0.05)] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl w-full mx-auto relative z-10 animate-fade-in-up">
        <div className="mb-8">
          <span className="font-mono text-sm text-[#00d9ff] mb-4 block animate-slide-in-right">
            $ who am I
          </span>
        </div>

        {/* Main Section with Image and Title */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-12">
          {/* Left content */}
          <div className="flex-1 w-full">
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-6 leading-tight">
              <span className="text-[#d0d0d0]">
                Software & Cloud
                <br />
                <span className="text-[#00d9ff]">Engineer</span>
              </span>
              <span className="text-[#00d9ff] animate-blink ml-2">_</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#a0a0a0] text-lg sm:text-xl mb-8 max-w-2xl font-light leading-relaxed">
              Building scalable infrastructure and full-stack applications. Passionate about cloud technologies, DevOps, and creating elegant solutions to complex problems.
            </p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-3 mb-12">
              {['python-django', 'fastapi','boto3', 'TypeScript', 'React', 'Node.js', 'Docker', 'AWS', 'Kubernetes'].map((tech, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 border border-[rgba(0,217,255,0.3)] rounded text-sm font-mono text-[#00d9ff] hover:border-[rgba(0,217,255,0.8)] hover:bg-[rgba(0,217,255,0.05)] transition-all duration-300"
                >
                  {`< ${tech} />`}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="terminal-button group flex items-center justify-center sm:justify-start"
              >
                View Projects <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-4 py-2 border border-[#a0a0a0] text-[#a0a0a0] font-mono text-sm hover:border-[#00d9ff] hover:text-[#00d9ff] transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Right side - Circular Profile Image */}
          <div className="flex-shrink-0 w-64 h-64 lg:w-80 lg:h-80">
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#00d9ff] shadow-[0_0_30px_rgba(0,217,255,0.3)] hover:shadow-[0_0_50px_rgba(0,217,255,0.5)] transition-shadow duration-300">
              <Image
                src="/dp.jpeg"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="mt-20 pt-20 border-t border-[rgba(0,217,255,0.1)]">
          <div className="flex items-center gap-2 text-[#606080] text-xs font-mono animate-bounce">
            <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse" />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  )
}
