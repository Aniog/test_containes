import React from 'react'

const navItems = ['Products', 'Engineering', 'Service', 'Contact']

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-white sm:px-8 lg:px-10" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 text-white" aria-label="ARTITECT MACHINERY home">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10 font-display text-2xl font-bold text-white shadow-soft backdrop-blur">
            A
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-[0.24em] text-white">ARTITECT</span>
            <span className="block text-xs font-medium tracking-[0.18em] text-white/80">MACHINERY</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-medium text-white shadow-soft backdrop-blur md:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/85 transition hover:text-white">
              {item}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-artitect-brass px-5 py-3 text-sm font-semibold text-artitect-ink shadow-soft transition hover:bg-artitect-brass-dark hover:text-white sm:inline-flex">
          Request a Quote
        </a>
      </nav>
    </header>
  )
}

export default Header
