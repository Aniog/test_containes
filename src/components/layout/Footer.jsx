import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-amber-500 text-slate-950 font-extrabold">
                AM
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">
                ARTITECT MACHINERY
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Manufacturer of precision sheet-metal folding machines — double
              folders, sheet metal folders, and powered metal folding machines
              built for fabrication shops worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Products
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#products" className="hover:text-amber-400">Double Folding Machine</a></li>
              <li><a href="#products" className="hover:text-amber-400">Double Folder</a></li>
              <li><a href="#products" className="hover:text-amber-400">Sheet Metal Folder</a></li>
              <li><a href="#products" className="hover:text-amber-400">Metal Folding Machine</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-amber-400" />
                <span>+1 (800) 555-0142</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-amber-400" />
                <span>sales@artitectmachinery.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-amber-400" />
                <span>1200 Industrial Parkway, Cleveland, OH 44114</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
