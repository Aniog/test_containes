import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock, Shield, Truck, Plus, Minus } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };
  const services = [
    {
      icon: Users,
      title: 'Supplier Sourcing',
      desc: 'Identify and qualify manufacturers that match your product specifications, volume requirements, and quality standards.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      desc: 'On-site audits to confirm legitimacy, production capacity, quality systems, and compliance with international standards.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection',
      desc: 'Pre-shipment, in-process, and container loading inspections to ensure products meet your specifications before shipment.',
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular progress updates and milestone tracking throughout the manufacturing process to keep projects on schedule.',
    },
    {
      icon: Truck,
      title: 'Logistics Coordination',
      desc: 'Manage freight booking, documentation, customs clearance support, and delivery coordination to your destination.',
    },
    {
      icon: Award,
      title: 'Ongoing Support',
      desc: 'Maintain supplier relationships, handle reorders, and provide continuous sourcing assistance for your business.',
    },
  ];

  const processSteps = [
    { num: '01', title: 'Requirement Review', desc: 'We discuss your product needs, target price, quality requirements, and timeline.' },
    { num: '02', title: 'Supplier Identification', desc: 'We source and shortlist 3-5 qualified manufacturers based on your criteria.' },
    { num: '03', title: 'Verification & Samples', desc: 'We audit factories and arrange samples for your approval before production.' },
    { num: '04', title: 'Production Oversight', desc: 'We monitor manufacturing milestones and conduct quality inspections at key stages.' },
    { num: '05', title: 'Shipping & Delivery', desc: 'We coordinate logistics, documentation, and track your shipment to destination.' },
  ];

  const products = [
    'Electronics & Components',
    'Home & Kitchen Appliances',
    'Apparel & Textiles',
    'Industrial Equipment',
    'Automotive Parts',
    'Consumer Goods',
    'Packaging Materials',
    'Hardware & Tools',
  ];

  const problems = [
    'Difficulty finding reliable manufacturers who can meet quality and volume requirements.',
    'Uncertainty about supplier legitimacy, production capacity, and actual capabilities.',
    'Quality issues discovered only after products arrive, leading to costly returns or disputes.',
    'Communication barriers causing delays, misunderstandings, and missed deadlines.',
    'Complex logistics, documentation, and customs processes that slow down delivery.',
    'Lack of visibility into production status and inability to address issues in real time.',
  ];

  const trustPoints = [
    { number: '12+', label: 'Years in Operation' },
    { number: '850+', label: 'Projects Completed' },
    { number: '320+', label: 'Active Supplier Relationships' },
    { number: '45', label: 'Countries Served' },
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      product: 'Kitchen Appliances',
      result: 'Reduced unit cost by 18% while improving defect rate from 4.2% to under 0.8%.',
      category: 'Home Goods',
    },
    {
      client: 'North American Distributor',
      product: 'Automotive Components',
      result: 'Established three verified suppliers, enabling 40% volume growth within 18 months.',
      category: 'Automotive',
    },
    {
      client: 'Australian E-commerce Brand',
      product: 'Consumer Electronics Accessories',
      result: 'Cut lead time from 75 to 52 days through improved production scheduling and QC.',
      category: 'Electronics',
    },
  ];

  const faqs = [
    {
      q: 'How much does your sourcing service cost?',
      a: 'Our fees are structured as a percentage of order value or a fixed project fee, depending on scope. We provide transparent quotes before any work begins.',
    },
    {
      q: 'Do you require upfront payment?',
      a: 'We require a modest project initiation fee. The majority of our fee is due upon successful completion of key milestones such as verified supplier selection or inspection sign-off.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier identification typically takes 2-3 weeks. Full process from inquiry to first shipment depends on product complexity and usually ranges from 8-16 weeks.',
    },
    {
      q: 'Can you work with my existing suppliers?',
      a: 'Yes. We can audit and manage your current suppliers, or introduce additional options to improve pricing, quality, or capacity.',
    },
    {
      q: 'What if I am not satisfied with the suppliers you find?',
      a: 'We continue sourcing until you approve a supplier. If no suitable options are found within agreed parameters, we refund the initiation fee.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0F172A] text-white py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-6">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl">
              We help overseas companies find reliable Chinese suppliers, verify factories, 
              inspect quality, and coordinate production and shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary text-base px-8">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn-secondary text-base px-8 border-white/30 text-white hover:bg-white/10 hover:border-white/50">
                See How It Works
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#0EA5E9]" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={16} className="text-[#0EA5E9]" />
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-[#E2E8F0] bg-white py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-4">
            {trustPoints.map((point, idx) => (
              <div key={idx} className="text-center px-6">
                <div className="text-2xl font-semibold text-[#0F172A]">{point.number}</div>
                <div className="text-sm text-[#64748B]">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">End-to-end support for sourcing from China.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="card">
                  <div className="w-11 h-11 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-[#0EA5E9]" size={22} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link to="/services" className="btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section bg-white border-y border-[#E2E8F0]">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">Our Sourcing Process</h2>
            <p className="section-subtitle">A structured approach that reduces risk and improves outcomes.</p>
          </div>
          <div className="max-w-3xl">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-step flex gap-6 pb-8 last:pb-0">
                <div className="w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/how-it-works" className="btn-secondary">Learn More About the Process</Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section">
        <div className="container">
          <div className="mb-10">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle">We work across a wide range of product categories.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((product, idx) => (
              <div key={idx} className="card py-4 px-5 text-sm font-medium text-[#334155]">
                {product}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/products" className="btn-secondary">See Full Product Categories</Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section bg-white border-y border-[#E2E8F0]">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title mb-4">Problems We Solve</h2>
              <p className="text-[#475569]">
                Sourcing from China involves real challenges. We address the most common issues buyers face.
              </p>
            </div>
            <div className="space-y-4">
              {problems.map((problem, idx) => (
                <div key={idx} className="flex gap-3">
                  <CheckCircle className="text-[#0EA5E9] mt-0.5 flex-shrink-0" size={20} />
                  <p className="text-[#475569] text-sm">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="section-title">Why Buyers Work With Us</h2>
            <p className="section-subtitle mx-auto">Practical experience. Consistent process. Clear communication.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-3xl font-semibold text-[#0F172A] mb-2">ISO 9001</div>
              <p className="text-sm text-[#475569]">Our internal processes are certified to international quality management standards.</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-semibold text-[#0F172A] mb-2">On-Site Audits</div>
              <p className="text-sm text-[#475569]">Every recommended supplier is visited and evaluated by our team before introduction.</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-semibold text-[#0F172A] mb-2">No Hidden Fees</div>
              <p className="text-sm text-[#475569]">All costs are disclosed upfront. We do not accept commissions from suppliers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-white border-y border-[#E2E8F0]">
        <div className="container">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="section-title">Case Studies</h2>
              <p className="section-subtitle">Real results from recent client projects.</p>
            </div>
            <Link to="/case-studies" className="hidden md:block btn-secondary">View All Cases</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, idx) => (
              <div key={idx} className="case-card card">
                <div className="text-xs uppercase tracking-wider text-[#64748B] mb-3">{study.category}</div>
                <h3 className="font-semibold mb-1">{study.client}</h3>
                <p className="text-sm text-[#475569] mb-4">{study.product}</p>
                <p className="text-sm leading-relaxed">{study.result}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 md:hidden">
            <Link to="/case-studies" className="btn-secondary">View All Cases</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <div className="mb-8">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl divide-y divide-[#E2E8F0]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-1">
                <button 
                  className="faq-question group w-full"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{faq.q}</span>
                  <span className="text-[#94A3B8] group-hover:text-[#0EA5E9]">
                    {openFaq === idx ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/contact" className="text-sm font-medium text-[#0EA5E9]">Still have questions? Contact us →</Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section bg-white border-t border-[#E2E8F0]">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="section-title">Get a Free Sourcing Quote</h2>
              <p className="text-[#475569]">Tell us about your project. We will respond within one business day.</p>
            </div>
            <div className="card">
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
