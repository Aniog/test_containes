import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, DollarSign, Clock, CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);
  const caseStudies = [
    {
      id: 1,
      title: 'Electronics Importer from USA',
      category: 'Electronics',
      client: 'US-based electronics retailer',
      duration: '6 months',
      challenge: 'The client was struggling with inconsistent quality from their existing Chinese suppliers, with defect rates averaging 8%. They needed a reliable supplier for consumer electronics accessories.',
      solution: 'We identified and audited 12 potential suppliers, conducted factory inspections, and negotiated quality assurance terms. We implemented a comprehensive QC program including pre-production, during-production, and pre-shipment inspections.',
      results: [
        { metric: 'Defect Rate', before: '8%', after: '1.2%', improvement: '85% reduction' },
        { metric: 'Lead Time', before: '45 days', after: '28 days', improvement: '38% faster' },
        { metric: 'Cost Savings', before: 'Baseline', after: '12%', improvement: 'Annual savings' },
      ],
      testimonial: 'SSourcing China transformed our supply chain. The quality improvement alone saved us thousands in returns and customer complaints.',
      image: 'electronics-factory-quality-control',
    },
    {
      id: 2,
      title: 'Home Goods Retailer from UK',
      category: 'Home & Garden',
      client: 'UK home goods retailer',
      duration: '12 months',
      challenge: 'The client was paying premium prices for home goods and facing long lead times. They needed to optimize their supplier base while maintaining quality standards.',
      solution: 'We conducted a comprehensive supplier audit, identified 3 new manufacturers with better capacity and pricing, and negotiated improved terms. We also optimized their shipping logistics.',
      results: [
        { metric: 'Cost Reduction', before: 'Baseline', after: '15%', improvement: 'Annual savings' },
        { metric: 'Lead Time', before: '60 days', after: '35 days', improvement: '42% faster' },
        { metric: 'On-time Delivery', before: '72%', after: '96%', improvement: '24% improvement' },
      ],
      testimonial: 'The cost savings and improved delivery reliability have been game-changers for our business. We can now offer better prices to our customers.',
      image: 'warehouse-shipping-logistics',
    },
    {
      id: 3,
      title: 'Fashion Brand from Australia',
      category: 'Apparel',
      client: 'Australian fashion brand',
      duration: '18 months',
      challenge: 'The client wanted to scale their apparel production from 5,000 to 50,000 units per year while maintaining strict quality standards and ethical manufacturing practices.',
      solution: 'We found and audited multiple apparel manufacturers, implemented a quality control system, and established long-term partnerships. We also helped with compliance and certification requirements.',
      results: [
        { metric: 'Production Scale', before: '5,000 units', after: '50,000 units', improvement: '10x growth' },
        { metric: 'Quality Pass Rate', before: '88%', after: '98%', improvement: '10% improvement' },
        { metric: 'Defect Rate', before: '12%', after: '2%', improvement: '83% reduction' },
      ],
      testimonial: 'SSourcing China helped us scale our production while maintaining the quality our customers expect. Their QC team is exceptional.',
      image: 'apparel-textile-factory',
    },
    {
      id: 4,
      title: 'Industrial Equipment Buyer from Germany',
      category: 'Industrial',
      client: 'German industrial equipment distributor',
      duration: '8 months',
      challenge: 'The client needed to source specialized industrial equipment with specific technical requirements. They struggled to find manufacturers capable of meeting their exact specifications.',
      solution: 'We leveraged our network of industrial manufacturers, conducted technical capability assessments, and facilitated engineering discussions to ensure specifications were met.',
      results: [
        { metric: 'Supplier Match', before: '0 qualified', after: '3 qualified', improvement: '3 suppliers' },
        { metric: 'Specification Compliance', before: 'N/A', after: '100%', improvement: 'Full compliance' },
        { metric: 'Project Timeline', before: '12 months', after: '8 months', improvement: '33% faster' },
      ],
      testimonial: 'Finding manufacturers that could meet our technical requirements was challenging. SSourcing China\'s network and expertise made all the difference.',
      image: 'industrial-manufacturing-factory',
    },
    {
      id: 5,
      title: 'E-commerce Seller from Canada',
      category: 'Consumer Goods',
      client: 'Canadian e-commerce entrepreneur',
      duration: 'Ongoing',
      challenge: 'The client was launching multiple private-label products on Amazon and needed reliable suppliers for various consumer goods categories.',
      solution: 'We established a dedicated sourcing team to handle multiple product categories, implemented a streamlined QC process, and managed all logistics from multiple suppliers.',
      results: [
        { metric: 'Products Launched', before: '0', after: '12', improvement: '12 products' },
        { metric: 'Average Lead Time', before: '45 days', after: '25 days', improvement: '44% faster' },
        { metric: 'Customer Reviews', before: '3.2 stars', after: '4.6 stars', improvement: '44% improvement' },
      ],
      testimonial: 'Having a dedicated sourcing partner has allowed me to focus on growing my business. SSourcing China handles all the China-side complexities.',
      image: 'ecommerce-fulfillment-center',
    },
    {
      id: 6,
      title: 'Automotive Parts Distributor from Brazil',
      category: 'Auto Parts',
      client: 'Brazilian auto parts distributor',
      duration: '10 months',
      challenge: 'The client needed to source automotive parts that met Brazilian regulatory requirements while maintaining competitive pricing.',
      solution: 'We identified suppliers with experience in the Brazilian market, ensured all products met local regulations, and managed the certification process.',
      results: [
        { metric: 'Regulatory Compliance', before: 'Partial', after: '100%', improvement: 'Full compliance' },
        { metric: 'Cost Reduction', before: 'Baseline', after: '18%', improvement: 'Annual savings' },
        { metric: 'Import Delays', before: '30%', after: '5%', improvement: '83% reduction' },
      ],
      testimonial: 'Navigating Brazilian regulations was complex. SSourcing China\'s expertise in compliance and certification was invaluable.',
      image: 'automotive-parts-warehouse',
    },
  ];

  return (
    <div className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              See how we've helped businesses across industries succeed with their China sourcing projects. Real results, real impact.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start Your Success Story
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-slate-200 relative">
                  <img
                    data-strk-img-id={`case-study-hero-${study.id}-8f2a9c`}
                    data-strk-img={`[case-study-title-${study.id}] [case-study-category-${study.id}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                      {study.category}
                    </span>
                    <span className="text-sm text-slate-500">{study.duration}</span>
                  </div>
                  <h2 id={`case-study-title-${study.id}`} className="text-2xl font-bold text-slate-900 mb-2">
                    {study.title}
                  </h2>
                  <p id={`case-study-category-${study.id}`} className="text-slate-600 mb-4">
                    {study.client}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Challenge</h3>
                    <p className="text-slate-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold text-slate-900 mb-2">Solution</h3>
                    <p className="text-slate-600 text-sm">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-slate-900 mb-3">Key Results</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-1">{result.after}</div>
                          <div className="text-xs text-slate-500 mb-1">{result.metric}</div>
                          <div className="text-xs text-green-600 font-medium">{result.improvement}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 border-l-4 border-blue-600">
                    <p className="text-slate-700 italic">"{study.testimonial}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Numbers that demonstrate our commitment to delivering results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-slate-600">Products Sourced</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you achieve similar results. Contact us today for a free consultation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
