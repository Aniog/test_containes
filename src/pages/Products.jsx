import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CtaBanner from '../components/shared/CtaBanner';

const categories = [
  {
    id: 'electronics',
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, LED lighting, smart home devices, batteries, and electronic accessories.',
    examples: ['LED lighting fixtures', 'USB cables and chargers', 'Smart home devices', 'PCB assemblies', 'Surveillance cameras', 'Power banks'],
    regions: 'Guangdong, Jiangsu, Zhejiang',
  },
  {
    id: 'furniture',
    title: 'Furniture & Home Goods',
    description: 'Office furniture, home décor, storage solutions, kitchenware, bathroom accessories, and soft furnishings.',
    examples: ['Office chairs and desks', 'Wooden furniture', 'Storage shelving', 'Kitchen utensils', 'Decorative items', 'Bedding and textiles'],
    regions: 'Guangdong, Zhejiang, Shandong',
  },
  {
    id: 'apparel',
    title: 'Apparel & Textiles',
    description: 'Clothing, sportswear, uniforms, workwear, fabrics, and fashion accessories for retail and wholesale buyers.',
    examples: ['T-shirts and hoodies', 'Sportswear and activewear', 'Corporate uniforms', 'Bags and backpacks', 'Hats and caps', 'Socks and underwear'],
    regions: 'Guangdong, Zhejiang, Fujian',
  },
  {
    id: 'machinery',
    title: 'Industrial Machinery & Tools',
    description: 'Manufacturing equipment, power tools, hand tools, spare parts, and industrial automation components.',
    examples: ['Power tools', 'CNC machine parts', 'Hydraulic equipment', 'Conveyor systems', 'Welding equipment', 'Safety equipment'],
    regions: 'Jiangsu, Zhejiang, Shandong',
  },
  {
    id: 'packaging',
    title: 'Packaging & Printing',
    description: 'Custom packaging boxes, labels, bags, promotional materials, and branded packaging solutions.',
    examples: ['Custom printed boxes', 'Paper bags', 'Plastic packaging', 'Labels and stickers', 'Gift boxes', 'Promotional materials'],
    regions: 'Guangdong, Zhejiang, Jiangsu',
  },
  {
    id: 'toys',
    title: 'Toys & Baby Products',
    description: 'Plastic toys, educational products, baby gear, outdoor play equipment, and children\'s accessories.',
    examples: ['Plastic toys', 'Educational games', 'Baby strollers', 'Outdoor play sets', 'Stuffed animals', 'Building blocks'],
    regions: 'Guangdong, Zhejiang',
  },
  {
    id: 'health',
    title: 'Health & Beauty',
    description: 'Personal care products, cosmetics, health supplements, medical devices, and wellness accessories.',
    examples: ['Skincare products', 'Hair care accessories', 'Fitness equipment', 'Medical gloves', 'Massage devices', 'Vitamins and supplements'],
    regions: 'Guangdong, Zhejiang, Jiangsu',
  },
  {
    id: 'automotive',
    title: 'Automotive Parts & Accessories',
    description: 'Car accessories, replacement parts, motorcycle components, and automotive tools.',
    examples: ['Car seat covers', 'LED car lights', 'Motorcycle parts', 'Car cleaning tools', 'GPS devices', 'Tire accessories'],
    regions: 'Guangdong, Zhejiang, Jiangsu',
  },
  {
    id: 'sports',
    title: 'Sports & Outdoor',
    description: 'Sports equipment, outdoor gear, camping products, fitness accessories, and recreational items.',
    examples: ['Camping tents', 'Fitness equipment', 'Cycling accessories', 'Water sports gear', 'Yoga mats', 'Hiking equipment'],
    regions: 'Guangdong, Zhejiang, Fujian',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-3">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            We have experience sourcing across a wide range of product categories from China's major manufacturing regions.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    data-strk-img-id={`product-page-${cat.id}-img`}
                    data-strk-img={`[product-page-${cat.id}-desc] [product-page-${cat.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={`product-page-${cat.id}-title`} className="text-lg font-bold text-primary-dark mb-2">{cat.title}</h2>
                  <p id={`product-page-${cat.id}-desc`} className="text-gray-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Examples</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.examples.map((ex) => (
                        <span key={ex} className="bg-light-bg text-gray-700 text-xs px-2.5 py-1 rounded-full">{ex}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500">
                    <span className="font-medium">Key regions:</span>
                    <span>{cat.regions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-light-bg rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold text-primary-dark mb-3">Don't See Your Product Category?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We source a wide variety of products beyond the categories listed above. Contact us with your specific requirements and we'll let you know if we can help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Ask About Your Product
            </a>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Source Your Product from China?"
        subtitle="Tell us what you need and we'll find the right supplier for you."
        buttonText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
