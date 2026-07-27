import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, LED products, and electronic assemblies. We source from verified factories in Shenzhen, Dongguan, and Guangzhou.',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-k5l6',
  },
  {
    id: 'textiles',
    title: 'Textiles & Garments',
    desc: 'Fabrics, apparel, home textiles, sportswear, and fashion accessories. Our network covers factories in Zhejiang, Jiangsu, and Guangdong provinces.',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
    imgId: 'prod-textiles-img-m7n8',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    desc: 'Fasteners, hand tools, power tools, locks, hinges, and metal components. Verified suppliers in Wenzhou, Yongkang, and Ningbo hardware clusters.',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
    imgId: 'prod-hardware-img-o9p0',
  },
  {
    id: 'home-garden',
    title: 'Home & Garden Products',
    desc: 'Furniture, kitchenware, garden tools, lighting, and home decor items. Sourced from factories across Fujian, Guangdong, and Shandong.',
    titleId: 'prod-home-garden-title',
    descId: 'prod-home-garden-desc',
    imgId: 'prod-home-garden-img-q1r2',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and commercial printing services. Factories in Shenzhen, Shanghai, and Dongguan.',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-s3t4',
  },
  {
    id: 'automotive',
    title: 'Auto Parts & Accessories',
    desc: 'OEM and aftermarket auto parts, interior accessories, and vehicle components. Verified suppliers in Changzhou, Ningbo, and Wenzhou.',
    titleId: 'prod-automotive-title',
    descId: 'prod-automotive-desc',
    imgId: 'prod-automotive-img-u5v6',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery',
    desc: 'CNC machines, packaging equipment, food processing machinery, and industrial automation systems.',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
    imgId: 'prod-machinery-img-w7x8',
  },
  {
    id: 'chemicals',
    title: 'Chemicals & Materials',
    desc: 'Industrial chemicals, coatings, adhesives, plastics, and raw materials for manufacturing.',
    titleId: 'prod-chemicals-title',
    descId: 'prod-chemicals-desc',
    imgId: 'prod-chemicals-img-y9z0',
  },
  {
    id: 'medical',
    title: 'Medical & Health Products',
    desc: 'Medical devices, health supplements, PPE, disposable medical supplies, and wellness products.',
    titleId: 'prod-medical-title',
    descId: 'prod-medical-desc',
    imgId: 'prod-medical-img-a1b2',
  },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="products-page-title" className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Products We Source
          </h1>
          <p id="products-page-subtitle" className="text-white/80 max-w-2xl mx-auto">
            We work across a wide range of product categories. If your product is made in China, we can help you source it reliably from verified factories.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div
                key={cat.id}
                className="bg-white border border-neutral-light rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-subtitle] [products-page-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover bg-neutral-light"
                />
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-primary mb-2">
                    {cat.title}
                  </h3>
                  <p id={cat.descId} className="text-neutral-mid text-sm leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-white/80 mb-8">
            We source many more categories beyond what is listed here. Contact us with your specific product requirements and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-md text-lg font-semibold no-underline hover:bg-accent-light transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
