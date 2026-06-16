import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="dark-section text-slate-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-brand-amber rounded-lg flex items-center justify-center">
                <span className="text-navy-900 font-bold text-sm">A</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                ARTITECT MACHINERY
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Industry-leading manufacturer of precision sheet metal folding machines.
              Engineered for performance, built for reliability.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="hover:text-brand-amber transition-colors">Double Folding Machines</a></li>
              <li><a href="#products" className="hover:text-brand-amber transition-colors">Sheet Metal Folders</a></li>
              <li><a href="#products" className="hover:text-brand-amber transition-colors">Metal Folding Machines</a></li>
              <li><a href="#products" className="hover:text-brand-amber transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-amber" />
                <span>info@artitectmachinery.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-amber" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-amber mt-0.5" />
                <span>Industrial District, Manufacturing City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700/50 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-brand-amber transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-brand-amber transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
