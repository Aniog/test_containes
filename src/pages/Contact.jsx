import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  ArrowRight
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
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      content: 'info@ssourcing.cn',
      description: 'We respond within 24 hours'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      content: '+86 571 1234 5678',
      description: 'Available during business hours'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Office',
      content: 'Hangzhou, China',
      description: 'Strategic location near major factories'
    },
    {
      icon: <Clock size={24} />,
      title: 'Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      description: 'CST (China Standard Time)'
    }
  ];

  const services = [
    'Supplier Sourcing',
    'Factory Verification',
    'Quality Inspection',
    'Production Follow-up',
    'Shipping & Logistics',
    'Other'
  ];

  const productCategories = [
    'Electronics',
    'Textiles & Apparel',
    'Machinery',
    'Home & Garden',
    'Packaging',
    'Automotive Parts',
    'Health & Beauty',
    'Sports & Outdoors',
    'Other'
  ];

  if (submitted) {
    return (
      <div>
        {/* Hero Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
          padding: '100px 0 80px',
          color: 'white'
        }}>
          <div className="container">
            <div style={{ maxWidth: '700px' }}>
              <h1 style={{ color: 'white', marginBottom: '20px', fontSize: '44px' }}>
                Contact Us
              </h1>
              <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.7' }}>
                Get in touch with our team. We're here to help with your China sourcing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <section className="section">
          <div className="container">
            <div className="card" style={{ 
              maxWidth: '600px', 
              margin: '0 auto', 
              textAlign: 'center',
              padding: '60px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: '#F0FDF4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <CheckCircle size={40} style={{ color: '#10B981' }} />
              </div>
              <h2 style={{ marginBottom: '16px' }}>Thank You!</h2>
              <p style={{ color: '#475569', marginBottom: '24px', lineHeight: '1.6' }}>
                Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
              </p>
              <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '32px' }}>
                In the meantime, feel free to explore our <Link to="/how-it-works" style={{ color: '#1E3A5F' }}>sourcing process</Link> or read our <Link to="/blog" style={{ color: '#1E3A5F' }}>latest insights</Link>.
              </p>
              <Link to="/" className="btn btn-primary">
                Back to Home
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
        padding: '100px 0 80px',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: 'white', marginBottom: '20px', fontSize: '44px' }}>
              Contact Us
            </h1>
            <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.7' }}>
              Get in touch with our team. We're here to help with your China sourcing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '64px' }}>
            {/* Contact Form */}
            <div>
              <h2 style={{ marginBottom: '8px' }}>Send Us a Message</h2>
              <p style={{ color: '#475569', marginBottom: '32px' }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-2" style={{ gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Name *</label>
                    <input 
                      type="text" 
                      className="form-input"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input 
                      type="email" 
                      className="form-input"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-2" style={{ gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Company</label>
                    <input 
                      type="text" 
                      className="form-input"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Phone</label>
                    <input 
                      type="tel" 
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>
                
                <div className="grid grid-2" style={{ gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Product Category *</label>
                    <select 
                      className="form-select"
                      required
                      value={formData.product}
                      onChange={(e) => setFormData({...formData, product: e.target.value})}
                    >
                      <option value="">Select category</option>
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Estimated Quantity</label>
                    <input 
                      type="text" 
                      className="form-input"
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      placeholder="e.g. 10,000 units"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Service Needed *</label>
                  <select 
                    className="form-select"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                  >
                    <option value="">Select service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea 
                    className="form-textarea"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your sourcing needs, product specifications, timeline, etc."
                    style={{ minHeight: '150px' }}
                  />
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px' }}>
                  <Send size={18} style={{ marginRight: '8px' }} />
                  Submit Inquiry
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '8px' }}>Get in Touch</h2>
              <p style={{ color: '#475569', marginBottom: '32px' }}>
                Prefer to contact us directly? Here's how you can reach us.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                {contactInfo.map((info, index) => (
                  <div key={index} className="card" style={{ padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      flexShrink: 0
                    }}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '4px', fontSize: '16px' }}>{info.title}</h4>
                      <p style={{ color: '#1E3A5F', fontWeight: '500', marginBottom: '4px' }}>{info.content}</p>
                      <p style={{ color: '#64748B', fontSize: '13px' }}>{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* WeChat */}
              <div className="card" style={{ padding: '24px', background: '#F8FAFC' }}>
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={24} style={{ color: '#1E3A5F' }} />
                  <h4 style={{ fontSize: '16px' }}>WeChat</h4>
                </div>
                <p style={{ color: '#475569', fontSize: '14px', marginBottom: '16px' }}>
                  Add us on WeChat for quick responses and convenient communication.
                </p>
                <div style={{
                  background: 'white',
                  padding: '16px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  border: '1px dashed #E2E8F0'
                }}>
                  <p style={{ color: '#64748B', fontSize: '14px' }}>WeChat ID: <strong style={{ color: '#1E3A5F' }}>SSourcingChina</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section section-bg">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Our Location</h2>
            <p style={{ color: '#475569', maxWidth: '600px', margin: '0 auto' }}>
              Based in Hangzhou, China - in the heart of manufacturing country
            </p>
          </div>
          
          <div style={{
            background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
            borderRadius: '16px',
            padding: '80px 40px',
            textAlign: 'center',
            color: 'white'
          }}>
            <MapPin size={48} style={{ marginBottom: '16px', opacity: 0.9 }} />
            <h3 style={{ color: 'white', marginBottom: '8px' }}>Hangzhou, China</h3>
            <p style={{ opacity: 0.8, fontSize: '15px' }}>
              Strategically located near major manufacturing hubs and ports
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
