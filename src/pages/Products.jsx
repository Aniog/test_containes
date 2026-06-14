import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, Factory, Building2, Cpu, Home, Shirt, Settings, 
  Box, Truck, ArrowRight, CheckCircle
} from 'lucide-react';

const productCategories = [
  {
    id: 'electronics',
    icon: Cpu,
    title: 'Electronics & Components',
    description: 'Consumer electronics, components, PCBs, LED products, and electronic accessories.',
    examples: [
      'Smart home devices',
      'Consumer electronics',
      'PCBs and components',
      'LED lighting',
      'Cables and connectors',
      'Electronic accessories',
    ],
    factories: '200+',
  },
  {
    id: 'home-goods',
    icon: Home,
    title: 'Home Goods & Furniture',
    description: 'Furniture, home decor, kitchenware, bathroom products, and outdoor items.',
    examples: [
      'Furniture (indoor/outdoor)',
      'Home decor items',
      'Kitchen appliances',
      'Bathroom fixtures',
      'Garden products',
      'Storage solutions',
    ],
    factories: '180+',
  },
  {
    id: 'textiles',
    icon: Shirt,
    title: 'Textiles & Apparel',
    description: 'Clothing, fabrics, accessories, footwear, and home textiles.',
    examples: [
      'Casual and formal wear',
      'Sportswear and activewear',
      'Fabrics and materials',
      'Bags and luggage',
      'Footwear',
      'Home textiles',
    ],
    factories: '150+',
  },
  {
    id: 'machinery',
    icon: Settings,
    title: 'Machinery & Equipment',
    description: 'Industrial machinery, equipment parts, tools, and manufacturing equipment.',
    examples: [
      'Industrial equipment',
      'Machinery parts',
      'Power tools',
      'Agricultural machinery',
      'Construction equipment',
      'Factory equipment',
    ],
    factories: '120+',
  },
  {
    id: 'packaging',
    icon: Box,
    title: 'Packaging Materials',
    description: 'Paper packaging, plastic packaging, metal packaging, and eco-friendly options.',
    examples: [
      'Corrugated boxes',
      'Plastic containers',
      'Metal cans',
      'Paper bags',
      'Eco-friendly packaging',
      'Custom packaging',
    ],
    factories: '100+',
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial Parts',
    description: 'Metal parts, plastic parts, rubber components, and industrial supplies.',
    examples: [
      'Metal fabrication',
      'Plastic injection molding',
      'Rubber components',
      'Fasteners and hardware',
      'Industrial springs',
      'Custom parts',
    ],
    factories: '140+',
  },
];

const sourcingTips = [
  {
    title: 'Be Specific About Requirements',
    description: 'Provide detailed specifications including materials, dimensions, colors, and quality standards.',
  },
  {
    title: 'Request Samples First',
    description: 'Always request samples before bulk production to verify quality and specifications.',
  },
  {
    title: 'Start with Small Orders',
    description: 'Begin with smaller quantities to test quality and supplier reliability before scaling up.',
  },
  {
    title: 'Document Everything',
    description: 'Keep detailed records of all communications, specifications, and agreements.',
  },
];

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Products We Source</h1>
            <p className="text-lg lg:text-xl text-blue-100">
              We have experience across a wide range of product categories and can help you find the right suppliers for your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {productCategories.map((category) => (
              <div
                key={category.id}
                className="bg-white p-6 lg:p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-blue-700" />
                  </div>
                  <div className="text-sm text-slate-500">
                    <span className="font-semibold text-blue-700">{category.factories}</span> factories
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-slate-600 mb-4">{category.description}</p>
                <div className="border-t border-slate-100 pt-4">
                  <h4 className="text-sm font-medium text-slate-500 mb-2">Common Products</h4>
                  <ul className="space-y-2">
                    {category.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Tips */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Tips for Successful Sourcing</h2>
              <p className="text-slate-600 mb-8">
                Follow these guidelines to ensure a smooth sourcing experience and get the best results from your China sourcing efforts.
              </p>
              <div className="space-y-6">
                {sourcingTips.map((tip, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-orange-600">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{tip.title}</h3>
                      <p className="text-sm text-slate-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 p-6 lg:p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4">Can't Find Your Product?</h3>
              <p className="text-slate-600 mb-6">
                We have connections with thousands of factories across various industries. Contact us with your specific requirements and we'll help you find the right suppliers.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-900 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Source Your Products?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Tell us what you need and we'll connect you with verified factories that can meet your requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg rounded-lg transition-colors"
            >
              Start Your Sourcing Inquiry
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
