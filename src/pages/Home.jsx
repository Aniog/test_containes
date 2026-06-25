import { Link } from 'react-router-dom'
import { CheckCircle, Factory, Settings, Shield, Star, ArrowRight } from 'lucide-react'

const PRODUCTS = [
  {
    id: 'double-folding-machine',
    name: 'Double Folding Machine',
    tagline: 'Precision dual-side folding in one pass',
    description:
      'Our flagship double folding machine delivers simultaneous bending on both edges, cutting production time in half while maintaining exceptional accuracy.',
    features: [
      'Dual-side simultaneous folding',
      'CNC precision control system',
      'Up to 3mm mild steel capacity',
      'Automatic angle compensation',
    ],
    imgId: 'am-double-folding-a1b2c3',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Versatile bending for any workshop',
    description:
      'Designed for flexibility and ease of use, our sheet metal folder handles a wide range of materials and thicknesses with smooth, consistent results.',
    features: [
      'Quick-change tooling system',
      'Manual and CNC modes',
      'Back gauge with digital readout',
      'Compact footprint design',
    ],
    imgId: 'am-sheet-metal-folder-d4e5f6',
  },
  {
    id: 'metal-folding-machine',
    name: 'Metal Folding Machine',
    tagline: 'Heavy-duty industrial folding power',
    description:
      'Built for high-volume production environments, our metal folding machine combines raw power with intelligent control for unmatched throughput.',
    features: [
      'Heavy-duty welded frame',
      'Hydraulic clamping system',
      'Programmable bend sequences',
      'Safety light curtain included',
    ],
    imgId: 'am-metal-folding-g7h8i9',
  },
]

const WHY_CHOOSE = [
  {
    icon: Settings,
    title: 'Precision Engineering',
    text: 'Every machine is calibrated to micron-level tolerances for consistently perfect folds.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    text: 'Heavy-gauge steel frames and industrial-grade components ensure decades of reliable operation.',
  },
  {
    icon: Factory,
    title: 'Custom Solutions',
    text: 'We configure each machine to your specific workflow, material types, and production needs.',
  },
  {
    icon: Star,
    title: 'World-Class Support',
    text: 'From installation to ongoing maintenance, our global support team keeps you running.',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07]">
          <div
            className="w-full h-full"
            data-strk-bg-id="am-hero-bg-9j0k1l"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 rounded-full text-xs font-medium text-amber-400 mb-6">
              <Factory className="w-3.5 h-3.5" />
              Premium Industrial Machinery
            </div>
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]"
            >
              Precision Sheet Metal{' '}
              <span className="text-amber-500">Folding Machines</span>
            </h1>
            <p
              id="hero-subtitle"
              className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl"
            >
              ARTITECT MACHINERY engineers world-class double folding machines,
              sheet metal folders, and metal folding solutions for demanding
              fabrication shops worldwide.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-amber-500 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-xl hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Our Machinery
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              Explore our range of precision sheet metal folding machines,
              each engineered for reliability and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <article
                key={product.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[product-${product.id}-desc] [product-${product.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-500 mb-2">
                    {product.tagline}
                  </p>
                  <h3
                    id={`product-${product.id}-title`}
                    className="text-xl font-bold text-slate-900 mb-3"
                  >
                    {product.name}
                  </h3>
                  <p
                    id={`product-${product.id}-desc`}
                    className="text-sm text-slate-500 leading-relaxed mb-5 flex-1"
                  >
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feat, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-amber-500 transition-colors group"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Why ARTITECT MACHINERY
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              We don&apos;t just build machines — we build the backbone of modern
              fabrication.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WHY_CHOOSE.map((item, i) => (
              <div key={i} className="text-center group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-2xl mb-5 group-hover:bg-amber-500 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-slate-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Ready to Upgrade Your{' '}
            <span className="text-amber-500">Fabrication Line</span>?
          </h2>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak with our engineering team today. We&apos;ll help you find the
            perfect folding machine for your production requirements.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-900 bg-amber-500 rounded-xl hover:bg-amber-400 transition-all duration-300 shadow-lg shadow-amber-500/20"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-xl hover:border-white/50 hover:bg-white/5 transition-all duration-300"
            >
              View Product Line
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
