import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Smartphone, Shirt, Home, Zap, Wrench } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    { name: "Consumer Electronics", icon: Smartphone, desc: "Mobile accessories, gadgets, wearable tech, and smart home devices.", id: "p1" },
    { name: "Industrial Equipment", icon: Wrench, desc: "Machinery, production parts, specialized tools, and hardware.", id: "p2" },
    { name: "Home & Kitchen", icon: Home, desc: "Furniture, appliances, decor, kitchenware, and textiles.", id: "p3" },
    { name: "Apparel & Fashion", icon: Shirt, desc: "Clothing, shoes, bags, jewelry, and fashion accessories.", id: "p4" },
    { name: "Sports & Outdoors", icon: Zap, desc: "Fitness equipment, camping gear, outdoor accessories.", id: "p5" },
    { name: "Toys & Hobbies", icon: Box, desc: "Wooden toys, educational kits, hobbyist supplies.", id: "p6" },
  ]

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Extensive experience across a wide range of industries and product categories in China.</p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="group overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:shadow-lg">
                <div className="h-48 overflow-hidden relative">
                  <div 
                    className="absolute inset-0 bg-slate-200 transition-transform duration-500 group-hover:scale-105"
                    data-strk-bg-id={`cat-bg-${cat.id}`}
                    data-strk-bg={`[cat-title-${cat.id}] products china manufacturing`}
                    data-strk-bg-ratio="3x2"
                    data-strk-bg-width="600"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="p-8">
                  <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center -mt-14 relative z-10 shadow-lg mb-4">
                    <cat.icon size={20} />
                  </div>
                  <h3 id={`cat-title-${cat.id}`} className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{cat.desc}</p>
                  <Link to="/contact" className="text-sm font-bold text-blue-600 hover:text-blue-700">
                    Source these products &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Manufacturing */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col lg:flex-row">
            <div className="flex-1 p-12 md:p-16 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900">Need Custom Manufacturing?</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you have a 3D design, a technical drawing, or just a rough prototype, we help you find the right manufacturer capable of OEM and ODM production.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><Box size={16} className="text-green-600" /></div>
                  <span className="text-slate-700">Tooling and Mold management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><Box size={16} className="text-green-600" /></div>
                  <span className="text-slate-700">Material specification checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-1 rounded-full"><Box size={16} className="text-green-600" /></div>
                  <span className="text-slate-700">Branding and customized packaging</span>
                </li>
              </ul>
              <div className="pt-6">
                <Link to="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-colors inline-block">
                  Discuss Your Custom Project
                </Link>
              </div>
            </div>
            <div className="flex-1 min-h-[400px]">
              <div 
                className="w-full h-full bg-slate-200"
                data-strk-bg-id="custom-mfg-visual"
                data-strk-bg="industrial manufacturing product prototype development"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1000"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
