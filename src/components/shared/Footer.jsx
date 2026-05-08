import { Link } from 'react-router-dom'
import { Zap, Twitter, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', path: '/product' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Changelog', path: '/product' },
  ],
  Company: [
    { label: 'About', path: '/pricing' },
    { label: 'Blog', path: '/' },
    { label: 'Careers', path: '/' },
  ],
  Legal: [
    { label: 'Privacy', path: '/' },
    { label: 'Terms', path: '/' },
    { label: 'Security', path: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">Nexus<span className="text-indigo-400">AI</span></span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              The AI-powered site builder that turns your vision into a live, professional website in minutes.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white text-sm font-semibold mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link to={path} className="text-sm text-slate-500 hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2026 NexusAI, Inc. All rights reserved.</p>
          <p className="text-xs text-slate-600">Built with AI. Designed for humans.</p>
        </div>
      </div>
    </footer>
  )
}
