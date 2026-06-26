import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics',
      items: ['Smart home devices', 'Audio equipment', 'Mobile accessories', 'Power banks', 'LED lighting']
    },
    {
      name: 'Home & Kitchen',
      items: ['Cookware and bakeware', 'Small appliances', 'Storage solutions', 'Tableware', 'Cleaning supplies']
    },
    {
      name: 'Textiles & Apparel',
      items: ['Garments and clothing', 'Home textiles', 'Bags and luggage', 'Footwear', 'Workwear']
    },
    {
      name: 'Industrial Components',
      items: ['Fasteners and hardware', 'Machined parts', 'Electrical components', 'Packaging machinery', 'Tooling']
    },
    {
      name: 'Packaging Materials',
      items: ['Corrugated boxes', 'Plastic packaging', 'Labels and tags', 'Protective packaging', 'Custom packaging']
    },
    {
      name: 'Furniture & Fixtures',
      items: ['Home furniture', 'Office furniture', 'Outdoor furniture', 'Retail fixtures', 'Storage systems']
    }
  ]

  const industries = [
    'Retail & E-commerce',
    'Wholesale Distribution',
    'Manufacturing',
    'Hospitality',
    'Construction',
    'Automotive'
  ]

  return (
    <div>
      <section className="bg-[#0F172A] text-white py-16">
        <div className="container">
          <h1 className="text-5xl mb-4 text-white">Products We Source</h1>
          <p className="text-xl text-[#94A3B8] max-w-2xl">
            Experience across diverse product categories with established supplier networks.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="card">
                <h3 className="text-xl mb-4">{category.name}</h3>
                <ul className="space-y-2 text-[#64748B]">
                  {category.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white border-t border-[#E2E8F0]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Industries We Serve</h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Our clients span multiple sectors with varying sourcing requirements.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="px-6 py-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-full text-[#334155]">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-[#E2E8F0]">
        <div className="container text-center">
          <h2 className="text-3xl mb-4">Don't See Your Product?</h2>
          <p className="text-[#64748B] mb-6 max-w-xl mx-auto">
            We work with suppliers across many additional categories. Contact us to discuss your specific requirements.
          </p>
          <Link to="/contact">
            <Button>Discuss Your Project</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Products