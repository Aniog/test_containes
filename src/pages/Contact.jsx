import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, 
  ArrowRight, MessageSquare, Headphones, FileText
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    orderVolume: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.productCategory) newErrors.productCategory = 'Please select a product category';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@ssourcing-china.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+86 571 1234 5678',
      description: 'Available during business hours'
    },
    {
      icon: MapPin,
      title: 'Office',
      content: 'Hangzhou, China',
      description: 'Near Shanghai - Easy access'
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 9AM-6PM CST',
      description: 'GMT+8 Time Zone'
    }
  ];

  const benefits = [
    {
      icon: Headphones,
      title: 'Personal Support',
      description: 'Dedicated account manager for your project'
    },
    {
      icon: FileText,
      title: 'Quick Response',
      description: 'Detailed quote within 48 hours'
    },
    {
      icon: CheckCircle,
      title: 'No Obligation',
      description: 'Free initial consultation and quote'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '100px 0'
      }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '700',
              color: 'white',
              marginBottom: '20px'
            }}>
              Get Your Free Sourcing Quote
            </h1>
            <p style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: '1.7'
            }}>
              Tell us about your sourcing needs and we'll help you find the right suppliers in China.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-4" style={{ gap: '24px' }}>
            {contactInfo.map((info, index) => (
              <div key={index} className="card p-6 text-center">
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(26, 54, 93, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <info.icon size={28} style={{ color: 'var(--primary)' }} />
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                  {info.title}
                </h3>
                <p style={{ fontSize: '15px', fontWeight: '500', color: 'var(--primary)', marginBottom: '4px' }}>
                  {info.content}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid-2" style={{ gap: '48px', alignItems: 'start' }}>
            {/* Form */}
            <div className="card p-8">
              {submitted ? (
                <div className="text-center" style={{ padding: '40px 20px' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(56, 161, 105, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px'
                  }}>
                    <CheckCircle size={40} style={{ color: 'var(--success)' }} />
                  </div>
                  <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-primary)' }}>
                    Thank You!
                  </h2>
                  <p style={{ fontSize: '16px', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.7' }}>
                    We've received your inquiry and will get back to you within 24-48 hours with a detailed quote.
                  </p>
                  <Link to="/" className="btn btn-primary">
                    Back to Home
                  </Link>
                </div>
              ) : (
                <>
                  <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '8px', color: 'var(--text-primary)' }}>
                    Tell Us About Your Project
                  </h2>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '32px' }}>
                    Fill out the form below and we'll get back to you within 48 hours.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid-2" style={{ gap: '20px', marginBottom: '20px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="John Smith"
                          style={errors.name ? { borderColor: 'var(--error)' } : {}}
                        />
                        {errors.name && <p style={{ fontSize: '13px', color: 'var(--error)', marginTop: '4px' }}>{errors.name}</p>}
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Your Company Ltd."
                        />
                      </div>
                    </div>

                    <div className="grid-2" style={{ gap: '20px', marginBottom: '20px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="john@company.com"
                          style={errors.email ? { borderColor: 'var(--error)' } : {}}
                        />
                        {errors.email && <p style={{ fontSize: '13px', color: 'var(--error)', marginTop: '4px' }}>{errors.email}</p>}
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid-2" style={{ gap: '20px', marginBottom: '20px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                          Product Category *
                        </label>
                        <select
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          className="form-input"
                          style={errors.productCategory ? { borderColor: 'var(--error)' } : {}}
                        >
                          <option value="">Select a category</option>
                          <option value="electronics">Electronics & Gadgets</option>
                          <option value="furniture">Furniture & Home</option>
                          <option value="textiles">Textiles & Apparel</option>
                          <option value="machinery">Machinery & Parts</option>
                          <option value="packaging">Packaging & Printing</option>
                          <option value="toys">Toys & Gifts</option>
                          <option value="sports">Sports & Outdoor</option>
                          <option value="beauty">Beauty & Personal Care</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.productCategory && <p style={{ fontSize: '13px', color: 'var(--error)', marginTop: '4px' }}>{errors.productCategory}</p>}
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                          Estimated Order Volume
                        </label>
                        <select
                          name="orderVolume"
                          value={formData.orderVolume}
                          onChange={handleChange}
                          className="form-input"
                        >
                          <option value="">Select volume</option>
                          <option value="small">Small (under 1,000 pcs)</option>
                          <option value="medium">Medium (1,000 - 10,000 pcs)</option>
                          <option value="large">Large (10,000 - 50,000 pcs)</option>
                          <option value="xlarge">Very Large (50,000+ pcs)</option>
                        </select>
                      </div>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: 'var(--text-primary)' }}>
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input"
                        rows="5"
                        placeholder="Tell us about your sourcing needs, product specifications, timeline, and any specific requirements..."
                        style={errors.message ? { borderColor: 'var(--error)' } : {}}
                      />
                      {errors.message && <p style={{ fontSize: '13px', color: 'var(--error)', marginTop: '4px' }}>{errors.message}</p>}
                    </div>

                    <button type="submit" className="btn btn-cta" style={{ width: '100%' }}>
                      <Send size={18} style={{ marginRight: '8px' }} />
                      Send Inquiry
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div className="card p-6" style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px', color: 'var(--text-primary)' }}>
                  Why Work With Us
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(56, 161, 105, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <benefit.icon size={20} style={{ color: 'var(--success)' }} />
                      </div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '4px', color: 'var(--text-primary)' }}>
                          {benefit.title}
                        </h4>
                        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6" style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)'
              }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: 'white' }}>
                  Need Quick Help?
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginBottom: '20px', lineHeight: '1.6' }}>
                  For urgent inquiries or quick questions, feel free to reach out to us directly.
                </p>
                <div className="flex items-center gap-2" style={{ color: 'white', fontSize: '15px', fontWeight: '500' }}>
                  <MessageSquare size={18} />
                  <span>Live Chat Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-white" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card p-8" style={{ textAlign: 'center' }}>
            <MapPin size={48} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
            <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '12px', color: 'var(--text-primary)' }}>
              Visit Our Office
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
              We're located in Hangzhou, China - easily accessible from Shanghai. 
              Schedule an appointment and we'd be happy to meet you in person to discuss your sourcing needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;