import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Truck } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Supplier Sourcing', desc: 'Identify and connect with qualified manufacturers matching your requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm capabilities, certifications, and legitimacy.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Track production milestones and address issues as they arise.' },
    { title: 'Logistics Coordination', desc: 'Manage shipping arrangements and documentation with freight partners.' },
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and documentation requirements',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '12 Years Experience' },
    { icon: CheckCircle, label: '2,000+ Audits Completed' },
    { icon: Truck, label: '98% On-Time Delivery' },
  ];

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced defect rate from 8% to under 1% through systematic QC protocols.' },
    { client: 'US Industrial Equipment Importer', result: 'Identified and qualified 3 new suppliers, cutting procurement costs by 22%.' },
    { client: 'Australian Consumer Goods Brand', result: 'Established reliable production timeline tracking, improving delivery consistency.' },
  ];

  const faqs = [
    { q: 'What industries do you work with?', a: 'We support clients across consumer goods, industrial equipment, electronics, textiles, home furnishings, and automotive components.' },
    { q: 'How do you verify suppliers?', a: 'Our verification includes business license checks, on-site facility audits, production capacity assessment, and reference verification with existing clients.' },
    { q: 'What is included in quality inspections?', a: 'Inspections cover product specifications, workmanship, packaging, labeling, and quantity verification according to agreed AQL standards.' },
    { q: 'Do you handle shipping and logistics?', a: 'We coordinate with freight forwarders, prepare export documentation, and monitor shipments through to destination port delivery.' },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            We help overseas companies find reliable suppliers, verify factories, inspect quality, and coordinate production and shipping from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-14 px-8 bg-blue-800 text-white text-lg font-medium rounded hover:bg-blue-900 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">End-to-end support for sourcing, verification, quality control, and logistics.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 border border-slate-200 rounded-lg">
              <h3 className="font-semibold text-xl mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="text-blue-800 font-medium hover:underline">View all services →</Link>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">The Sourcing Process</h2>
            <p className="text-slate-600">A structured approach to supplier selection and production oversight.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {['Requirement Analysis', 'Supplier Identification', 'Verification & Audit', 'Quality Control', 'Logistics & Delivery'].map((step, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold">{idx + 1}</div>
                <p className="font-medium text-slate-900">{step}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="text-blue-800 font-medium hover:underline">Learn more about our process →</Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Products We Source</h2>
          <p className="text-slate-600">Categories we regularly source for international clients.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Consumer Electronics', 'Home & Garden', 'Industrial Components', 'Textiles & Apparel', 'Furniture & Furnishings', 'Automotive Parts', 'Packaging Materials', 'Promotional Products'].map((product, idx) => (
            <div key={idx} className="p-6 border border-slate-200 rounded-lg text-center">
              <p className="font-medium text-slate-900">{product}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="text-blue-800 font-medium hover:underline">See detailed product categories →</Link>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Problems We Solve</h2>
          </div>
          <ul className="space-y-4 max-w-3xl mx-auto">
            {problems.map((problem, idx) => (
              <li key={idx} className="flex items-start gap-4 text-slate-700">
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>{problem}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Why Buyers Work With Us</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {trustPoints.map((point, idx) => (
            <div key={idx}>
              <point.icon className="w-10 h-10 text-blue-800 mx-auto mb-4" />
              <p className="font-semibold text-xl text-slate-900">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-slate-900 mb-4">Case Studies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-200 rounded-lg">
                <p className="font-semibold text-slate-900 mb-3">{study.client}</p>
                <p className="text-slate-600">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="text-blue-800 font-medium hover:underline">Read more case studies →</Link>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-slate-200 pb-6">
              <h3 className="font-semibold text-lg text-slate-900 mb-2">{faq.q}</h3>
              <p className="text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-slate-300 mb-8">Tell us about your requirements and receive a sourcing proposal within 48 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center h-14 px-8 bg-blue-800 text-white text-lg font-medium rounded hover:bg-blue-900 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
