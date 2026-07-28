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
      { id: 'consumer-electronics', title: 'Consumer Electronics', desc: 'Smartphones, tablets, earbuds, smart home devices, and accessories.', titleId: 'prod-consumer-elec-title', descId: 'prod-consumer-elec-desc', imgId: 'prod-consumer-elec-img-a1b2c3' },
      { id: 'pcb-components', title: 'PCB & Components', desc: 'Printed circuit boards, electronic components, and assemblies.', titleId: 'prod-pcb-title', descId: 'prod-pcb-desc', imgId: 'prod-pcb-img-d4e5f6' },
      { id: 'led-lighting', title: 'LED Lighting', desc: 'LED bulbs, strips, panels, and commercial lighting solutions.', titleId: 'prod-led-title', descId: 'prod-led-desc', imgId: 'prod-led-img-g7h8i9' },
    ],
  },
  {
    id: 'furniture',
    label: 'Furniture & Home',
    products: [
      { id: 'office-furniture', title: 'Office Furniture', desc: 'Desks, chairs, shelving, and ergonomic office solutions.', titleId: 'prod-office-furn-title', descId: 'prod-office-furn-desc', imgId: 'prod-office-furn-img-j1k2l3' },
      { id: 'home-decor', title: 'Home Décor', desc: 'Decorative items, wall art, candles, and lifestyle accessories.', titleId: 'prod-home-decor-title', descId: 'prod-home-decor-desc', imgId: 'prod-home-decor-img-m4n5o6' },
      { id: 'outdoor-furniture', title: 'Outdoor Furniture', desc: 'Garden sets, patio furniture, and outdoor accessories.', titleId: 'prod-outdoor-furn-title', descId: 'prod-outdoor-furn-desc', imgId: 'prod-outdoor-furn-img-p7q8r9' },
    ],
  },
  {
    id: 'apparel',
    label: 'Apparel & Textiles',
    products: [
      { id: 'garments', title: 'Garments & Clothing', desc: 'Private label apparel, sportswear, workwear, and fashion items.', titleId: 'prod-garments-title', descId: 'prod-garments-desc', imgId: 'prod-garments-img-s1t2u3' },
      { id: 'bags', title: 'Bags & Accessories', desc: 'Handbags, backpacks, luggage, and fashion accessories.', titleId: 'prod-bags-title', descId: 'prod-bags-desc', imgId: 'prod-bags-img-v4w5x6' },
      { id: 'textiles', title: 'Textiles & Fabrics', desc: 'Woven and knitted fabrics, home textiles, and technical textiles.', titleId: 'prod-textiles-title', descId: 'prod-textiles-desc', imgId: 'prod-textiles-img-y7z8a9' },
    ],
  },
  {
    id: 'hardware',
    label: 'Hardware & Industrial',
    products: [
      { id: 'tools', title: 'Tools & Equipment', desc: 'Hand tools, power tools, and industrial equipment.', titleId: 'prod-tools-title', descId: 'prod-tools-desc', imgId: 'prod-tools-img-b1c2d3' },
      { id: 'metal-parts', title: 'Metal Parts & Castings', desc: 'CNC machined parts, die castings, and metal fabrications.', titleId: 'prod-metal-title', descId: 'prod-metal-desc', imgId: 'prod-metal-img-e4f5g6' },
      { id: 'plastic-parts', title: 'Plastic Components', desc: 'Injection molded parts, plastic housings, and custom components.', titleId: 'prod-plastic-title', descId: 'prod-plastic-desc', imgId: 'prod-plastic-img-h7i8j9' },
    ],
  },
  {
    id: 'packaging',
    label: 'Packaging',
    products: [
      { id: 'paper-packaging', title: 'Paper & Cardboard', desc: 'Custom boxes, cartons, paper bags, and retail packaging.', titleId: 'prod-paper-pkg-title', descId: 'prod-paper-pkg-desc', imgId: 'prod-paper-pkg-img-k1l2m3' },
      { id: 'plastic-packaging', title: 'Plastic Packaging', desc: 'Bottles, containers, blister packs, and flexible packaging.', titleId: 'prod-plastic-pkg-title', descId: 'prod-plastic-pkg-desc', imgId: 'prod-plastic-pkg-img-n4o5p6' },
    ],
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    products: [
      { id: 'personal-care', title: 'Personal Care Products', desc: 'Skincare, haircare, and personal hygiene products.', titleId: 'prod-personal-care-title', descId: 'prod-personal-care-desc', imgId: 'prod-personal-care-img-q7r8s9' },
      { id: 'medical-devices', title: 'Medical Devices', desc: 'Class I and II medical devices, diagnostic equipment, and wellness products.', titleId: 'prod-medical-title', descId: 'prod-medical-desc', imgId: 'prod-medical-img-t1u2v3' },
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

  const currentCategory = categories.find((c) => c.id === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              We source across a wide range of product categories from China's major manufacturing regions.
              If it is made in China, we can likely help you source it.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs + Products */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-brand-navy text-white'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:border-brand-navy hover:text-brand-navy'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-video overflow-hidden bg-neutral-100">
                  <img
                    alt={product.title}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={product.titleId} className="font-semibold text-neutral-900 mb-2">
                    {product.title}
                  </h3>
                  <p id={product.descId} className="text-sm text-neutral-600 leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-600 text-lg mb-6">
            Don't see your product category? We source across many more industries.
            Contact us with your specific requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Inquire About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
