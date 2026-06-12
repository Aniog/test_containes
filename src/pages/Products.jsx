import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics & Components',
    color: 'bg-blue-50 text-brand-blue border-brand-blue/20',
  },
  {
    id: 'furniture',
    label: 'Furniture & Home Decor',
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    id: 'clothing',
    label: 'Clothing & Textiles',
    color: 'bg-pink-50 text-pink-700 border-pink-200',
  },
  {
    id: 'machinery',
    label: 'Machinery & Industrial',
    color: 'bg-gray-50 text-gray-700 border-gray-200',
  },
  {
    id: 'toys',
    label: 'Toys & Baby Products',
    color: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  },
  {
    id: 'health',
    label: 'Health & Beauty',
    color: 'bg-green-50 text-green-700 border-green-200',
  },
  {
    id: 'sports',
    label: 'Sports & Outdoor',
    color: 'bg-orange-50 text-orange-700 border-orange-200',
  },
  {
    id: 'packaging',
    label: 'Packaging & Printing',
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  {
    id: 'auto',
    label: 'Auto Parts',
    color: 'bg-slate-50 text-slate-700 border-slate-200',
  },
];

const products = [
  { id: 'led-lights', category: 'electronics', name: 'LED Lighting Products', desc: 'LED bulbs, strips, panels, and commercial lighting solutions for retail and wholesale buyers.', titleId: 'prod-led-lights-title', descId: 'prod-led-lights-desc', imgId: 'prod-led-lights-img-a1b2' },
  { id: 'pcb', category: 'electronics', name: 'PCB & Electronic Components', desc: 'Printed circuit boards, capacitors, resistors, and custom electronic assemblies.', titleId: 'prod-pcb-title', descId: 'prod-pcb-desc', imgId: 'prod-pcb-img-c3d4' },
  { id: 'smart-home', category: 'electronics', name: 'Smart Home Devices', desc: 'WiFi plugs, smart switches, security cameras, and IoT devices for consumer markets.', titleId: 'prod-smart-home-title', descId: 'prod-smart-home-desc', imgId: 'prod-smart-home-img-e5f6' },
  { id: 'sofa', category: 'furniture', name: 'Sofas & Upholstered Furniture', desc: 'Fabric and leather sofas, sectionals, and custom upholstered pieces for retail and hospitality.', titleId: 'prod-sofa-title', descId: 'prod-sofa-desc', imgId: 'prod-sofa-img-g7h8' },
  { id: 'office-furniture', category: 'furniture', name: 'Office Furniture', desc: 'Desks, chairs, storage units, and ergonomic office solutions for B2B buyers.', titleId: 'prod-office-furniture-title', descId: 'prod-office-furniture-desc', imgId: 'prod-office-furniture-img-i9j1' },
  { id: 'home-decor', category: 'furniture', name: 'Home Decor & Accessories', desc: 'Decorative items, wall art, candles, vases, and seasonal home accessories.', titleId: 'prod-home-decor-title', descId: 'prod-home-decor-desc', imgId: 'prod-home-decor-img-k2l3' },
  { id: 'activewear', category: 'clothing', name: 'Activewear & Sportswear', desc: 'Leggings, sports bras, gym wear, and performance apparel for fitness brands.', titleId: 'prod-activewear-title', descId: 'prod-activewear-desc', imgId: 'prod-activewear-img-m4n5' },
  { id: 'fashion', category: 'clothing', name: 'Fashion Apparel', desc: 'T-shirts, dresses, outerwear, and seasonal fashion collections for retail brands.', titleId: 'prod-fashion-title', descId: 'prod-fashion-desc', imgId: 'prod-fashion-img-o6p7' },
  { id: 'bags', category: 'clothing', name: 'Bags & Accessories', desc: 'Handbags, backpacks, wallets, and fashion accessories for wholesale and private label.', titleId: 'prod-bags-title', descId: 'prod-bags-desc', imgId: 'prod-bags-img-q8r9' },
  { id: 'cnc', category: 'machinery', name: 'CNC Machines & Tools', desc: 'CNC routers, lathes, milling machines, and precision tooling for manufacturing buyers.', titleId: 'prod-cnc-title', descId: 'prod-cnc-desc', imgId: 'prod-cnc-img-s1t2' },
  { id: 'pumps', category: 'machinery', name: 'Pumps & Valves', desc: 'Industrial pumps, water pumps, valves, and fluid control equipment.', titleId: 'prod-pumps-title', descId: 'prod-pumps-desc', imgId: 'prod-pumps-img-u3v4' },
  { id: 'toys-kids', category: 'toys', name: 'Educational Toys', desc: 'STEM toys, building blocks, puzzles, and learning materials for children.', titleId: 'prod-toys-kids-title', descId: 'prod-toys-kids-desc', imgId: 'prod-toys-kids-img-w5x6' },
  { id: 'baby', category: 'toys', name: 'Baby Products', desc: 'Baby strollers, car seats, feeding accessories, and nursery products.', titleId: 'prod-baby-title', descId: 'prod-baby-desc', imgId: 'prod-baby-img-y7z8' },
  { id: 'skincare', category: 'health', name: 'Skincare & Cosmetics', desc: 'Private label skincare, cosmetics, and personal care products with OEM support.', titleId: 'prod-skincare-title', descId: 'prod-skincare-desc', imgId: 'prod-skincare-img-a9b1' },
  { id: 'fitness', category: 'sports', name: 'Fitness Equipment', desc: 'Dumbbells, resistance bands, yoga mats, and home gym equipment.', titleId: 'prod-fitness-title', descId: 'prod-fitness-desc', imgId: 'prod-fitness-img-c2d3' },
  { id: 'outdoor', category: 'sports', name: 'Outdoor & Camping Gear', desc: 'Tents, sleeping bags, backpacks, and outdoor adventure equipment.', titleId: 'prod-outdoor-title', descId: 'prod-outdoor-desc', imgId: 'prod-outdoor-img-e4f5' },
  { id: 'boxes', category: 'packaging', name: 'Custom Packaging Boxes', desc: 'Corrugated boxes, gift boxes, rigid boxes, and custom printed packaging solutions.', titleId: 'prod-boxes-title', descId: 'prod-boxes-desc', imgId: 'prod-boxes-img-g6h7' },
  { id: 'auto-parts', category: 'auto', name: 'Auto Parts & Accessories', desc: 'Engine parts, body parts, car accessories, and aftermarket automotive components.', titleId: 'prod-auto-parts-title', descId: 'prod-auto-parts-desc', imgId: 'prod-auto-parts-img-i8j9' },
];

