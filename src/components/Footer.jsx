import { Link } from 'react-router-dom'
import { Zap, Twitter, Linkedin, Github } from 'lucide-react'

const footerLinks = {
  Product: [
    { label: 'Features', path: '/product' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Changelog', path: '/product' },
    { label: 'Roadmap', path: '/product' },
  ],
  Company: [
    { label: 'About', path: '/pricing' },
    { label: 'Blog', path: '/' },
    { label: 'Careers', path: '/' },
    { label: 'Press', path: '/' },
  ],
  Legal: [
    { label: 'Privacy', path: '/' },
    { label: 'Terms', path: '/' },
    { label: 'Security', path: '/' },
    { label: 'Cookies', path: '/' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg">NeuralBuild</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              The AI-powered site builder that transforms your ideas into stunning, production-ready websites in minutes.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-semibold text-sm mb-4">{section}</h4>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2026 NeuralBuild, Inc. All rights reserved.</p>
          <p className="text-sm text-slate-500">Built with AI. Powered by imagination.</p>
        </div>
      </div>
    </footer>
  )
}
