export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-xl font-bold tracking-tighter mb-6">
              ARTITECT<span className="text-sky-500">.</span> MACHINERY
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Leading manufacturer of high-precision double folding and sheet metal machines. Committed to engineering excellence since 1995.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/products" className="hover:text-white transition-colors">Double Folding Machines</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Sheet Metal Folders</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">CNC Folding Solutions</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Manual Metal Folders</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service & Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>1230 Engineering Way</li>
              <li>Industrial Zone, 45000</li>
              <li>Email: info@artitect-machinery.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2026 ARTITECT MACHINERY Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
