import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#tigers', label: '认识老虎' },
    { href: '#visit', label: '参观信息' },
    { href: '#', label: '保护项目' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 shadow-xl shadow-black/50' : 'py-5'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold text-white flex items-center gap-2"
          style={{ fontFamily: "'Noto Serif SC', serif" }}
        >
          <span>🐯</span>
          <span>老虎公园</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-neutral-300 hover:text-amber-400 transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#visit"
            className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded transition-colors"
          >
            立即购票
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="菜单"
        >
          <div className="w-5 h-0.5 bg-white mb-1 transition-all" style={{ transform: menuOpen ? 'rotate(45deg) translate(2px, 6px)' : 'none' }} />
          <div className="w-5 h-0.5 bg-white mb-1 transition-all" style={{ opacity: menuOpen ? 0 : 1 }} />
          <div className="w-5 h-0.5 bg-white transition-all" style={{ transform: menuOpen ? 'rotate(-45deg) translate(2px, -6px)' : 'none' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-neutral-800 mt-3" style={{ backgroundColor: 'rgba(10,10,10,0.98)' }}>
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-neutral-300 hover:text-amber-400 transition-colors text-sm font-medium py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#visit"
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-500 text-white text-sm font-semibold rounded transition-colors text-center"
              onClick={() => setMenuOpen(false)}
            >
              立即购票
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
