import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Truck, Search, Shield, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'Identify and qualify manufacturers that match your product specifications, volume, and quality requirements.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      desc: 'On-site audits to confirm legitimacy, production capacity, and compliance with international standards.',
    },
    {
      icon: CheckCircle,
      title: 'Quality Inspection',
      desc: 'Pre-shipment and in-process inspections to ensure products meet your specifications before delivery.',
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular progress updates and milestone checks throughout the manufacturing cycle.',
    },
    {
      icon: Truck,
      title: 'Logistics Coordination',
      desc: 'Manage freight booking, documentation, and customs clearance for reliable delivery.',
    },
    {
      icon: Users,
      title: 'Order Management',
      desc: 'End-to-end coordination from sample approval through final shipment and payment release.',
    },
  ];

  const processSteps = [
    { num: '01', title: 'Requirement Review', desc: 'We discuss your product specs, target price, volume, and timeline.' },
    { num: '02', title: 'Supplier Identification', desc: 'We shortlist 3-5 qualified factories based on your criteria.' },
    { num: '03', title: 'Verification & Samples', desc: 'We audit factories and arrange samples for your approval.' },
    { num: '04', title: 'Production Oversight', desc: 'We monitor production milestones and conduct quality checks.' },
    { num: '05', title: 'Inspection & Shipping', desc: 'Final inspection, documentation, and logistics coordination.' },
    { num: '06', title: 'Delivery & Support', desc: 'Shipment tracking and post-delivery assistance as needed.' },
  ];

  const productCategories = [
    'Electronics & Components',
    'Home & Kitchen Appliances',
    'Apparel & Textiles',
    'Industrial Machinery',
    'Automotive Parts',
    'Consumer Goods',
    'Packaging & Materials',
    'Hardware & Tools',
  ];

  const problems = [
    'Difficulty finding factories that meet quality and volume requirements',
    'Uncertainty about supplier legitimacy and production capability',
    'Inconsistent product quality across batches',
    'Communication barriers and time zone challenges',
    'Complex logistics, documentation, and customs processes',
    'Payment risks without proper verification milestones',
  ];

  const trustPoints = [
    { icon: Award, title: '15+ Years Experience', desc: 'Working with international buyers across 30+ countries.' },
    { icon: Users, title: '200+ Factories Audited', desc: 'Regular on-site visits and ongoing supplier relationships.' },
    { icon: Shield, title: 'Documented Processes', desc: 'Clear reporting at every stage of the sourcing cycle.' },
    { icon: Truck, title: 'Logistics Partners', desc: 'Established relationships with freight forwarders and carriers.' },
  ];

  const caseStudies = [
    {
      title: 'Kitchen Appliance Brand',
      result: 'Reduced defect rate from 8% to under 1%',
      desc: 'A European kitchenware brand needed reliable production for a new line of small appliances. We identified three qualified factories, managed sample iterations, and implemented staged inspections.',
      location: 'Zhejiang, China',
    },
    {
      title: 'Industrial Equipment Distributor',
      result: 'On-time delivery for 12 consecutive orders',
      desc: 'A North American distributor required consistent supply of specialized components. We established a verified supplier network and coordinated monthly production schedules.',
      location: 'Jiangsu, China',
    },
    {
      title: 'Private Label Retailer',
      result: 'Expanded from 3 to 14 SKUs in 18 months',
      desc: 'A growing retailer wanted to develop their own branded home goods line. We supported product development, factory selection, and quality systems for multiple categories.',
      location: 'Guangdong, China',
    },
  ];

  const faqs = [
    {
      q: 'How do you find suppliers for my product?',
      a: 'We use a combination of our existing supplier database, industry networks, and targeted outreach. We evaluate factories based on your specific requirements for quality, capacity, certifications, and pricing.',
    },
    {
      q: 'Do you charge a commission or flat fee?',
      a: 'We work on a project or retainer basis depending on scope. We provide transparent pricing before any work begins. There are no hidden commissions on supplier pricing.',
    },
    {
      q: 'Can you guarantee product quality?',
      a: 'We cannot guarantee outcomes, but we reduce risk through factory verification, sample approval, and inspection protocols. We document findings at each stage so you can make informed decisions.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier identification typically takes 2-4 weeks. Sample development and approval varies by product complexity. Full production cycles depend on the item and order volume.',
    },
    {
      q: 'Do you handle shipping and customs?',
      a: 'We coordinate with freight forwarders and assist with documentation. You work directly with carriers for booking, or we can manage the process on your behalf.',
    },
    {
      q: 'What if I already have a supplier?',
      a: 'We can provide verification, inspection, or production monitoring services for existing suppliers. Many clients use us to audit current partners or manage quality on ongoing orders.',
    },
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0A2540] text-white py-20 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="text-xl text-[#94A3B8] mb-8">
              We help overseas companies find reliable manufacturers, verify production capability, 
              inspect quality, and coordinate shipping from China.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn btn-accent btn-lg">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-lg bg-white/10 border-white/20 text-white hover:bg-white/20">
                See How It Works
              </Link>
            </div>
            <p className="mt-6 text-sm text-[#64748B]">
              No obligation. We respond to qualified inquiries within 1-2 business days.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-[#E2E8F0] py-6">
        <div className="container">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-8 gap-y-4 text-sm text-[#64748B]">
            <div>15+ years sourcing experience</div>
            <div>200+ factories audited</div>
            <div>30+ countries served</div>
            <div>ISO 9001 aligned processes</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sourcing Services</h2>
            <p className="section-subtitle">
              End-to-end support or targeted assistance at any stage of your sourcing project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="service-card">
                  <div className="w-12 h-12 bg-[#F1F5F9] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-[#0A2540]" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-[#475569]">{service.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn btn-secondary">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sourcing Process</h2>
            <p className="section-subtitle">
              A structured approach to reduce risk and improve outcomes when sourcing from China.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step flex gap-6 pb-8">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0A2540] text-white flex items-center justify-center font-semibold text-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                  <p className="text-[#475569]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/how-it-works" className="btn btn-secondary">Learn More About the Process</Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Products We Source</h2>
            <p className="section-subtitle">
              We work across a wide range of categories. If your product is not listed, contact us to discuss feasibility.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {productCategories.map((category, index) => (
              <div key={index} className="product-category text-center">
                <p className="font-medium text-[#0A2540]">{category}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="btn btn-secondary">Explore Product Categories</Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Common Sourcing Challenges</h2>
              <p className="text-[#475569] mb-6">
                Many buyers encounter similar issues when sourcing directly from China. 
                We help address these through structured processes and on-the-ground support.
              </p>
              <Link to="/services" className="btn btn-primary">See How We Help</Link>
            </div>
            <div className="space-y-3">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white border border-[#E2E8F0] rounded-lg">
                  <CheckCircle className="text-[#059669] mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-[#475569]">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Buyers Work With Us</h2>
            <p className="section-subtitle">
              Practical experience and documented processes, not marketing claims.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="trust-item">
                  <div className="trust-icon">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{point.title}</h3>
                    <p className="text-sm text-[#475569]">{point.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Case Studies</h2>
            <p className="section-subtitle">
              Examples of sourcing projects we have supported. Results vary by product and supplier.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-card">
                <div className="p-6">
                  <div className="text-xs text-[#64748B] mb-2">{study.location}</div>
                  <h3 className="font-semibold text-lg mb-3">{study.title}</h3>
                  <p className="text-sm font-medium text-[#059669] mb-4">{study.result}</p>
                  <p className="text-sm text-[#475569]">{study.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies" className="btn btn-secondary">View All Case Studies</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(index)} aria-expanded={openFaq === index}>
                  <span>{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="text-[#94A3B8]" size={20} /> : <ChevronDown className="text-[#94A3B8]" size={20} />}
                </button>
                {openFaq === index && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact" className="btn btn-primary">Still have questions? Contact us</Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section section-alt">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-3">Ready to Start a Sourcing Project?</h2>
              <p className="text-[#475569]">
                Tell us about your requirements. We will review and respond within 1-2 business days.
              </p>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
