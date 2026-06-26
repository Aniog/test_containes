import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  ArrowRight,
  Building2,
  ClipboardCheck,
  Truck,
  Star,
  ChevronRight,
} from 'lucide-react';

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const caseStudies = [
    {
      id: 1,
      client: 'European Home Decor Retailer',
      industry: 'Home & Garden',
      location: 'Germany',
      products: ['Ceramic planters', 'Decorative vases', 'Garden ornaments'],
      challenge: 'Needed to source 50,000 ceramic and porcelain items from verified factories within a tight 4-month timeline for their spring collection launch.',
      solution: 'We identified 8 potential manufacturers, conducted thorough factory audits, and selected 3 verified suppliers. Implemented a multi-stage QC process with inspections at greenware, bisque, and final glazing stages.',
      results: [
        'Delivered 50,000+ units on schedule',
        '99.4% quality pass rate',
        '28% cost reduction vs. previous supplier',
        'Zero customer complaints in first year',
      ],
      quote: 'SSourcing China transformed our China sourcing experience. The quality consistency and professional service exceeded our expectations.',
      author: 'Marketing Director',
      metrics: { suppliers: 3, inspections: 12, savings: '28%' },
    },
    {
      id: 2,
      client: 'North American Fitness Equipment Brand',
      industry: 'Sports & Outdoor',
      location: 'United States',
      products: ['Resistance bands', 'Yoga mats', 'Foam rollers'],
      challenge: 'Launching a new fitness brand required finding manufacturers that could meet FDA compliance requirements while maintaining competitive pricing.',
      solution: 'We screened 15 factories for relevant certifications, conducted social compliance audits, and selected suppliers with established export experience to North America. Implemented pre-shipment inspections with specific compliance checklists.',
      results: [
        '3 verified FDA-compliant suppliers',
        '100% compliance rate on all shipments',
        '35% lower landed costs',
        'Scalable production capacity verified',
      ],
      quote: 'Their verification process gave us confidence to scale quickly. We went from prototype to 50,000 units in just 5 months.',
      author: 'Founder & CEO',
      metrics: { suppliers: 3, inspections: 8, savings: '35%' },
    },
    {
      id: 3,
      client: 'Australian E-commerce Electronics Store',
      industry: 'Electronics',
      location: 'Australia',
      products: ['USB-C cables', 'Wireless chargers', 'Phone cases'],
      challenge: 'Required strict quality control to avoid the high return rates they experienced with previous suppliers. Needed products that would pass Australian safety standards.',
      solution: 'We found manufacturers with existing Australian market experience, conducted factory verification, and implemented AQL-based inspections with a focus on safety and durability testing.',
      results: [
        'Return rate reduced from 8% to 0.8%',
        'All products met AU safety standards',
        '45% improvement in profit margins',
        'Partnership with 2 reliable factories',
      ],
      quote: 'The ROI from their quality control alone paid for their services many times over. Highly recommended for any electronics importer.',
      author: 'Operations Manager',
      metrics: { suppliers: 2, inspections: 15, savings: '45%' },
    },
    {
      id: 4,
      client: 'UK Fashion Accessories Wholesaler',
      industry: 'Textiles & Apparel',
      location: 'United Kingdom',
      products: ['Leather bags', 'Wallets', 'Belt'],
      challenge: 'Sourcing premium leather goods at wholesale prices while ensuring consistent quality across multiple product lines and seasonal collections.',
      solution: 'Identified factories in Guangdong and Zhejiang provinces specializing in leather goods. Conducted material sourcing verification to ensure genuine leather and quality hardware. Implemented production monitoring with photo documentation.',
      results: [
        '4 new premium suppliers established',
        '97% repeat order rate',
        '30% cost savings achieved',
        'Faster time-to-market (8 weeks avg)',
      ],
      quote: 'They understand the fashion industry timeline. Our latest collection arrived perfectly, right on schedule for London Fashion Week.',
      author: 'Buyer',
      metrics: { suppliers: 4, inspections: 10, savings: '30%' },
    },
    {
      id: 5,
      client: 'Middle East Packaging Distributor',
      industry: 'Packaging',
      location: 'UAE',
      products: ['Food packaging', 'Cosmetic containers', 'Flexible packaging'],
      challenge: 'Needed halal-certified packaging materials with Arabic labeling for the GCC market. Required suppliers experienced with Middle Eastern import regulations.',
      solution: 'We verified factories with existing halal certification capabilities, coordinated with certification bodies, and ensured proper Arabic translation and labeling compliance. Managed complete documentation for customs clearance.',
      results: [
        'Halal certification obtained for 3 product lines',
        'Smooth customs clearance every time',
        '25% reduction in landed costs',
        'Long-term supplier partnerships formed',
      ],
      quote: 'Their understanding of Middle Eastern import requirements saved us months of delays. Professional service from start to finish.',
      author: 'Import Manager',
      metrics: { suppliers: 2, inspections: 6, savings: '25%' },
    },
    {
      id: 6,
      client: 'South African Industrial Equipment Company',
      industry: 'Machinery',
      location: 'South Africa',
      products: ['Industrial valves', 'Pumps', 'Pipe fittings'],
      challenge: 'Sourcing industrial components that met international quality standards and could withstand harsh operating conditions. Required detailed technical documentation.',
      solution: 'We identified manufacturers with ISO certifications and experience in similar markets. Conducted comprehensive factory audits including quality management systems review. Implemented third-party inspection with material testing.',
      results: [
        '2 ISO-certified suppliers established',
        'All products met international standards',
        'Technical documentation provided',
        '40% cost savings vs. European suppliers',
      ],
      quote: 'The technical expertise they brought to our sourcing was invaluable. We finally have reliable suppliers for our industrial needs.',
      author: 'Procurement Director',
      metrics: { suppliers: 2, inspections: 8, savings: '40%' },
    },
  ];

  const industries = ['all', 'Home & Garden', 'Electronics', 'Sports & Outdoor', 'Textiles & Apparel', 'Packaging', 'Machinery'];

  const filteredStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(study => study.industry === activeFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8e] to-[#1e3a5f] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Success Stories from Our Clients
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              See how we've helped businesses around the world overcome China sourcing challenges and achieve their goals. Each project demonstrates our commitment to quality, transparency, and results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-[#e2e8f0] sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto">
            <span className="text-sm font-medium text-[#4a5568] mr-2">Filter by industry:</span>
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setActiveFilter(industry)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeFilter === industry
                    ? 'bg-[#1e3a5f] text-white'
                    : 'bg-[#f7fafc] text-[#4a5568] hover:bg-[#edf2f7]'
                }`}
              >
                {industry === 'all' ? 'All Industries' : industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <article
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Header */}
                <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] p-8 text-white">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-[#e67e22] text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-gray-300">{study.location}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{study.client}</h2>
                  <div className="flex flex-wrap gap-2">
                    {study.products.map((product, i) => (
                      <span key={i} className="bg-white/10 text-sm px-3 py-1 rounded-full">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 bg-[#f7fafc] rounded-xl">
                      <div className="text-2xl font-bold text-[#1e3a5f]">{study.metrics.suppliers}</div>
                      <div className="text-xs text-[#4a5568]">Verified Suppliers</div>
                    </div>
                    <div className="text-center p-4 bg-[#f7fafc] rounded-xl">
                      <div className="text-2xl font-bold text-[#1e3a5f]">{study.metrics.inspections}</div>
                      <div className="text-xs text-[#4a5568]">QC Inspections</div>
                    </div>
                    <div className="text-center p-4 bg-[#f7fafc] rounded-xl">
                      <div className="text-2xl font-bold text-[#e67e22]">{study.metrics.savings}</div>
                      <div className="text-xs text-[#4a5568]">Cost Savings</div>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#1e3a5f] mb-2 flex items-center gap-2">
                      <Building2 size={18} className="text-[#e67e22]" />
                      The Challenge
                    </h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-[#1e3a5f] mb-2 flex items-center gap-2">
                      <ClipboardCheck size={18} className="text-[#e67e22]" />
                      Our Solution
                    </h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="bg-[#f7fafc] rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-[#1e3a5f] mb-3">Results Achieved</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {study.results.map((result, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Truck size={16} className="text-[#27ae60] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#4a5568]">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-[#e67e22] pl-4 mb-6">
                    <p className="text-[#4a5568] italic text-sm mb-2">"{study.quote}"</p>
                    <cite className="text-xs text-[#718096] not-italic">
                      — {study.author}, {study.client}
                    </cite>
                  </blockquote>

                  {/* CTA */}
                  <Link
                    to={`/contact?ref=case-study-${study.id}`}
                    className="inline-flex items-center gap-2 text-[#e67e22] hover:text-[#d35400] font-semibold text-sm transition-colors"
                  >
                    Get similar results for your business
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a5f] mb-4">
              Results That Speak for Themselves
            </h2>
            <p className="text-[#4a5568] text-lg">
              Our track record demonstrates consistent value delivery across industries and markets.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-2">200+</div>
              <div className="text-[#4a5568]">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-2">500+</div>
              <div className="text-[#4a5568]">Verified Suppliers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-2">35%</div>
              <div className="text-[#4a5568]">Average Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-2">99.5%</div>
              <div className="text-[#4a5568]">Quality Pass Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Join our satisfied clients and experience professional China sourcing services that deliver results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#e67e22] hover:bg-[#d35400] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
          >
            Start Your Project
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;