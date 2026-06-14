import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { productCategories } from '../data/content';

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 bg-white/10 text-white text-sm font-semibold rounded-full mb-4">
              Products We Source
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wide Range of Product Categories
            </h1>
            <p className="text-xl text-white/80 mb-8">
              We have extensive experience sourcing products across multiple industries. From electronics to medical supplies, we find the right suppliers for your needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E67E22] hover:bg-[#D35400] text-white font-semibold rounded-lg transition-all duration-200"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productCategories.map((category) => (
              <div
                key={category.id}
                className="group bg-[#F8FAFC] hover:bg-[#1E3A5F] rounded-xl p-6 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-[#1E3A5F]/10 to-[#2D5A87]/10 rounded-lg flex items-center justify-center mb-4 group-hover:from-white/20 group-hover:to-white/10">
                  <div className="w-16 h-16 bg-[#1E3A5F]/10 group-hover:bg-white/20 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#1E3A5F] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                      <line x1="12" y1="22.08" x2="12" y2="12" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-[#6B7280] group-hover:text-white/70 transition-colors">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process for Products */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Source Your Products
            </h2>
            <p className="text-lg text-[#6B7280]">
              Our systematic approach ensures we find the best suppliers for your specific product requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Requirements Analysis',
                description: 'We discuss your product specifications, quality standards, quantity requirements, and budget.',
              },
              {
                step: '02',
                title: 'Supplier Research',
                description: 'Our team identifies potential manufacturers, verifies credentials, and assesses capabilities.',
              },
              {
                step: '03',
                title: 'Sample & Selection',
                description: 'You receive samples from qualified suppliers to evaluate quality before making your selection.',
              },
              {
                step: '04',
                title: 'Production & Delivery',
                description: 'We monitor production, conduct quality inspections, and coordinate shipping to your location.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl font-bold text-[#E67E22]/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-[#E67E22]/10 text-[#E67E22] text-sm font-semibold rounded-full mb-4">
                Quality Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Every Product Meets Your Standards
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Quality control is integral to our sourcing process. We ensure every product meets your specifications before it ships.
              </p>
              <div className="space-y-4">
                {[
                  'Pre-production material verification',
                  'During-production quality checks',
                  'Pre-shipment inspection with detailed reports',
                  'Compliance with international standards',
                  'Custom inspection criteria based on your requirements',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#059669] flex-shrink-0 mt-0.5" />
                    <span className="text-[#1F2937]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#F8FAFC] to-[#E5E7EB] rounded-2xl p-8">
              <div className="aspect-square bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] rounded-xl flex items-center justify-center">
                <svg className="w-32 h-32 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-[#E67E22] to-[#D35400]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Looking for a Specific Product?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Tell us what you need. We will find the right suppliers and manage the entire process for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#E67E22] font-semibold rounded-lg hover:bg-[#F8FAFC] transition-all duration-200"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;