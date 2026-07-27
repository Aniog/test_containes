import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

export default function ProductsWeSource() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const categories = [
    {
      id: "electronics",
      title: "Consumer Electronics",
      description: "From smart home devices to wearables, mobile accessories, and general consumer tech.",
      imgId: "cat-electronics-99b3a1",
      areas: ["Shenzhen", "Dongguan", "Guangzhou"],
      items: ["Smartwatches", "Bluetooth Speakers", "Chargers & Cables", "Small Kitchen Appliances"]
    },
    {
      id: "home-garden",
      title: "Home & Garden",
      description: "Furniture, decor, outdoor living, and daily household items.",
      imgId: "cat-home-garden-44f2c8",
      areas: ["Foshan", "Zhejiang", "Fujian"],
      items: ["Indoor Furniture", "Patio Sets", "Home Decor", "Storage Solutions"]
    },
    {
      id: "apparel-textiles",
      title: "Apparel & Textiles",
      description: "Clothing, fabrics, bags, shoes, and fashion accessories.",
      imgId: "cat-apparel-11d8e5",
      areas: ["Guangzhou", "Zhejiang", "Jiangsu"],
      items: ["Casual Wear", "Sportswear", "Backpacks & Luggage", "Footwear"]
    },
    {
      id: "toys-baby",
      title: "Toys & Baby Products",
      description: "Educational toys, plush items, baby care, and nursery products.",
      imgId: "cat-toys-77a9c2",
      areas: ["Shantou", "Chenghai", "Yiwu"],
      items: ["Educational Toys", "Plush Toys", "Baby Strollers", "Nursery Furniture"]
    },
    {
      id: "hardware-tools",
      title: "Hardware & Tools",
      description: "Hand tools, power tools, building materials, and industrial components.",
      imgId: "cat-hardware-33e1b7",
      areas: ["Yongkang", "Zhejiang", "Shandong"],
      items: ["Hand Tools", "Power Tools", "Bathroom Fixtures", "Fasteners"]
    },
    {
      id: "outdoor-sports",
      title: "Outdoor & Sports",
      description: "Fitness equipment, camping gear, bicycles, and sporting goods.",
      imgId: "cat-sports-66c4d9",
      areas: ["Jiangsu", "Guangdong", "Zhejiang"],
      items: ["Yoga Equipment", "Camping Tents", "E-Bikes", "Sporting Goods"]
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300">
            With our base in Southern China and network across the country, we have direct access to the world's largest manufacturing hubs across various industries.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <Card key={cat.id} className="overflow-hidden border-0 shadow-lg flex flex-col">
                <div className="relative h-64 bg-slate-200">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[cat-title-${cat.id}] [cat-desc-${cat.id}] factory production`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
                    Hubs: {cat.areas.join(", ")}
                  </div>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <h3 id={`cat-title-${cat.id}`} className="text-2xl font-bold mb-3">{cat.title}</h3>
                  <p id={`cat-desc-${cat.id}`} className="text-slate-600 mb-6 flex-1">{cat.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-slate-900 mb-3 uppercase tracking-wider">Examples:</h4>
                    <ul className="space-y-2">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Warning / Edge Cases */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See Your Product Category?</h2>
          <p className="text-lg text-slate-600 mb-8">
            The list above represents our most common sourcing requests, but China manufactures almost everything. 
            If you need something specific, complex, or customized, reach out to us. We have likely sourced it before.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8 text-left">
            <h4 className="font-bold text-yellow-800 mb-2">Note on Restricted Items:</h4>
            <p className="text-yellow-700 text-sm">
              We generally do not source hazardous chemicals, highly perishable foods, or counterfeit/replica branded goods. 
              We strictly adhere to international trade compliance and copyright laws.
            </p>
          </div>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8" asChild>
            <Link to="/contact">Ask Us About Your Product</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}