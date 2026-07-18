import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X, Search } from 'lucide-react'
import CartDrawer from './components/CartDrawer'

function Layout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
    { name: 'Journal', path: '/journal' }
  ]

  return React.createElement('div', {className: 'min-h-screen bg-white'},
    // Navigation
    React.createElement('nav', {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`
    },
      React.createElement('div', {className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'},
        React.createElement('div', {className: 'flex items-center justify-between h-16'},
          // Logo
          React.createElement(Link, {to: '/', className: 'font-serif text-2xl tracking-widest'}, 'VELMORA'),
          
          // Desktop Nav
          React.createElement('div', {className: 'hidden md:flex items-center space-x-8'},
            navLinks.map((link, index) =>
              React.createElement(Link, {
                key: index,
                to: link.path,
                className: 'text-sm tracking-wide hover:text-gold-600 transition-colors'
              }, link.name)
            )
          ),
          
          // Icons
          React.createElement('div', {className: 'flex items-center space-x-4'},
            React.createElement('button', {className: 'p-2 hover:text-gold-600'},
              React.createElement(Search, {size: 20})
            ),
            React.createElement('button', {
              className: 'p-2 hover:text-gold-600',
              onClick: () => setIsCartOpen(true)
            },
              React.createElement(ShoppingBag, {size: 20})
            ),
            React.createElement('button', {
              className: 'md:hidden p-2',
              onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen)
            },
              isMobileMenuOpen ? React.createElement(X, {size: 20}) : React.createElement(Menu, {size: 20})
            )
          )
        )
      )
    ),
    
    // Mobile Menu
    isMobileMenuOpen && React.createElement('div', {
      className: 'fixed inset-0 z-40 bg-white pt-16'
    },
      React.createElement('div', {className: 'px-4 py-8'},
        navLinks.map((link, index) =>
          React.createElement(Link, {
            key: index,
            to: link.path,
            className: 'block py-4 text-lg border-b border-gray-100',
            onClick: () => setIsMobileMenuOpen(false)
          }, link.name)
        )
      )
    ),
    
    // Main Content
    React.createElement('main', {className: 'pt-16'}, children),
    
    // Cart Drawer
    React.createElement(CartDrawer, {isOpen: isCartOpen, onClose: () => setIsCartOpen(false)}),
    
    // Footer
    React.createElement('footer', {className: 'bg-gray-50 border-t border-gray-200 mt-20'},
      React.createElement('div', {className: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'},
        React.createElement('div', {className: 'grid grid-cols-1 md:grid-cols-4 gap-8'},
          // Logo and description
          React.createElement('div', null,
            React.createElement('h3', {className: 'font-serif text-xl mb-4'}, 'VELMORA'),
            React.createElement('p', {className: 'text-sm text-gray-600'}, 'Fine jewelry crafted with care.')
          ),
          
          // Shop links
          React.createElement('div', null,
            React.createElement('h4', {className: 'font-semibold mb-4'}, 'Shop'),
            React.createElement('ul', {className: 'space-y-2'},
              ['Earrings', 'Necklaces', 'Huggies', 'Bestsellers'].map((item, index) =>
                React.createElement('li', {key: index},
                  React.createElement(Link, {to: '/shop', className: 'text-sm text-gray-600 hover:text-gold-600'}, item)
                )
              )
            )
          ),
          
          // Help links
          React.createElement('div', null,
            React.createElement('h4', {className: 'font-semibold mb-4'}, 'Help'),
            React.createElement('ul', {className: 'space-y-2'},
              ['FAQ', 'Shipping', 'Returns', 'Contact'].map((item, index) =>
                React.createElement('li', {key: index},
                  React.createElement('a', {href: '#', className: 'text-sm text-gray-600 hover:text-gold-600'}, item)
                )
              )
            )
          ),
          
          // Company links
          React.createElement('div', null,
            React.createElement('h4', {className: 'font-semibold mb-4'}, 'Company'),
            React.createElement('ul', {className: 'space-y-2'},
              ['About', 'Journal', 'Sustainability', 'Press'].map((item, index) =>
                React.createElement('li', {key: index},
                  React.createElement(Link, {to: '/about', className: 'text-sm text-gray-600 hover:text-gold-600'}, item)
                )
              )
            )
          )
        ),
        
        // Bottom bar
        React.createElement('div', {className: 'mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center'},
          React.createElement('p', {className: 'text-sm text-gray-500'}, '© 2026 Velmora Fine Jewelry'),
          React.createElement('div', {className: 'flex space-x-4 mt-4 md:mt-0'},
            ['Instagram', 'Pinterest', 'TikTok'].map((social, index) =>
              React.createElement('a', {key: index, href: '#', className: 'text-sm text-gray-500 hover:text-gold-600'}, social)
            )
          )
        )
      )
    )
  )
}

export default Layout
