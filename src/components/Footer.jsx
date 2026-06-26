import { Factory } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-accent-gold/15 flex items-center justify-center">
                <Factory className="w-4 h-4 text-accent-gold" />
              </div>
              <span className="font-[family-name:var(--font-family-heading)] text-lg font-bold text-text-primary">
                ARTITECT<span className="text-accent-gold"> MACHINERY</span>
              </span>
            </a>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              Precision sheet metal folding solutions trusted by fabricators
              worldwide. Double folding machines, sheet metal folders, and metal
              folding machines built to the highest standards.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {['Products', 'About Us', 'Contact', 'Request a Quote'].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-text-secondary hover:text-accent-gold transition-colors text-sm"
                  >
                    {link}
                  </a>
                ),
              )}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-text-primary font-semibold text-sm mb-4 uppercase tracking-wider">
              Products
            </h4>
            <div className="flex flex-col gap-3">
              {[
                'Double Folding Machine',
                'Sheet Metal Folder',
                'Metal Folding Machine',
              ].map((product) => (
                <a
                  key={product}
                  href="#products"
                  className="text-text-secondary hover:text-accent-gold transition-colors text-sm"
                >
                  {product}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} ARTITECT MACHINERY. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-text-muted hover:text-text-secondary transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-text-muted hover:text-text-secondary transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
