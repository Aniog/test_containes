import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Search, 
  Factory, 
  ClipboardCheck, 
  Truck, 
  FileCheck, 
  Package, 
  BarChart3,
  Handshake,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We verify supplier legitimacy through factory visits, business license checks, and capacity assessments.',
      features: [
        'Factory physical verification',
        'Business license authentication',
        'Production capacity assessment',
        'Quality management system review',
        'Financial stability check',
        'Reference verification',
      ],
    },
    {
      icon: Factory,
      title: 'Factory Sourcing',
      description: 'We find the right manufacturers based on your product specifications, quality requirements, and budget.',
      features: [
        'Custom supplier matching',
        'Competitive bidding process',
        'Factory capability assessment',
        'Price negotiation',
        'Contract review assistance',
        'MOQ optimization',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our QC engineers ensure your products meet specifications through rigorous inspection protocols.',
      features: [
        'Pre-shipment inspection',
        'During-production inspection',
        'Container loading supervision',
        'AQL-based sampling',
        'Detailed photo/video reports',
        'Compliance verification',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate end-to-end logistics from factory to your designated delivery location.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Door-to-door delivery',
        'Insurance coordination',
        'Track and trace',
      ],
    },
    {
      icon: FileCheck,
      title: 'Product Development',
      description: 'We help transform your ideas into manufacturable products with technical specifications.',
      features: [
        'Technical drawing creation',
        'Material selection',
        'Prototype coordination',
        'Manufacturing feasibility analysis',
        'Cost optimization',
        'Patent considerations',
      ],
    },
    {
      icon: Package,
      title: 'Sample Management',
      description: 'We streamline the sample request and evaluation process to help you make informed decisions.',
      features: [
        'Sample sourcing',
        'Quality evaluation',
        'Shipping coordination',
        'Comparison analysis',
        'Feedback transmission',
        'Revision tracking',
      ],
    },
  ]

  const processSteps = [
    {
      number: '1',
      title: 'Initial Consultation',
      description: 'We discuss your product requirements, target price, quality standards, and timeline.',
    },
    {
      number: '2',
      title: 'Supplier Search',
      description: 'We identify and evaluate potential manufacturers matching your criteria.',
    },
    {
      number: '3',
      title: 'Verification',
      description: 'We conduct factory visits and verify all credentials before presenting options.',
    },
    {
      number: '4',
      title: 'Sample & Negotiation',
      description: 'We facilitate sample requests and negotiate favorable terms on your behalf.',
    },
    {
      number: '5',
      title: 'Production Monitoring',
      description: 'We oversee production progress and conduct quality checks throughout.',
    },
    {
      number: '6',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics and ensure smooth delivery to your location.',
    },
  ]

  const whyChooseUs = [
    {
      title: 'Verified Suppliers Only',
      description: 'Every supplier we recommend has been personally verified through factory visits.',
      icon: CheckCircle,
    },
    {
      title: 'Transparent Process',
      description: 'You receive regular updates and detailed reports at every stage of sourcing.',
      icon: BarChart3,
    },
    {
      title: 'No Hidden Fees',
      description: 'Our fee structure is clear and transparent with no surprise costs.',
      icon: FileCheck,
    },
    {
      title: 'Long-term Partnership',
      description: 'We aim to build lasting relationships, not just complete one-off transactions.',
      icon: Handshake,
    },
  ]

  const testimonials = [
    {
      quote: "SSourcing China transformed our supply chain. We went from dealing with unreliable suppliers to having a verified network of manufacturers we trust completely.",
      author: "Michael Thompson",
      role: "CEO, TechGear Solutions",
      location: "United Kingdom",
    },
    {
      quote: "Their quality inspection service saved us from a $50,000 mistake. The factory tried to ship substandard products, but the QC team caught the issues before loading.",
      author: "Sarah Chen",
      role: "Procurement Director",
      location: "Australia",
    },
    {
      quote: "Professional, responsive, and thorough. They understand the Chinese market and how to navigate it effectively for foreign buyers.",
      author: "David Mueller",
      role: "Founder, HomeStyle Imports",
      location: "Germany",
    },
  ]

  return (
    <>
      <Helmet>
        <title>Sourcing Services | Supplier Verification, QC & Shipping | SSourcing China</title>
        <meta name="description" content="Comprehensive China sourcing services including supplier verification, factory sourcing, quality inspection, and shipping coordination." />
      </Helmet>

      <section className="services-hero">
        <div className="services-hero-content">
          <h1>Our Sourcing Services</h1>
          <p>
            End-to-end solutions to ensure your China sourcing is safe, efficient, and profitable. 
            From supplier verification to final delivery, we handle every step.
          </p>
          <Link to="/contact" className="services-hero-btn">
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="services-list-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Comprehensive Sourcing Solutions</h2>
            <p className="section-subtitle">
              We provide a full range of services to support your China sourcing operations.
            </p>
          </div>

          <div className="services-list">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-detail-header">
                  <div className="service-detail-icon">
                    <service.icon size={36} />
                  </div>
                  <div className="service-detail-title">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <CheckCircle size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-detail-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Our Approach</span>
            <h2 className="section-title">How We Work</h2>
            <p className="section-subtitle">
              A systematic approach to ensure successful sourcing outcomes.
            </p>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step-detail">
                <div className="step-number-detail">{step.number}</div>
                <div className="step-content-detail">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-choose-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Why SSourcing China</span>
            <h2 className="section-title">Our Commitment to Quality</h2>
          </div>

          <div className="why-choose-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-choose-card">
                <item.icon size={32} className="why-choose-icon" />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Client Feedback</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#c2410c" color="#c2410c" />
                  ))}
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <strong>{testimonial.author}</strong>
                    <span>{testimonial.role}</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-cta-section">
        <div className="cta-container">
          <h2>Ready to Source from China?</h2>
          <p>Get a customized quote for your sourcing needs. Our team typically responds within 24 hours.</p>
          <Link to="/contact" className="cta-section-btn">
            Get a Free Sourcing Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default Services