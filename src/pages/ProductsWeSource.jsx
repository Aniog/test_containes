import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  ArrowRight, Zap, Package, Warehouse, Target, Building2, Star,
  Sofa, Utensils, Wrench, Shirt, Lightbulb, Cpu, Hammer, Bike,
  Baby, Gamepad2, Flower2, Car, Stethoscope, GraduationCap, PawPrint,
  CheckCircle
} from 'lucide-react';

const productCategories = [
  {
    icon: Zap,
    title: 'Consumer Electronics',
    id: 'electronics',
    titleId: 'products-electronics-page-title',
    descId: 'products-electronics-page-desc',
    description: 'Smart devices, audio equipment, phone accessories, LED products, power banks, chargers, and electronic components.',
    products: ['Phone accessories', 'Bluetooth speakers', 'LED lighting', 'Power banks', 'Smart home devices', 'Charging cables'],
    imageQuery: 'consumer electronics products gadgets accessories',
  },
  {
    icon: Sofa,
    title: 'Furniture & Home Decor',
    id: 'furniture',
    titleId: 'products-furniture-page-title',
    descId: 'products-furniture-page-desc',
    description: 'Indoor and outdoor furniture, decorative items, lighting fixtures, rugs, and home organization solutions.',
    products: ['Office furniture', 'Outdoor sets', 'Decorative lighting', 'Storage solutions', 'Wall art', 'Rugs & carpets'],
    imageQuery: 'furniture home decor interior design products',
  },
  {
    icon: Utensils,
    title: 'Kitchen & Housewares',
    id: 'kitchen',
    titleId: 'products-kitchen-page-title',
    descId: 'products-kitchen-page-desc',
    description: 'Cookware, kitchen tools, storage containers, small appliances, and dining accessories for home and commercial use.',
    products: ['Cookware sets', 'Kitchen tools', 'Storage containers', 'Small appliances', 'Dinnerware', 'Bakeware'],
    imageQuery: 'kitchen cookware housewares products',
  },
  {
    icon: Wrench,
    title: 'Tools & Hardware',
    id: 'tools',
    titleId: 'products-tools-page-title',
    descId: 'products-tools-page-desc',
    description: 'Hand tools, power tools, fasteners, plumbing supplies, and construction hardware for professional and consumer markets.',
    products: ['Hand tools', 'Power tools', 'Fasteners', 'Plumbing fittings', 'Safety equipment', 'Tool storage'],
    imageQuery: 'tools hardware construction equipment',
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    id: 'textiles',
    titleId: 'products-textiles-page-title',
    descId: 'products-textiles-page-desc',
    description: 'Garments, fabrics, bags, promotional textiles, sportswear, and custom-branded clothing for retail and corporate use.',
    products: ['T-shirts & polos', 'Jackets & outerwear', 'Bags & backpacks', 'Sportswear', 'Work uniforms', 'Custom apparel'],
    imageQuery: 'textiles apparel clothing garments fashion',
  },
  {
    icon: Lightbulb,
    title: 'Lighting & Electrical',
    id: 'lighting',
    titleId: 'products-lighting-page-title',
    descId: 'products-lighting-page-desc',
    description: 'LED fixtures, commercial lighting, solar products, electrical components, and smart lighting solutions.',
    products: ['LED panels', 'Solar lights', 'Smart bulbs', 'Commercial fixtures', 'Wiring & cables', 'Switches & sockets'],
    imageQuery: 'LED lighting electrical products fixtures',
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    id: 'packaging',
    titleId: 'products-packaging-page-title',
    descId: 'products-packaging-page-desc',
    description: 'Custom packaging boxes, labels, promotional materials, bags, and printed products for branding and shipping.',
    products: ['Custom boxes', 'Labels & stickers', 'Paper bags', 'Gift packaging', 'Promotional items', 'Print materials'],
    imageQuery: 'packaging boxes printing custom products',
  },
  {
    icon: Gamepad2,
    title: 'Toys & Gifts',
    id: 'toys',
    titleId: 'products-toys-page-title',
    descId: 'products-toys-page-desc',
    description: 'Children\'s toys, promotional gifts, seasonal items, novelties, and custom-designed merchandise.',
    products: ['Educational toys', 'Plush toys', 'Promotional gifts', 'Seasonal items', 'Custom novelties', 'Board games'],
    imageQuery: 'toys gifts children products merchandise',
  },
  {
    icon: Flower2,
    title: 'Garden & Outdoor',
    id: 'garden',
    titleId: 'products-garden-page-title',
    descId: 'products-garden-page-desc',
    description: 'Garden tools, planters, outdoor furniture, irrigation supplies, and landscaping products.',
    products: ['Garden tools', 'Planters & pots', 'Irrigation systems', 'Outdoor lighting', 'Fencing', 'Water features'],
    imageQuery: 'garden outdoor products landscaping tools',
  },
  {
    icon: Baby,
    title: 'Baby & Kids Products',
    id: 'baby',
    titleId: 'products-baby-page-title',
    descId: 'products-baby-page-desc',
    description: 'Baby gear, children\'s furniture, safety products, strollers, and childcare accessories meeting international safety standards.',
    products: ['Strollers', 'High chairs', 'Safety gates', 'Baby monitors', 'Children\'s furniture', 'Feeding products'],
    imageQuery: 'baby children products strollers childcare',
  },
  {
    icon: Warehouse,
    title: 'Industrial & Machinery',
    id: 'industrial',
    titleId: 'products-industrial-page-title',
    descId: 'products-industrial-page-desc',
    description: 'Manufacturing equipment, industrial parts, pumps, valves, and machinery components for various industries.',
    products: ['CNC machines', 'Pumps & valves', 'Conveyor systems', 'Industrial parts', 'Hydraulic components', 'Motors'],
    imageQuery: 'industrial machinery equipment manufacturing',
  },
  {
    icon: Star,
    title: 'Custom & OEM Products',
    id: 'custom',
    titleId: 'products-custom-page-title',
    descId: 'products-custom-page-desc',
    description: 'Any product manufactured to your exact specifications. We work with factories experienced in OEM and ODM production.',
    products: ['Custom designs', 'Private labeling', 'ODM solutions', 'Prototype development', 'Mold making', 'Special materials'],
    imageQuery: 'custom OEM manufacturing products factory',
  },
];

