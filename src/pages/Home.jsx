import { useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle, Factory, Layers, Settings, Shield, Wrench } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'double-folding-machine',
    title: 'Double Folding Machine',
    description: 'High-precision dual-beam folding for complex sheet-metal profiles.',
    capacity: 'Up to 4 mm mild steel',
    imgId: 'product-double-folding-machine',
    titleId: 'product-title-double-folding-machine',
    descId: 'product-desc-double-folding-machine',
  },
  {
    id: 'double-folder',
    title: 'Double Folder',
    description: 'Compact dual-folder design built for repeatable accuracy and speed.',
    capacity: 'Up to 3.2 mm stainless steel',
    imgId: 'product-double-folder',
    titleId: 'product-title-double-folder',
    descId: 'product-desc-double-folder',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    description: 'Versatile manual and CNC folder for custom sheet-metal work.',
    capacity: 'Length up to 3,200 mm',
    imgId: 'product-sheet-metal-folder',
    titleId: 'product-title-sheet-metal-folder',
    descId: 'product-desc-sheet-metal-folder',
  },
  {
    id: 'sheet-metal-folding-machine',
    title: 'Sheet Metal Folding Machine',
    description: 'Automated folding line engineered for consistent production output.',
    capacity: 'CNC backgauge control',
    imgId: 'product-sheet-metal-folding-machine',
    titleId: 'product-title-sheet-metal-folding-machine',
    descId: 'product-desc-sheet-metal-folding-machine',
  },
  {
    id: 'metal-folder',
    title: 'Metal Folder',
    description: 'Robust construction for heavy-duty industrial metal forming.',
    capacity: 'Up to 6 mm mild steel',
    imgId: 'product-metal-folder',
    titleId: 'product-title-metal-folder',
    descId: 'product-desc-metal-folder',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    description: 'Complete folding station with tooling and safety enclosure.',
    capacity: 'Turn-key installation',
    imgId: 'product-metal-folder-machine',
    titleId: 'product-title-metal-folder-machine',
    descId: 'product-desc-metal-folder-machine',
  },
]

const features = [
  { icon: Factory, label: 'Factory-built frames', desc: 'Welded steel frames stress-relieved for long-term accuracy.' },
  { icon: Settings, label: 'CNC ready', desc: 'Optional CNC controllers with automatic backgauge positioning.' },
  { icon: Shield, label: 'Safety certified', desc: 'CE-compliant guards and light curtains on every model.' },
  { icon: Wrench, label: 'Tooling support', desc: 'Custom punch and die sets available for special profiles.' },
]

export default function Home() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0B0F17] text-[#F1F5F9]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="hero-bg-artitect"
          data-strk-bg="[hero-subtitle] [hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F17]/80 via-[#0B0F17]/60 to-[#0B0F17]" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 md:py-40">
          <div className="max-w-3xl">
            <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4">
              Precision Sheet-Metal Forming
            </p>
            <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              ARTITECT MACHINERY
            </h1>
            <p id="hero-subtitle" className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl leading-relaxed">
              Engineered folding solutions for modern metal fabrication. From double folding machines to heavy-duty metal folders, we deliver accuracy you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-[#0B0F17] font-semibold hover:bg-[#C49B2C] transition-colors"
              >
                View products <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1E293B] px-6 py-3 text-[#F1F5F9] font-medium hover:border-[#D4AF37] transition-colors"
              >
                Request a quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 border-y border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.label} className="flex flex-col gap-3">
                <feature.icon className="w-8 h-8 text-[#D4AF37]" />
                <h3 className="text-lg font-semibold">{feature.label}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-3">Our Range</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Folding Machines Built for Production</h2>
            <p className="text-[#94A3B8]">
              Explore our complete lineup of double folders, sheet-metal folding machines, and metal folders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product) => (
              <article
                key={product.id}
                className="group bg-[#131A24] border border-[#1E293B] rounded-2xl overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] bg-[#0B0F17] overflow-hidden">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 id={product.titleId} className="text-xl font-bold mb-2">{product.title}</h3>
                  <p id={product.descId} className="text-[#94A3B8] text-sm mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full">
                      {product.capacity}
                    </span>
                    <span className="text-sm font-medium text-[#F1F5F9] group-hover:text-[#D4AF37] transition-colors flex items-center gap-1">
                      Details <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-[#131A24]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-3">Why ARTITECT</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Built by Engineers, for Fabricators</h2>
              <ul className="space-y-4">
                {[
                  'Rigorous factory testing before shipment',
                  'Modular tooling and quick-change setups',
                  'Remote diagnostics and spare-parts support',
                  'Custom machine configurations available',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#94A3B8]">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-2xl h-80 lg:h-96 bg-[#0B0F17] border border-[#1E293B]"
              data-strk-bg-id="why-us-bg"
              data-strk-bg="[why-us-title] [why-us-subtitle]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="800"
            >
              <div className="sr-only">
                <h2 id="why-us-title">Why ARTITECT MACHINERY</h2>
                <p id="why-us-subtitle">Engineered folding solutions for metal fabrication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Layers className="w-10 h-10 text-[#D4AF37] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to upgrade your folding line?</h2>
          <p className="text-[#94A3B8] mb-8 max-w-2xl mx-auto">
            Tell us about your material, thickness, and production targets. Our team will recommend the right ARTITECT machine for your shop.
          </p>
          <a
            href="mailto:sales@artitectmachinery.com"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-8 py-4 text-[#0B0F17] font-semibold hover:bg-[#C49B2C] transition-colors"
          >
            Contact sales <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}
