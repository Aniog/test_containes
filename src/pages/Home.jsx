import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, Factory, ClipboardCheck, Truck, Shield, 
  Clock, CheckCircle, ArrowRight, ChevronDown, ChevronUp,
  Globe, Users, Award, MessageCircle
} from 'lucide-react';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesPreview />
      <FAQSection />
      <InquirySection />
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section style={{
      position: 'relative',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 50%, #1E3A5F 100%)',
      overflow: 'hidden',
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.1,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px',
            backgroundColor: 'rgba(230, 126, 34, 0.2)',
            padding: '8px 16px',
            borderRadius: '24px',
            marginBottom: '24px',
            color: '#FFB347',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <Shield size={16} />
            Trusted by 500+ Global Buyers
          </div>
          
          <h1 style={{ 
            fontSize: '56px', 
            fontWeight: '800', 
            color: 'white', 
            lineHeight: '1.1',
            marginBottom: '24px',
            fontFamily: 'var(--font-heading)'
          }}>
            China Sourcing Agent for{' '}
            <span style={{ color: '#FFB347' }}>Global Buyers</span>
          </h1>
          
          <p style={{ 
            fontSize: '20px', 
            color: 'rgba(255,255,255,0.85)', 
            lineHeight: '1.7',
            marginBottom: '40px',
            maxWidth: '600px'
          }}>
            We help you find reliable suppliers, verify factories, inspect quality, 
            and coordinate shipping. Your trusted partner for seamless China sourcing.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ 
              padding: '18px 36px', 
              fontSize: '18px',
              backgroundColor: '#E67E22'
            }}>
              Get a Free Sourcing Quote
              <ArrowRight size={20} />
            </Link>
            <Link to="/how-it-works" className="btn btn-secondary" style={{ 
              padding: '18px 36px', 
              fontSize: '18px'
            }}>
              See How It Works
            </Link>
          </div>

          {/* Trust Badges */}
          <div style={{ 
            display: 'flex', 
            gap: '48px', 
            marginTop: '64px',
            paddingTop: '32px',
            borderTop: '1px solid rgba(255,255,255,0.2)'
          }}>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: 'white' }}>500+</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Clients Served</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: 'white' }}>15+</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Years Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: 'white' }}>2000+</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Factories Verified</div>
            </div>
            <div>
              <div style={{ fontSize: '32px', fontWeight: '700', color: 'white' }}>98%</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-section h1 {
            font-size: 36px !important;
          }
          .hero-section p {
            font-size: 16px !important;
          }
        }
      `}</style>
    </section>
  );
};

// Services Overview Section
const ServicesOverview = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'We find and vet reliable suppliers matching your exact requirements, quality standards, and budget.',
    },
    {
      icon: Factory,
      title: 'Factory Verification',
      description: 'On-site inspections to verify factory existence, production capacity, certifications, and legitimacy.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections ensuring your products meet specifications and quality standards.',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination from factory to your doorstep, including customs clearance.',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <span style={{ 
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: 'rgba(230, 126, 34, 0.1)',
            color: '#E67E22',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            Our Services
          </span>
          <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
            Complete Sourcing Solutions
          </h2>
          <p style={{ 
            color: 'var(--color-text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '18px'
          }}>
            From supplier discovery to final delivery, we handle every step of your China sourcing journey.
          </p>
        </div>

        <div className="grid-4">
          {services.map((service, index) => (
            <div key={index} className="card" style={{ textAlign: 'left' }}>
              <div className="icon-box" style={{ marginBottom: '20px' }}>
                <service.icon size={28} />
              </div>
              <h3 style={{ marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                {service.title}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link to="/services" className="btn btn-outline">
            View All Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Process Section
const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and quality requirements.',
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'Our team researches and identifies verified manufacturers matching your criteria.',
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'We conduct on-site visits to verify factory credentials, capacity, and quality systems.',
    },
    {
      number: '04',
      title: 'Sample & Negotiation',
      description: 'We request samples, negotiate terms, and help you make informed decisions.',
    },
    {
      number: '05',
      title: 'Production Follow-up',
      description: 'Regular updates and inspections during manufacturing to ensure quality and timelines.',
    },
    {
      number: '06',
      title: 'Quality Inspection',
      description: 'Pre-shipment inspection to verify products meet your specifications.',
    },
    {
      number: '07',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, customs, and ensure safe delivery to your location.',
    },
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <span style={{ 
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: 'rgba(30, 58, 95, 0.1)',
            color: '#1E3A5F',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            How It Works
          </span>
          <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
            Your Sourcing Journey
          </h2>
          <p style={{ 
            color: 'var(--color-text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '18px'
          }}>
            A proven 7-step process that ensures quality, reliability, and peace of mind.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '24px',
          position: 'relative'
        }}>
          {/* Connecting Line */}
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '10%',
            right: '10%',
            height: '2px',
            backgroundColor: 'var(--color-border)',
            zIndex: 0
          }} />

          {steps.slice(0, 4).map((step, index) => (
            <div key={index} style={{ position: 'relative', zIndex: 1 }}>
              <div className="card" style={{ 
                textAlign: 'center',
                padding: '32px 20px',
                backgroundColor: 'white'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '700',
                  margin: '0 auto 16px'
                }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '24px',
          marginTop: '24px',
          maxWidth: '900px',
          margin: '24px auto 0'
        }}>
          {steps.slice(4).map((step, index) => (
            <div key={index} style={{ position: 'relative', zIndex: 1 }}>
              <div className="card" style={{ 
                textAlign: 'center',
                padding: '32px 20px',
                backgroundColor: 'white'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '700',
                  margin: '0 auto 16px'
                }}>
                  {step.number}
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link to="/how-it-works" className="btn btn-primary">
            Learn More About Our Process
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Products Section
const ProductsSection = () => {
  const products = [
    { name: 'Electronics', icon: '📱', count: '450+ factories' },
    { name: 'Textiles & Apparel', icon: '👕', count: '380+ factories' },
    { name: 'Machinery & Parts', icon: '⚙️', count: '290+ factories' },
    { name: 'Consumer Goods', icon: '🏠', count: '520+ factories' },
    { name: 'Packaging', icon: '📦', count: '180+ factories' },
    { name: 'Automotive Parts', icon: '🚗', count: '210+ factories' },
    { name: 'Furniture', icon: '🪑', count: '160+ factories' },
    { name: 'Health & Beauty', icon: '💄', count: '240+ factories' },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <span style={{ 
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: 'rgba(230, 126, 34, 0.1)',
            color: '#E67E22',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            Product Categories
          </span>
          <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
            Products We Source
          </h2>
          <p style={{ 
            color: 'var(--color-text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '18px'
          }}>
            Extensive network of verified manufacturers across diverse industries.
          </p>
        </div>

        <div className="grid-4">
          {products.map((product, index) => (
            <Link 
              to="/products" 
              key={index}
              className="card"
              style={{ 
                textAlign: 'center',
                padding: '32px 24px',
                textDecoration: 'none',
                display: 'block'
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                {product.icon}
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--color-text-primary)' }}>
                {product.name}
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                {product.count}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link to="/products" className="btn btn-outline">
            View All Categories
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Problems Section
const ProblemsSection = () => {
  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication challenges with suppliers affecting negotiations and understanding.',
      solution: 'Our bilingual team bridges the communication gap, ensuring clear understanding.',
    },
    {
      title: 'Quality Issues',
      description: 'Products arriving not matching specifications or acceptable quality standards.',
      solution: 'Rigorous quality inspections at multiple stages ensure consistent quality.',
    },
    {
      title: 'Supplier Scams',
      description: 'Risk of dealing with fraudulent or non-existent factories.',
      solution: 'Thorough factory verification before any engagement protects your interests.',
    },
    {
      title: 'Shipping Complexities',
      description: 'Navigating customs, documentation, and international logistics.',
      solution: 'End-to-end logistics support handles all shipping complexities for you.',
    },
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <span style={{ 
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: 'rgba(30, 58, 95, 0.1)',
            color: '#1E3A5F',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            Why Choose Us
          </span>
          <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
            Problems We Solve
          </h2>
          <p style={{ 
            color: 'var(--color-text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '18px'
          }}>
            We address the common challenges that make China sourcing difficult for overseas buyers.
          </p>
        </div>

        <div className="grid-2">
          {problems.map((problem, index) => (
            <div key={index} className="card" style={{ 
              display: 'flex', 
              gap: '24px',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: 'rgba(230, 126, 34, 0.1)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <span style={{ fontSize: '24px' }}>⚠️</span>
              </div>
              <div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px', color: 'var(--color-text-primary)' }}>
                  {problem.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '16px', lineHeight: '1.6' }}>
                  {problem.description}
                </p>
                <div style={{ 
                  backgroundColor: 'rgba(39, 174, 96, 0.1)', 
                  padding: '12px 16px', 
                  borderRadius: '8px',
                  borderLeft: '3px solid #27AE60'
                }}>
                  <p style={{ fontSize: '14px', color: '#27AE60', fontWeight: '500' }}>
                    ✓ {problem.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Trust Section
const TrustSection = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: 'Verified Suppliers',
      description: 'Every supplier in our network undergoes rigorous verification.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Assured',
      description: 'ISO 9001 certified inspection process for consistent results.',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '98% on-time delivery rate across all our shipping routes.',
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'Personal account manager for every client throughout the process.',
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container">
        <div className="text-center mb-12">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>
            Why Global Buyers Trust Us
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.8)', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '18px'
          }}>
            Our commitment to quality and reliability has earned us the trust of buyers worldwide.
          </p>
        </div>

        <div className="grid-4">
          {trustPoints.map((point, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: 'rgba(255,255,255,0.15)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <point.icon size={36} color="#FFB347" />
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'white' }}>
                {point.title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: '1.6' }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Case Studies Preview
const CaseStudiesPreview = () => {
  const cases = [
    {
      company: 'TechStart Inc.',
      industry: 'Electronics',
      result: '40% cost reduction',
      description: 'Sourced smart home devices from verified manufacturers, reducing costs while improving quality.',
    },
    {
      company: 'Fashion Forward',
      industry: 'Apparel',
      result: '3 new product lines',
      description: 'Established reliable supply chain for sustainable fashion line with ethical manufacturing.',
    },
    {
      company: 'AutoParts Global',
      industry: 'Automotive',
      result: '99.5% quality rate',
      description: 'Implemented rigorous QC process resulting in near-perfect defect rates.',
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <span style={{ 
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: 'rgba(230, 126, 34, 0.1)',
            color: '#E67E22',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            Success Stories
          </span>
          <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
            Case Studies
          </h2>
          <p style={{ 
            color: 'var(--color-text-secondary)', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '18px'
          }}>
            Real results from our partnership with global buyers.
          </p>
        </div>

        <div className="grid-3">
          {cases.map((caseStudy, index) => (
            <div key={index} className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{
                height: '160px',
                background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Globe size={48} color="rgba(255,255,255,0.5)" />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginBottom: '12px'
                }}>
                  <span style={{ 
                    fontSize: '12px', 
                    color: 'var(--color-text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {caseStudy.industry}
                  </span>
                  <span style={{ 
                    fontSize: '14px', 
                    color: '#27AE60',
                    fontWeight: '600'
                  }}>
                    {caseStudy.result}
                  </span>
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                  {caseStudy.company}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', fontSize: '15px' }}>
                  {caseStudy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link to="/case-studies" className="btn btn-outline">
            View All Case Studies
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do you verify factories?',
      answer: 'Our team conducts on-site visits to verify factory existence, production capacity, business licenses, quality certifications, and workforce. We provide detailed verification reports with photos and video documentation.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We source across multiple industries including electronics, textiles, machinery, consumer goods, packaging, automotive parts, furniture, and health & beauty products. Our network includes 2,000+ verified factories.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timeline is 2-4 weeks for supplier matching, 1-2 weeks for factory verification, and 4-8 weeks for sample production. Overall process varies based on product complexity and requirements.',
    },
    {
      question: 'Do you provide quality inspections?',
      answer: 'Yes, we offer pre-shipment inspections at your specified quality checkpoints. Our inspectors follow AQL standards and provide detailed reports with photos and recommendations.',
    },
    {
      question: 'What are your service fees?',
      answer: 'Our fee structure depends on the services required. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific sourcing needs.',
    },
  ];

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="text-center mb-12">
          <span style={{ 
            display: 'inline-block',
            padding: '6px 16px',
            backgroundColor: 'rgba(30, 58, 95, 0.1)',
            color: '#1E3A5F',
            borderRadius: '20px',
            fontSize: '14px',
            fontWeight: '600',
            marginBottom: '16px'
          }}>
            Common Questions
          </span>
          <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                marginBottom: '12px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                style={{
                  width: '100%',
                  padding: '20px 24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ 
                  fontWeight: '600', 
                  fontSize: '16px',
                  color: 'var(--color-text-primary)'
                }}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} color="var(--color-text-secondary)" />
                ) : (
                  <ChevronDown size={20} color="var(--color-text-secondary)" />
                )}
              </button>
              {openIndex === index && (
                <div style={{ 
                  padding: '0 24px 20px',
                  color: 'var(--color-text-secondary)',
                  lineHeight: '1.7'
                }}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Inquiry Section
const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you within 24 hours.');
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--color-primary)' }}>
      <div className="container">
        <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: 'white', fontSize: '40px', marginBottom: '20px' }}>
              Ready to Start Sourcing?
            </h2>
            <p style={{ 
              color: 'rgba(255,255,255,0.85)', 
              fontSize: '18px',
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              Get a free sourcing quote within 24 hours. Tell us what you need, 
              and we'll find the right suppliers for your business.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle size={20} color="#27AE60" />
                <span style={{ color: 'rgba(255,255,255,0.9)' }}>Response within 24 hours</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle size={20} color="#27AE60" />
                <span style={{ color: 'rgba(255,255,255,0.9)' }}>No obligation quote</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle size={20} color="#27AE60" />
                <span style={{ color: 'rgba(255,255,255,0.9)' }}>Verified supplier network</span>
              </div>
            </div>
          </div>

          <div style={{ 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            padding: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ 
              color: 'var(--color-text-primary)', 
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              Get Your Free Quote
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Name *</label>
                  <input 
                    type="text" 
                    className="form-input"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Email *</label>
                  <input 
                    type="email" 
                    className="form-input"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Company</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Company name"
                  />
                </div>
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Quantity</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    placeholder="e.g. 1000 units"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Product Interested In *</label>
                <input 
                  type="text" 
                  className="form-input"
                  required
                  value={formData.product}
                  onChange={(e) => setFormData({...formData, product: e.target.value})}
                  placeholder="What do you want to source?"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Additional Details</label>
                <textarea 
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Any specific requirements, target price, etc."
                  rows="3"
                />
              </div>

              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '8px' }}
              >
                Submit Inquiry
                <MessageCircle size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;