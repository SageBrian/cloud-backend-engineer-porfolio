'use client'

import { useState, FormEvent, useRef, useEffect } from 'react'
import { Send } from 'lucide-react'

export function Contact() {
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real app, you would send this to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center" ref={sectionRef}>
      <div className="max-w-2xl mx-auto w-full">
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up" data-scroll>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold mb-4">
            <span className="text-[#00d9ff]">$</span> <span className="text-[#d0d0d0]">The Terminal</span>
          </h2>
          <p className="text-[#a0a0a0] font-light">Let&apos;s start a conversation</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="animate-fade-in-up" data-scroll>
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-mono text-[#a0a0a0] mb-2">
              <span className="text-[#00d9ff]">{'>'}</span> name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="terminal-input w-full"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-mono text-[#a0a0a0] mb-2">
              <span className="text-[#00d9ff]">{'>'}</span> email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="terminal-input w-full"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-mono text-[#a0a0a0] mb-2">
              <span className="text-[#00d9ff]">{'>'}</span> message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="terminal-input w-full resize-none"
              placeholder="Your message here..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="terminal-button w-full sm:w-auto flex items-center justify-center group"
          >
            Send Message <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Success Message */}
          {submitted && (
            <div className="mt-6 p-4 border border-[#00ff88] bg-[rgba(0,255,136,0.05)] rounded text-[#00ff88] font-mono text-sm animate-fade-in-up">
              <span className="text-[#00ff88]">✓</span> Message sent successfully! I&apos;ll get back to you soon.
            </div>
          )}
        </form>

        {/* Alternative Contact Methods */}
        <div className="mt-16 pt-16 border-t border-[rgba(0,217,255,0.2)]">
          <h3 className="text-lg font-mono text-[#d0d0d0] mb-8">Or reach out directly:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: '📧',
                label: 'Email',
                value: 'briankt49@gmail.com',
              },
              {
                icon: '💼',
                label: 'LinkedIn',
                value: 'linkedin.com/in/brian-too-4b57a9227/',
              },
              {
                icon: '🐙',
                label: 'GitHub',
                value: 'github.com/SageBrian',
              },
            ].map((contact, idx) => (
              <div key={idx} className="terminal-card text-center">
                <div className="text-2xl mb-2">{contact.icon}</div>
                <div className="text-sm text-[#a0a0a0] mb-1">{contact.label}</div>
                <div className="text-xs font-mono text-[#00d9ff]">{contact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
