import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', company: '', email: '', phone: '', product: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    { title: 'Supplier Identification', desc: 'Find qualified manufacturers matching your requirements' },
    { title: 'Factory Verification', desc: 'On-site audits and background checks on potential suppliers' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process quality control checks' },
    { title: 'Production Monitoring', desc: 'Track production progress and ensure timelines are met' },
    { title: 'Logistics Coordination', desc: 'Manage shipping, customs, and delivery to your location' },
  ];

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We discuss your product specs, target price, and timeline.' },
    { step: '02', title: 'Supplier Sourcing', desc: 'We identify and shortlist 3-5 qualified suppliers.' },
    { step: '03', title: 'Verification & Quotes', desc: 'Factory visits, samples, and competitive quotations.' },
    { step: '04', title: 'Order Management', desc: 'Contract review, production oversight, and QC inspections.' },
    { step: '05', title: 'Shipping & Delivery', desc: 'Logistics coordination and final delivery to your door.' },
  ];

  const products = [
    'Consumer Electronics', 'Home & Garden', 'Apparel & Textiles',
    'Industrial Equipment', 'Auto Parts', 'Furniture & Fixtures',
    'Packaging Materials', 'Medical Supplies',
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and customs clearance processes',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '12 Years Experience' },
    { icon: CheckCircle, label: '2,000+ Factories Audited' },
    { icon: Clock, label: '98% On-Time Delivery' },
  ];

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing costs by 22% while improving product quality', category: 'Home Goods' },
    { client: 'US E-commerce Brand', result: 'Successfully onboarded 8 new suppliers in 4 months', category: 'Electronics' },
    { client: 'Australian Distributor', result: 'Cut lead times from 90 to 65 days through process optimization', category: 'Industrial' },
  ];

  const faqs = [
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits, review business licenses, check production capabilities, and verify past client references.' },
    { q: 'What are your service fees?', a: 'Our fees are transparent and based on project scope. We provide a detailed quote after understanding your requirements.' },
    { q: 'Do you handle shipping?', a: 'Yes, we coordinate with freight forwarders, manage documentation, and ensure smooth customs clearance.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification typically takes 2-4 weeks. Full order fulfillment depends on product complexity and production timeline.' },
    { q: 'Can you source custom products?', a: 'Absolutely. We specialize in custom manufacturing and work closely with factories to meet your specifications.' },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0F172A] text-white pt-20 pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
            Connect with verified Chinese manufacturers. We handle supplier discovery, quality control, and logistics so you can focus on growing your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-[#0F172A] text-lg font-medium rounded-lg hover:bg-[#F8FAFC] transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
          <p className="mt-4 text-sm text-white/60">No obligation. Response within 24 hours.</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-[#E2E8F0] py-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((item, idx) => (
            <div key={idx} className="flex items-center justify-center gap-3 text-[#1E293B]">
              <item.icon className="w-6 h-6 text-[#1E40AF]" />
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">Our Services</h2>
          <p className="text-lg text-[#64748B]">End-to-end support for your sourcing needs</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-[#E2E8F0] rounded-xl hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-xl mb-3 text-[#0F172A]">{service.title}</h3>
              <p className="text-[#64748B]">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="text-[#1E40AF] font-medium hover:underline">View all services →</Link>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">How It Works</h2>
            <p className="text-lg text-[#64748B]">A clear, structured process from inquiry to delivery</p>
          </div>
          <div className="space-y-6">
            {process.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-xl border border-[#E2E8F0]">
                <div className="text-4xl font-semibold text-[#1E40AF] w-20">{item.step}</div>
                <div>
                  <h3 className="font-semibold text-xl mb-2 text-[#0F172A]">{item.title}</h3>
                  <p className="text-[#64748B]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-[#1E40AF] font-medium hover:underline">Learn more about our process →</Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">Products We Source</h2>
          <p className="text-lg text-[#64748B]">Categories we regularly source for our clients</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product, idx) => (
            <div key={idx} className="p-6 border border-[#E2E8F0] rounded-lg text-center hover:border-[#1E40AF] transition-colors">
              <span className="font-medium text-[#1E293B]">{product}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="text-[#1E40AF] font-medium hover:underline">See detailed product categories →</Link>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">Problems We Solve</h2>
          </div>
          <div className="space-y-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex gap-4 bg-white p-6 rounded-lg border border-[#E2E8F0]">
                <CheckCircle className="w-6 h-6 text-[#059669] flex-shrink-0 mt-0.5" />
                <p className="text-[#1E293B]">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">Case Studies</h2>
          <p className="text-lg text-[#64748B]">Real results for real clients</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="p-8 border border-[#E2E8F0] rounded-xl">
              <div className="text-sm text-[#1E40AF] mb-2">{study.category}</div>
              <h3 className="font-semibold text-lg mb-3 text-[#0F172A]">{study.client}</h3>
              <p className="text-[#64748B]">{study.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="text-[#1E40AF] font-medium hover:underline">Read full case studies →</Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white border border-[#E2E8F0] rounded-lg p-6 group">
                <summary className="font-semibold text-[#0F172A] cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-[#64748B] group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-[#64748B]">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="max-w-3xl mx-auto px-6 py-20">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-[#0F172A] mb-4">Start Your Sourcing Project</h2>
          <p className="text-lg text-[#64748B]">Tell us about your requirements and receive a customized quote.</p>
        </div>

        {submitted ? (
          <div className="text-center py-12 bg-[#F8FAFC] rounded-xl">
            <CheckCircle className="w-16 h-16 text-[#059669] mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Thank you for your inquiry</h3>
            <p className="text-[#64748B]">Our team will contact you within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company *</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Product Category *</label>
              <input type="text" name="product" value={formData.product} onChange={handleChange} required placeholder="e.g., Electronics components, Textiles" className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Project Details *</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={5} placeholder="Describe your product requirements, quantity, timeline, and any specific needs..." className="w-full border border-[#E2E8F0] rounded-lg px-4 py-3 focus:border-[#1E40AF] focus:outline-none resize-y" />
            </div>
            <button type="submit" className="w-full md:w-auto px-10 py-4 bg-[#0F172A] text-white font-medium rounded-lg hover:bg-[#1E293B] transition-colors">
              Submit Inquiry
            </button>
            <p className="text-xs text-[#64748B]">We respect your privacy. Your information will not be shared.</p>
          </form>
        )}
      </section>
    </div>
  );
};

export default Home;
