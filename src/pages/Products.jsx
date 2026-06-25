import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTASection from '../components/home/CTASection';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'Consumer electronics, LED lighting, PCBs, cables, batteries, smart home devices, and electronic components.',
    examples: ['LED lighting', 'Smart home devices', 'PCBs & components', 'Cables & connectors', 'Batteries & chargers'],
    imgId: 'prod-page-elec-a1b2',
    titleId: 'prod-page-title-elec',
    descId: 'prod-page-desc-elec',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    description: 'Office furniture, home décor, storage solutions, kitchen accessories, and outdoor furniture.',
    examples: ['Office chairs & desks', 'Bamboo furniture', 'Storage solutions', 'Kitchen accessories', 'Outdoor furniture'],
    imgId: 'prod-page-furn-c3d4',
    titleId: 'prod-page-title-furn',
    descId: 'prod-page-desc-furn',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    description: 'Clothing, sportswear, workwear, fabrics, accessories, and private-label fashion items.',
    examples: ['Sportswear & activewear', 'Workwear & uniforms', 'Fashion accessories', 'Fabrics & textiles', 'Private label clothing'],
    imgId: 'prod-page-appr-e5f6',
    titleId: 'prod-page-title-appr',
    descId: 'prod-page-desc-appr',
  },
  {
    id: 'machinery',
    title: 'Machinery & Equipment',
    description: 'Industrial machinery, manufacturing equipment, agricultural tools, and spare parts.',
    examples: ['CNC machines', 'Agricultural equipment', 'Industrial tools', 'Spare parts', 'Hydraulic equipment'],
    imgId: 'prod-page-mach-g7h8',
    titleId: 'prod-page-title-mach',
    descId: 'prod-page-desc-mach',
  },
  {
    id: 'plastics',
    title: 'Plastics & Packaging',
    description: 'Injection molded parts, packaging materials, containers, bags, and custom plastic components.',
    examples: ['Injection molded parts', 'Packaging materials', 'Plastic containers', 'Custom components', 'Biodegradable packaging'],
    imgId: 'prod-page-plas-i9j0',
    titleId: 'prod-page-title-plas',
    descId: 'prod-page-desc-plas',
  },
  {
    id: 'hardware',
    title: 'Hardware & Tools',
    description: 'Fasteners, hand tools, power tools, construction hardware, and industrial supplies.',
    examples: ['Fasteners & fixings', 'Hand tools', 'Power tools', 'Construction hardware', 'Safety equipment'],
    imgId: 'prod-page-hard-k1l2',
    titleId: 'prod-page-title-hard',
    descId: 'prod-page-desc-hard',
  },
  {
    id: 'health-beauty',
    title: 'Health, Beauty & Personal Care',
    description: 'Cosmetics, skincare, personal care devices, supplements, and wellness products.',
    examples: ['Skincare products', 'Beauty devices', 'Personal care items', 'Wellness accessories', 'OEM cosmetics'],
    imgId: 'prod-page-hlth-m3n4',
    titleId: 'prod-page-title-hlth',
    descId: 'prod-page-desc-hlth',
  },
  {
    id: 'toys-sports',
    title: 'Toys, Sports & Outdoor',
    description: 'Toys, games, sporting goods, outdoor equipment, and fitness accessories.',
    examples: ['Toys & games', 'Sporting goods', 'Outdoor equipment', 'Fitness accessories', 'Camping gear'],
    imgId: 'prod-page-toys-o5p6',
    titleId: 'prod-page-title-toys',
    descId: 'prod-page-desc-toys',
  },
  {
    id: 'auto',
    title: 'Automotive Parts & Accessories',
    description: 'Auto parts, accessories, tools, and aftermarket components for passenger and commercial vehicles.',
    examples: ['Auto parts', 'Car accessories', 'Aftermarket components', 'Truck parts', 'EV components'],
    imgId: 'prod-page-auto-q7r8',
    titleId: 'prod-page-title-auto',
    descId: 'prod-page-desc-auto',
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
      {/* Page Header */}
      <div className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We source across 50+ product categories from China's major manufacturing regions. If you don't see your product, contact us — we likely have relevant supplier connections.
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d2340]/70 to-transparent" />
                  <h3 id={cat.titleId} className="absolute bottom-3 left-4 right-4 text-white font-bold text-sm">{cat.title}</h3>
                </div>
                <div className="p-5">
                  <p id={cat.descId} className="text-gray-500 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-[#f4f6f9] text-gray-600 text-xs px-2.5 py-1 rounded-full">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#f4f6f9] rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-[#0d2340] mb-3">Don't See Your Product?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We source across many more categories. Contact us with your product details and we'll assess whether we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#e8621a] hover:bg-[#c9521a] text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Submit a Sourcing Inquiry <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
