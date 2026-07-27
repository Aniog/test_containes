import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Supplier Sourcing', desc: 'Identify and connect with qualified manufacturers matching your requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, capacity, and compliance.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Track production milestones and address issues in real time.' },
    { title: 'Shipping Coordination', desc: 'Manage logistics, documentation, and freight forwarding.' },
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and customs documentation',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '98% Client Retention' },
    { icon: Clock, label: '10+ Years Experience' },
  ];

  const caseStudies = [
    { client: 'European Retail Chain', result: 'Reduced sourcing costs by 23% while improving product quality', category: 'Home Goods' },
    { client: 'US Industrial Distributor', result: 'Successfully verified 12 new suppliers across 3 provinces', category: 'Industrial Equipment' },
    { client: 'Australian E-commerce Brand', result: 'Cut lead times by 35% through optimized production monitoring', category: 'Consumer Electronics' },
  ];

  const faqs = [
    { q: 'How do you find suppliers?', a: 'We use a combination of industry databases, trade shows, and our established network to identify manufacturers that match your specifications.' },
    { q: 'What is your verification process?', a: 'Our verification includes business license checks, on-site facility audits, production capacity assessment, and reference verification.' },
    { q: 'How long does the sourcing process take?', a: 'Initial supplier identification typically takes 2-4 weeks. Full verification and sample approval adds 3-6 weeks depending on product complexity.' },
    { q: 'Do you handle shipping and logistics?', a: 'Yes, we coordinate with freight forwarders, manage documentation, and ensure compliance with import requirements for your destination country.' },
  ];

  return (
    <div>
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">China Sourcing Agent for Global Buyers</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">Professional sourcing services to help you find reliable suppliers, verify factories, and manage production with confidence.</p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">Get a Free Sourcing Quote <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </Link>
        </div>
      </section>

      <section className="py-20 border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive support throughout the sourcing lifecycle.</p>
          </div>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-6 border rounded-lg hover:shadow-sm transition-shadow">
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services"><Button variant="outline">View All Services</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Problems We Solve</h2>
              <ul className="space-y-4">
                {problems.map((problem, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl border">
              <h3 className="font-semibold mb-4">Why Work With Us</h3>
              <div className="space-y-6">
                {trustPoints.map((point, i) => (
                  <div key={i} className="flex gap-4">
                    <point.icon className="w-6 h-6 text-slate-700 mt-1" />
                    <div>
                      <div className="font-medium">{point.label}</div>
                      <div className="text-sm text-slate-600">Proven track record with international clients</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Recent Case Studies</h2>
            <p className="text-slate-600">Results from our work with global buyers.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, i) => (
              <div key={i} className="border rounded-lg p-6">
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">{study.category}</div>
                <div className="font-semibold mb-2">{study.client}</div>
                <p className="text-sm text-slate-600">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies"><Button variant="outline">View All Case Studies</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-t">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg border">
                <div className="font-semibold mb-2">{faq.q}</div>
                <p className="text-sm text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact"><Button>Get in Touch</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-20 border-t">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-slate-600 mb-8">Request a free sourcing quote and receive a detailed proposal within 48 hours.</p>
          <Link to="/contact">
            <Button size="lg">Get a Free Sourcing Quote</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;