import { Link } from 'react-router-dom';
import { 
  CheckCircle, Shield, Factory, Truck, Search, FileCheck, 
  Users, TrendingUp, Award, ArrowRight, Star, ChevronDown, ChevronUp,
  Globe, Package, Clock, DollarSign
} from 'lucide-react';
import { useState } from 'react';

const HomePage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const stats = [
    { value: '12+', label: 'Years Experience' },
    { value: '2,500+', label: 'Suppliers Verified' },
    { value: '15,000+', label: 'Orders Completed' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify supplier legitimacy, business licenses, factory capacity, and certifications to ensure you work with trustworthy partners.',
    },
    {
      icon: Factory,
      title: 'Factory Audit',
      description: 'Comprehensive on-site audits assessing production capabilities, quality management systems, worker conditions, and compliance.',
    },
    {
      icon: FileCheck,
      title: 'Quality Inspection',
      description: 'Pre-shipment inspections at key production stages. We check product specifications, functionality, packaging, and compliance.',
    },
    {
      icon: Shield,
      title: 'Production Follow-up',
      description: 'Regular progress updates and quality checks during production. We identify issues early and ensure timely delivery.',
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics coordination including freight forwarding, customs clearance, and door-to-door delivery.',
    },
    {
      icon: DollarSign,
      title: 'Sourcing & Negotiation',
      description: 'We find the right suppliers, negotiate competitive pricing, and handle contract terms to protect your interests.',
    },
  ];

  const problems = [
    {
      title: 'Language Barriers',
      description: 'Communicate effectively with suppliers in Mandarin. We bridge the gap to ensure clear understanding.',
    },
    {
      title: 'Quality Risks',
      description: 'Receive products matching your specifications through rigorous QC processes and factory oversight.',
    },
    {
      title: 'Supplier Scams',
      description: 'Verify supplier legitimacy before committing. We conduct thorough background checks and factory visits.',
    },
    {
      title: 'Shipping Complexities',
      description: 'Navigate international logistics smoothly. We handle documentation, customs, and delivery.',
    },
  ];

  const process = [
    { step: 1, title: 'Submit Request', description: 'Tell us what you need - product specs, quantity, target price' },
    { step: 2, title: 'Supplier Matching', description: 'We identify and verify suitable suppliers from our network' },
    { step: 3, title: 'Sample Evaluation', description: 'Review samples and negotiate terms with our assistance' },
    { step: 4, title: 'Production Monitoring', description: 'We oversee production and conduct quality inspections' },
    { step: 5, title: 'Shipping & Delivery', description: 'Coordinate logistics and ensure smooth delivery to your door' },
  ];

  const products = [
    { name: 'Electronics', icon: Package },
    { name: 'Textiles & Apparel', icon: Package },
    { name: 'Machinery', icon: Package },
    { name: 'Furniture', icon: Package },
    { name: 'Packaging', icon: Package },
    { name: 'Home Goods', icon: Package },
    { name: 'Automotive Parts', icon: Package },
    { name: 'Health & Beauty', icon: Package },
  ];

  const caseStudies = [
    {
      client: 'European Retail Chain',
      industry: 'Retail',
      challenge: 'Needed to source 50,000 home textile products from China with strict quality requirements and tight timeline.',
      solution: 'We verified 15 suppliers, conducted factory audits, performed pre-shipment inspections, and coordinated full container shipping.',
      result: 'Delivered on time with 99.2% quality pass rate. Saved 18% compared to their previous supplier.',
      category: 'Textiles',
    },
    {
      client: 'US Tech Startup',
      industry: 'Technology',
      challenge: 'First-time sourcing from China for electronic components. Concerns about quality and IP protection.',
      solution: 'Implemented supplier verification, on-site factory audits, in-line inspections, and secure packaging with IP safeguards.',
      result: 'Successfully launched product with zero quality issues. Established long-term supplier relationship.',
      category: 'Electronics',
    },
    {
      client: 'Australian Distributor',
      industry: 'Distribution',
      challenge: 'Sourcing furniture products with custom specifications. Needed quality assurance and reliable shipping.',
      solution: 'Matched with verified manufacturer, conducted production monitoring, and arranged FCL shipping with customs clearance.',
      result: 'Received container with 98.5% acceptance rate. Established quarterly reorder system.',
      category: 'Furniture',
    },
  ];

  const testimonials = [
    {
      quote: 'SSourcing China transformed our sourcing operation. Their verification process saved us from a potential scam, and their QC team ensures every shipment meets our standards.',
      author: 'Michael Thompson',
      role: 'Procurement Director',
      company: 'TechFlow Inc.',
    },
    {
      quote: 'As a first-time importer, I was overwhelmed by the complexity. Their team guided us through every step - from supplier selection to final delivery.',
      author: 'Sarah Chen',
      role: 'Founder',
      company: 'HomeStyle Direct',
    },
    {
      quote: 'The quality inspection service is exceptional. They caught issues before shipment that would have cost us significantly in returns.',
      author: 'David Williams',
      role: 'Operations Manager',
      company: 'GlobalTrade Solutions',
    },
  ];

  const faqs = [
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct comprehensive supplier verification including business license checks, factory visits, capacity assessment, financial stability review, and reference checks from existing clients.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work across various industries including electronics, textiles, machinery, furniture, packaging, home goods, automotive parts, and health & beauty products.',
    },
    {
      question: 'How do you ensure product quality?',
      answer: 'We offer multiple quality control touchpoints: pre-production inspections, in-line inspections during production, pre-shipment inspections, and container loading supervision.',
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services required. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific needs.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on product complexity and supplier availability. Typically, supplier matching takes 1-2 weeks, sample evaluation 2-4 weeks, and production 4-8 weeks.',
    },
    {
      question: 'Do you handle shipping and logistics?',
      answer: 'Yes, we provide end-to-end logistics support including freight forwarding, customs clearance, documentation, and door-to-door delivery coordination.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
        padding: '160px 0 120px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h1 style={{ color: 'white', fontSize: '3.5rem', marginBottom: '24px', lineHeight: '1.1' }}>
              China Sourcing Agent for Global Buyers
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.25rem', marginBottom: '40px', lineHeight: '1.7' }}>
              We help overseas businesses find reliable suppliers, verify factories, inspect quality, 
              and coordinate seamless shipping. Your trusted partner for China procurement.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-accent" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn" style={{ 
                backgroundColor: 'rgba(255,255,255,0.15)', 
                color: 'white', 
                border: '2px solid rgba(255,255,255,0.3)',
                padding: '16px 32px',
                fontSize: '1.1rem'
              }}>
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section style={{ backgroundColor: 'white', padding: '48px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid grid-4" style={{ gap: '32px' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>Comprehensive sourcing solutions to protect your interests and ensure quality from order to delivery.</p>
          </div>
          <div className="grid grid-3">
            {services.map((service, index) => (
              <div key={index} className="card" style={{ textAlign: 'left' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: 'var(--primary)', 
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  <service.icon size={28} color="white" />
                </div>
                <h3 style={{ marginBottom: '12px', fontSize: '1.25rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>{service.description}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/services" className="btn btn-secondary">
              View All Services <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Problems We Solve</h2>
            <p>Common challenges when sourcing from China, and how we help you overcome them.</p>
          </div>
          <div className="grid grid-4">
            {problems.map((problem, index) => (
              <div key={index} className="card" style={{ textAlign: 'left', borderTop: '4px solid var(--secondary)' }}>
                <h3 style={{ marginBottom: '12px', fontSize: '1.1rem', color: 'var(--primary)' }}>{problem.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Sourcing Process</h2>
            <p>A proven 5-step approach to ensure successful sourcing from China.</p>
          </div>
          <div style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '16px' }}>
            {process.map((item, index) => (
              <div key={index} style={{ 
                flex: '1', 
                minWidth: '220px',
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '32px 24px',
                textAlign: 'center',
                position: 'relative',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: 'var(--primary)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.25rem',
                }}>
                  {item.step}
                </div>
                <h3 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.6' }}>{item.description}</p>
                {index < process.length - 1 && (
                  <div style={{ 
                    position: 'absolute', 
                    right: '-24px', 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    color: 'var(--border)'
                  }}>
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/how-it-works" className="btn btn-primary">
              Learn More About Our Process
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Products We Source</h2>
            <p>Extensive experience across multiple product categories.</p>
          </div>
          <div className="grid grid-4">
            {products.map((product, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '16px',
                padding: '20px',
                backgroundColor: 'var(--background)',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--background)';
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              >
                <Globe size={24} style={{ color: 'var(--secondary)' }} />
                <span style={{ fontWeight: '500' }}>{product.name}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/products" className="btn btn-secondary">
              View All Product Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Case Studies</h2>
            <p>Real results from our sourcing partnerships.</p>
          </div>
          <div className="grid grid-3">
            {caseStudies.map((study, index) => (
              <div key={index} className="card" style={{ textAlign: 'left' }}>
                <div style={{ 
                  display: 'inline-block',
                  padding: '4px 12px',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  borderRadius: '4px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}>
                  {study.category}
                </div>
                <h3 style={{ marginBottom: '8px', fontSize: '1.25rem' }}>{study.client}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '16px' }}>{study.industry}</p>
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '8px' }}>
                    <strong>Solution:</strong> {study.solution}
                  </p>
                  <p style={{ color: 'var(--success)', fontSize: '0.9rem', fontWeight: '500' }}>
                    <strong>Result:</strong> {study.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link to="/case-studies" className="btn btn-secondary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
            <p>Trusted by businesses worldwide.</p>
          </div>
          <div className="grid grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{ 
                padding: '32px',
                backgroundColor: 'var(--background)',
                borderRadius: '8px',
                textAlign: 'left',
              }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--accent)" color="var(--accent)" />
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px', fontStyle: 'italic' }}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <p style={{ fontWeight: '600', color: 'var(--text-primary)' }}>{testimonial.author}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about our sourcing services.</p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                borderRadius: '8px', 
                marginBottom: '12px',
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}>
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '1rem' }}>
                    {faq.question}
                  </span>
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {openFaq === index && (
                  <div style={{ padding: '0 24px 20px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '80px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Start Sourcing?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Get a free sourcing quote tailored to your specific requirements. Our team will respond within 24 hours.
          </p>
          <Link to="/contact" className="btn btn-accent" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Get In Touch</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <form style={{ display: 'grid', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                  Company Name
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                  Product Category
                </label>
                <select
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    outline: 'none',
                    backgroundColor: 'white',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                >
                  <option value="">Select a category</option>
                  <option value="electronics">Electronics</option>
                  <option value="textiles">Textiles & Apparel</option>
                  <option value="machinery">Machinery</option>
                  <option value="furniture">Furniture</option>
                  <option value="packaging">Packaging</option>
                  <option value="home-goods">Home Goods</option>
                  <option value="automotive">Automotive Parts</option>
                  <option value="health-beauty">Health & Beauty</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your sourcing needs - product details, quantity, target price, etc."
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit',
                    transition: 'border-color 0.2s',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ padding: '16px', fontSize: '1.1rem' }}>
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;