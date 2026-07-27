import { useState, useEffect, useRef } from 'react'
import { Shield, Factory, ClipboardCheck, Truck, Search, DollarSign, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Services = () => {
  const containerRef = useRef(null)

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
      description: 'We conduct thorough background checks to ensure you work with legitimate and capable suppliers.',
      details: [
        'Business license verification',
        'Factory existence confirmation',
        'Production capacity assessment',
        'Financial stability check',
        'Trade reference verification',
        'Customs registration check'
      ]
    },
    {
      icon: <Factory size={28} />,
      title: 'Factory Audit',
      description: 'Comprehensive on-site audits to assess factory capabilities and quality management systems.',
      details: [
        'Production facility inspection',
        'Equipment and machinery assessment',
        'Workforce evaluation',
        'Quality management system review',
        'Capacity and lead time verification',
        'Compliance and certification check'
      ]
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: 'Quality Control',
      description: 'Professional inspection services to ensure your products meet specifications and standards.',
      details: [
        'Pre-shipment inspections (PSI)',
        'During production inspections (DPI)',
        'Initial production inspections (IPI)',
        'AQL-based sampling',
        'Detailed photo/video reports',
        'Defect classification and reporting'
      ]
    },
    {
      icon: <Shield size={28} />,
      title: 'Production Follow-up',
      description: 'Regular monitoring and updates on production progress to ensure timely delivery.',
      details: [
        'Weekly production updates',
        'Progress milestone tracking',
        'Quality issue early warning',
        'Timeline management',
        'Sample approval coordination',
        'Production milestone payments'
      ]
    },
    {
      icon: <Truck size={28} />,
      title: 'Shipping & Logistics',
      description: 'End-to-end shipping coordination from factory to your designated destination.',
      details: [
        'Freight forwarding services',
        'Customs clearance support',
        'Documentation handling',
        'Multi-modal shipping options',
        'Cargo tracking',
        'Insurance coordination'
      ]
    },
    {
      icon: <DollarSign size={28} />,
      title: 'Sourcing & Negotiation',
      description: 'We find the right suppliers and negotiate favorable terms on your behalf.',
      details: [
        'Supplier identification',
        'Price negotiation',
        'Contract terms management',
        'Payment terms arrangement',
        'Sample management',
        'MOQ optimization'
      ]
    }
  ]

  const whyChooseUs = [
    { icon: <CheckCircle size={24} />, text: '15+ years of China sourcing expertise' },
    { icon: <CheckCircle size={24} />, text: 'Network of 500+ verified suppliers' },
    { icon: <CheckCircle size={24} />, text: 'Professional QC inspectors nationwide' },
    { icon: <CheckCircle size={24} />, text: 'Transparent pricing with no hidden fees' },
    { icon: <CheckCircle size={24} />, text: 'Dedicated account manager' },
    { icon: <CheckCircle size={24} />, text: '24/7 support and communication' }
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Comprehensive China sourcing solutions designed to minimize risk and maximize value for your business.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-page-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Complete Sourcing Services</h2>
            <p className="section-desc">
              From supplier verification to final delivery, we handle every aspect of your China sourcing.
            </p>
          </div>

          {services.map((service, index) => (
            <div key={index} className="service-detail-card">
              <div className="service-detail-header">
                <div className="service-detail-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
              <ul>
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why SSourcing China</span>
            <h2 className="section-title">Benefits of Working With Us</h2>
            <p className="section-desc">
              We bring expertise, reliability, and dedication to every sourcing project.
            </p>
          </div>
          <div className="grid-3">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="card" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ color: 'var(--color-success)', flexShrink: 0 }}>{item.icon}</div>
                <span style={{ fontSize: '15px', color: 'var(--color-text-primary)' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Start Sourcing?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Contact us today for a free consultation and quote. We'll help you find the right suppliers in China.
          </p>
          <a href="/contact" className="btn btn-primary" style={{ background: 'var(--color-accent)' }}>
            Get a Free Quote
          </a>
        </div>
      </section>
    </div>
  )
}

export default Services