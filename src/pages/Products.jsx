import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/button'

const Products = () => {
  const categories = [
    {
      title: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Power banks & chargers', 'LED lighting products', 'Wearable technology']
    },
    {
      title: 'Home & Garden',
      items: ['Kitchen appliances', 'Home textiles', 'Furniture & decor', 'Garden tools', 'Storage solutions']
    },
    {
      title: 'Apparel & Textiles',
      items: ['Casual clothing', 'Workwear & uniforms', 'Home textiles', 'Bags & accessories', 'Footwear']
    },
    {
      title: 'Industrial & Tools',
      items: ['Hand tools', 'Power tools', 'Safety equipment', 'Fasteners & hardware', 'Packaging materials']
    },
    {
      title: 'Auto Parts & Accessories',
      items: ['Car accessories', 'Motorcycle parts', 'Tires & wheels', 'Lighting components', 'Interior trim']
    },
    {
      title: 'Promotional Products',
      items: ['Custom branded items', 'Trade show giveaways', 'Corporate gifts', 'Packaging & displays', 'Event merchandise']
    },
  ]

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-[#0F2942] mb-4">Products We Source</h1>
        <p className="text-[#475569] max-w-2xl mx-auto">We have experience sourcing across a wide range of product categories</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {categories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-[#E2E8F0]">
            <h3 className="font-semibold text-[#0F2942] mb-4">{category.title}</h3>
            <ul className="space-y-2 text-sm text-[#475569]">
              {category.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-lg border border-[#E2E8F0] text-center">
        <h3 className="text-xl font-semibold text-[#0F2942] mb-3">Don't see your product category?</h3>
        <p className="text-[#475569] mb-6">We source across many additional categories. Contact us to discuss your specific requirements.</p>
        <Link to="/contact"><Button size="lg">Discuss Your Project</Button></Link>
      </div>
    </div>
  )
}

export default Products