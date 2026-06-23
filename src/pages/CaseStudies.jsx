import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Clock, Shield, Users, Globe, Award } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'European Retail Chain',
    industry: 'Home Goods',
    location: 'Germany',
    challenge: 'Needed reliable suppliers for 50+ SKUs across multiple product categories. Previous sourcing attempts resulted in quality issues and missed deadlines.',
    approach: 'We conducted comprehensive factory audits across 4 provinces, verified production capabilities, and implemented a rigorous QC protocol. We also negotiated volume discounts.',
    result: 'Sourced 12 verified factories, established consistent quality standards, and saved 23% on procurement costs through strategic supplier selection.',
    metric: '23% Cost Savings',
    metricLabel: 'Reduction in procurement costs',
    timeline: '4 months',
    suppliers: 12,
    categories: 8,
  },
  {
    id: 2,
    client: 'US Tech Startup',
    industry: 'Electronics',
    location: 'United States',
    challenge: 'First-time sourcing from China with limited experience. Needed to bring a new smart home product to market quickly while ensuring quality.',
    approach: 'We provided end-to-end support from factory selection to delivery. This included supplier verification, sample development, production monitoring, and logistics coordination.',
    result: 'Successfully launched product in 6 weeks from initial inquiry to delivery. Zero quality issues reported in first 10,000 units.',
    metric: '6 Weeks',
    metricLabel: 'From inquiry to delivery',
    timeline: '6 weeks',
    suppliers: 3,
    categories: 1,
  },
  {
    id: 3,
    client: 'Australian Distributor',
    industry: 'Outdoor Products',
    location: 'Australia',
    challenge: 'Experienced consistent quality issues with previous suppliers. Defect rate of 15% was unacceptable for their retail partners.',
    approach: 'We implemented a comprehensive QC program including during-production inspections and pre-shipment checks. We also worked with factories to improve their quality management systems.',
    result: 'Reduced defect rate from 15% to 0.5%. Maintained 99.5% quality rate over 2 years of partnership.',
    metric: '99.5% Quality Rate',
    metricLabel: 'Defect-free shipments',
    timeline: '8 weeks',
    suppliers: 2,
    categories: 3,
  },
  {
    id: 4,
    client: 'UK Fashion Brand',
    industry: 'Apparel',
    location: 'United Kingdom',
    challenge: 'Needed to source sustainable fashion products from China. Required factories with ethical certifications and transparent supply chains.',
    approach: 'We identified factories with relevant certifications (OEKO-TEX, BSCI, SEDEX), conducted ethical audits, and established traceability protocols.',
    result: 'Established partnerships with 4 certified factories. Successfully launched sustainable fashion line with full supply chain transparency.',
    metric: '4 Factories',
    metricLabel: 'Certified ethical suppliers',
    timeline: '3 months',
    suppliers: 4,
    categories: 2,
  },
  {
    id: 5,
    client: 'Canadian E-commerce Business',
    industry: 'Consumer Goods',
    location: 'Canada',
    challenge: 'Sourcing various products for online retail. Needed competitive pricing while maintaining quality for customer satisfaction.',
    approach: 'We built a diversified supplier network, negotiated favorable terms, and implemented quality checks at multiple production stages.',
    result: 'Achieved 35% margin improvement while maintaining 4.8/5 customer satisfaction rating. Scaled from 10 to 200+ SKUs.',
    metric: '35% Margin Improvement',
    metricLabel: 'Increased profitability',
    timeline: '6 months',
    suppliers: 15,
    categories: 12,
  },
  {
    id: 6,
    client: 'French Industrial Company',
    industry: 'Machinery',
    location: 'France',
    challenge: 'Needed specialized industrial components with precise specifications. Required suppliers with technical expertise and certification.',
    approach: 'We identified manufacturers with relevant experience, conducted technical capability assessments, and facilitated direct communication between engineering teams.',
    result: 'Found 2 suppliers meeting exact specifications. Reduced component costs by 28% while improving quality beyond previous suppliers.',
    metric: '28% Cost Reduction',
    metricLabel: 'On industrial components',
    timeline: '5 months',
    suppliers: 2,
    categories: 1,
  },
];

const stats = [
  { icon: TrendingUp, value: '23%', label: 'Average Cost Savings' },
  { icon: Clock, value: '6 weeks', label: 'Average Time to Delivery' },
  { icon: Shield, value: '99.5%', label: 'Quality Pass Rate' },
  { icon: Users, value: '500+', label: 'Clients Served' },
];

const industries = ['All', 'Home Goods', 'Electronics', 'Outdoor Products', 'Apparel', 'Consumer Goods', 'Machinery'];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] py-20 lg:py-28">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Case Studies
            </h1>
            <p className="mt-6 text-xl text-gray-200">
              Real results from real clients. See how we've helped businesses 
              overcome sourcing challenges and achieve their goals.
            </p>
          </div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#1E3A5F]">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-[#F97316] mx-auto" />
                <div className="mt-2 text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <div 
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Main Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#F97316]/10 text-[#F97316] text-sm font-medium rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-sm text-gray-500 flex items-center">
                        <Globe className="w-4 h-4 mr-1" />
                        {study.location}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900">
                      {study.client}
                    </h2>
                    
                    <div className="mt-6 space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                          Challenge
                        </h3>
                        <p className="mt-2 text-gray-600">{study.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                          Our Approach
                        </h3>
                        <p className="mt-2 text-gray-600">{study.approach}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
                          Result
                        </h3>
                        <p className="mt-2 text-gray-600">{study.result}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sidebar */}
                  <div className="bg-gray-50 p-8 lg:border-l border-gray-100">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#1E3A5F]">{study.metric}</div>
                      <div className="mt-1 text-sm text-gray-600">{study.metricLabel}</div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-xl font-bold text-gray-900">{study.suppliers}</div>
                          <div className="text-xs text-gray-500">Suppliers</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900">{study.categories}</div>
                          <div className="text-xs text-gray-500">Categories</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-gray-900">{study.timeline}</div>
                          <div className="text-xs text-gray-500">Timeline</div>
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
      <section className="py-20 lg:py-28 bg-[#1E3A5F]">
        <div className="max-w-1200px mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Write Your Success Story?
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results. 
            Get in touch for a free consultation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F97316] text-white font-semibold rounded-lg hover:bg-[#EA580C] transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;