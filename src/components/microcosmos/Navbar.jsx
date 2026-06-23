import { Microscope } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-100">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-teal-400/10 border border-teal-300/30 text-teal-300">
            <Microscope className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-wide">MicroCosmos</span>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <li><a href="#explore" className="hover:text-teal-300 transition">Explore</a></li>
          <li><a href="#gallery" className="hover:text-teal-300 transition">Gallery</a></li>
          <li><a href="#species" className="hover:text-teal-300 transition">Species</a></li>
          <li><a href="#journal" className="hover:text-teal-300 transition">Journal</a></li>
          <li><a href="#contact" className="hover:text-teal-300 transition">Contact</a></li>
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-teal-300/40 bg-teal-300/10 px-4 py-2 text-sm text-teal-200 hover:bg-teal-300/20 transition"
        >
          Begin the journey
        </a>
      </nav>
    </header>
  )
}
