import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, CheckCircle, ClipboardCheck, Factory, Truck, Package,
  ArrowRight, Shield, Clock, DollarSign, FileCheck, Handshake
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Services = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Sourcing Services</h1>
          <p>Comprehensive solutions to simplify your China sourcing</p>
        </div>

        <style>{`
          .page-header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: white;
            padding: 140px 0 80px;
            text-align: center;
          }

          .page-header h1 {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 16px;
          }

          .page-header p {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.9);
            max-width: 600px;
            margin: 0 auto;
          }

          @media (max-width: 768px) {
            .page-header {
              padding: 120px 0 60px;
            }
            .page-header h1 {
              font-size: 32px;
            }
            .page-header p {
              font-size: 17px;
            }
          }
        `}</style>
      </section>

      {/* Services Detail */}
      <section className="section">
        <div className="container">
          <div className="services-detail">
            {servicesDetail.map((service, index) => (
              <div key={index} className={`service-detail-card ${index % 2 === 1 ? 'reverse' : ''}`}>
                <div className="service-detail-image">
                  <div className="image-placeholder"
                    data-strk-img-id={`service-img-${index}`}
                    data-strk-img={`[service-title-${index}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                  />
                </div>
                <div className="service-detail-content">
                  <div className="service-number">0{index + 1}</div>
                  <h2 id={`service-title-${index}`}>{service.title}</h2>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, i) => (
                      <li key={i}><CheckCircle size={18} /> {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .services-detail {
            display: flex;
            flex-direction: column;
            gap: 80px;
          }

          .service-detail-card {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: center;
          }

          .service-detail-card.reverse {
            direction: rtl;
          }

          .service-detail-card.reverse > * {
            direction: ltr;
          }

          .service-detail-image {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }

          .image-placeholder {
            height: 350px;
            background: var(--bg-tertiary);
            background-size: cover;
            background-position: center;
          }

          .service-detail-content {
            position: relative;
          }

          .service-number {
            font-size: 72px;
            font-weight: 800;
            color: var(--bg-tertiary);
            position: absolute;
            top: -40px;
            left: 0;
            line-height: 1;
          }

          .service-detail-content h2 {
            font-size: 32px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 20px;
            position: relative;
          }

          .service-detail-content > p {
            font-size: 17px;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 24px;
          }

          .service-features {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .service-features li {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 10px 0;
            font-size: 15px;
            color: var(--text-primary);
          }

          .service-features li svg {
            color: var(--accent);
            flex-shrink: 0;
          }

          @media (max-width: 1024px) {
            .service-detail-card {
              grid-template-columns: 1fr;
              gap: 32px;
            }
            .service-detail-card.reverse {
              direction: ltr;
            }
            .service-number {
              font-size: 56px;
              top: -30px;
            }
            .service-detail-content h2 {
              font-size: 26px;
            }
          }
        `}</style>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Why Choose Our Services</h2>
          <p className="section-subtitle">What sets us apart in China sourcing</p>
          
          <div className="why-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="why-item card">
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
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
          }

          .why-item {
            padding: 32px;
            text-align: center;
          }

          .why-icon {
            width: 72px;
            height: 72px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            color: white;
          }

          .why-item h3 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 12px;
            color: var(--text-primary);
          }

          .why-item p {
            font-size: 15px;
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

      {/* Pricing Transparency */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Service Pricing</h2>
          <p className="section-subtitle">Transparent pricing with no hidden fees</p>
          
          <div className="pricing-grid">
            {pricing.map((plan, index) => (
              <div key={index} className={`pricing-card card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <div className="featured-badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}</div>
                <p className="price-desc">{plan.description}</p>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}><CheckCircle size={16} /> {feature}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .pricing-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            max-width: 1000px;
            margin: 0 auto;
          }

          .pricing-card {
            padding: 32px;
            text-align: center;
            position: relative;
          }

          .pricing-card.featured {
            border: 2px solid var(--primary);
            transform: scale(1.05);
          }

          .featured-badge {
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary);
            color: white;
            padding: 4px 16px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
          }

          .pricing-card h3 {
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 16px;
            color: var(--text-primary);
          }

          .price {
            font-size: 42px;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 8px;
          }

          .price-desc {
            font-size: 14px;
            color: var(--text-muted);
            margin-bottom: 24px;
          }

          .pricing-features {
            list-style: none;
            padding: 0;
            margin: 0 0 24px;
            text-align: left;
          }

          .pricing-features li {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 0;
            font-size: 14px;
            color: var(--text-secondary);
          }

          .pricing-features li svg {
            color: var(--accent);
          }

          .pricing-card .btn {
            width: 100%;
          }

          @media (max-width: 1024px) {
            .pricing-grid {
              grid-template-columns: 1fr;
              max-width: 400px;
            }
            .pricing-card.featured {
              transform: none;
            }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Need Custom Sourcing Solutions?</h2>
            <p>Contact us to discuss your specific requirements. We'll tailor our services to meet your needs.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Quote</Link>
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
        `}</style>
      </section>
    </div>
  )
}

const servicesDetail = [
  {
    title: 'Supplier Identification & Verification',
    description: 'Finding the right supplier is the foundation of successful sourcing. We leverage our extensive network and industry expertise to identify manufacturers that match your specific requirements for quality, capacity, pricing, and certifications.',
    features: [
      'Comprehensive supplier search based on your criteria',
      'Background checks and creditworthiness assessment',
      'Verification of business licenses and certifications',
      'Production capacity and capability evaluation',
      'Comparison reports with supplier recommendations'
    ]
  },
  {
    title: 'Factory Audits & Compliance',
    description: 'Our on-site factory audits provide you with verified information about potential partners. We visit factories personally to assess their legitimacy, production capabilities, quality systems, and compliance with international standards.',
    features: [
      'On-site factory verification with photo/video documentation',
      'Quality management system assessment (ISO, etc.)',
      'Social compliance audits (SA8000, BSCI)',
      'Production capacity verification',
      'Detailed audit reports within 48 hours'
    ]
  },
  {
    title: 'Quality Control & Inspection',
    description: 'Quality issues can be costly. Our inspection services ensure your products meet specifications before shipment, helping you avoid returns, delays, and reputation damage.',
    features: [
      'Pre-production inspection (raw materials, components)',
      'During-production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'Detailed inspection reports with photos'
    ]
  },
  {
    title: 'Production Follow-up & Monitoring',
    description: 'Stay informed about your production progress without traveling to China. Our team provides regular updates and addresses any issues that arise during manufacturing.',
    features: [
      'Weekly production progress reports',
      'Quality issue identification and resolution',
      'Timeline management and delay prevention',
      'Sample approval coordination',
      'Production milestone tracking'
    ]
  },
  {
    title: 'Shipping & Logistics Coordination',
    description: 'We handle the complexities of international shipping, from freight forwarding to customs clearance, ensuring your products arrive safely and on time.',
    features: [
      'Freight forwarding (air, sea, express)',
      'Customs clearance documentation',
      'Door-to-door delivery coordination',
      'Insurance arrangement',
      'Shipping cost optimization'
    ]
  },
  {
    title: 'Sample Management & Testing',
    description: 'Samples are critical for product development and approval. We streamline the sample process, from procurement to testing and shipping.',
    features: [
      'Sample sourcing and procurement',
      'Coordinated testing with certified labs',
      'Sample shipping and tracking',
      'Feedback compilation and supplier communication',
      'Pre-production sample approval'
    ]
  }
]

const whyChoose = [
  {
    icon: <Shield size={36} />,
    title: 'Verified Suppliers',
    description: 'Every supplier we recommend has been personally verified through our rigorous audit process.'
  },
  {
    icon: <Clock size={36} />,
    title: 'Time Efficient',
    description: 'Skip months of research and travel. We accelerate your sourcing timeline significantly.'
  },
  {
    icon: <DollarSign size={36} />,
    title: 'Cost Effective',
    description: 'Our local expertise and relationships help negotiate better prices with suppliers.'
  },
  {
    icon: <FileCheck size={36} />,
    title: 'Quality Assured',
    description: 'Professional inspections protect your investment and ensure product quality.'
  },
  {
    icon: <Handshake size={36} />,
    title: 'Transparent Process',
    description: 'Clear communication and regular updates throughout the entire sourcing process.'
  },
  {
    icon: <CheckCircle size={36} />,
    title: 'Proven Results',
    description: 'Years of experience successfully serving clients across 50+ countries.'
  }
]

const pricing = [
  {
    name: 'Basic',
    price: 'From $500',
    description: 'One-time project fee',
    features: [
      'Supplier identification (up to 5 suppliers)',
      'Basic supplier verification report',
      'Price negotiation support',
      'Email support'
    ],
    featured: false
  },
  {
    name: 'Professional',
    price: 'From $1,500',
    description: 'Most popular choice',
    features: [
      'Everything in Basic',
      'On-site factory audit',
      'Quality inspection (1 visit)',
      'Production follow-up',
      'Priority support'
    ],
    featured: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions',
    features: [
      'Everything in Professional',
      'Multiple factory audits',
      'Ongoing quality control',
      'Dedicated account manager',
      '24/7 support'
    ],
    featured: false
  }
]

export default Services