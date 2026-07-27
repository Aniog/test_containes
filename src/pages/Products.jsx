import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const categories = [
    {
      title: 'Electronics',
      description: 'Consumer electronics, components, accessories, and electronic devices',
      examples: ['Smartphones & accessories', 'LED lighting', 'Power banks', 'Audio equipment', 'Electronic components'],
      image: 'electronics',
    },
    {
      title: 'Textiles & Apparel',
      description: 'Fabrics, clothing, home textiles, and fashion accessories',
      examples: ['Cotton fabrics', 'Garments', 'Home textiles', 'Sportswear', 'Fashion accessories'],
      image: 'textiles',
    },
    {
      title: 'Home & Garden',
      description: 'Home decor, furniture, kitchenware, and garden supplies',
      examples: ['Furniture', 'Kitchenware', 'Home decor', 'Garden tools', 'Storage solutions'],
      image: 'home-garden',
    },
    {
      title: 'Machinery & Equipment',
      description: 'Industrial machinery, tools, and manufacturing equipment',
      examples: ['Construction equipment', 'Agricultural machinery', 'Industrial tools', 'Packaging machines', 'Processing equipment'],
      image: 'machinery',
    },
    {
      title: 'Toys & Gifts',
      description: 'Toys, promotional items, gifts, and seasonal products',
      examples: ['Educational toys', 'Promotional gifts', 'Seasonal items', 'Party supplies', 'Craft materials'],
      image: 'toys-gifts',
    },
    {
      title: 'Health & Beauty',
      description: 'Personal care, cosmetics, health products, and beauty tools',
      examples: ['Skincare products', 'Hair care', 'Health supplements', 'Beauty tools', 'Personal care items'],
      image: 'health-beauty',
    },
    {
      title: 'Automotive',
      description: 'Auto parts, accessories, and vehicle components',
      examples: ['Engine parts', 'Body components', 'Interior accessories', 'Lighting', 'Maintenance tools'],
      image: 'automotive',
    },
    {
      title: 'Packaging & Printing',
      description: 'Packaging materials, labels, boxes, and printing services',
      examples: ['Custom boxes', 'Labels & stickers', 'Packaging materials', 'Printing services', 'Display materials'],
      image: 'packaging',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
              Products We Source
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
              We source a wide range of products from China. If you don't see your product category listed, contact us anyway - we likely can help.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all hover:shadow-lg hover:border-slate-300"
              >
                <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
                  <img
                    alt={category.title}
                    data-strk-img-id={`products-${category.image}-img-${index}`}
                    data-strk-img={`[products-title-${index}] [products-desc-${index}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 id={`products-title-${index}`} className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p id={`products-desc-${index}`} className="text-slate-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Don't See Your Product?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            We source many more product categories than what's listed here. Contact us with your specific requirements and we'll let you know if we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Inquire About Your Product
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
