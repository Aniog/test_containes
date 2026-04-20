import { Gamepad2, Github, Twitter, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <Gamepad2 className="w-6 h-6 text-indigo-400" />
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                GameVault
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your ultimate destination for gaming news, deals, and the best games across all platforms.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Navigate</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/news" className="hover:text-white transition-colors">News & Blog</Link></li>
              <li><Link to="/discounts" className="hover:text-white transition-colors">Deals</Link></li>
              <li><Link to="/store" className="hover:text-white transition-colors">Store</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Platforms</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/discounts?platform=Steam" className="hover:text-white transition-colors">Steam</Link></li>
              <li><Link to="/discounts?platform=Epic" className="hover:text-white transition-colors">Epic Games</Link></li>
              <li><Link to="/discounts?platform=Nintendo" className="hover:text-white transition-colors">Nintendo</Link></li>
              <li><Link to="/discounts?platform=PlayStation" className="hover:text-white transition-colors">PlayStation</Link></li>
              <li><Link to="/discounts?platform=Xbox" className="hover:text-white transition-colors">Xbox</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Content</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/news?category=news" className="hover:text-white transition-colors">Latest News</Link></li>
              <li><Link to="/news?category=review" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/news?category=guide" className="hover:text-white transition-colors">Guides</Link></li>
              <li><Link to="/news?category=blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          © 2026 GameVault. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
