import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/shared/SectionHeader.jsx';
import CTAButton from '../components/shared/CTAButton.jsx';

const categories = [
  {
    id: 'electronics',
    titleId: 'prod-title-electronics',
    descId: 'prod-desc-electronics',
    imgId: 'prod-img-electronics-a1b2',
    title: 'Electronics & Electrical',
    desc: 'LED lighting, power tools, consumer electronics, cables, switches, and industrial electrical components.',
    items: ['LED Lighting', 'Power Tools', 'Consumer Electronics', 'Cables & Connectors', 'Solar Products', 'Smart Home Devices'],
  },
  {
    id: 'furniture',
    titleId: 'prod-title-furniture',
    descId: 'prod-desc-furniture',
    imgId: 'prod-img-furniture-c3d4',
    title: 'Furniture & Home Goods',
    desc: 'Office furniture, home décor, storage solutions, kitchenware, and soft furnishings.',
    items: ['Office Furniture', 'Home Décor', 'Storage & Organization', 'Kitchenware', 'Bedding & Textiles', 'Outdoor Furniture'],
  },
  {
    id: 'apparel',
    titleId: 'prod-title-apparel',
    descId: 'prod-desc-apparel',
    imgId: 'prod-img-apparel-e5f6',
    title: 'Apparel & Textiles',
    desc: 'Clothing, activewear, workwear, uniforms, bags, and accessories for retail and corporate buyers.',
    items: ['Activewear', 'Workwear & Uniforms', 'Fashion Apparel', 'Bags & Accessories', 'Promotional Clothing', 'Sportswear'],
  },
  {
    id: 'hardware',
    titleId: 'prod-title-hardware',
    descId: 'prod-desc-hardware',
    imgId: 'prod-img-hardware-g7h8',
    title: 'Hardware & Tools',
    desc: 'Hand tools, power tools, fasteners, construction hardware, and industrial equipment.',
    items: ['Hand Tools', 'Power Tools', 'Fasteners & Fixings', 'Construction Hardware', 'Safety Equipment', 'Industrial Machinery'],
  },
  {
    id: 'packaging',
    titleId: 'prod-title-packaging',
    descId: 'prod-desc-packaging',
    imgId: 'prod-img-packaging-i9j0',
    title: 'Packaging & Printing',
    desc: 'Custom packaging, corrugated boxes, paper bags, labels, and promotional printed materials.',
    items: ['Custom Boxes', 'Paper Bags', 'Labels & Stickers', 'Promotional Materials', 'Retail Packaging', 'Industrial Packaging'],
  },
  {
    id: 'toys',
    titleId: 'prod-title-toys',
    descId: 'prod-desc-toys',
    imgId: 'prod-img-toys-k1l2',
    title: 'Toys & Baby Products',
    desc: 'Educational toys, outdoor play equipment, baby care products, and promotional toys.',
    items: ['Educational Toys', 'Outdoor Play', 'Baby Care', 'Promotional Toys', 'Plush Toys', 'Electronic Toys'],
  },
  {
    id: 'health',
    titleId: 'prod-title-health',
    descId: 'prod-desc-health',
    imgId: 'prod-img-health-m3n4',
    title: 'Health & Beauty',
    desc: 'Personal care products, cosmetics, fitness equipment, medical devices, and wellness products.',
    items: ['Personal Care', 'Cosmetics & Skincare', 'Fitness Equipment', 'Medical Devices', 'Supplements Packaging', 'Wellness Products'],
  },
  {
    id: 'auto',
    titleId: 'prod-title-auto',
    descId: 'prod-desc-auto',
    imgId: 'prod-img-auto-o5p6',
    title: 'Automotive & Parts',
    desc: 'Car accessories, spare parts, motorcycle components, and automotive tools.',
    items: ['Car Accessories', 'Spare Parts', 'Motorcycle Components', 'Automotive Tools', 'EV Components', 'Lighting & Electrical'],
  },
  {
    id: 'sports',
    titleId: 'prod-title-sports',
    descId: 'prod-desc-sports',
    imgId: 'prod-img-sports-q7r8',
    title: 'Sports & Outdoor',
    desc: 'Sporting goods, camping equipment, cycling accessories, and outdoor lifestyle products.',
    items: ['Sporting Goods', 'Camping Equipment', 'Cycling Accessories', 'Water Sports', 'Gym Equipment', 'Outdoor Apparel'],
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
    <div ref={containerRef}>
      {/* Header */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1a2e4a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'rgba(192,57,43,0.2)', color: '#e88a80' }}>
            Product Categories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            We source across a wide range of product categories from verified Chinese manufacturers. Don't see your category? Contact us — we likely cover it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#e2e8f0] hover:shadow-md transition-shadow">
                <div className="overflow-hidden">
                  <img
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cat.title}
                    className="w-full h-44 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold mb-2" style={{ color: '#1a2e4a' }}>{cat.title}</h3>
                  <p id={cat.descId} className="text-sm leading-relaxed mb-4" style={{ color: '#4a5568' }}>{cat.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs px-2 py-1 rounded" style={{ backgroundColor: '#f4f6f9', color: '#4a5568' }}>
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

      {/* Not Listed */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a2e4a' }}>Don't See Your Product?</h2>
          <p className="text-base mb-8" style={{ color: '#4a5568' }}>
            Our sourcing network covers hundreds of product types. If your category isn't listed, contact us and we'll let you know if we can help.
          </p>
          <CTAButton to="/contact" variant="outline">
            Ask About Your Product
          </CTAButton>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#c0392b' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Source Your Product?</h2>
          <p className="text-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Submit your product requirements and we'll find the right suppliers within 48 hours.
          </p>
          <CTAButton to="/contact" variant="secondary" className="text-base px-8 py-4">
            Get a Free Sourcing Quote
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Products;
