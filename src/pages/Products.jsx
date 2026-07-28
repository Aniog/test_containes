import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, Monitor, Cog, Shirt, Home, Package, Car, Wrench, Zap } from 'lucide-react';

const categories = [
  {
    icon: Monitor,
    title: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, components, cables, chargers, audio devices, smart home products, and IoT devices.',
    items: ['Smartphones & Accessories', 'Audio Equipment', 'Smart Home Devices', 'PCB & Components', 'Cables & Connectors', 'Power Adapters'],
    imgId: 'product-electronics-a1b2c3',
    titleId: 'prod-title-electronics',
    descId: 'prod-desc-electronics',
  },
  {
    icon: Cog,
    title: 'Machinery & Industrial Equipment',
    desc: 'CNC machines, packaging equipment, industrial tools, motors, pumps, and manufacturing automation systems.',
    items: ['CNC Machinery', 'Packaging Equipment', 'Industrial Tools', 'Electric Motors', 'Pumps & Valves', 'Automation Systems'],
    imgId: 'product-machinery-d4e5f6',
    titleId: 'prod-title-machinery',
    descId: 'prod-desc-machinery',
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    desc: 'Clothing, sportswear, workwear, bags, footwear, and textile accessories from specialized manufacturing clusters.',
    items: ['Casual & Fashion Wear', 'Sportswear', 'Workwear & Uniforms', 'Bags & Luggage', 'Footwear', 'Home Textiles'],
    imgId: 'product-textiles-g7h8i9',
    titleId: 'prod-title-textiles',
    descId: 'prod-desc-textiles',
  },
  {
    icon: Home,
    title: 'Home & Kitchen Products',
    desc: 'Kitchenware, home appliances, furniture, storage solutions, bathroom accessories, and home decor items.',
    items: ['Kitchen Appliances', 'Cookware & Utensils', 'Furniture', 'Bathroom Accessories', 'Storage Solutions', 'Home Decor'],
    imgId: 'product-home-j0k1l2',
    titleId: 'prod-title-home',
    descId: 'prod-desc-home',
  },
  {
    icon: Package,
    title: 'Packaging & Printing',
    desc: 'Custom packaging, labels, cardboard boxes, plastic containers, paper bags, and promotional printing materials.',
    items: ['Custom Boxes', 'Plastic Containers', 'Paper & Gift Bags', 'Labels & Stickers', 'Flexible Packaging', 'Promotional Materials'],
    imgId: 'product-packaging-m3n4o5',
    titleId: 'prod-title-packaging',
    descId: 'prod-desc-packaging',
  },
  {
    icon: Car,
    title: 'Automotive Parts & Accessories',
    desc: 'Auto components, spare parts, accessories, tools, and aftermarket products from certified manufacturers.',
    items: ['Engine Components', 'Brake Systems', 'Electrical Parts', 'Interior Accessories', 'Car Electronics', 'Maintenance Tools'],
    imgId: 'product-auto-p6q7r8',
    titleId: 'prod-title-auto',
    descId: 'prod-desc-auto',
  },
  {
    icon: Wrench,
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, building hardware, safety equipment, and construction materials.',
    items: ['Hand Tools', 'Power Tools', 'Fasteners & Fittings', 'Safety Equipment', 'Building Hardware', 'Garden Tools'],
    imgId: 'product-hardware-s9t0u1',
    titleId: 'prod-title-hardware',
    descId: 'prod-desc-hardware',
  },
  {
    icon: Zap,
    title: 'Renewable Energy Products',
    desc: 'Solar panels, batteries, LED lighting, inverters, and energy storage solutions from specialized manufacturers.',
    items: ['Solar Panels', 'Lithium Batteries', 'LED Lighting', 'Power Inverters', 'Energy Storage', 'EV Charging Equipment'],
    imgId: 'product-energy-v2w3x4',
    titleId: 'prod-title-energy',
    descId: 'prod-desc-energy',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">
              <span id="products-hero-label">Products We Source</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              <span id="products-hero-heading">Sourcing Expertise Across Industries</span>
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              <span id="products-hero-subtitle">
                We have specialized teams for each product category, with deep knowledge of 
                manufacturing clusters, quality standards, and supplier networks.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat) => (
              <div key={cat.title} className="flex gap-6 p-6 bg-b2b-light rounded-lg border border-b2b-border hover:border-navy/30 hover:shadow-md transition-all duration-200">
                <div className="shrink-0">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}] [products-hero-subtitle] [products-hero-heading]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <cat.icon className="w-5 h-5 text-accent" />
                    <h2 id={cat.titleId} className="text-lg font-semibold text-b2b-text">{cat.title}</h2>
                  </div>
                  <p id={cat.descId} className="text-sm text-b2b-text-medium mb-3">{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs bg-white px-2.5 py-1 rounded-full text-b2b-text-medium border border-b2b-border">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 md:py-24 bg-b2b-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Don't See Your Product Category?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our network extends beyond these categories. Contact us with your specific 
              requirements, and we'll leverage our network to find the right suppliers for you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-accent hover:bg-accent-hover rounded-md transition-colors duration-200 shadow-lg"
            >
              Tell Us What You Need
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}