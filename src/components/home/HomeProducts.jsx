import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Shirt, Armchair, Factory, Gem, Wrench } from 'lucide-react'

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Tech',
    description: 'Consumer electronics, components, accessories, and smart devices.',
    items: ['LED Lighting', 'Phone Accessories', 'Smart Home Devices', 'Power Banks'],
    image: 'electronics tech components circuit board',
    imageId: 'products-electronics-a1b2c3',
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Clothing, fabrics, fashion accessories, and promotional textiles.',
    items: ['Custom Apparel', 'Workwear', 'Fashion Accessories', 'Bags & Luggage'],
    image: 'textile factory fabric rolls apparel manufacturing',
    imageId: 'products-textiles-d4e5f6',
  },
  {
    icon: Armchair,
    title: 'Home & Garden',
    description: 'Furniture, home décor, kitchenware, and garden products.',
    items: ['Furniture', 'Kitchen Tools', 'Home Décor', 'Garden Equipment'],
    image: 'modern home furniture interior design products',
    imageId: 'products-home-g7h8i9',
  },
  {
    icon: Factory,
    title: 'Industrial & Tools',
    description: 'Machinery, hardware, tools, and industrial equipment.',
    items: ['Power Tools', 'Hardware Parts', 'Machinery', 'Safety Equipment'],
    image: 'industrial machinery factory equipment manufacturing',
    imageId: 'products-industrial-j1k2l3',
  },
  {
    icon: Gem,
    title: 'Beauty & Health',
    description: 'Cosmetics, personal care, health supplements, and wellness products.',
    items: ['Skincare', 'Makeup', 'Supplements', 'Personal Care'],
    image: 'beauty cosmetics products skincare packaging',
    imageId: 'products-beauty-m4n5o6',
  },
  {
    icon: Wrench,
    title: 'Custom Manufacturing',
    description: 'OEM/ODM products tailored to your specifications and branding.',
    items: ['Custom Molds', 'Private Label', 'Prototyping', 'Packaging Design'],
    image: 'custom manufacturing CNC machine prototype',
    imageId: 'products-custom-p7q8r9',
  },
]

const HomeProducts = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-brand-100 text-brand-700 text-sm font-medium rounded-full mb-4">
            Products We Source
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Wide Range of Product Categories
          </h2>
          <p className="text-lg text-slate-600">
            We source products across diverse industries. Whatever you need, we have the expertise and
            supplier network to deliver.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={category.imageId}
                    data-strk-img={`[products-${category.title.toLowerCase().replace(/[^a-z]/g, '-')}] ${category.image}`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    id={`products-${category.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
                  />
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md">
                      <Icon size={20} className="text-brand-600" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{category.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{category.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {category.items.map((item, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-brand-600 font-medium text-sm hover:text-brand-700 transition-colors"
                  >
                    View Products
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary gap-2">
            Browse All Products
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeProducts
