import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="bg-white shadow-sm fixed w-full z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-3">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gray-900">ARTITECT</h1>
                <p className="text-xs text-gray-600 tracking-wider">MACHINERY</p>
              </div>
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-blue-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-8 inline-flex items-center justify-center rounded-lg border border-transparent bg-blue-900 px-6 py-2.5 text-base font-medium text-white shadow-sm hover:bg-blue-800 transition-all"
            >
              Get Quote
            </a>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block rounded-md bg-blue-900 px-3 py-2 text-base font-medium text-white hover:bg-blue-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
