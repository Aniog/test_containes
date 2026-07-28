import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';

const productCategories = [
  {
    title: 'Consumer Electronics',
    description: 'Smart devices, accessories, audio equipment, and electronic components from certified manufacturers.',
    products: ['LED Lighting', 'Power Banks', 'Bluetooth Speakers', 'Phone Cases', 'USB Chargers', 'Smart Watches'],
    image: 'consumer electronics products display',
  },
  {
    title: 'Home & Kitchen',
    description: 'Furniture, kitchenware, home decor, and household items from quality-focused suppliers.',
    products: ['Kitchen Utensils', 'Storage Solutions', 'Home Decor', 'Bathroom Accessories', 'Cleaning Tools', 'Garden Furniture'],
    image: 'home kitchen products',
  },
  {
    title: 'Apparel & Fashion',
    description: 'Custom clothing, bags, shoes, and fashion accessories with flexible MOQs.',
    products: ['Custom T-shirts', 'Bags & Backpacks', 'Shoes', 'Hats & Caps', 'Sunglasses', 'Jewelry'],
    image: 'fashion apparel products',
  },
  {
    title: 'Industrial & Machinery',
    description: 'Manufacturing equipment, industrial parts, and professional-grade tools.',
    products: ['CNC Machines', 'Power Tools', 'Industrial Valves', 'Bearings', 'Pumps', 'Welding Equipment'],
    image: 'industrial machinery equipment',
  },
  {
    title: 'Health & Beauty',
    description: 'Cosmetics, skincare, fitness equipment, and wellness products meeting international standards.',
    products: ['Skincare Products', 'Makeup', 'Fitness Equipment', 'Massage Devices', 'Supplements', 'Personal Care'],
    image: 'health beauty products',
  },
  {
    title: 'Automotive',
    description: 'Vehicle parts, accessories, and components for passenger and commercial vehicles.',
    products: ['Car LED Lights', 'Brake Pads', 'Filters', 'EV Charging Parts', 'Car Mats', 'Dash Cameras'],
    image: 'automotive parts accessories',
  },
  {
    title: 'Toys & Gifts',
    description: 'Children\'s toys, promotional items, and custom gift products.',
    products: ['Educational Toys', 'Stuffed Animals', 'Promotional Items', 'Custom Gifts', 'Board Games', 'Outdoor Toys'],
    image: 'toys gifts products',
  },
  {
    title: 'Building & Hardware',
    description: 'Construction materials, hardware, plumbing, and electrical supplies.',
    products: ['Door Hardware', 'Plumbing Fittings', 'Electrical Components', 'Tiles & Flooring', 'Hand Tools', 'Fasteners'],
    image: 'building hardware supplies',
  },
];

const Products = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 to-brand-700 py-20">
        <div className="container-wide text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We source a comprehensive range of products from verified Chinese manufacturers across major industries.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="card group">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand-100 to-brand-50 rounded-xl flex items-center justify-center">
                    <Package className="w-12 h-12 text-brand-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {category.products.slice(0, 4).map((product, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {product}
                        </span>
                      ))}
                      {category.products.length > 4 && (
                        <span className="px-3 py-1 bg-brand-50 text-brand-600 text-xs rounded-full font-medium">
                          +{category.products.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="section-padding bg-gray-50">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Product?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We source custom and specialized products not listed here. Contact us with your requirements and we will find the right suppliers.
          </p>
          <Link to="/contact" className="btn-primary text-lg">
            Request Custom Sourcing
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
