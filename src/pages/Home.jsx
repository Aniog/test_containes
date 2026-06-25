import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Home = () => {
  const services = [
    { title: 'Supplier Identification', desc: 'Identify and shortlist qualified manufacturers matching your specifications.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, capacity, and compliance.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Regular progress updates and timeline management.' },
    { title: 'Logistics Coordination', desc: 'Freight booking, documentation, and customs support.' },
  ];

  const process = [
    { step: '01', title: 'Requirement Briefing', desc: 'Share product specs, target price, and timeline.' },
    { step: '02', title: 'Supplier Sourcing', desc: 'We identify and screen potential manufacturers.' },
    { step: '03', title: 'Verification & Samples', desc: 'Factory audits and sample evaluation.' },
    { step: '04', title: 'Production & QC', desc: 'Order placement with ongoing inspection.' },
    { step: '05', title: 'Shipping & Delivery', desc: 'Logistics coordination to your destination.' },
  ];

  const products = [
    'Consumer Electronics', 'Home & Kitchen', 'Textiles & Apparel',
    'Industrial Components', 'Packaging Materials', 'Automotive Parts',
  ];

  const problems = [
    'Difficulty finding reliable suppliers beyond trade platforms',
    'Uncertainty about factory legitimacy and production capacity',
    'Quality issues discovered only after goods arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and documentation requirements',
  ];

  const trustPoints = [
    { icon: Users, label: '200+ Clients Served' },
    { icon: Award, label: '500+ Factories Audited' },
    { icon: Clock, label: '12 Years Experience' },
  ];

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing lead time by 40% while maintaining quality standards.', metric: '40% faster' },
    { client: 'US Hardware Importer', result: 'Identified alternative supplier saving 18% on unit cost.', metric: '18% cost reduction' },
    { client: 'Australian Distributor', result: 'Established reliable supply chain for seasonal product line.', metric: '3 suppliers onboarded' },
  ];

  const faqs = [
    { q: 'What is the minimum order quantity you handle?', a: 'We work with various order sizes depending on product category. Many clients start with trial orders of a few hundred units.' },
    { q: 'How do you verify factories?', a: 'Our team conducts on-site visits covering business license verification, production capacity assessment, quality systems review, and social compliance checks.' },
    { q: 'What are your service fees?', a: 'Fees vary by project scope. We provide transparent quotations after understanding your requirements. Initial supplier sourcing discussions are complimentary.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlist: 1-2 weeks. Full verification and sampling: 3-6 weeks. Production timelines depend on product complexity.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg text-[#475569] mb-8 max-w-2xl">
              We help overseas companies identify reliable Chinese suppliers, verify production capabilities, and manage quality throughout the sourcing process.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#1E40AF] text-white px-8 py-3.5 rounded-lg text-base font-medium hover:bg-[#1E3A8A] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-sm text-[#64748B] mt-4">No obligation. Response within 24 hours.</p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-8 flex flex-wrap justify-center md:justify-between items-center gap-8">
          {trustPoints.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <item.icon className="w-5 h-5 text-[#1E40AF]" />
              <span className="text-sm font-medium text-[#475569]">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Our Services</h2>
          <p className="text-[#475569] max-w-xl mx-auto">End-to-end support for sourcing from China, from supplier discovery to delivery coordination.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="border border-[#E2E8F0] rounded-xl p-8 hover:border-[#CBD5E1] transition-colors">
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-[#475569] text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-[#1E40AF] font-medium text-sm hover:underline">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Sourcing Process</h2>
            <p className="text-[#475569]">A structured approach to minimize risk and ensure quality at each stage.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-[#1E40AF] text-sm font-semibold mb-2">{item.step}</div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-[#475569]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#1E40AF] font-medium text-sm hover:underline">
              Learn more about our process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Products We Source</h2>
            <p className="text-[#475569] mb-6">We work across multiple categories with established supplier networks and category expertise.</p>
            <Link to="/products" className="inline-flex items-center gap-2 text-[#1E40AF] font-medium text-sm hover:underline">
              Browse product categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {products.map((product, idx) => (
              <div key={idx} className="border border-[#E2E8F0] rounded-lg px-5 py-4 text-sm text-[#475569]">
                {product}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Problems We Solve</h2>
            <p className="text-[#475569]">Common sourcing challenges that our clients face when working directly with overseas suppliers.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-3 items-start bg-white border border-[#E2E8F0] rounded-lg p-6">
                <CheckCircle className="w-5 h-5 text-[#059669] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-[#475569]">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-2">Case Studies</h2>
            <p className="text-[#475569]">Results from recent client engagements.</p>
          </div>
          <Link to="/case-studies" className="hidden md:inline-flex items-center gap-2 text-[#1E40AF] font-medium text-sm hover:underline">
            View all cases <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="border border-[#E2E8F0] rounded-xl p-8">
              <div className="text-[#1E40AF] text-sm font-semibold mb-4">{study.metric}</div>
              <h4 className="font-semibold mb-3">{study.client}</h4>
              <p className="text-sm text-[#475569]">{study.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC] border-y border-[#E2E8F0]">
        <div className="max-w-[1280px] mx-auto px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-[#E2E8F0] rounded-xl p-8 bg-white">
                <h4 className="font-semibold mb-3">{faq.q}</h4>
                <p className="text-sm text-[#475569]">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 text-[#1E40AF] font-medium text-sm hover:underline">
              Still have questions? Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section id="inquiry" className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Start Your Sourcing Project</h2>
            <p className="text-[#475569]">Tell us about your requirements and receive a preliminary sourcing assessment.</p>
          </div>
          <div className="border border-[#E2E8F0] rounded-2xl p-8 md:p-10 bg-white">
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
