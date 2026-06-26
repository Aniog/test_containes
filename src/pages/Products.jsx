import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCB assemblies, connectors, cables, power adapters, LED lighting, and electronic components from Shenzhen, Dongguan, and Suzhou.',
    imgId: 'prod-electronics-m9n0o1',
  },
  {
    name: 'Textiles & Apparel',
    desc: 'Garments, sportswear, home textiles, fabrics, bags, and accessories from established manufacturing hubs in Zhejiang, Guangdong, and Fujian provinces.',
    imgId: 'prod-textiles-p2q3r4',
  },
  {
    name: 'Furniture & Home Goods',
    desc: 'Indoor and outdoor furniture, kitchenware, home decor, ceramics, and storage solutions from manufacturers in Foshan, Dongguan, and Chaozhou.',
    imgId: 'prod-furniture-s5t6u7',
  },
  {
    name: 'Hardware & Industrial Parts',
    desc: 'CNC machined parts, metal stampings, fasteners, bearings, molds, and custom industrial components from factories across the Yangtze and Pearl River deltas.',
    imgId: 'prod-hardware-v8w9x0',
  },
  {
    name: 'Plastics & Packaging',
    desc: 'Injection molded parts, blow-molded containers, flexible packaging, paper packaging, and custom branded packaging solutions with competitive tooling costs.',
    imgId: 'prod-plastics-y1z2a3',
  },
  {
    name: 'Promotional Products',
    desc: 'Custom branded merchandise, corporate gifts, promotional items, giveaways, and trade show materials from specialized manufacturers in Yiwu and Guangzhou.',
    imgId: 'prod-promo-b4c5d6',
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, accessories, tools, and components from manufacturers in Zhejiang, Guangdong, and Shandong provinces.',
    imgId: 'prod-auto-e7f8g9',
  },
  {
    name: 'Medical Supplies & Devices',
    desc: 'Medical consumables, PPE, diagnostic devices, and healthcare products from ISO 13485 certified factories with FDA and CE registration.',
    imgId: 'prod-medical-h0i1j2',
  },
  {
    name: 'Sports & Outdoor Equipment',
    desc: 'Fitness equipment, outdoor gear, camping supplies, sports accessories, and recreational products from specialized manufacturers across China.',
    imgId: 'prod-sports-k3l4m5',
  },
];

const ProductsPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Products We Source
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We have deep sourcing expertise across a wide range of product categories. If it's manufactured in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden bg-gray-100">
                  <img
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[prod-cat-${cat.imgId}] china manufacturing`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="p-6">
                  <h3 id={`prod-cat-${cat.imgId}`} className="text-lg font-semibold text-navy mb-2">{cat.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries we serve */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Our clients span a diverse range of industries across the globe.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'E-commerce & Retail', 'Industrial Manufacturing',
              'Construction & Building', 'Automotive & Transportation',
              'Healthcare & Medical', 'Consumer Goods',
              'Hospitality & Food Service', 'Sports & Recreation',
              'Fashion & Apparel', 'Technology & Electronics',
              'Home & Garden', 'Education & Office Supplies',
            ].map((industry) => (
              <div key={industry} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-100">
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Don't See Your Product Category?</h2>
          <p className="text-gray-600 mb-8">Contact us with your requirements. If it's made in China, we can source it.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-navy font-bold px-8 py-3.5 rounded-lg hover:bg-gold-light transition-colors"
          >
            Get a Free Quote <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;