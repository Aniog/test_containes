import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock, Shield, Truck, ChevronDown } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Home = () => {
  const services = [
    {
      icon: Users,
      title: 'Supplier Sourcing',
      description: 'Identify and qualify manufacturers that match your product specifications, volume requirements, and quality standards.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      description: 'On-site audits to confirm legitimacy, production capacity, quality systems, and compliance with international standards.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection',
      description: 'Pre-shipment and in-process inspections to verify product quality, specifications, and packaging before goods leave the factory.',
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      description: 'Regular progress updates and milestone tracking to keep your orders on schedule and identify issues early.',
    },
    {
      icon: Truck,
      title: 'Logistics Coordination',
      description: 'Manage freight booking, documentation, customs clearance support, and delivery scheduling to your destination.',
    },
  ];

  const processSteps = [
    { number: '01', title: 'Requirement Review', desc: 'We discuss your product needs, target price range, quality expectations, and timeline.' },
    { number: '02', title: 'Supplier Identification', desc: 'We source and screen potential manufacturers based on your criteria.' },
    { number: '03', title: 'Verification & Sampling', desc: 'We audit factories and coordinate samples for your approval.' },
    { number: '04', title: 'Order Management', desc: 'We oversee production, conduct inspections, and manage timelines.' },
    { number: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics and documentation until goods reach you.' },
  ];

  const productCategories = [
    'Electronics & Components',
    'Mechanical Parts & Hardware',
    'Textiles & Apparel',
    'Home & Garden Products',
    'Industrial Equipment',
    'Consumer Goods',
    'Packaging Materials',
    'Automotive Parts',
  ];

  const problems = [
    'Difficulty finding reliable manufacturers who meet quality standards',
    'Uncertainty about factory legitimacy and actual production capabilities',
    'Quality issues discovered only after goods arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics, documentation, and customs processes',
    'Lack of visibility into production progress and delays',
  ];

  const trustPoints = [
    { number: '12+', label: 'Years in Operation' },
    { number: '850+', label: 'Projects Completed' },
    { number: '320+', label: 'Verified Suppliers' },
    { number: '45', label: 'Countries Served' },
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      industry: 'Home Goods',
      challenge: 'Needed reliable kitchenware supplier with consistent quality for 50+ SKUs.',
      result: 'Established 3 verified suppliers; reduced defect rate from 8% to under 1%.',
    },
    {
      client: 'North American Distributor',
      industry: 'Industrial Components',
      challenge: 'Required custom machined parts with tight tolerances and on-time delivery.',
      result: 'Sourced specialized manufacturer; achieved 98% on-time delivery over 18 months.',
    },
    {
      client: 'Australian E-commerce Brand',
      industry: 'Consumer Electronics',
      challenge: 'Sought cost-effective assembly partner for private-label products.',
      result: 'Qualified 2 factories; launched 4 product lines with 35% cost reduction.',
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: 'How do you find suppliers for my specific product?',
      a: 'We use our established network, industry databases, and on-the-ground research to identify manufacturers that match your specifications. We screen for production capacity, quality systems, and export experience before presenting options.',
    },
    {
      q: 'What does factory verification include?',
      a: 'Our audits cover business legitimacy, production equipment, workforce size, quality control processes, material sourcing, and compliance documentation. We provide a detailed report with photos and recommendations.',
    },
    {
      q: 'Do you handle payments to suppliers?',
      a: 'We do not handle payments directly. We provide supplier bank details and can advise on payment terms and methods, but all transactions are between you and the supplier.',
    },
    {
      q: 'What if quality issues arise after inspection?',
      a: 'Our inspections reduce risk significantly, but we work with suppliers to address any issues that surface. We document findings and support resolution discussions. We also advise on appropriate contractual protections.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier identification typically takes 2-4 weeks. Verification and sampling add 3-6 weeks depending on product complexity. Full production timelines vary by order size and product type.',
    },
    {
      q: 'What are your service fees?',
      a: 'Fees are project-based and depend on scope. We provide transparent quotes after understanding your requirements. There are no hidden commissions from suppliers.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              We help overseas companies find reliable Chinese suppliers, verify factories, 
              inspect quality, and coordinate production and shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-primary text-base px-8">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary text-base px-8">
                See How It Works
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              No obligation. Response within 1-2 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-slate-200 bg-white py-6">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustPoints.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-white">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              End-to-end support for sourcing from China, from supplier identification to delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card">
                  <div className="icon">
                    <Icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8">
            <Link to="/services" className="btn btn-outline">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">Sourcing Process</h2>
            <p className="section-subtitle">
              A structured approach that reduces risk and keeps you informed at every stage.
            </p>
          </div>
          <div className="max-w-3xl">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step flex gap-4 md:gap-6 pb-8 last:pb-0">
                <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-sm md:text-base">
                  {step.number}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/how-it-works" className="btn btn-outline">
              Learn More About the Process →
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section bg-white">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle">
              We work across a wide range of product categories for B2B buyers.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((category, index) => (
              <div key={index} className="product-category text-sm font-medium">
                {category}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/products" className="btn btn-outline">
              Browse Product Categories →
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title mb-4">Problems We Solve</h2>
              <p className="text-slate-600 mb-6">
                Sourcing from China involves real challenges. We help buyers navigate them with practical processes.
              </p>
              <Link to="/services" className="btn btn-primary">
                See How We Help
              </Link>
            </div>
            <div className="space-y-3">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle className="w-5 h-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section bg-white border-y border-slate-200">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="section-title">Why Buyers Work With Us</h2>
            <p className="section-subtitle mx-auto">
              Practical experience, established processes, and a focus on results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <Award className="w-10 h-10 mx-auto mb-4 text-slate-700" />
              <h3 className="font-semibold mb-2">On-the-Ground Presence</h3>
              <p className="text-sm text-slate-600">
                Our team is based in China with direct access to factories across major manufacturing regions.
              </p>
            </div>
            <div className="card text-center">
              <Shield className="w-10 h-10 mx-auto mb-4 text-slate-700" />
              <h3 className="font-semibold mb-2">Transparent Reporting</h3>
              <p className="text-sm text-slate-600">
                Detailed audit reports, inspection photos, and regular production updates. No surprises.
              </p>
            </div>
            <div className="card text-center">
              <Users className="w-10 h-10 mx-auto mb-4 text-slate-700" />
              <h3 className="font-semibold mb-2">Buyer-Focused</h3>
              <p className="text-sm text-slate-600">
                We represent your interests. Our fees are from clients, not suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="section-title">Case Studies</h2>
              <p className="section-subtitle">Real results for international buyers.</p>
            </div>
            <Link to="/case-studies" className="btn btn-outline whitespace-nowrap">
              View All Case Studies →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="card">
                <div className="text-sm text-slate-500 mb-1">{study.industry}</div>
                <h3 className="font-semibold mb-3">{study.client}</h3>
                <div className="mb-3">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Challenge</span>
                  <p className="text-sm text-slate-600 mt-1">{study.challenge}</p>
                </div>
                <div>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Result</span>
                  <p className="text-sm text-slate-700 mt-1">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section bg-white">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Common questions about working with a China sourcing agent.</p>
          </div>
          <div className="max-w-3xl">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-question" 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                {openFaq === index && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/contact" className="btn btn-primary">
              Still Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section bg-slate-900 text-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to Start Sourcing?</h2>
              <p className="text-slate-300 mb-6">
                Tell us about your requirements. We will review your needs and provide a preliminary 
                assessment and quote within 1-2 business days.
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>No upfront payment required for initial consultation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Confidentiality assured for all inquiries</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>Response within 1-2 business days</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 md:p-8">
              <InquiryForm compact title="Get a Free Sourcing Quote" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
