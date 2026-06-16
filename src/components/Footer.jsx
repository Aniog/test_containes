import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">ARTITECT</span>
                <span className="block text-xs text-yellow-500 font-medium -mt-1">MACHINERY</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Leading manufacturer of precision metal folding machines, delivering innovative solutions to industries worldwide since 2009.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#products" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Double Folding Machine</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Double Folder</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Sheet Metal Folder</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Sheet Metal Folding Machine</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Metal Folder</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Metal Folding Machine</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">About Us</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Features</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Technical Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">Downloads</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-yellow-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">123 Industrial Parkway<br />Manufacturing District, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-yellow-500 flex-shrink-0" size={18} />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-yellow-500 flex-shrink-0" size={18} />
                <a href="mailto:sales@artitectmachinery.com" className="text-gray-400 hover:text-yellow-500 transition-colors text-sm">sales@artitectmachinery.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-yellow-500 transition-colors text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}