import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  TrendingUp, Users, Globe, Award, ArrowRight, CheckCircle,
  Clock, DollarSign, Package, Factory
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Case Studies</h1>
          <p>Real success stories from our sourcing partnerships</p>
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
          }
        `}</style>
      </section>

      {/* Featured Case Study */}
      <section className="section">
        <div className="container">
          <div className="featured-case">
            <div className="featured-image">
              <div className="image-placeholder"
                data-strk-img-id="featured-case-1"
                data-strk-img="[featured-title]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
              />
            </div>
            <div className="featured-content">
              <span className="case-tag">Featured Case</span>
              <h2 id="featured-title">Electronics Retailer Expansion</h2>
              <p className="case-industry">Consumer Electronics • USA</p>
              <p className="case-overview">
                Helped a US-based electronics retailer source smart home devices from verified 
                manufacturers in Shenzhen, reducing costs while improving quality control.
              </p>
              
              <div className="case-results-grid">
                <div className="result-item">
                  <span className="result-value">15%</span>
                  <span className="result-label">Cost Savings</span>
                </div>
                <div className="result-item">
                  <span className="result-value">8 Weeks</span>
                  <span className="result-label">Faster Delivery</span>
                </div>
                <div className="result-item">
                  <span className="result-value">100%</span>
                  <span className="result-label">QC Pass Rate</span>
                </div>
              </div>

              <div className="case-challenges">
                <h4>Challenges</h4>
                <ul>
                  <li>Previous supplier had quality consistency issues</li>
                  <li>Long lead times affecting inventory management</li>
                  <li>Difficulty verifying supplier claims</li>
                </ul>
              </div>

              <div className="case-solutions">
                <h4>Solutions</h4>
                <ul>
                  <li>Conducted thorough factory audits of 12 suppliers</li>
                  <li>Implemented pre-shipment inspection protocol</li>
                  <li>Negotiated better pricing through direct factory relationships</li>
                </ul>
              </div>

              <Link to="/contact" className="btn btn-primary">Get Similar Results</Link>
            </div>
          </div>
        </div>

        <style>{`
          .featured-case {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 64px;
            align-items: start;
          }

          .featured-image {
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          }

          .image-placeholder {
            height: 400px;
            background: var(--bg-tertiary);
            background-size: cover;
            background-position: center;
          }

          .featured-content {
            padding-top: 16px;
          }

          .case-tag {
            display: inline-block;
            background: var(--secondary);
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            margin-bottom: 16px;
          }

          .featured-content h2 {
            font-size: 32px;
            font-weight: 700;
            color: var(--text-primary);
            margin-bottom: 8px;
          }

          .case-industry {
            font-size: 14px;
            color: var(--text-muted);
            margin-bottom: 20px;
          }

          .case-overview {
            font-size: 17px;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 32px;
          }

          .case-results-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 32px;
          }

          .result-item {
            text-align: center;
            padding: 20px;
            background: var(--bg-secondary);
            border-radius: 8px;
          }

          .result-value {
            display: block;
            font-size: 28px;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 4px;
          }

          .result-label {
            font-size: 13px;
            color: var(--text-muted);
          }

          .case-challenges, .case-solutions {
            margin-bottom: 24px;
          }

          .case-challenges h4, .case-solutions h4 {
            font-size: 16px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
          }

          .case-challenges ul, .case-solutions ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .case-challenges li, .case-solutions li {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 8px 0;
            font-size: 14px;
            color: var(--text-secondary);
          }

          .case-challenges li svg {
            color: var(--secondary);
            margin-top: 2px;
          }

          .case-solutions li svg {
            color: var(--accent);
            margin-top: 2px;
          }

          @media (max-width: 1024px) {
            .featured-case {
              grid-template-columns: 1fr;
              gap: 32px;
            }
          }
        `}</style>
      </section>

      {/* More Case Studies */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">More Success Stories</h2>
          <p className="section-subtitle">Proven results across different industries</p>
          
          <div className="case-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-card card">
                <div className="case-image">
                  <div className="image-placeholder"
                    data-strk-img-id={`case-img-${index}`}
                    data-strk-img={`[case-title-${index}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                  />
                </div>
                <div className="case-content">
                  <span className="case-category">{study.category}</span>
                  <h3 id={`case-title-${index}`}>{study.title}</h3>
                  <p className="case-desc">{study.description}</p>
                  <div className="case-metrics">
                    {study.metrics.map((metric, i) => (
                      <span key={i} className="metric-tag">{metric}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
          }

          .image-placeholder {
            height: 100%;
            background-size: cover;
            background-position: center;
          }

          .case-content {
            padding: 24px;
          }

          .case-category {
            font-size: 12px;
            font-weight: 600;
            color: var(--secondary);
            text-transform: uppercase;
          }

          .case-content h3 {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            margin: 8px 0 12px;
          }

          .case-desc {
            font-size: 14px;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 16px;
          }

          .case-metrics {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }

          .metric-tag {
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

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Client Testimonials</h2>
          <p className="section-subtitle">What our clients say about working with us</p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name[0]}</div>
                  <div className="author-info">
                    <span className="author-name">{testimonial.name}</span>
                    <span className="author-title">{testimonial.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .testimonial-card {
            padding: 28px;
          }

          .testimonial-stars {
            margin-bottom: 16px;
          }

          .star {
            color: #f59e0b;
            font-size: 18px;
          }

          .testimonial-text {
            font-size: 15px;
            color: var(--text-secondary);
            line-height: 1.7;
            margin-bottom: 20px;
            font-style: italic;
          }

          .testimonial-author {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .author-avatar {
            width: 48px;
            height: 48px;
            background: var(--primary);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
            font-size: 18px;
          }

          .author-info {
            display: flex;
            flex-direction: column;
          }

          .author-name {
            font-size: 15px;
            font-weight: 600;
            color: var(--text-primary);
          }

          .author-title {
            font-size: 13px;
            color: var(--text-muted);
          }

          @media (max-width: 1024px) {
            .testimonials-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .testimonials-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Stats */}
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

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Success Story?</h2>
            <p>Let's discuss how we can help you achieve similar results.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Get a Free Consultation</Link>
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
        `}</style>
      </section>
    </div>
  )
}

const caseStudies = [
  {
    category: 'Home & Furniture',
    title: 'European Furniture Brand Launch',
    description: 'Sourced and verified furniture manufacturers for a European brand entering the Asian market.',
    metrics: ['20 Suppliers Verified', '3 Factories Selected', 'On-time Delivery']
  },
  {
    category: 'Industrial',
    title: 'German Industrial Equipment Order',
    description: 'Coordinated large-scale procurement of industrial machinery components.',
    metrics: ['$2M Order Value', 'Zero Defects', 'Full Logistics Support']
  },
  {
    category: 'Packaging',
    title: 'US Brand Packaging Solution',
    description: 'Found sustainable packaging suppliers meeting strict environmental standards.',
    metrics: ['30% Cost Reduction', 'Eco-certified', 'Fast Turnaround']
  }
]

const testimonials = [
  {
    text: "SSourcing China transformed our supply chain. They found us reliable suppliers we never would have found on our own, and their quality control saved us from several potential issues.",
    name: "Michael Chen",
    title: "CEO, TechRetail USA"
  },
  {
    text: "Working with their team gave us confidence in our China sourcing. The factory audits and regular inspections have been invaluable for maintaining product quality.",
    name: "Sarah Williams",
    title: "Procurement Director, HomeGoods Europe"
  },
  {
    text: "They've been instrumental in helping us scale our business. Their local presence and expertise have saved us time, money, and countless headaches.",
    name: "David Park",
    title: "Founder, IndustrialCo"
  }
]

const stats = [
  { icon: <Users size={28} />, value: '500+', label: 'Suppliers Verified' },
  { icon: <Globe size={28} />, value: '50+', label: 'Countries Served' },
  { icon: <Award size={28} />, value: '98%', label: 'Client Satisfaction' },
  { icon: <TrendingUp size={28} />, value: '$50M+', label: 'Sourcing Volume' }
]

export default CaseStudies