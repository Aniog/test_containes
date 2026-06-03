import { Outlet, Link, useLocation } from 'react-router-dom'
import { Bike } from 'lucide-react'

function Layout() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Bike className="w-8 h-8 text-blue-600 mr-2" />
                <span className="text-xl font-bold text-gray-900">CycleLife</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link 
                to="/" 
                className={`transition-colors ${
                  isActive('/') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${
                  isActive('/about') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
              </Link>
              <Link 
                to="/bikes" 
                className={`transition-colors ${
                  isActive('/bikes') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Bikes
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors ${
                  isActive('/services') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/articles" 
                className={`transition-colors ${
                  isActive('/articles') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Articles
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${
                  isActive('/contact') 
                    ? 'text-blue-600 font-semibold' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Bike className="w-8 h-8 text-blue-400 mr-2" />
                <span className="text-xl font-bold">CycleLife</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner for all cycling adventures. Quality bikes, expert service, endless possibilities.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link to="/bikes" className="text-gray-400 hover:text-white transition-colors">Bikes</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link to="/articles" className="text-gray-400 hover:text-white transition-colors">Articles</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Bike Types</h3>
              <ul className="space-y-2">
                <li><Link to="/bikes?category=mountain" className="text-gray-400 hover:text-white transition-colors">Mountain Bikes</Link></li>
                <li><Link to="/bikes?category=road" className="text-gray-400 hover:text-white transition-colors">Road Bikes</Link></li>
                <li><Link to="/bikes?category=city" className="text-gray-400 hover:text-white transition-colors">City Bikes</Link></li>
                <li><Link to="/bikes?category=electric" className="text-gray-400 hover:text-white transition-colors">Electric Bikes</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Bike Street</li>
                <li>Cycling City, CC 12345</li>
                <li>(555) 123-BIKE</li>
                <li>info@cyclelife.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2026 CycleLife. All rights reserved. Ride safe, ride free.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout