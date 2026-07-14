import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    label: 'Electronics',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
    imgId: 'cat-electronics-img-a1b2c3',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, LED lighting, cables, chargers, smart home devices, and electronic components.',
    examples: ['LED lighting', 'Smart home devices', 'Cables & chargers', 'PCBs & components', 'Surveillance cameras'],
  },
  {
    id: 'furniture',
    label: 'Furniture',
    titleId: 'cat-furniture-title',
    descId: 'cat-furniture-desc',
    imgId: 'cat-furniture-img-d4e5f6',
    title: 'Furniture & Home Décor',
    desc: 'Office furniture, home furniture, outdoor furniture, decorative items, and storage solutions.',
    examples: ['Office chairs & desks', 'Sofas & beds', 'Outdoor furniture', 'Storage & shelving', 'Decorative accessories'],
  },
  {
    id: 'apparel',
    label: 'Apparel',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
    imgId: 'cat-apparel-img-g7h8i9',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, workwear, uniforms, fabrics, and textile accessories for retail and wholesale buyers.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Workwear & uniforms', 'Fabrics & textiles', 'Bags & accessories'],
  },
  {
    id: 'hardware',
    label: 'Hardware',
    titleId: 'cat-hardware-title',
    descId: 'cat-hardware-desc',
    imgId: 'cat-hardware-img-j1k2l3',
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, construction hardware, and industrial components.',
    examples: ['Hand tools', 'Power tools', 'Fasteners & fixings', 'Construction hardware', 'Safety equipment'],
  },
  {
    id: 'packaging',
    label: 'Packaging',
    titleId: 'cat-packaging-title',
    descId: 'cat-packaging-desc',
    imgId: 'cat-packaging-img-m4n5o6',
    title: 'Packaging & Printing',
    desc: 'Custom packaging boxes, bags, labels, promotional materials, and branded packaging solutions.',
    examples: ['Custom boxes', 'Poly bags & mailers', 'Labels & stickers', 'Promotional materials', 'Eco-friendly packaging'],
  },
  {
    id: 'toys',
    label: 'Toys & Sports',
    titleId: 'cat-toys-title',
    descId: 'cat-toys-desc',
    imgId: 'cat-toys-img-p7q8r9',
    title: 'Toys, Sports & Outdoor',
    desc: 'Children\'s toys, educational products, sports equipment, fitness gear, and outdoor recreation items.',
    examples: ['Children\'s toys', 'Educational products', 'Sports equipment', 'Fitness accessories', 'Outdoor gear'],
  },
  {
    id: 'homegoods',
    label: 'Home Goods',
    titleId: 'cat-homegoods-title',
    descId: 'cat-homegoods-desc',
    imgId: 'cat-homegoods-img-s1t2u3',
    title: 'Home Goods & Kitchenware',
    desc: 'Kitchen appliances, cookware, cleaning products, bathroom accessories, and household essentials.',
    examples: ['Cookware & bakeware', 'Kitchen appliances', 'Cleaning products', 'Bathroom accessories', 'Storage solutions'],
  },
  {
    id: 'beauty',
    label: 'Beauty & Health',
    titleId: 'cat-beauty-title',
    descId: 'cat-beauty-desc',
    imgId: 'cat-beauty-img-v4w5x6',
    title: 'Beauty, Health & Personal Care',
    desc: 'Cosmetics, skincare, personal care devices, health supplements, and wellness products.',
    examples: ['Skincare products', 'Hair care tools', 'Personal care devices', 'Health supplements', 'Wellness accessories'],
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
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-3">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Products We Source</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            We source a wide range of products across major manufacturing categories. If it's made in China, we can help you find the right supplier.
          </p>
        </div>
      </section>

      {/* Category Tabs + Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat.id
                    ? 'bg-navy text-white'
                    : 'bg-gray-100 text-text-dark hover:bg-navy-light hover:text-navy'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Active category detail */}
          {activeCategory && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id={activeCategory.titleId} className="text-2xl md:text-3xl font-bold text-navy mb-3">
                  {activeCategory.title}
                </h2>
                <p id={activeCategory.descId} className="text-text-muted leading-relaxed mb-6">
                  {activeCategory.desc}
                </p>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-navy mb-3">Common Products We Source:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeCategory.examples.map((ex) => (
                      <li key={ex} className="flex items-center gap-2 text-sm text-text-dark">
                        <span className="w-1.5 h-1.5 bg-brand-red rounded-full shrink-0" />
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                >
                  Source This Product <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md bg-gray-100 h-72 lg:h-80">
                <img
                  alt={activeCategory.title}
                  data-strk-img-id={activeCategory.imgId}
                  data-strk-img={`[${activeCategory.descId}] [${activeCategory.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Categories Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-navy text-center mb-10">All Product Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setActive(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 text-left hover:shadow-md hover:border-navy/20 transition-all"
              >
                <p className="font-semibold text-navy text-sm mb-1">{cat.label}</p>
                <p className="text-xs text-text-muted line-clamp-2">{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Don't See Your Product Category?</h2>
          <p className="text-blue-200 mb-8">
            We source a wide variety of products. Contact us and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
