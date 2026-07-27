import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Phone, Mail, MapPin, Clock, 
  MessageCircle, Send, CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '120px 0 80px',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '6px 16px',
              backgroundColor: 'rgba(230, 126, 34, 0.2)',
              color: '#FFB347',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
              Contact Us
            </span>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: '800', 
              color: 'white', 
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Get Your Free Sourcing Quote
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.85)', 
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              Tell us what you need, and we'll connect you with verified suppliers within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-text-primary)' }}>
                Let's Discuss Your Sourcing Needs
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '40px' }}>
                Our team is ready to help you find the right suppliers in China. Fill out the form, and we'll get back to you within 24 hours.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: 'rgba(30, 58, 95, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <MapPin size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px', color: 'var(--color-text-primary)' }}>
                      Our Office
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                      Guangzhou, China
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: 'rgba(30, 58, 95, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Mail size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px', color: 'var(--color-text-primary)' }}>
                      Email Us
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                      info@ssourcingchina.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: 'rgba(30, 58, 95, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Phone size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px', color: 'var(--color-text-primary)' }}>
                      Call Us
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                      +86 20 1234 5678
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: 'rgba(30, 58, 95, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Clock size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px', color: 'var(--color-text-primary)' }}>
                      Business Hours
                    </h4>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                      Mon - Fri: 9:00 AM - 6:00 PM (GMT+8)
                    </p>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div className="card" style={{ padding: '32px', backgroundColor: 'var(--color-bg-light)' }}>
                <h3 style={{ fontSize: '18px', marginBottom: '20px', color: 'var(--color-text-primary)' }}>
                  What to Expect
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Response within 24 hours',
                    'Free initial consultation',
                    'No obligation quote',
                    'Customized sourcing plan',
                  ].map((item, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={20} color="#27AE60" />
                      <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: '48px' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <CheckCircle size={40} color="#27AE60" />
                  </div>
                  <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-text-primary)' }}>
                    Thank You!
                  </h3>
                  <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                    Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn btn-outline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <>
                  <h3 style={{ fontSize: '24px', marginBottom: '32px', color: 'var(--color-text-primary)' }}>
                    Send Us a Message
                  </h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          className="form-input"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email *</label>
                        <input 
                          type="email" 
                          name="email"
                          className="form-input"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">Company</label>
                        <input 
                          type="text" 
                          name="company"
                          className="form-input"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone</label>
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

                    <div className="grid-2" style={{ gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group">
                        <label className="form-label">Product Interested In *</label>
                        <input 
                          type="text" 
                          name="product"
                          className="form-input"
                          required
                          value={formData.product}
                          onChange={handleChange}
                          placeholder="What do you want to source?"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Quantity</label>
                        <input 
                          type="text" 
                          name="quantity"
                          className="form-input"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="e.g. 1000 units"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Service Needed</label>
                      <select 
                        name="service"
                        className="form-select"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select a service</option>
                        <option value="sourcing">Supplier Sourcing</option>
                        <option value="verification">Factory Verification</option>
                        <option value="inspection">Quality Inspection</option>
                        <option value="shipping">Shipping & Logistics</option>
                        <option value="full">Full Sourcing Service</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Additional Details</label>
                      <textarea 
                        name="message"
                        className="form-textarea"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your requirements, target price, quality standards, timeline, etc."
                        rows="4"
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      style={{ width: '100%', marginTop: '8px', padding: '16px' }}
                    >
                      Submit Inquiry
                      <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
              Our Location
            </h2>
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '18px'
            }}>
              Based in Guangzhou, China - the heart of manufacturing
            </p>
          </div>

          <div style={{
            height: '400px',
            backgroundColor: 'var(--color-primary)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{ textAlign: 'center', color: 'white' }}>
              <MapPin size={64} color="rgba(255,255,255,0.5)" />
              <p style={{ marginTop: '16px', opacity: 0.8 }}>
                Guangzhou, Guangdong Province, China
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
              Common Questions
            </h2>
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '18px'
            }}>
              Quick answers to help you get started
            </p>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              {
                q: 'How long does it take to get a quote?',
                a: 'We typically provide initial quotes within 24-48 hours of receiving your requirements. More complex projects may take 3-5 days.'
              },
              {
                q: 'What information do you need to start?',
                a: 'We need product specifications, target quantity, quality requirements, target price range, and your delivery timeline. The more details you provide, the better we can help.'
              },
              {
                q: 'Do you charge for initial consultations?',
                a: 'No, initial consultations are completely free. We believe in understanding your needs before proposing any solutions.'
              },
              {
                q: 'What industries do you work with?',
                a: 'We work with a wide range of industries including electronics, textiles, machinery, consumer goods, packaging, automotive parts, and more.'
              },
            ].map((faq, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '24px',
                  marginBottom: '16px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <h4 style={{ fontSize: '16px', marginBottom: '12px', color: 'var(--color-text-primary)' }}>
                  {faq.q}
                </h4>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;