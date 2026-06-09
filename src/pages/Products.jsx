import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

const categories = [
  {
    name: 'Consumer Electronics',
    description: 'Smartphones, tablets, headphones, speakers, wearables, charging accessories, smart home devices, and more.',
    examples: ['Wireless earbuds', 'Power banks', 'Smart watches', 'Bluetooth speakers'],
  },
  {
    name: 'Home & Kitchen',
    description: 'Small kitchen appliances, cookware, home organization, storage solutions, home decor, and cleaning products.',
    examples: ['Air fryers', 'Food containers', 'Kitchen tools', 'Bathroom accessories'],
  },
  {
    name: 'Apparel & Textiles',
    description: 'Garments, fabrics, accessories, sportswear, workwear, promotional apparel, and textile materials.',
    examples: ['T-shirts & hoodies', 'Sportswear', 'Socks & accessories', 'Work uniforms'],
  },
  {
    name: 'Industrial Equipment & Tools',
    description: 'Machinery parts, hand tools, power tools, workshop equipment, safety gear, and industrial components.',
    examples: ['Power tools', 'Safety gloves', 'Machine parts', 'Measuring instruments'],
  },
  {
    name: 'Packaging Materials',
    description: 'Custom boxes, labels, bags, tapes, bubble wrap, and sustainable packaging solutions.',
    examples: ['Corrugated boxes', 'Kraft paper bags', 'Product labels', 'Display packaging'],
  },
  {
    name: 'Auto Parts & Accessories',
    description: 'Vehicle components, auto accessories, interior parts, exterior parts, and aftermarket products.',
    examples: ['Dash cams', 'Car phone holders', 'LED lights', 'Interior accessories'],
  },
  {
    name: 'Furniture',
    description: 'Indoor furniture, outdoor furniture, office furniture, hotel furniture, and custom pieces.',
    examples: ['Office chairs', 'Outdoor seating', 'Sofa sets', 'Restaurant tables'],
  },
  {
    name: 'Health & Beauty',
    description: 'Cosmetics, personal care products, supplements, beauty tools, and hygiene products.',
    examples: ['Skincare products', 'Hair tools', 'Supplement bottles', 'Makeup brushes'],
  },
  {
    name: 'Sports & Outdoor',
    description: 'Fitness equipment, camping gear, outdoor recreation products, and sporting goods.',
    examples: ['Yoga mats', 'Camping tents', 'Fitness bands', 'Water bottles'],
  },
  {
    name: 'Pet Products',
    description: 'Pet supplies, toys, accessories, grooming tools, feeding products, and pet care items.',
    examples: ['Pet beds', 'Leashes & collars', 'Food bowls', 'Grooming tools'],
  },
  {
    name: 'Baby & Kids Products',
    description: 'Baby gear, toys, nursery products, children\'s furniture, and educational items.',
    examples: ['Baby bottles', 'Kids toys', 'Nursery decor', 'School supplies'],
  },
  {
    name: 'Custom Manufacturing',
    description: 'Custom parts, OEM/ODM manufacturing, injection molding, metal fabrication, and specialized production.',
    examples: ['Plastic parts', 'Metal components', 'Custom molds', 'PCB assembly'],
  },
];

export default function Products() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Products We Source</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            From consumer goods to industrial equipment, we help global buyers source
            virtually any product manufactured in China. If it can be made, we can find it.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold text-primary mb-3">{cat.name}</h2>
                <p className="text-secondary text-sm leading-relaxed mb-4">{cat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.examples.map((ex) => (
                    <span key={ex} className="text-xs bg-surface text-secondary px-2.5 py-1 rounded-full border border-border">{ex}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Listed */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Product Not Listed?</h2>
          <p className="text-secondary mb-8">
            We source across many more categories than listed here. Whether you need a common
            consumer product or a specialized industrial component, contact us and we will
            assess feasibility.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Ask About Your Product <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Tell Us What You Need</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Describe your product requirements and we will provide a free sourcing assessment
            with supplier recommendations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Get a Free Sourcing Assessment <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}