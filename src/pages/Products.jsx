import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    title: 'Electronics & Technology',
    items: ['Mobile phone accessories', 'Cables, chargers & adapters', 'Bluetooth speakers & headphones', 'Smart home devices', 'PC & laptop peripherals', 'LED lighting & displays', 'Wearable technology', 'Power banks & batteries'],
    imgId: 'cat-electronics-img-x1y2z3',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
  },
  {
    title: 'Apparel, Textiles & Bags',
    items: ['Men\'s, women\'s & children\'s clothing', 'Sportswear & activewear', 'Bags, backpacks & luggage', 'Shoes & footwear', 'Hats, caps & accessories', 'Custom printed fabrics', 'Workwear & uniforms', 'Swimwear & intimates'],
    imgId: 'cat-apparel-img-a4b5c6',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
  },
  {
    title: 'Home, Garden & Furniture',
    items: ['Indoor & outdoor furniture', 'Kitchenware & cookware', 'Bathroom accessories', 'Garden tools & supplies', 'Home decor & artwork', 'Bedding & linen', 'Storage & organization', 'Lighting fixtures'],
    imgId: 'cat-home-img-d7e8f9',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
  },
  {
    title: 'Industrial & Hardware',
    items: ['Machinery parts & components', 'Metal fabrication & CNC parts', 'Hand tools & power tools', 'Fasteners, bolts & screws', 'Pumps, valves & fittings', 'Construction materials', 'Safety equipment & PPE', 'Electrical components'],
    imgId: 'cat-industrial-img-g1h2i3',
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
  },
  {
    title: 'Packaging, Printing & Displays',
    items: ['Custom cardboard boxes', 'Gift boxes & luxury packaging', 'Retail displays & stands', 'Labels, stickers & tags', 'Paper bags & eco packaging', 'Blister & clamshell packaging', 'Printed catalogs & brochures', 'Promotional materials'],
    imgId: 'cat-packaging-img-j4k5l6',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
  },
  {
    title: 'Beauty, Health & Personal Care',
    items: ['Skincare & cosmetics (OEM/ODM)', 'Hair care & styling tools', 'Grooming & shaving products', 'Health supplements', 'Oral care products', 'Makeup brushes & accessories', 'Nail care & manicure tools', 'Spa & wellness products'],
    imgId: 'cat-beauty-img-m7n8o9',
    titleId: 'cat-beauty-title',
    descId: 'cat-beauty-desc',
  },
  {
    title: 'Toys, Baby & Kids',
    items: ['Educational toys & games', 'Plush toys & dolls', 'Baby care products', 'Children\'s furniture', 'Ride-on toys & scooters', 'Arts & crafts supplies', 'Sports toys & outdoor play', 'Baby clothing & accessories'],
    imgId: 'cat-toys-img-p1q2r3',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
  },
  {
    title: 'Sports, Fitness & Outdoor',
    items: ['Fitness equipment & accessories', 'Yoga mats & gear', 'Camping & hiking equipment', 'Cycling accessories', 'Water sports gear', 'Team sports equipment', 'Outdoor clothing', 'Recovery & massage tools'],
    imgId: 'cat-sports-img-s4t5u6',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-800 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">Industries</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Products We Source
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            We have sourced thousands of products across dozens of categories. If it is manufactured in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section ref={containerRef} className="py-16 md:py-24 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((cat, index) => (
              <div key={index} className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-title]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h2 id={cat.titleId} className="text-xl md:text-2xl font-bold text-slate-800 mb-4">{cat.title}</h2>
                  <ul className="grid grid-cols-2 gap-2">
                    {cat.items.map((item, iIndex) => (
                      <li key={iIndex} className="flex items-center gap-2 text-sm text-slate-600">
                        <svg className="w-3.5 h-3.5 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
            Do Not See Your Product Category?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            This is just a sample of what we source. We have experience across many more industries. Reach out and tell us what you need — chances are, we have done it before.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Get a Free Sourcing Quote
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;