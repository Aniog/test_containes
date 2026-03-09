import React, { useState } from 'react'
import { Menu, X, Gamepad2, ShoppingCart, Newspaper, Tag, Home, ChevronDown } from 'lucide-react'

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false)

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isPlatformDropdownOpen && !event.target.closest('.platform-dropdown')) {
        setIsPlatformDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isPlatformDropdownOpen])

  const navigation = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Store', href: '#store', icon: ShoppingCart },
    { name: 'Articles', href: '#articles', icon: Newspaper },
    { name: 'News', href: '#news', icon: Gamepad2 },
    { name: 'Deals', href: '#deals', icon: Tag },
  ]

  const platforms = [
    { 
      category: 'Current Gen',
      items: [
        { name: 'PlayStation 5', href: '#platform/ps5', color: 'text-blue-400' },
        { name: 'Xbox Series X/S', href: '#platform/xbox-series', color: 'text-green-400' },
        { name: 'Nintendo Switch', href: '#platform/switch', color: 'text-red-400' },
        { name: 'PC (Steam)', href: '#platform/steam', color: 'text-blue-300' },
        { name: 'Epic Games', href: '#platform/epic', color: 'text-gray-300' },
      ]
    },
    {
      category: 'Previous Gen',
      items: [
        { name: 'PlayStation 4', href: '#platform/ps4', color: 'text-blue-300' },
        { name: 'Xbox One', href: '#platform/xbox-one', color: 'text-green-300' },
        { name: 'Nintendo Wii U', href: '#platform/wii-u', color: 'text-red-300' },
      ]
    },
    {
      category: 'Retro/Handheld',
      items: [
        { name: 'Nintendo 3DS', href: '#platform/3ds', color: 'text-red-200' },
        { name: 'PlayStation Vita', href: '#platform/vita', color: 'text-blue-200' },
        { name: 'PSP', href: '#platform/psp', color: 'text-blue-200' },
        { name: 'Game Boy Advance', href: '#platform/gba', color: 'text-purple-300' },
        { name: 'Nintendo DS', href: '#platform/ds', color: 'text-red-200' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Gamepad2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">GameHub</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                  >
                    <Icon className="h-4 w-4 mr-2" />
                    {item.name}
                  </a>
                )
              })}
              
              {/* Platforms Dropdown */}
              <div className="relative platform-dropdown">
                <button
                  onClick={() => setIsPlatformDropdownOpen(!isPlatformDropdownOpen)}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                >
                  <Gamepad2 className="h-4 w-4 mr-2" />
                  Platforms
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${isPlatformDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isPlatformDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-50">
                    <div className="p-4">
                      {platforms.map((category, categoryIndex) => (
                        <div key={category.category} className={categoryIndex > 0 ? 'mt-4' : ''}>
                          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            {category.category}
                          </h3>
                          <div className="space-y-1">
                            {category.items.map((platform) => (
                              <a
                                key={platform.name}
                                href={platform.href}
                                className={`block px-3 py-2 text-sm ${platform.color} hover:bg-gray-700 rounded-md transition-colors`}
                                onClick={() => setIsPlatformDropdownOpen(false)}
                              >
                                {platform.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </a>
                )
              })}
              
              {/* Mobile Platforms Section */}
              <div className="border-t border-gray-700 mt-3 pt-3">
                <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Platforms
                </div>
                {platforms.map((category) => (
                  <div key={category.category} className="mb-3">
                    <div className="px-3 py-1 text-xs font-medium text-gray-500 uppercase">
                      {category.category}
                    </div>
                    {category.items.map((platform) => (
                      <a
                        key={platform.name}
                        href={platform.href}
                        className={`block px-6 py-2 text-sm ${platform.color} hover:bg-gray-700 rounded-md transition-colors`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {platform.name}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Gamepad2 className="h-6 w-6 text-blue-500" />
                <span className="ml-2 text-lg font-bold">GameHub</span>
              </div>
              <p className="text-gray-400 text-sm">
                Your ultimate destination for gaming news, reviews, and the best deals across all platforms.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Platforms</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Steam</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Epic Games</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Nintendo Switch</a></li>
                <li><a href="#" className="hover:text-white transition-colors">PlayStation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Xbox</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Content</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Game Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Gaming News</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides & Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interviews</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} GameHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout