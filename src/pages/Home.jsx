import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, CheckCircle, ClipboardCheck, Truck, Package, 
  ArrowRight, ChevronDown, ChevronUp, Star, Users, 
  Globe, Award, Factory, Shield, Clock, TrendingUp
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Home = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" 
          data-strk-bg-id="hero-bg-001"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1 id="hero-title">China Sourcing Agent for Global Buyers</h1>
          <p id="hero-subtitle">Supporting overseas businesses with supplier verification, quality control, and end-to-end logistics from China</p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Sourcing Quote</Link>
            <Link to="/services" className="btn btn-outline btn-lg">View Our Services</Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Suppliers Verified</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>

        <style>{`
          .hero-section {
            position: relative;
            min-height: 100vh;
            display: flex;
            align-items: center;
            padding-top: 72px;
            overflow: hidden;
          }

          .hero-bg {
            position: absolute;
            inset: 0;
            background-size: cover;
            background-position: center;
          }

          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(26, 54, 93, 0.92) 0%, rgba(26, 54, 93, 0.85) 100%);
          }

          .hero-content {
            position: relative;
            z-index: 1;
            color: white;
            text-align: center;
            padding: 80px 24px;
          }

          .hero-content h1 {
            font-size: 56px;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 24px;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
          }

          .hero-content p {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.9);
            max-width: 600px;
            margin: 0 auto 40px;
            line-height: 1.6;
          }

          .hero-buttons {
            display: flex;
            gap: 16px;
            justify-content: center;
            margin-bottom: 64px;
          }

          .btn-lg {
            padding: 16px 32px;
            font-size: 18px;
          }

          .btn-outline {
            background: transparent;
            border: 2px solid white;
            color: white;
          }

          .btn-outline:hover {
            background: white;
            color: var(--primary);
          }

          .hero-stats {
            display: flex;
            justify-content: center;
            gap: 64px;
          }

          .hero-stat {
            text-align: center;
          }

          .stat-number {
            display: block;
            font-size: 48px;
            font-weight: 800;
            color: var(--secondary);
          }

          .stat-label {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.8);
          }

          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 36px;
            }
            .hero-content p {
              font-size: 17px;
            }
            .hero-buttons {
              flex-direction: column;
              align-items: center;
            }
            .hero-stats {
              flex-wrap: wrap;
              gap: 32px;
            }
            .stat-number {
              font-size: 36px;
            }
          }
        `}</style>
      </section>

      {/* Services Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Our Sourcing Services</h2>
          <p className="section-subtitle">End-to-end solutions to simplify your China sourcing experience</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .service-card {
            padding: 32px;
            text-align: left;
          }

          .service-icon {
            width: 56px;
            height: 56px;
            background: var(--bg-secondary);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
            color: var(--primary);
          }

          .service-card h3 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
            color: var(--text-primary);
          }

          .service-card p {
            font-size: 15px;
            color: var(--text-secondary);
            line-height: 1.6;
          }

          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How We Work</h2>
          <p className="section-subtitle">A proven 5-step process to ensure successful sourcing</p>
          
          <div className="process-timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < processSteps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .process-timeline {
            display: flex;
            justify-content: space-between;
            position: relative;
            padding: 40px 0;
          }

          .process-timeline::before {
            content: '';
            position: absolute;
            top: 76px;
            left: 60px;
            right: 60px;
            height: 2px;
            background: var(--border);
          }

          .process-step {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            flex: 1;
            position: relative;
            z-index: 1;
          }

          .step-number {
            width: 48px;
            height: 48px;
            background: var(--primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 20px;
          }

          .step-content {
            max-width: 200px;
          }

          .step-content h3 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--text-primary);
          }

          .step-content p {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.5;
          }

          .step-connector {
            display: none;
          }

          @media (max-width: 768px) {
            .process-timeline {
              flex-direction: column;
              gap: 32px;
            }
            .process-timeline::before {
              display: none;
            }
            .step-content {
              max-width: 100%;
            }
          }
        `}</style>
      </section>

      {/* Products Section */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Products We Source</h2>
          <p className="section-subtitle">Extensive experience across multiple product categories</p>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card card">
                <div className="product-icon">{product.icon}</div>
                <h3>{product.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/products" className="btn btn-secondary">View All Categories</Link>
          </div>
        </div>

        <style>{`
          .products-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }

          .product-card {
            padding: 28px;
            text-align: center;
            transition: transform 0.2s;
          }

          .product-card:hover {
            transform: translateY(-4px);
          }

          .product-icon {
            width: 64px;
            height: 64px;
            background: var(--primary);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
            color: white;
          }

          .product-card h3 {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
          }

          @media (max-width: 1024px) {
            .products-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .products-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 16px;
            }
            .product-card {
              padding: 20px;
            }
            .product-icon {
              width: 48px;
              height: 48px;
            }
            .product-card h3 {
              font-size: 14px;
            }
          }
        `}</style>
      </section>

      {/* Why Work With Us */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Work With Us</h2>
          <p className="section-subtitle">We solve the challenges of sourcing from China</p>
          
          <div className="why-grid">
            {whyItems.map((item, index) => (
              <div key={index} className="why-card card">
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .why-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }

          .why-card {
            padding: 32px;
            text-align: center;
          }

          .why-icon {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            color: white;
          }

          .why-card h3 {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 12px;
            color: var(--text-primary);
          }

          .why-card p {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
          }

          @media (max-width: 1024px) {
            .why-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .why-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Trust Stats */}
      <section className="section" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 32px;
            text-align: center;
          }

          .stat-item {
            padding: 24px;
          }

          .stat-icon {
            width: 56px;
            height: 56px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
            color: var(--secondary);
          }

          .stat-value {
            font-size: 42px;
            font-weight: 800;
            margin-bottom: 8px;
          }

          .stat-label {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.8);
          }

          @media (max-width: 768px) {
            .stats-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            .stat-value {
              font-size: 32px;
            }
          }
        `}</style>
      </section>

      {/* Case Studies Preview */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <p className="section-subtitle">Real results from our sourcing partnerships</p>
          
          <div className="case-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-card card">
                <div className="case-image"
                  data-strk-img-id={`case-img-${index}`}
                  data-strk-img={`[case-title-${index}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                />
                <div className="case-content">
                  <h3 id={`case-title-${index}`}>{study.title}</h3>
                  <p className="case-industry">{study.industry}</p>
                  <p className="case-desc">{study.description}</p>
                  <div className="case-results">
                    {study.results.map((result, i) => (
                      <span key={i} className="result-tag">{result}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/case-studies" className="btn btn-secondary">View All Case Studies</Link>
          </div>
        </div>

        <style>{`
          .case-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .case-card {
            overflow: hidden;
          }

          .case-image {
            height: 200px;
            background: var(--bg-tertiary);
            background-size: cover;
            background-position: center;
          }

          .case-content {
            padding: 24px;
          }

          .case-content h3 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 8px;
            color: var(--text-primary);
          }

          .case-industry {
            font-size: 13px;
            color: var(--secondary);
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 12px;
          }

          .case-desc {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 16px;
          }

          .case-results {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .result-tag {
            background: var(--bg-secondary);
            color: var(--primary);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
          }

          @media (max-width: 1024px) {
            .case-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .case-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Common questions about our sourcing services</p>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <style>{`
          .faq-list {
            max-width: 800px;
            margin: 0 auto;
          }
        `}</style>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Sourcing?</h2>
            <p>Get a free consultation and quote for your sourcing needs. Our team typically responds within 24 hours.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Sourcing Quote</Link>
          </div>
        </div>

        <style>{`
          .cta-section {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: white;
          }

          .cta-content {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
          }

          .cta-content h2 {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .cta-content p {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 32px;
          }

          .cta-section .btn-primary {
            background: white;
            color: var(--primary);
          }

          .cta-section .btn-primary:hover {
            background: var(--bg-secondary);
          }

          @media (max-width: 640px) {
            .cta-content h2 {
              font-size: 28px;
            }
            .cta-content p {
              font-size: 16px;
            }
          }
        `}</style>
      </section>
    </div>
  )
}

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="faq-item card">
      <button 
        className="faq-question" 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}

      <style>{`
        .faq-item {
          margin-bottom: 12px;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: none;
          border: none;
          font-size: 16px;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          text-align: left;
        }

        .faq-question:hover {
          background: var(--bg-secondary);
        }

        .faq-answer {
          padding: 0 24px 20px;
        }

        .faq-answer p {
          font-size: 15px;
          color: var(--text-secondary);
          line-height: 1.7;
        }
      `}</style>
    </div>
  )
}

const services = [
  {
    icon: <Search size={28} />,
    title: 'Supplier Identification',
    description: 'We find and vet reliable suppliers matching your product specifications, quality requirements, and budget.'
  },
  {
    icon: <CheckCircle size={28} />,
    title: 'Factory Verification',
    description: 'On-site audits to verify factory existence, production capacity, certifications, and compliance standards.'
  },
  {
    icon: <ClipboardCheck size={28} />,
    title: 'Quality Control',
    description: 'Pre-shipment inspections and quality control services to ensure products meet your specifications.'
  },
  {
    icon: <Factory size={28} />,
    title: 'Production Monitoring',
    description: 'Regular factory visits during production to track progress, identify issues, and ensure timeline adherence.'
  },
  {
    icon: <Truck size={28} />,
    title: 'Shipping & Logistics',
    description: 'End-to-end shipping coordination including freight forwarding, customs clearance, and delivery.'
  },
  {
    icon: <Package size={28} />,
    title: 'Sample Management',
    description: 'Sample procurement, testing coordination, and shipping samples for your approval before mass production.'
  }
]

const processSteps = [
  { title: 'Submit Requirements', description: 'Share your product details, specifications, and sourcing goals' },
  { title: 'Supplier Matching', description: 'We identify and present vetted suppliers that match your criteria' },
  { title: 'Verification & Negotiation', description: 'Factory audits, price negotiation, and contract setup' },
  { title: 'Production Monitoring', description: 'Regular updates and quality checks during manufacturing' },
  { title: 'Shipping & Delivery', description: 'Logistics coordination from factory to your doorstep' }
]

const products = [
  { name: 'Electronics', icon: <Package size={28} /> },
  { name: 'Home Appliances', icon: <Package size={28} /> },
  { name: 'Furniture', icon: <Package size={28} /> },
  { name: 'Textiles', icon: <Package size={28} /> },
  { name: 'Industrial Equipment', icon: <Package size={28} /> },
  { name: 'Packaging', icon: <Package size={28} /> },
  { name: 'Toys & Gifts', icon: <Package size={28} /> },
  { name: 'Auto Parts', icon: <Package size={28} /> }
]

const whyItems = [
  {
    icon: <Shield size={32} />,
    title: 'Fraud Prevention',
    description: 'We verify every supplier to protect you from scams and unreliable partners.'
  },
  {
    icon: <Clock size={32} />,
    title: 'Time Savings',
    description: 'Skip the research and travel. We handle supplier outreach and management.'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Better Pricing',
    description: 'Our local expertise helps negotiate competitive rates with suppliers.'
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'Quality Assurance',
    description: 'Professional inspections ensure products meet your standards before shipping.'
  }
]

const stats = [
  { icon: <Users size={28} />, value: '500+', label: 'Suppliers Verified' },
  { icon: <Clock size={28} />, value: '10+', label: 'Years Experience' },
  { icon: <Star size={28} />, value: '98%', label: 'Client Satisfaction' },
  { icon: <Globe size={28} />, value: '50+', label: 'Countries Served' }
]

const caseStudies = [
  {
    title: 'Electronics Retailer Expansion',
    industry: 'Consumer Electronics',
    description: 'Helped a US retailer source smart home devices from verified manufacturers in Shenzhen.',
    results: ['15% Cost Savings', '8 Weeks Faster Delivery', '100% QC Pass Rate']
  },
  {
    title: 'Furniture Brand Launch',
    industry: 'Home & Furniture',
    description: 'Sourced and verified furniture manufacturers for a European brand entering the Asian market.',
    results: ['20 Suppliers Verified', '3 Factories Selected', 'On-time Delivery']
  },
  {
    title: 'Industrial Equipment Order',
    industry: 'Industrial Manufacturing',
    description: 'Coordinated large-scale procurement of industrial machinery components for a German company.',
    results: ['$2M Order Value', 'Zero Defects', 'Full Logistics Support']
  }
]

const faqs = [
  {
    question: 'How do you verify suppliers?',
    answer: 'We conduct on-site factory visits to verify the factory exists, assess production capacity, check certifications (ISO, CE, etc.), and evaluate quality management systems. We provide detailed audit reports with photos and videos.'
  },
  {
    question: 'What are your fees?',
    answer: 'Our fee structure depends on the services you need. We offer transparent pricing with no hidden costs. Contact us for a free consultation and quote tailored to your specific requirements.'
  },
  {
    question: 'How long does the sourcing process take?',
    answer: 'Timeline varies based on product complexity and availability. Typically, supplier identification takes 1-2 weeks, verification 1 week, and production varies by order size. We provide detailed timelines for each project.'
  },
  {
    question: 'Do you handle shipping?',
    answer: 'Yes, we coordinate full logistics including freight forwarding, customs clearance, and door-to-door delivery. We work with reliable shipping partners to ensure safe and timely delivery.'
  },
  {
    question: 'Can you help with small orders?',
    answer: 'Yes, we work with businesses of all sizes. While some services are more cost-effective for larger orders, we can tailor our services to meet your specific needs regardless of order volume.'
  },
  {
    question: 'What industries do you work with?',
    answer: 'We have experience across electronics, home goods, furniture, textiles, industrial equipment, packaging, toys, automotive parts, and more. Contact us to discuss your specific product category.'
  }
]

export default Home