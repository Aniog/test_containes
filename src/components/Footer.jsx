import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg font-bold mb-4 tracking-tight uppercase">ARTITECT MACHINERY</h3>
            <p className="max-w-md mb-6">
              Empowering industrial growth with cutting-edge sheet metal folding solutions. Precision, durability, and innovation for professional fabricators worldwide.
            </p>
            <div className="flex space-x-4">
              {/* Social icons placeholder */}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/products" className="hover:text-white transition-colors">Double Folding Machines</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Double Folders</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Sheet Metal Folders</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Folding Machine Series</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technological Advantage</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-center">
          <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
