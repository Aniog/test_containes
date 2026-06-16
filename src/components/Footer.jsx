import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Products': [
      'Double Folding Machine',
      'Double Folder',
      'Sheet Metal Folder',
      'Sheet Metal Folding Machine',
      'Metal Folder',
      'View All Products'
    ],
    'Company': [
      'About Us',
      'Our Team',
      'Careers',
      'News & Events',
      'Case Studies'
    ],
    'Support': [
      'Documentation',
      'Service & Parts',
      'Training',
      'Warranty',
      'FAQ'
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              ARTITECT<span className="text-blue-400">MACHINERY</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Precision sheet metal folding solutions for industries worldwide.
              Engineering excellence since 2000.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>(123) 456-7890</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>info@artitectmachinery.com</span>
              </div>
              <div className="flex items-start text-gray-400">
                <MapPin className="w-5 h-5 mr-3 text-blue-400 mt-1" />
                <span>123 Industrial Parkway<br />Manufacturing City, MC 12345</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-6">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-12 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-4">
              Stay Updated with ARTITECT MACHINERY
            </h4>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest product updates, industry insights, and exclusive offers.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ARTITECT MACHINERY. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
