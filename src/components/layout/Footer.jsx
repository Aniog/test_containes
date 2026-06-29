const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 border-2 border-brand-gold flex items-center justify-center">
                <span className="text-brand-gold font-extrabold text-sm">AM</span>
              </div>
              <span className="text-white font-bold text-lg tracking-wider">
                ARTITECT <span className="text-brand-gold">MACHINERY</span>
              </span>
            </div>
            <p className="text-brand-cream/50 text-sm leading-relaxed">
              Precision-engineered metal folding machines for the global fabrication industry.
            </p>
          </div>

          <div>
            <h4 className="text-brand-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {['Double Folding Machine', 'Double Folder', 'Sheet Metal Folder', 'Metal Folder Machine'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-brand-cream/60 hover:text-brand-gold text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {['About Us', 'Our Features', 'Contact', 'Careers'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-brand-cream/60 hover:text-brand-gold text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-brand-cream/60 text-sm">
              <li>+86 555 1234 5678</li>
              <li>sales@artitectmachinery.com</li>
              <li>Ma'anshan, Anhui, China</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-cream/40 text-sm">
            &copy; {currentYear} ARTITECT MACHINERY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-brand-cream/40 hover:text-brand-gold text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-cream/40 hover:text-brand-gold text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
