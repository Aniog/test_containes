import { Link } from 'react-router-dom'
import { ArrowRight, Check, ChevronRight, Phone } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'am-df-4000',
    name: 'AM-DF 4000',
    fullName: 'Double Folding Machine',
    category: 'Double Folder',
    desc: 'Our flagship double folding machine delivers unmatched precision and speed for high-volume production environments. The dual-head design enables simultaneous bending operations, dramatically reducing cycle times.',
    features: [
      '4000mm working length',
      'Dual servo-driven folding beams',
      'Automatic thickness compensation',
      'Touchscreen CNC control system',
      'Quick-change tooling system',
    ],
    specs: { 'Max Length': '4000mm', 'Max Thickness': '4mm Steel', 'Accuracy': '±0.01°', 'Speed': '60 bends/min' },
    titleId: 'prod-df4000-title',
    descId: 'prod-df4000-desc',
    imgId: 'prod-df4000-img',
    badge: 'Flagship',
  },
  {
    id: 'am-smf-3200',
    name: 'AM-SMF 3200',
    fullName: 'Sheet Metal Folding Machine',
    category: 'Sheet Metal Folder',
    desc: 'The AM-SMF 3200 is our versatile mid-range sheet metal folding machine, ideal for shops handling diverse materials and thicknesses. Its adaptive clamping system ensures consistent results across aluminum, stainless steel, and mild steel.',
    features: [
      '3200mm working length',
      'Adaptive clamping pressure',
      'Multi-material compatibility',
      'Integrated safety light curtains',
      'Energy-efficient servo drives',
    ],
    specs: { 'Max Length': '3200mm', 'Max Thickness': '3mm Steel', 'Accuracy': '±0.02°', 'Speed': '45 bends/min' },
    titleId: 'prod-smf3200-title',
    descId: 'prod-smf3200-desc',
    imgId: 'prod-smf3200-img',
    badge: 'Versatile',
  },
  {
    id: 'am-mf-6000',
    name: 'AM-MF 6000',
    fullName: 'Metal Folding Machine',
    category: 'Metal Folder',
    desc: 'Designed for heavy-duty industrial applications, the AM-MF 6000 handles the largest and thickest sheets with ease. Its reinforced frame and high-torque drive system make it the go-to choice for construction and aerospace manufacturers.',
    features: [
      '6000mm working length',
      'High-torque servo motors',
      'Heavy-duty reinforced frame',
      'Automatic crowning system',
      'Remote diagnostics capability',
    ],
    specs: { 'Max Length': '6000mm', 'Max Thickness': '6mm Steel', 'Accuracy': '±0.01°', 'Speed': '35 bends/min' },
    titleId: 'prod-mf6000-title',
    descId: 'prod-mf6000-desc',
    imgId: 'prod-mf6000-img',
    badge: 'Heavy Duty',
  },
  {
    id: 'am-df-2500',
    name: 'AM-DF 2500',
    fullName: 'Compact Double Folder',
    category: 'Double Folder',
    desc: 'The compact powerhouse of our double folding range. Perfect for smaller workshops that need double-folding capability without sacrificing floor space. Same precision engineering in a smaller footprint.',
    features: [
      '2500mm working length',
      'Compact footprint design',
      'Dual folding capability',
      'Easy-to-use touchscreen interface',
      'Low maintenance requirements',
    ],
    specs: { 'Max Length': '2500mm', 'Max Thickness': '2.5mm Steel', 'Accuracy': '±0.02°', 'Speed': '50 bends/min' },
    titleId: 'prod-df2500-title',
    descId: 'prod-df2500-desc',
    imgId: 'prod-df2500-img',
    badge: 'Compact',
  },
  {
    id: 'am-smf-1600',
    name: 'AM-SMF 1600',
    fullName: 'Sheet Metal Folder',
    category: 'Sheet Metal Folder',
    desc: 'Entry-level sheet metal folder without compromising on quality. Ideal for prototyping shops, HVAC contractors, and businesses taking their first step into automated folding.',
    features: [
      '1600mm working length',
      'Manual or CNC control options',
      'Lightweight portable design',
      'Simple tooling changeover',
      'Budget-friendly pricing',
    ],
    specs: { 'Max Length': '1600mm', 'Max Thickness': '2mm Steel', 'Accuracy': '±0.05°', 'Speed': '40 bends/min' },
    titleId: 'prod-smf1600-title',
    descId: 'prod-smf1600-desc',
    imgId: 'prod-smf1600-img',
    badge: 'Entry',
  },
  {
    id: 'am-mf-3000',
    name: 'AM-MF 3000',
    fullName: 'Metal Folder Machine',
    category: 'Metal Folder',
    desc: 'A balanced metal folder machine that bridges the gap between compact and heavy-duty. Handles a wide range of applications with the reliability ARTITECT is known for.',
    features: [
      '3000mm working length',
      'Balanced performance profile',
      'Quick-setup tooling system',
      'Integrated bending simulation',
      'Industry 4.0 connectivity',
    ],
    specs: { 'Max Length': '3000mm', 'Max Thickness': '4mm Steel', 'Accuracy': '±0.02°', 'Speed': '42 bends/min' },
    titleId: 'prod-mf3000-title',
    descId: 'prod-mf3000-desc',
    imgId: 'prod-mf3000-img',
    badge: 'Balanced',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative pt-20 bg-brand-dark overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          data-strk-bg-id="products-hero-bg-8b2e1a"
          data-strk-bg="[products-hero-title] sheet metal folding machines industrial"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
              Our Range
            </span>
            <h1 id="products-hero-title" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
              Metal Folding <span className="text-brand-gold italic">Solutions</span>
            </h1>
            <p className="font-body text-lg text-white/70 leading-relaxed">
              From compact entry-level folders to industrial double folding machines, our product 
              range covers every sheet metal fabrication need. Each machine is built to our exacting 
              standards of precision and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-brand-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-brand-warm-gray hover:border-brand-gold/30 hover:shadow-xl transition-all duration-500 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.fullName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-gold text-brand-dark px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wider">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-brand-dark/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-brand-gold text-xs font-body font-medium">{product.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-1">
                    <h3 id={product.titleId} className="font-display text-2xl font-bold text-brand-dark">
                      {product.name}
                    </h3>
                  </div>
                  <p className="font-body text-xs text-brand-gold uppercase tracking-wider mb-3 font-medium">
                    {product.fullName}
                  </p>
                  <p id={product.descId} className="font-body text-sm text-gray-500 leading-relaxed mb-5">
                    {product.desc}
                  </p>

                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    {Object.entries(product.specs).map(([key, val]) => (
                      <div key={key} className="bg-brand-cream/60 rounded-lg px-3 py-2">
                        <span className="block text-[10px] font-body text-gray-400 uppercase tracking-wider">{key}</span>
                        <span className="block text-sm font-body font-semibold text-brand-dark">{val}</span>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm font-body text-gray-600">
                        <Check className="w-4 h-4 text-brand-gold mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-brand-dark hover:bg-brand-navy text-white px-6 py-3 rounded-lg font-body font-semibold text-sm transition-all duration-300 group/btn"
                  >
                    Request Quote
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-dark mb-6">
            Not Sure Which Machine Is Right for You?
          </h2>
          <p className="font-body text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Our engineering team is ready to help you select the perfect sheet metal folding solution 
            based on your specific materials, production volume, and budget requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-brand-gold hover:bg-brand-gold-hover text-brand-dark px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:shadow-xl group"
            >
              Speak to an Engineer
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+18005551234"
              className="inline-flex items-center justify-center gap-2 border-2 border-brand-dark/20 hover:border-brand-dark text-brand-dark px-8 py-4 rounded-lg font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              +1 (800) 555-1234
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
