import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {

  const services = [
    { title: 'Supplier Identification', desc: 'Find qualified manufacturers matching your requirements.' },
    { title: 'Factory Verification', desc: 'On-site audits to confirm legitimacy and capabilities.' },
    { title: 'Quality Inspection', desc: 'Pre-shipment checks to ensure product standards.' },
    { title: 'Production Monitoring', desc: 'Track progress and address issues in real time.' },
    { title: 'Logistics Coordination', desc: 'Manage shipping, customs, and delivery.' },
  ];

  const problems = [
    'Difficulty finding reliable suppliers',
    'Uncertainty about factory legitimacy',
    'Quality issues discovered too late',
    'Communication barriers with manufacturers',
    'Complex logistics and shipping processes',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '98% Satisfaction Rate' },
    { icon: Clock, label: '12+ Years Experience' },
    { icon: CheckCircle, label: '2,000+ Factories Verified' },
  ];

  return (
    <div>
      <section className="bg-[#1E3A5F] text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            We help overseas companies source products from China with confidence through verified suppliers, quality control, and reliable logistics.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-[#1E3A5F] font-semibold rounded hover:bg-slate-100 transition-colors"
          >
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#1F2937] mb-4">Our Services</h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto">Comprehensive support throughout the sourcing process.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-slate-200 rounded-lg hover:shadow-sm transition-shadow">
              <h3 className="font-semibold text-lg mb-2 text-[#1F2937]">{service.title}</h3>
              <p className="text-[#4B5563] text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/services" className="text-[#1E3A5F] font-medium hover:underline">View all services →</Link>
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1F2937] mb-4">The Sourcing Process</h2>
            <p className="text-[#4B5563]">A clear, structured approach to sourcing from China.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {['Consultation', 'Supplier Search', 'Verification', 'Production', 'Shipping'].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center border border-slate-200">
                <div className="w-8 h-8 bg-[#1E3A5F] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-semibold">{index + 1}</div>
                <h3 className="font-semibold text-[#1F2937]">{step}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-it-works" className="text-[#1E3A5F] font-medium hover:underline">Learn more about our process →</Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#1F2937] mb-6">Problems We Solve</h2>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#059669] mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-[#4B5563]">{problem}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg border border-slate-200">
            <h3 className="font-semibold text-xl mb-4 text-[#1F2937]">Why Work With Us</h3>
            <p className="text-[#4B5563] mb-6">We provide transparent communication, documented processes, and practical solutions tailored to your sourcing needs.</p>
            <Link to="/contact" className="inline-block px-6 py-2.5 bg-[#1E3A5F] text-white font-medium rounded hover:bg-[#2E5A8B] transition-colors">Start a Conversation</Link>
          </div>
        </div>
      </section>

      <section className="bg-[#1E3A5F] py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-semibold mb-3">Our Track Record</h2>
            <p className="text-slate-200">Numbers that reflect our commitment to clients.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <point.icon className="mx-auto mb-4 text-[#4A90D9]" size={32} />
                <div className="text-2xl font-semibold mb-1">{point.label.split(' ')[0]}</div>
                <div className="text-sm text-slate-200">{point.label.split(' ').slice(1).join(' ')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-[#1F2937] mb-4">Recent Case Studies</h2>
          <p className="text-[#4B5563]">See how we've helped companies source successfully.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Electronics Components', result: 'Reduced sourcing time by 40%' },
            { title: 'Home Textiles', result: 'Identified 3 verified suppliers' },
            { title: 'Industrial Equipment', result: 'Zero quality issues in 18 months' },
          ].map((study, index) => (
            <div key={index} className="p-6 border border-slate-200 rounded-lg">
              <h3 className="font-semibold mb-2 text-[#1F2937]">{study.title}</h3>
              <p className="text-sm text-[#4B5563] mb-4">{study.result}</p>
              <Link to="/case-studies" className="text-sm text-[#1E3A5F] font-medium hover:underline">Read case study →</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F3F4F6] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#1F2937] mb-4">Ready to Start Sourcing?</h2>
          <p className="text-[#4B5563] mb-8">Request a free quote and receive a detailed sourcing plan within 48 hours.</p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-[#1E3A5F] text-white font-semibold rounded hover:bg-[#2E5A8B] transition-colors">Get a Free Sourcing Quote</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
