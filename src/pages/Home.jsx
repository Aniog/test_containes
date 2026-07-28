import React, { useEffect, useRef } from 'react';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Award, Clock, Shield, Truck } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load images when component mounts
    if (window.ImageHelper && containerRef.current) {
      const config = strkImgConfig;
      return window.ImageHelper.loadImages(config, containerRef.current);
    }
  }, []);

  const services = [
    {
      icon: Users,
      title: 'Supplier Sourcing',
      desc: 'Identify and qualify manufacturers that match your product specifications, quality standards, and volume requirements.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      desc: 'On-site audits to confirm legitimacy, production capacity, equipment, and compliance with international standards.',
    },
    {
      icon: Award,
      title: 'Quality Inspection',
      desc: 'Pre-shipment, in-process, and container loading inspections to ensure products meet your specifications.',
    },
    {
      icon: Clock,
      title: 'Production Monitoring',
      desc: 'Regular progress updates and milestone tracking throughout the manufacturing cycle.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      desc: 'Freight booking, documentation, customs clearance support, and delivery scheduling to your destination.',
    },
    {
      icon: CheckCircle,
      title: 'Order Management',
      desc: 'End-to-end coordination including sample approval, contract negotiation, and payment milestone management.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Submit Your Requirements',
      desc: 'Share product specifications, target price, quantity, and timeline through our inquiry form.',
    },
    {
      num: '02',
      title: 'Supplier Identification',
      desc: 'We shortlist 3-5 qualified manufacturers based on your criteria and provide detailed profiles.',
    },
    {
      num: '03',
      title: 'Verification & Samples',
      desc: 'Factory audits and sample evaluation before you commit to production.',
    },
    {
      num: '04',
      title: 'Production & QC',
      desc: 'We monitor production milestones and conduct quality inspections at key stages.',
    },
    {
      num: '05',
      title: 'Shipping & Delivery',
      desc: 'Documentation, freight booking, and coordination until goods reach your warehouse.',
    },
  ];

  const products = [
    { title: 'Electronics & Components', desc: 'Consumer electronics, PCBs, cables, power supplies' },
    { title: 'Home & Kitchen', desc: 'Appliances, cookware, furniture, textiles' },
    { title: 'Industrial Equipment', desc: 'Machinery parts, tools, safety equipment' },
    { title: 'Apparel & Accessories', desc: 'Clothing, bags, footwear, promotional items' },
    { title: 'Automotive Parts', desc: 'OEM components, aftermarket accessories' },
    { title: 'Packaging Materials', desc: 'Custom boxes, labels, protective packaging' },
    { title: 'Medical & Healthcare', desc: 'Devices, disposables, wellness products' },
    { title: 'Toys & Sporting Goods', desc: 'Games, fitness equipment, outdoor gear' },
  ];

  const problems = [
    {
      title: 'Unreliable suppliers',
      desc: 'Many factories promise quality and capacity they cannot deliver. We verify before you order.',
    },
    {
      title: 'Quality issues at arrival',
      desc: 'Without inspection, defects are discovered too late. Our QC catches problems before shipment.',
    },
    {
      title: 'Communication barriers',
      desc: 'Language and time zone gaps cause costly misunderstandings. We bridge the gap daily.',
    },
    {
      title: 'Complex logistics',
      desc: 'Freight, documentation, and customs can delay shipments. We coordinate end-to-end.',
    },
  ];

  const trustPoints = [
    { icon: Users, label: '180+ Active Clients' },
    { icon: Award, label: '12 Years Experience' },
    { icon: Shield, label: '850+ Factories Audited' },
    { icon: Truck, label: '2,400+ Shipments Managed' },
  ];

  const caseStudies = [
    {
      client: 'US Retail Chain',
      product: 'LED Lighting',
      result: 'Reduced defect rate from 8% to under 1%',
      desc: 'Sourced 3 new suppliers and implemented staged QC process for 40,000 units monthly.',
    },
    {
      client: 'European Distributor',
      product: 'Kitchen Appliances',
      result: 'Cut sourcing lead time by 35%',
      desc: 'Established direct factory relationships and consolidated shipments for 12 SKUs.',
    },
    {
      client: 'Australian Importer',
      product: 'Outdoor Furniture',
      result: 'Achieved 22% cost reduction',
      desc: 'Replaced trading company with verified manufacturer and optimized container loading.',
    },
  ];

  const faqs = [
    {
      q: 'How much does your service cost?',
      a: 'Our fees are transparent and based on project scope. Typical sourcing projects range from 3-8% of order value depending on complexity and volume. We provide a clear quote before any work begins.',
    },
    {
      q: 'Do you require upfront payment?',
      a: 'We charge a modest project fee to begin supplier identification. The balance is due upon successful supplier selection or at agreed milestones. All terms are documented in advance.',
    },
    {
      q: 'Can you source any product?',
      a: 'We work across most categories except restricted or highly regulated items (pharmaceuticals, weapons, certain chemicals). If we cannot assist, we will tell you promptly.',
    },
    {
      q: 'How long does the sourcing process take?',
      a: 'Initial supplier shortlist is typically delivered within 7-10 business days. Full verification and sample approval adds 2-4 weeks depending on product complexity.',
    },
    {
      q: 'Do you work with small order quantities?',
      a: 'Yes. While many factories prefer larger volumes, we regularly help clients with MOQs as low as a few hundred units for certain product categories.',
    },
  ];

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 id="hero-title">China Sourcing Agent for Global Buyers</h1>
            <p id="hero-subtitle">
              We help overseas companies find reliable Chinese suppliers, verify factories, 
              inspect quality, and coordinate production and shipping.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary btn-lg">
                See How It Works
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              data-strk-img-id="hero-factory-01"
              data-strk-img="[hero-subtitle] [hero-title] factory production manufacturing"
              data-strk-img-ratio="16x9"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              alt="Modern manufacturing facility with production lines"
            />
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-container">
          {trustPoints.map((item, idx) => (
            <div key={idx} className="trust-item">
              <item.icon size={18} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="section" id="services">
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle">
            End-to-end support for buyers sourcing from China
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="card service-card">
              <div className="service-icon">
                <service.icon size={24} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Our Sourcing Process</h2>
          <p className="section-subtitle">
            A structured approach that reduces risk and improves outcomes
          </p>
        </div>
        <div className="process-steps">
          {processSteps.map((step, idx) => (
            <div key={idx} className="process-step">
              <div className="process-number">{step.num}</div>
              <div className="process-content">
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Products We Source */}
      <section className="section">
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle">
            Experience across diverse categories and industries
          </p>
        </div>
        <div className="products-grid">
          {products.map((product, idx) => (
            <div key={idx} className="product-card">
              <div className="card">
                <h4>{product.title}</h4>
                <p>{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="btn btn-outline">
            View Full Product Categories
          </Link>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Problems We Solve</h2>
          <p className="section-subtitle">
            Common challenges when sourcing from China without local support
          </p>
        </div>
        <div className="problems-grid">
          {problems.map((problem, idx) => (
            <div key={idx} className="card problem-card">
              <div className="problem-icon">
                <Shield size={28} />
              </div>
              <div>
                <h4 style={{ marginBottom: '0.25rem' }}>{problem.title}</h4>
                <p style={{ margin: 0, fontSize: '0.9375rem' }}>{problem.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust / Stats */}
      <section className="section">
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Why Buyers Work With Us</h2>
          <p className="section-subtitle">
            Practical experience, transparent process, consistent results
          </p>
        </div>
        <div className="stats-grid">
          <div className="stat-card card">
            <div className="stat-number">98%</div>
            <div className="stat-label">On-time delivery rate</div>
          </div>
          <div className="stat-card card">
            <div className="stat-number">4.8/5</div>
            <div className="stat-label">Average client rating</div>
          </div>
          <div className="stat-card card">
            <div className="stat-number">65%</div>
            <div className="stat-label">Repeat order rate</div>
          </div>
          <div className="stat-card card">
            <div className="stat-number">14</div>
            <div className="stat-label">Avg. days to first shipment</div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">
            Real results for real businesses
          </p>
        </div>
        <div className="case-grid">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="card case-card">
              <div className="case-content">
                <div className="case-meta">{study.client}</div>
                <h3>{study.product}</h3>
                <p>{study.desc}</p>
                <div className="case-result">{study.result}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/case-studies" className="btn btn-outline">
            Read More Case Studies
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>
        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <details key={idx} className="faq-item">
              <summary className="faq-question">
                {faq.q}
                <span className="faq-icon">⌄</span>
              </summary>
              <div className="faq-answer">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Start Your Sourcing Project</h2>
          <p className="section-subtitle">
            Tell us what you need. We will respond within 24 hours with next steps.
          </p>
        </div>
        <div className="contact-container">
          <InquiryForm />
        </div>
      </section>
    </div>
  );
};

export default Home;