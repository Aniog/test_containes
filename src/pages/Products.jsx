import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['Bluetooth speakers', 'LED strip lights', 'Power banks', 'Smart plugs', 'PCB assemblies'],
    hubs: 'Shenzhen, Dongguan',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    description: 'Office furniture, bedroom sets, outdoor furniture, decorative items, and home accessories.',
    examples: ['Office chairs', 'Dining tables', 'Outdoor loungers', 'Wall art', 'Storage solutions'],
    hubs: 'Foshan, Guangzhou',
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-d4e5f6',
  },
  {
    id: 'clothing',
    name: 'Clothing & Textiles',
    description: 'Apparel, activewear, workwear, uniforms, fabrics, and accessories for fashion and retail brands.',
    examples: ['T-shirts', 'Activewear sets', 'Workwear uniforms', 'Bags', 'Hats and caps'],
    hubs: 'Guangzhou, Hangzhou, Yiwu',
    titleId: 'cat-clothing-title',
    descId: 'cat-clothing-desc',
    imgId: 'cat-clothing-img-g7h8i9',
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    description: 'Industrial equipment, tools, hardware, and machinery for manufacturing and construction.',
    examples: ['CNC machines', 'Power tools', 'Hydraulic equipment', 'Conveyor systems', 'Welding tools'],
    hubs: 'Shanghai, Wenzhou, Ningbo',
    titleId: 'cat-machinery-title',
    descId: 'cat-machinery-desc',
    imgId: 'cat-machinery-img-j1k2l3',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    description: 'Educational toys, outdoor play equipment, baby gear, and children\'s accessories.',
    examples: ['Building blocks', 'Ride-on toys', 'Baby monitors', 'Strollers', 'Educational kits'],
    hubs: 'Shantou, Dongguan',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-m4n5o6',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    description: 'Personal care products, cosmetics, medical devices, supplements, and wellness products.',
    examples: ['Skincare products', 'Massage devices', 'Fitness equipment', 'Vitamins', 'Medical gloves'],
    hubs: 'Guangzhou, Shanghai',
    titleId: 'cat-health-title',
    descId: 'cat-health-desc',
    imgId: 'cat-health-img-p7q8r9',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    description: 'Sporting goods, camping equipment, fitness accessories, and outdoor gear.',
    examples: ['Yoga mats', 'Camping tents', 'Resistance bands', 'Bicycles', 'Water bottles'],
    hubs: 'Xiamen, Ningbo',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
    imgId: 'cat-sports-img-s1t2u3',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    description: 'Custom packaging, boxes, bags, labels, and printed materials for retail and e-commerce.',
    examples: ['Custom boxes', 'Poly mailers', 'Hang tags', 'Tissue paper', 'Sticker labels'],
    hubs: 'Shenzhen, Guangzhou',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-v4w5x6',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    description: 'Automotive components, car accessories, and replacement parts for global distributors.',
    examples: ['Car seat covers', 'LED headlights', 'Brake pads', 'Filters', 'Dashboard accessories'],
    hubs: 'Guangzhou, Wenzhou',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
    imgId: 'cat-auto-img-y7z8a9',
  },
  {
    id: 'homedecor',
    name: 'Home Decor & Gifts',
    description: 'Decorative items, seasonal products, promotional gifts, and branded merchandise.',
    examples: ['Candles', 'Photo frames', 'Ceramic vases', 'Promotional items', 'Holiday decorations'],
    hubs: 'Yiwu, Foshan',
    titleId: 'cat-homedecor-title',
    descId: 'cat-homedecor-desc',
    imgId: 'cat-homedecor-img-b1c2d3',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-brand-blue pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-3 block">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source from China</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We have established supplier networks across China's major manufacturing hubs, covering a wide range of product categories.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-52 overflow-hidden bg-slate-200">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="text-xl font-bold text-slate-900 mb-2">{cat.name}</h2>
                  <p id={cat.descId} className="text-slate-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Common Products</p>
                    <div className="flex flex-wrap gap-2">
                      {cat.examples.map((ex) => (
                        <span key={ex} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-full">{ex}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">
                      <span className="font-medium text-slate-700">Manufacturing Hub:</span> {cat.hubs}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-brand-blue text-sm font-semibold hover:gap-2 transition-all"
                    >
                      Source This <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your product */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Don't See Your Product Category?</h2>
          <p className="text-slate-600 mb-6">
            We source a wide range of products beyond the categories listed above. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Ask About Your Product
          </Link>
        </div>
      </section>
    </div>
  );
}
