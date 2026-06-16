import React, { useRef, useEffect } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { useScrollReveal } from '@/lib/useScrollReveal'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const products = [
  {
    id: 'df-3200',
    name: 'DF-3200',
    fullName: 'Double Folding Machine DF-3200',
    subtitle: 'Heavy-duty double folder for industrial production',
    description: 'Our flagship double folding machine with 3200mm working length. Designed for high-volume sheet metal folding with exceptional precision and repeatability.',
    specs: ['Working Length: 3200mm', 'Max Thickness: 3mm', 'Folding Angle: 0-180°', 'Motor Power: 7.5kW'],
    tag: 'Best Seller',
    titleId: 'product-df-3200-title',
    descId: 'product-df-3200-desc',
    imgId: 'product-df-3200-img',
  },
  {
    id: 'df-2500',
    name: 'DF-2500',
    fullName: 'Double Folding Machine DF-2500',
    subtitle: 'Versatile metal folder for mid-size workshops',
    description: 'A compact yet powerful double folding machine built for versatile sheet metal operations. Perfect balance of capacity and footprint.',
    specs: ['Working Length: 2500mm', 'Max Thickness: 2.5mm', 'Folding Angle: 0-180°', 'Motor Power: 5.5kW'],
    tag: 'Popular',
    titleId: 'product-df-2500-title',
    descId: 'product-df-2500-desc',
    imgId: 'product-df-2500-img',
  },
  {
    id: 'sf-4000',
    name: 'SF-4000',
    fullName: 'Sheet Metal Folder SF-4000',
    subtitle: 'Premium sheet metal folding machine for large panels',
    description: 'Our largest sheet metal folder engineered for architectural cladding and large panel applications. Delivers flawless folds across full 4-meter sheets.',
    specs: ['Working Length: 4000mm', 'Max Thickness: 2mm', 'Folding Angle: 0-160°', 'Motor Power: 11kW'],
    tag: 'New',
    titleId: 'product-sf-4000-title',
    descId: 'product-sf-4000-desc',
    imgId: 'product-sf-4000-img',
  },
  {
    id: 'mf-1500',
    name: 'MF-1500',
    fullName: 'Metal Folder Machine MF-1500',
    subtitle: 'Entry-level metal folding machine',
    description: 'An affordable entry point into precision metal folding. Ideal for small shops and prototyping environments that demand professional results.',
    specs: ['Working Length: 1500mm', 'Max Thickness: 1.5mm', 'Folding Angle: 0-150°', 'Motor Power: 3kW'],
    tag: 'Value',
    titleId: 'product-mf-1500-title',
    descId: 'product-mf-1500-desc',
    imgId: 'product-mf-1500-img',
  },
]

const Products = () => {
  const revealRef = useScrollReveal()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="section-padding bg-white" ref={(el) => {
      revealRef.current = el
      containerRef.current = el
    }}>
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="text-brand-gold text-xs font-semibold tracking-widest-plus uppercase">
            Our Products
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark mt-3 mb-4">
            Metal Folding Machines
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            From compact metal folders to industrial double folding machines, every model is
            engineered for precision and built to last.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`reveal-on-scroll delay-${index * 100} group bg-slate-50 hover:bg-white border border-slate-100 hover:border-brand-gold/30 transition-all duration-300 hover:shadow-xl`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.fullName}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-dark text-white text-xs font-bold px-3 py-1.5 tracking-wider uppercase">
                    {product.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-brand-gold text-xs font-bold tracking-widest-plus uppercase">
                      {product.name}
                    </span>
                    <h3 id={product.titleId} className="text-xl font-bold text-brand-dark mt-1">
                      {product.subtitle}
                    </h3>
                  </div>
                </div>

                <p id={product.descId} className="text-slate-500 text-sm leading-relaxed mb-5">
                  {product.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-brand-gold transition-colors group/link"
                >
                  Request Specifications
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
