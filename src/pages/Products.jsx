import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const categories = [
  {
    name: 'Electronics & Components',
    desc: 'Consumer electronics, PCBs, sensors, connectors, LED lighting, and electronic assemblies. Sourced from Shenzhen and Dongguan manufacturing clusters.',
    items: ['Smart home devices', 'PCB assemblies', 'LED lighting', 'Sensors & modules', 'Power adapters', 'Cables & connectors'],
    imgId: 'prod-elec-page-a1b2',
  },
  {
    name: 'Home & Garden',
    desc: 'Furniture, kitchenware, home textiles, storage solutions, and garden tools. Sourced from Foshan, Zhongshan, and Yiwu suppliers.',
    items: ['Kitchen utensils', 'Storage organizers', 'Home textiles', 'Garden tools', 'Furniture hardware', 'Decorative items'],
    imgId: 'prod-home-page-c3d4',
  },
  {
    name: 'Apparel & Textiles',
    desc: 'Clothing, fabrics, accessories, and custom garments. Sourced from Guangzhou, Shenzhen, and Zhejiang textile hubs.',
    items: ['Casual wear', 'Sportswear', 'Custom uniforms', 'Fabrics & textiles', 'Bags & accessories', 'Footwear'],
    imgId: 'prod-apparel-page-e5f6',
  },
  {
    name: 'Industrial & Machinery',
    desc: 'Machinery parts, industrial equipment, raw materials, and custom fabrication. Sourced from Jiangsu, Zhejiang, and Shandong industrial zones.',
    items: ['CNC machined parts', 'Stamping parts', 'Castings & forgings', 'Industrial valves', 'Pumps & motors', 'Raw materials'],
    imgId: 'prod-indust-page-g7h8',
  },
  {
    name: 'Auto Parts & Accessories',
    desc: 'OEM parts, aftermarket components, and car accessories. Sourced from Changchun, Shiyan, and Ningbo automotive clusters.',
    items: ['Brake components', 'Filters', 'Lighting assemblies', 'Interior accessories', 'Rubber seals', 'Engine parts'],
    imgId: 'prod-auto-page-i9j1',
  },
  {
    name: 'Packaging & Printing',
    desc: 'Custom packaging, labels, boxes, and printing solutions. Sourced from Shenzhen, Dongguan, and Wenzhou printing hubs.',
    items: ['Custom boxes', 'Labels & stickers', 'Flexible packaging', 'Corrugated cartons', 'Blister packs', 'Printing services'],
    imgId: 'prod-pack-page-k2l3',
  },
  {
    name: 'Health & Beauty',
    desc: 'Cosmetics, personal care products, health supplements, and beauty tools. Sourced from Guangzhou and Shanghai cosmetic manufacturing zones.',
    items: ['Skincare products', 'Hair care', 'Cosmetics', 'Beauty tools', 'Supplements', 'Personal care'],
    imgId: 'prod-health-page-m4n5',
  },
  {
    name: 'Sports & Outdoors',
    desc: 'Sporting goods, outdoor equipment, fitness gear, and recreational products. Sourced from Zhejiang and Fujian manufacturing areas.',
    items: ['Fitness equipment', 'Camping gear', 'Water sports', 'Team sports gear', 'Yoga accessories', 'Cycling parts'],
    imgId: 'prod-sports-page-o6p7',
  },
];

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
  <div>
    <section className="bg-navy py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Products We Source</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We source across a wide range of product categories from China's major manufacturing hubs. If it's made in China, we can help you source it reliably.
        </p>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={containerRef} className="space-y-16">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-charcoal mb-4">{cat.name}</h2>
                <p className="text-body leading-relaxed mb-6">{cat.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {cat.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-body">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[prod-page-${cat.imgId}-desc] [prod-page-${cat.imgId}-name]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p id={`prod-page-${cat.imgId}-name`} className="hidden">{cat.name}</p>
                <p id={`prod-page-${cat.imgId}-desc`} className="hidden">{cat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          title="Don't See Your Product Category?"
          subtitle="We source many more product types than listed here. Tell us what you're looking for and we'll let you know if we can help."
        />
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
        >
          Ask About Your Product
          <ChevronRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  </div>
  );
};

export default Products;
