import { Link } from 'react-router-dom'
import { Zap, Twitter, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', path: '/product' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Changelog', path: '#' },
    { label: 'Roadmap', path: '#' },
  ],
  Company: [
    { label: 'About', path: '/pricing' },
    { label: 'Blog', path: '#' },
    { label: 'Careers', path: '#' },
    { label: 'Contact', path: '/product#contact' },
  ],
  Legal: [
    { label: 'Privacy', path: '#' },
    { label: 'Terms', path: '#' },
    { label: 'Security', path: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
                <Zap className="w-4 h-4 text-black" />
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">Aether<span className="text-white/40">AI</span></span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Build stunning websites in minutes with the power of artificial intelligence. No code required.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-white/30 hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-medium mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-white/40 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2026 AetherAI. All rights reserved.</p>
          <p className="text-white/20 text-xs">Built with AI. Powered by imagination.</p>
        </div>
      </div>
    </footer>
  )
}
