import React from 'react'
import { Heart, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-amber-400">About HorseBreeds</h3>
            <p className="text-gray-300 mb-4">
              Discover the fascinating world of horse breeds from around the globe. Our comprehensive 
              database features detailed information about hundreds of horse breeds, their origins, 
              characteristics, and unique traits.
            </p>
            <div className="flex items-center space-x-1 text-gray-300">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for horse enthusiasts worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#breeds" className="text-gray-300 hover:text-amber-400 transition-colors">Browse Breeds</a></li>
              <li><a href="#popular" className="text-gray-300 hover:text-amber-400 transition-colors">Popular Breeds</a></li>
              <li><a href="#learn" className="text-gray-300 hover:text-amber-400 transition-colors">Learn More</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-400">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <span>info@horsebreeds.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Equestrian Center, USA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} HorseBreeds. All rights reserved. Educational content for horse enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer