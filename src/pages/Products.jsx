import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, cables, LED products, and electronic assemblies. We source from certified manufacturers in Shenzhen and Dongguan.',
    imgId: 'prod-electronics-s1t2u3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles & Apparel',
    desc: 'Fabrics, garments, home textiles, sportswear, and fashion accessories. Our verified suppliers in Zhejiang and Jiangsu deliver consistent quality at competitive prices.',
    imgId: 'prod-textiles-v4w5x6',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    desc: 'Fasteners, hand tools, power tools, locks, hinges, and metal components. We work with ISO-certified factories in Wenzhou and Yongkang hardware clusters.',
    imgId: 'prod-hardware-y7z8a9',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and printing materials. From food-grade packaging to luxury retail boxes, we find the right manufacturer.',
    imgId: 'prod-packaging-b1c2d3',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home',
    desc: 'Office furniture, home decor, kitchenware, and outdoor furniture. We source from established manufacturers in Foshan and Anji furniture production zones.',
    imgId: 'prod-furniture-e4f5g6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'automotive',
    title: 'Auto Parts & Machinery',
    desc: 'Auto components, industrial machinery parts, and mechanical assemblies. Our suppliers include certified OEM and ODM manufacturers across multiple provinces.',
    imgId: 'prod-automotive-h7i8j9',
    titleId: 'prod-automotive-title',
    descId: 'prod-automotive-desc',
  },
  {
    id: 'chemicals',
    title: 'Chemicals & Materials',
    desc: 'Industrial chemicals, coatings, adhesives, plastics, and raw materials. We verify compliance with international safety and environmental standards.',
    imgId: 'prod-chemicals-k1l2m3',
    titleId: 'prod-chemicals-title',
    descId: 'prod-chemicals-desc',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    desc: 'Sporting goods, fitness equipment, camping gear, and outdoor products. We source from specialized manufacturers with proven quality track records.',
    imgId: 'prod-sports-n4o5p6',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    id: 'medical',
    title: 'Medical & Health',
    desc: 'Medical devices, health products, PPE, and hygiene supplies. All suppliers are verified for regulatory compliance and quality certifications.',
    imgId: 'prod-medical-q7r8s9',
    titleId: 'prod-medical-title',
    descId: 'prod-medical-desc',
  },
]

const ProductsPage = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-primary-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 id="products-page-title" className="text-3xl md:text-4xl font-bold mb-4">Products We Source</h1>
          <p id="products-page-desc" className="text-primary-100 max-w-2xl text-lg">
            We source across a wide range of product categories. Whether you need consumer goods or industrial components, we can find the right supplier for your requirements.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="group rounded-lg border border-neutral-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden bg-neutral-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-desc] [products-page-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-neutral-800 mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-sm text-neutral-500 leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Product Not Listed Here?</h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            We can source almost any product made in China. Tell us what you need and we will find qualified suppliers for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded-lg no-underline transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
