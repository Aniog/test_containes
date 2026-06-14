import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Package, Clock, DollarSign, Users } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const caseStudies = [
    {
      title: 'Electronics Retailer Expands Product Line',
      client: 'European Electronics Brand',
      industry: 'Electronics',
      duration: '4 months',
      challenge: 'A growing European electronics retailer needed to expand their product line with 15 new product categories but lacked the expertise to verify suppliers and manage quality across multiple factories.',
      solution: 'We identified and verified 20+ suitable factories, coordinated samples for approval, and implemented a comprehensive quality control program across all suppliers.',
      results: [
        { label: 'Product Categories', value: '15', icon: <Package className="w-5 h-5" /> },
        { label: 'Cost Reduction', value: '40%', icon: <DollarSign className="w-5 h-5" /> },
        { label: 'Defect Rate', value: '0.1%', icon: <CheckCircle className="w-5 h-5" /> },
        { label: 'Suppliers Verified', value: '20+', icon: <Users className="w-5 h-5" /> }
      ],
      testimonial: {
        text: 'SSourcing China transformed our sourcing operations. We went from struggling with quality issues to having a reliable supply chain across multiple product lines.',
        author: 'Managing Director',
        company: 'European Electronics Brand'
      }
    },
    {
      title: 'Home Goods Startup Launches Successfully',
      client: 'US-based Home Decor Company',
      industry: 'Home & Garden',
      duration: '6 months',
      challenge: 'A US startup launching a new home decor brand needed to source 5,000 units of initial inventory within a tight timeline and budget, with no prior China sourcing experience.',
      solution: 'We provided end-to-end sourcing from supplier verification to door-to-door delivery, including sample approval, production monitoring, and consolidated shipping.',
      results: [
        { label: 'Units Delivered', value: '5,000', icon: <Package className="w-5 h-5" /> },
        { label: 'On-Time Delivery', value: '100%', icon: <Clock className="w-5 h-5" /> },
        { label: 'Budget Status', value: 'Under', icon: <DollarSign className="w-5 h-5" /> },
        { label: 'Client Satisfaction', value: '100%', icon: <CheckCircle className="w-5 h-5" /> }
      ],
      testimonial: {
        text: 'Without their expertise, we would never have been able to launch on time. The quality exceeded our expectations and the entire process was seamless.',
        author: 'Founder',
        company: 'US Home Decor Startup'
      }
    },
    {
      title: 'Industrial Parts Supplier Streamlines Operations',
      client: 'Middle East Industrial Distributor',
      industry: 'Industrial',
      duration: '8 months',
      challenge: 'An industrial parts distributor was dealing with inconsistent quality and delayed shipments from multiple suppliers, affecting their relationships with end customers.',
      solution: 'We consolidated their supplier base, implemented standardized quality inspections, and established reliable logistics channels with consistent lead times.',
      results: [
        { label: 'Suppliers Consolidated', value: '12→4', icon: <Users className="w-5 h-5" /> },
        { label: 'Quality Improvement', value: '95%', icon: <CheckCircle className="w-5 h-5" /> },
        { label: 'Lead Time Reduction', value: '30%', icon: <Clock className="w-5 h-5" /> },
        { label: 'Cost Savings', value: '25%', icon: <DollarSign className="w-5 h-5" /> }
      ],
      testimonial: {
        text: 'The professionalism and attention to detail from SSourcing China has been exceptional. Our supply chain is now reliable and our customers have noticed the improvement.',
        author: 'Operations Director',
        company: 'Middle East Industrial Distributor'
      }
    },
    {
      title: 'Fashion Brand Launches Private Label Line',
      client: 'Canadian Fashion Retailer',
      industry: 'Textiles & Apparel',
      duration: '5 months',
      challenge: 'A Canadian fashion retailer wanted to launch a private label clothing line but needed help navigating the complexities of textile sourcing, MOQ requirements, and quality standards.',
      solution: 'We connected them with verified garment factories, coordinated fabric sourcing, managed sample development, and supervised production with inline quality checks.',
      results: [
        { label: 'SKUs Launched', value: '45', icon: <Package className="w-5 h-5" /> },
        { label: 'First Order', value: '8,000 pcs', icon: <Package className="w-5 h-5" /> },
        { label: 'Quality Pass Rate', value: '99%', icon: <CheckCircle className="w-5 h-5" /> },
        { label: 'Time to Market', value: '5 months', icon: <Clock className="w-5 h-5" /> }
      ],
      testimonial: {
        text: 'They understood our vision from day one and delivered a product line that exceeded our quality standards. Our customers love the new private label range.',
        author: 'Creative Director',
        company: 'Canadian Fashion Retailer'
      }
    }
  ];

  const stats = [
    { value: '500+', label: 'Successful Projects' },
    { value: '50+', label: 'Countries Served' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '$50M+', label: 'Products Sourced' }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-primary-900 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-lg lg:text-xl text-neutral-300">
              See how we've helped businesses across the globe successfully source products from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-neutral-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="text-sm text-primary-600 font-medium mb-2">{study.industry}</div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-2">{study.title}</h2>
                  <p className="text-lg text-neutral-500 mb-6">{study.client} • {study.duration}</p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">The Challenge</h3>
                      <p className="text-neutral-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">Our Solution</h3>
                      <p className="text-neutral-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-4">Results</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="bg-neutral-50 rounded-lg p-4">
                            <div className="flex items-center gap-2 text-primary-600 mb-1">
                              {result.icon}
                              <span className="text-xl font-bold">{result.value}</span>
                            </div>
                            <p className="text-sm text-neutral-600">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`bg-neutral-100 rounded-2xl overflow-hidden aspect-video ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div 
                    className="w-full h-full"
                    data-strk-bg-id={`case-study-${index}-img`}
                    data-strk-bg={`[${study.title}]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.slice(0, 2).map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm">
                <p className="text-lg text-neutral-700 italic mb-6">"{study.testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-neutral-900">{study.testimonial.author}</p>
                  <p className="text-sm text-neutral-600">{study.testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Let us help you build a reliable sourcing operation for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-lg hover:bg-primary-50 transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
