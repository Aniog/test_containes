import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTAButton from '../components/ui/CTAButton';
import SectionHeader from '../components/ui/SectionHeader';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    products: [
      { id: 'p-e1', titleId: 'p-e1-title', descId: 'p-e1-desc', imgId: 'p-img-e1-3a1b2c', name: 'Consumer Electronics', desc: 'Bluetooth speakers, headphones, smart home devices, LED lighting, power banks.' },
      { id: 'p-e2', titleId: 'p-e2-title', descId: 'p-e2-desc', imgId: 'p-img-e2-4d5e6f', name: 'Industrial Electronics', desc: 'PCBs, sensors, control panels, industrial automation components.' },
      { id: 'p-e3', titleId: 'p-e3-title', descId: 'p-e3-desc', imgId: 'p-img-e3-7g8h9i', name: 'Accessories & Peripherals', desc: 'Phone cases, cables, chargers, computer peripherals, wearables.' },
    ],
  },
  {
    id: 'furniture',
    label: 'Furniture & Home',
    products: [
      { id: 'p-f1', titleId: 'p-f1-title', descId: 'p-f1-desc', imgId: 'p-img-f1-1j2k3l', name: 'Indoor Furniture', desc: 'Sofas, chairs, tables, bedroom furniture, office furniture.' },
      { id: 'p-f2', titleId: 'p-f2-title', descId: 'p-f2-desc', imgId: 'p-img-f2-4m5n6o', name: 'Outdoor Furniture', desc: 'Garden sets, patio chairs, sun loungers, outdoor dining sets.' },
      { id: 'p-f3', titleId: 'p-f3-title', descId: 'p-f3-desc', imgId: 'p-img-f3-7p8q9r', name: 'Home Décor', desc: 'Decorative items, candles, picture frames, storage solutions, kitchenware.' },
    ],
  },
  {
    id: 'apparel',
    label: 'Apparel & Textiles',
    products: [
      { id: 'p-a1', titleId: 'p-a1-title', descId: 'p-a1-desc', imgId: 'p-img-a1-1s2t3u', name: 'Clothing & Fashion', desc: 'T-shirts, jackets, sportswear, workwear, uniforms, fashion accessories.' },
      { id: 'p-a2', titleId: 'p-a2-title', descId: 'p-a2-desc', imgId: 'p-img-a2-4v5w6x', name: 'Bags & Luggage', desc: 'Backpacks, handbags, travel bags, promotional bags, custom branded bags.' },
      { id: 'p-a3', titleId: 'p-a3-title', descId: 'p-a3-desc', imgId: 'p-img-a3-7y8z9a', name: 'Home Textiles', desc: 'Bedding, towels, curtains, rugs, cushions, table linens.' },
    ],
  },
  {
    id: 'hardware',
    label: 'Hardware & Tools',
    products: [
      { id: 'p-h1', titleId: 'p-h1-title', descId: 'p-h1-desc', imgId: 'p-img-h1-1b2c3d', name: 'Hand Tools', desc: 'Wrenches, screwdrivers, pliers, hammers, measuring tools.' },
      { id: 'p-h2', titleId: 'p-h2-title', descId: 'p-h2-desc', imgId: 'p-img-h2-4e5f6g', name: 'Power Tools', desc: 'Drills, grinders, saws, sanders, power tool accessories.' },
      { id: 'p-h3', titleId: 'p-h3-title', descId: 'p-h3-desc', imgId: 'p-img-h3-7h8i9j', name: 'Construction Materials', desc: 'Fasteners, brackets, pipes, fittings, safety equipment.' },
    ],
  },
  {
    id: 'toys',
    label: 'Toys & Baby',
    products: [
      { id: 'p-t1', titleId: 'p-t1-title', descId: 'p-t1-desc', imgId: 'p-img-t1-1k2l3m', name: 'Toys & Games', desc: 'Educational toys, outdoor toys, board games, puzzles, plush toys.' },
      { id: 'p-t2', titleId: 'p-t2-title', descId: 'p-t2-desc', imgId: 'p-img-t2-4n5o6p', name: 'Baby Products', desc: 'Baby gear, feeding products, nursery items, baby clothing.' },
      { id: 'p-t3', titleId: 'p-t3-title', descId: 'p-t3-desc', imgId: 'p-img-t3-7q8r9s', name: 'Sports & Outdoor', desc: 'Fitness equipment, camping gear, sports accessories, bicycles.' },
    ],
  },
  {
    id: 'packaging',
    label: 'Packaging',
    products: [
      { id: 'p-pk1', titleId: 'p-pk1-title', descId: 'p-pk1-desc', imgId: 'p-img-pk1-1t2u3v', name: 'Custom Packaging', desc: 'Branded boxes, bags, labels, tissue paper, custom printed packaging.' },
      { id: 'p-pk2', titleId: 'p-pk2-title', descId: 'p-pk2-desc', imgId: 'p-img-pk2-4w5x6y', name: 'Industrial Packaging', desc: 'Corrugated boxes, pallets, stretch film, protective packaging.' },
      { id: 'p-pk3', titleId: 'p-pk3-title', descId: 'p-pk3-desc', imgId: 'p-img-pk3-7z8a9b', name: 'Eco-Friendly Packaging', desc: 'Biodegradable packaging, recycled materials, sustainable solutions.' },
    ],
  },
];

export default function Products() {
  const containerRef = useRef(null);
  const [active, setActive] = useState(categories[0].id);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [active]);

  const activeCategory = categories.find((c) => c.id === active);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-brand-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-4">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products We Source from China
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We source across a wide range of product categories. If you don't see your product
              listed, contact us — we likely have experience with it.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs + Products */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Nav */}
          <div className="flex flex-wrap gap-2 mb-12" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={active === cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  active === cat.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-brand-light text-brand-navy hover:bg-brand-blue/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activeCategory?.products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-48 bg-brand-light overflow-hidden">
                  <img
                    alt={product.name}
                    data-strk-img-id={product.imgId}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={product.titleId} className="font-bold text-brand-navy text-lg mb-2">{product.name}</h3>
                  <p id={product.descId} className="text-brand-gray text-sm leading-relaxed">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-brand-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4">
            Don't See Your Product?
          </h2>
          <p className="text-brand-gray text-lg mb-8">
            We source a wide variety of products beyond the categories listed here.
            Contact us with your requirements and we'll let you know if we can help.
          </p>
          <CTAButton to="/contact" variant="primary" className="text-base px-8 py-4">
            Ask About Your Product
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
