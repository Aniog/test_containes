import { Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg font-extrabold tracking-tight text-slate-50">
                ARTITECT
              </span>
              <span className="text-lg font-light tracking-widest text-cyan-400">
                MACHINERY
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Precision-engineered double folding machines, sheet metal folders,
              and metal folding machines for fabricators worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Double Folding Machine
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Double Folder
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Sheet Metal Folder
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  Metal Folding Machine
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#home" className="hover:text-cyan-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan-400 transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#applications" className="hover:text-cyan-400 transition-colors">
                  Applications
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-50 font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                <span>123 Industrial Blvd, Suite 400<br />Manufacturing City, MC 10101</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+18001234567" className="hover:text-cyan-400">
                  1-800-123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:sales@artitectmachinery.com" className="hover:text-cyan-400">
                  sales@artitectmachinery.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