export default function Products() {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [activeCategory]);

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div ref={containerRef}>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-white/10 px-3 py-1 rounded-full">Products</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Products We Source from China
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              We source across a wide range of product categories. If you don't see your product listed, contact us — we likely have experience with it.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-brand-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button
              onClick={() => setActiveCategory('all')}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeCategory === 'all'
                  ? 'bg-brand-blue text-white border-brand-blue'
                  : 'bg-white text-brand-muted border-brand-border hover:border-brand-blue hover:text-brand-blue'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-brand-blue text-white border-brand-blue'
                    : 'bg-white text-brand-muted border-brand-border hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-brand-gray py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => {
              const cat = categories.find((c) => c.id === product.category);
              return (
                <div key={product.id} id={product.id} className="bg-white rounded-xl border border-brand-border overflow-hidden hover:shadow-md transition-shadow">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      data-strk-img-id={product.imgId}
                      data-strk-img={`[${product.descId}] [${product.titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    {cat && (
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${cat.color}`}>
                        {cat.label}
                      </span>
                    )}
                    <h3 id={product.titleId} className="font-semibold text-brand-navy mt-3 mb-2">{product.name}</h3>
                    <p id={product.descId} className="text-brand-muted text-sm leading-relaxed mb-4">{product.desc}</p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1 text-brand-blue text-sm font-medium hover:gap-2 transition-all"
                    >
                      Source This Product <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Don't See Your Product?</h2>
          <p className="text-brand-muted mb-8">
            We source a wide range of products beyond what's listed here. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
          >
            Submit a Sourcing Inquiry <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
