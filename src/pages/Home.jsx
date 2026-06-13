import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Supplier Sourcing', desc: 'Identify and connect with qualified manufacturers matching your requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy, capacity, and compliance.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process inspections to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Regular progress updates and timeline management throughout manufacturing.' },
    { title: 'Logistics Coordination', desc: 'Freight booking, customs documentation, and delivery tracking.' },
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capabilities',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and customs clearance processes',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served', value: 'Since 2018' },
    { icon: Award, label: '98% On-Time Delivery', value: 'Last 12 months' },
    { icon: CheckCircle, label: '2,400+ Inspections', value: 'Completed' },
    { icon: Clock, label: '15-Day Average', value: 'Sourcing Timeline' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-slate-300 mb-10">
              We help overseas companies source products from China with verified suppliers, quality control, and reliable logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get a Free Sourcing Quote
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-600 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-6 h-6 text-blue-800" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{point.label}</div>
                  <div className="text-sm text-slate-500">{point.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-slate-900 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            End-to-end support for sourcing, verification, quality control, and logistics.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <div key={index} className="p-8 border border-slate-200 rounded-xl hover:border-slate-300 transition-colors">
              <h3 className="font-semibold text-xl text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="text-blue-800 font-medium hover:underline">
            View all services →
          </Link>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">Problems We Solve</h2>
              <p className="text-slate-600 mb-8">
                Sourcing from China involves multiple challenges. We address the most common issues buyers face.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
              >
                Start a Conversation
              </Link>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">Ready to Source from China?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Get a detailed sourcing plan and supplier recommendations within 3 business days.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-8 py-3.5 bg-blue-800 text-white font-medium rounded-lg hover:bg-blue-900 transition-colors"
        >
          Get a Free Sourcing Quote
        </Link>
      </section>
    </div>
  );
};

export default Home;