const ProductsWeSource = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-800 to-navy text-white py-16 lg:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <span className="badge bg-white/10 text-white mb-4">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We source products across 20+ categories from verified Chinese manufacturers. If you don't see your product here, ask us — we can source almost anything.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
              Tell Us What You Need
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="card group hover:border-primary-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                    <cat.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 id={cat.titleId} className="text-xl font-semibold text-navy">{cat.title}</h3>
                </div>
                <p id={cat.descId} className="text-slate-600 mb-4 leading-relaxed">{cat.description}</p>
                <div className="mb-4">
                  <img
                    data-strk-img-id={`products-${cat.id}-card-img`}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] products`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.products.slice(0, 4).map((product) => (
                    <span key={product} className="badge bg-slate-100 text-slate-600 text-xs">
                      {product}
                    </span>
                  ))}
                  {cat.products.length > 4 && (
                    <span className="badge bg-primary-50 text-primary-600 text-xs">
                      +{cat.products.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Don't See Your Product?
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                This list represents our most common product categories, but we can source virtually any manufactured product from China. Our network spans thousands of factories across every major manufacturing region.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'We source products not listed on this page',
                  'Custom and niche products are our specialty',
                  'Free feasibility assessment for any product',
                  'No obligation to proceed after consultation',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary group">
                Ask About Your Product
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                data-strk-img-id="products-custom-sourcing-img"
                data-strk-img="custom manufacturing product development factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Custom product sourcing"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary-800 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Source Products?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Get a free quote for any product. We respond within 24 hours with supplier options and pricing.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4 group">
            Get Your Free Quote
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsWeSource;
