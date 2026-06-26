import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ssourcing-china.com', 'support@ssourcing-china.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 123 4567 8900', '+86 123 4567 8901'],
      description: 'Available during business hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['Shenzhen, Guangdong', 'China 518000'],
      description: 'Visit by appointment'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM', 'GMT+8 (China Standard Time)'],
      description: 'We accommodate different time zones'
    }
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Ready to start sourcing from China? Get in touch for a free consultation 
            and quote. We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '24px'
          }}>
            {contactInfo.map((info, index) => (
              <div key={index} style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '12px',
                padding: '32px 24px',
                textAlign: 'center'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white'
                }}>
                  <info.icon size={28} />
                </div>
                <h3 style={{ fontSize: '1.125rem', color: '#1e3a5f', marginBottom: '12px' }}>
                  {info.title}
                </h3>
                {info.details.map((detail, dIndex) => (
                  <p key={dIndex} style={{ fontSize: '0.95rem', color: '#333', marginBottom: '4px' }}>
                    {detail}
                  </p>
                ))}
                <p style={{ fontSize: '0.8rem', color: '#888', marginTop: '12px' }}>
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '64px',
            alignItems: 'start'
          }}>
            {/* Form */}
            <div style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              padding: '48px'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: '#d1fae5',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <CheckCircle size={40} color="#059669" />
                  </div>
                  <h2 style={{ fontSize: '1.75rem', color: '#1e3a5f', marginBottom: '16px' }}>
                    Thank You!
                  </h2>
                  <p style={{ fontSize: '1rem', color: '#666', marginBottom: '24px', lineHeight: 1.6 }}>
                    Your inquiry has been submitted successfully. Our team will review your 
                    requirements and get back to you within 24 hours.
                  </p>
                  <Link to="/" className="btn btn-primary">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: '32px' }}>
                    <h2 style={{ fontSize: '1.75rem', color: '#1e3a5f', marginBottom: '12px' }}>
                      Get a Free Quote
                    </h2>
                    <p style={{ fontSize: '1rem', color: '#666' }}>
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                      <div>
                        <label style={{ 
                          display: 'block', 
                          fontSize: '0.9rem', 
                          fontWeight: '500', 
                          color: '#333',
                          marginBottom: '8px'
                        }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            background: '#fafafa'
                          }}
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label style={{ 
                          display: 'block', 
                          fontSize: '0.9rem', 
                          fontWeight: '500', 
                          color: '#333',
                          marginBottom: '8px'
                        }}>
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
                            padding: '14px 16px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            background: '#fafafa'
                          }}
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                      <div>
                        <label style={{ 
                          display: 'block', 
                          fontSize: '0.9rem', 
                          fontWeight: '500', 
                          color: '#333',
                          marginBottom: '8px'
                        }}>
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            background: '#fafafa'
                          }}
                          placeholder="Your Company Ltd"
                        />
                      </div>
                      <div>
                        <label style={{ 
                          display: 'block', 
                          fontSize: '0.9rem', 
                          fontWeight: '500', 
                          color: '#333',
                          marginBottom: '8px'
                        }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            background: '#fafafa'
                          }}
                          placeholder="+1 234 567 8900"
                        />
                      </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                      <div>
                        <label style={{ 
                          display: 'block', 
                          fontSize: '0.9rem', 
                          fontWeight: '500', 
                          color: '#333',
                          marginBottom: '8px'
                        }}>
                          Product Category
                        </label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            background: '#fafafa',
                            color: '#333'
                          }}
                        >
                          <option value="">Select a category</option>
                          <option value="electronics">Electronics</option>
                          <option value="textiles">Textiles & Garments</option>
                          <option value="machinery">Machinery & Parts</option>
                          <option value="consumer">Consumer Goods</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ 
                          display: 'block', 
                          fontSize: '0.9rem', 
                          fontWeight: '500', 
                          color: '#333',
                          marginBottom: '8px'
                        }}>
                          Estimated Quantity
                        </label>
                        <input
                          type="text"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          style={{
                            width: '100%',
                            padding: '14px 16px',
                            border: '1px solid #e5e7eb',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            background: '#fafafa'
                          }}
                          placeholder="e.g., 10,000 units"
                        />
                      </div>
                    </div>
                    <div style={{ marginBottom: '24px' }}>
                      <label style={{ 
                        display: 'block', 
                        fontSize: '0.9rem', 
                        fontWeight: '500', 
                        color: '#333',
                        marginBottom: '8px'
                      }}>
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '1rem',
                          background: '#fafafa',
                          resize: 'vertical'
                        }}
                        placeholder="Tell us about your sourcing requirements, product specifications, timeline, and any other relevant details..."
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '16px' }}
                    >
                      <Send size={18} style={{ marginRight: '8px' }} />
                      Submit Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Info Side */}
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
                borderRadius: '16px',
                padding: '48px',
                color: 'white',
                marginBottom: '24px'
              }}>
                <MessageSquare size={48} style={{ marginBottom: '20px', color: '#c9a227' }} />
                <h2 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>
                  Let's Discuss Your Project
                </h2>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, marginBottom: '24px', opacity: 0.9 }}>
                  Whether you're looking to source your first product from China or 
                  optimize an existing supply chain, we're here to help.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    'Free initial consultation',
                    'No obligation quote',
                    'Response within 24 hours',
                    'Confidential discussions'
                  ].map((item, index) => (
                    <li key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '12px',
                      marginBottom: '12px',
                      fontSize: '0.95rem'
                    }}>
                      <CheckCircle size={18} color="#c9a227" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{
                background: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <h3 style={{ fontSize: '1.25rem', color: '#1e3a5f', marginBottom: '20px' }}>
                  What Happens Next?
                </h3>
                <ol style={{ padding: '0 0 0 20px', margin: 0 }}>
                  <li style={{ marginBottom: '16px', color: '#444', lineHeight: 1.6 }}>
                    <strong style={{ color: '#1e3a5f' }}>Review:</strong> We review your requirements
                  </li>
                  <li style={{ marginBottom: '16px', color: '#444', lineHeight: 1.6 }}>
                    <strong style={{ color: '#1e3a5f' }}>Match:</strong> We identify suitable factories
                  </li>
                  <li style={{ marginBottom: '16px', color: '#444', lineHeight: 1.6 }}>
                    <strong style={{ color: '#1e3a5f' }}>Present:</strong> We send supplier profiles
                  </li>
                  <li style={{ marginBottom: '16px', color: '#444', lineHeight: 1.6 }}>
                    <strong style={{ color: '#1e3a5f' }}>Quote:</strong> You receive a detailed quote
                  </li>
                  <li style={{ color: '#444', lineHeight: 1.6 }}>
                    <strong style={{ color: '#1e3a5f' }}>Start:</strong> Begin your sourcing journey
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;