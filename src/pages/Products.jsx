import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, Cpu, Sofa, Shirt, Settings, Printer, Heart, ArrowRight,
  CheckCircle, Mail, Phone
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  React.useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  const categories = [
    { id: 'all', name: 'All Categories', icon: Package },
    { id: 'electronics', name: 'Electronics', icon: Cpu },
    { id: 'home', name: 'Home & Garden', icon: Sofa },
    { id: 'textiles', name: 'Textiles & Apparel', icon: Shirt },
    { id: 'machinery', name: 'Machinery & Parts', icon: Settings },
    { id: 'packaging', name: 'Packaging & Printing', icon: Printer },
    { id: 'health', name: 'Health & Beauty', icon: Heart },
  ];

  const products = [
    {
      category: 'electronics',
      name: 'Consumer Electronics',
      items: ['Smartphones & Accessories', 'Audio Equipment', 'Wearable Devices', 'Computer Peripherals', 'Gaming Accessories'],
    },
    {
      category: 'electronics',
      name: 'Electronic Components',
      items: ['PCBs & Circuit Boards', 'Semiconductors', 'Connectors & Cables', 'Sensors & Modules', 'Display Panels'],
    },
    {
      category: 'home',
      name: 'Furniture',
      items: ['Living Room Furniture', 'Office Furniture', 'Outdoor Furniture', 'Storage Solutions', 'Kitchen Cabinets'],
    },
    {
      category: 'home',
      name: 'Home Decor',
      items: ['Wall Art & Mirrors', 'Vases & Bowls', 'Candles & Fragrances', 'Decorative Lighting', 'Rugs & Carpets'],
    },
    {
      category: 'home',
      name: 'Garden & Outdoor',
      items: ['Patio Furniture', 'BBQ Equipment', 'Garden Tools', 'Planters & Pots', 'Outdoor Lighting'],
    },
    {
      category: 'textiles',
      name: 'Apparel',
      items: ['Casual Wear', 'Sportswear', 'Formal Wear', 'Kids Clothing', 'Workwear & Uniforms'],
    },
    {
      category: 'textiles',
      name: 'Fabrics & Materials',
      items: ['Cotton & Blends', 'Synthetic Fabrics', 'Technical Textiles', 'Sustainable Materials', 'Leather & PU'],
    },
    {
      category: 'textiles',
      name: 'Fashion Accessories',
      items: ['Bags & Luggage', 'Hats & Scarves', 'Jewelry & Watches', 'Belts & Wallets', 'Sunglasses & Eyewear'],
    },
    {
      category: 'machinery',
      name: 'Industrial Equipment',
      items: ['Manufacturing Machinery', 'Agricultural Equipment', 'Construction Equipment', 'Packaging Machinery', 'Textile Machinery'],
    },
    {
      category: 'machinery',
      name: 'Auto Parts',
      items: ['Engine Components', 'Body Parts', 'Electrical Systems', 'Interior Accessories', 'Performance Parts'],
    },
    {
      category: 'machinery',
      name: 'Tools & Hardware',
      items: ['Hand Tools', 'Power Tools', 'Fasteners & Hardware', 'Measuring Instruments', 'Safety Equipment'],
    },
    {
      category: 'packaging',
      name: 'Paper Packaging',
      items: ['Corrugated Boxes', 'Paper Bags', 'Cartons & Tubes', 'Labels & Stickers', 'Paper Cups & Plates'],
    },
    {
      category: 'packaging',
      name: 'Plastic Packaging',
      items: ['Plastic Containers', 'Blister Packaging', 'Shrink Film', 'Plastic Bags', 'Cosmetic Containers'],
    },
    {
      category: 'packaging',
      name: 'Custom Printing',
      items: ['Brochures & Catalogs', 'Business Cards', 'Promotional Materials', 'Packaging Design', 'Brand Identity Products'],
    },
    {
      category: 'health',
      name: 'Cosmetics & Personal Care',
      items: ['Skincare Products', 'Makeup & Color Cosmetics', 'Hair Care Products', 'Body Care & Bath', 'Fragrances'],
    },
    {
      category: 'health',
      name: 'Health Products',
      items: ['Vitamins & Supplements', 'Medical Devices', 'Health Monitors', 'Rehabilitation Equipment', 'First Aid Supplies'],
    },
    {
      category: 'health',
      name: 'Baby & Maternal',
      items: ['Baby Care Products', 'Toys & Games', 'Children\'s Apparel', 'Nursing Supplies', 'Safety Products'],
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-xl text-blue-100">
              We have established relationships with manufacturers across a wide range of product categories.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="section-container py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{product.name}</h3>
                <ul className="space-y-2">
                  {product.items.map((item, iIndex) => (
                    <li key={iIndex} className="flex items-start gap-2 text-gray-600 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Finding Your Product */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't See Your Product?</h2>
            <p className="text-gray-600 text-lg mb-8">
              We source a wide variety of products beyond these categories. Contact us with your specific requirements and we'll help you find the right suppliers.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit Your Requirements
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Sourcing?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Get in touch with us to discuss your product needs and receive a customized sourcing plan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:contact@ssourcingchina.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
