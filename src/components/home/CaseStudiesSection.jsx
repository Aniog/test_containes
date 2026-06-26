import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, DollarSign } from 'lucide-react';

const caseStudies = [
  {
    title: 'Electronics Manufacturer Saves 23% on Component Costs',
    category: 'Electronics',
    summary: 'A US-based electronics company needed reliable PCB suppliers. We identified 3 qualified factories, conducted audits, and negotiated pricing that reduced their costs by 23%.',
    metrics: [
      { icon: TrendingUp, value: '23%', label: 'Cost Savings' },
      { icon: Shield, value: '3', label: 'Factories Audited' },
      { icon: DollarSign, value: '$180K', label: 'Annual Savings' },
    ],
    link: '/case-studies',
  },
  {
    title: 'Fashion Brand Avoids $50K in Defective Products',
    category: 'Textiles',
    summary: 'Pre-shipment inspection revealed quality issues in a clothing order. Our team caught the defects before shipping, saving the client from receiving unusable inventory.',
    metrics: [
      { icon: Shield, value: '100%', label: 'Defects Caught' },
      { icon: DollarSign, value: '$50K', label: 'Losses Prevented' },
      { icon: TrendingUp, value: '2', label: 'Weeks Saved' },
    ],
    link: '/case-studies',
  },
  {
    title: 'Startup Launches Product Line with Zero Factory Visits',
    category: 'Consumer Goods',
    summary: 'A European startup needed to source home decor products but could not travel to China. We handled everything from supplier selection to quality control and shipping.',
    metrics: [
      { icon: TrendingUp, value: '0', label: 'Factory Visits Needed' },
      { icon: Shield, value: '12', label: 'Products Sourced' },
      { icon: DollarSign, value: '45', label: 'Days to Launch' },
    ],
    link: '/case-studies',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real results from real clients. See how we have helped businesses like yours source successfully from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gray-100 relative">
                <img
                  alt={study.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`case-study-${study.category.toLowerCase()}-img`}
                  data-strk-img={`[${study.category.toLowerCase()}-case-title] [${study.category.toLowerCase()}-case-summary]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-700 text-white text-xs font-medium rounded-full">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 id={`${study.category.toLowerCase()}-case-title`} className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {study.title}
                </h3>
                <p id={`${study.category.toLowerCase()}-case-summary`} className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {study.summary}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <metric.icon className="w-5 h-5 text-blue-700 mx-auto mb-1" />
                      <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to={study.link}
                  className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors"
                >
                  Read full case study
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors"
          >
            View All Case Studies
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
