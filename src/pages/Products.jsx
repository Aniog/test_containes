import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Electrical',
      description: 'Consumer electronics, components, LED lighting, and electrical equipment.',
      items: ['Smartphones & Accessories', 'LED Lighting', 'Electronic Components', 'Home Appliances', 'Audio & Video Equipment'],
    },
    {
      name: 'Textiles & Apparel',
      description: 'Clothing, fabrics, home textiles, and fashion accessories.',
      items: ['Garments', 'Fabric & Textiles', 'Home Textiles', 'Fashion Accessories', 'Sportswear'],
    },
    {
      name: 'Home & Garden',
      description: 'Furniture, decor, kitchenware, and outdoor products.',
      items: ['Furniture', 'Home Decor', 'Kitchenware', 'Garden Tools', 'Storage Solutions'],
    },
    {
      name: 'Industrial & Hardware',
      description: 'Tools, machinery parts, hardware, and industrial equipment.',
      items: ['Hand Tools', 'Machinery Parts', 'Hardware', 'Safety Equipment', 'Industrial Components'],
    },
    {
      name: 'Toys & Gifts',
      description: 'Toys, promotional items, gifts, and party supplies.',
      items: ['Toys & Games', 'Promotional Products', 'Gift Items', 'Party Supplies', 'Crafts'],
    },
    {
      name: 'Automotive',
      description: 'Auto parts, accessories, and components.',
      items: ['Auto Parts', 'Car Accessories', 'Motorcycle Parts', 'Tools & Equipment', 'Interior Components'],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              We source a wide range of products across multiple industries. If you don't see your product category listed, 
              contact us anyway—we may still be able to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Request Sourcing Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{category.name}</h3>
                <p className="text-slate-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We work with many product categories beyond those listed. Contact us with your specific requirements, 
            and we'll let you know if we can source it for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
