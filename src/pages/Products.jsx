import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Cpu, Home, Shirt, Wrench, Car, Heart, Gift, Box } from 'lucide-react';

const Products = () => {
  const products = [
    {
      category: 'Electronics & Gadgets',
      icon: Cpu,
      description: 'Smart devices, consumer electronics, and tech accessories',
      items: ['Smart Home Devices', 'Consumer Electronics', 'Mobile Accessories', 'LED Lighting', 'Batteries & Chargers', 'Audio Equipment']
    },
    {
      category: 'Home & Garden',
      icon: Home,
      description: 'Furniture, decor, kitchenware, and outdoor products',
      items: ['Kitchenware', 'Home Decor', 'Furniture', 'Bedding & Textiles', 'Garden Tools', 'Storage Solutions']
    },
    {
      category: 'Textiles & Apparel',
      icon: Shirt,
      description: 'Clothing, fabrics, and fashion accessories',
      items: ['Casual Wear', 'Sportswear', 'Fashion Accessories', 'Fabrics & Materials', 'Footwear', 'Bags & Luggage']
    },
    {
      category: 'Industrial Equipment',
      icon: Wrench,
      description: 'Machinery, tools, and industrial supplies',
      items: ['Power Tools', 'Industrial Machinery', 'Safety Equipment', 'Hardware', 'Electrical Components', 'Measuring Instruments']
    },
    {
      category: 'Automotive Parts',
      icon: Car,
      description: 'Vehicle parts, accessories, and components',
      items: ['Car Electronics', 'Auto Parts', 'Motorcycle Accessories', 'Car Care Products', 'Tires & Wheels', 'Interior Accessories']
    },
    {
      category: 'Health & Beauty',
      icon: Heart,
      description: 'Personal care, beauty products, and wellness items',
      items: ['Skincare Products', 'Hair Care', 'Cosmetics', 'Health Supplements', 'Medical Supplies', 'Fitness Equipment']
    },
    {
      category: 'Toys & Gifts',
      icon: Gift,
      description: 'Children\'s toys, promotional items, and gifts',
      items: ['Educational Toys', 'Electronic Toys', 'Party Supplies', 'Promotional Gifts', 'Holiday Decorations', 'Craft Supplies']
    },
    {
      category: 'Packaging & Printing',
      icon: Box,
      description: 'Packaging materials and custom printing solutions',
      items: ['Paper Packaging', 'Plastic Packaging', 'Custom Printing', 'Labels & Stickers', 'Gift Boxes', 'Shipping Materials']
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
          <p className="text-xl text-slate-300 max-w-2xl">
            We have expertise across a wide range of product categories, connecting you 
            with verified manufacturers in China.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-8">
                  <div className="flex items-start mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <product.icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{product.category}</h3>
                      <p className="text-slate-600 mt-1">{product.description}</p>
                    </div>
                  </div>
                  <div className="border-t border-slate-100 pt-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Common Items:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.items.map((item, idx) => (
                        <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            We have connections with thousands of manufacturers across various industries. 
            Contact us to discuss your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Discuss Your Requirements
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;