import { Link } from 'react-router-dom'
import { ChevronRight, CheckCircle, Shield, Wrench, Truck, ArrowRight } from 'lucide-react'

const products = [
  {
    id: 'double-folding',
    title: 'Double Folding Machine',
    subtitle: 'High-precision dual-fold capability',
    description: 'Engineered for demanding sheet metal fabrication with simultaneous dual-fold action, reducing cycle time and maximizing throughput.',
    href: '/products',
    titleId: 'home-double-folding-title',
    descId: 'home-double-folding-desc',
    imgId: 'home-double-folding-img-a1b2c3',
  },
  {
    id: 'sheet-metal',
    title: 'Sheet Metal Folder',
    subtitle: 'Versatile bending solutions',
    description: 'Designed to handle a wide range of sheet metal gauges and profiles with exceptional accuracy and repeatability.',
    href: '/products',
    titleId: 'home-sheet-metal-title',
    descId: 'home-sheet-metal-desc',
    imgId: 'home-sheet-metal-img-d4e5f6',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folding Machine',
    subtitle: 'Heavy-duty industrial performance',
    description: 'Built for continuous operation in high-volume production environments with robust construction and minimal maintenance requirements.',
    href: '/products',
    titleId: 'home-metal-folder-title',
    descId: 'home-metal-folder-desc',
    imgId: 'home-metal-folder-img-g7h8i9',
  },
]

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-gauge steel construction with premium components ensures decades of reliable operation.',
  },
  {
    icon: Wrench,
    title: 'Precision Engineering',
    description: 'CNC-machined components and laser-calibrated alignment deliver consistent, repeatable results.',
  },
  {
    icon: Truck,
    title: 'Global Support',
    description: 'Comprehensive warranty, installation assistance, and responsive technical support worldwide.',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/20 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
              Precision Sheet Metal
              <span className="block text-brand-gold">Folding Machines</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
              ARTITECT MACHINERY delivers world-class double folding machines and sheet metal
              folders engineered for accuracy, durability, and industrial performance.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 bg-brand-gold text-white font-medium px-8 py-3.5 rounded-lg hover:bg-brand-navy hover:ring-2 hover:ring-brand-gold transition-all"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border border-gray-500 text-white font-medium px-8 py-3.5 rounded-lg hover:border-brand-gold hover:text-brand-gold transition-all"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
              Our Machinery
            </h2>
            <p className="mt-4 text-brand-text-secondary text-lg max-w-2xl mx-auto">
              Explore our range of premium folding machines designed for precision metal fabrication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-brand-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-brand-surface overflow-hidden">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-2">
                    {product.subtitle}
                  </p>
                  <h3 id={product.titleId} className="text-xl font-bold text-brand-navy">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="mt-3 text-brand-text-secondary text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <Link
                    to={product.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-gold hover:text-brand-navy transition-colors"
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight">
              Why ARTITECT MACHINERY
            </h2>
            <p className="mt-4 text-brand-text-secondary text-lg max-w-2xl mx-auto">
              Every machine we build reflects our commitment to quality, precision, and customer success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-brand-border rounded-xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-lg font-semibold text-brand-navy mb-3">{feature.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-brand-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to Upgrade Your Fabrication Line?
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Get in touch with our team to discuss your requirements and receive a customized quote.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-brand-gold text-white font-medium px-8 py-3.5 rounded-lg hover:bg-white hover:text-brand-navy transition-all"
          >
            Contact Us Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}