export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gold rounded-sm flex items-center justify-center">
                <span className="text-charcoal font-extrabold text-sm">AM</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-sm tracking-wide">ARTITECT</span>
                <span className="text-gold text-[10px] tracking-[0.2em] uppercase">Machinery</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Precision metal folding machines engineered for performance, built for reliability.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Products</h4>
            <ul className="space-y-2.5">
              {['Double Folding Machine', 'Double Folder', 'Sheet Metal Folder', 'Sheet Metal Folding Machine', 'Metal Folder', 'Metal Folding Machine'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-gray-400 hover:text-gold text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Company</h4>
            <ul className="space-y-2.5">
              {['About Us', 'Our Technology', 'Certifications', 'Careers', 'News'].map((item) => (
                <li key={item}>
                  <a href="#about" className="text-gray-400 hover:text-gold text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 tracking-wide">Support</h4>
            <ul className="space-y-2.5">
              {['Technical Support', 'Spare Parts', 'Training', 'Documentation', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#contact" className="text-gray-400 hover:text-gold text-sm transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gold text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
