import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-9 w-9 items-center justify-center bg-amber-500 text-neutral-950 font-serif text-lg leading-none">
                A
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg tracking-wide text-neutral-50">Artitect</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">Machinery</span>
              </span>
            </div>
            <p className="text-neutral-400 max-w-md leading-relaxed">
              Precision engineered double folders, sheet metal folders, and metal folding machines for
              fabricators who measure quality in tenths of a millimetre.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-amber-500 transition">Home</Link></li>
              <li><Link to="/products" className="hover:text-amber-500 transition">Products</Link></li>
              <li><Link to="/about" className="hover:text-amber-500 transition">About</Link></li>
              <li><Link to="/contact" className="hover:text-amber-500 transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-500 shrink-0" />
                <span className="text-neutral-300">
                  Industrieweg 14<br />
                  4283 GZ, Giessen<br />
                  The Netherlands
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <span>+31 (0)183 555 880</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <span>sales@artitectmachinery.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} Artitect Machinery B.V. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 tracking-wide">
            Engineered in the Netherlands. Built for the world.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
