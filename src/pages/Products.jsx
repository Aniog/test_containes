import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, batteries, and electronic accessories.',
    examples: ['LED lighting systems', 'Smart home devices', 'PCB assemblies', 'Power banks & chargers', 'Surveillance cameras'],
    imgId: 'prod-page-electronics-1a2b3c',
    titleId: 'prod-page-electronics-title',
    descId: 'prod-page-electronics-desc',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, bathroom accessories, and garden furniture.',
    examples: ['Office chairs & desks', 'Bedroom furniture', 'Kitchen storage', 'Decorative items', 'Outdoor furniture'],
    imgId: 'prod-page-furniture-4d5e6f',
    titleId: 'prod-page-furniture-title',
    descId: 'prod-page-furniture-desc',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    desc: 'Clothing, sportswear, uniforms, workwear, fabrics, accessories, and fashion items for all markets.',
    examples: ['Sportswear & activewear', 'Corporate uniforms', 'Fashion accessories', 'Fabrics & materials', 'Bags & luggage'],
    imgId: 'prod-page-apparel-7g8h9i',
    titleId: 'prod-page-apparel-title',
    descId: 'prod-page-apparel-desc',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Tools',
    desc: 'Manufacturing equipment, power tools, hand tools, spare parts, and industrial automation systems.',
    examples: ['CNC machines', 'Power tools', 'Hydraulic equipment', 'Conveyor systems', 'Welding equipment'],
    imgId: 'prod-page-machinery-1j2k3l',
    titleId: 'prod-page-machinery-title',
    descId: 'prod-page-machinery-desc',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    desc: 'Custom boxes, labels, bags, promotional materials, retail packaging, and branded merchandise.',
    examples: ['Custom printed boxes', 'Retail packaging', 'Promotional bags', 'Labels & stickers', 'Gift packaging'],
    imgId: 'prod-page-packaging-4m5n6o',
    titleId: 'prod-page-packaging-title',
    descId: 'prod-page-packaging-desc',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby gear, and safety-certified children\'s products.',
    examples: ['Educational toys', 'Outdoor play sets', 'Baby furniture', 'Plush toys', 'STEM learning kits'],
    imgId: 'prod-page-toys-7p8q9r',
    titleId: 'prod-page-toys-title',
    descId: 'prod-page-toys-desc',
  },
  {
    id: 'health',
    title: 'Health & Beauty Products',
    desc: 'Personal care products, cosmetics, medical devices, fitness equipment, and wellness accessories.',
    examples: ['Skincare products', 'Fitness equipment', 'Medical devices', 'Supplements packaging', 'Beauty tools'],
    imgId: 'prod-page-health-2s3t4u',
    titleId: 'prod-page-health-title',
    descId: 'prod-page-health-desc',
  },
  {
    id: 'auto',
    title: 'Automotive Parts & Accessories',
    desc: 'Car accessories, replacement parts, tools, and aftermarket automotive products.',
    examples: ['Car accessories', 'Replacement parts', 'Automotive tools', 'EV components', 'Motorcycle parts'],
    imgId: 'prod-page-auto-5v6w7x',
    titleId: 'prod-page-auto-title',
    descId: 'prod-page-auto-desc',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor Equipment',
    desc: 'Sporting goods, camping equipment, fitness gear, and outdoor recreation products.',
    examples: ['Camping gear', 'Fitness equipment', 'Team sports gear', 'Water sports', 'Cycling accessories'],
    imgId: 'prod-page-sports-8y9z0a',
    titleId: 'prod-page-sports-title',
    descId: 'prod-page-sports-desc',
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
      <section className="bg-brand-dark py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
            Product Categories
          </span>
          <h1 id="products-page-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            Products We Source from China
          </h1>
          <p id="products-page-subtitle" className="text-gray-300 text-lg max-w-2xl mx-auto">
            We have established supplier networks across China's major manufacturing regions, covering a wide range of product categories.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl overflow-hidden border border-brand-border hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-subtitle] [products-page-title]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={cat.titleId} className="font-bold text-brand-dark text-lg mb-2">{cat.title}</h2>
                  <p id={cat.descId} className="text-brand-mid text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-blue-50 text-brand-blue text-xs px-2.5 py-1 rounded-full font-medium">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Don't See Your Product Category?
          </h2>
          <p className="text-brand-mid mb-8 max-w-xl mx-auto">
            We source a wide variety of products beyond the categories listed above. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Ask About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
