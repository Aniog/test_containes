import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const productCategories = [
  {
    title: 'Electronics & Gadgets',
    description: 'Consumer electronics, smart devices, accessories, and components.',
    items: ['LED Lighting', 'Power Banks', 'Phone Accessories', 'Smart Home Devices'],
    image: 'consumer electronics and gadgets',
  },
  {
    title: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, and outdoor products.',
    items: ['Furniture', 'Kitchen Tools', 'Home Decor', 'Garden Supplies'],
    image: 'home and garden products',
  },
  {
    title: 'Apparel & Textiles',
    description: 'Clothing, bags, shoes, and fabric materials.',
    items: ['Custom Clothing', 'Bags & Luggage', 'Shoes', 'Textiles'],
    image: 'apparel and textile products',
  },
  {
    title: 'Machinery & Tools',
    description: 'Industrial equipment, hand tools, and manufacturing machinery.',
    items: ['CNC Machines', 'Power Tools', 'Industrial Parts', 'Hardware'],
    image: 'industrial machinery and tools',
  },
  {
    title: 'Health & Beauty',
    description: 'Cosmetics, personal care, fitness equipment, and wellness products.',
    items: ['Cosmetics', 'Skincare', 'Fitness Gear', 'Supplements'],
    image: 'health and beauty products',
  },
  {
    title: 'Automotive Parts',
    description: 'Vehicle components, accessories, and aftermarket parts.',
    items: ['Car Accessories', 'LED Lights', 'Brake Parts', 'EV Components'],
    image: 'automotive parts and accessories',
  },
];

const ProductsWeSource = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Products We Source
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We source a wide range of products across major industries from verified Chinese manufacturers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category, index) => (
            <div key={index} className="card group overflow-hidden">
              <div className="aspect-[16/10] bg-gradient-to-br from-brand-100 to-brand-50 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-brand-400 text-sm font-medium">{category.title}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/products" className="btn-secondary">
            View All Products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsWeSource;
