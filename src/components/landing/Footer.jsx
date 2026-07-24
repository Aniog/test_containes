import { Sparkles } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-bold">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-indigo-600 text-white">
            <Sparkles className="w-4 h-4" />
          </span>
          Lumen Studio
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">
            Features
          </a>
          <a href="#showcase" className="text-slate-300 hover:text-white transition">
            Showcase
          </a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">
            Pricing
          </a>
          <a href="#contact" className="text-slate-300 hover:text-white transition">
            Contact
          </a>
        </nav>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Lumen Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
