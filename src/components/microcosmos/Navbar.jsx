import { useState, useEffect } from 'react'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-deep-dark/90 backdrop-blur-md border-b border-border-subtle'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <a href="#" className="text-xl font-bold text-text-primary tracking-tight">
          Micro<span className="text-accent">Cosmos</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm text-text-secondary">
          <a href="#gallery" className="hover:text-text-primary transition-colors">Gallery</a>
          <a href="#" className="hover:text-text-primary transition-colors">Technology</a>
          <a href="#" className="hover:text-text-primary transition-colors">Habitats</a>
          <a href="#" className="hover:text-text-primary transition-colors">Facts</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
