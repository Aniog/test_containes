import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-orange font-semibold text-sm uppercase tracking-wider mb-2">Product Categories</span>
            <h1 id="products-page-title" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">Products We Source</h1>
            <p id="products-page-subtitle" className="text-lg text-slate-300 leading-relaxed">We source across a wide range of product categories. If you do not see your product listed, contact us — chances are we can help.</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden">
                <img data-strk-img-id="prod-electronics-img-t1u2v3" data-strk-img="[prod-electronics-desc] [prod-electronics-title] [products-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Electronics and Accessories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 id="prod-electronics-title" className="text-base font-semibold text-slate-900 mb-2">Electronics & Accessories</h3>
                <p id="prod-electronics-desc" className="text-sm text-slate-600 leading-relaxed">Consumer electronics, phone accessories, LED lighting, cables, chargers, smart home devices, and electronic components.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden">
                <img data-strk-img-id="prod-textiles-img-w4x5y6" data-strk-img="[prod-textiles-desc] [prod-textiles-title] [products-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Textiles and Apparel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 id="prod-textiles-title" className="text-base font-semibold text-slate-900 mb-2">Textiles & Apparel</h3>
                <p id="prod-textiles-desc" className="text-sm text-slate-600 leading-relaxed">Clothing, sportswear, uniforms, home textiles, fabrics, bags, and fashion accessories.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden">
                <img data-strk-img-id="prod-furniture-img-z7a8b9" data-strk-img="[prod-furniture-desc] [prod-furniture-title] [products-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Furniture and Home Decor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 id="prod-furniture-title" className="text-base font-semibold text-slate-900 mb-2">Furniture & Home Decor</h3>
                <p id="prod-furniture-desc" className="text-sm text-slate-600 leading-relaxed">Office furniture, home furniture, outdoor furniture, decorative items, and storage solutions.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden">
                <img data-strk-img-id="prod-packaging-img-c1d2e3" data-strk-img="[prod-packaging-desc] [prod-packaging-title] [products-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Packaging and Printing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 id="prod-packaging-title" className="text-base font-semibold text-slate-900 mb-2">Packaging & Printing</h3>
                <p id="prod-packaging-desc" className="text-sm text-slate-600 leading-relaxed">Custom packaging, corrugated boxes, labels, shopping bags, gift boxes, and promotional materials.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden">
                <img data-strk-img-id="prod-machinery-img-f4g5h6" data-strk-img="[prod-machinery-desc] [prod-machinery-title] [products-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Machinery and Equipment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 id="prod-machinery-title" className="text-base font-semibold text-slate-900 mb-2">Machinery & Equipment</h3>
                <p id="prod-machinery-desc" className="text-sm text-slate-600 leading-relaxed">Industrial machinery, production equipment, tools, molds, and spare parts.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden">
                <img data-strk-img-id="prod-consumer-img-i7j8k9" data-strk-img="[prod-consumer-desc] [prod-consumer-title] [products-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Consumer Goods" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 id="prod-consumer-title" className="text-base font-semibold text-slate-900 mb-2">Consumer Goods</h3>
                <p id="prod-consumer-desc" className="text-sm text-slate-600 leading-relaxed">Kitchenware, toys, pet products, beauty products, health and wellness items, and promotional gifts.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden">
                <img data-strk-img-id="prod-auto-img-l1m2n3" data-strk-img="[prod-auto-desc] [prod-auto-title] [products-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Automotive Parts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 id="prod-auto-title" className="text-base font-semibold text-slate-900 mb-2">Automotive Parts</h3>
                <p id="prod-auto-desc" className="text-sm text-slate-600 leading-relaxed">Car accessories, replacement parts, tools, cleaning products, and aftermarket components.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-md transition-shadow group">
              <div className="aspect-[4/3] overflow-hidden">
                <img data-strk-img-id="prod-building-img-o4p5q6" data-strk-img="[prod-building-desc] [prod-building-title] [products-page-title]" data-strk-img-ratio="4x3" data-strk-img-width="400" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E" alt="Building Materials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 id="prod-building-title" className="text-base font-semibold text-slate-900 mb-2">Building Materials</h3>
                <p id="prod-building-desc" className="text-sm text-slate-600 leading-relaxed">Hardware, plumbing fixtures, tiles, flooring, doors, windows, and construction supplies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight mb-4">Don't See Your Product?</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">We source thousands of different products. Send us your requirements and we will let you know if we can help — no obligation.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-orange hover:bg-orange-dark text-white px-8 py-4 rounded-lg text-base font-semibold transition-colors no-underline">
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
