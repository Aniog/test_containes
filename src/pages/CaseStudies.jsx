import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, TrendingUp, Users, Clock,
  DollarSign, Package, Star
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';



const CaseStudies = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  


  const caseStudies = [
    {
      id: 'home-decor-retailer',
      client: 'European Home Decor Retailer',
      industry: 'Home & Garden',
      location: 'Germany',
      challenge: 'A mid-sized German retailer needed to source 50,000 units across 200 SKUs for their spring collection. Previous attempts through trading companies resulted in quality inconsistencies and missed delivery deadlines.',
      solution: 'SSourcing China conducted a comprehensive sourcing project: identifying 8 verified factories, implementing a standardized QC system, and coordinating consolidated shipping from multiple suppliers.',
      results: [
        { label: 'Cost Savings', value: '40%', icon: DollarSign },
        { label: 'Quality Pass Rate', value: '98.5%', icon: CheckCircle },
        { label: 'On-Time Delivery', value: '100%', icon: Clock },
        { label: 'SKUs Managed', value: '200', icon: Package }
      ],
      testimonial: {
        quote: 'SSourcing China transformed our China sourcing from a constant headache into a reliable operation. The quality consistency and cost savings exceeded our expectations.',
        author: 'Michael Hoffman',
        role: 'Procurement Director',
        company: 'Haus & Garten GmbH'
      },
      image: 'case-study-home-decor'
    },
    {
      id: 'electronics-startup',
      client: 'US Consumer Electronics Startup',
      industry: 'Electronics',
      location: 'United States',
      challenge: 'A San Francisco startup launching their first smart home product needed to find reliable suppliers without prior China experience. They needed help with everything from supplier identification to production management.',
      solution: 'Complete end-to-end sourcing package: supplier identification and verification, sample management and testing, production monitoring, pre-shipment inspections, and logistics coordination.',
      results: [
        { label: 'Time to Market', value: '4 months', icon: Clock },
        { label: 'Quality Pass Rate', value: '99.2%', icon: CheckCircle },
        { label: 'Cost vs. Target', value: '12% under', icon: TrendingUp },
        { label: 'Products Launched', value: '12', icon: Package }
      ],
      testimonial: {
        quote: 'As first-timers with China sourcing, we were nervous. SSourcing China made the entire process manageable and helped us launch on schedule with excellent quality.',
        author: 'Sarah Chen',
        role: 'Founder & CEO',
        company: 'SmartLife Technologies'
      },
      image: 'case-study-electronics'
    },
    {
      id: 'apparel-brand',
      client: 'Canadian Apparel Brand',
      industry: 'Apparel',
      location: 'Canada',
      challenge: 'A Vancouver-based activewear brand needed to scale production while maintaining strict quality standards for their premium product line. They needed suppliers who could handle smaller MOQs with consistent quality.',
      solution: 'Identified and verified 4 factories with flexible MOQ capabilities. Implemented comprehensive QC at each production stage with detailed photo documentation and weekly progress reports.',
      results: [
        { label: 'MOQ Flexibility', value: '500/unit', icon: Package },
        { label: 'Quality Score', value: '97%', icon: Star },
        { label: 'Production Time', value: '8 weeks', icon: Clock },
        { label: 'Repeat Orders', value: '8x', icon: Users }
      ],
      testimonial: {
        quote: 'The flexibility with MOQs and the attention to quality details made all the difference. We\'ve since expanded to 3 more product lines with their support.',
        author: 'Jennifer Park',
        role: 'Operations Manager',
        company: 'Peak Performance Apparel'
      },
      image: 'case-study-apparel'
    }
  ];

  const stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '15+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50M+', label: 'Orders Managed' }
  ];

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real results for businesses sourcing from China. See how we've helped companies overcome sourcing challenges and achieve their goals.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2 text-lg">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-gray-200 border-2 border-dashed rounded-2xl m-6 h-80 lg:m-0 flex items-center justify-center">
                    <img
                     
                     
                     
                     
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%23e5e7eb' width='800' height='450'/%3E%3Ctext x='400' y='200' font-family='system-ui' font-size='20' fill='%239ca3af' text-anchor='middle'%3E{study.client}%3C/text%3E%3C/svg%3E"
                      alt={study.client}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {study.location}
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{study.client}</h2>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Challenge</h3>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-1">Solution</h3>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {study.results.map((result, i) => (
                        <div key={i} className="bg-blue-50 rounded-lg p-3 text-center">
                          <result.icon className="w-5 h-5 text-blue-600 mx-auto mb-1" />
                          <div className="text-xl font-bold text-blue-600">{result.value}</div>
                          <div className="text-xs text-gray-600">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial */}
                <div className="bg-slate-900 text-white p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl text-blue-400 font-serif">"</div>
                    <div>
                      <p className="text-lg text-gray-200 italic mb-4">{study.testimonial.quote}</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">{study.testimonial.author.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-semibold">{study.testimonial.author}</div>
                          <div className="text-sm text-gray-400">{study.testimonial.role}, {study.testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free consultation and see how we can help your business succeed with China sourcing.
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
