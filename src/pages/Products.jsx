import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics & Tech',
    products: [
      { id: 'consumer-electronics', name: 'Consumer Electronics', desc: 'Smartphones, tablets, earbuds, smart home devices, and accessories.', imgId: 'prod-consumer-elec-img-a1b2', titleId: 'prod-consumer-elec-title', descId: 'prod-consumer-elec-desc' },
      { id: 'led-lighting', name: 'LED Lighting', desc: 'LED bulbs, strips, panels, and commercial lighting solutions.', imgId: 'prod-led-img-c3d4', titleId: 'prod-led-title', descId: 'prod-led-desc' },
      { id: 'pcb-components', name: 'PCB & Electronic Components', desc: 'Printed circuit boards, sensors, modules, and electronic parts.', imgId: 'prod-pcb-img-e5f6', titleId: 'prod-pcb-title', descId: 'prod-pcb-desc' },
      { id: 'power-tools', name: 'Power Tools & Equipment', desc: 'Drills, grinders, power supplies, and industrial equipment.', imgId: 'prod-tools-img-g7h8', titleId: 'prod-tools-title', descId: 'prod-tools-desc' },
    ],
  },
  {
    id: 'furniture',
    label: 'Furniture & Home',
    products: [
      { id: 'office-furniture', name: 'Office Furniture', desc: 'Desks, chairs, shelving, and office storage solutions.', imgId: 'prod-office-furn-img-i9j0', titleId: 'prod-office-furn-title', descId: 'prod-office-furn-desc' },
      { id: 'home-furniture', name: 'Home Furniture', desc: 'Sofas, beds, dining sets, and living room furniture.', imgId: 'prod-home-furn-img-k1l2', titleId: 'prod-home-furn-title', descId: 'prod-home-furn-desc' },
      { id: 'home-decor', name: 'Home Décor & Accessories', desc: 'Decorative items, candles, frames, and interior accessories.', imgId: 'prod-decor-img-m3n4', titleId: 'prod-decor-title', descId: 'prod-decor-desc' },
      { id: 'kitchenware', name: 'Kitchenware & Cookware', desc: 'Pots, pans, utensils, and kitchen appliances.', imgId: 'prod-kitchen-img-o5p6', titleId: 'prod-kitchen-title', descId: 'prod-kitchen-desc' },
    ],
  },
  {
    id: 'apparel',
    label: 'Apparel & Textiles',
    products: [
      { id: 'clothing', name: 'Clothing & Garments', desc: 'T-shirts, jackets, sportswear, and fashion apparel.', imgId: 'prod-clothing-img-q7r8', titleId: 'prod-clothing-title', descId: 'prod-clothing-desc' },
      { id: 'bags', name: 'Bags & Luggage', desc: 'Backpacks, handbags, travel bags, and promotional bags.', imgId: 'prod-bags-img-s9t0', titleId: 'prod-bags-title', descId: 'prod-bags-desc' },
      { id: 'textiles', name: 'Fabrics & Textiles', desc: 'Cotton, polyester, linen, and technical fabrics for manufacturing.', imgId: 'prod-textiles-img-u1v2', titleId: 'prod-textiles-title', descId: 'prod-textiles-desc' },
      { id: 'footwear', name: 'Footwear', desc: 'Sneakers, sandals, boots, and safety footwear.', imgId: 'prod-footwear-img-w3x4', titleId: 'prod-footwear-title', descId: 'prod-footwear-desc' },
    ],
  },
  {
    id: 'industrial',
    label: 'Industrial & Hardware',
    products: [
      { id: 'hardware', name: 'Hardware & Fasteners', desc: 'Bolts, screws, brackets, hinges, and construction hardware.', imgId: 'prod-hardware-img-y5z6', titleId: 'prod-hardware-title', descId: 'prod-hardware-desc' },
      { id: 'machinery', name: 'Machinery & Equipment', desc: 'Industrial machines, packaging equipment, and production lines.', imgId: 'prod-machinery-img-a7b8', titleId: 'prod-machinery-title', descId: 'prod-machinery-desc' },
      { id: 'auto-parts', name: 'Auto Parts & Accessories', desc: 'Car parts, accessories, and aftermarket components.', imgId: 'prod-auto-img-c9d0', titleId: 'prod-auto-title', descId: 'prod-auto-desc' },
      { id: 'safety', name: 'Safety & PPE', desc: 'Helmets, gloves, protective clothing, and safety equipment.', imgId: 'prod-safety-img-e1f2', titleId: 'prod-safety-title', descId: 'prod-safety-desc' },
    ],
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    products: [
      { id: 'cosmetics', name: 'Cosmetics & Skincare', desc: 'Private label cosmetics, skincare, and personal care products.', imgId: 'prod-cosmetics-img-g3h4', titleId: 'prod-cosmetics-title', descId: 'prod-cosmetics-desc' },
      { id: 'supplements', name: 'Health Supplements', desc: 'Vitamins, nutraceuticals, and wellness products.', imgId: 'prod-supplements-img-i5j6', titleId: 'prod-supplements-title', descId: 'prod-supplements-desc' },
      { id: 'medical', name: 'Medical Devices & Supplies', desc: 'Non-prescription medical devices, disposables, and hospital supplies.', imgId: 'prod-medical-img-k7l8', titleId: 'prod-medical-title', descId: 'prod-medical-desc' },
      { id: 'fitness', name: 'Fitness & Sports Equipment', desc: 'Gym equipment, yoga accessories, and outdoor sports gear.', imgId: 'prod-fitness-img-m9n0', titleId: 'prod-fitness-title', descId: 'prod-fitness-desc' },
    ],
  },
  {
    id: 'toys',
    label: 'Toys & Gifts',
    products: [
      { id: 'toys', name: 'Toys & Games', desc: 'Educational toys, board games, outdoor toys, and plush items.', imgId: 'prod-toys-img-o1p2', titleId: 'prod-toys-title', descId: 'prod-toys-desc' },
      { id: 'gifts', name: 'Promotional Gifts & Merchandise', desc: 'Corporate gifts, branded merchandise, and promotional items.', imgId: 'prod-gifts-img-q3r4', titleId: 'prod-gifts-title', descId: 'prod-gifts-desc' },
      { id: 'stationery', name: 'Stationery & Office Supplies', desc: 'Notebooks, pens, planners, and office accessories.', imgId: 'prod-stationery-img-s5t6', titleId: 'prod-stationery-title', descId: 'prod-stationery-desc' },
      { id: 'packaging', name: 'Packaging & Paper Products', desc: 'Custom boxes, bags, labels, and packaging materials.', imgId: 'prod-packaging-img-u7v8', titleId: 'prod-packaging-title', descId: 'prod-packaging-desc' },
    ],
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('electronics');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          data-strk-bg-id="products-hero-bg-w9x0y1"
          data-strk-bg="China manufacturing products export warehouse"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/80" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Products We Source from China
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-8">
            We source a wide range of products across major categories. If you don't see your product listed, contact us — we likely have relevant supplier contacts.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Enquire About Your Product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Category Tabs + Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Browse by Category"
            title="Product Categories We Source"
            subtitle="Select a category to explore the types of products we regularly source from Chinese manufacturers."
          />

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          {currentCategory && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentCategory.products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-slate-100 overflow-hidden">
                    <img
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 id={product.titleId} className="text-slate-900 font-semibold text-base mb-1">{product.name}</h3>
                    <p id={product.descId} className="text-slate-500 text-sm leading-relaxed">{product.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm mb-4">Don't see your product category? We source many more product types.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Ask About Your Product <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Specific Product in Mind?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Send us your product details and we'll identify qualified Chinese suppliers within 5–10 business days.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-bold px-10 py-4 rounded-lg transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
