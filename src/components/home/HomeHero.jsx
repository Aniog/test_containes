import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-brand-primary-dark">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-brand-accent/20 text-brand-accent text-sm font-semibold rounded-full mb-6 tracking-wide">
              Precision Engineering Since 1998
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Metal Folding Machines
              <span className="block text-brand-accent">Built for Precision</span>
            </h1>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
              ARTITECT MACHINERY delivers industry-leading double folding machines and sheet metal folders engineered for accuracy, durability, and seamless operation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-accent text-white font-semibold rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg shadow-brand-accent/25"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              {['ISO 9001 Certified', '5-Year Warranty', 'Global Shipping'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-300 text-sm">
                  <CheckCircle className="w-4 h-4 text-brand-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-brand-primary-light/20 to-white/5 border border-white/10 overflow-hidden shadow-2xl">
              <div
                className="w-full h-full"
                data-strk-bg-id="hero-product-bg-a1b2c3"
                data-strk-bg="[hero-product-label]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
              <span id="hero-product-label" className="sr-only">industrial metal folding machine in workshop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}