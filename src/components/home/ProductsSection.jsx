import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeader from '../shared/SectionHeader'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const productCategories = [
  {
    title: 'Electronics & Gadgets',
    description: 'Consumer electronics, phone accessories, LED products, smart home devices, and more.',
    imgId: 'products-electronics-f2d8a1',
    titleId: 'products-electronics-title',
    descId: 'products-electronics-desc',
    query: '[products-electronics-desc] [products-electronics-title]',
  },
  {
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, storage solutions, garden tools, and home decor items.',
    imgId: 'products-home-garden-b7c3e2',
    titleId: 'products-home-garden-title',
    descId: 'products-home-garden-desc',
    query: '[products-home-garden-desc] [products-home-garden-title]',
  },
  {
    title: 'Apparel & Textiles',
    description: 'Clothing, sportswear, bags, shoes, fabrics, and fashion accessories.',
    imgId: 'products-apparel-a1e9d4',
    titleId: 'products-apparel-title',
    descId: 'products-apparel-desc',
    query: '[products-apparel-desc] [products-apparel-title]',
  },
  {
    title: 'Industrial & Machinery',
    description: 'CNC parts, metal fabrication, industrial tools, packaging machinery, and components.',
    imgId: 'products-industrial-c5f2b8',
    titleId: 'products-industrial-title',
    descId: 'products-industrial-desc',
    query: '[products-industrial-desc] [products-industrial-title]',
  },
  {
    title: 'Health & Beauty',
    description: 'Cosmetics, personal care products, fitness equipment, wellness items, and supplements.',
    imgId: 'products-health-beauty-d3a7f6',
    titleId: 'products-health-beauty-title',
    descId: 'products-health-beauty-desc',
    query: '[products-health-beauty-desc] [products-health-beauty-title]',
  },
  {
    title: 'Toys & Promotional',
    description: 'Custom toys, promotional products, branded merchandise, and event giveaways.',
    imgId: 'products-toys-promo-e8b1c9',
    titleId: 'products-toys-title',
    descId: 'products-toys-desc',
    query: '[products-toys-desc] [products-toys-title]',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="section-padding bg-white">
      <div className="container-wide mx-auto">
        <SectionHeader
          tag="Product Categories"
          title="Products We Source from China"
          subtitle="We source across dozens of product categories from China's major manufacturing regions."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productCategories.map((product) => (
            <div key={product.title} className="group card-base card-hover overflow-hidden p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  alt={product.title}
                  data-strk-img-id={product.imgId}
                  data-strk-img={product.query}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-800/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3
                  id={product.titleId}
                  className="heading-card text-lg mb-2"
                >
                  {product.title}
                </h3>
                <p
                  id={product.descId}
                  className="text-body text-sm mb-4"
                >
                  {product.description}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-brand-500 font-semibold text-sm hover:gap-2.5 transition-all"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/products" className="btn-secondary">
            View All Product Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
