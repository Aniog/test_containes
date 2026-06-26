import React, { useEffect, useRef } from 'react'
import { ArrowRight, Settings, ShieldCheck, Gauge, Zap } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const products = [
    {
      id: 'double-folder',
      title: 'Double Folding Machine',
      desc: 'Precision double folding with dual-axis control for complex profiles.',
      imgId: 'product-df-101'
    },
    {
      id: 'sheet-metal-folder',
      title: 'Sheet Metal Folder',
      desc: 'Industrial grade folding for high-volume sheet metal production.',
      imgId: 'product-smf-202'
    },
    {
      id: 'metal-folding-cnc',
      title: 'CNC Metal Folding Machine',
      desc: 'Automated high-precision bending for intricate architectural components.',
      imgId: 'product-cnc-303'
    }
  ]

  const features = [
    { icon: <Settings className="w-10 h-10 text-brand-600" />, title: 'Precision Control', desc: 'Micrometer-level accuracy for every bend and fold.' },
    { icon: <ShieldCheck className="w-10 h-10 text-brand-600" />, title: 'Safety First', desc: 'Integrated laser sensors and emergency stop systems.' },
    { icon: <Gauge className="w-10 h-10 text-brand-600" />, title: 'High Performance', desc: 'Optimized hydraulic systems for maximum speed and force.' },
    { icon: <Zap className="w-10 h-10 text-brand-600" />, title: 'Smart Energy', desc: 'Low power consumption with high output efficiency.' },
  ]

  return (
    <div ref={containerRef} className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center bg-brand-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          data-strk-bg-id="hero-bg-artitect"
          data-strk-bg="[hero-subtitle] [hero-title] [hero-brand]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 id="hero-brand" className="text-brand-500 font-bold tracking-widest uppercase mb-4 animate-fadeIn">ARTITECT MACHINERY</h2>
            <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Precision In <span className="text-brand-500">Every Fold</span>
            </h1>
            <p id="hero-subtitle" className="text-xl text-brand-500/80 mb-10 max-w-xl leading-relaxed">
              Industrial-grade double folding machines and sheet metal folders engineered for perfection and architectural elegance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/products" className="bg-accent text-white px-10 py-4 rounded-sm font-bold text-lg hover:bg-red-700 transition-all flex items-center gap-2 group">
                Explore Products <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/contact" className="border border-white/30 backdrop-blur-sm px-10 py-4 rounded-sm font-bold text-lg hover:bg-white/10 transition-all">
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Badge Strip */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-900 mb-2">25+</div>
              <div className="text-brand-600 uppercase tracking-wider text-sm font-semibold">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-900 mb-2">5000+</div>
              <div className="text-brand-600 uppercase tracking-wider text-sm font-semibold">Machines Installed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-900 mb-2">40+</div>
              <div className="text-brand-600 uppercase tracking-wider text-sm font-semibold">Global Locations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-900 mb-2">0.01mm</div>
              <div className="text-brand-600 uppercase tracking-wider text-sm font-semibold">Folding Accuracy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Highlights */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 id="product-section-title" className="text-brand-900 text-3xl md:text-4xl font-bold mb-4">Industrial Solutions</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p id="product-section-desc" className="text-slate-600 text-lg">
              Explore our range of high-performance metal folder machines designed for the most demanding architectural and industrial projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-white group rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100">
                <div className="relative h-64 overflow-hidden">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.id}-title] [${product.id}-desc] metal folding machine industrial`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 id={`${product.id}-title`} className="text-brand-900 text-xl font-bold mb-3">{product.title}</h3>
                  <p id={`${product.id}-desc`} className="text-slate-500 mb-6 line-clamp-2">
                    {product.desc}
                  </p>
                  <a href={`/products/${product.id}`} className="text-brand-700 font-bold flex items-center gap-2 hover:text-accent transition-colors">
                    View Details <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                Engineering Excellence That <br />
                <span className="text-brand-500">Redefines Precision</span>
              </h2>
              <p className="text-brand-500/70 text-lg mb-10 leading-relaxed">
                Our double folder machines are built with the finest German and Japanese components, ensuring your production line never stops and your folds are never compromised.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h4 className="font-bold mb-2">{feature.title}</h4>
                      <p className="text-brand-500/50 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-10 bg-brand-700/20 blur-3xl rounded-full"></div>
              <img
                data-strk-img-id="feature-panel-img"
                data-strk-img="metal folding machine detail controls precision"
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Precision Engineering"
                className="relative z-10 rounded-lg shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Ready to Elevate Your Production?</h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Consult with our specialists today and find the perfect folding machine for your specific architectural needs.
          </p>
          <a href="/contact" className="bg-white text-accent px-12 py-4 rounded-sm font-bold text-lg hover:bg-slate-100 transition-all inline-block shadow-xl">
            Request a Personal Consultation
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
