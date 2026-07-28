import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, Users, Package, TrendingUp, ArrowRight, CheckCircle,
  Mail, Quote, Star
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CaseStudies = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  React.useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  const caseStudies = [
    {
      id: 1,
      tag: 'Home Goods',
      title: 'US Retailer Sources Home Furnishings Collection',
      client: 'Mid-size furniture retailer from United States',
      duration: '18 months partnership',
      challenge: 'Needed to source 500+ SKUs of home furnishings from multiple factories while maintaining consistent quality across the entire collection.',
      solution: 'We identified and vetted 12 specialized factories, established quality control protocols, and coordinated production schedules to meet seasonal deadlines.',
      results: [
        '30% reduction in sourcing costs',
        '98% on-time delivery rate',
        'Zero quality complaints in first year',
        'Successful expansion to 3 product categories',
      ],
      testimonial: 'SSourcing China transformed our supply chain. Their attention to detail and proactive communication made sourcing from China surprisingly smooth.',
      author: 'James Mitchell',
      role: 'CEO, HomeStyle Furnishings',
      stats: { value: '500+', label: 'SKUs Sourced' },
    },
    {
      id: 2,
      tag: 'Electronics',
      title: 'German Tech Startup Launches Consumer Electronics',
      client: 'Hardware startup from Germany',
      duration: '4 months to market',
      challenge: 'Limited budget required finding reliable OEM partners who could deliver prototype-to-production within tight timelines.',
      solution: 'We connected them with established electronics manufacturers, oversaw prototype development, and managed quality verification through production.',
      results: [
        'Product launch achieved in 4 months',
        'Manufacturing costs 40% below Western quotes',
        '100% quality pass rate on first batch',
        'Established foundation for scale-up',
      ],
      testimonial: 'Their expertise in electronics manufacturing saved us months of trial and error. We could not have launched without their support.',
      author: 'Stefan Weber',
      role: 'Founder, TechNova GmbH',
      stats: { value: '40%', label: 'Cost Savings' },
    },
    {
      id: 3,
      tag: 'Textiles',
      title: 'Australian Fashion Brand Expands with Sustainable Apparel',
      client: 'Sustainable fashion brand from Australia',
      duration: 'Ongoing partnership',
      challenge: 'Required GOTS-certified manufacturing with transparent supply chain and ethical production practices.',
      solution: 'We identified certified sustainable factories, implemented traceability systems, and provided regular social compliance audits.',
      results: [
        'GOTS-certified production established',
        '25% business growth in 2 years',
        'Complete supply chain transparency',
        'Carbon footprint reduced by 30%',
      ],
      testimonial: 'Finding truly sustainable partners seemed impossible until we worked with SSourcing China. They understood our values and found factories that shared them.',
      author: 'Sarah Thompson',
      role: 'Sustainability Director, EcoWear',
      stats: { value: '25%', label: 'Growth' },
    },
    {
      id: 4,
      tag: 'Machinery',
      title: 'Canadian Company Sources Industrial Equipment',
      client: 'Industrial equipment distributor from Canada',
      duration: '6 months project',
      challenge: 'Needed custom-engineered equipment from multiple suppliers with precise specifications and strict quality requirements.',
      solution: 'We coordinated with engineering teams on both sides, managed prototype iterations, and implemented rigorous quality inspections.',
      results: [
        'Custom specs met exactly',
        '50% savings vs. Western manufacturing',
        'Full documentation and certifications',
        'Repeat orders placed within first year',
      ],
      testimonial: 'The technical expertise they brought to the table was invaluable. They understood our requirements and delivered beyond expectations.',
      author: 'Robert Chen',
      role: 'Procurement Manager, IndustrialTech',
      stats: { value: '50%', label: 'Cost Savings' },
    },
    {
      id: 5,
      tag: 'Packaging',
      title: 'UK Brand Launches Premium Cosmetic Packaging',
      client: 'Luxury cosmetics brand from United Kingdom',
      duration: '3 months development',
      challenge: 'Required premium finishing techniques (hot stamping, embossing) with tight quality standards for luxury retail.',
      solution: 'We sourced specialized packaging manufacturers, conducted material testing, and oversaw production with attention to every detail.',
      results: [
        'Premium quality achieved',
        'Retail shelf placement secured',
        'Production costs reduced by 35%',
        'Successful partnership continues',
      ],
      testimonial: 'They treated our brand like their own. The quality of packaging exceeded our expectations and helped elevate our product positioning.',
      author: 'Emma Richardson',
      role: 'Brand Manager, Luxe Cosmetics',
      stats: { value: '35%', label: 'Cost Reduction' },
    },
    {
      id: 6,
      tag: 'Health & Beauty',
      title: 'Brazilian Retailer Imports Health Supplements',
      client: 'Health supplements retailer from Brazil',
      duration: '8 months partnership',
      challenge: 'Navigating complex import regulations while ensuring GMP-certified manufacturing and timely delivery.',
      solution: 'We identified GMP-certified manufacturers, coordinated regulatory documentation, and managed the entire shipping process.',
      results: [
        'All regulatory requirements met',
        'Products delivered on schedule',
        '100% compliance with Brazilian ANVISA',
        'Market expansion enabled',
      ],
      testimonial: 'Their knowledge of regulations and manufacturing standards gave us confidence to enter the market. Exceptional service from start to finish.',
      author: 'Carlos Santos',
      role: 'Director, VitaSaude',
      stats: { value: '100%', label: 'Compliance' },
    },
  ];

  const filters = ['all', 'Home Goods', 'Electronics', 'Textiles', 'Machinery', 'Packaging', 'Health & Beauty'];

  const filteredCases = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(c => c.tag === activeFilter);

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 md:py-28">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-blue-100">
              See how we've helped businesses worldwide achieve their China sourcing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="section-container py-4">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {filter === 'all' ? 'All Industries' : filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="space-y-12">
            {filteredCases.map((study) => (
              <div key={study.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-3">
                  {/* Sidebar */}
                  <div className="bg-gray-50 p-8 lg:border-r border-gray-200">
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-4">
                      {study.tag}
                    </span>
                    <div className="mb-6">
                      <div className="text-5xl font-bold text-blue-600 mb-2">{study.stats.value}</div>
                      <div className="text-gray-600">{study.stats.label}</div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-3">
                        <Building className="w-4 h-4 text-gray-400 mt-1" />
                        <div>
                          <div className="font-medium text-gray-900">{study.client}</div>
                          <div className="text-gray-500">Client</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Package className="w-4 h-4 text-gray-400 mt-1" />
                        <div>
                          <div className="font-medium text-gray-900">{study.duration}</div>
                          <div className="text-gray-500">Duration</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="lg:col-span-2 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">The Challenge</h4>
                        <p className="text-gray-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Our Solution</h4>
                        <p className="text-gray-600">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Results Achieved</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {study.results.map((result, index) => (
                            <div key={index} className="flex items-start gap-2 text-gray-700">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              {result}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="mt-8 bg-blue-50 rounded-xl p-6">
                      <Quote className="w-8 h-8 text-blue-300 mb-3" />
                      <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                          <span className="text-blue-700 font-semibold">{study.author[0]}</span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{study.author}</div>
                          <div className="text-sm text-gray-500">{study.role}</div>
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
      <section className="section-padding bg-blue-600 text-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-blue-100 text-lg mb-8">
              Join hundreds of businesses who trust us with their China sourcing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
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
