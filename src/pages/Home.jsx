import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, CheckCircle, ClipboardCheck, Factory, Truck, 
  Shield, Users, Award, Clock, Globe 
} from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      desc: 'Identify and qualify manufacturers matching your product specifications and volume requirements.',
    },
    {
      icon: Shield,
      title: 'Factory Verification',
      desc: 'On-site audits to confirm legitimacy, capabilities, and compliance before you commit.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      desc: 'Pre-shipment and in-line inspections to ensure products meet your quality standards.',
    },
    {
      icon: Factory,
      title: 'Production Monitoring',
      desc: 'Regular progress tracking and milestone reporting throughout the manufacturing cycle.',
    },
    {
      icon: Truck,
      title: 'Shipping Coordination',
      desc: 'Logistics management including freight booking, documentation, and customs support.',
    },
  ];

  const problems = [
    'Difficulty finding reliable manufacturers who meet quality standards',
    'Uncertainty about supplier legitimacy and actual production capabilities',
    'Quality issues discovered only after products arrive',
    'Communication barriers and time zone challenges',
    'Complex logistics and documentation requirements',
    'Risk of payment to non-performing suppliers',
  ];

  const trustPoints = [
    { icon: Users, label: '500+ Buyers Served' },
    { icon: Factory, label: '1,200+ Factories Audited' },
    { icon: Globe, label: '35 Countries' },
    { icon: Award, label: '98% Repeat Rate' },
  ];

  const caseStudies = [
    {
      client: 'European Home Goods Retailer',
      product: 'Kitchenware & Tabletop',
      result: 'Sourced 12 qualified suppliers, reduced unit cost by 22%',
      metric: '22%',
      metricLabel: 'Cost Reduction',
    },
    {
      client: 'US Industrial Equipment Distributor',
      product: 'Hydraulic Components',
      result: 'Verified 3 factories, established ongoing QC program',
      metric: '3',
      metricLabel: 'Factories Qualified',
    },
    {
      client: 'Australian Outdoor Brand',
      product: 'Camping Equipment',
      result: 'Full production oversight for 8,000-unit launch',
      metric: '100%',
      metricLabel: 'On-Time Delivery',
    },
  ];

  const faqs = [
    {
      q: 'How do you find suppliers for my specific product?',
      a: 'We use a combination of our established supplier network, industry databases, and targeted outreach. We screen candidates against your specifications before presenting options.',
    },
    {
      q: 'What does factory verification include?',
      a: 'We conduct on-site visits to verify business licenses, production capacity, equipment, workforce, and quality systems. A detailed report with photos is provided.',
    },
    {
      q: 'How are quality inspections conducted?',
      a: 'Our inspectors follow AQL sampling standards. We check workmanship, materials, dimensions, functionality, and packaging. Reports include photos and pass/fail criteria.',
    },
    {
      q: 'Do you handle payments to suppliers?',
      a: 'We do not handle payments directly. We provide supplier recommendations and can advise on payment terms and methods that protect your interests.',
    },
    {
      q: 'What are your fees?',
      a: 'Our sourcing and verification services are quoted based on project scope. Inspection fees are per-man-day. Contact us for a detailed proposal.',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>China Sourcing Agent for Global Buyers</h1>
            <p>
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

          <div className="trust-bar">
            {trustPoints.map((item, index) => (
              <div key={index} className="trust-item">
                <item.icon size={18} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section container" id="services">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            WHAT WE DO
          </div>
          <h2>End-to-End Sourcing Services</h2>
          <p className="text-muted" style={{ maxWidth: '520px', margin: '0.75rem auto 0' }}>
            From initial supplier identification through final delivery, we manage the details so you can focus on your business.
          </p>
        </div>

        <div className="grid-3">
          {services.map((service, index) => (
            <div key={index} className="card">
              <div className="card-icon">
                <service.icon size={24} />
              </div>
              <h3 style={{ marginBottom: '0.75rem' }}>{service.title}</h3>
              <p className="text-muted" style={{ fontSize: '0.9375rem', margin: 0 }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </section>

      {/* Sourcing Process */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              OUR APPROACH
            </div>
            <h2>The Sourcing Process</h2>
            <p className="text-muted" style={{ maxWidth: '480px', margin: '0.75rem auto 0' }}>
              A structured, transparent process designed to reduce risk and deliver results.
            </p>
          </div>

          <div className="grid-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              { num: '01', title: 'Requirements & Briefing', desc: 'We discuss your product specifications, target pricing, quality standards, and timeline.' },
              { num: '02', title: 'Supplier Identification', desc: 'We research and shortlist manufacturers that match your criteria from our network and databases.' },
              { num: '03', title: 'Verification & Sampling', desc: 'We audit factories and coordinate samples for your review before any production commitment.' },
              { num: '04', title: 'Order & Production', desc: 'We support contract negotiation and monitor production milestones with regular reporting.' },
              { num: '05', title: 'Quality Inspection', desc: 'Pre-shipment inspection ensures products meet agreed specifications before release.' },
              { num: '06', title: 'Logistics & Delivery', desc: 'We coordinate freight, documentation, and customs clearance to your destination.' },
            ].map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.num}</div>
                <h3 style={{ marginBottom: '0.5rem', fontSize: '1.125rem' }}>{step.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.9375rem', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Products We Source</h2>
          <p className="text-muted">We work across a wide range of categories for B2B buyers.</p>
        </div>

        <div className="grid-4">
          {[
            'Electronics & Components',
            'Machinery & Industrial Equipment',
            'Textiles, Apparel & Accessories',
            'Home & Garden Products',
            'Automotive & Transportation Parts',
            'Medical Devices & Supplies',
            'Consumer Electronics & Appliances',
            'Building Materials & Hardware',
            'Packaging & Printing',
            'Sports & Outdoor Equipment',
            'Furniture & Furnishings',
            'Tools & Safety Equipment',
          ].map((product, index) => (
            <div key={index} className="card" style={{ padding: '1rem 1.25rem', textAlign: 'center' }}>
              <span style={{ fontSize: '0.9375rem', fontWeight: 500 }}>{product}</span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link to="/products" className="btn btn-secondary">See Full Product Categories</Link>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
            <div>
              <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                COMMON CHALLENGES
              </div>
              <h2>Problems We Help Solve</h2>
              <p className="text-muted" style={{ marginTop: '0.75rem' }}>
                Sourcing from China involves real risks. We help buyers navigate them with structured processes and on-the-ground presence.
              </p>
            </div>
            <div>
              {problems.map((problem, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.875rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.9375rem' }}>{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credentials */}
      <section className="section container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Why Buyers Work With Us</h2>
        </div>
        <div className="grid-3">
          {[
            { icon: Shield, title: 'On-the-Ground Team', desc: 'Our staff in China conduct factory visits and inspections directly. No remote-only verification.' },
            { icon: Clock, title: 'Transparent Reporting', desc: 'Detailed written reports with photos at every stage. You stay informed without managing day-to-day.' },
            { icon: Award, title: 'Practical Experience', desc: 'Over a decade working with international buyers across consumer, industrial, and OEM categories.' },
          ].map((item, index) => (
            <div key={index} className="card" style={{ textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', padding: '0.75rem', background: '#F0FDFA', borderRadius: '8px', marginBottom: '1rem' }}>
                <item.icon size={28} style={{ color: 'var(--color-accent)' }} />
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
              <p className="text-muted" style={{ fontSize: '0.9375rem', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2>Recent Case Studies</h2>
              <p className="text-muted" style={{ marginTop: '0.25rem' }}>Results from actual client projects.</p>
            </div>
            <Link to="/case-studies" className="btn btn-secondary">View All Cases</Link>
          </div>

          <div className="grid-3">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-card">
                <div className="case-header">
                  <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{study.client}</div>
                  <div className="text-muted" style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>{study.product}</div>
                  <div className="case-metrics">
                    <div className="case-metric">
                      <div className="case-metric-value">{study.metric}</div>
                      <div className="case-metric-label">{study.metricLabel}</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '1.25rem 1.5rem', fontSize: '0.9375rem' }}>
                  {study.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section container">
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <h2>Frequently Asked Questions</h2>
          </div>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">
                <span>{faq.q}</span>
              </div>
              <div className="faq-answer">{faq.a}</div>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <Link to="/contact" className="btn btn-outline">Ask Us a Question</Link>
          </div>
        </div>
      </section>

      {/* CTA / Inquiry Form */}
      <section className="section section-alt" id="quote">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'start' }}>
            <div style={{ paddingTop: '1rem' }}>
              <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                START A PROJECT
              </div>
              <h2 style={{ marginBottom: '1rem' }}>Get a Free Sourcing Quote</h2>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
                Tell us about your sourcing requirements. We will review your needs and provide a detailed proposal within 24 hours.
              </p>
              <div style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>
                <div style={{ marginBottom: '0.5rem' }}>✓ No obligation consultation</div>
                <div style={{ marginBottom: '0.5rem' }}>✓ Response within one business day</div>
                <div>✓ Confidential handling of your requirements</div>
              </div>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;