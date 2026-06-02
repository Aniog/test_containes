import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Organisms', href: '#organisms' },
  { label: 'Science', href: '#science' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const scrollToSection = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-2">
          <span className="text-teal-400 text-2xl font-black tracking-tight">Micro<span className="text-white">Cosmos</span></span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-gray-300 hover:text-teal-400 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, '#contact')}
          className="bg-teal-500 hover:bg-teal-400 text-white font-semibold px-5 py-2 rounded-full text-sm transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  )
}
