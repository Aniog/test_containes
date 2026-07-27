import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, 
  Sofa, 
  Shirt, 
  Settings, 
  Package, 
  Home, 
  Dumbbell, 
  Car, 
  ArrowRight,
  CheckCircle,
  Factory,
  Truck,
  Shield
} from 'lucide-react';

const ProductsPage = () => {
  const productCategories = [
    {
      icon: Cpu,
      name: 'Electronics',
      description: 'Consumer electronics, components, circuit boards, and electronic accessories',
      examples: ['Smartphones', 'Tablets', 'LED Lights', 'Circuit Boards', 'Cables', 'Power Banks'],
      suppliers: '2,400+',
    },
    {
      icon: Sofa,
      name: 'Furniture',
      description: 'Home and office furniture, outdoor furniture, and furniture components',
      examples: ['Sofas', 'Chairs', 'Tables', 'Cabinets', 'Beds', 'Outdoor Sets'],
      suppliers: '1,800+',
    },
    {
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Fabrics, garments, accessories, and home textiles',
      examples: ['T-Shirts', 'Jackets', 'Dresses', 'Jeans', 'Bedding', 'Curtains'],
      suppliers: '3,200+',
    },
    {
      icon: Settings,
      name: 'Machinery',
      description: 'Industrial machinery, equipment parts, and manufacturing tools',
      examples: ['CNC Machines', 'Packaging Machines', 'Textile Machines', 'Parts & Components'],
      suppliers: '950+',
    },
    {
      icon: Package,
      name: 'Packaging',
      description: 'All types of packaging materials and solutions',
      examples: ['Cardboard Boxes', 'Plastic Containers', 'Bottles', 'Labels', 'Bags'],
      suppliers: '1,200+',
    },
    {
      icon: Home,
      name: 'Home & Garden',
      description: 'Home decor, garden products, and household items',
      examples: ['Decor Items', 'Kitchenware', 'Garden Tools', 'Bedding', 'Lighting'],
      suppliers: '2,100+',
    },
    {
      icon: Dumbbell,
      name: 'Sports & Outdoors',
      description: 'Fitness equipment, outdoor gear, and sporting goods',
      examples: ['Gym Equipment', 'Camping Gear', 'Bicycles', 'Yoga Mats', 'Fishing Gear'],
      suppliers: '1,500+',
    },
    {
      icon: Car,
      name: 'Automotive Parts',
      description: 'Vehicle parts, accessories, and components',
      examples: ['Engine Parts', 'Tires', 'Batteries', 'Electronics', 'Interior Parts'],
      suppliers: '1,100+',
    },
  ];

  const capabilities = [
    {
      icon: Factory,
      title: 'Factory Direct Sourcing',
      description: 'We connect you directly with manufacturers, cutting out middlemen and reducing costs.',
    },
    {
      icon: Shield,
      title: 'Quality Verification',
      description: 'All suppliers in our network are verified for quality standards and business legitimacy.',
    },
    {
      icon: CheckCircle,
      title: 'Custom Manufacturing',
      description: 'We can help arrange custom production based on your specifications and designs.',
    },
    {
      icon: Truck,
      title: 'Logistics Support',
      description: 'Full shipping and logistics coordination from factory to your destination.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Products We Source
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              We have established relationships with verified suppliers across a wide range of industries. 
              Find the right manufacturers for your product needs.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Product Categories</h2>
            <p className="section-subtitle mx-auto mt-4">
              Browse our extensive network of verified Chinese suppliers by industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category, index) => (
              <div key={index} className="card group hover:border-[#1E3A5F]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#F8FAFC] rounded-xl flex items-center justify-center group-hover:bg-[#1E3A5F] transition-colors">
                    <category.icon className="w-7 h-7 text-[#1E3A5F] group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#1E3A5F]">{category.name}</h3>
                    <p className="text-sm text-[#F97316] font-medium">{category.suppliers} suppliers</p>
                  </div>
                </div>
                
                <p className="text-sm text-[#64748B] mb-4">{category.description}</p>
                
                <div className="pt-4 border-t border-[#E2E8F0]">
                  <p className="text-xs font-medium text-[#1E3A5F] mb-2">Common Products:</p>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.slice(0, 4).map((example, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-[#F8FAFC] text-[#64748B] px-2 py-1 rounded"
                      >
                        {example}
                      </span>
                    ))}
                    {category.examples.length > 4 && (
                      <span className="text-xs text-[#64748B]">+{category.examples.length - 4} more</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Sourcing Capabilities</h2>
            <p className="section-subtitle mx-auto mt-4">
              Whatever products you need, we can help you find the right supplier
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-[#E2E8F0]">
                <div className="w-12 h-12 bg-[#F8FAFC] rounded-lg flex items-center justify-center mb-4">
                  <capability.icon className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <h3 className="text-base font-semibold text-[#1E3A5F] mb-2">{capability.title}</h3>
                <p className="text-sm text-[#64748B]">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Finding What You Need */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12 border border-[#E2E8F0]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-[#1E3A5F] mb-4">
                Don't See What You're Looking For?
              </h2>
              <p className="text-lg text-[#64748B] mb-8">
                Our supplier network extends beyond these categories. Contact us with your specific 
                product requirements and we'll find the right suppliers for you.
              </p>
              <Link to="/contact" className="btn-primary">
                Tell Us What You Need
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Source Your Products?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Get in touch with our team to discuss your product requirements. We'll find the right suppliers for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white/10">
              Learn About Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;