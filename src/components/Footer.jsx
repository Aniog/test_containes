import { Facebook, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AM</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">ARTITECT</h3>
                <p className="text-xs text-gray-400 tracking-wider">MACHINERY</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Precision sheet metal folding machines engineered in Germany. Delivering excellence to manufacturers worldwide since 1999.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Double Folding Machine</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Double Folder</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Sheet Metal Folder</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Sheet Metal Folding Machine</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Metal Folder</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Metal Folding Machine</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Industrial Park 123</li>
              <li>45678 Munich, Germany</li>
              <li className="pt-2">+49 123 456 7890</li>
              <li>info@artitect-machinery.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-900 text-white rounded-full shadow-lg hover:bg-blue-800 transition-all hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  )
}

export default Footer
