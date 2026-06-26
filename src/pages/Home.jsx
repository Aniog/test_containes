import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Wrench, Zap, Award } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty steel construction engineered for decades of reliable service in demanding industrial environments.',
  },
  {
    icon: Wrench,
    title: 'Precision Engineering',
    description: 'CNC-machined components and tight tolerances ensure consistent, accurate folds on every single piece.',
  },
  {
    icon: Zap,
    title: 'High Efficiency',
    description: 'Optimized folding cycles and intuitive controls reduce setup time and maximize throughput.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'All machines meet or exceed ISO 9001 quality standards with comprehensive warranty coverage.',
  },
]

const productList = [
  {
    id: 'double-folder',
    name: 'Double Folding Machine',
    description: 'Heavy-duty double folding capability for complex sheet metal profiles. Ideal for high-volume production lines requiring precision dual folds.',
  },
  {
    id: 'sheet-metal-folder',
    name: 'Sheet Metal Folder',
    description: 'Versatile sheet metal folding solution with adjustable clamping and bending beam for accurate folds across various material thicknesses.',
  },
  {
    id: 'metal-folder-machine',
    name: 'Metal Folder Machine',
    description: 'Robust industrial-grade metal folder engineered for consistent performance with steel, aluminum, and stainless steel sheets.',
  },
  {
    id: 'cnc-folder',
    name: 'CNC Folding Machine',
    description: 'Computer-controlled precision folding with programmable bend sequences, automatic back gauge, and touchscreen interface.',
  },
]

export default function Home() {
  const heroRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [])

  return (
    <div ref={heroRef}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div
          data-strk-bg-id="hero-bg-a1b2c3"
          data-strk-bg="industrial sheet metal folding machine factory precision"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Precision Sheet Metal
              <br />
              <span className="text-accent-500">Folding Machines</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-300 leading-relaxed mb-10 max-w-xl">
              ARTITECT MACHINERY delivers world-class double folding machines and sheet metal folders built for accuracy, durability, and unmatched performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/25"
              >
                View Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-tight mb-4">
              Why Choose ARTITECT
            </h2>
            <p className="text-brand-600 text-lg max-w-2xl mx-auto">
              We engineer every machine with an obsessive focus on quality, precision, and the people who use them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="text-center group">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-50 text-accent-500 mb-5 group-hover:bg-accent-500 group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-900 mb-2">{feature.title}</h3>
                  <p className="text-brand-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Preview Section */}
      <section className="py-20 md:py-28 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-900 tracking-tight mb-3">
                Our Machines
              </h2>
              <p className="text-brand-600 text-lg">
                Explore our range of precision sheet metal folding solutions.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent-500 hover:text-accent-600 transition-colors shrink-0"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productList.map((product) => (
              <div key={product.id} className="group rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col">
                <div className="aspect-video bg-gradient-to-br from-brand-100 to-brand-50 flex items-center justify-center p-6">
                  <div
                    data-strk-bg-id={`home-product-bg-${product.id}`}
                    data-strk-bg={`[home-product-name-${product.id}] sheet metal folding machine industrial`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="600"
                    className="w-full h-full rounded-lg bg-brand-200 flex items-center justify-center"
                  >
                    <span className="text-brand-400 text-xs font-medium">Product Image</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 id={`home-product-name-${product.id}`} className="text-base font-semibold text-brand-900 mb-1.5">
                    {product.name}
                  </h3>
                  <p className="text-brand-600 text-sm leading-relaxed mb-4 flex-1">
                    {product.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent-500 hover:text-accent-600 transition-colors"
                  >
                    Request Info
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900 rounded-2xl overflow-hidden relative">
            <div
              data-strk-bg-id="cta-bg-d4e5f6"
              data-strk-bg="industrial manufacturing precision engineering metal works"
              data-strk-bg-ratio="16x9"
              data-strk-bg-width="1200"
              className="absolute inset-0 opacity-15"
            />
            <div className="relative px-6 py-16 md:px-12 md:py-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                Ready to Upgrade Your Production Line?
              </h2>
              <p className="text-brand-300 text-lg max-w-2xl mx-auto mb-8">
                Get in touch with our engineering team to discuss your requirements and find the perfect folding solution for your workshop.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold text-white bg-accent-500 hover:bg-accent-600 transition-colors shadow-lg shadow-accent-500/25"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
