import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CartDrawer } from './CartDrawer'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  const isHomepage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isHomepage 
      ? isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm text-foreground' 
        : 'bg-transparent text-primary-foreground' 
      : 'bg-background/95 backdrop-blur-md border-b border-border text-foreground sticky'
  }`

  const NavLinks = ({ mobile = false }) => (
    <>
      <Link to="/collections/all" className={`uppercase tracking-widest text-xs font-semibold hover:text-accent transition-colors ${mobile ? 'py-4 border-b border-border block' : ''}`}>Shop</Link>
      <Link to="/collections" className={`uppercase tracking-widest text-xs font-semibold hover:text-accent transition-colors ${mobile ? 'py-4 border-b border-border block' : ''}`}>Collections</Link>
      <Link to="/about" className={`uppercase tracking-widest text-xs font-semibold hover:text-accent transition-colors ${mobile ? 'py-4 border-b border-border block' : ''}`}>About</Link>
      <Link to="/journal" className={`uppercase tracking-widest text-xs font-semibold hover:text-accent transition-colors ${mobile ? 'py-4 block' : ''}`}>Journal</Link>
    </>
  )

  return (
    <>
      <header className={navClasses}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left/Mobile Menu */}
            <div className="flex-1 md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={isHomepage && !isScrolled ? 'text-primary-foreground hover:bg-white/10 hover:text-primary-foreground' : ''}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>

            {/* Desktop Left Nav */}
            <nav className="hidden md:flex flex-1 gap-8">
              <NavLinks />
            </nav>

            {/* Center Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="font-serif text-3xl tracking-wide">VELMORA</Link>
            </div>

            {/* Right Icons */}
            <div className="flex-1 flex justify-end items-center gap-2 sm:gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                className={isHomepage && !isScrolled ? 'text-primary-foreground hover:bg-white/10 hover:text-primary-foreground' : ''}
              >
                <Search className="w-5 h-5" />
              </Button>
              <div className={isHomepage && !isScrolled ? 'text-primary-foreground *:hover:bg-white/10 *:hover:text-primary-foreground' : ''}>
                <CartDrawer />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-6 mt-1 overflow-y-auto">
          <nav className="flex flex-col text-foreground">
            <NavLinks mobile />
          </nav>
        </div>
      )}
    </>
  )
}
