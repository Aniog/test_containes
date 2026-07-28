import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Cpu, Cog, Shirt, Home, Baby, Wrench, Dumbbell, Smartphone,
  Stethoscope, Car, Package, Lightbulb, ArrowRight
} from 'lucide-react';

const categories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    examples: 'PCBs, semiconductors, connectors, displays, cables, sensors, power supplies',
    imgId: 'prod-electronics-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    icon: Smartphone,
    name: 'Consumer Electronics',
    examples: 'Smart devices, wearables, Bluetooth speakers, chargers, phone accessories',
    imgId: 'prod-consumer-d4e5f6',
    titleId: 'prod-consumer-title',
    descId: 'prod-consumer-desc',
  },
  {
    icon: Cog,
    name: 'Industrial Machinery & Parts',
    examples: 'CNC machined parts, motors, pumps, valves, bearings, automation components',
    imgId: 'prod-machinery-g7h8i9',
    titleId: 'prod-machinery-title',
    descId: 'prod-machinery-desc',
  },
  {
    icon: Shirt,
    name: 'Textiles, Apparel & Accessories',
    examples: 'Garments, sportswear, uniforms, bags, shoes, fabrics, home textiles',
    imgId: 'prod-textiles-j0k1l2',
    titleId: 'prod-textiles-title',
    descId: 'prod-textiles-desc',
  },
  {
    icon: Home,
    name: 'Home, Kitchen & Furniture',
    examples: 'Furniture, cookware, small appliances, decor, storage, bathroom fittings',
    imgId: 'prod-home-m3n4o5',
    titleId: 'prod-home-title',
    descId: 'prod-home-desc',
  },
  {
    icon: Wrench,
    name: 'Hardware, Tools & Building Materials',
    examples: 'Power tools, hand tools, fasteners, locks, plumbing, electrical supplies',
    imgId: 'prod-hardware-p6q7r8',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
  },
  {
    icon: Dumbbell,
    name: 'Sports, Fitness & Outdoor',
    examples: 'Fitness equipment, camping gear, bicycles, sports accessories, outdoor furniture',
    imgId: 'prod-sports-s9t0u1',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    icon: Baby,
    name: 'Baby, Kids & Toys',
    examples: 'Toys, strollers, car seats, educational products, children\'s furniture',
    imgId: 'prod-baby-v2w3x4',
    titleId: 'prod-baby-title',
    descId: 'prod-baby-desc',
  },
  {
    icon: Stethoscope,
    name: 'Medical Devices & Supplies',
    examples: 'PPE, diagnostic equipment, consumables, rehabilitation products, hospital furniture',
    imgId: 'prod-medical-y5z6a7',
    titleId: 'prod-medical-title',
    descId: 'prod-medical-desc',
  },
  {
    icon: Car,
    name: 'Automotive Parts & Accessories',
    examples: 'Aftermarket parts, electronics, lighting, interior accessories, tools',
    imgId: 'prod-auto-b8c9d0',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    icon: Package,
    name: 'Packaging & Printing',
    examples: 'Custom boxes, labels, flexible packaging, paper bags, promotional materials',
    imgId: 'prod-packaging-e1f2g3',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    icon: Lightbulb,
    name: 'Lighting & Electrical',
    examples: 'LED lighting, fixtures, solar lights, switches, electrical components',
    imgId: 'prod-lighting-h4i5j6',
    titleId: 'prod-lighting-title',
    descId: 'prod-lighting-desc',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      <section className="bg-gradient-to-br from-navy-900 to-navy-800 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-400 font-semibold text-sm uppercase tracking-wider">Products We Source</p>
          <h1 id="products-page-title" className="mt-3 text-4xl sm:text-5xl font-extrabold text-white">
            We Source Across Industries
          </h1>
          <p id="products-page-subtitle" className="mt-4 text-lg text-steel-400 max-w-2xl mx-auto leading-relaxed">
            From electronics to furniture, our supplier network covers hundreds of product categories. If it is made in China, we can source it.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <article key={cat.name} className="group rounded-xl border border-steel-200 overflow-hidden hover:shadow-lg hover:border-brand-200 transition-all">
                <img
                  alt={cat.name}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-page-subtitle] [products-page-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="rounded-lg bg-brand-50 p-2 text-brand-600">
                      <cat.icon className="h-5 w-5" />
                    </div>
                    <h3 id={cat.titleId} className="text-lg font-semibold text-steel-900">{cat.name}</h3>
                  </div>
                  <p id={cat.descId} className="text-sm text-steel-500 leading-relaxed">{cat.examples}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-steel-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-900">
            Don't See Your Product?
          </h2>
          <p className="mt-4 text-lg text-steel-500 max-w-xl mx-auto leading-relaxed">
            Our network extends far beyond these categories. Tell us what you need and we will find the right supplier.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-brand-700 transition-colors"
          >
            Tell Us What You Need
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
