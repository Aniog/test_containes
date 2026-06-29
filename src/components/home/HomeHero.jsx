import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-accent border border-accent/30 rounded-full">
              Precision Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Sheet Metal Folding
              <span className="block text-accent">Perfected.</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
              ARTITECT MACHINERY delivers industrial-grade double folding machines engineered for precision, durability, and unmatched performance in sheet metal fabrication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-primary bg-accent rounded-lg hover:bg-accent-dark transition-colors duration-200"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white border border-white/20 rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Request a Quote
              </Link>
            </div>
            <div className="flex flex-wrap gap-6">
              {['ISO 9001 Certified', '10-Year Warranty', 'Global Support'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] bg-primary-light rounded-2xl overflow-hidden border border-gray-700">
              <div
                data-strk-bg-id="hero-machine-8f2a9c"
                data-strk-bg="[hero-subtitle] [hero-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
                className="w-full h-full"
              />
            </div>
            <div className="hidden" id="hero-title">Sheet metal folding machine industrial</div>
            <div className="hidden" id="hero-subtitle">Double folder precision machinery</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
    </section>
  )
}