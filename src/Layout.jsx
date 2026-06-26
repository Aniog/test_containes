import React, { useState } from 'react'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="font-serif text-3xl font-bold text-blue-900">ARTITECT</h1>
                <p className="text-xs text-gray-600 tracking-widest font-semibold">MACHINERY</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button onClick={() => scrollToSection('home')} className="nav-link text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
                  Home
                </button>
                <button onClick={() => scrollToSection('products')} className="nav-link text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
                  Products
                </button>
                <button onClick={() => scrollToSection('about')} className="nav-link text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
                  About
                </button>
                <button onClick={() => scrollToSection('contact')} className="nav-link text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-900 to-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:shadow-lg transition-all">
                  Get Quote
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900 focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left">
                Products
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-900 w-full text-left">
                Contact
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-base font-medium bg-blue-900 text-white rounded-md w-full text-left">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Precision in Every Fold
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading manufacturer of sheet metal folding machines. Engineered for accuracy, 
              built for durability, designed for efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('products')} 
                className="bg-white text-blue-900 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-all hover:shadow-xl"
              >
                Explore Products
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-blue-900 transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-blue-900 mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive lineup of precision sheet metal folding equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Double Folding Machine',
                description: 'Advanced dual-folding capability for complex sheet metal configurations with precision control.'
              },
              {
                title: 'Double Folder',
                description: 'High-performance folder designed for repetitive folding tasks with consistent accuracy.'
              },
              {
                title: 'Sheet Metal Folder',
                description: 'Versatile folding solution for various sheet metal thicknesses and materials.'
              },
              {
                title: 'Sheet Metal Folding Machine',
                description: 'Industrial-grade machine engineered for high-volume production environments.'
              },
              {
                title: 'Metal Folder',
                description: 'Precision-engineered folder for professional metal fabrication workshops.'
              },
              {
                title: 'Metal Folding Machine',
                description: 'State-of-the-art folding technology with digital controls and automation ready.'
              },
              {
                title: 'Metal Folder Machine',
                description: 'Robust and reliable folding machine for all your metal fabrication needs.'
              }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="h-64 bg-gradient-to-br from-blue-900 to-blue-600 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-50">⚙️</div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-blue-900 mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button 
                    onClick={() => scrollToSection('contact')} 
                    className="text-blue-900 font-semibold hover:underline"
                  >
                    Request Quote →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-serif text-2xl font-bold mb-4">ARTITECT MACHINERY</h3>
          <p className="text-blue-200 mb-4">Precision sheet metal folding solutions for modern fabrication.</p>
          <p className="text-sm text-blue-200">&copy; 2026 ARTITECT MACHINERY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
