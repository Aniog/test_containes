import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-sm bg-amber-500" aria-hidden />
            <span className="font-serif text-xl tracking-wide text-white">
              ARTITECT <span className="text-slate-400 font-normal">MACHINERY</span>
            </span>
          </Link>
          <p className="mt-5 text-slate-400 max-w-md leading-relaxed">
            Precision-engineered double folding machines and sheet metal folders,
            designed for fabricators who measure success in tenths of a millimeter.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/" className="hover:text-white transition">Home</Link></li>
            <li><Link to="/products" className="hover:text-white transition">Products</Link></li>
            <li><Link to="/about" className="hover:text-white transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-amber-500 font-semibold">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-slate-400" strokeWidth={1.5} />
              <span>Industrial Park, Building 14<br />Foshan, Guangdong, China</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
              <span>+86 757 8888 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-slate-400" strokeWidth={1.5} />
              <a href="mailto:sales@artitect-machinery.com" className="hover:text-white transition">
                sales@artitect-machinery.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.</p>
          <p>Engineered with precision. Built to last.</p>
        </div>
      </div>
    </footer>
  )
}
