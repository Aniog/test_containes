import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Supplier Sourcing', desc: 'Identify and qualify suppliers matching your requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy and capabilities.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment checks to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Track progress and address issues in real time.' },
    { title: 'Logistics Coordination', desc: 'Manage shipping, customs, and delivery schedules.' },
  ];

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We review your product specs, volume, and timeline.' },
    { step: '02', title: 'Supplier Identification', desc: 'We shortlist verified suppliers with relevant capabilities.' },
    { step: '03', title: 'Verification & Sampling', desc: 'Factory audits and sample evaluation before production.' },
    { step: '04', title: 'Production & QC', desc: 'Ongoing monitoring and quality inspections.' },
    { step: '05', title: 'Shipping & Delivery', desc: 'Documentation, customs, and logistics coordination.' },
  ];

  const products = [
    'Electronics & Components',
    'Home & Garden Products',
    'Fashion & Apparel',
    'Industrial Machinery',
    'Consumer Goods',
    'Automotive Parts',
  ];

  const problems = [
    'Difficulty finding reliable suppliers',
    'Uncertainty about factory legitimacy',
    'Quality issues after production',
    'Communication barriers with factories',
    'Complex logistics and customs processes',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '98% On-Time Delivery' },
    { icon: CheckCircle, label: '1,200+ Factories Verified' },
    { icon: Clock, label: '10+ Years Experience' },
  ];

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing time by 40% for seasonal products.' },
    { client: 'US Industrial Distributor', result: 'Identified 3 qualified suppliers for specialized components.' },
    { client: 'Australian E-commerce Brand', result: 'Improved product quality through systematic inspections.' },
  ];

  const faqs = [
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering production capacity, quality systems, and compliance documentation.' },
    { q: 'What is your typical project timeline?', a: 'From initial inquiry to first shipment, most projects take 8-16 weeks depending on product complexity.' },
    { q: 'Do you charge upfront fees?', a: 'We work on a success-based model with transparent milestone payments. No hidden costs.' },
    { q: 'Which regions do you cover?', a: 'We primarily work with manufacturers across China, with established networks in major industrial regions.' },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            We help international companies find reliable suppliers, verify factories, and manage production with transparency and accountability.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium bg-white text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">End-to-end support for sourcing from China.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 border border-slate-200 rounded-lg">
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="text-sm font-medium text-blue-700 hover:underline">View all services →</Link>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Sourcing Process</h2>
            <p className="text-slate-600">A structured approach to reduce risk and improve outcomes.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-2xl font-semibold text-blue-700 mb-3">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-works" className="text-sm font-medium text-blue-700 hover:underline">Learn more about our process →</Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Products We Source</h2>
          <p className="text-slate-600">Categories we regularly handle for international clients.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((product, idx) => (
            <div key={idx} className="p-5 border border-slate-200 rounded-lg text-center text-sm font-medium">
              {product}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="text-sm font-medium text-blue-700 hover:underline">See detailed categories →</Link>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Problems We Solve</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 bg-white border border-slate-200 rounded-lg">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Why Buyers Work With Us</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {trustPoints.map((point, idx) => (
            <div key={idx}>
              <point.icon className="w-8 h-8 mx-auto mb-4 text-blue-700" />
              <div className="font-semibold">{point.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight mb-4">Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="p-6 bg-white border border-slate-200 rounded-lg">
                <div className="font-semibold mb-2">{study.client}</div>
                <p className="text-sm text-slate-600">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/case-studies" className="text-sm font-medium text-blue-700 hover:underline">Read full case studies →</Link>
          </div>
        </div>
      </section>

      <section id="faq" className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-6">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-sm text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-slate-300 mb-8">Get a free quote and project assessment within 24 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium bg-white text-slate-900 rounded-md hover:bg-slate-100 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;