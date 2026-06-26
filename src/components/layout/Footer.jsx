import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              ARTITECT
              <span className="text-amber-500"> MACHINERY</span>
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Engineering precision folding solutions for sheet metal and metal
              fabrication workshops worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="hover:text-amber-500 transition">
                  Double Folding Machine
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-500 transition">
                  Sheet Metal Folder
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-500 transition">
                  Metal Folding Machine
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-500 transition">
                  Double Folder
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-amber-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-500 transition">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 mt-0.5" />
                <span>sales@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5" />
                <span>1200 Industrial Blvd, Suite 300</span>
              </li>
            </ul>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="hover:text-amber-500 transition">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-amber-500 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-amber-500 transition">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
