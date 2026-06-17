import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    { title: "Furniture & Interior", img: "Modern office furniture factory China", id: "cat-1" },
    { title: "Electronics & Smart Devices", img: "Electronics manufacturing factory Shenzhen", id: "cat-2" },
    { title: "Textiles & Apparel", img: "Textile production line sewing factory China", id: "cat-3" },
    { title: "Eco-friendly Packaging", img: "Eco friendly packaging boxes manufacturing", id: "cat-4" },
    { title: "Home & Kitchen Appliances", img: "Kitchen appliances production line", id: "cat-5" },
    { title: "Industrial Tools", img: "Industrial machinery tools manufacturing China", id: "cat-6" },
    { title: "Toys & Children Products", img: "Toy factory production line", id: "cat-7" },
    { title: "Safety & Personal Protection", img: "PPE safety equipment manufacturing", id: "cat-8" }
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Categories We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            We source from a wide variety of industries across China, leveraging specialized clusters for each category.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 border border-slate-100 shadow-sm relative">
                  <img 
                    alt={cat.title} 
                    data-strk-img-id={`cat-img-${i}`}
                    data-strk-img={cat.img}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white font-bold text-lg leading-tight">{cat.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 bg-slate-50 p-12 rounded-3xl border border-slate-200 text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">Don't see your product category?</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Our network covers almost all manufacturing sectors in China. Tell us about your specific product and we'll tell you if we can source it.
            </p>
            <Link to="/contact" className="bg-primary text-white px-8 py-3 rounded-md font-bold transition-all hover:bg-slate-900 inline-block">
              Inquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
