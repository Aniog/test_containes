import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Supplier Verification', desc: 'Factory audits, background checks, and capability assessments.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment, during-production, and final quality checks.' },
    { title: 'Production Monitoring', desc: 'Real-time updates on order progress and timelines.' },
    { title: 'Shipping Coordination', desc: 'Freight booking, documentation, and customs support.' },
  ];

  const process = [
    { step: '01', title: 'Inquiry', desc: 'Share your product requirements and target specifications.' },
    { step: '02', title: 'Sourcing', desc: 'We identify and shortlist qualified suppliers.' },
    { step: '03', title: 'Verification', desc: 'On-site audits and sample evaluation.' },
    { step: '04', title: 'Production', desc: 'Order placement with ongoing monitoring.' },
    { step: '05', title: 'Inspection', desc: 'Quality checks before shipment release.' },
    { step: '06', title: 'Delivery', desc: 'Shipping coordination and documentation.' },
  ];

  const products = [
    'Consumer Electronics',
    'Home & Garden',
    'Industrial Equipment',
    'Textiles & Apparel',
    'Auto Parts',
    'Packaging Materials',
  ];

  const problems = [
    'Difficulty finding reliable suppliers',
    'Quality issues with received goods',
    'Communication barriers with factories',
    'Unclear production timelines',
    'Complex shipping and customs processes',
    'Risk of payment fraud',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '98% On-Time Delivery' },
    { icon: Clock, label: '10+ Years Experience' },
  ];

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing costs by 22% through verified supplier network.', category: 'Home Goods' },
    { client: 'US Industrial Distributor', result: 'Improved defect rate from 8% to under 1% with QC protocols.', category: 'Equipment' },
    { client: 'Australian E-commerce Brand', result: 'Cut lead time by 35% with production monitoring.', category: 'Consumer Products' },
  ];

  const faqs = [
    { q: 'What is the minimum order quantity?', a: 'MOQs vary by product and supplier. We help negotiate reasonable terms based on your volume needs.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier shortlist typically takes 1-2 weeks. Full verification and sample approval adds 2-4 weeks.' },
    { q: 'Do you charge for supplier verification?', a: 'Verification is included in our service fee. We provide transparent pricing based on project scope.' },
    { q: 'Can you handle small orders?', a: 'Yes. We work with buyers of all sizes and help find suppliers willing to accommodate smaller volumes.' },
    { q: 'What payment methods do you support?', a: 'We facilitate standard trade terms including T/T, L/C, and escrow arrangements through verified channels.' },
  ];

  return (
    <div>
      <section className="bg-[#F8FAFC] py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-[#1E3A5F] tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto mb-10">
            We help overseas companies find reliable suppliers, verify factories, and manage production with transparency.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#1E3A5F] text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-[#162d4a] transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-sm text-[#6B7280] mt-4">No obligation. Response within 24 hours.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#1E3A5F] mb-4">Our Services</h2>
          <p className="text-[#6B7280]">End-to-end support for your China sourcing needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div key={i} className="p-8 border border-gray-200 rounded-xl hover:border-[#1E3A5F] transition-colors">
              <h3 className="font-semibold text-lg mb-3 text-[#1E3A5F]">{service.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="text-[#1E3A5F] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1E3A5F] mb-4">Sourcing Process</h2>
            <p className="text-[#6B7280]">A structured approach from inquiry to delivery.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {process.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-[#1E3A5F] font-mono text-sm mb-3">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#6B7280]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-[#1E3A5F] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              Learn more about our process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#1E3A5F] mb-4">Products We Source</h2>
          <p className="text-[#6B7280]">Categories we regularly handle for our clients.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-lg text-center hover:bg-[#F8FAFC] transition-colors">
              <span className="text-[#1E3A5F] font-medium">{product}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="text-[#1E3A5F] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            See detailed product categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1E3A5F] mb-4">Problems We Solve</h2>
            <p className="text-[#6B7280]">Common challenges our clients face when sourcing from China.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-5 bg-white rounded-lg border border-gray-200">
                <CheckCircle className="w-5 h-5 text-[#059669] mt-0.5 flex-shrink-0" />
                <span className="text-[#1F2937]">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#1E3A5F] mb-4">Why Buyers Trust Us</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12">
          {trustPoints.map((point, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <point.icon className="w-10 h-10 text-[#1E3A5F] mb-4" />
              <span className="font-medium text-[#1F2937]">{point.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1E3A5F] mb-4">Case Studies</h2>
            <p className="text-[#6B7280]">Results from recent client engagements.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-xs uppercase tracking-wider text-[#6B7280] mb-3">{study.category}</div>
                <h3 className="font-semibold text-lg mb-4">{study.client}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="text-[#1E3A5F] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
              Read more case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#1E3A5F] mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-gray-200 rounded-lg p-6">
              <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <ArrowRight className="w-4 h-4 text-[#6B7280] group-open:rotate-90 transition-transform" />
              </summary>
              <p className="mt-4 text-[#6B7280] text-sm leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#1E3A5F] py-20 text-white">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-gray-300 mb-8">Tell us about your requirements and receive a customized sourcing plan.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#1E3A5F] px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
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
