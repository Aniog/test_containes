import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Supplier Sourcing', desc: 'Identify and connect with qualified manufacturers matching your requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, capacity, and compliance.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Track production milestones and address issues proactively.' },
    { title: 'Shipping Coordination', desc: 'Manage logistics, documentation, and customs clearance.' },
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and customs procedures',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Buyers Served' },
    { icon: Award, label: '98% Client Retention' },
    { icon: Clock, label: '12+ Years Experience' },
    { icon: CheckCircle, label: '2,000+ Factories Verified' },
  ];

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing costs by 23% while improving product quality', category: 'Home Goods' },
    { client: 'US Industrial Equipment Importer', result: 'Identified 3 new suppliers with 40% better lead times', category: 'Industrial' },
    { client: 'Australian Consumer Electronics Brand', result: 'Achieved 99.2% first-pass quality rate across 12 SKUs', category: 'Electronics' },
  ];

  const faqs = [
    { q: 'How do you verify suppliers?', a: 'We conduct on-site factory audits covering production capability, quality systems, financial stability, and compliance documentation.' },
    { q: 'What industries do you specialize in?', a: 'We work across consumer goods, industrial equipment, electronics, textiles, home furnishings, and automotive components.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification typically takes 2-4 weeks. Full verification and first order coordination takes 6-10 weeks depending on complexity.' },
    { q: 'Do you charge upfront fees?', a: 'We work on a success-based model. Initial consultation is free. Project fees are discussed after understanding your specific requirements.' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1 bg-slate-800 rounded-full text-sm mb-6">
            Shanghai-Based | Serving Global Buyers Since 2012
          </div>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            Connect with verified Chinese manufacturers. Manage quality, production, and logistics with a dedicated sourcing partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded font-medium hover:bg-slate-100 transition-colors"
            >
              Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 rounded font-medium hover:bg-white/5 transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center justify-center gap-3 text-slate-600">
                <point.icon className="w-5 h-5" />
                <span className="font-medium">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-slate-500 tracking-wider mb-3">WHAT WE DO</div>
          <h2 className="text-4xl font-semibold tracking-tight">End-to-End Sourcing Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="border border-slate-200 rounded-xl p-8 hover:border-slate-300 transition-colors">
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:underline">
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-slate-500 tracking-wider mb-3">COMMON CHALLENGES</div>
            <h2 className="text-4xl font-semibold tracking-tight">Problems We Solve</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-xl border border-slate-200">
                <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="text-lg text-slate-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="text-sm font-medium text-slate-500 tracking-wider mb-3">OUR APPROACH</div>
          <h2 className="text-4xl font-semibold tracking-tight">How We Work</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-6">
          {[
            { step: '01', title: 'Requirements', desc: 'Define product specs, volume, and timeline' },
            { step: '02', title: 'Sourcing', desc: 'Identify and shortlist qualified suppliers' },
            { step: '03', title: 'Verification', desc: 'Audit factories and assess capabilities' },
            { step: '04', title: 'Production', desc: 'Monitor quality and production milestones' },
            { step: '05', title: 'Delivery', desc: 'Coordinate inspection and shipping' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-semibold text-slate-200 mb-4">{item.step}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/how-it-works" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:underline">
            Learn More About Our Process <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Products We Source */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-slate-400 tracking-wider mb-3">INDUSTRIES</div>
            <h2 className="text-4xl font-semibold tracking-tight">Products We Source</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {['Consumer Electronics', 'Home & Garden', 'Industrial Equipment', 'Textiles & Apparel', 'Automotive Parts', 'Furniture & Furnishings', 'Tools & Hardware', 'Packaging Materials', 'Medical Supplies'].map((product, index) => (
              <div key={index} className="bg-slate-800 px-6 py-4 rounded-lg text-center hover:bg-slate-700 transition-colors">
                {product}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-white font-medium hover:underline">
              View Full Product Categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-sm font-medium text-slate-500 tracking-wider mb-3">RESULTS</div>
            <h2 className="text-4xl font-semibold tracking-tight">Case Studies</h2>
          </div>
          <Link to="/case-studies" className="hidden md:flex items-center gap-2 text-slate-900 font-medium hover:underline">
            View All Cases <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="border border-slate-200 rounded-xl p-8">
              <div className="text-sm text-slate-500 mb-4">{study.category}</div>
              <div className="font-semibold text-lg mb-4">{study.client}</div>
              <p className="text-slate-600">{study.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-medium text-slate-500 tracking-wider mb-3">QUESTIONS</div>
            <h2 className="text-4xl font-semibold tracking-tight">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-slate-200 rounded-xl p-6 group">
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-slate-600 pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 text-slate-900 font-medium hover:underline">
              Still have questions? Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold tracking-tight mb-4">Ready to Start Sourcing?</h2>
        <p className="text-xl text-slate-600 mb-8">Get a free consultation and quote for your sourcing project.</p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded font-medium hover:bg-slate-800 transition-colors"
        >
          Get a Free Sourcing Quote <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
};

export default Home;