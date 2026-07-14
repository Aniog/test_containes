import { Link } from 'react-router-dom'
import { Mail, Twitter, Linkedin, Github } from 'lucide-react'

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-white font-bold text-lg mb-1">Acme Co.</p>
          <p className="text-sm">Building great things, together.</p>
        </div>

        <div className="flex items-center gap-4">
          <a href="mailto:hello@acme.co" className="hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} Acme Co. All rights reserved.</p>
        <Link
          to="/contacts"
          className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
        >
          View saved contacts →
        </Link>
      </div>
    </div>
  </footer>
)

export default Footer
