import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Phone, Cpu, Home, Shirt, Wrench, Package, Dumbbell, Leaf, Sparkles } from 'lucide-react';

const productCategories = [
  {
    icon: Cpu,
    name: 'Electronics & Components',
    examples: ['Consumer electronics', 'PCBs and components', 'Smart devices', 'LED lighting', 'Cables and connectors', 'Batteries and power banks'],
    color: '#3B82F6'
  },
  {
    icon: Home,
    name: 'Home & Garden',
    examples: ['Furniture', 'Home decor', 'Kitchen appliances', 'Bedding and textiles', 'Outdoor furniture', 'Garden tools'],
    color: '#10B981'
  },
  {
    icon: Shirt,
    name: 'Textiles & Apparel',
    examples: ['Garments', 'Fabrics', 'Shoes and bags', 'Accessories', 'Sportswear', 'Workwear'],
    color: '#8B5CF6'
  },
  {
    icon: Wrench,
    name: 'Industrial & Hardware',
    examples: ['Machinery parts', 'Hardware tools', 'Fasteners', 'Metal components', 'Plastic parts', 'Rubber products'],
    color: '#F59E0B'
  },
  {
    icon: Package,
    name: 'Packaging & Printing',
    examples: ['Paper packaging', 'Plastic containers', 'Labels and stickers', 'Books and publications', 'Promotional materials', 'Shopping bags'],
    color: '#EF4444'
  },
  {
    icon: Dumbbell,
    name: 'Sports & Outdoor',
    examples: ['Fitness equipment', 'Camping gear', 'Bicycle parts', 'Water sports equipment', 'Sporting accessories', 'Outdoor clothing'],
    color: '#06B6D4'
  },
  {
    icon: Sparkles,
    name: 'Beauty & Personal Care',
    examples: ['Cosmetics', 'Skincare products', 'Hair care items', 'Beauty tools', 'Fragrances', 'Personal hygiene'],
    color: '#EC4899'
  },
  {
    icon: Leaf,
    name: 'Pet Products & Toys',
    examples: ['Pet toys', 'Pet accessories', 'Children toys', 'Board games', 'Craft supplies', 'Educational toys'],
    color: '#84CC16'
  }
];

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Product Categories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Products We Source
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            From electronics to textiles, we have extensive experience sourcing a wide range of products from verified Chinese manufacturers across multiple industries.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-[#E2E8F0] hover:shadow-lg transition-shadow"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${category.color}15` }}
                >
                  <category.icon 
                    className="w-7 h-7" 
                    style={{ color: category.color }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#1E293B] mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[#64748B]">
                      <CheckCircle className="w-4 h-4 text-[#059669] shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Sourcing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Don't See Your Product?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mt-2 mb-4">
                We Source Beyond These Categories
              </h2>
              <p className="text-[#64748B] mb-6">
                Our supplier network extends far beyond these categories. If you have a product to source, we likely have the connections to find the right manufacturer for you.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#64748B]">Vast network of verified manufacturers across China</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#64748B]">Specialized sourcing for niche and custom products</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#64748B]">Rigorous factory verification for all suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#059669] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#64748B]">Transparent process with regular updates</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-[#C9A227] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#B8922A] transition-colors"
              >
                Submit Your Product Request
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-[#F1F5F9] rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-[#1E3A5F] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Package className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E293B] mb-4">
                  Have a Unique Product?
                </h3>
                <p className="text-[#64748B] mb-6">
                  Tell us about your product requirements and we'll find the right supplier for you.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#2C5282] transition-colors"
                >
                  Get a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] to-[#2C5282]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Source Your Products?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today with your product requirements and let our expertise work for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A227] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#B8922A] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+862012345678"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
