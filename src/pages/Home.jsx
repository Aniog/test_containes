import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Shield, Factory, Truck, 
  Search, Eye, ClipboardCheck, Package, Globe, 
  Clock, Users, Star, MessageCircle
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Search & Verification',
      description: 'We find and verify reliable manufacturers through thorough background checks, factory visits, and capability assessments.',
      link: '/services'
    },
    {
      icon: Eye,
      title: 'Factory Inspection',
      description: 'Regular quality inspections during production and pre-shipment to ensure your products meet specifications.',
      link: '/services'
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Control',
      description: 'Comprehensive QC services including material inspection, production monitoring, and final product testing.',
      link: '/services'
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
      link: '/services'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Request',
      description: 'Tell us what you need - product specifications, quantity, target price, and timeline.'
    },
    {
      number: '02',
      title: 'We Find Suppliers',
      description: 'Our team researches and verifies manufacturers, then presents you with qualified options.'
    },
    {
      number: '03',
      title: 'Sample & Negotiate',
      description: 'We coordinate samples, negotiate terms, and help you make an informed decision.'
    },
    {
      number: '04',
      title: 'Production & QC',
      description: 'We monitor production, conduct inspections, and ensure quality standards are met.'
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We handle all logistics, customs, and deliver your products to your door.'
    }
  ];

  const products = [
    { name: 'Electronics', icon: '📱', count: '2,400+ suppliers' },
    { name: 'Furniture', icon: '🪑', count: '1,800+ suppliers' },
    { name: 'Textiles & Apparel', icon: '👕', count: '3,200+ suppliers' },
    { name: 'Machinery', icon: '⚙️', count: '950+ suppliers' },
    { name: 'Packaging', icon: '📦', count: '1,100+ suppliers' },
    { name: 'Toys & Gifts', icon: '🎁', count: '1,500+ suppliers' },
    { name: 'Sports & Outdoor', icon: '⚽', count: '890+ suppliers' },
    { name: 'Beauty & Personal Care', icon: '💄', count: '720+ suppliers' }
  ];

  const problems = [
    {
      icon: Shield,
      title: 'Unreliable Suppliers',
      description: 'We verify every supplier through factory visits, business license checks, and capability assessments.'
    },
    {
      icon: Factory,
      title: 'Quality Issues',
      description: 'Our QC team performs inspections at every production stage to catch and fix problems early.'
    },
    {
      icon: Globe,
      title: 'Language & Cultural Barriers',
      description: 'Native Mandarin speakers with deep understanding of Chinese business practices handle all communications.'
    },
    {
      icon: Truck,
      title: 'Complex Logistics',
      description: 'We coordinate end-to-end shipping, customs clearance, and documentation for hassle-free delivery.'
    }
  ];

  const trustPoints = [
    { value: '8+', label: 'Years Experience' },
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '35%', label: 'Cost Savings Avg.' }
  ];

  const testimonials = [
    {
      quote: "SSourcing China transformed our supply chain. We cut costs by 40% while actually improving quality. Their team handled everything professionally.",
      author: 'Michael Chen',
      role: 'CEO, TechGear Inc.',
      country: 'USA'
    },
    {
      quote: "The factory verification saved us from a potential disaster. They found issues we would have never caught. Highly recommend their QC services.",
      author: 'Sarah Williams',
      role: 'Procurement Director',
      country: 'UK'
    },
    {
      quote: "Professional, responsive, and thorough. They made sourcing from China accessible for our small business. We'll use them again.",
      author: 'David Mueller',
      role: 'Founder',
      country: 'Germany'
    }
  ];

  const faqs = [
    {
      question: 'How do you verify factories?',
      answer: 'We conduct in-person factory visits to verify business licenses, production capacity, quality management systems, and worker conditions. We also check references and past export history.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a detailed quote based on your specific requirements.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typical timeline is 2-4 weeks for supplier identification and verification, 1-2 weeks for sample evaluation, and 4-8 weeks for production depending on order size and complexity.'
    },
    {
      question: 'Do you handle shipping?',
      answer: 'Yes, we coordinate all aspects of shipping including freight forwarding, customs clearance, documentation, and door-to-door delivery to your specified location.'
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work across diverse industries including electronics, furniture, textiles, machinery, packaging, toys, sports equipment, and more. Our team has broad expertise.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              China Sourcing Agent for Global Buyers
            </h1>
            <p className="hero-subtitle">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping. 
              We handle the complexities so you can focus on growing your business.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-cta btn-lg">
                Get a Free Sourcing Quote
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </Link>
              <Link to="/how-it-works" className="btn btn-outline btn-lg">
                How It Works
              </Link>
            </div>
            <div className="hero-trust">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} style={{ color: 'var(--accent)' }} />
                <span>500+ Successful Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} style={{ color: 'var(--accent)' }} />
                <span>98% Client Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} style={{ color: 'var(--accent)' }} />
                <span>No Upfront Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Our Sourcing Services</h2>
            <p>End-to-end solutions for your China sourcing needs</p>
          </div>
          <div className="grid-4" style={{ gap: '24px' }}>
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="card service-card p-6">
                <div className="service-icon">
                  <service.icon size={28} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span className="service-link">
                  Learn more <ArrowRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Simple 5-step process to source from China with confidence</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/how-it-works" className="btn btn-primary">
              View Full Process
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Products We Source</h2>
            <p>Extensive network of verified suppliers across multiple industries</p>
          </div>
          <div className="grid-4" style={{ gap: '20px' }}>
            {products.map((product, index) => (
              <Link key={index} to="/products" className="product-card card p-5">
                <span style={{ fontSize: '32px', marginBottom: '12px', display: 'block' }}>{product.icon}</span>
                <h3>{product.name}</h3>
                <p>{product.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Problems We Solve</h2>
            <p>Challenges you face when sourcing from China - and how we help</p>
          </div>
          <div className="grid-2" style={{ gap: '32px' }}>
            {problems.map((problem, index) => (
              <div key={index} className="card p-6 flex items-start gap-4">
                <div className="problem-icon">
                  <problem.icon size={24} />
                </div>
                <div>
                  <h3>{problem.title}</h3>
                  <p>{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section trust-section">
        <div className="container">
          <div className="grid-4" style={{ gap: '40px' }}>
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="trust-value">{point.value}</div>
                <div className="trust-label">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Real feedback from businesses we've helped</p>
          </div>
          <div className="grid-3" style={{ gap: '24px' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card testimonial-card p-6">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--warning)" color="var(--warning)" />
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div>
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}, {testimonial.country}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our sourcing services</p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item card p-5">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Sourcing?</h2>
            <p>
              Get a free consultation and quote for your China sourcing needs. 
              No commitment required.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-cta btn-lg">
                Get a Free Sourcing Quote
                <ArrowRight size={20} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;