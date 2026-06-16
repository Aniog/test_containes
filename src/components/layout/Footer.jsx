export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-ink text-cream-soft">
      <div className="max-w-container mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl leading-none text-cream-soft">ARTITECT</span>
              <span className="text-[11px] uppercase tracking-eyebrow text-brass">Machinery</span>
            </div>
            <p className="mt-5 text-slate leading-relaxed max-w-md">
              Precision sheet metal folding machinery, engineered for fabricators who treat every fold as a
              finished detail. Designed and built with the long view in mind.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] uppercase tracking-eyebrow text-brass mb-4">Explore</h4>
            <ul className="space-y-3 text-sm text-cream-soft/90">
              <li><a href="#products" className="hover:text-brass transition-colors">Products</a></li>
              <li><a href="#why" className="hover:text-brass transition-colors">Why ARTITECT</a></li>
              <li><a href="#industries" className="hover:text-brass transition-colors">Industries</a></li>
              <li><a href="#process" className="hover:text-brass transition-colors">Process</a></li>
              <li><a href="#contact" className="hover:text-brass transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] uppercase tracking-eyebrow text-brass mb-4">Headquarters</h4>
            <address className="not-italic text-sm text-cream-soft/90 leading-relaxed">
              ARTITECT Machinery S.A.<br />
              14 Rue des Forges<br />
              44100 Nantes, France
            </address>
            <p className="mt-4 text-sm text-cream-soft/90">
              <a href="mailto:hello@artitect-machinery.com" className="hover:text-brass transition-colors">
                hello@artitect-machinery.com
              </a>
            </p>
            <p className="text-sm text-cream-soft/90">
              <a href="tel:+33240400000" className="hover:text-brass transition-colors">
                +33 (0)2 40 40 00 00
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-line-dark flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-eyebrow text-slate">
            © {year} ARTITECT Machinery — All rights reserved
          </p>
          <p className="text-xs uppercase tracking-eyebrow text-slate">
            Engineered with intent · Built to outlast trends
          </p>
        </div>
      </div>
    </footer>
  )
}
