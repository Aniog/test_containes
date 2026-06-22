import React from 'react'
import { Microscope, Instagram, Twitter, Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 text-slate-100">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center text-slate-950">
              <Microscope className="w-5 h-5" strokeWidth={2.4} />
            </span>
            <span className="font-serif text-xl tracking-tight">MicroCosmos</span>
          </div>
          <p className="text-slate-400 mt-5 max-w-md leading-relaxed">
            A visual atlas of the microscopic world, built by a small collective
            of biologists, photographers, and curious amateurs across 14
            countries.
          </p>
          <div className="flex gap-3 mt-6">
            <a aria-label="Instagram" href="#" className="w-9 h-9 rounded-full border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a aria-label="Twitter" href="#" className="w-9 h-9 rounded-full border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a aria-label="GitHub" href="#" className="w-9 h-9 rounded-full border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a aria-label="Email" href="#" className="w-9 h-9 rounded-full border border-slate-800 hover:border-cyan-400 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a href="#gallery" className="hover:text-cyan-400">The gallery</a></li>
            <li><a href="#worlds" className="hover:text-cyan-400">Six worlds</a></li>
            <li><a href="#stories" className="hover:text-cyan-400">Stories</a></li>
            <li><a href="#journal" className="hover:text-cyan-400">Journal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-4">
            About
          </h4>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li><a href="#" className="hover:text-cyan-400">Our team</a></li>
            <li><a href="#" className="hover:text-cyan-400">Contributors</a></li>
            <li><a href="#" className="hover:text-cyan-400">Press kit</a></li>
            <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-slate-500">
            © 2026 MicroCosmos Collective. All specimens photographed with care.
          </p>
          <div className="flex gap-5 text-xs text-slate-500">
            <a href="#" className="hover:text-cyan-400">Privacy</a>
            <a href="#" className="hover:text-cyan-400">Terms</a>
            <a href="#" className="hover:text-cyan-400">Code of conduct</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
