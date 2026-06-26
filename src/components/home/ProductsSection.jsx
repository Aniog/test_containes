import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Cog, Shirt, Home, Car, Dumbbell, Lightbulb, ShoppingBag, ArrowRight } from 'lucide-react';

const categories = [
  { icon: Cpu, title: 'Electronics & Components', description: 'Consumer electronics, PCBs, cables, connectors, and electronic components.' },
  { icon: Cog, title: 'Machinery & Industrial', description: 'Manufacturing equipment, tools, pumps, valves, and industrial parts.' },
  { icon: Shirt, title: 'Textiles & Apparel', description: 'Clothing, fabrics, accessories, footwear, and textile materials.' },
  { icon: Home, title: 'Home & Garden', description: 'Furniture, decor, kitchenware, garden tools, and home improvement products.' },
  { icon: Car, title: 'Auto Parts & Accessories', description: 'Vehicle components, aftermarket parts, accessories, and tools.' },
  { icon: Dumbbell, title: 'Sports & Outdoor', description: 'Fitness equipment, outdoor gear, sporting goods, and recreational products.' },
  { icon: Lightbulb, title: 'Lighting & Electrical', description: 'LED lighting, fixtures, electrical components, and smart home devices.' },
  { icon: ShoppingBag, title: 'Consumer Goods', description: 'Toys, gifts, packaging, promotional items, and everyday consumer products.' },
];

export default function ProductsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From electronics to textiles, we source a wide range of products from verified Chinese manufacturers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <category.icon className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors"
          >
            View All Product Categories
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
