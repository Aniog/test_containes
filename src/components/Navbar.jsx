import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">AM</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">ARTITECT</span>
              <span className="text-sm text-blue-700 font-semibold tracking-wider">MACHINERY</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Home
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-700 font-medium transition-colors"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {productsOpen && (
                <div
                  className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg py-2 mt-2"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link to="/products#double-folding" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                    Double Folding Machine
                  </Link>
                  <Link to="/products#sheet-metal" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                    Sheet Metal Folder
                  </Link>
                  <Link to="/products#metal-folding" className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors">
                    Metal Folding Machine
                  </Link>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-800 transition-colors shadow-md"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-700 font-medium">
              Home
            </Link>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-blue-700 font-medium"
            >
              Products
              <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            {productsOpen && (
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/products#double-folding" className="block py-2 text-gray-600 hover:text-blue-700">
                  Double Folding Machine
                </Link>
                <Link to="/products#sheet-metal" className="block py-2 text-gray-600 hover:text-blue-700">
                  Sheet Metal Folder
                </Link>
                <Link to="/products#metal-folding" className="block py-2 text-gray-600 hover:text-blue-700">
                  Metal Folding Machine
                </Link>
              </div>
            )}
            <Link to="/about" className="block py-2 text-gray-700 hover:text-blue-700 font-medium">
              About
            </Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-700 font-medium">
              Contact
            </Link>
            <Link
              to="/contact"
              className="block mt-4 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-blue-800 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
