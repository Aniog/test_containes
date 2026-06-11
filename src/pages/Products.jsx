import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Button } from '@/components/ui/button'
import ProductCategory from '@/components/sections/ProductCategory'

const Products = () => {
  const categories = [
    {
      title: "Electronics & Components",
      description: "Consumer electronics, industrial components, and accessories for OEM and retail markets.",
      items: [
        "Consumer electronics and accessories",
        "Power supplies, batteries, and chargers",
        "Cables, connectors, and wiring harnesses",
        "PCB assembly and electronic modules",
        "Smart home and IoT devices",
        "Audio and visual equipment",
        "Test and measurement instruments"
      ]
    },
    {
      title: "Home & Garden",
      description: "Furniture, home decor, kitchenware, and outdoor products for retail and wholesale distribution.",
      items: [
        "Furniture and home furnishings",
        "Kitchenware and dining products",
        "Home textiles and bedding",
        "Garden tools and outdoor furniture",
        "Storage and organization solutions",
        "Lighting and lamps",
        "Decorative accessories"
      ]
    },
    {
      title: "Apparel & Textiles",
      description: "Clothing, fabrics, and textile products for fashion, workwear, and home applications.",
      items: [
        "Apparel and fashion garments",
        "Workwear and corporate uniforms",
        "Home textiles and linens",
        "Technical and performance fabrics",
        "Bags, luggage, and accessories",
        "Footwear and components",
        "Yarn and raw textile materials"
      ]
    },
    {
      title: "Industrial & Machinery",
      description: "Equipment, tools, and components for manufacturing, construction, and maintenance.",
      items: [
        "Industrial machinery and equipment",
        "Hand tools and power tools",
        "Safety equipment and PPE",
        "Fasteners, hardware, and fittings",
        "Packaging machinery and materials",
        "Material handling equipment",
        "Maintenance and repair supplies"
      ]
    },
    {
      title: "Consumer Goods",
      description: "Everyday products for retail, promotional, and wholesale channels across multiple categories.",
      items: [
        "Personal care and beauty products",
        "Toys, games, and recreational items",
        "Sports and fitness equipment",
        "Pet products and accessories",
        "Stationery and office supplies",
        "Kitchen and household consumables",
        "Seasonal and promotional goods"
      ]
    },
    {
      title: "Automotive & Transportation",
      description: "Parts, accessories, and components for automotive, bicycle, and marine applications.",
      items: [
        "Automotive parts and accessories",
        "Electric vehicle components",
        "Bicycle and e-bike parts",
        "Marine equipment and accessories",
        "Logistics and material handling",
        "Tires, wheels, and related products",
        "Aftermarket and replacement parts"
      ]
    },
    {
      title: "Packaging & Materials",
      description: "Packaging solutions, raw materials, and components for manufacturing and distribution.",
      items: [
        "Custom packaging and containers",
        "Protective packaging materials",
        "Labels, tags, and printing",
        "Raw materials and semi-finished goods",
        "Plastic and metal components",
        "Adhesives, tapes, and films",
        "Sustainable and eco-friendly options"
      ]
    },
    {
      title: "Medical & Healthcare",
      description: "Non-regulated medical supplies, wellness products, and healthcare accessories.",
      items: [
        "Medical consumables and supplies",
        "Wellness and personal care devices",
        "First aid and safety products",
        "Mobility and rehabilitation aids",
        "Healthcare facility supplies",
        "Protective equipment and apparel",
        "Diagnostic and monitoring accessories"
      ]
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="uppercase tracking-[2px] text-xs text-slate-400 mb-3">CATEGORIES</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Products We Source</h1>
          <p className="max-w-2xl text-lg text-slate-300">We work across a wide range of product categories. Our network includes manufacturers with experience serving export markets and compliance with international standards.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <ProductCategory key={idx} {...cat} />
          ))}
        </div>
      </div>

      <div className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-semibold tracking-tight mb-3">Don't see your product category?</h2>
          <p className="text-slate-600 mb-6">We regularly source specialized and niche products. Contact us with your requirements and we will advise on feasibility and approach.</p>
          <Button asChild size="lg">
            <Link to="/contact">Discuss Your Sourcing Needs</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Products