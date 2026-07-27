import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const categories = [
    {
      name: 'Consumer Electronics & Components',
      examples: 'Power banks, cables, chargers, LED lighting, small appliances, audio accessories',
    },
    {
      name: 'Home & Garden Products',
      examples: 'Kitchenware, storage solutions, outdoor furniture, garden tools, home textiles',
    },
    {
      name: 'Apparel & Textiles',
      examples: 'Clothing, workwear, promotional items, fabric, home textiles, accessories',
    },
    {
      name: 'Industrial Equipment & Parts',
      examples: 'Machinery components, tools, fasteners, safety equipment, material handling',
    },
    {
      name: 'Furniture & Furnishings',
      examples: 'Office furniture, home furniture, commercial seating, shelving, fixtures',
    },
    {
      name: 'Automotive Components',
      examples: 'Aftermarket parts, accessories, tools, maintenance equipment, interior trim',
    },
    {
      name: 'Packaging Materials',
      examples: 'Boxes, bags, labels, protective packaging, custom containers, displays',
    },
    {
      name: 'Medical & Healthcare Supplies',
      examples: 'PPE, diagnostic equipment, rehabilitation aids, wellness products, disposables',
    },
    {
      name: 'Promotional & Custom Products',
      examples: 'Branded merchandise, corporate gifts, trade show displays, custom packaging',
    },
    {
      name: 'Building Materials & Hardware',
      examples: 'Fixtures, fasteners, tools, safety equipment, construction accessories',
    },
  ]

  return (
    <div>
      <section className="bg-[#F8FAFC] section-padding">
        <div className="container max-w-3xl text-center">
          <h1 className="text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-[#475569]">
            Established supplier relationships across diverse product categories.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="card">
                <h3 className="font-semibold text-xl mb-3">{category.name}</h3>
                <p className="text-[#475569]">{category.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8FAFC]">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Category?</h2>
          <p className="text-lg text-[#475569] mb-8">
            We work with suppliers across many additional categories. Contact us to discuss your specific sourcing needs.
          </p>
          <Link to="/contact" className="btn-primary">Discuss Your Requirements</Link>
        </div>
      </section>
    </div>
  )
}

export default Products