import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Package, Home as HomeIcon, Shirt, Wrench, Dumbbell, Utensils,
  Baby, Cpu, Car, Flower2, Building2, Zap, ArrowRight
} from 'lucide-react';

const categories = [
  {
    icon: Package,
    name: 'Consumer Electronics',
    desc: 'Smartphones, tablets, accessories, smart home devices, audio equipment, and wearable technology.',
    examples: ['Bluetooth speakers', 'Phone cases', 'Smart watches', 'USB chargers', 'LED displays'],
    imgId: 'cat-electronics-w9x0y1',
    titleId: 'cat-electronics-title',
    descId: 'cat-electronics-desc',
  },
  {
    icon: HomeIcon,
    name: 'Home & Garden',
    desc: 'Furniture, home decor, kitchenware, lighting, storage solutions, and outdoor living products.',
    examples: ['Ceramic vases', 'Kitchen utensils', 'LED lamps', 'Garden tools', 'Storage organizers'],
    imgId: 'cat-home-z2a3b4',
    titleId: 'cat-home-title',
    descId: 'cat-home-desc',
  },
  {
    icon: Shirt,
    name: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, bags, fashion accessories, and custom textile products for brands and retailers.',
    examples: ['T-shirts', 'Backpacks', 'Cotton fabrics', 'Hats & caps', 'Sportswear'],
    imgId: 'cat-apparel-c5d6e7',
    titleId: 'cat-apparel-title',
    descId: 'cat-apparel-desc',
  },
  {
    icon: Wrench,
    name: 'Industrial & Hardware',
    desc: 'Tools, fasteners, machinery parts, industrial equipment, and custom metal fabrication.',
    examples: ['Bolts & nuts', 'Hand tools', 'CNC parts', 'Pipe fittings', 'Bearings'],
    imgId: 'cat-industrial-f8g9h0',
    titleId: 'cat-industrial-title',
    descId: 'cat-industrial-desc',
  },
  {
    icon: Dumbbell,
    name: 'Sports & Outdoors',
    desc: 'Fitness equipment, camping gear, sporting goods, and outdoor recreation products.',
    examples: ['Resistance bands', 'Camping tents', 'Yoga mats', 'Water bottles', 'Bicycle accessories'],
    imgId: 'cat-sports-i1j2k3',
    titleId: 'cat-sports-title',
    descId: 'cat-sports-desc',
  },
  {
    icon: Utensils,
    name: 'Food & Beverage',
    desc: 'Packaged foods, ingredients, kitchen supplies, and food packaging solutions.',
    examples: ['Tea & coffee', 'Snack packaging', 'Kitchen containers', 'Food additives', 'Bottling'],
    imgId: 'cat-food-l4m5n6',
    titleId: 'cat-food-title',
    descId: 'cat-food-desc',
  },
  {
    icon: Baby,
    name: 'Baby & Kids',
    desc: 'Toys, children\'s clothing, nursery items, educational products, and baby accessories.',
    examples: ['Plush toys', 'Baby bottles', 'Kids clothing', 'Educational games', 'Diaper bags'],
    imgId: 'cat-baby-o7p8q9',
    titleId: 'cat-baby-title',
    descId: 'cat-baby-desc',
  },
  {
    icon: Cpu,
    name: 'Electrical & Components',
    desc: 'PCBs, connectors, motors, sensors, and electronic components for manufacturing.',
    examples: ['PCB assemblies', 'Connectors', 'DC motors', 'Temperature sensors', 'LED modules'],
    imgId: 'cat-electrical-r0s1t2',
    titleId: 'cat-electrical-title',
    descId: 'cat-electrical-desc',
  },
  {
    icon: Car,
    name: 'Auto Parts',
    desc: 'Aftermarket parts, accessories, EV components, and custom automotive manufacturing.',
    examples: ['Floor mats', 'Car chargers', 'LED headlights', 'EV batteries', 'Roof racks'],
    imgId: 'cat-auto-u3v4w5',
    titleId: 'cat-auto-title',
    descId: 'cat-auto-desc',
  },
  {
    icon: Flower2,
    name: 'Beauty & Personal Care',
    desc: 'Cosmetics, skincare, hair care, wellness products, and beauty packaging.',
    examples: ['Serum bottles', 'Makeup brushes', 'Hair tools', 'Face masks', 'Cosmetic bags'],
    imgId: 'cat-beauty-x6y7z8',
    titleId: 'cat-beauty-title',
    descId: 'cat-beauty-desc',
  },
  {
    icon: Building2,
    name: 'Building Materials',
    desc: 'Tiles, fixtures, plumbing supplies, construction materials, and architectural hardware.',
    examples: ['Ceramic tiles', 'Door handles', 'PVC pipes', 'Bathroom fixtures', 'Cabinet hardware'],
    imgId: 'cat-building-a9b0c1',
    titleId: 'cat-building-title',
    descId: 'cat-building-desc',
  },
  {
    icon: Zap,
    name: 'Energy & Solar',
    desc: 'Solar panels, batteries, LED lighting, power systems, and renewable energy components.',
    examples: ['Solar panels', 'Li-ion batteries', 'LED street lights', 'Power inverters', 'Solar chargers'],
    imgId: 'cat-energy-d2e3f4',
    titleId: 'cat-energy-title',
    descId: 'cat-energy-desc',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">Product Categories</p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We source a wide range of product categories across China's major manufacturing hubs, from Shenzhen electronics to Yiwu commodities.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <cat.icon className="w-6 h-6 text-primary" />
                    <h3 id={cat.titleId} className="text-lg font-bold text-gray-900">{cat.name}</h3>
                  </div>
                  <p id={cat.descId} className="text-gray-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.examples.map((ex) => (
                      <span key={ex} className="bg-gray-50 text-gray-600 text-xs px-2.5 py-1 rounded-full">{ex}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-gray-600 text-lg mb-8">
            We source far more categories than listed here. Tell us what you need and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors no-underline"
          >
            Tell Us What You Need <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
