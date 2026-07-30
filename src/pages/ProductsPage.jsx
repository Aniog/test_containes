import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import SectionLabel from '@/components/SectionLabel';

const categories = [
  {
    id: 'electronics',
    name: 'Electronics & Components',
    icon: '⚡',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED Lighting', 'Smart Home Devices', 'Cables & Chargers', 'PCB Assemblies', 'Surveillance Cameras'],
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
    imgId: 'prod-electronics-img-a1b2c3',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Decor',
    icon: '🪑',
    desc: 'Office furniture, bedroom sets, living room pieces, decorative items, and custom-made furniture for retail and hospitality.',
    examples: ['Office Chairs', 'Bedroom Sets', 'Decorative Items', 'Outdoor Furniture', 'Custom Cabinetry'],
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
    imgId: 'prod-furniture-img-d4e5f6',
  },
  {
    id: 'clothing',
    name: 'Clothing & Textiles',
    icon: '👕',
    desc: 'Apparel, sportswear, workwear, fabrics, and accessories for fashion brands, retailers, and corporate buyers.',
    examples: ['T-Shirts & Hoodies', 'Sportswear', 'Workwear & Uniforms', 'Fabrics & Yarn', 'Bags & Accessories'],
    titleId: 'prod-clothing-title',
    descId: 'prod-clothing-desc',
    imgId: 'prod-clothing-img-g7h8i9',
  },
  {
    id: 'machinery',
    name: 'Machinery & Industrial',
    icon: '⚙️',
    desc: 'Industrial equipment, power tools, agricultural machinery, and manufacturing components for B2B buyers.',
    examples: ['Power Tools', 'Agricultural Equipment', 'Industrial Pumps', 'CNC Machines', 'Safety Equipment'],
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
    imgId: 'prod-machinery-img-j1k2l3',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    icon: '🧸',
    desc: 'Educational toys, outdoor play equipment, baby care products, and children\'s accessories with safety certifications.',
    examples: ['Educational Toys', 'Plush Toys', 'Baby Gear', 'Outdoor Play Sets', 'Board Games'],
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
    imgId: 'prod-toys-img-m4n5o6',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    icon: '💊',
    desc: 'Personal care products, cosmetics, wellness devices, medical supplies, and health accessories.',
    examples: ['Skincare Products', 'Massage Devices', 'Medical Supplies', 'Fitness Equipment', 'Supplements Packaging'],
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
    imgId: 'prod-health-img-p7q8r9',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    icon: '🏋️',
    desc: 'Fitness equipment, outdoor gear, camping products, cycling accessories, and sports apparel.',
    examples: ['Gym Equipment', 'Camping Gear', 'Cycling Accessories', 'Water Sports', 'Team Sports Equipment'],
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
    imgId: 'prod-sports-img-s1t2u3',
  },
  {
    id: 'packaging',
    name: 'Packaging & Printing',
    icon: '📦',
    desc: 'Custom packaging, corrugated boxes, paper bags, labels, and printed materials for brands and retailers.',
    examples: ['Custom Boxes', 'Paper Bags', 'Labels & Stickers', 'Retail Packaging', 'Eco-Friendly Packaging'],
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
    imgId: 'prod-packaging-img-v4w5x6',
  },
  {
    id: 'auto',
    name: 'Auto Parts & Accessories',
    icon: '🔧',
    desc: 'Aftermarket auto parts, car accessories, motorcycle components, and vehicle maintenance products.',
    examples: ['Car Accessories', 'Aftermarket Parts', 'Motorcycle Components', 'Lighting Systems', 'Tires & Wheels'],
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
    imgId: 'prod-auto-img-y7z8a9',
  },
  {
    id: 'homedecor',
    name: 'Home & Kitchen',
    icon: '🏠',
    desc: 'Kitchenware, cookware, home appliances, storage solutions, and household products for retail and e-commerce.',
    examples: ['Cookware Sets', 'Kitchen Gadgets', 'Storage Solutions', 'Home Appliances', 'Bathroom Accessories'],
    titleId: 'prod-homedecor-title',
    descId: 'prod-homedecor-desc',
    imgId: 'prod-homedecor-img-b1c2d3',
  },
];

export default function ProductsPage() {
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
      <section className="bg-navy-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel className="text-red-400">Product Categories</SectionLabel>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Products We Source from China
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We have hands-on experience sourcing across 10+ major product categories from China's key manufacturing regions including Guangdong, Zhejiang, Jiangsu, and Shandong.
            </p>
            <CTAButton to="/contact" className="text-base px-8 py-4">
              Request a Sourcing Quote
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Category Explorer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel>Browse by Category</SectionLabel>
            <h2 className="text-3xl font-bold text-navy-900 mb-4">Select a Product Category</h2>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  active === cat.id
                    ? 'bg-navy-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Active category detail */}
          {activeCategory && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-4xl mb-4 block">{activeCategory.icon}</span>
                <h3 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">
                  {activeCategory.name}
                </h3>
                <p id={activeCategory.descId} className="text-slate-600 leading-relaxed mb-6">
                  {activeCategory.desc}
                </p>
                <div className="mb-8">
                  <p className="text-navy-900 font-semibold text-sm mb-3">Common Products We Source:</p>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.examples.map((ex) => (
                      <span key={ex} className="bg-red-50 text-red-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
                <CTAButton to="/contact" showArrow>
                  Source {activeCategory.name}
                </CTAButton>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-100 aspect-video">
                <img
                  alt={activeCategory.name}
                  data-strk-img-id={activeCategory.imgId}
                  data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All categories grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">All Product Categories</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Don't see your product? We source a wide range of goods. Contact us and we'll let you know if we can help.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActive(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-white border border-slate-200 rounded-xl p-6 text-left hover:border-red-300 hover:shadow-sm transition-all group"
              >
                <span className="text-3xl mb-3 block">{cat.icon}</span>
                <h3 className="text-navy-900 font-bold text-base mb-2 group-hover:text-red-600 transition-colors">{cat.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Specific Product in Mind?</h2>
          <p className="text-red-100 text-lg mb-8">
            Tell us what you need and we'll find the right manufacturer for you.
          </p>
          <CTAButton to="/contact" variant="outline" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
}
