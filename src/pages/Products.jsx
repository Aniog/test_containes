import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    products: [
      { name: 'Consumer Electronics', desc: 'Smartphones, tablets, earbuds, smart home devices, and accessories.' },
      { name: 'Industrial Electronics', desc: 'PCBs, sensors, control panels, and industrial automation components.' },
      { name: 'LED Lighting', desc: 'LED bulbs, strips, panels, and commercial lighting solutions.' },
      { name: 'Power Products', desc: 'Batteries, chargers, power banks, and UPS systems.' },
    ],
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    label: 'Furniture & Home',
    products: [
      { name: 'Office Furniture', desc: 'Desks, chairs, shelving, and storage solutions.' },
      { name: 'Home Furniture', desc: 'Sofas, beds, dining sets, and bedroom furniture.' },
      { name: 'Outdoor Furniture', desc: 'Garden sets, patio chairs, and outdoor storage.' },
      { name: 'Home Décor', desc: 'Decorative items, wall art, candles, and soft furnishings.' },
    ],
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-d4e5f6',
  },
  {
    id: 'apparel',
    label: 'Apparel & Textiles',
    products: [
      { name: 'Clothing & Garments', desc: 'T-shirts, jackets, sportswear, and fashion apparel.' },
      { name: 'Workwear & Uniforms', desc: 'Safety workwear, corporate uniforms, and PPE.' },
      { name: 'Bags & Accessories', desc: 'Handbags, backpacks, wallets, and travel accessories.' },
      { name: 'Home Textiles', desc: 'Bedding, towels, curtains, and upholstery fabrics.' },
    ],
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-apparel-img-g7h8i9',
  },
  {
    id: 'hardware',
    label: 'Hardware & Tools',
    products: [
      { name: 'Hand Tools', desc: 'Wrenches, screwdrivers, pliers, and tool sets.' },
      { name: 'Power Tools', desc: 'Drills, grinders, saws, and cordless tool systems.' },
      { name: 'Fasteners & Fittings', desc: 'Bolts, screws, nuts, and industrial fittings.' },
      { name: 'Construction Materials', desc: 'Pipes, valves, brackets, and structural components.' },
    ],
    titleId: 'cat-hardware-title',
    descId: 'cat-hardware-desc',
    imgId: 'cat-hardware-img-j1k2l3',
  },
  {
    id: 'toys',
    label: 'Toys & Baby Products',
    products: [
      { name: 'Toys & Games', desc: 'Educational toys, board games, outdoor play equipment.' },
      { name: 'Baby Products', desc: 'Strollers, car seats, feeding products, and nursery items.' },
      { name: 'Sports & Fitness', desc: 'Exercise equipment, sports gear, and outdoor recreation.' },
      { name: 'Pet Products', desc: 'Pet accessories, toys, feeding products, and grooming tools.' },
    ],
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-m4n5o6',
  },
  {
    id: 'packaging',
    label: 'Packaging & Printing',
    products: [
      { name: 'Custom Packaging', desc: 'Boxes, bags, labels, and branded packaging solutions.' },
      { name: 'Industrial Packaging', desc: 'Pallets, crates, stretch film, and bulk containers.' },
      { name: 'Promotional Items', desc: 'Branded merchandise, corporate gifts, and marketing materials.' },
      { name: 'Paper & Stationery', desc: 'Notebooks, office supplies, and printed materials.' },
    ],
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-p7q8r9',
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
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Product Categories</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              Products We Source from China
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              We source a wide range of products across major manufacturing categories. If it's made in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs + Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Bar */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                  active === cat.id
                    ? 'bg-navy-800 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active Category */}
          {activeCategory && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <h2 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {activeCategory.label}
                </h2>
                <p id={activeCategory.descId} className="text-gray-500 mb-8">
                  We source {activeCategory.label.toLowerCase()} products from verified Chinese manufacturers with competitive pricing and reliable quality.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeCategory.products.map(({ name, desc }) => (
                    <div key={name} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-1 text-sm">{name}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Source {activeCategory.label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-gray-100 h-80 lg:h-96">
                <img
                  data-strk-img-id={activeCategory.imgId}
                  data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={activeCategory.label}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Don't See Your Product?</h2>
          <p className="text-gray-500 mb-6">
            We source a much wider range of products than listed here. If it's manufactured in China, we can likely help. Contact us with your requirements.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Ask About Your Product
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
