import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    products: [
      { name: 'Consumer Electronics', desc: 'Smartphones, tablets, earbuds, smart home devices', titleId: 'prod-ce-title', descId: 'prod-ce-desc', imgId: 'prod-ce-img-a1b2c3' },
      { name: 'Electronic Components', desc: 'PCBs, connectors, sensors, cables, batteries', titleId: 'prod-ec-title', descId: 'prod-ec-desc', imgId: 'prod-ec-img-d4e5f6' },
      { name: 'LED Lighting', desc: 'LED strips, bulbs, panels, commercial lighting', titleId: 'prod-led-title', descId: 'prod-led-desc', imgId: 'prod-led-img-g7h8i9' },
      { name: 'Power Tools', desc: 'Drills, grinders, saws, cordless tools', titleId: 'prod-pt-title', descId: 'prod-pt-desc', imgId: 'prod-pt-img-j1k2l3' },
    ],
  },
  {
    id: 'furniture',
    label: 'Furniture & Home',
    products: [
      { name: 'Office Furniture', desc: 'Desks, chairs, shelving, storage solutions', titleId: 'prod-of-title', descId: 'prod-of-desc', imgId: 'prod-of-img-m4n5o6' },
      { name: 'Home Furniture', desc: 'Sofas, beds, dining sets, cabinets', titleId: 'prod-hf-title', descId: 'prod-hf-desc', imgId: 'prod-hf-img-p7q8r9' },
      { name: 'Home Décor', desc: 'Vases, frames, candles, decorative accessories', titleId: 'prod-hd-title', descId: 'prod-hd-desc', imgId: 'prod-hd-img-s1t2u3' },
      { name: 'Kitchenware', desc: 'Cookware, utensils, storage, appliances', titleId: 'prod-kw-title', descId: 'prod-kw-desc', imgId: 'prod-kw-img-v4w5x6' },
    ],
  },
  {
    id: 'apparel',
    label: 'Apparel & Textiles',
    products: [
      { name: 'Clothing & Apparel', desc: 'T-shirts, jackets, sportswear, workwear', titleId: 'prod-cl-title', descId: 'prod-cl-desc', imgId: 'prod-cl-img-y7z8a9' },
      { name: 'Bags & Accessories', desc: 'Handbags, backpacks, wallets, belts', titleId: 'prod-ba-title', descId: 'prod-ba-desc', imgId: 'prod-ba-img-b2c3d4' },
      { name: 'Textiles & Fabrics', desc: 'Cotton, polyester, linen, technical fabrics', titleId: 'prod-tf-title', descId: 'prod-tf-desc', imgId: 'prod-tf-img-e5f6g7' },
      { name: 'Footwear', desc: 'Sneakers, sandals, boots, safety shoes', titleId: 'prod-fw-title', descId: 'prod-fw-desc', imgId: 'prod-fw-img-h8i9j1' },
    ],
  },
  {
    id: 'industrial',
    label: 'Industrial & Hardware',
    products: [
      { name: 'Hardware & Fasteners', desc: 'Bolts, screws, nuts, brackets, hinges', titleId: 'prod-hw-title', descId: 'prod-hw-desc', imgId: 'prod-hw-img-k2l3m4' },
      { name: 'Machinery Parts', desc: 'Gears, bearings, motors, pneumatic components', titleId: 'prod-mp-title', descId: 'prod-mp-desc', imgId: 'prod-mp-img-n5o6p7' },
      { name: 'Safety Equipment', desc: 'PPE, helmets, gloves, safety vests', titleId: 'prod-se-title', descId: 'prod-se-desc', imgId: 'prod-se-img-q8r9s1' },
      { name: 'Packaging Materials', desc: 'Boxes, bags, labels, foam, bubble wrap', titleId: 'prod-pm-title', descId: 'prod-pm-desc', imgId: 'prod-pm-img-t2u3v4' },
    ],
  },
  {
    id: 'toys',
    label: 'Toys & Sports',
    products: [
      { name: 'Toys & Games', desc: 'Educational toys, board games, outdoor play', titleId: 'prod-tg-title', descId: 'prod-tg-desc', imgId: 'prod-tg-img-w5x6y7' },
      { name: 'Sports Equipment', desc: 'Fitness gear, outdoor equipment, team sports', titleId: 'prod-sp-title', descId: 'prod-sp-desc', imgId: 'prod-sp-img-z8a9b1' },
      { name: 'Baby Products', desc: 'Strollers, car seats, feeding, nursery items', titleId: 'prod-bp-title', descId: 'prod-bp-desc', imgId: 'prod-bp-img-c2d3e4' },
      { name: 'Pet Products', desc: 'Pet food, accessories, toys, grooming', titleId: 'prod-pp-title', descId: 'prod-pp-desc', imgId: 'prod-pp-img-f5g6h7' },
    ],
  },
  {
    id: 'beauty',
    label: 'Beauty & Health',
    products: [
      { name: 'Cosmetics & Skincare', desc: 'Private label cosmetics, skincare, OEM beauty', titleId: 'prod-cs-title', descId: 'prod-cs-desc', imgId: 'prod-cs-img-i8j9k1' },
      { name: 'Health Supplements', desc: 'Vitamins, protein powders, herbal products', titleId: 'prod-hs-title', descId: 'prod-hs-desc', imgId: 'prod-hs-img-l2m3n4' },
      { name: 'Medical Devices', desc: 'Diagnostic tools, rehabilitation equipment', titleId: 'prod-md-title', descId: 'prod-md-desc', imgId: 'prod-md-img-o5p6q7' },
      { name: 'Personal Care', desc: 'Hair care, oral care, grooming products', titleId: 'prod-pc-title', descId: 'prod-pc-desc', imgId: 'prod-pc-img-r8s9t1' },
    ],
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const currentCategory = categories.find(c => c.id === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ backgroundColor: '#0d2b4e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#93c5fd' }}>
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products We Source
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We source across a wide range of product categories from China's major manufacturing regions. If you don't see your product, contact us — we likely source it.
          </p>
        </div>
      </section>

      {/* Category Tabs + Products */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat.id
                    ? 'text-white'
                    : 'text-slate-600 bg-slate-100 hover:bg-slate-200'
                }`}
                style={activeCategory === cat.id ? { backgroundColor: '#1a4f8a' } : {}}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentCategory.products.map((product) => (
              <div key={product.name} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 id={product.titleId} className="font-semibold text-sm mb-1" style={{ color: '#0d2b4e' }}>{product.name}</h3>
                  <p id={product.descId} className="text-slate-500 text-xs leading-relaxed">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12" style={{ backgroundColor: '#f8fafc' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 text-lg mb-6">
            Don't see your product category? We source a wide range of goods from China. Contact us with your requirements and we will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-colors"
            style={{ backgroundColor: '#c0392b' }}
          >
            Submit a Sourcing Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
