import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ProductsPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      title: 'Electronics & Components',
      description: 'Consumer electronics, PCBs, cables, connectors, semiconductors, and electronic accessories.',
      examples: ['Smart home devices', 'PCB assemblies', 'USB cables & connectors', 'LED lighting components'],
    },
    {
      title: 'Textiles & Apparel',
      description: 'Fabrics, garments, accessories, and textile materials for fashion and industrial use.',
      examples: ['Cotton and synthetic fabrics', 'Custom apparel manufacturing', 'Bags and accessories', 'Home textiles'],
    },
    {
      title: 'Home & Garden',
      description: 'Furniture, home decor, kitchenware, garden tools, and outdoor living products.',
      examples: ['Indoor and outdoor furniture', 'Kitchen and dining products', 'Garden tools and equipment', 'Home decor items'],
    },
    {
      title: 'Industrial Equipment',
      description: 'Machinery, tools, hardware, and industrial components for manufacturing and construction.',
      examples: ['CNC machines and parts', 'Power tools and hand tools', 'Industrial hardware', 'Safety equipment'],
    },
    {
      title: 'Packaging Materials',
      description: 'Custom packaging solutions including boxes, bags, labels, and protective materials.',
      examples: ['Custom printed boxes', 'Poly bags and pouches', 'Product labels and stickers', 'Protective packaging'],
    },
    {
      title: 'Automotive Parts',
      description: 'Vehicle components, accessories, tools, and aftermarket parts for various vehicle types.',
      examples: ['Engine components', 'Interior accessories', 'Exterior parts and trim', 'Maintenance tools'],
    },
    {
      title: 'Sports & Outdoor',
      description: 'Sporting goods, fitness equipment, outdoor gear, and recreational products.',
      examples: ['Fitness equipment', 'Camping and hiking gear', 'Sports accessories', 'Outdoor furniture'],
    },
    {
      title: 'Toys & Gifts',
      description: 'Children toys, promotional gifts, seasonal decorations, and novelty items.',
      examples: ['Educational toys', 'Promotional merchandise', 'Seasonal decorations', 'Custom gifts'],
    },
    {
      title: 'Beauty & Personal Care',
      description: 'Cosmetics, skincare products, beauty tools, and personal care accessories.',
      examples: ['Makeup and cosmetics', 'Skincare products', 'Beauty tools and accessories', 'Hair care products'],
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 id="products-title" className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
            <p id="products-subtitle" className="text-lg text-slate-300">
              From consumer goods to industrial components, we source a wide range of products from verified Chinese manufacturers across multiple industries.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {categories.map((category, index) => (
              <div key={index} className="card-default group">
                <div className="aspect-video bg-slate-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    data-strk-img-id={`product-cat-img-${index + 1}`}
                    data-strk-img={`[product-cat-desc-${index}] [product-cat-title-${index}] [products-subtitle] [products-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <h2 id={`product-cat-title-${index}`} className="heading-3 mb-2">{category.title}</h2>
                <p id={`product-cat-desc-${index}`} className="text-slate-600 text-sm mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-4">Do Not See Your Product Category?</h2>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            We source many more product categories than listed here. Contact us with your specific requirements and we will find the right suppliers for you.
          </p>
          <Link to="/contact" className="btn-primary">
            Request a Custom Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
