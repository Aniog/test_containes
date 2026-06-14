import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Home, Shirt, Wrench, Zap, Box, Layers, PackageSearch } from 'lucide-react';

const categories = [
  {
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, PCBs, connectors, sensors, displays, and electronic components. We source from certified manufacturers with proper quality systems.',
    examples: ['Smart home devices', 'LED lighting', 'Power supplies', 'Electronic modules'],
  },
  {
    icon: Home,
    title: 'Home & Garden',
    description: 'Furniture, kitchenware, home decor, storage solutions, and outdoor equipment. We work with factories experienced in export packaging and compliance.',
    examples: ['Kitchen gadgets', 'Storage organizers', 'Outdoor furniture', 'Home decor'],
  },
  {
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Fabrics, garments, home textiles, bags, and accessories. We verify fabric quality, color fastness, and compliance with international standards.',
    examples: ['Casual apparel', 'Home textiles', 'Bags and luggage', 'Sportswear'],
  },
  {
    icon: Wrench,
    title: 'Industrial & Hardware',
    description: 'Machinery parts, tools, fasteners, metal components, and industrial equipment. We focus on dimensional accuracy, material certification, and durability.',
    examples: ['CNC machined parts', 'Fasteners', 'Hand tools', 'Industrial valves'],
  },
  {
    icon: Zap,
    title: 'Electrical & Power',
    description: 'Cables, switches, sockets, transformers, and power equipment. We verify safety certifications and compliance with electrical standards.',
    examples: ['Power cables', 'Switches and sockets', 'Transformers', 'Solar components'],
  },
  {
    icon: Box,
    title: 'Packaging & Printing',
    description: 'Custom packaging, labels, boxes, and printed materials. We ensure print quality, material durability, and compliance with packaging regulations.',
    examples: ['Custom boxes', 'Labels and stickers', 'Printed materials', 'Packaging design'],
  },
  {
    icon: Layers,
    title: 'Plastics & Rubber',
    description: 'Injection molded parts, extruded profiles, rubber components, and plastic assemblies. We verify material grades, dimensional tolerance, and surface finish.',
    examples: ['Injection molded parts', 'Extruded profiles', 'Rubber seals', 'Plastic assemblies'],
  },
  {
    icon: PackageSearch,
    title: 'Other Categories',
    description: 'We also source many other product categories. If you do not see your product listed, contact us with your requirements and we will assess feasibility.',
    examples: ['Toys and gifts', 'Sports equipment', 'Automotive parts', 'Medical supplies'],
  },
];

const Products = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-lg text-slate-300 mb-8">
              We source across a wide range of industries and product categories. Each category requires specific expertise in supplier verification, quality standards, and logistics — and we have it covered.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Tell Us What You Need
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div key={category.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">{category.title}</h2>
                </div>
                <p className="text-slate-600 mb-5 leading-relaxed">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.examples.map((example) => (
                    <span key={example} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What We Cover for Every Product</h2>
            <p className="text-lg text-slate-600">
              Regardless of category, we apply the same rigorous process to ensure quality, compliance, and reliable delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Supplier Verification', description: 'Factory audits, business license checks, and reference verification for every supplier we recommend.' },
              { title: 'Quality Standards', description: 'We define clear quality criteria, inspect at key milestones, and provide detailed inspection reports.' },
              { title: 'Compliance Support', description: 'Guidance on product standards, certifications, and regulatory requirements for your target market.' },
              { title: 'Cost Optimization', description: 'We negotiate pricing, optimize materials, and help you balance cost with quality.' },
              { title: 'Logistics Planning', description: 'We plan packaging, consolidation, and shipping methods to reduce cost and transit time.' },
              { title: 'Risk Management', description: 'We identify risks early and provide mitigation strategies to keep your project on track.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Do Not See Your Product Category?</h2>
          <p className="text-lg text-slate-600 mb-8">
            We are constantly expanding our network. Contact us with your product details and we will let you know if we can help.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Inquire About Your Product
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
