'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0f1335] border-t border-[rgba(0,217,255,0.2)] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8 pb-8 border-b border-[rgba(0,217,255,0.1)]">
          {/* About */}
          <div>
            <h3 className="text-sm font-mono text-[#00d9ff] mb-3">About</h3>
            <p className="text-xs text-[#a0a0a0] leading-relaxed">
              A full-stack engineer passionate about building scalable systems and solving complex technical challenges.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-mono text-[#00d9ff] mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Projects', 'Tech Stack', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-xs text-[#a0a0a0] hover:text-[#00d9ff] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status */}
          <div>
            <h3 className="text-sm font-mono text-[#00d9ff] mb-3">Status</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
              <span className="text-xs text-[#a0a0a0]">Open to opportunities</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#606080] font-mono text-center sm:text-left">
            <span className="text-[#00d9ff]">{'<'}</span> Made with{' '}
            <span className="text-[#00ff88]">love</span> & <span className="text-[#0099ff]">code</span>{' '}
            <span className="text-[#00d9ff]">{'/'}</span>
            <span className="text-[#00d9ff]">{'>'}</span>
          </div>
          <div className="text-xs text-[#606080] font-mono">
            © {currentYear} Software Engineer. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
