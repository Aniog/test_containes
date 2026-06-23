import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Supplier Sourcing', desc: 'Identify and connect with qualified manufacturers matching your requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm capabilities, certifications, and legitimacy.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Regular progress updates and timeline management throughout manufacturing.' },
    { title: 'Logistics Coordination', desc: 'Freight booking, documentation, and customs clearance support.' },
  ];

  const process = [
    { step: '01', title: 'Requirement Discussion', desc: 'Share your product specifications, target price, and timeline.' },
    { step: '02', title: 'Supplier Identification', desc: 'We shortlist 3-5 verified suppliers matching your criteria.' },
    { step: '03', title: 'Quotation & Samples', desc: 'Compare pricing, review samples, and select your supplier.' },
    { step: '04', title: 'Order Management', desc: 'We oversee production, quality checks, and shipping.' },
    { step: '05', title: 'Delivery & Support', desc: 'Track shipment and handle post-delivery coordination.' },
  ];

  const products = [
    'Consumer Electronics', 'Home & Kitchen', 'Apparel & Textiles',
    'Industrial Components', 'Packaging Materials', 'Furniture & Fixtures',
    'Automotive Parts', 'Medical Supplies', 'Toys & Games',
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and documentation requirements',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served', value: 'Since 2018' },
    { icon: Award, label: '98% On-Time Delivery', value: 'Last 12 months' },
    { icon: Clock, label: 'Average 14 Days', value: 'To first shipment' },
  ];

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing time by 60% for seasonal product lines', category: 'Home Goods' },
    { client: 'US E-commerce Brand', result: 'Established 3 verified suppliers with consistent QC standards', category: 'Electronics' },
    { client: 'Australian Distributor', result: 'Streamlined logistics achieving 15% cost reduction', category: 'Industrial' },
  ];

  const faqs = [
    { q: 'What is the minimum order quantity you handle?', a: 'We work with orders of various sizes. MOQs depend on the product category and supplier. We discuss this during the requirement phase.' },
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering production capacity, quality systems, certifications, and financial stability.' },
    { q: 'What inspection services do you offer?', a: 'We provide pre-production, in-process, and pre-shipment inspections. Reports include photos, measurements, and pass/fail criteria.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlist: 5-10 business days. Full process to first shipment: typically 6-10 weeks depending on product complexity.' },
    { q: 'What are your service fees?', a: 'Our fees are project-based or percentage of order value. We provide transparent quotes after understanding your requirements.' },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-[#0F172A] tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-[#475569] max-w-3xl mx-auto mb-10">
            We help overseas companies find reliable suppliers, verify factories, manage quality, and coordinate shipping from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#1E40AF] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#1E3A8A] transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-[#64748B]">No obligation. Response within 24 hours.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F172A] mb-4">Our Services</h2>
          <p className="text-[#475569] max-w-2xl mx-auto">End-to-end support for sourcing from China.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-[#E2E8F0] rounded-xl hover:border-[#1E40AF] transition-colors">
              <h3 className="font-semibold text-xl text-[#0F172A] mb-3">{service.title}</h3>
              <p className="text-[#475569]">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-[#1E40AF] font-medium hover:underline">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0F172A] mb-4">Sourcing Process</h2>
            <p className="text-[#475569]">A structured approach from inquiry to delivery.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-[#E2E8F0]">
                <div className="text-[#1E40AF] font-mono text-sm mb-3">{item.step}</div>
                <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#475569]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#1E40AF] font-medium hover:underline">
              Learn more about our process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F172A] mb-4">Products We Source</h2>
          <p className="text-[#475569]">Categories we regularly source for our clients.</p>
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          {products.map((product, idx) => (
            <span key={idx} className="px-5 py-2 bg-[#F8FAFC] text-[#475569] rounded-full text-sm border border-[#E2E8F0]">
              {product}
            </span>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-[#1E40AF] font-medium hover:underline">
            Browse all categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0F172A] mb-4">Problems We Solve</h2>
          </div>
          <div className="space-y-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white p-6 rounded-xl border border-[#E2E8F0]">
                <CheckCircle className="w-6 h-6 text-[#059669] flex-shrink-0 mt-0.5" />
                <p className="text-[#475569]">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F172A] mb-4">Why Buyers Work With Us</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, idx) => (
            <div key={idx} className="text-center">
              <point.icon className="w-10 h-10 text-[#1E40AF] mx-auto mb-4" />
              <div className="font-semibold text-xl text-[#0F172A] mb-1">{point.label}</div>
              <div className="text-[#475569] text-sm">{point.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#0F172A] mb-4">Case Studies</h2>
            <p className="text-[#475569]">Results from recent client projects.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-[#E2E8F0]">
                <div className="text-xs uppercase tracking-widest text-[#64748B] mb-4">{study.category}</div>
                <h3 className="font-semibold text-lg text-[#0F172A] mb-3">{study.client}</h3>
                <p className="text-[#475569]">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#1E40AF] font-medium hover:underline">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#0F172A] mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border border-[#E2E8F0] rounded-xl p-6">
              <summary className="font-medium text-[#0F172A] cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-[#475569] pr-8">{faq.a}</p>
            </details>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/contact" className="inline-flex items-center gap-2 text-[#1E40AF] font-medium hover:underline">
            Still have questions? Contact us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#0F172A] py-20 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-[#94A3B8] mb-8">Tell us about your requirements and receive a customized sourcing plan.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#0F172A] px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#F8FAFC] transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
