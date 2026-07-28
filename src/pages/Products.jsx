import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Shirt, Sofa, Zap, Smartphone, Cog, Package, Baby, Car, Beaker, ShoppingBag, ArrowRight, CheckCircle } from 'lucide-react'

const categories = [
  { icon: Shirt, title: 'Apparel & Textiles', description: 'Garments, fabrics, accessories, and fashion items manufactured across China\'s textile hubs.', imgId: 'prod-apparel-a1b2c3', imgQuery: '[prod-apparel-title] [products-heading]', titleId: 'prod-apparel-title' },
  { icon: Sofa, title: 'Home & Furniture', description: 'Indoor and outdoor furniture, home decor, kitchenware, and household products.', imgId: 'prod-furniture-b2c3d4', imgQuery: '[prod-furniture-title] [products-heading]', titleId: 'prod-furniture-title' },
  { icon: Zap, title: 'Consumer Electronics', description: 'Audio devices, smart gadgets, components, and electronic accessories.', imgId: 'prod-electronics-c3d4e5', imgQuery: '[prod-electronics-title] [products-heading]', titleId: 'prod-electronics-title' },
  { icon: Smartphone, title: 'Phone & Computer Accessories', description: 'Phone cases, chargers, cables, screen protectors, and peripheral devices.', imgId: 'prod-accessories-d4e5f6', imgQuery: '[prod-accessories-title] [products-heading]', titleId: 'prod-accessories-title' },
  { icon: Cog, title: 'Industrial Equipment & Parts', description: 'Machinery components, tools, industrial supplies, and manufacturing equipment.', imgId: 'prod-industrial-e5f6a7', imgQuery: '[prod-industrial-title] [products-heading]', titleId: 'prod-industrial-title' },
  { icon: Package, title: 'Packaging & Printing', description: 'Custom packaging boxes, labels, printing services, and display materials.', imgId: 'prod-packaging-f6a7b8', imgQuery: '[prod-packaging-title] [products-heading]', titleId: 'prod-packaging-title' },
  { icon: Baby, title: 'Baby & Kids Products', description: 'Toys, baby gear, children\'s clothing, and educational products.', imgId: 'prod-baby-a7b8c9', imgQuery: '[prod-baby-title] [products-heading]', titleId: 'prod-baby-title' },
  { icon: Car, title: 'Auto Parts & Accessories', description: 'Vehicle components, car accessories, and automotive aftermarket products.', imgId: 'prod-auto-b8c9d1', imgQuery: '[prod-auto-title] [products-heading]', titleId: 'prod-auto-title' },
  { icon: Beaker, title: 'Health & Beauty', description: 'Cosmetics, personal care products, supplements, and wellness items.', imgId: 'prod-beauty-c9d1e2', imgQuery: '[prod-beauty-title] [products-heading]', titleId: 'prod-beauty-title' },
  { icon: ShoppingBag, title: 'Gifts & Promotional Items', description: 'Custom gifts, branded merchandise, corporate gifts, and promotional products.', imgId: 'prod-gifts-d1e2f3', imgQuery: '[prod-gifts-title] [products-heading]', titleId: 'prod-gifts-title' },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-28">
        <div className="section-container text-center">
          <h1 id="products-heading" className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            From raw materials to finished goods, we source products across virtually every 
            industry from China's manufacturing base.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => {
              const Icon = cat.icon
              return (
                <div key={index} className="card">
                  <div className="aspect-[16/10] bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      data-strk-img-id={cat.imgId}
                      data-strk-img={cat.imgQuery}
                      data-strk-img-ratio="16x10"
                      data-strk-img-width="600"
                      alt={cat.title}
                      className="w-full h-full object-cover"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="w-10 h-10 bg-accent/5 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 id={cat.titleId} className="text-lg font-semibold text-gray-900 mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cat.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What We Do With Products */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">How We Source Your Products</h2>
            <p className="section-subtitle">
              No matter the product category, our sourcing process remains thorough and professional.
            </p>
            <div className="mt-10 space-y-4">
              {[
                'We research and identify manufacturers that specialize in your product category',
                'We verify supplier credentials, certifications, and export experience',
                'We request and review product samples before any production commitment',
                'We negotiate pricing, payment terms, and delivery schedules on your behalf',
                'We conduct quality inspections throughout the production process',
                'We handle logistics and shipping documentation to your destination',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="section-container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can We Source Your Product?</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
            If it can be manufactured in China, we can help source it. Contact us for a free assessment.
          </p>
          <Link to="/contact" className="btn-secondary text-lg px-8 py-3.5 inline-flex items-center gap-2">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}