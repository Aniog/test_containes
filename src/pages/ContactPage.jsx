import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    productCategory: '',
    orderQuantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Shenzhen, Guangdong, China', 'Futian District, CBD'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 755 8123 4567', '+86 138 0013 8000'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ssourcingchina.com', 'support@ssourcingchina.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 9:00 - 14:00'],
    },
  ];

  if (submitted) {
    return (
      <div>
        {/* Hero Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
          padding: '160px 0 80px',
        }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '16px' }}>
              Contact Us
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              Get in touch with our sourcing experts.
            </p>
          </div>
        </section>

        {/* Success Message */}
        <section className="section" style={{ backgroundColor: 'var(--background)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
            <div style={{ 
              width: '100px', 
              height: '100px', 
              backgroundColor: 'var(--success)', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 32px',
            }}>
              <CheckCircle size={50} color="white" />
            </div>
            <h2 style={{ marginBottom: '16px' }}>Thank You!</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '32px', lineHeight: '1.7' }}>
              Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
            </p>
            <Link to="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
        padding: '160px 0 80px',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '16px' }}>
            Contact Us
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Get in touch with our sourcing experts. We'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '48px' }}>
            {/* Contact Info */}
            <div>
              <h2 style={{ marginBottom: '32px' }}>Get In Touch</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {contactInfo.map((info, index) => (
                  <div key={index} style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      backgroundColor: 'var(--primary)', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <info.icon size={24} color="white" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1rem', marginBottom: '8px' }}>{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '4px' }}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="card" style={{ padding: '40px' }}>
              <h2 style={{ marginBottom: '8px' }}>Send Us a Message</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
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
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
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
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      Product Category
                    </label>
                    <select
                      name="productCategory"
                      value={formData.productCategory}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none',
                        backgroundColor: 'white',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    >
                      <option value="">Select a category</option>
                      <option value="electronics">Electronics</option>
                      <option value="textiles">Textiles & Apparel</option>
                      <option value="machinery">Machinery</option>
                      <option value="furniture">Furniture</option>
                      <option value="packaging">Packaging</option>
                      <option value="home-goods">Home Goods</option>
                      <option value="automotive">Automotive Parts</option>
                      <option value="health-beauty">Health & Beauty</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                      Estimated Order Quantity
                    </label>
                    <select
                      name="orderQuantity"
                      value={formData.orderQuantity}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '1px solid var(--border)',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none',
                        backgroundColor: 'white',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                    >
                      <option value="">Select quantity</option>
                      <option value="small">Less than 1,000</option>
                      <option value="medium">1,000 - 10,000</option>
                      <option value="large">10,000 - 50,000</option>
                      <option value="xlarge">50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-primary)' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your sourcing needs - product details, specifications, target price, timeline, etc."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid var(--border)',
                      borderRadius: '4px',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ padding: '16px', fontSize: '1.1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Submit Inquiry'}
                  {!loading && <Send size={18} />}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section style={{ backgroundColor: 'white', padding: '0 0 80px' }}>
        <div className="container">
          <div style={{ 
            height: '400px', 
            backgroundColor: 'var(--background)', 
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '16px',
          }}>
            <MapPin size={48} style={{ color: 'var(--primary)' }} />
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Shenzhen, Guangdong, China
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;