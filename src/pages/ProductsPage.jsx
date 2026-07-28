import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Wrench, Home, Shirt, Package, BrickWall, Car, Heart, Dumbbell, MoreHorizontal } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, cables, connectors, semiconductors, and electronic components.',
    examples: ['Smart home devices', 'Bluetooth speakers', 'Phone accessories', 'LED lighting', 'PCB assemblies'],
    imgId: 'product-electronics-2b8c4d',
    titleId: 'product-electronics-title',
    descId: 'product-electronics-desc',
  },
  {
    id: 'machinery',
    icon: Wrench,
    title: 'Machinery & Industrial',
    description: 'CNC machined parts, industrial tools, automation equipment, and manufacturing machinery.',
    examples: ['CNC precision parts', 'Hydraulic components', 'Packaging machines', 'Welding equipment', 'Industrial valves'],
    imgId: 'product-machinery-6e3f1a',
    titleId: 'product-machinery-title',
    descId: 'product-machinery-desc',
  },
  {
    id: 'home-garden',
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, lighting, kitchenware, home decor, garden tools, and outdoor living products.',
    examples: ['Solid wood furniture', 'LED light fixtures', 'Kitchen utensils', 'Garden tools', 'Home textiles'],
    imgId: 'product-home-9a5d7c',
    titleId: 'product-home-title',
    descId: 'product-home-desc',
  },
  {
    id: 'apparel',
    icon: Shirt,
    title: 'Apparel & Textiles',
    description: 'Clothing, fabrics, accessories, uniforms, and custom textile products.',
    examples: ['Private label clothing', 'Sportswear', 'Work uniforms', 'Bags & accessories', 'Custom fabrics'],
    imgId: 'product-apparel-4f2b8e',
    titleId: 'product-apparel-title',
    descId: 'product-apparel-desc',
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, bags, boxes, displays, and printed materials.',
    examples: ['Custom gift boxes', 'Product labels', 'Shopping bags', 'Display stands', ' corrugated boxes'],
    imgId: 'product-packaging-7c1d3f',
    titleId: 'product-packaging-title',
    descId: 'product-packaging-desc',
  },
  {
    id: 'building',
    icon: BrickWall,
    title: 'Building Materials',
    description: 'Hardware, tiles, fixtures, construction supplies, and architectural components.',
    examples: ['Door hardware', 'Ceramic tiles', 'Bathroom fixtures', 'Steel structures', 'Window systems'],
    imgId: 'product-building-3e9a5b',
    titleId: 'product-building-title',
    descId: 'product-building-desc',
  },
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Parts',
    description: 'Auto accessories, replacement parts, aftermarket components, and vehicle electronics.',
    examples: ['Car accessories', 'Brake components', 'LED headlights', 'Interior trim', 'Engine parts'],
    imgId: 'product-automotive-8d4f2c',
    titleId: 'product-automotive-title',
    descId: 'product-automotive-desc',
  },
  {
    id: 'health-beauty',
    icon: Heart,
    title: 'Health & Beauty',
    description: 'Cosmetics, personal care products, wellness items, and beauty accessories.',
    examples: ['Skincare products', 'Makeup tools', 'Hair care items', 'Wellness supplements', 'Beauty devices'],
    imgId: 'product-health-5a7c1e',
    titleId: 'product-health-title',
    descId: 'product-health-desc',
  },
  {
    id: 'sports',
    icon: Dumbbell,
    title: 'Sports & Outdoor',
    description: 'Fitness equipment, camping gear, outdoor apparel, and sporting goods.',
    examples: ['Home gym equipment', 'Camping tents', 'Yoga accessories', 'Cycling gear', 'Outdoor furniture'],
    imgId: 'product-sports-1b6e9d',
    titleId: 'product-sports-title',
    descId: 'product-sports-desc',
  },
];

export default function ProductsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-lg text-slate-300 mb-8">
              From consumer goods to industrial components, we source across a wide range of product categories. If it's made in China, we can help you find the right manufacturer.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Request a Product Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div key={category.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${index % 2 === 1 ? '' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-5">
                    <category.icon className="w-7 h-7 text-orange-600" />
                  </div>
                  <h2 id={category.titleId} className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{category.title}</h2>
                  <p id={category.descId} className="text-lg text-slate-600 mb-6">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                    <img
                      data-strk-img-id={category.imgId}
                      data-strk-img={`[${category.descId}] [${category.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={category.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Don't see your product */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom max-w-3xl text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MoreHorizontal className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't See Your Product Category?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We source virtually any product manufactured in China. Tell us what you need and we'll find the right supplier for you.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-8 py-4">
            Tell Us What You Need <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
