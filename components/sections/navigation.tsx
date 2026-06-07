'use client'

import { Github, Linkedin, Mail } from 'lucide-react'

export function Navigation() {
  const navItems = [
    { label: './home', href: '#home' },
    { label: './projects', href: '#projects' },
    { label: './stack', href: '#stack' },
    { label: './contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-b from-[#0a0e27] via-[#0a0e27] to-transparent z-50 border-b border-[rgba(0,217,255,0.2)] backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Navigation */}
        <div className="flex items-center gap-2 sm:gap-6 font-mono text-xs sm:text-sm">
          <span className="text-[#00d9ff]">{'>'}</span>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="text-[#a0a0a0] hover:text-[#00d9ff] transition-colors duration-300 hover:animate-glow"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right Social Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://github.com/SageBrian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0a0] hover:text-[#00d9ff] transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/brian-too-4b57a9227/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0a0] hover:text-[#00d9ff] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:briankt49@gmail.com"
            className="text-[#a0a0a0] hover:text-[#00d9ff] transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </nav>
  )
}
