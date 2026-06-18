import { Microscope } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-teal-900/40 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-black text-lg">
          <Microscope className="w-5 h-5 text-teal-400" />
          <span>Micro<span className="text-teal-400">Cosmos</span></span>
        </div>
        <p className="text-slate-500 text-sm text-center">
          Revealing the invisible universe, one image at a time.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#explore" className="hover:text-teal-400 transition-colors">Explore</a>
          <a href="#gallery" className="hover:text-teal-400 transition-colors">Gallery</a>
          <a href="#specimens" className="hover:text-teal-400 transition-colors">Specimens</a>
          <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
        </div>
      </div>
      <div className="text-center mt-6 text-slate-600 text-xs">
        © 2026 MicroCosmos. All rights reserved.
      </div>
    </footer>
  )
}
