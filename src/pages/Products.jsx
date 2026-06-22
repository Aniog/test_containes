import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, batteries, cables, and electronic accessories.',
    items: ['Consumer Electronics', 'LED Lighting', 'PCBs & Components', 'Cables & Connectors', 'Smart Home Devices', 'Power Banks'],
    imgId: 'prod-img-electronics-a1b2',
    titleId: 'prod-title-electronics',
    descId: 'prod-desc-electronics',
  },
  {
    id: 'textiles',
    name: 'Textiles & Apparel',
    desc: 'Clothing, sportswear, workwear, home textiles, bags, and fashion accessories.',
    items: ['Clothing & Apparel', 'Sportswear', 'Workwear & Uniforms', 'Home Textiles', 'Bags & Luggage', 'Fashion Accessories'],
    imgId: 'prod-img-textiles-c3d4',
    titleId: 'prod-title-textiles',
    descId: 'prod-desc-textiles',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Décor',
    desc: 'Office furniture, home furniture, decorative items, and interior accessories.',
    items: ['Office Furniture', 'Home Furniture', 'Outdoor Furniture', 'Home Décor', 'Lighting Fixtures', 'Storage Solutions'],
    imgId: 'prod-img-furniture-e5f6',
    titleId: 'prod-title-furniture',
    descId: 'prod-desc-furniture',
  },
  {
    id: 'hardware',
    name: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, construction hardware, and industrial equipment.',
    items: ['Hand Tools', 'Power Tools', 'Fasteners & Fixings', 'Construction Hardware', 'Safety Equipment', 'Industrial Machinery'],
    imgId: 'prod-img-hardware-g7h8',
    titleId: 'prod-title-hardware',
    descId: 'prod-desc-hardware',
  },
  {
    id: 'consumer-goods',
    name: 'Consumer Goods & Gifts',
    desc: 'Promotional products, gifts, toys, stationery, and everyday consumer items.',
    items: ['Promotional Products', 'Gifts & Novelties', 'Toys & Games', 'Stationery', 'Kitchen & Dining', 'Personal Care'],
    imgId: 'prod-img-consumer-i9j0',
    titleId: 'prod-title-consumer',
    descId: 'prod-desc-consumer',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    desc: 'Custom packaging, boxes, labels, bags, and printed marketing materials.',
    items: ['Custom Boxes', 'Paper Bags', 'Labels & Stickers', 'Printed Materials', 'Eco Packaging', 'Display Stands'],
    imgId: 'prod-img-packaging-k1l2',
    titleId: 'prod-title-packaging',
    descId: 'prod-desc-packaging',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    desc: 'Fitness equipment, outdoor gear, sporting goods, and recreational products.',
    items: ['Fitness Equipment', 'Outdoor Gear', 'Camping Products', 'Cycling Accessories', 'Water Sports', 'Team Sports Equipment'],
    imgId: 'prod-img-sports-m3n4',
    titleId: 'prod-title-sports',
    descId: 'prod-desc-sports',
  },
  {
    id: 'automotive',
    name: 'Automotive Parts & Accessories',
    desc: 'Car accessories, replacement parts, tools, and automotive electronics.',
    items: ['Car Accessories', 'Replacement Parts', 'Automotive Tools', 'Car Electronics', 'Motorcycle Parts', 'Truck Accessories'],
    imgId: 'prod-img-auto-o5p6',
    titleId: 'prod-title-auto',
    descId: 'prod-desc-auto',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Products We Source from China
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We source across a wide range of product categories. If your product isn't listed, contact us — we likely have experience with it or can find the right manufacturer.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(({ id, name, desc, items, imgId, titleId, descId }) => (
              <div key={id} className="bg-white rounded-2xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={titleId} className="text-xl font-bold text-brand-navy mb-2">{name}</h2>
                  <p id={descId} className="text-brand-muted text-sm mb-4">{desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="bg-blue-50 text-brand-navy text-xs font-medium px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-white border-t border-brand-border">
        <div className="section-container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-brand-muted text-lg mb-8 max-w-xl mx-auto">
            We source a wide variety of products beyond those listed. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Ask About Your Product
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
