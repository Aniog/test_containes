import React from 'react'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">China Green Energy</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Exploring China's remarkable journey towards sustainable energy solutions. 
              From solar farms to wind turbines, discover how China is leading the global 
              green energy revolution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Energy Sources</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/solar" className="hover:text-green-400 transition-colors">Solar Power</a></li>
              <li><a href="/wind" className="hover:text-green-400 transition-colors">Wind Energy</a></li>
              <li><a href="/hydro" className="hover:text-green-400 transition-colors">Hydroelectric</a></li>
              <li><a href="/statistics" className="hover:text-green-400 transition-colors">Statistics</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@chinagreenergy.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+86 10 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Beijing, China</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} China Green Energy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer