import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle } from 'lucide-react'

const categories = [
  {
    name: 'Consumer Electronics',
    desc: 'Smartphones, tablets, headphones, speakers, chargers, smartwatches, and smart home devices.',
    items: ['Smartphones & Accessories', 'Audio Devices & Headphones', 'Wearables & Smartwatches', 'Smart Home Devices', 'Chargers & Cables'],
  },
  {
    name: 'Home & Kitchen',
    desc: 'Kitchen appliances, cookware, home decor, furniture, storage, and cleaning products.',
    items: ['Small Kitchen Appliances', 'Cookware & Bakeware', 'Home Decor & Furniture', 'Storage & Organization', 'Cleaning Products'],
  },
  {
    name: 'Fashion & Apparel',
    desc: 'Clothing, footwear, bags, accessories, textiles, and leather goods.',
    items: ['Casual & Sportswear', 'Footwear', 'Bags & Luggage', 'Accessories (Belts, Hats, Scarves)', 'Textiles & Fabrics'],
  },
  {
    name: 'Industrial & Machinery',
    desc: 'Manufacturing equipment, tools, packaging machinery, and industrial parts.',
    items: ['Packaging Machinery', 'Hand & Power Tools', 'Industrial Parts & Components', 'Safety Equipment', 'Warehouse Equipment'],
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, skincare, personal care, supplements, and wellness products.',
    items: ['Skincare & Cosmetics', 'Hair Care Products', 'Supplements & Vitamins', 'Personal Care Devices', 'Wellness Products'],
  },
  {
    name: 'Auto & Motorcycle Parts',
    desc: 'Vehicle parts, accessories, tools, tires, and performance upgrades.',
    items: ['Engine & Mechanical Parts', 'Auto Accessories', 'Motorcycle Parts', 'Tires & Wheels', 'Diagnostic Tools'],
  },
  {
    name: 'Baby & Kids Products',
    desc: 'Toys, baby gear, educational supplies, nursery products, and children furniture.',
    items: ['Educational Toys', 'Baby Gear & Strollers', 'Nursery Furniture', 'Kids Apparel', 'School Supplies'],
  },
  {
    name: 'Pet Supplies',
    desc: 'Pet food, toys, accessories, grooming tools, bedding, and health products.',
    items: ['Pet Food & Treats', 'Pet Toys & Accessories', 'Grooming Tools', 'Pet Beds & Furniture', 'Health & Wellness'],
  },
  {
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, camping gear, cycling, water sports, and outdoor recreation.',
    items: ['Fitness Equipment', 'Camping & Hiking Gear', 'Cycling Accessories', 'Water Sports Equipment', 'Team Sports Gear'],
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, bags, and commercial printing solutions.',
    items: ['Cardboard Boxes & Cartons', 'Custom Labels & Stickers', 'Plastic Bags & Films', 'Gift Packaging', 'Commercial Printing'],
  },
  {
    name: 'Building & Construction',
    desc: 'Building materials, hardware, plumbing, electrical, and construction tools.',
    items: ['Building Materials', 'Hardware & Fittings', 'Plumbing Supplies', 'Electrical Components', 'Construction Tools'],
  },
  {
    name: 'Medical & Healthcare',
    desc: 'Medical devices, PPE, healthcare equipment, and laboratory supplies.',
    items: ['Medical Devices', 'PPE & Protective Gear', 'Healthcare Equipment', 'Laboratory Supplies', 'First Aid Kits'],
  },
]

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-neutral-900 py-16 md:py-20">
        <div className="container-section">
          <div className="max-w-3xl">
            <p className="text-brand-400 font-semibold text-sm mb-4 uppercase tracking-wide">Products We Source</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Products We Source from China
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
              From electronics to heavy machinery, if it is manufactured in China, we can source it for you.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-section">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-neutral-900 mb-2">{cat.name}</h2>
                <p className="text-sm text-neutral-500 mb-4">{cat.desc}</p>
                <ul className="space-y-1.5">
                  {cat.items.map((item, ii) => (
                    <li key={ii} className="flex items-center gap-2 text-sm text-neutral-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Product Not Listed?</h2>
          <p className="text-lg text-neutral-500 max-w-2xl mx-auto mb-8">
            We source across virtually all manufacturing categories in China. Contact us with your product requirements.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}