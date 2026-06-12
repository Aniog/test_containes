import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'electronics',
    name: 'Consumer Electronics',
    examples: 'Bluetooth speakers, LED lighting, smart home devices, power banks, earphones',
    imgId: 'prod-electronics-img-a1b2c3',
    titleId: 'prod-electronics-title',
    descId: 'prod-electronics-desc',
  },
  {
    id: 'furniture',
    name: 'Furniture & Home Décor',
    examples: 'Office chairs, wooden furniture, storage solutions, decorative items, rugs',
    imgId: 'prod-furniture-img-d4e5f6',
    titleId: 'prod-furniture-title',
    descId: 'prod-furniture-desc',
  },
  {
    id: 'apparel',
    name: 'Apparel & Textiles',
    examples: 'T-shirts, sportswear, workwear, bags, hats, custom uniforms',
    imgId: 'prod-apparel-img-g7h8i9',
    titleId: 'prod-apparel-title',
    descId: 'prod-apparel-desc',
  },
  {
    id: 'hardware',
    name: 'Hardware & Tools',
    examples: 'Hand tools, power tools, fasteners, industrial components, safety equipment',
    imgId: 'prod-hardware-img-j1k2l3',
    titleId: 'prod-hardware-title',
    descId: 'prod-hardware-desc',
  },
  {
    id: 'packaging',
    name: 'Packaging & Paper',
    examples: 'Custom boxes, paper bags, labels, gift packaging, corrugated cartons',
    imgId: 'prod-packaging-img-m4n5o6',
    titleId: 'prod-packaging-title',
    descId: 'prod-packaging-desc',
  },
  {
    id: 'toys',
    name: 'Toys & Baby Products',
    examples: 'Plastic toys, educational toys, plush toys, baby gear, outdoor play equipment',
    imgId: 'prod-toys-img-p7q8r9',
    titleId: 'prod-toys-title',
    descId: 'prod-toys-desc',
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    examples: 'Skincare products, personal care devices, fitness equipment, supplements packaging',
    imgId: 'prod-health-img-s1t2u3',
    titleId: 'prod-health-title',
    descId: 'prod-health-desc',
  },
  {
    id: 'auto',
    name: 'Automotive Parts',
    examples: 'Car accessories, replacement parts, LED car lights, tools, cleaning products',
    imgId: 'prod-auto-img-v4w5x6',
    titleId: 'prod-auto-title',
    descId: 'prod-auto-desc',
  },
  {
    id: 'sports',
    name: 'Sports & Outdoor',
    examples: 'Camping gear, gym equipment, cycling accessories, water sports, team sports',
    imgId: 'prod-sports-img-y7z8a9',
    titleId: 'prod-sports-title',
    descId: 'prod-sports-desc',
  },
  {
    id: 'kitchen',
    name: 'Kitchen & Cookware',
    examples: 'Cookware sets, kitchen gadgets, storage containers, cutlery, appliances',
    imgId: 'prod-kitchen-img-b1c2d3',
    titleId: 'prod-kitchen-title',
    descId: 'prod-kitchen-desc',
  },
  {
    id: 'industrial',
    name: 'Industrial & B2B',
    examples: 'Machinery parts, safety equipment, raw materials, OEM components, custom fabrication',
    imgId: 'prod-industrial-img-e4f5g6',
    titleId: 'prod-industrial-title',
    descId: 'prod-industrial-desc',
  },
  {
    id: 'gifts',
    name: 'Promotional & Gifts',
    examples: 'Corporate gifts, branded merchandise, promotional items, custom stationery',
    imgId: 'prod-gifts-img-h7i8j9',
    titleId: 'prod-gifts-title',
    descId: 'prod-gifts-desc',
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
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Product Categories</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Products We Source from China</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              We source across 30+ product categories from verified Chinese manufacturers. If your product isn't listed, contact us — we likely have relevant factory connections.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">What We Source</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">30+ Product Categories</h2>
            <p className="text-muted max-w-2xl mx-auto">From consumer goods to industrial components, we have sourcing experience across a wide range of product types.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(({ id, name, examples, imgId, titleId, descId }) => (
              <div key={id} className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-44 bg-gray-100 overflow-hidden">
                  <img
                    data-strk-img-id={imgId}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 id={titleId} className="font-semibold text-darktext text-base mb-1">{name}</h3>
                  <p id={descId} className="text-muted text-sm leading-relaxed">{examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-14 bg-white border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary mb-3">Don't See Your Product?</h2>
          <p className="text-muted mb-6">We source a wide range of products beyond the categories listed above. Contact us with your requirements and we'll let you know if we can help.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-accent hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
            Send Us Your Requirements <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
