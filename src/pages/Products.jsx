import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    {
      id: "electronics",
      title: "Consumer Electronics",
      desc: "Smartphones, wearables, audio devices, smart home products, and accessories.",
      imgId: "prod-cat-elec-1a"
    },
    {
      id: "home-garden",
      title: "Home & Garden",
      desc: "Furniture, decor, kitchenware, outdoor tools, and home improvement items.",
      imgId: "prod-cat-home-2b"
    },
    {
      id: "apparel-textile",
      title: "Apparel & Textiles",
      desc: "Clothing, sportswear, footwear, fabrics, and custom fashion accessories.",
      imgId: "prod-cat-apparel-3c"
    },
    {
      id: "toys-baby",
      title: "Toys & Baby Products",
      desc: "Educational toys, plush items, nursery gear, and safe baby accessories.",
      imgId: "prod-cat-toys-4d"
    },
    {
      id: "machinery",
      title: "Machinery & Equipment",
      desc: "Industrial machines, tools, packaging equipment, and manufacturing hardware.",
      imgId: "prod-cat-machinery-5e"
    },
    {
      id: "sports-outdoors",
      title: "Sports & Outdoors",
      desc: "Fitness equipment, camping gear, bicycles, and outdoor recreational products.",
      imgId: "prod-cat-sports-6f"
    }
  ]

  return (
    <div ref={containerRef} className="py-20 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 id="products-title" className="text-4xl font-extrabold text-slate-900 mb-4">Products We Source</h1>
          <p id="products-subtitle" className="text-xl text-slate-600">
            With our deep network of verified manufacturers across China's major industrial hubs, we can source almost any product category.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div key={cat.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group">
              <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                <img
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[cat-title-${cat.id}] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <h3 id={`cat-title-${cat.id}`} className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p id={`cat-desc-${cat.id}`} className="text-slate-600 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center max-w-4xl mx-auto border border-blue-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Don't see your product category?</h2>
          <p className="text-slate-600 mb-6">
            Our sourcing experts can find verified factories for customized items, niche products, and specialized components. Submit an inquiry with your specifications.
          </p>
        </div>
      </div>
    </div>
  )
}
