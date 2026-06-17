import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Shield, Wrench, Zap, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Heavy-duty construction with premium-grade steel components designed for decades of reliable operation.',
  },
  {
    icon: Wrench,
    title: 'Precision Engineering',
    desc: 'CNC-machined parts ensure exact folds and consistent results across every production run.',
  },
  {
    icon: Zap,
    title: 'Fast & Efficient',
    desc: 'Optimized folding mechanisms reduce cycle times while maintaining exceptional accuracy.',
  },
]

const productPreview = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    subtitle: 'High-capacity dual-action folding',
    desc: 'Engineered for high-volume sheet metal processing with simultaneous dual-fold capability. Delivers unmatched speed and precision for industrial applications.',
    imgId: 'home-double-fold-a1b2c3',
    titleId: 'home-prod-1-title',
    descId: 'home-prod-1-desc',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    subtitle: 'Versatile precision bending',
    desc: 'Our flagship sheet metal folding machine handles a wide range of materials and thicknesses with programmable precision controls for repeatable accuracy.',
    imgId: 'home-sheet-folder-d4e5f6',
    titleId: 'home-prod-2-title',
    descId: 'home-prod-2-desc',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    subtitle: 'Compact power for workshops',
    desc: 'A robust and intuitive metal folding solution perfect for small to medium workshops. Combines industrial durability with user-friendly operation.',
    imgId: 'home-metal-folder-g7h8i9',
    titleId: 'home-prod-3-title',
    descId: 'home-prod-3-desc',
  },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Precision Sheet Metal Folding Machinery
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              ARTITECT MACHINERY delivers industrial-grade double folding machines, 
              sheet metal folders, and metal folding machines built for accuracy, 
              durability, and efficiency.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent-hover text-brand-dark font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Explore Products
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about#contact"
                className="inline-flex items-center gap-2 border border-slate-400 hover:border-white text-white font-medium px-6 py-3 rounded-md transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight">
              Why Choose ARTITECT
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Every machine we build reflects our commitment to quality, 
              innovation, and customer success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <div key={i} className="text-center p-8 rounded-lg border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-brand-primary rounded-lg flex items-center justify-center mx-auto mb-5">
                  <f.icon className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-3">{f.title}</h3>
                <p className="text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight">
              Our Machines
            </h2>
            <p className="mt-4 text-slate-500 max-w-xl mx-auto">
              Explore our range of professional sheet metal folding solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {productPreview.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="p-6">
                  <p className="text-xs font-semibold text-brand-accent uppercase tracking-wider mb-1">
                    {product.subtitle}
                  </p>
                  <h3 id={product.titleId} className="text-xl font-bold text-brand-primary mb-2">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="text-slate-500 text-sm leading-relaxed mb-4">
                    {product.desc}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:text-brand-accent transition-colors"
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-brand-primary hover:bg-brand-dark text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark tracking-tight">
            Ready to upgrade your workshop?
          </h2>
          <p className="mt-3 text-brand-dark/80 max-w-lg mx-auto">
            Get in touch with our team for personalized recommendations and pricing.
          </p>
          <Link
            to="/about#contact"
            className="inline-flex items-center gap-2 mt-6 bg-brand-dark hover:bg-black text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            Contact Us Today
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
