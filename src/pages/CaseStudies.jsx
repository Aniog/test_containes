import { useState, useEffect, useRef } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const CaseStudies = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const caseStudies = [
    {
      client: 'US Retail Chain',
      industry: 'Electronics',
      title: 'Smart Home Device Sourcing for Major US Retailer',
      challenge: 'A US retail chain needed to source smart home devices from China but had concerns about supplier legitimacy and product quality after previous bad experiences.',
      solution: 'We conducted thorough supplier verification on 15 factories, performed detailed factory audits, and implemented a comprehensive QC program including pre-shipment inspections.',
      results: [
        { label: 'Cost Savings', value: '40%' },
        { label: 'Defect Rate', value: '0.1%' },
        { label: 'On-Time Delivery', value: '100%' }
      ],
      testimonial: 'SSourcing China transformed our China sourcing. We now have a reliable supplier network and zero quality issues. Their verification process gave us confidence we never had before.',
      testimonialAuthor: 'Procurement Director'
    },
    {
      client: 'European Distributor',
      industry: 'Furniture',
      title: 'Custom Office Furniture for European Distribution',
      challenge: 'A European office furniture distributor needed custom-designed furniture manufactured in China but lacked local presence to manage production.',
      solution: 'We identified suitable manufacturers, negotiated favorable terms, conducted factory audits revealing production capacity concerns, and implemented weekly follow-up visits.',
      results: [
        { label: 'Units Delivered', value: '2,000' },
        { label: 'Time Saved', value: '12 weeks' },
        { label: 'QC Pass Rate', value: '100%' }
      ],
      testimonial: 'Their factory audit identified issues we would never have caught. The production follow-up ensured we stayed on schedule. Exceptional service throughout.',
      testimonialAuthor: 'CEO'
    },
    {
      client: 'Australian Brand',
      industry: 'Textiles',
      title: 'Garment Production for Australian Fashion Brand',
      challenge: 'An Australian fashion brand wanted to launch a new clothing line but needed help with fabric sourcing, factory selection, and quality control in China.',
      solution: 'We managed the complete production cycle from fabric sourcing to final packaging. Coordinated with 5 different factories and provided full QC coverage at each stage.',
      results: [
        { label: 'Factories Managed', value: '5' },
        { label: 'Units Produced', value: '50,000' },
        { label: 'QC Inspections', value: '15+' }
      ],
      testimonial: 'They made international production possible for our small brand. Professional, responsive, and truly invested in our success.',
      testimonialAuthor: 'Founder'
    },
    {
      client: 'Canadian Importer',
      industry: 'Consumer Goods',
      title: 'Kitchenware Sourcing for Canadian Retailer',
      challenge: 'A Canadian home goods retailer needed to source kitchenware products with specific designs and quality standards.',
      solution: 'We sourced multiple factories, coordinated custom tooling and mold creation, and implemented a rigorous QC inspection protocol.',
      results: [
        { label: 'Products Sourced', value: '150+' },
        { label: 'Cost Reduction', value: '35%' },
        { label: 'Customer Satisfaction', value: '98%' }
      ],
      testimonial: 'The attention to detail and quality control was outstanding. Our customers love the products and we have a reliable China sourcing partner.',
      testimonialAuthor: 'Purchasing Manager'
    },
    {
      client: 'German Company',
      industry: 'Machinery',
      title: 'Industrial Machinery Parts for German Manufacturer',
      challenge: 'A German industrial equipment manufacturer needed precision parts produced in China with strict quality specifications.',
      solution: 'We identified factories with CNC capabilities, conducted technical audits, and implemented in-process quality checks with detailed reporting.',
      results: [
        { label: 'Precision Accuracy', value: '99.5%' },
        { label: 'Lead Time', value: '30% faster' },
        { label: 'Quality Issues', value: 'Zero' }
      ],
      testimonial: 'Their technical understanding and quality focus exceeded our expectations. The parts we received were flawless.',
      testimonialAuthor: 'Engineering Director'
    }
  ]

  const stats = [
    { value: '200+', label: 'Clients Worldwide' },
    { value: '500+', label: 'Verified Suppliers' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '3000+', label: 'Inspections Completed' }
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Case Studies</h1>
          <p>
            Real success stories from businesses we've helped with China sourcing.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'white' }}>
        <div className="container">
          <div className="trust-grid">
            {stats.map((stat, index) => (
              <div key={index} className="trust-item">
                <div className="trust-number">{stat.value}</div>
                <div className="trust-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Success Stories</span>
            <h2 className="section-title">Our Case Studies</h2>
            <p className="section-desc">
              See how we've helped businesses across various industries succeed with China sourcing.
            </p>
          </div>

          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-full">
              <div className="case-study-image">
                <span style={{ fontSize: '64px' }}>📦</span>
              </div>
              <div className="case-study-content">
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ 
                    background: 'var(--color-accent)', 
                    color: 'white', 
                    padding: '4px 12px', 
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}>
                    {study.industry}
                  </span>
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                    {study.client}
                  </span>
                </div>
                <h3>{study.title}</h3>
                <p><strong>Challenge:</strong> {study.challenge}</p>
                <p><strong>Solution:</strong> {study.solution}</p>
                
                <div className="case-study-metrics">
                  {study.results.map((result, i) => (
                    <div key={i} className="metric">
                      <div className="metric-value">{result.value}</div>
                      <div className="metric-label">{result.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ 
                  background: 'var(--color-bg-light)', 
                  padding: '24px', 
                  borderRadius: '8px',
                  marginTop: '24px',
                  borderLeft: '4px solid var(--color-accent)'
                }}>
                  <p style={{ fontStyle: 'italic', marginBottom: '12px' }}>"{study.testimonial}"</p>
                  <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary)' }}>— {study.testimonialAuthor}, {study.client}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Write Your Success Story?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Join hundreds of satisfied clients who trust us with their China sourcing needs.
          </p>
          <a href="/contact" className="btn btn-primary" style={{ background: 'var(--color-accent)' }}>
            Get Started <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies