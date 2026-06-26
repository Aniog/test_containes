import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    productDetails: '',
    quantity: '',
    targetPrice: '',
    serviceInterest: [],
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value) => {
    setFormData(prev => {
      const current = prev.serviceInterest;
      if (current.includes(value)) {
        return { ...prev, serviceInterest: current.filter(item => item !== value) };
      } else {
        return { ...prev, serviceInterest: [...current, value] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productCategory: '',
        productDetails: '',
        quantity: '',
        targetPrice: '',
        serviceInterest: [],
        message: '',
      });
    }, 1500);
  };

  const serviceOptions = [
    'Supplier Sourcing',
    'Factory Verification',
    'Quality Inspection',
    'Production Follow-up',
    'Shipping & Logistics',
    'Product Development',
  ];

  const productCategories = [
    'Electronics & Technology',
    'Home & Garden',
    'Apparel & Textiles',
    'Industrial Equipment',
    'Packaging Materials',
    'Automotive',
    'Health & Beauty',
    'Sports & Outdoors',
    'Toys & Games',
    'Food & Beverage',
    'Other',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2C5282 100%)',
        padding: '160px 0 100px',
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: '#FFFFFF', fontSize: '48px', fontWeight: '700', marginBottom: '24px' }}>
              Contact Us
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '20px', lineHeight: '1.6' }}>
              Get a free consultation and quote for your China sourcing needs. We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px' }} className="contact-grid">
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '32px' }}>Get In Touch</h2>
              
              <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#1E3A5F',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <MapPin size={24} color="#C9A227" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Our Office</h4>
                    <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: '1.6' }}>
                      Shenzhen, Guangdong, China
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#1E3A5F',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Mail size={24} color="#C9A227" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Email Us</h4>
                    <a href="mailto:info@ssourcing-china.com" style={{ fontSize: '14px', color: '#4A5568' }}>
                      info@ssourcing-china.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#1E3A5F',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Phone size={24} color="#C9A227" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Call Us</h4>
                    <a href="tel:+8675588888888" style={{ fontSize: '14px', color: '#4A5568' }}>
                      +86 755 8888 8888
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: '#1E3A5F',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Clock size={24} color="#C9A227" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Business Hours</h4>
                    <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: '1.6' }}>
                      Monday - Friday: 9:00 AM - 6:00 PM (GMT+8)<br />
                      Saturday: 9:00 AM - 1:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* What to expect */}
              <div style={{
                backgroundColor: '#FFFFFF',
                padding: '24px',
                borderRadius: '8px',
                border: '1px solid #E2E8F0',
              }}>
                <h4 style={{ fontSize: '16px', marginBottom: '16px' }}>What to Expect</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Response within 24 hours',
                    'Free initial consultation',
                    'No obligation quote',
                    'Dedicated account manager',
                  ].map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <CheckCircle size={18} color="#38A169" />
                      <span style={{ fontSize: '14px', color: '#4A5568' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div style={{
              backgroundColor: '#FFFFFF',
              padding: '40px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: '#38A169',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}>
                    <CheckCircle size={40} color="#FFFFFF" />
                  </div>
                  <h3 style={{ fontSize: '24px', marginBottom: '12px' }}>Thank You!</h3>
                  <p style={{ fontSize: '16px', color: '#4A5568', marginBottom: '24px' }}>
                    Your inquiry has been submitted successfully. Our team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    style={{
                      backgroundColor: '#1E3A5F',
                      color: '#FFFFFF',
                      padding: '12px 24px',
                      borderRadius: '4px',
                      fontWeight: '600',
                      fontSize: '14px',
                      border: 'none',
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '24px', marginBottom: '32px' }}>Send Us a Message</h3>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1A202C' }}>
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #E2E8F0',
                          borderRadius: '4px',
                          fontSize: '15px',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1A202C' }}>
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #E2E8F0',
                          borderRadius: '4px',
                          fontSize: '15px',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1A202C' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #E2E8F0',
                          borderRadius: '4px',
                          fontSize: '15px',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1A202C' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #E2E8F0',
                          borderRadius: '4px',
                          fontSize: '15px',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1A202C' }}>
                      Product Category *
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #E2E8F0',
                        borderRadius: '4px',
                        fontSize: '15px',
                        outline: 'none',
                        backgroundColor: '#FFFFFF',
                        cursor: 'pointer',
                      }}
                    >
                      <option value="">Select a category</option>
                      {productCategories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1A202C' }}>
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 10,000 units"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #E2E8F0',
                          borderRadius: '4px',
                          fontSize: '15px',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1A202C' }}>
                        Target Price (per unit)
                      </label>
                      <input
                        type="text"
                        name="targetPrice"
                        value={formData.targetPrice}
                        onChange={handleChange}
                        placeholder="e.g., $5-10"
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          border: '1px solid #E2E8F0',
                          borderRadius: '4px',
                          fontSize: '15px',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '12px', color: '#1A202C' }}>
                      Services You're Interested In
                    </label>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            cursor: 'pointer',
                            fontSize: '14px',
                            color: '#4A5568',
                          }}
                        >
                          <input
                            type="checkbox"
                            checked={formData.serviceInterest.includes(service)}
                            onChange={() => handleCheckboxChange(service)}
                            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                          />
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '32px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#1A202C' }}>
                      Additional Details
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell us more about your product requirements, timeline, or any specific needs..."
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid #E2E8F0',
                        borderRadius: '4px',
                        fontSize: '15px',
                        outline: 'none',
                        resize: 'vertical',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    style={{
                      width: '100%',
                      backgroundColor: status === 'submitting' ? '#A0AEC0' : '#C9A227',
                      color: '#1E3A5F',
                      padding: '16px',
                      borderRadius: '4px',
                      fontWeight: '600',
                      fontSize: '16px',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <span style={{ animation: 'spin 1s linear infinite' }}>⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Get a Free Quote
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ backgroundColor: '#FFFFFF', padding: '0 0 96px' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#E2E8F0',
            height: '400px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div style={{ textAlign: 'center' }}>
              <MapPin size={48} color="#1E3A5F" />
              <p style={{ marginTop: '16px', color: '#4A5568', fontSize: '16px' }}>
                Shenzhen, Guangdong, China
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};

export default Contact;