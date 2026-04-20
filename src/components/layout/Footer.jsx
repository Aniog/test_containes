import { Link } from 'react-router-dom'
import { Gamepad2, Github, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl mb-3">
              <Gamepad2 className="w-6 h-6 text-indigo-400" />
              GameVault
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for gaming news, deals, and the best games across all platforms.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News & Articles</Link></li>
              <li><Link to="/discounts" className="hover:text-white transition-colors">Deals & Discounts</Link></li>
              <li><Link to="/store" className="hover:text-white transition-colors">Store</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Platforms</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/discounts?platform=steam" className="hover:text-white transition-colors">Steam</Link></li>
              <li><Link to="/discounts?platform=epic" className="hover:text-white transition-colors">Epic Games</Link></li>
              <li><Link to="/discounts?platform=nintendo" className="hover:text-white transition-colors">Nintendo Switch</Link></li>
              <li><Link to="/discounts?platform=playstation" className="hover:text-white transition-colors">PlayStation</Link></li>
              <li><Link to="/discounts?platform=xbox" className="hover:text-white transition-colors">Xbox</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GameVault. All rights reserved. Game prices and availability subject to change.
        </div>
      </div>
    </footer>
  )
}
