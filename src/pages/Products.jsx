import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'PCBs, semiconductors, connectors, cables, sensors, power supplies, displays, IoT modules, and consumer electronics.',
    subcategories: ['Consumer Electronics', 'Industrial Electronics', 'IoT & Smart Devices', 'LED Lighting', 'Power Banks & Chargers', 'Audio Equipment'],
    imgId: 'prod-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'home-kitchen',
    title: 'Home & Kitchen Appliances',
    desc: 'Small kitchen appliances, cookware, bakeware, food storage, coffee machines, blenders, air fryers, and home cleaning devices.',
    subcategories: ['Small Kitchen Appliances', 'Cookware & Bakeware', 'Food Storage & Containers', 'Coffee & Tea Equipment', 'Home Cleaning Devices', 'Vacuum Flasks & Bottles'],
    imgId: 'prod-home-d4e5f6',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Decor',
    desc: 'Indoor and outdoor furniture, home textiles, decorative items, lighting fixtures, wall art, rugs, and storage solutions.',
    subcategories: ['Living Room Furniture', 'Bedroom Furniture', 'Office Furniture', 'Outdoor & Garden Furniture', 'Lighting Fixtures', 'Home Decor & Accessories'],
    imgId: 'prod-furniture-g7h8i9',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'textiles',
    title: 'Textiles, Apparel & Accessories',
    desc: 'Garments, sportswear, bags, shoes, fashion accessories, home textiles, and promotional apparel for brands and retailers.',
    subcategories: ['Casual & Fashion Apparel', 'Sportswear & Activewear', 'Bags & Luggage', 'Footwear', 'Home Textiles', 'Fashion Accessories'],
    imgId: 'prod-textiles-j1k2l3',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, paper bags, labels, flexible packaging, gift boxes, blister packaging, and promotional print materials.',
    subcategories: ['Custom Paper Boxes', 'Flexible Packaging', 'Labels & Stickers', 'Gift Packaging', 'Food Packaging', 'Promotional Printing'],
    imgId: 'prod-packaging-m4n5o6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'hardware',
    title: 'Hardware & Industrial Tools',
    desc: 'Hand tools, power tools, fasteners, locks, construction hardware, safety equipment, and industrial components.',
    subcategories: ['Hand Tools', 'Power Tools', 'Fasteners & Fixings', 'Locks & Security Hardware', 'Construction Materials', 'Safety Equipment'],
    imgId: 'prod-hardware-p7q8r9',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
  },
  {
    id: 'auto',
    title: 'Auto Parts & Accessories',
    desc: 'Aftermarket auto parts, car electronics, interior accessories, exterior trim, motorcycle parts, and EV components.',
    subcategories: ['Engine & Drivetrain Parts', 'Car Electronics & Lighting', 'Interior Accessories', 'Exterior Trim & Body Parts', 'Motorcycle Parts', 'EV Components'],
    imgId: 'prod-auto-s1t2u3',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor Equipment',
    desc: 'Fitness equipment, camping gear, bicycles, water sports equipment, outdoor furniture, and sports accessories.',
    subcategories: ['Fitness & Gym Equipment', 'Camping & Hiking Gear', 'Bicycles & Accessories', 'Water Sports Equipment', 'Outdoor Recreation', 'Team Sports Gear'],
    imgId: 'prod-sports-v4w5x6',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Educational Products',
    desc: 'Plush toys, educational toys, board games, puzzles, electronic toys, STEM kits, and children\'s furniture.',
    subcategories: ['Plush & Stuffed Toys', 'Educational & STEM Toys', 'Board Games & Puzzles', 'Electronic & RC Toys', 'Outdoor Play Equipment', 'Children\'s Furniture'],
    imgId: 'prod-toys-y7z8a9',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'beauty',
    title: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare products, beauty tools, personal care appliances, grooming products, and cosmetic packaging.',
    subcategories: ['Skincare Products', 'Makeup & Cosmetics', 'Beauty Tools & Devices', 'Hair Care & Styling', 'Personal Care Appliances', 'Cosmetic Packaging'],
    imgId: 'prod-beauty-b1c2d3',
    titleId: 'prod-beauty-title',
    descId: 'prod-beauty-desc',
  },
  {
    id: 'medical',
    title: 'Medical Devices & Supplies',
    desc: 'Disposable medical supplies, diagnostic equipment, rehabilitation products, hospital furniture, and PPE.',
    subcategories: ['Disposable Medical Supplies', 'Diagnostic Equipment', 'Rehabilitation Products', 'Hospital Furniture', 'PPE & Protective Gear', 'Medical Wearables'],
    imgId: 'prod-medical-e4f5g6',
    titleId: 'prod-medical-title',
    descId: 'prod-medical-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Parts',
    desc: 'CNC machines, packaging machinery, plastic injection molding machines, conveyor systems, and industrial automation equipment.',
    subcategories: ['CNC & Machining Equipment', 'Packaging Machinery', 'Plastic Processing Equipment', 'Conveyor & Handling Systems', 'Industrial Automation', 'Spare Parts & Components'],
    imgId: 'prod-machinery-h7i8j9',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-brand-orange font-semibold text-sm uppercase tracking-wider">Products We Source</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-6">
              We Source Across All Major Manufacturing Categories
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              With 5,000+ verified factories across 12 major categories, we can source virtually any product manufactured in China.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-xl font-bold text-navy mb-2">{cat.title}</h3>
                  <p id={cat.descId} className="text-gray-500 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.subcategories.map((sub) => (
                      <span key={sub} className="text-xs bg-blue-50 text-brand-blue px-2.5 py-1 rounded-full font-medium">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Don't See Your Product Category?</h2>
          <p className="text-gray-500 mb-6">
            These are our most common categories, but we source products across many other industries. 
            If your product isn't listed, contact us — we likely have relevant experience and supplier connections.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-md hover:bg-brand-blue-dark transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}