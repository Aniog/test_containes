import { useState, useEffect, useRef } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Contact = () => {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Get in touch with our team for a free consultation and sourcing quote.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section contact-page-section">
        <div className="container">
          <div className="contact-page-grid">
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '28px', marginBottom: '16px', color: 'var(--color-primary)' }}>
                Get In Touch
              </h2>
              <p style={{ fontSize: '16px', lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
                Have questions about China sourcing? Our team is here to help. 
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: 'var(--color-bg-light)', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '4px' }}>
                      Our Office
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                      Guangzhou, China<br />
                      (We serve clients worldwide)
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: 'var(--color-bg-light)', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0
                  }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '4px' }}>
                      Email Us
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                      info@ssourcingchina.com<br />
                      support@ssourcingchina.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: 'var(--color-bg-light)', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0
                  }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '4px' }}>
                      Call Us
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                      +86 20 1234 5678<br />
                      Mon-Fri, 9am-6pm CST
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    background: 'var(--color-bg-light)', 
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0
                  }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '4px' }}>
                      Business Hours
                    </h4>
                    <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div style={{ 
                background: 'var(--color-bg-light)', 
                borderRadius: '12px', 
                padding: '24px' 
              }}>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '16px' }}>
                  What to Expect
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    'Response within 24 hours',
                    'Free initial consultation',
                    'No obligation quote',
                    'Dedicated account manager'
                  ].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={18} style={{ color: 'var(--color-success)' }} />
                      <span style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-page-form">
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: 'var(--color-success)', 
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    color: 'white'
                  }}>
                    <CheckCircle size={40} />
                  </div>
                  <h3 style={{ fontSize: '24px', marginBottom: '12px', color: 'var(--color-primary)' }}>
                    Thank You!
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
                    Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    style={{
                      padding: '12px 24px',
                      background: 'var(--color-primary)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontWeight: '500'
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label className="form-label">Your Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        className="form-input" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label className="form-label">Email Address *</label>
                      <input 
                        type="email" 
                        name="email"
                        className="form-input" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label className="form-label">Company Name</label>
                      <input 
                        type="text" 
                        name="company"
                        className="form-input" 
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label className="form-label">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        className="form-input" 
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label className="form-label">Product Interested In *</label>
                      <input 
                        type="text" 
                        name="product"
                        className="form-input" 
                        value={formData.product}
                        onChange={handleChange}
                        required 
                        placeholder="e.g., Electronics"
                      />
                    </div>
                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label className="form-label">Estimated Quantity</label>
                      <input 
                        type="text" 
                        name="quantity"
                        className="form-input" 
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 1000 units"
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: '20px' }}>
                    <label className="form-label">Service Needed</label>
                    <select 
                      name="service"
                      className="form-select"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="supplier-verification">Supplier Verification</option>
                      <option value="factory-audit">Factory Audit</option>
                      <option value="quality-control">Quality Control</option>
                      <option value="production-followup">Production Follow-up</option>
                      <option value="shipping-logistics">Shipping & Logistics</option>
                      <option value="sourcing-negotiation">Sourcing & Negotiation</option>
                      <option value="full-service">Full Service</option>
                    </select>
                  </div>

                  <div className="form-group" style={{ marginBottom: '24px' }}>
                    <label className="form-label">Message</label>
                    <textarea 
                      name="message"
                      className="form-textarea" 
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements, timeline, and any specific needs..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary form-submit">
                    Submit Inquiry <Send size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact