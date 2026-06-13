import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils.js'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#1E293B]'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNav(e, '#home')}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-lg bg-[#C9A45C] flex items-center justify-center">
              <span className="text-[#0B0F19] font-extrabold text-lg leading-none">A</span>
            </div>
            <span className="text-[#F5F5F5] font-bold text-lg tracking-wide uppercase">
              ARTITECT MACHINERY
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-[#9BA3AF] hover:text-[#C9A45C] text-sm font-medium uppercase tracking-widest transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="bg-[#C9A45C] hover:bg-[#D4B76A] text-[#0B0F19] px-6 py-2.5 rounded-lg text-sm font-semibold uppercase tracking-widest transition-colors duration-200"
            >
              Get a Quote
            </a>
          </nav>

          <button
            className="md:hidden text-[#F5F5F5]"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0B0F19]/95 backdrop-blur-md border-b border-[#1E293B]">
          <div className="mx-auto max-w-[1280px] px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-[#9BA3AF] hover:text-[#C9A45C] text-sm font-medium uppercase tracking-widest transition-colors duration-200 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, '#contact')}
              className="bg-[#C9A45C] hover:bg-[#D4B76A] text-[#0B0F19] px-6 py-3 rounded-lg text-sm font-semibold uppercase tracking-widest transition-colors duration-200 text-center mt-2"
            >
              Get a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
