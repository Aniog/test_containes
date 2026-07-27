import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { ImageHelper } from '@strikingly/sdk';
// import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const categories = [
  {
    name: 'Electronics & Components',
    description: 'PCBs, semiconductors, consumer electronics, cables, connectors, and electronic assemblies.',
    examples: ['Printed Circuit Boards (PCBs)', 'Semiconductors & ICs', 'Consumer Electronics', 'Cables & Connectors', 'Electronic Assemblies'],
  },
  {
    name: 'Textiles & Apparel',
    description: 'Garments, fabrics, home textiles, and accessories from certified manufacturers.',
    examples: ['Woven & Knit Garments', 'Technical Textiles', 'Home Textiles & Bedding', 'Accessories & Bags', 'Sustainable & Organic Fabrics'],
  },
  {
    name: 'Machinery & Equipment',
    description: 'Industrial machinery, automation equipment, tools, and manufacturing components.',
    examples: ['CNC Machines', 'Packaging Equipment', 'Agricultural Machinery', 'Power Tools', 'Automation Systems'],
  },
  {
    name: 'Home & Garden Products',
    description: 'Furniture, decor, kitchenware, garden tools, and outdoor living products.',
    examples: ['Indoor & Outdoor Furniture', 'Kitchen & Dining', 'Home Decor & Lighting', 'Garden Tools & Equipment', 'Storage & Organization'],
  },
  {
    name: 'Automotive Parts',
    description: 'OEM and aftermarket automotive components, accessories, and maintenance products.',
    examples: ['Engine Components', 'Brake Systems', 'Interior Accessories', 'Lighting & Electronics', 'Maintenance Products'],
  },
  {
    name: 'Packaging Materials',
    description: 'Custom packaging, labels, boxes, bags, and sustainable packaging solutions.',
    examples: ['Custom Boxes & Cartons', 'Flexible Packaging', 'Labels & Stickers', 'Sustainable Packaging', 'Protective Packaging'],
  },
  {
    name: 'Building Materials',
    description: 'Construction materials, hardware, fixtures, and architectural components.',
    examples: ['Steel & Metal Products', 'Tiles & Flooring', 'Plumbing Fixtures', 'Doors & Windows', 'Hardware & Fasteners'],
  },
  {
    name: 'Consumer Goods',
    description: 'Everyday products, toys, sports equipment, personal care items, and promotional products.',
    examples: ['Toys & Games', 'Sports & Outdoor Equipment', 'Personal Care Products', 'Promotional Items', 'Pet Supplies'],
  },
];

export default function ProductsPage() {
  const containerRef = useRef(null);

  // useEffect(() => {
    // return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  // }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Products We Source</h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              We source across multiple industries with deep expertise in each category. If your product is manufactured in China, we can help you find the right supplier.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-full aspect-video"
                  data-strk-bg-id={`product-cat-bg-${index}-m4n5o6`}
                  data-strk-bg={`[product-cat-name-${index}] [product-cat-desc-${index}]`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                />
                <div className="p-6">
                  <h2 id={`product-cat-name-${index}`} className="text-xl font-semibold text-slate-900 mb-2">
                    {category.name}
                  </h2>
                  <p id={`product-cat-desc-${index}`} className="text-slate-600 mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure? */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Not Sure If We Source Your Product?</h2>
          <p className="mt-4 text-lg text-slate-600">
            We work with thousands of manufacturers across China. Even if your product is not listed above, we can likely help. Tell us what you need and we will find the right supplier.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition"
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
