import { Navigation } from '@/components/sections/navigation'
import { Hero } from '@/components/sections/hero'
import { TechStack } from '@/components/sections/tech-stack'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <main className="bg-terminal-black text-terminal-light-gray">
      <Navigation />
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
