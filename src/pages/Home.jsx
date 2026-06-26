import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const services = [
    { title: 'Supplier Sourcing', desc: 'Identify and qualify suppliers matching your requirements' },
    { title: 'Factory Verification', desc: 'On-site audits and background checks on potential suppliers' },
    { title: 'Quality Inspection', desc: 'Pre-shipment and in-process quality control checks' },
    { title: 'Production Monitoring', desc: 'Track production progress and timeline adherence' },
    { title: 'Logistics Coordination', desc: 'Manage shipping, customs, and delivery to your door' },
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory capabilities and legitimacy',
    'Quality issues discovered only after products arrive',
    'Production delays causing missed deadlines',
    'Complex shipping and customs processes',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Clients Served' },
    { icon: Award, label: '10+ Years Experience' },
    { icon: Clock, label: '98% On-Time Delivery' },
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      result: 'Reduced sourcing time by 60% while maintaining quality standards',
      category: 'Home Goods',
    },
    {
      client: 'US Electronics Distributor',
      result: 'Identified 3 qualified suppliers for custom components within 4 weeks',
      category: 'Electronics',
    },
    {
      client: 'Australian Furniture Brand',
      result: 'Achieved 15% cost reduction through verified supplier network',
      category: 'Furniture',
    },
  ];

  const faqs = [
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier identification typically takes 2-4 weeks. Full verification and first order coordination takes 6-10 weeks depending on product complexity.',
    },
    {
      q: 'What industries do you specialize in?',
      a: 'We work across consumer goods, electronics, home furnishings, apparel, industrial components, and promotional products.',
    },
    {
      q: 'How do you verify supplier legitimacy?',
      a: 'We conduct business license verification, on-site factory visits, equipment and capacity assessments, and reference checks with existing clients.',
    },
    {
      q: 'What are your service fees?',
      a: 'Our fees are project-based or percentage of order value. Contact us for a customized quote based on your sourcing requirements.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold tracking-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-[#a0aec0] mb-8">
              Connect with verified suppliers, ensure product quality, and manage your supply chain with a dedicated sourcing partner.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#3182ce] hover:bg-[#2b6cb0] text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-[#e2e8f0] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <point.icon className="w-6 h-6 text-[#3182ce]" />
                <span className="text-[#4a5568] font-medium">{point.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1a202c] mb-4">Our Services</h2>
            <p className="text-[#4a5568] max-w-2xl mx-auto">
              End-to-end support for your China sourcing needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 border border-[#e2e8f0] rounded-lg hover:border-[#3182ce] transition-colors">
                <h3 className="font-semibold text-lg mb-2 text-[#1a202c]">{service.title}</h3>
                <p className="text-[#4a5568]">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-[#3182ce] font-medium hover:underline">
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-[#1a202c] mb-6">Problems We Solve</h2>
              <p className="text-[#4a5568] mb-8">
                Sourcing from China presents unique challenges. We help buyers navigate these complexities.
              </p>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#38a169] mt-0.5 flex-shrink-0" />
                    <span className="text-[#1a202c]">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border border-[#e2e8f0]">
              <h3 className="font-semibold text-xl mb-4">Why Work With Us</h3>
              <ul className="space-y-3 text-[#4a5568]">
                <li>• Local presence with on-ground verification capabilities</li>
                <li>• Established relationships with 200+ verified factories</li>
                <li>• Bilingual team fluent in English and Mandarin</li>
                <li>• Transparent reporting at every stage</li>
                <li>• No minimum order requirements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="py-20 bg-white" id="process">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1a202c] mb-4">How It Works</h2>
            <p className="text-[#4a5568]">A structured approach to reliable sourcing</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your product requirements and specifications' },
              { step: '02', title: 'Supplier Search', desc: 'Identify and shortlist potential suppliers' },
              { step: '03', title: 'Verification', desc: 'Audit factories and verify capabilities' },
              { step: '04', title: 'Production', desc: 'Monitor manufacturing and conduct inspections' },
              { step: '05', title: 'Delivery', desc: 'Coordinate logistics and final delivery' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-semibold text-[#3182ce] mb-4">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#4a5568]">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-[#3182ce] font-medium hover:underline">
              Learn more about our process <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1a202c] mb-4">Products We Source</h2>
            <p className="text-[#4a5568]">Categories we regularly source for our clients</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Consumer Electronics', 'Home & Garden', 'Apparel & Textiles', 'Industrial Components', 'Promotional Products', 'Furniture & Furnishings', 'Packaging Materials', 'Automotive Parts'].map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-[#e2e8f0]">
                <span className="text-[#1a202c] font-medium">{category}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 text-[#3182ce] font-medium hover:underline">
              View detailed product categories <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1a202c] mb-4">Case Studies</h2>
            <p className="text-[#4a5568]">Results from recent sourcing projects</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-6 border border-[#e2e8f0] rounded-lg">
                <div className="text-sm text-[#3182ce] mb-2">{study.category}</div>
                <h3 className="font-semibold mb-3">{study.client}</h3>
                <p className="text-[#4a5568]">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="inline-flex items-center gap-2 text-[#3182ce] font-medium hover:underline">
              View all case studies <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-[#1a202c] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white p-6 rounded-lg border border-[#e2e8f0]">
                <summary className="font-semibold cursor-pointer text-[#1a202c]">{faq.q}</summary>
                <p className="mt-3 text-[#4a5568]">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="inline-flex items-center gap-2 text-[#3182ce] font-medium hover:underline">
              Still have questions? Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Ready to Start Sourcing?</h2>
          <p className="text-[#a0aec0] mb-8">Get a customized sourcing plan and supplier recommendations within 48 hours.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#3182ce] hover:bg-[#2b6cb0] text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
