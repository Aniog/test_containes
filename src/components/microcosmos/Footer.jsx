import { Microscope } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] border-t border-cyan-900/30 py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-white font-black text-lg">
          <Microscope className="w-5 h-5 text-cyan-400" />
          <span>Micro<span className="text-cyan-400">Cosmos</span></span>
        </div>
        <p className="text-slate-500 text-sm text-center">
          Exploring the invisible universe — one micron at a time.
        </p>
        <div className="flex gap-6">
          {['Explore', 'Gallery', 'Organisms', 'Science'].map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">
              {link}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center text-slate-600 text-xs">
        © {new Date().getFullYear()} MicroCosmos. All rights reserved.
      </div>
    </footer>
  )
}
