import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Clock, Shield } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: 'Supplier Identification',
      description: 'We identify and shortlist qualified suppliers matching your product specifications and quality requirements.',
    },
    {
      title: 'Factory Verification',
      description: 'On-site audits verify supplier legitimacy, production capacity, and compliance with international standards.',
    },
    {
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections ensure products meet your specifications before goods leave the factory.',
    },
    {
      title: 'Production Monitoring',
      description: 'Regular factory visits track production progress and address issues before they impact delivery.',
    },
    {
      title: 'Shipping Coordination',
      description: 'We manage logistics partners, documentation, and customs clearance for smooth delivery.',
    },
    {
      title: 'Ongoing Support',
      description: 'Continuous communication and problem resolution throughout the sourcing relationship.',
    },
  ];

  const process = [
    { step: '01', title: 'Requirement Analysis', desc: 'We discuss your product needs, target price, and quality standards.' },
    { step: '02', title: 'Supplier Sourcing', desc: 'Our team identifies and evaluates potential suppliers from our network.' },
    { step: '03', title: 'Verification & Audit', desc: 'We conduct factory visits and verify capabilities and compliance.' },
    { step: '04', title: 'Sample Evaluation', desc: 'Samples are obtained and tested against your specifications.' },
    { step: '05', title: 'Order Management', desc: 'We oversee production, quality checks, and coordinate shipping.' },
    { step: '06', title: 'Delivery & Follow-up', desc: 'Goods arrive at destination with complete documentation.' },
  ];

  const products = [
    'Consumer Electronics & Components',
    'Home & Kitchen Products',
    'Industrial Equipment & Machinery',
    'Textiles & Apparel',
    'Automotive Parts & Accessories',
    'Building Materials & Hardware',
    'Packaging & Printing Supplies',
    'Medical & Healthcare Products',
  ];

  const problems = [
    'Difficulty finding reliable suppliers who meet quality standards',
    'Uncertainty about factory legitimacy and production capacity',
    'Language and cultural barriers in supplier communication',
    'Quality issues discovered only after goods arrive',
    'Complex logistics and customs documentation requirements',
    'Lack of visibility into production progress and timelines',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Verified Suppliers', desc: 'In our active network' },
    { icon: Award, label: '12 Years Experience', desc: 'In international sourcing' },
    { icon: Clock, label: '98% On-Time Delivery', desc: 'Average across projects' },
    { icon: Shield, label: 'ISO 9001 Certified', desc: 'Quality management system' },
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      result: 'Reduced sourcing costs by 23% while improving product quality ratings.',
      category: 'Home Goods',
    },
    {
      client: 'US Industrial Distributor',
      result: 'Established reliable supply chain for 40+ SKUs within 4 months.',
      category: 'Industrial Parts',
    },
    {
      client: 'Australian E-commerce Brand',
      result: 'Achieved 15-day average lead time improvement through supplier optimization.',
      category: 'Consumer Products',
    },
  ];

  const faqs = [
    {
      q: 'What is the typical timeline for a sourcing project?',
      a: 'Initial supplier identification takes 2-4 weeks. Full verification, sampling, and first order typically requires 8-12 weeks depending on product complexity.',
    },
    {
      q: 'How do you verify supplier legitimacy?',
      a: 'We conduct on-site factory audits, review business licenses and certifications, verify production equipment, and check references from existing clients.',
    },
    {
      q: 'What are your service fees?',
      a: 'Our fees are project-based and depend on scope. We provide transparent quotes after understanding your requirements. Contact us for a detailed proposal.',
    },
    {
      q: 'Do you handle shipping and customs clearance?',
      a: 'We coordinate with freight forwarders and assist with export documentation. Import clearance is typically handled by your designated customs broker.',
    },
    {
      q: 'What if quality issues arise after delivery?',
      a: 'We document all inspections and maintain records. Our team works with suppliers to address legitimate quality concerns according to agreed terms.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            We help international companies identify verified suppliers, manage quality control,
            and coordinate logistics for reliable sourcing from China.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
          >
            Get a Free Sourcing Quote <ArrowRight size={20} />
          </Link>
          <p className="text-sm text-slate-400 mt-4">No obligation. Response within 24 hours.</p>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <point.icon className="text-slate-700" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{point.label}</div>
                  <div className="text-sm text-slate-500">{point.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive sourcing support from supplier discovery through delivery.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-xl hover:border-slate-300 transition-colors">
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline">
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Our Sourcing Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A structured approach that minimizes risk and ensures consistent results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="text-2xl font-semibold text-slate-300 mb-4">{item.step}</div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline">
              Learn more about our process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Products We Source</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We work across diverse product categories with established supplier networks.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg">
              <CheckCircle className="text-emerald-600 flex-shrink-0" size={20} />
              <span className="text-sm">{product}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline">
            View complete product categories <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Problems We Solve</h2>
            <p className="text-slate-600">Common sourcing challenges we help our clients overcome.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-3 p-5 bg-white rounded-lg border border-gray-200">
                <CheckCircle className="text-emerald-600 mt-0.5 flex-shrink-0" size={20} />
                <span className="text-sm text-slate-700">{problem}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Case Studies</h2>
          <p className="text-slate-600">Results from recent sourcing projects.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-xl">
              <div className="text-xs uppercase tracking-wider text-slate-500 mb-3">{study.category}</div>
              <h3 className="font-semibold mb-3">{study.client}</h3>
              <p className="text-sm text-slate-600">{study.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline">
            View all case studies <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-lg p-6 group">
                <summary className="font-medium cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-slate-400 group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-sm text-slate-600 pr-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Start Your Sourcing Project?</h2>
        <p className="text-slate-600 mb-8 max-w-xl mx-auto">
          Contact us for a free consultation and detailed sourcing proposal tailored to your requirements.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
        >
          Get a Free Sourcing Quote <ArrowRight size={20} />
        </Link>
      </section>
    </div>
  );
};

export default Home;