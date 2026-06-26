import React, { useEffect, useRef } from 'react'
import { CheckCircle2, ArrowRight, Cog, HardHat, Award } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const products = [
    {
      id: 'double-folding-machine',
      name: 'Double Folding Machine',
      category: 'Elite Series',
      description: 'The pinnacle of precision folding. Dual-axis movement allows for upward and downward folds without flipping the sheet, saving time and preventing surface damage.',
      features: ['Dual-Direction Folding', 'Auto-Correction System', 'Touch-Screen Interface', 'Material Thickness Detection'],
      imgId: 'product-dfm-pro'
    },
    {
      id: 'sheet-metal-folder',
      name: 'Sheet Metal Folder',
      category: 'Industrial Series',
      description: 'Heavy-duty folder designed for architectural metalwork. Capable of handling thick gauges with unmatched stability and repeatable precision.',
      features: ['High-Torque Drive', 'Reinforced Clamping Beam', 'Custom Tooling Options', 'Speed-Controlled Operation'],
      imgId: 'product-smf-heavy'
    },
    {
      id: 'double-folder-cnc',
      name: 'Double Folder - CNC Edition',
      category: 'Smart Series',
      description: 'Fully automated CNC folder for high-speed production lines. Integrated with industry-standard CAD/CAM software for seamless workflow.',
      features: ['Remote Monitoring', 'Energy-Efficient Motors', 'Modular Design', 'Multi-Language Support'],
      imgId: 'product-df-cnc'
    }
  ]

  return (
    <div ref={containerRef} className="bg-white">
      {/* Header */}
      <section className="bg-brand-900 py-20 text-white relative">
        <div className="absolute inset-0 opacity-20" data-strk-bg-id="product-header-bg" data-strk-bg="metal machine factory blue" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Product Portfolio</h1>
          <p className="text-brand-500 max-w-2xl mx-auto text-lg">
            From architectural details to industrial components, our machinery delivers the precision your brand demands.
          </p>
        </div>
      </section>

      {/* Product List */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {products.map((product, index) => (
              <div key={product.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-brand-500/10 rounded-xl group-hover:bg-brand-500/20 transition-all -rotate-1"></div>
                    <img
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.id}-name] professional metal folder machine industrial`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="1200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="relative z-10 rounded-lg shadow-2xl w-full"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">{product.category}</span>
                  <h2 id={`${product.id}-name`} className="text-3xl md:text-4xl font-bold text-brand-900 mb-6">{product.name}</h2>
                  <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-brand-800">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-600" />
                        <span className="font-medium text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="bg-brand-900 text-white px-8 py-3 rounded-sm font-bold hover:bg-brand-800 transition-all">
                      Download Catalog
                    </button>
                    <a href="/contact" className="border border-brand-900 text-brand-900 px-8 py-3 rounded-sm font-bold hover:bg-slate-50 transition-all">
                      Inquiry
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Strip */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Why Choose ARTITECT?</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-900 text-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Cog className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Precision Engineering</h4>
              <p className="text-slate-500">Every machine is calibrated using laser technology to ensure 0.01mm accuracy across its entire lifespan.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-900 text-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HardHat className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Service & Support</h4>
              <p className="text-slate-500">Global 24/7 technical support and on-site maintenance ensures your production never stops.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-900 text-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4">Global Warranty</h4>
              <p className="text-slate-500">Industry-leading 3-year comprehensive warranty on all electrical and mechanical components.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
