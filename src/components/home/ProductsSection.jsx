import { Link } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Electronics & Components',
    desc: 'Consumer electronics, LED lighting, PCBs, chargers, cables, and electronic accessories.',
    imgId: 'cat-electronics-9f2d4a',
    query: 'electronics components consumer products',
  },
  {
    title: 'Home & Garden',
    desc: 'Furniture, kitchenware, bathroom fixtures, garden tools, and home decor items.',
    imgId: 'cat-home-garden-7b3e1c',
    query: 'home garden furniture kitchenware products',
  },
  {
    title: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, bags, shoes, sportswear, and fashion accessories.',
    imgId: 'cat-apparel-4a8c2f',
    query: 'apparel textile clothing fashion factory',
  },
  {
    title: 'Industrial & Machinery',
    desc: 'CNC parts, pumps, valves, tools, packaging machines, and industrial equipment.',
    imgId: 'cat-industrial-6d1e9b',
    query: 'industrial machinery equipment manufacturing',
  },
  {
    title: 'Promotional & Custom',
    desc: 'Branded merchandise, custom packaging, promotional gifts, and private label products.',
    imgId: 'cat-promo-3c7f2a',
    query: 'promotional custom branded merchandise products',
  },
  {
    title: 'Building & Hardware',
    desc: 'Tiles, lighting fixtures, door hardware, plumbing supplies, and construction materials.',
    imgId: 'cat-building-8e5a1d',
    query: 'building materials hardware construction supplies',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Product Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-4">
              Products We Source
            </h2>
            <p className="text-text-secondary text-lg max-w-xl">
              We have established supplier networks across major manufacturing regions in China, covering a wide range of product categories.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-accent font-semibold mt-4 md:mt-0 hover:text-accent-hover transition-colors"
          >
            View All Categories
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="group rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden bg-bg-card">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.title.replace(/\s+/g, '-').toLowerCase()}] ${cat.query}`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {cat.title}
                </h3>
                <p className="text-text-secondary text-sm">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
