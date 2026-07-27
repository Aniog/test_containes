import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle, TrendingUp, Users, Clock } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const [activeFilter, setActiveFilter] = useState('All');

  const caseStudies = [
    {
      id: '1',
      client: 'Meridian Home Decor',
      industry: 'Home Decor',
      location: 'United Kingdom',
      challenge: 'A growing UK retail chain needed to source 50,000 units of decorative items with strict EU safety standards and tight delivery deadlines.',
      solution: 'We identified three verified factories, coordinated sample approvals, implemented a rigorous QC schedule, and managed all logistics.',
      results: [
        '35% cost reduction compared to previous supplier',
        '99.2% quality pass rate',
        'On-time delivery within deadline',
        'Full EU compliance documentation',
      ],
      quote: 'SSourcing China transformed our supply chain. We went from constant quality issues to smooth, professional operations.',
      author: 'James Wilson, Procurement Director',
      tag: 'Home Decor',
      stats: { savings: '35%', quality: '99.2%', timeline: '12 weeks' },
    },
    {
      id: '2',
      client: 'TechNova Solutions',
      industry: 'Consumer Electronics',
      location: 'United States',
      challenge: 'A hardware startup needed rapid prototyping and mass production for a new smart home device, with first-time China sourcing experience.',
      solution: 'We provided end-to-end support: supplier matching, prototype development, quality system setup, and production scaling.',
      results: [
        'First prototypes in 6 weeks',
        '10,000 units/month production capacity',
        'FCC and CE certifications obtained',
        '40% below target unit cost',
      ],
      quote: 'As first-timers in China sourcing, we were nervous. The team made everything simple and delivered beyond expectations.',
      author: 'Sarah Chen, CEO',
      tag: 'Electronics',
      stats: { savings: '40%', quality: '100%', timeline: '6 weeks' },
    },
    {
      id: '3',
      client: 'Summit Outdoor Co.',
      industry: 'Outdoor Equipment',
      location: 'Australia',
      challenge: 'After receiving defective goods from their previous supplier, they needed a reliable partner with Australian compliance expertise.',
      solution: 'Comprehensive factory verification, social compliance audit, quality control system implementation, and ongoing monitoring.',
      results: [
        '100% compliance with Australian standards',
        '40,000 units successfully delivered',
        'Zero quality complaints in 2 years',
        'Supplier performance score: 98%',
      ],
      quote: 'The difference is night and day. We now have complete confidence in our supply chain.',
      author: 'Michael Brown, Operations Manager',
      tag: 'Outdoor Gear',
      stats: { savings: '25%', quality: '100%', timeline: '16 weeks' },
    },
    {
      id: '4',
      client: 'EcoPackaging Global',
      industry: 'Packaging',
      location: 'Germany',
      challenge: 'A German company needed sustainable packaging suppliers that could meet EU environmental regulations at competitive pricing.',
      solution: 'We sourced eco-certified manufacturers, verified sustainability claims, and established quality controls for recycled materials.',
      results: [
        '100% EU environmental compliance',
        '30% cost savings achieved',
        'Certified sustainable materials',
        'Reliable monthly shipments',
      ],
      quote: 'Finding truly sustainable suppliers was challenging until we worked with SSourcing China.',
      author: 'Anna Mueller, Sustainability Lead',
      tag: 'Packaging',
      stats: { savings: '30%', quality: '100%', timeline: '10 weeks' },
    },
    {
      id: '5',
      client: 'Fashion Forward Inc.',
      industry: 'Apparel',
      location: 'Canada',
      challenge: 'A fashion retailer wanted to expand their private label collection with unique designs while keeping MOQs low.',
      solution: 'Connected them with flexible manufacturers offering low MOQs, assisted with design development, and implemented quick-turn production.',
      results: [
        'MOQ reduced from 1000 to 200 units',
        '12 new designs launched',
        '30% faster time-to-market',
        'Quality consistency maintained',
      ],
      quote: 'They helped us test new designs without massive inventory risk. Game changer for our business.',
      author: 'Lisa Park, Creative Director',
      tag: 'Apparel',
      stats: { savings: '20%', quality: '98%', timeline: '8 weeks' },
    },
    {
      id: '6',
      client: 'MediTech Devices',
      industry: 'Medical Devices',
      location: 'Netherlands',
      challenge: 'A medical device company needed ISO 13485 certified manufacturers for components with zero tolerance for defects.',
      solution: 'We conducted extensive supplier audits, implemented statistical process control, and established rigorous inspection protocols.',
      results: [
        'ISO 13485 certified suppliers found',
        'Zero defects in 18 months',
        'Full traceability maintained',
        ' regulatory documentation complete',
      ],
      quote: 'Medical-grade quality control is non-negotiable for us. They delivered without compromise.',
      author: 'Dr. Robert Jansen, Quality Director',
      tag: 'Medical',
      stats: { savings: '45%', quality: '100%', timeline: '20 weeks' },
    },
  ];

  const industries = ['All', 'Home Decor', 'Electronics', 'Outdoor Gear', 'Packaging', 'Apparel', 'Medical'];

  const filteredStudies = activeFilter === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.tag === activeFilter);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Real stories from businesses we've helped succeed with China sourcing. See how our expertise transforms challenges into results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3">
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === industry
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="space-y-12">
            {filteredStudies.map((study, index) => (
              <div key={study.id} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                        {study.tag}
                      </span>
                      <span className="text-slate-500 text-sm">{study.location}</span>
                    </div>
                    <h2 className="heading-2 mb-2">{study.client}</h2>
                    <p className="text-slate-500 mb-6">{study.industry}</p>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">The Challenge</h4>
                        <p className="text-slate-600 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Our Solution</h4>
                        <p className="text-slate-600 text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result) => (
                            <li key={result} className="flex items-start gap-2 text-slate-600 text-sm">
                              <CheckCircle className="w-4 h-4 text-accent-500 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-primary-300 pl-4 mb-6">
                      <p className="text-slate-600 italic mb-2">"{study.quote}"</p>
                      <cite className="text-sm text-slate-500 not-italic">— {study.author}</cite>
                    </blockquote>
                  </div>

                  <div className={`bg-slate-100 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="p-8 lg:p-12 h-full flex flex-col justify-between">
                      <img
                        alt={study.client}
                        data-strk-img-id={`casestudy-${study.id}-001`}
                        data-strk-img={`${study.client} [casestudy-${study.id}-title] ${study.industry}`}
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="600"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full rounded-xl mb-6"
                      />
                      <h3 id={`casestudy-${study.id}-title`} className="sr-only">{study.client}</h3>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg p-4 text-center">
                          <TrendingUp className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-slate-900">{study.stats.savings}</div>
                          <div className="text-xs text-slate-500">Cost Savings</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center">
                          <CheckCircle className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-slate-900">{study.stats.quality}</div>
                          <div className="text-xs text-slate-500">Quality Pass</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center">
                          <Clock className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-slate-900">{study.stats.timeline}</div>
                          <div className="text-xs text-slate-500">Timeline</div>
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

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Join hundreds of businesses who've transformed their China sourcing with us.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
