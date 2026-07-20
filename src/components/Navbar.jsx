import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useCartStore } from '@/lib/store'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cart, openDrawer } = useCartStore()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  const navLinks = [
    { title: 'Shop', href: '/shop' },
    { title: 'Collections', href: '/shop?collection=all' },
    { title: 'About', href: '#' },
    { title: 'Journal', href: '#' },
  ]

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 lg:px-12',
        isScrolled || !isHome
          ? 'bg-background/95 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-1">
          <span className="text-2xl lg:text-3xl font-serif tracking-widest uppercase">
            Velmora
          </span>
        </Link>

        {/* Center Links - Desktop */}
        <div className="hidden lg:flex items-center space-x-12 flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.href}
              className="text-xs uppercase tracking-widest hover:text-accent transition-colors duration-300"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-6 lg:space-x-8 flex-1 justify-end">
          <button className="hover:text-accent transition-colors">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button onClick={openDrawer} className="relative hover:text-accent transition-colors">
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-base text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans font-medium">
                {cartCount}
              </span>
            )}
          </button>
          <button
            className="lg:hidden hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-[60] p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-serif tracking-widest uppercase">
                Velmora
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-base/5 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-8">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.href}
                  className="text-2xl font-serif flex justify-between items-center border-b border-base/5 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
