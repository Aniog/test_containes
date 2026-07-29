import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';
import { Cpu, Wrench, Shirt, Home, Package, Car, Zap, HeartPulse, Hammer } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'PCBs, cables, adapters, chargers, consumer electronics, IoT devices, semiconductors, LED displays, batteries.',
    regions: 'Shenzhen, Dongguan, Guangzhou',
    imgId: 'prod-electronics-1a2b3c',
  },
  {
    id: 'machinery',
    icon: Wrench,
    title: 'Machinery & Industrial Equipment',
    description: 'Manufacturing equipment, CNC machines, industrial tools, automation components, hydraulic systems, pumps.',
    regions: 'Dongguan, Foshan, Ningbo',
    imgId: 'prod-machinery-2b3c4d',
  },
  {
    id: 'textiles',
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, bags, accessories, footwear materials, technical textiles, outdoor gear.',
    regions: 'Guangzhou, Hangzhou, Suzhou',
    imgId: 'prod-textiles-3c4d5e',
  },
  {
    id: 'home-goods',
    icon: Home,
    title: 'Home & Garden Products',
    description: 'Furniture, kitchenware, home decor, lighting fixtures, outdoor furniture, garden tools, storage solutions.',
    regions: 'Foshan, Zhongshan, Ningbo',
    imgId: 'prod-homegoods-4d5e6f',
  },
  {
    id: 'packaging',
    icon: Package,
    title: 'Packaging Materials',
    description: 'Boxes, bags, labels, blister packs, custom retail packaging, eco-friendly packaging solutions.',
    regions: 'Dongguan, Shenzhen, Wenzhou',
    imgId: 'prod-packaging-5e6f7g',
  },
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive Parts',
    description: 'OEM and aftermarket auto parts, EV components, interior accessories, lighting, brake systems.',
    regions: 'Chongqing, Wuhan, Ningbo',
    imgId: 'prod-automotive-6f7g8h',
  },
  {
    id: 'energy',
    icon: Zap,
    title: 'Renewable Energy Products',
    description: 'Solar panels, inverters, battery storage systems, EV chargers, wind turbine components.',
    regions: 'Shenzhen, Hefei, Suzhou',
    imgId: 'prod-energy-7g8h9i',
  },
  {
    id: 'medical',
    icon: HeartPulse,
    title: 'Medical & Health Products',
    description: 'Medical devices, diagnostic equipment, personal protective equipment, health supplements packaging.',
    regions: 'Shenzhen, Shanghai, Suzhou',
    imgId: 'prod-medical-8h9i0j',
  },
  {
    id: 'hardware',
    icon: Hammer,
    title: 'Hardware & Building Materials',
    description: 'Fasteners, tools, plumbing fixtures, electrical fittings, tiles, flooring, construction hardware.',
    regions: 'Ningbo, Jinhua, Foshan',
    imgId: 'prod-hardware-9i0j1k',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-surface py-16 md:py-20">
        <div className="container-custom text-center max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Products We Source</p>
          <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Industries We Cover
          </h1>
          <p className="text-text-secondary text-lg">
            We source a wide range of products across major manufacturing categories. If you do not see your product listed, contact us — we likely have experience in it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => {
              const titleId = `prod-title-${cat.id}`;
              const descId = `prod-desc-${cat.id}`;
              return (
                <div
                  key={cat.id}
                  className="group bg-surface rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      data-strk-img-id={cat.imgId}
                      data-strk-img={`[${descId}] [${titleId}]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center">
                        <cat.icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <h3 id={titleId} className="text-lg font-semibold text-text-primary">{cat.title}</h3>
                    </div>
                    <p id={descId} className="text-text-secondary text-sm leading-relaxed mb-3">{cat.description}</p>
                    <p className="text-xs text-text-muted">
                      <span className="font-medium">Key regions:</span> {cat.regions}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Products CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Do Not See Your Product?
          </h2>
          <p className="text-white/80 mb-8">
            We source across virtually all manufacturing categories in China. Share your product details and we will tell you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-4 rounded-md transition-colors"
          >
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
