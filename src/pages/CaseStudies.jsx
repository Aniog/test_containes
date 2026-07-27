import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  TrendingUp, 
  Clock, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  Package
} from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      client: 'European Home Goods Retailer',
      industry: 'Home Furnishings',
      location: 'Germany',
      challenge: 'Needed to source 50,000 units of home decor products within a tight 3-month deadline while maintaining premium quality standards.',
      approach: 'We identified 3 pre-vetted suppliers, conducted thorough quality assessments, and coordinated parallel production to meet the timeline.',
      result: 'Delivered on schedule with 98% quality pass rate. The client saved 15% compared to their previous supplier.',
      metrics: [
        { label: 'Order Size', value: '50,000 units' },
        { label: 'Timeline', value: '3 months' },
        { label: 'Quality Pass Rate', value: '98%' },
        { label: 'Cost Savings', value: '15%' },
      ],
      image: 'home-furnishings',
    },
    {
      id: 2,
      client: 'US Technology Startup',
      industry: 'Electronics',
      location: 'United States',
      challenge: 'Required custom electronic components with specific quality certifications (UL, FCC) for a new product launch.',
      approach: 'We matched them with an ISO 9001 certified factory experienced in export to the US market, and coordinated the certification process.',
      result: 'First order of 10,000 units completed successfully. Product received all required certifications on first attempt.',
      metrics: [
        { label: 'Order Size', value: '10,000 units' },
        { label: 'Certifications', value: 'UL, FCC' },
        { label: 'Success Rate', value: '100%' },
        { label: 'Time to Market', value: '4 months' },
      ],
      image: 'electronics-manufacturing',
    },
    {
      id: 3,
      client: 'Australian Outdoor Products Distributor',
      industry: 'Outdoor & Sports',
      location: 'Australia',
      challenge: 'Sourcing outdoor equipment while ensuring competitive pricing and consistent quality across multiple product lines.',
      approach: 'We consolidated orders across their product lines, negotiated volume discounts, and implemented a rigorous QC process.',
      result: 'Achieved 18% cost reduction while maintaining premium quality. Now a repeat client for 3 years with quarterly orders.',
      metrics: [
        { label: 'Product Lines', value: '5' },
        { label: 'Cost Reduction', value: '18%' },
        { label: 'Client Since', value: '3 years' },
        { label: 'Order Frequency', value: 'Quarterly' },
      ],
      image: 'outdoor-equipment',
    },
    {
      id: 4,
      client: 'UK Fashion Brand',
      industry: 'Apparel & Textiles',
      location: 'United Kingdom',
      challenge: 'Needed sustainable, ethically manufactured clothing with traceable supply chain for their eco-friendly product line.',
      approach: 'We verified factories for ethical certifications (SA8000), arranged organic cotton sourcing, and established traceability documentation.',
      result: 'Successfully launched the sustainable line. Factory passed independent ethical audits. Customer satisfaction increased by 25%.',
      metrics: [
        { label: 'Certifications', value: 'GOTS, OCS' },
        { label: 'Factory Audits', value: 'Passed' },
        { label: 'Customer Increase', value: '25%' },
        { label: 'Product Range', value: '12 items' },
      ],
      image: 'sustainable-apparel',
    },
    {
      id: 5,
      client: 'Canadian Industrial Equipment Company',
      industry: 'Machinery',
      location: 'Canada',
      challenge: 'Sourcing specialized industrial machinery parts with precise specifications and tight tolerances.',
      approach: 'We worked with factories specializing in precision manufacturing, conducted in-process inspections, and arranged third-party testing.',
      result: 'All parts met exact specifications. Zero defects in first production run. Client expanded order to include 3 additional part categories.',
      metrics: [
        { label: 'Precision Level', value: '±0.01mm' },
        { label: 'Defect Rate', value: '0%' },
        { label: 'Expansion', value: '3 categories' },
        { label: 'First Order', value: '$180K' },
      ],
      image: 'industrial-machinery',
    },
    {
      id: 6,
      client: 'Middle East Retail Chain',
      industry: 'Consumer Goods',
      location: 'UAE',
      challenge: 'Sourcing a diverse range of consumer products for their retail stores across the GCC region.',
      approach: 'We created a consolidated sourcing solution across 8 product categories, managing quality control and logistics centrally.',
      result: 'Streamlined supply chain, reduced procurement costs by 22%, and established reliable ongoing supply for 200+ SKUs.',
      metrics: [
        { label: 'Product Categories', value: '8' },
        { label: 'SKUs Managed', value: '200+' },
        { label: 'Cost Reduction', value: '22%' },
        { label: 'Delivery Rate', value: '99%' },
      ],
      image: 'consumer-goods',
    },
  ];

  const stats = [
    { icon: Factory, value: '500+', label: 'Successful Projects' },
    { icon: Globe, value: '35+', label: 'Countries Served' },
    { icon: Users, value: '850+', label: 'Happy Clients' },
    { icon: Package, value: '$120M+', label: 'Goods Sourced' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] via-[#2D5A8A] to-[#1E3A5F] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed">
              Real success stories from businesses that trusted us with their China sourcing. 
              See how we've helped clients across various industries achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#F8FAFC] py-12 border-b border-[#E2E8F0]">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#1E3A5F] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-[#1E3A5F]">{stat.value}</div>
                <div className="text-sm text-[#64748B]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id} 
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium text-[#F97316] bg-[#F97316]/10 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-sm text-[#64748B] flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      {study.location}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1E3A5F] mb-4">{study.client}</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-[#1E3A5F] mb-2 uppercase tracking-wide">The Challenge</h4>
                      <p className="text-[#64748B]">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#1E3A5F] mb-2 uppercase tracking-wide">Our Approach</h4>
                      <p className="text-[#64748B]">{study.approach}</p>
                    </div>
                    
                    <div className="bg-[#F8FAFC] rounded-lg p-4 border-l-4 border-[#10B981]">
                      <h4 className="text-sm font-semibold text-[#10B981] mb-2 uppercase tracking-wide">The Result</h4>
                      <p className="text-[#1E293B] font-medium">{study.result}</p>
                    </div>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="lg:col-span-5">
                  <div className="bg-[#F8FAFC] rounded-xl p-6 border border-[#E2E8F0]">
                    <div className="grid grid-cols-2 gap-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center p-3 bg-white rounded-lg">
                          <div className="text-lg font-bold text-[#1E3A5F]">{metric.value}</div>
                          <div className="text-xs text-[#64748B]">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#1E3A5F] text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Let us help you source from China successfully. Get in touch to discuss your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white/10">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;