import { Link } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, Clock, Award, Building2,
  Users, DollarSign, Package, Star
} from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import CTASection from '../components/common/CTASection';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 'electronics-retailer',
      title: 'US Electronics Retailer Achieves 40% Cost Savings',
      client: 'Mid-size electronics retailer',
      industry: 'Electronics',
      duration: '6 months',
      challenge: 'A US-based electronics retailer was struggling with inconsistent product quality and high costs when sourcing directly from China. They needed a reliable partner to help verify suppliers and ensure quality.',
      solution: 'We conducted thorough supplier verification, identified 3 qualified factories, and implemented a comprehensive QC program with pre-shipment inspections.',
      results: [
        { metric: '40%', label: 'Cost Reduction' },
        { metric: '99.2%', label: 'Quality Pass Rate' },
        { metric: '6', label: 'Months Partnership' },
        { metric: '50+', label: 'SKUs Sourced' },
      ],
      quote: 'SSourcing China transformed our supply chain. The quality improvements alone saved us thousands in returns.',
      author: 'Operations Director',
    },
    {
      id: 'furniture-brand',
      title: 'Furniture Brand Launches Successfully in 3 Months',
      client: 'European home goods brand',
      industry: 'Home Goods',
      duration: '3 months',
      challenge: 'A growing European furniture brand needed to establish a reliable sourcing operation from scratch within a tight timeline to meet their retail launch deadline.',
      solution: 'We provided end-to-end sourcing, from factory identification to production monitoring, QC, and coordinated shipping to their European warehouse.',
      results: [
        { metric: '3', label: 'Months to Launch' },
        { metric: '100%', label: 'On-Time Delivery' },
        { metric: '25+', label: 'Product Lines' },
        { metric: '35%', label: 'Cost Savings' },
      ],
      quote: 'From concept to delivery in 90 days - we couldn\'t have done it without SSourcing China.',
      author: 'Founder',
    },
    {
      id: 'apparel-company',
      title: 'Apparel Company Scales with Reliable Supply Chain',
      client: 'North American fashion company',
      industry: 'Textiles',
      duration: 'Ongoing',
      challenge: 'A fast-growing fashion company needed to scale production without compromising quality. Their previous suppliers couldn\'t keep up with demand while maintaining consistent quality standards.',
      solution: 'We audited existing factories, identified additional capacity, and established a multi-supplier network with integrated QC protocols.',
      results: [
        { metric: '200%', label: 'Production Scale' },
        { metric: '98%', label: 'Client Satisfaction' },
        { metric: '15+', label: 'Active Suppliers' },
        { metric: '3+', label: 'Years Partnership' },
      ],
      quote: 'The consistency and reliability we\'ve achieved has been game-changing for our business.',
      author: 'Supply Chain Manager',
    },
  ];

  const industries = [
    { name: 'Electronics', icon: <Package className="w-6 h-6" />, count: 45 },
    { name: 'Textiles', icon: <Building2 className="w-6 h-6" />, count: 38 },
    { name: 'Home Goods', icon: <Building2 className="w-6 h-6" />, count: 32 },
    { name: 'Machinery', icon: <Package className="w-6 h-6" />, count: 28 },
    { name: 'Packaging', icon: <Package className="w-6 h-6" />, count: 21 },
    { name: 'Industrial', icon: <Package className="w-6 h-6" />, count: 19 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2d4a6f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-[#94a3b8]">
              See how we've helped businesses across industries source products from China with confidence and success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-12 bg-white border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '200+', label: 'Clients Served' },
              { value: '$50M+', label: 'Orders Managed' },
              { value: '98%', label: 'Success Rate' },
              { value: '50+', label: 'Countries' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1e3a5f]">{stat.value}</div>
                <div className="text-sm text-[#64748b] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <article key={study.id} className="bg-white border border-[#e2e8f0] rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-3 p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-medium text-[#1e3a5f] bg-[#1e3a5f]/10 px-3 py-1 rounded-full">
                        {study.industry}
                      </span>
                      <span className="flex items-center text-xs text-[#64748b]">
                        <Clock className="w-3 h-3 mr-1" />
                        {study.duration}
                      </span>
                    </div>
                    <h2 className="text-2xl font-bold text-[#0f172a] mb-2">{study.title}</h2>
                    <p className="text-sm text-[#64748b] mb-6">
                      Client: {study.client}
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h3 className="font-semibold text-[#0f172a] mb-2">The Challenge</h3>
                        <p className="text-sm text-[#475569]">{study.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0f172a] mb-2">Our Solution</h3>
                        <p className="text-sm text-[#475569]">{study.solution}</p>
                      </div>
                    </div>

                    <blockquote className="bg-[#f8fafc] rounded-xl p-4 border-l-4 border-[#1e3a5f]">
                      <p className="text-[#475569] italic mb-2">"{study.quote}"</p>
                      <cite className="text-sm font-medium text-[#64748b]">— {study.author}</cite>
                    </blockquote>
                  </div>
                  
                  <div className="lg:col-span-2 bg-[#f8fafc] p-8 border-l border-[#e2e8f0]">
                    <h3 className="font-semibold text-[#0f172a] mb-6">Results</h3>
                    <div className="grid grid-cols-2 gap-6">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div className="text-3xl font-bold text-[#1e3a5f]">{result.metric}</div>
                          <div className="text-xs text-[#64748b] mt-1">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8">
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-[#1e3a5f] font-medium text-sm hover:underline"
                      >
                        Get similar results
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Industries We Serve"
            subtitle="We've helped businesses across various sectors achieve their sourcing goals"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="card flex items-center">
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-[#1e3a5f] mr-4">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f172a]">{industry.name}</h3>
                  <p className="text-sm text-[#64748b]">{industry.count}+ projects</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Write Your Success Story?"
        subtitle="Join the 200+ businesses that trust us with their China sourcing."
        buttonText="Start Your Project"
        buttonLink="/contact"
        features={[
          'Free consultation',
          'No commitment required',
          'Tailored solutions',
        ]}
      />
    </div>
  );
};

export default CaseStudies;
