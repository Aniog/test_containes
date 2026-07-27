import { useState, useEffect, useRef } from 'react'
import { Search, Factory, ClipboardCheck, Truck, DollarSign, CheckCircle, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const steps = [
    {
      number: '01',
      title: 'Submit Your Inquiry',
      description: 'Tell us what you need. Provide details about the product, quantity, target price, quality standards, and any specific requirements.',
      icon: <Search size={32} />,
      details: [
        'Product specifications',
        'Quantity requirements',
        'Target price range',
        'Quality standards',
        'Certification needs',
        'Packaging requirements'
      ]
    },
    {
      number: '02',
      title: 'Supplier Matching',
      description: 'We identify and verify suitable suppliers from our network of 500+ pre-vetted factories. You receive detailed supplier profiles with capabilities, certifications, and ratings.',
      icon: <Factory size={32} />,
      details: [
        'Supplier verification',
        'Capability assessment',
        'Price comparisons',
        'Factory visits scheduled',
        'Reference checks',
        'Shortlist presentation'
      ]
    },
    {
      number: '03',
      title: 'Quality Inspection',
      description: 'We conduct thorough quality checks at various stages - from initial production samples to pre-shipment inspections. Our QC team ensures products meet your specifications.',
      icon: <ClipboardCheck size={32} />,
      details: [
        'Sample approval',
        'During production checks',
        'Pre-shipment inspection',
        'AQL standard testing',
        'Detailed photo reports',
        'Defect documentation'
      ]
    },
    {
      number: '04',
      title: 'Production & Follow-up',
      description: 'We monitor production progress closely, providing regular updates and addressing any issues that arise. Our team ensures timeline adherence and quality maintenance.',
      icon: <Truck size={32} />,
      details: [
        'Weekly progress updates',
        'Timeline tracking',
        'Issue resolution',
        'Sample coordination',
        'Payment milestone management',
        'Documentation updates'
      ]
    },
    {
      number: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate the entire shipping process from factory to your designated location. This includes freight forwarding, customs clearance, and final delivery.',
      icon: <DollarSign size={32} />,
      details: [
        'Freight coordination',
        'Customs clearance',
        'Documentation handling',
        'Cargo tracking',
        'Insurance arrangement',
        'Final delivery'
      ]
    }
  ]

  const timeline = [
    { phase: 'Week 1-2', activity: 'Supplier identification and verification' },
    { phase: 'Week 2-3', activity: 'Price negotiation and contract signing' },
    { phase: 'Week 3-4', activity: 'Sample production and approval' },
    { phase: 'Week 4-8', activity: 'Mass production with QC checks' },
    { phase: 'Week 8-10', activity: 'Final inspection and shipping' },
    { phase: 'Week 10-12', activity: 'Delivery to destination' }
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>How It Works</h1>
          <p>
            Our streamlined 5-step process makes China sourcing straightforward, transparent, and risk-free.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">The Process</span>
            <h2 className="section-title">5 Steps to Successful Sourcing</h2>
            <p className="section-desc">
              From inquiry to delivery, we guide you through every step of the sourcing process.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {steps.map((step, index) => (
              <div key={index} className="step-card" style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                <div style={{ 
                  minWidth: '80px', 
                  height: '80px', 
                  background: 'var(--color-primary)', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: '700'
                }}>
                  {step.number}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
                    <div style={{ color: 'var(--color-primary)' }}>{step.icon}</div>
                    <h3 style={{ margin: 0 }}>{step.title}</h3>
                  </div>
                  <p style={{ marginBottom: '16px', lineHeight: 1.7 }}>{step.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                    {step.details.map((detail, i) => (
                      <span key={i} style={{ 
                        background: 'var(--color-bg-light)', 
                        padding: '6px 12px', 
                        borderRadius: '4px',
                        fontSize: '13px',
                        color: 'var(--color-text-secondary)'
                      }}>
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Timeline</span>
            <h2 className="section-title">Typical Project Timeline</h2>
            <p className="section-desc">
              While timelines vary by product complexity, here's a general overview of what to expect.
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {timeline.map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: '24px', 
                padding: '20px 0',
                borderBottom: index < timeline.length - 1 ? '1px solid var(--color-border)' : 'none'
              }}>
                <div style={{ 
                  minWidth: '120px', 
                  fontWeight: '600', 
                  color: 'var(--color-primary)' 
                }}>
                  {item.phase}
                </div>
                <div style={{ color: 'var(--color-text-secondary)' }}>
                  {item.activity}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Deliverables</span>
            <h2 className="section-title">What You Receive</h2>
            <p className="section-desc">
              Throughout the process, you receive comprehensive documentation and updates.
            </p>
          </div>
          <div className="grid-4">
            {[
              'Supplier Verification Reports',
              'Factory Audit Documents',
              'Inspection Reports with Photos',
              'Production Progress Updates',
              'Shipping Documentation',
              'Quality Certificates',
              'Customs Clearance Support',
              'Final Delivery Confirmation'
            ].map((item, index) => (
              <div key={index} className="card" style={{ textAlign: 'center', padding: '24px' }}>
                <CheckCircle size={24} style={{ color: 'var(--color-success)', marginBottom: '12px' }} />
                <span style={{ fontSize: '15px', color: 'var(--color-text-primary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Submit your inquiry today and our team will contact you within 24 hours.
          </p>
          <a href="/contact" className="btn btn-primary" style={{ background: 'var(--color-accent)' }}>
            Submit Inquiry <ArrowRight size={18} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks