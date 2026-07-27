import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import {
  Cpu,
  Factory,
  Shirt,
  Home,
  Car,
  Package,
  ShoppingBag,
  Building2,
  ArrowRight,
} from 'lucide-react';

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, semiconductors, cables, connectors, and electronic components from major manufacturing hubs in Shenzhen and Dongguan.',
    examples: ['Smart devices', 'PCB assemblies', 'Cables & connectors', 'LED lighting', 'Audio equipment'],
  },
  {
    icon: Factory,
    title: 'Machinery & Industrial Parts',
    description: 'Industrial machinery, CNC parts, hydraulic components, and manufacturing equipment from established industrial zones.',
    examples: ['CNC machined parts', 'Hydraulic systems', 'Industrial motors', 'Tooling & molds', 'Automation equipment'],
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Garments, fabrics, accessories, and home textiles from textile manufacturing centers in Zhejiang, Jiangsu, and Guangdong.',
    examples: ['Woven & knit garments', 'Technical fabrics', 'Home textiles', 'Accessories', 'Workwear & uniforms'],
  },
  {
    icon: Home,
    title: 'Home & Garden Products',
    description: 'Furniture, kitchenware, garden tools, decor, and household items from manufacturing regions across China.',
    examples: ['Furniture', 'Kitchenware', 'Garden tools', 'Home decor', 'Storage solutions'],
  },
  {
    icon: Car,
    title: 'Automotive Parts',
    description: 'OEM and aftermarket automotive components, accessories, and tools from certified manufacturers.',
    examples: ['Engine components', 'Body parts', 'Electrical systems', 'Accessories', 'Tools & equipment'],
  },
  {
    icon: Package,
    title: 'Packaging Materials',
    description: 'Custom packaging, boxes, bags, labels, and protective materials for product branding and shipping.',
    examples: ['Custom boxes', 'Flexible packaging', 'Labels & stickers', 'Protective materials', 'Display packaging'],
  },
  {
    icon: ShoppingBag,
    title: 'Consumer Goods',
    description: 'Everyday consumer products including toys, sports equipment, personal care items, and promotional products.',
    examples: ['Toys & games', 'Sports equipment', 'Personal care', 'Promotional items', 'Pet products'],
  },
  {
    icon: Building2,
    title: 'Building Materials',
    description: 'Construction materials, hardware, fixtures, and architectural products from established manufacturers.',
    examples: ['Tiles & stone', 'Hardware & fittings', 'Plumbing fixtures', 'Doors & windows', 'Insulation materials'],
  },
];

export default function ProductsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Products We Source</h1>
          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
            We work across a wide range of industries and product categories.
            If you do not see your product listed, contact us anyway — we likely have experience in your sector.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <cat.icon className="w-10 h-10 text-blue-700 mb-4" />
                <h2 className="text-xl font-semibold text-slate-800 mb-2">{cat.title}</h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.map((ex, j) => (
                    <span key={j} className="text-xs bg-gray-100 text-slate-700 px-2 py-1 rounded">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Do Not See Your Product?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            We source many product categories beyond those listed here. Tell us what you need and we will let you know if we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-md hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
