import { useEffect, useRef, useState } from 'react';
import { CtaButton } from '@/components/shared';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    products: [
      { id: 'elec-1', name: 'Consumer Electronics', desc: 'Smartphones, tablets, earbuds, smart home devices', imgId: 'prod-elec1-a1b2', titleId: 'prod-elec1-title', descId: 'prod-elec1-desc' },
      { id: 'elec-2', name: 'LED Lighting', desc: 'Commercial and residential LED fixtures, strips, and bulbs', imgId: 'prod-elec2-c3d4', titleId: 'prod-elec2-title', descId: 'prod-elec2-desc' },
      { id: 'elec-3', name: 'PCBs & Components', desc: 'Printed circuit boards, connectors, sensors, and modules', imgId: 'prod-elec3-e5f6', titleId: 'prod-elec3-title', descId: 'prod-elec3-desc' },
    ],
  },
  {
    id: 'furniture',
    label: 'Furniture & Home',
    products: [
      { id: 'furn-1', name: 'Office Furniture', desc: 'Desks, chairs, shelving, and storage solutions', imgId: 'prod-furn1-g7h8', titleId: 'prod-furn1-title', descId: 'prod-furn1-desc' },
      { id: 'furn-2', name: 'Home Décor', desc: 'Decorative items, wall art, candles, and accessories', imgId: 'prod-furn2-i9j1', titleId: 'prod-furn2-title', descId: 'prod-furn2-desc' },
      { id: 'furn-3', name: 'Outdoor Furniture', desc: 'Garden sets, patio chairs, and outdoor accessories', imgId: 'prod-furn3-k2l3', titleId: 'prod-furn3-title', descId: 'prod-furn3-desc' },
    ],
  },
  {
    id: 'apparel',
    label: 'Apparel & Textiles',
    products: [
      { id: 'app-1', name: 'Sportswear & Activewear', desc: 'Gym wear, yoga pants, running gear, and sports accessories', imgId: 'prod-app1-m4n5', titleId: 'prod-app1-title', descId: 'prod-app1-desc' },
      { id: 'app-2', name: 'Workwear & Uniforms', desc: 'Corporate uniforms, safety workwear, and branded apparel', imgId: 'prod-app2-o6p7', titleId: 'prod-app2-title', descId: 'prod-app2-desc' },
      { id: 'app-3', name: 'Fabrics & Textiles', desc: 'Cotton, polyester, linen, and specialty technical fabrics', imgId: 'prod-app3-q8r9', titleId: 'prod-app3-title', descId: 'prod-app3-desc' },
    ],
  },
  {
    id: 'machinery',
    label: 'Machinery & Tools',
    products: [
      { id: 'mach-1', name: 'Power Tools', desc: 'Drills, grinders, saws, and construction equipment', imgId: 'prod-mach1-s1t2', titleId: 'prod-mach1-title', descId: 'prod-mach1-desc' },
      { id: 'mach-2', name: 'Industrial Machinery', desc: 'CNC machines, packaging equipment, and production lines', imgId: 'prod-mach2-u3v4', titleId: 'prod-mach2-title', descId: 'prod-mach2-desc' },
      { id: 'mach-3', name: 'Hand Tools & Hardware', desc: 'Wrenches, screwdrivers, fasteners, and hardware components', imgId: 'prod-mach3-w5x6', titleId: 'prod-mach3-title', descId: 'prod-mach3-desc' },
    ],
  },
  {
    id: 'packaging',
    label: 'Packaging',
    products: [
      { id: 'pack-1', name: 'Custom Boxes & Cartons', desc: 'Branded retail boxes, shipping cartons, and gift packaging', imgId: 'prod-pack1-y7z8', titleId: 'prod-pack1-title', descId: 'prod-pack1-desc' },
      { id: 'pack-2', name: 'Bags & Pouches', desc: 'Paper bags, plastic pouches, reusable tote bags', imgId: 'prod-pack2-a9b1', titleId: 'prod-pack2-title', descId: 'prod-pack2-desc' },
      { id: 'pack-3', name: 'Labels & Printing', desc: 'Product labels, hang tags, stickers, and printed materials', imgId: 'prod-pack3-c2d3', titleId: 'prod-pack3-title', descId: 'prod-pack3-desc' },
    ],
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    products: [
      { id: 'hlth-1', name: 'Personal Care Products', desc: 'Skincare, haircare, cosmetics, and hygiene products', imgId: 'prod-hlth1-e4f5', titleId: 'prod-hlth1-title', descId: 'prod-hlth1-desc' },
      { id: 'hlth-2', name: 'Supplements & Nutrition', desc: 'Vitamins, protein powders, and health supplements', imgId: 'prod-hlth2-g6h7', titleId: 'prod-hlth2-title', descId: 'prod-hlth2-desc' },
      { id: 'hlth-3', name: 'Medical Devices', desc: 'Diagnostic equipment, rehabilitation aids, and medical supplies', imgId: 'prod-hlth3-i8j9', titleId: 'prod-hlth3-title', descId: 'prod-hlth3-desc' },
    ],
  },
];

const Products = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [activeCategory]);

  const current = categories.find((c) => c.id === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-blue-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold-accent text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            We source across a wide range of industries. If your product is manufactured in China, we can help you find the right supplier.
          </p>
          <CtaButton variant="white" label="Request a Sourcing Quote" />
        </div>
      </section>

      {/* Category Tabs + Products */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-blue-navy text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-navy hover:text-blue-navy'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 id={product.titleId} className="font-semibold text-blue-navy mb-1">{product.name}</h3>
                  <p id={product.descId} className="text-gray-600 text-sm">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-blue-navy mb-3">Don't See Your Product?</h2>
          <p className="text-gray-600 mb-6">
            We source a wide variety of products beyond the categories listed here. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <CtaButton label="Ask About Your Product" />
        </div>
      </section>
    </div>
  );
};

export default Products;
