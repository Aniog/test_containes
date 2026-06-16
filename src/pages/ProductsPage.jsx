import React, { useEffect, useRef } from 'react'
import { Check, ArrowRight, Download, Phone } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function ProductCard({ product, index }) {
  const isEven = index % 2 === 0

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:direction-rtl' : ''}`}>
      <div className={`${!isEven ? 'lg:order-2' : ''}`}>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-background">
          <img
            alt={product.title}
            data-strk-img-id={product.imgId}
            data-strk-img={`[${product.descId}] [${product.titleId}] [products-page-title]`}
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className={`${!isEven ? 'lg:order-1' : ''}`}>
        <span className="text-accent font-semibold uppercase tracking-wider text-sm">
          {product.category}
        </span>
        <h3 id={product.titleId} className="text-3xl font-bold text-primary mt-2 mb-4">
          {product.title}
        </h3>
        <p id={product.descId} className="text-text-muted text-lg leading-relaxed mb-6">
          {product.description}
        </p>

        <div className="space-y-3 mb-8">
          {product.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span className="text-text">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="/contact" className="btn-primary">
            Request Quote
            <ArrowRight className="w-5 h-5" />
          </a>
          <button className="btn-secondary">
            <Download className="w-5 h-5" />
            Download Specs
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const products = [
    {
      id: 'double-folding-machine',
      category: 'Premium Series',
      title: 'Double Folding Machine',
      description: 'Our flagship double folding machine delivers unmatched precision for complex bending operations. Featuring dual-action folding capability, this machine handles intricate geometries with ease while maintaining consistent quality across high-volume production runs.',
      imgId: 'product-double-folding-machine-x1y2z3',
      titleId: 'product-double-folding-machine-title',
      descId: 'product-double-folding-machine-desc',
      features: [
        'Dual-action folding mechanism for complex geometries',
        'CNC-controlled precision with 0.01mm accuracy',
        'Automatic angle compensation system',
        'Quick-change tooling for fast setup',
        'Heavy-duty construction for 24/7 operation',
        'Integrated safety systems with light curtains',
      ],
    },
    {
      id: 'double-folder',
      category: 'Professional Series',
      title: 'Double Folder',
      description: 'The double folder offers versatile folding capabilities for medium to large sheet metal workpieces. Its robust design and intuitive controls make it ideal for job shops and production environments requiring consistent, repeatable results.',
      imgId: 'product-double-folder-a4b5c6',
      titleId: 'product-double-folder-title',
      descId: 'product-double-folder-desc',
      features: [
        'Versatile folding up to 6mm thickness',
        'Programmable back gauge system',
        'Digital angle display with memory',
        'Ergonomic operator controls',
        'Compact footprint for space efficiency',
        'Low maintenance design',
      ],
    },
    {
      id: 'sheet-metal-folder',
      category: 'Industrial Series',
      title: 'Sheet Metal Folder',
      description: 'Engineered for demanding sheet metal fabrication, this folder delivers exceptional bending accuracy and speed. Perfect for HVAC, automotive, and general metalworking applications requiring precise, repeatable folds.',
      imgId: 'product-sheet-metal-folder-d7e8f9',
      titleId: 'product-sheet-metal-folder-title',
      descId: 'product-sheet-metal-folder-desc',
      features: [
        'High-speed folding cycle times',
        'Automatic crowning compensation',
        'Multi-axis back gauge positioning',
        'Touchscreen HMI interface',
        'Material thickness auto-detection',
        'Energy-efficient hydraulic system',
      ],
    },
    {
      id: 'sheet-metal-folding-machine',
      category: 'Advanced Series',
      title: 'Sheet Metal Folding Machine',
      description: 'Our advanced sheet metal folding machine combines cutting-edge technology with proven mechanical design. Featuring intelligent bending algorithms and real-time monitoring, it ensures optimal performance for every job.',
      imgId: 'product-sheet-metal-folding-machine-g1h2i3',
      titleId: 'product-sheet-metal-folding-machine-title',
      descId: 'product-sheet-metal-folding-machine-desc',
      features: [
        'Intelligent bending angle control',
        'Real-time process monitoring',
        'Automatic tool wear compensation',
        'Remote diagnostics capability',
        'Industry 4.0 ready connectivity',
        'Comprehensive job storage library',
      ],
    },
    {
      id: 'metal-folder',
      category: 'Standard Series',
      title: 'Metal Folder',
      description: 'A reliable and cost-effective solution for general metal folding applications. This machine offers excellent value with robust construction and straightforward operation, making it perfect for entry-level and intermediate users.',
      imgId: 'product-metal-folder-j4k5l6',
      titleId: 'product-metal-folder-title',
      descId: 'product-metal-folder-desc',
      features: [
        'Simple, intuitive operation',
        'Solid mechanical construction',
        'Manual and semi-auto modes',
        'Adjustable folding beam pressure',
        'Wide range of tooling options',
        'Excellent value for money',
      ],
    },
    {
      id: 'metal-folder-machine',
      category: 'Heavy-Duty Series',
      title: 'Metal Folder Machine',
      description: 'Built for the most demanding industrial applications, this heavy-duty metal folder handles thick plates and large workpieces with ease. Its reinforced structure and powerful drive system ensure consistent performance under heavy loads.',
      imgId: 'product-metal-folder-machine-m7n8o9',
      titleId: 'product-metal-folder-machine-title',
      descId: 'product-metal-folder-machine-desc',
      features: [
        'Heavy-duty reinforced frame',
        'High-tonnage folding capacity',
        'Servo-driven precision control',
        'Automatic sheet support system',
        'Advanced crowning compensation',
        'Extended warranty coverage',
      ],
    },
    {
      id: 'metal-folding-machine',
      category: 'Elite Series',
      title: 'Metal Folding Machine',
      description: 'The pinnacle of our folding machine lineup, this elite metal folding machine represents the ultimate in precision, speed, and versatility. Designed for manufacturers who demand the absolute best in sheet metal fabrication technology.',
      imgId: 'product-metal-folding-machine-p1q2r3',
      titleId: 'product-metal-folding-machine-title',
      descId: 'product-metal-folding-machine-desc',
      features: [
        'State-of-the-art CNC control system',
        'Multi-axis synchronized movement',
        'AI-assisted bending optimization',
        'Automatic material handling options',
        'Predictive maintenance system',
        'Full integration with MES/ERP systems',
      ],
    },
  ]

  return (
    <div ref={containerRef}>
      <section className="pt-32 pb-16 bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold uppercase tracking-wider text-sm">Our Products</span>
            <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
              Sheet Metal Folding Machines
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Explore our comprehensive range of precision folding machines, engineered for 
              accuracy, durability, and peak performance in any production environment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container-custom">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div key={product.id}>
                <ProductCard product={product} index={index} />
                {index < products.length - 1 && (
                  <div className="border-t border-border mt-24" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container-custom text-center">
          <h2 className="section-title mb-4">Need Help Choosing?</h2>
          <p className="section-subtitle mb-8">
            Our technical experts are ready to help you select the perfect machine for your specific requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-primary">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="tel:+1234567890" className="btn-secondary">
              <Phone className="w-5 h-5" />
              Call +1 (234) 567-890
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
