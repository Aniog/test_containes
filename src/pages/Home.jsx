import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Wrench, Cog, Award, Star, Factory } from 'lucide-react'

const products = [
  {
    id: 'double-folding',
    name: 'Double Folding Machine',
    tagline: 'Precision dual-fold capability',
    desc: 'Our flagship double folding machine delivers unparalleled accuracy for complex sheet metal folding operations.',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    tagline: 'Heavy-duty industrial performance',
    desc: 'Engineered for high-volume production environments with robust construction and intuitive controls.',
  },
  {
    id: 'metal-folder',
    name: 'Metal Folder Machine',
    tagline: 'Versatile all-purpose folding',
    desc: 'A flexible solution for workshops of all sizes, handling a wide range of materials and thicknesses.',
  },
]

const features = [
  { icon: Shield, title: 'Built to Last', desc: 'Heavy-gauge steel construction with premium components for decades of reliable service.' },
  { icon: Wrench, title: 'Precision Engineering', desc: 'CNC-machined parts and tight tolerances ensure consistent, repeatable results every time.' },
  { icon: Cog, title: 'Easy Operation', desc: 'Intuitive controls and clear interfaces make our machines accessible to operators of all skill levels.' },
]

const stats = [
  { value: '25+', label: 'Years Experience' },
  { value: '15,000+', label: 'Machines Delivered' },
  { value: '60+', label: 'Countries Served' },
  { value: '99.7%', label: 'Customer Satisfaction' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-brand-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/40 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-brand-gold text-xs font-medium mb-6">
              <Award className="w-3.5 h-3.5" />
              Industry-Leading Precision Machinery
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Precision Sheet Metal
              <span className="block text-brand-gold">Folding Machines</span>
            </h1>
            <p className="mt-6 text-lg text-slate-300 max-w-xl leading-relaxed">
              ARTITECT MACHINERY engineers industrial-grade double folding machines and sheet metal folders trusted by fabricators worldwide.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-brand-gold hover:bg-brand-gold-light transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white border border-slate-600 hover:border-slate-400 hover:bg-white/5 transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Engineered for Excellence
            </h2>
            <p className="mt-4 text-slate-600">
              Every ARTITECT machine is built with an unwavering commitment to quality, durability, and precision.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product showcase */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                Our Machinery
              </h2>
              <p className="mt-3 text-slate-600 max-w-lg">
                Purpose-built sheet metal folding solutions for modern fabrication shops.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-gold hover:text-brand-gold-light transition-colors shrink-0"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <Link
                key={product.id}
                to={`/products#${product.id}`}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-brand-gold/30 transition-all"
              >
                <div className="aspect-[4/3] bg-slate-100 flex items-center justify-center">
                  <Factory className="w-16 h-16 text-slate-300 group-hover:text-brand-gold/30 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-gold mb-2">
                    {product.tagline}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-brand-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {product.desc}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-gold">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-charcoal py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="w-12 h-12 text-brand-gold mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Ready to Upgrade Your Fabrication Line?
          </h2>
          <p className="mt-4 text-lg text-slate-300 max-w-xl mx-auto">
            Let our team help you find the perfect folding machine for your production needs.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold text-white bg-brand-gold hover:bg-brand-gold-light transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
