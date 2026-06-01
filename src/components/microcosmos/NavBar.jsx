import { useState } from 'react'
import { Menu, X, Microscope } from 'lucide-react'

const links = ['Explore', 'Gallery', 'Specimens', 'Worlds', 'About']

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Microscope className="w-6 h-6 text-teal-400" />
          <span className="text-white font-bold text-lg tracking-tight">
            Micro<span className="text-teal-400">Cosmos</span>
          </span>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-teal-400 text-sm font-medium transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#explore"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-teal-400 text-gray-950 text-sm font-semibold hover:bg-teal-300 transition-colors duration-200"
        >
          Start Exploring
        </a>

        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-teal-400 text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#explore"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-teal-400 text-gray-950 text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Start Exploring
          </a>
        </div>
      )}
    </nav>
  )
}
