import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  Shield, Factory, ClipboardCheck, Truck, Search, DollarSign,
  ChevronDown, CheckCircle, ArrowRight
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)
  const [faqOpen, setFaqOpen] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product: '',
    message: ''
  })

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const services = [
    {
      icon: <Search size={28} />,
      title: 'Supplier Verification',
      desc: 'We verify supplier credentials, business licenses, and factory existence to ensure you work with legitimate partners.'
    },
    {
      icon: <Factory size={28} />,
      title: 'Factory Audit',
      desc: 'Comprehensive on-site audits assessing production capacity, equipment, workforce, and quality management systems.'
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: 'Quality Control',
      desc: 'Pre-shipment inspections and during-production checks to ensure your products meet specifications and standards.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Production Follow-up',
      desc: 'Regular updates on production progress, timeline adherence, and early warning on any potential issues.'
    },
    {
      icon: <Truck size={28} />,
      title: 'Shipping & Logistics',
      desc: 'End-to-end shipping coordination including freight forwarding, customs clearance, and documentation.'
    },
    {
      icon: <DollarSign size={28} />,
      title: 'Sourcing & Negotiation',
      desc: 'We find the right suppliers, negotiate competitive pricing, and handle contract terms on your behalf.'
    }
  ]

  const processSteps = [
    { number: '1', title: 'Submit Inquiry', desc: 'Tell us what you need' },
    { number: '2', title: 'Supplier Match', desc: 'We find verified suppliers' },
    { number: '3', title: 'Quality Check', desc: 'Inspections & audits' },
    { number: '4', title: 'Production', desc: 'Follow-up & updates' },
    { number: '5', title: 'Delivery', desc: 'Ship to your door' }
  ]

  const products = [
    { icon: '📱', title: 'Electronics', desc: 'Consumer & industrial' },
    { icon: '🪑', title: 'Furniture', desc: 'Home & office' },
    { icon: '👕', title: 'Textiles', desc: 'Apparel & fabrics' },
    { icon: '⚙️', title: 'Machinery', desc: 'Industrial equipment' },
    { icon: '📦', title: 'Packaging', desc: 'Custom solutions' },
    { icon: '🛍️', title: 'Consumer Goods', desc: 'Various products' }
  ]

  const caseStudies = [
    {
      tag: 'Electronics',
      title: 'US Retailer Sourcing Smart Home Devices',
      desc: 'A US retailer needed a reliable supplier for smart home products. We verified 15 factories and conducted quality inspections.',
      results: ['40% cost savings', 'Zero defects', 'On-time delivery']
    },
    {
      tag: 'Furniture',
      title: 'European Importer Office Furniture Deal',
      desc: 'Sourced custom office furniture for a European distributor. Factory audit revealed production capacity issues we resolved.',
      results: ['2000 units delivered', '12 weeks ahead', '100% pass rate']
    },
    {
      tag: 'Textiles',
      title: 'Australian Brand Garment Production',
      desc: 'Managed complete production cycle for an Australian fashion brand, from fabric sourcing to final packaging.',
      results: ['5 factories', '50K units', 'Full QC coverage']
    }
  ]

  const faqs = [
    {
      question: 'How do you verify suppliers are legitimate?',
      answer: 'We conduct thorough background checks including business license verification, factory visits, and cross-referencing with industry databases. We provide detailed reports on each supplier\'s legitimacy and capabilities.'
    },
    {
      question: 'What quality control services do you offer?',
      answer: 'We offer pre-shipment inspections, during-production checks, and final random inspections. Our QC team follows AQL standards and provides detailed photo and video reports.'
    },
    {
      question: 'How do you handle shipping and logistics?',
      answer: 'We coordinate with trusted freight forwarders to handle all aspects of shipping including documentation, customs clearance, and freight. We provide end-to-end tracking and regular updates.'
    },
    {
      question: 'What are your fees?',
      answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a customized quote based on your specific requirements.'
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Timeline varies based on product complexity and supplier availability. Typically, initial supplier matching takes 1-2 weeks, with the full process taking 4-8 weeks before production begins.'
    }
  ]

  const handleFaqToggle = (index) => {
    setFaqOpen(faqOpen === index ? null : index)
  }

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you within 24 hours.')
  }

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg" data-strk-bg-id="hero-bg-001" data-strk-bg="China sourcing factory warehouse" data-strk-bg-ratio="16x9" data-strk-bg-width="1600"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Trusted by 200+ Global Buyers
            </div>
            <h1>China Sourcing Agent for Global Buyers</h1>
            <p className="hero-subtitle">
              We help overseas businesses find verified suppliers, ensure product quality, 
              and coordinate seamless shipping from China. Your trusted partner for reliable sourcing.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary">
                Get a Free Sourcing Quote
              </Link>
              <Link to="/how-it-works" className="btn btn-secondary">
                How It Works
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Suppliers Verified</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">15+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">98%</div>
                <div className="hero-stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Complete Sourcing Solutions</h2>
            <p className="section-desc">
              End-to-end services to ensure your China sourcing is smooth, safe, and successful.
            </p>
          </div>
          <div className="grid-3">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section process-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Simple 5-Step Process</h2>
            <p className="section-desc">
              Our streamlined process makes China sourcing straightforward and risk-free.
            </p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section products-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Source</span>
            <h2 className="section-title">Products We Source</h2>
            <p className="section-desc">
              We have expertise across a wide range of product categories from verified Chinese manufacturers.
            </p>
          </div>
          <div className="grid-3">
            {products.map((product, index) => (
              <div key={index} className="product-category">
                <div className="product-category-icon">
                  <span style={{ fontSize: '28px' }}>{product.icon}</span>
                </div>
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon"><CheckCircle size={32} /></div>
              <div className="trust-number">500+</div>
              <div className="trust-label">Verified Suppliers</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon"><CheckCircle size={32} /></div>
              <div className="trust-number">200+</div>
              <div className="trust-label">Clients Worldwide</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon"><CheckCircle size={32} /></div>
              <div className="trust-number">15+</div>
              <div className="trust-label">Years Experience</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon"><CheckCircle size={32} /></div>
              <div className="trust-number">3000+</div>
              <div className="trust-label">Inspections Done</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section case-studies-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Success Stories</span>
            <h2 className="section-title">Case Studies</h2>
            <p className="section-desc">
              See how we've helped businesses like yours succeed with China sourcing.
            </p>
          </div>
          <div className="grid-3">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-card">
                <div className="case-image">
                  <span>📦</span>
                </div>
                <div className="case-content">
                  <span className="case-tag">{study.tag}</span>
                  <h3>{study.title}</h3>
                  <p>{study.desc}</p>
                  <div className="case-results">
                    {study.results.map((result, i) => (
                      <div key={i} className="case-result">
                        <div className="case-result-number">✓</div>
                        <div className="case-result-label">{result}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Get answers to common questions about our China sourcing services.
            </p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${faqOpen === index ? 'active' : ''}`}>
                <button className="faq-question" onClick={() => handleFaqToggle(index)}>
                  {faq.question}
                  <ChevronDown className="faq-icon" size={20} />
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-content">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Get Your Free Sourcing Quote</h3>
              <p>
                Ready to find verified suppliers in China? Tell us about your product requirements 
                and we'll provide a comprehensive sourcing solution within 24 hours.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Shield size={24} />
                  </div>
                  <div className="contact-item-text">
                    <h4>Verified Suppliers</h4>
                    <p>Access our network of 500+ verified factories</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <ClipboardCheck size={24} />
                  </div>
                  <div className="contact-item-text">
                    <h4>Quality Guaranteed</h4>
                    <p>Professional QC inspections at every stage</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon">
                    <Truck size={24} />
                  </div>
                  <div className="contact-item-text">
                    <h4>End-to-End Service</h4>
                    <p>From sourcing to delivery at your door</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    className="form-input" 
                    value={formData.name}
                    onChange={handleFormChange}
                    required 
                    placeholder="John Smith"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    className="form-input" 
                    value={formData.email}
                    onChange={handleFormChange}
                    required 
                    placeholder="john@company.com"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Company Name</label>
                  <input 
                    type="text" 
                    name="company"
                    className="form-input" 
                    value={formData.company}
                    onChange={handleFormChange}
                    placeholder="Your Company Ltd"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Product Interested In *</label>
                  <input 
                    type="text" 
                    name="product"
                    className="form-input" 
                    value={formData.product}
                    onChange={handleFormChange}
                    required 
                    placeholder="e.g., Electronics, Furniture, Textiles"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea 
                    name="message"
                    className="form-textarea" 
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Tell us about your requirements, quantity, target price..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit">
                  Submit Inquiry <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home