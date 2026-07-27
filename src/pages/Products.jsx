import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Shirt, 
  Cog, 
  Sofa, 
  Package, 
  Dumbbell,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    name: 'Electronics & Components',
    description: 'From consumer electronics to industrial components, we source quality electronic products from verified manufacturers.',
    examples: [
      'Consumer electronics (speakers, headphones, chargers)',
      'PCBs and electronic components',
      'Sensors and control systems',
      'LED lighting products',
      'Power supplies and batteries',
      'Connectors and wiring harnesses',
    ],
    imageId: 'electronics-sourcing',
  },
  {
    id: 'textiles',
    icon: Shirt,
    name: 'Textiles & Apparel',
    description: 'Connect with reliable textile manufacturers for garments, fabrics, and accessories.',
    examples: [
      'Casual and sportswear',
      'Workwear and uniforms',
      'Technical and performance fabrics',
      'Home textiles (bedding, curtains)',
      'Bags and accessories',
      'Sports and outdoor apparel',
    ],
    imageId: 'textiles-sourcing',
  },
  {
    id: 'machinery',
    icon: Cog,
    name: 'Machinery & Equipment',
    description: 'Source industrial machinery, equipment, and mechanical components from capable manufacturers.',
    examples: [
      'Industrial automation equipment',
      'CNC machines and parts',
      'Agricultural machinery',
      'Construction equipment parts',
      'Power tools and hand tools',
      'Mechanical components and assemblies',
    ],
    imageId: 'machinery-sourcing',
  },
  {
    id: 'home',
    icon: Sofa,
    name: 'Home & Garden',
    description: 'Find quality home goods and garden products from established manufacturers.',
    examples: [
      'Furniture (indoor and outdoor)',
      'Home decor and accessories',
      'Kitchenware and appliances',
      'Garden tools and equipment',
      'Storage and organization',
      'Pet products',
    ],
    imageId: 'home-garden-sourcing',
  },
  {
    id: 'packaging',
    icon: Package,
    name: 'Packaging & Printing',
    description: 'Get competitive pricing on packaging materials and printing services.',
    examples: [
      'Paper and cardboard packaging',
      'Plastic containers and bottles',
      'Custom printing services',
      'Labels and stickers',
      'Flexible packaging',
      'Promotional materials',
    ],
    imageId: 'packaging-sourcing',
  },
  {
    id: 'sports',
    icon: Dumbbell,
    name: 'Sports & Recreation',
    description: 'Source fitness equipment, outdoor gear, and sporting goods.',
    examples: [
      'Fitness equipment and accessories',
      'Camping and hiking gear',
      'Water sports equipment',
      'Bicycles and parts',
      'Yoga and Pilates accessories',
      'Team sports equipment',
    ],
    imageId: 'sports-sourcing',
  },
];

const whySourceFromChina = [
  'Cost competitiveness through efficient manufacturing',
  'Wide supplier base with diverse capabilities',
  'Established supply chains and logistics networks',
  'Advanced manufacturing capabilities and technology',
  'Flexible production volumes and quick turnaround',
  'Strong quality control infrastructure',
];

const Products = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We have proven experience across diverse product categories. Our network of verified 
              suppliers can meet a wide range of manufacturing needs.
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Request a Product Search</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Source from China */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Why Source from China?
              </h2>
              <div className="space-y-4">
                {whySourceFromChina.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <img
                alt="Manufacturing facility in China"
                data-strk-img-id="china-manufacturing"
                data-strk-img="[why-source-title]"
                data-strk-img-ratio="16x10"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-lg"
              />
              <h3 id="why-source-title" className="sr-only">Why Source from China</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our primary product categories. Don't see your product? Contact us — 
              we likely have the right supplier for you.
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {productCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-800 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <category.icon className="w-5 h-5 inline mr-2" />
                {category.name}
              </button>
            ))}
          </div>

          {/* Category Details */}
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              (!activeCategory || activeCategory === category.id) && (
                <div
                  key={category.id}
                  id={category.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <category.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">{category.name}</h3>
                    </div>
                    <p className="text-lg text-slate-600 mb-6">{category.description}</p>
                    <ul className="space-y-3 mb-8">
                      {category.examples.map((example) => (
                        <li key={example} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{example}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" asChild>
                      <Link to="/contact">Request Quote for {category.name}</Link>
                    </Button>
                  </div>
                  <div className={`bg-slate-100 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      alt={category.name}
                      data-strk-img-id={`product-${category.imageId}`}
                      data-strk-img={`[product-${category.id}-title]`}
                      data-strk-img-ratio="16x10"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full rounded-lg shadow-lg"
                    />
                    <h3 id={`product-${category.id}-title`} className="sr-only">{category.name}</h3>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Custom Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Don't See Your Product Category?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Our supplier network extends beyond these categories. If you have a specific product 
            in mind, contact us and we'll find the right manufacturer for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">
                Submit Your Requirements
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Source Your Products?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Tell us what you need. Our team will research suppliers and provide options 
            within 48 hours.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Get a Free Product Search</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
