import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import CTABanner from '../components/shared/CTABanner';

const categories = [
  {
    name: 'Electronics & Components',
    icon: '🔌',
    description: 'Consumer electronics, PCBs, cables, connectors, LED lighting, smart home devices, and electronic accessories.',
    examples: ['LED strip lights', 'USB cables & chargers', 'PCB assemblies', 'Smart home sensors', 'Power banks', 'Surveillance cameras'],
    imgId: 'prod-img-1a2b',
    imgQuery: '[prod-title-1] electronics components factory China manufacturing',
  },
  {
    name: 'Furniture & Home Goods',
    icon: '🪑',
    description: 'Office and residential furniture, storage solutions, home décor, bedding, and household accessories.',
    examples: ['Office chairs & desks', 'Flat-pack furniture', 'Storage shelving', 'Decorative items', 'Bedding sets', 'Kitchen accessories'],
    imgId: 'prod-img-2b3c',
    imgQuery: '[prod-title-2] furniture home goods factory China manufacturing',
  },
  {
    name: 'Apparel & Textiles',
    icon: '👕',
    description: 'Clothing, sportswear, workwear, bags, accessories, and raw fabrics for fashion and retail brands.',
    examples: ['T-shirts & hoodies', 'Sportswear & activewear', 'Bags & backpacks', 'Workwear & uniforms', 'Hats & accessories', 'Fabric rolls'],
    imgId: 'prod-img-3c4d',
    imgQuery: '[prod-title-3] apparel clothing textile factory China manufacturing',
  },
  {
    name: 'Industrial Equipment',
    icon: '⚙️',
    description: 'Machinery parts, tools, safety equipment, and industrial components for manufacturing and construction.',
    examples: ['Power tools', 'Safety equipment', 'Hydraulic components', 'Conveyor parts', 'Welding equipment', 'Pneumatic tools'],
    imgId: 'prod-img-4d5e',
    imgQuery: '[prod-title-4] industrial equipment machinery factory China',
  },
  {
    name: 'Consumer Products',
    icon: '🛍️',
    description: 'Everyday consumer goods for retail, e-commerce, and private label brands across multiple categories.',
    examples: ['Kitchenware', 'Toys & games', 'Personal care items', 'Stationery', 'Gift items', 'Outdoor products'],
    imgId: 'prod-img-5e6f',
    imgQuery: '[prod-title-5] consumer products retail China manufacturing',
  },
  {
    name: 'Packaging & Labels',
    icon: '📦',
    description: 'Custom packaging solutions including boxes, bags, labels, inserts, and branded packaging for retail products.',
    examples: ['Custom printed boxes', 'Poly bags & mailers', 'Product labels', 'Hang tags', 'Tissue paper & inserts', 'Rigid gift boxes'],
    imgId: 'prod-img-6g7h',
    imgQuery: '[prod-title-6] packaging labels custom printing China factory',
  },
  {
    name: 'Auto Parts & Accessories',
    icon: '🚗',
    description: 'OEM and aftermarket auto parts, accessories, and components for automotive retailers and distributors.',
    examples: ['Brake pads & rotors', 'Car accessories', 'Lighting components', 'Filters & fluids', 'Seat covers', 'Tires & wheels'],
    imgId: 'prod-img-7h8i',
    imgQuery: '[prod-title-7] auto parts accessories factory China manufacturing',
  },
  {
    name: 'Health & Beauty',
    icon: '💊',
    description: 'Cosmetics, personal care products, dietary supplements, and medical devices for health and wellness brands.',
    examples: ['Skincare products', 'Hair care items', 'Dietary supplements', 'Medical devices', 'Fitness equipment', 'Wellness accessories'],
    imgId: 'prod-img-8i9j',
    imgQuery: '[prod-title-8] health beauty cosmetics factory China manufacturing',
  },
  {
    name: 'Sports & Outdoor',
    icon: '⛺',
    description: 'Sports equipment, outdoor gear, fitness accessories, and recreational products for active lifestyle brands.',
    examples: ['Camping equipment', 'Fitness accessories', 'Sports apparel', 'Cycling gear', 'Water sports items', 'Gym equipment'],
    imgId: 'prod-img-9j0k',
    imgQuery: '[prod-title-9] sports outdoor equipment factory China manufacturing',
  },
  {
    name: 'Pet Products',
    icon: '🐾',
    description: 'Pet food packaging, accessories, toys, grooming products, and pet care items for the growing pet industry.',
    examples: ['Pet toys', 'Collars & leashes', 'Pet beds & carriers', 'Grooming tools', 'Food & water bowls', 'Pet apparel'],
    imgId: 'prod-img-0k1l',
    imgQuery: '[prod-title-10] pet products accessories factory China manufacturing',
  },
  {
    name: 'Building Materials',
    icon: '🏗️',
    description: 'Construction materials, hardware, fixtures, and building components for contractors and distributors.',
    examples: ['Tiles & flooring', 'Door & window hardware', 'Plumbing fittings', 'Electrical fixtures', 'Fasteners & anchors', 'Insulation materials'],
    imgId: 'prod-img-1l2m',
    imgQuery: '[prod-title-11] building materials construction hardware China factory',
  },
  {
    name: 'Food & Agriculture',
    icon: '🌾',
    description: 'Agricultural products, food ingredients, processing equipment, and food packaging for importers and distributors.',
    examples: ['Dried foods & spices', 'Tea & herbal products', 'Food processing equipment', 'Agricultural tools', 'Food packaging', 'Organic products'],
    imgId: 'prod-img-2m3n',
    imgQuery: '[prod-title-12] food agriculture products China factory manufacturing',
  },
];

export default function Products() {
  const containerRef = useRef(null);

  useEffect(() => {
    document.title = 'Products We Source | SSourcing China';
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-[#1A3C6E] py-16 md:py-20">
        <div className="container-xl text-center">
          <p className="section-label text-amber-400 mb-3">Product Categories</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Products We Source from China
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We have hands-on sourcing experience across 20+ product categories. If your product isn't listed, contact us — we likely source it.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section-white">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <div key={cat.name} className="card hover:shadow-md transition-shadow duration-200 flex flex-col">
                <div className="rounded-lg overflow-hidden mb-5 h-44">
                  <img
                    alt={cat.name}
                    className="w-full h-full object-cover"
                    data-strk-img-id={cat.imgId}
                    data-strk-img={cat.imgQuery}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{cat.icon}</span>
                  <h2 id={`prod-title-${i + 1}`} className="text-lg font-bold text-slate-900">{cat.name}</h2>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not listed */}
      <section className="section-gray">
        <div className="container-xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Don't See Your Product?</h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
            We source a wide range of products beyond what's listed here. Contact us with your requirements and we'll let you know if we can help.
          </p>
          <Link to="/contact" className="btn-primary">
            Ask About Your Product
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <CTABanner
        title="Ready to Source Your Product?"
        subtitle="Get a free supplier shortlist and pricing estimate within 5 business days."
        ctaText="Get a Free Sourcing Quote"
      />
    </div>
  );
}
