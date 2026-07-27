import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Smartphone, Shirt, Wrench, Package, Cpu, Building2 } from 'lucide-react'

const categories = [
  {
    icon: Smartphone,
    title: 'Consumer Electronics',
    desc: 'Smartphones, accessories, audio devices, wearables, and smart home products.',
  },
  {
    icon: Shirt,
    title: 'Apparel & Textiles',
    desc: 'Garments, fabrics, accessories, footwear, and fashion merchandise.',
  },
  {
    icon: Wrench,
    title: 'Industrial Parts',
    desc: 'Machinery components, hardware tools, automotive parts, and manufacturing equipment.',
  },
  {
    icon: Package,
    title: 'Home & Kitchen',
    desc: 'Household items, kitchenware, furniture, storage solutions, and decor.',
  },
  {
    icon: Cpu,
    title: 'Electronics Components',
    desc: 'PCBs, semiconductors, cables, connectors, and electronic modules.',
  },
  {
    icon: Building2,
    title: 'Packaging Materials',
    desc: 'Custom boxes, labels, wrapping materials, and retail display packaging.',
  },
]

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-surface-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-surface-800 mb-4">
            Products We Source
          </h2>
          <p className="text-surface-500 text-lg">
            We source across a wide range of categories. If it is manufactured in China, we can help you find it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white rounded-xl border border-surface-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mb-4">
                <cat.icon className="w-6 h-6 text-brand-500" />
              </div>
              <h3 className="text-lg font-semibold text-surface-800 mb-2">{cat.title}</h3>
              <p className="text-surface-500 text-sm leading-relaxed">{cat.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-brand-500 text-white rounded-lg font-medium text-sm hover:bg-brand-600 transition-colors"
          >
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}