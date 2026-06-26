import { Mail, Phone, MapPin } from 'lucide-react'

const columns = [
  {
    title: 'Products',
    links: [
      'Double Folding Machine',
      'Double Folder',
      'Sheet Metal Folder',
      'Sheet Metal Folding Machine',
      'Metal Folder',
      'Metal Folding Machine',
    ],
  },
  {
    title: 'Company',
    links: ['About Us', 'Features', 'Quality & Certification', 'Careers', 'News'],
  },
  {
    title: 'Support',
    links: ['Request a Quote', 'Technical Support', 'Spare Parts', 'Training', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500 text-slate-900 font-extrabold text-lg">
                AM
              </span>
              <span className="font-extrabold tracking-tight text-lg text-white leading-none">
                ARTITECT
                <span className="block text-[0.65rem] font-semibold tracking-[0.2em] text-amber-500">
                  MACHINERY
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-sm">
              Precision sheet metal folding machines engineered for demanding
              fabrication. Built to perform, designed to last.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href="mailto:sales@artitect-machinery.com"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-amber-500"
              >
                <Mail className="w-4 h-4 text-amber-500" />
                sales@artitect-machinery.com
              </a>
              <a
                href="tel:+18005550142"
                className="flex items-center gap-3 text-sm text-slate-300 hover:text-amber-500"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                +1 (800) 555-0142
              </a>
              <p className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                1200 Industrial Parkway, Suite 400, Chicago, IL 60607
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-white">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="text-sm text-slate-400 hover:text-amber-500 transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#home" className="text-xs text-slate-500 hover:text-amber-500">
              Privacy Policy
            </a>
            <a href="#home" className="text-xs text-slate-500 hover:text-amber-500">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
