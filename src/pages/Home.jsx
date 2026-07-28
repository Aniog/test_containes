import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Factory, 
  Shield, 
  Search, 
  FileCheck, 
  Package, 
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Users,
  Globe,
  Award
} from 'lucide-react';

const HeroSection = () => {
  return (
    <section style={{ 
      background: 'linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)',
      padding: '120px 0 100px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '50%',
        height: '100%',
        background: 'radial-gradient(circle at 70% 50%, rgba(30, 58, 95, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'white',
              padding: '8px 16px',
              borderRadius: '24px',
              fontSize: '14px',
              color: '#1E3A5F',
              fontWeight: '500',
              marginBottom: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              <Shield size={16} style={{ color: '#10B981' }} />
              500+ Verified Suppliers
            </div>
            
            <h1 style={{ 
              fontSize: '52px', 
              fontWeight: '700', 
              lineHeight: '1.1',
              color: '#1E293B',
              marginBottom: '24px'
            }}>
              China Sourcing Agent for Global Buyers
            </h1>
            
            <p style={{ 
              fontSize: '18px', 
              color: '#475569', 
              lineHeight: '1.7',
              marginBottom: '32px',
              maxWidth: '520px'
            }}>
              We help you find reliable suppliers, verify factories, inspect quality, and coordinate shipping. Your trusted partner for seamless China sourcing.
            </p>
            
            <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                Get a Free Quote
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                How It Works
              </Link>
            </div>
            
            <div className="flex gap-6 mt-8" style={{ flexWrap: 'wrap' }}>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} style={{ color: '#10B981' }} />
                <span style={{ color: '#475569', fontSize: '14px' }}>Verified Factories</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} style={{ color: '#10B981' }} />
                <span style={{ color: '#475569', fontSize: '14px' }}>QC Inspections</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} style={{ color: '#10B981' }} />
                <span style={{ color: '#475569', fontSize: '14px' }}>Global Shipping</span>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'relative' }}>
            <div style={{
              background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
              borderRadius: '16px',
              padding: '40px',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 60px rgba(30, 58, 95, 0.2)'
            }}>
              <div style={{ textAlign: 'center', color: 'white' }}>
                <Factory size={80} style={{ marginBottom: '24px', opacity: 0.9 }} />
                <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '12px' }}>Factory Floor</h3>
                <p style={{ opacity: 0.8, fontSize: '14px' }}>Quality Manufacturing in Action</p>
              </div>
            </div>
            
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              left: '-20px',
              background: 'white',
              borderRadius: '12px',
              padding: '20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: '#F0FDF4',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Users size={24} style={{ color: '#10B981' }} />
                </div>
                <div>
                  <div style={{ fontSize: '24px', fontWeight: '700', color: '#1E293B' }}>500+</div>
                  <div style={{ fontSize: '13px', color: '#64748B' }}>Verified Suppliers</div>
                </div>
              </div>
            </div>
            
            <div style={{
              position: 'absolute',
              top: '20px',
              right: '-20px',
              background: 'white',
              borderRadius: '12px',
              padding: '16px 20px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
            }}>
              <div className="flex items-center gap-2">
                <Star size={18} style={{ color: '#F59E0B' }} />
                <span style={{ fontWeight: '600', color: '#1E293B' }}>4.9/5</span>
                <span style={{ color: '#64748B', fontSize: '13px' }}>Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Search size={28} />,
      title: 'Supplier Sourcing',
      description: 'We find and vet reliable suppliers matching your product specifications, quality requirements, and budget.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Factory Verification',
      description: 'On-site inspections to verify factory existence, production capacity, certifications, and compliance.'
    },
    {
      icon: <FileCheck size={28} />,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections ensuring your products meet specifications and quality standards.'
    },
    {
      icon: <Clock size={28} />,
      title: 'Production Follow-up',
      description: 'Regular updates on production progress, ensuring timelines are met and issues are addressed promptly.'
    },
    {
      icon: <Package size={28} />,
      title: 'Shipping and Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and delivery.'
    },
    {
      icon: <Factory size={28} />,
      title: 'Sample Management',
      description: 'We handle sample requests, quality approval, and forward samples to you for final confirmation.'
    }
  ];

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="text-center mb-8">
          <h2 style={{ marginBottom: '16px' }}>Our Services</h2>
          <p style={{ 
            color: '#475569', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '17px'
          }}>
            Comprehensive sourcing solutions to streamline your China procurement process
          </p>
        </div>
        
        <div className="grid grid-3">
          {services.map((service, index) => (
            <div key={index} className="card" style={{ textAlign: 'left' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                marginBottom: '20px'
              }}>
                {service.icon}
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>{service.title}</h3>
              <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/services" className="btn btn-secondary">
            View All Services
            <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and any special requirements.'
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'Our team researches and vets potential suppliers, presenting you with verified options that match your criteria.'
    },
    {
      number: '03',
      title: 'Factory Verification',
      description: 'We visit factories to verify their existence, production capacity, certifications, and quality management systems.'
    },
    {
      number: '04',
      title: 'Sample and Negotiation',
      description: 'We request samples, negotiate terms, and help you make informed decisions before mass production.'
    },
    {
      number: '05',
      title: 'Production Monitoring',
      description: 'Regular factory visits and updates ensure production stays on track and quality standards are maintained.'
    },
    {
      number: '06',
      title: 'Quality Inspection',
      description: 'Pre-shipment inspection verifies products meet specifications. We only approve shipment when quality passes.'
    },
    {
      number: '07',
      title: 'Shipping and Delivery',
      description: 'We coordinate logistics, handle customs documentation, and ensure safe delivery to your destination.'
    }
  ];

  return (
    <section className="section section-bg" id="process">
      <div className="container">
        <div className="text-center mb-8">
          <h2 style={{ marginBottom: '16px' }}>How It Works</h2>
          <p style={{ 
            color: '#475569', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '17px'
          }}>
            A proven 7-step process to ensure quality and reliability at every stage
          </p>
        </div>
        
        <div className="grid grid-3">
          {steps.map((step, index) => (
            <div key={index} style={{ position: 'relative' }}>
              <div style={{
                background: 'white',
                borderRadius: '12px',
                padding: '28px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                height: '100%'
              }}>
                <div style={{
                  fontSize: '48px',
                  fontWeight: '800',
                  color: '#E2E8F0',
                  position: 'absolute',
                  top: '16px',
                  right: '20px'
                }}>
                  {step.number}
                </div>
                <h3 style={{ marginBottom: '12px', fontSize: '18px', position: 'relative' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6', position: 'relative' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/how-it-works" className="btn btn-primary">
            Learn More About Our Process
            <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProductsSection = () => {
  const products = [
    { name: 'Electronics', count: '120+', icon: 'E' },
    { name: 'Textiles and Apparel', count: '85+', icon: 'T' },
    { name: 'Machinery', count: '65+', icon: 'M' },
    { name: 'Home and Garden', count: '90+', icon: 'H' },
    { name: 'Packaging', count: '55+', icon: 'P' },
    { name: 'Automotive Parts', count: '70+', icon: 'A' },
    { name: 'Health and Beauty', count: '45+', icon: 'B' },
    { name: 'Sports and Outdoors', count: '60+', icon: 'S' }
  ];

  return (
    <section className="section" id="products">
      <div className="container">
        <div className="text-center mb-8">
          <h2 style={{ marginBottom: '16px' }}>Products We Source</h2>
          <p style={{ 
            color: '#475569', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '17px'
          }}>
            Wide range of product categories with verified supplier networks
          </p>
        </div>
        
        <div className="grid grid-4">
          {products.map((product, index) => (
            <div key={index} className="card" style={{ 
              textAlign: 'center',
              padding: '32px 24px'
            }}>
              <div style={{ 
                width: '48px', 
                height: '48px', 
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: '700',
                margin: '0 auto 16px'
              }}>
                {product.icon}
              </div>
              <h3 style={{ marginBottom: '8px', fontSize: '18px' }}>{product.name}</h3>
              <p style={{ color: '#64748B', fontSize: '14px' }}>{product.count} Verified Suppliers</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/products" className="btn btn-secondary">
            View All Categories
            <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProblemsSection = () => {
  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communication gaps leading to misunderstandings, delayed responses, and lost opportunities.'
    },
    {
      title: 'Supplier Verification',
      description: 'Difficulty verifying if suppliers are legitimate, have required certifications, or can meet your volume needs.'
    },
    {
      title: 'Quality Control',
      description: 'Products arriving with defects or not matching specifications, resulting in costly returns and delays.'
    },
    {
      title: 'Shipping Complexities',
      description: 'Navigating customs, documentation, and logistics coordination across international borders.'
    }
  ];

  const solutions = [
    'Native Mandarin speakers with business English fluency',
    'On-site factory visits and verification reports',
    'Pre-shipment inspections with detailed QC reports',
    'End-to-end logistics support and customs clearance'
  ];

  return (
    <section className="section section-bg">
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div>
            <h2 style={{ marginBottom: '24px' }}>Problems We Solve</h2>
            <p style={{ 
              color: '#475569', 
              fontSize: '17px',
              marginBottom: '32px',
              lineHeight: '1.7'
            }}>
              Sourcing from China comes with unique challenges. We help you overcome them all.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {problems.map((problem, index) => (
                <div key={index} style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '20px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                }}>
                  <h4 style={{ marginBottom: '8px', fontSize: '16px', color: '#1E293B' }}>
                    {problem.title}
                  </h4>
                  <p style={{ color: '#64748B', fontSize: '14px', margin: 0 }}>
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
              borderRadius: '16px',
              padding: '40px',
              color: 'white'
            }}>
              <h3 style={{ color: 'white', marginBottom: '24px', fontSize: '22px' }}>
                Our Solutions
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={22} style={{ color: '#34D399', flexShrink: 0 }} />
                    <span style={{ fontSize: '15px', lineHeight: '1.5' }}>{solution}</span>
                  </div>
                ))}
              </div>
              
              <div style={{ 
                marginTop: '32px', 
                paddingTop: '24px', 
                borderTop: '1px solid rgba(255,255,255,0.2)' 
              }}>
                <div className="grid grid-3" style={{ gap: '16px' }}>
                  <div className="text-center">
                    <div style={{ fontSize: '28px', fontWeight: '700' }}>500+</div>
                    <div style={{ fontSize: '13px', opacity: 0.8 }}>Suppliers</div>
                  </div>
                  <div className="text-center">
                    <div style={{ fontSize: '28px', fontWeight: '700' }}>1,200+</div>
                    <div style={{ fontSize: '13px', opacity: 0.8 }}>Orders Fulfilled</div>
                  </div>
                  <div className="text-center">
                    <div style={{ fontSize: '28px', fontWeight: '700' }}>98%</div>
                    <div style={{ fontSize: '13px', opacity: 0.8 }}>Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const trustPoints = [
    {
      icon: <Shield size={32} />,
      title: 'Verified Suppliers',
      description: 'Every supplier undergoes rigorous verification including factory visits, business license checks, and capability assessments.'
    },
    {
      icon: <FileCheck size={32} />,
      title: 'Quality Assurance',
      description: 'Professional QC inspectors with industry expertise ensure your products meet specifications before shipment.'
    },
    {
      icon: <Globe size={32} />,
      title: 'Global Experience',
      description: 'Serving buyers from USA, Europe, Australia, and beyond. We understand international business requirements.'
    },
    {
      icon: <Award size={32} />,
      title: 'Proven Track Record',
      description: 'Years of experience helping businesses source from China successfully. References available upon request.'
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-8">
          <h2 style={{ marginBottom: '16px' }}>Why Trust SSourcing China</h2>
          <p style={{ 
            color: '#475569', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '17px'
          }}>
            We are committed to transparency, quality, and your success
          </p>
        </div>
        
        <div className="grid grid-4">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center" style={{ padding: '24px' }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: '#F8FAFC',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: '#1E3A5F'
              }}>
                {point.icon}
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '18px' }}>{point.title}</h3>
              <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6' }}>
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseStudiesSection = () => {
  const cases = [
    {
      client: 'TechStart Inc.',
      industry: 'Electronics',
      challenge: 'Needed to find a reliable manufacturer for smart home devices with strict quality requirements.',
      result: 'Sourced 3 verified factories, conducted thorough QC inspections, and delivered 50,000 units with less than 1% defect rate.',
      metric: '35% Cost Savings'
    },
    {
      client: 'Fashion Forward Ltd.',
      industry: 'Apparel',
      challenge: 'Struggling with inconsistent quality and missed deadlines from previous suppliers.',
      result: 'Implemented production monitoring, weekly inspections, and established quality benchmarks. On-time delivery improved to 98%.',
      metric: '98% On-Time Delivery'
    },
    {
      client: 'GreenHome Co.',
      industry: 'Home Goods',
      challenge: 'First-time importer unfamiliar with Chinese manufacturing and shipping processes.',
      result: 'End-to-end support from supplier selection to final delivery. Complete documentation and customs clearance handled.',
      metric: '100% Compliance'
    }
  ];

  return (
    <section className="section section-bg" id="case-studies">
      <div className="container">
        <div className="text-center mb-8">
          <h2 style={{ marginBottom: '16px' }}>Success Stories</h2>
          <p style={{ 
            color: '#475569', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '17px'
          }}>
            Real results from real clients who trusted us with their China sourcing
          </p>
        </div>
        
        <div className="grid grid-3">
          {cases.map((caseStudy, index) => (
            <div key={index} className="card" style={{ textAlign: 'left' }}>
              <div style={{
                display: 'inline-block',
                background: '#F0FDF4',
                color: '#10B981',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: '600',
                marginBottom: '16px'
              }}>
                {caseStudy.metric}
              </div>
              
              <h3 style={{ marginBottom: '8px', fontSize: '20px' }}>{caseStudy.client}</h3>
              <p style={{ color: '#64748B', fontSize: '13px', marginBottom: '16px' }}>
                {caseStudy.industry}
              </p>
              
              <div style={{ marginBottom: '16px' }}>
                <p style={{ color: '#475569', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  Challenge:
                </p>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6' }}>
                  {caseStudy.challenge}
                </p>
              </div>
              
              <div>
                <p style={{ color: '#475569', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                  Result:
                </p>
                <p style={{ color: '#64748B', fontSize: '14px', lineHeight: '1.6' }}>
                  {caseStudy.result}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/case-studies" className="btn btn-secondary">
            View All Case Studies
            <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory visits to verify the supplier exists, assess production capacity, check business licenses and certifications, evaluate quality management systems, and interview key personnel. We provide detailed verification reports with photos and findings.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work across various industries including electronics, textiles and apparel, machinery, home and garden products, packaging, automotive parts, health and beauty products, and sports equipment. Our network includes verified suppliers for most product categories.'
    },
    {
      question: 'How do you ensure quality?',
      answer: 'We offer pre-shipment inspections where our QC team checks products against your specifications. We provide detailed inspection reports with photos. For critical orders, we can arrange during-production inspections to catch issues early. We only approve shipment when quality meets your standards.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services you need. We offer flexible engagement models including commission-based sourcing, fixed-fee project packages, and retainer arrangements for ongoing sourcing needs. Contact us for a customized quote based on your specific requirements.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on product complexity and availability. Typically, supplier identification takes 1-2 weeks, verification 1-2 weeks, sample evaluation 2-4 weeks, and production varies by order size. We provide estimated timelines during the initial consultation.'
    },
    {
      question: 'Do you handle shipping and logistics?',
      answer: 'Yes, we coordinate end-to-end logistics including freight forwarding, customs documentation, and delivery to your specified location. We work with established shipping partners to ensure competitive rates and reliable delivery.'
    }
  ];

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="text-center mb-8">
          <h2 style={{ marginBottom: '16px' }}>Frequently Asked Questions</h2>
          <p style={{ 
            color: '#475569', 
            maxWidth: '600px', 
            margin: '0 auto',
            fontSize: '17px'
          }}>
            Common questions about our China sourcing services
          </p>
        </div>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                marginBottom: '12px',
                border: '1px solid #E2E8F0',
                overflow: 'hidden'
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
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <span style={{ 
                  fontWeight: '500', 
                  fontSize: '16px',
                  color: '#1E293B'
                }}>
                  {faq.question}
                </span>
                {openIndex === index ? 
                  <ChevronUp size={20} style={{ color: '#64748B' }} /> : 
                  <ChevronDown size={20} style={{ color: '#64748B' }} />
                }
              </button>
              
              {openIndex === index && (
                <div style={{ 
                  padding: '0 24px 20px',
                  color: '#475569',
                  fontSize: '15px',
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

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  return (
    <section className="section" id="contact" style={{ background: '#1E3A5F' }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div>
            <h2 style={{ color: 'white', marginBottom: '16px', fontSize: '36px' }}>
              Ready to Start Sourcing?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '17px', marginBottom: '32px', lineHeight: '1.7' }}>
              Get a free sourcing quote tailored to your needs. Tell us what you are looking for and we will handle the rest.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="flex items-center gap-3">
                <CheckCircle size={22} style={{ color: '#34D399' }} />
                <span style={{ color: 'rgba(255,255,255,0.9)' }}>Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={22} style={{ color: '#34D399' }} />
                <span style={{ color: 'rgba(255,255,255,0.9)' }}>No obligation quote</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={22} style={{ color: '#34D399' }} />
                <span style={{ color: 'rgba(255,255,255,0.9)' }}>Expert sourcing advice</span>
              </div>
            </div>
            
            <div style={{ 
              marginTop: '40px', 
              padding: '24px', 
              background: 'rgba(255,255,255,0.1)', 
              borderRadius: '12px' 
            }}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '500', marginBottom: '12px' }}>
                Contact Information
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '8px' }}>
                Email: info@ssourcing.cn
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '8px' }}>
                Phone: +86 571 1234 5678
              </p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                WeChat: SSourcingChina
              </p>
            </div>
          </div>
          
          <div style={{ 
            background: 'white', 
            borderRadius: '16px', 
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ marginBottom: '24px', fontSize: '22px' }}>Get a Free Quote</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div className="form-group" style={{ marginBottom: '16px' }}>
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
                
                <div className="form-group" style={{ marginBottom: '16px' }}>
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
              
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label">Company</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Your company"
                  />
                </div>
                
                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label">Phone</label>
                  <input 
                    type="tel" 
                    className="form-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>
              
              <div className="grid grid-2" style={{ gap: '16px' }}>
                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label">Product Category *</label>
                  <select 
                    className="form-select"
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({...formData, product: e.target.value})}
                  >
                    <option value="">Select category</option>
                    <option value="electronics">Electronics</option>
                    <option value="textiles">Textiles and Apparel</option>
                    <option value="machinery">Machinery</option>
                    <option value="home">Home and Garden</option>
                    <option value="packaging">Packaging</option>
                    <option value="automotive">Automotive Parts</option>
                    <option value="health">Health and Beauty</option>
                    <option value="sports">Sports and Outdoors</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label">Estimated Quantity</label>
                  <input 
                    type="text" 
                    className="form-input"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    placeholder="e.g. 10,000 units"
                  />
                </div>
              </div>
              
              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label">Message *</label>
                <textarea 
                  className="form-textarea"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your sourcing needs, product specifications, timeline, etc."
                />
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Home;