import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
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
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.product.trim()) newErrors.product = 'Product interest is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: 'Office Address',
      content: 'Shenzhen, Guangdong, China',
      description: 'Headquarters - strategically located in China\'s manufacturing hub'
    },
    {
      icon: <Mail size={24} />,
      title: 'Email Us',
      content: 'info@ssourcingchina.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: <Phone size={24} />,
      title: 'Call Us',
      content: '+86 755 8123 4567',
      description: 'Available during business hours (GMT+8)'
    },
    {
      icon: <Clock size={24} />,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      description: 'Saturday: By appointment'
    }
  ];

  const services = [
    'Supplier Sourcing',
    'Factory Verification',
    'Quality Inspection',
    'Production Follow-up',
    'Shipping & Logistics',
    'Product Development',
    'Not Sure - Need Consultation'
  ];

  if (submitted) {
    return (
      <div>
        {/* Hero Section */}
        <section style={{ 
          backgroundColor: '#0F172A', 
          padding: '160px 0 80px',
        }}>
          <div className="container">
            <div style={{ maxWidth: '800px' }}>
              <h1 style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '48px' }}>
                Contact Us
              </h1>
              <p style={{ color: '#94A3B8', fontSize: '20px', lineHeight: '1.6' }}>
                Get in touch with our team for professional China sourcing assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <section className="section">
          <div className="container">
            <div style={{ 
              maxWidth: '600px', 
              margin: '0 auto', 
              textAlign: 'center',
              padding: '64px 32px',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              border: '1px solid #E2E8F0'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                backgroundColor: '#ECFDF5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <CheckCircle size={40} color="#10B981" />
              </div>
              <h2 style={{ marginBottom: '16px' }}>Thank You!</h2>
              <p style={{ fontSize: '18px', marginBottom: '24px' }}>
                Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
              </p>
              <p style={{ color: '#64748B', fontSize: '14px' }}>
                In the meantime, feel free to explore our services or read our case studies to learn more about how we help clients source from China.
              </p>
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
        backgroundColor: '#0F172A', 
        padding: '160px 0 80px',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '48px' }}>
              Contact Us
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '20px', lineHeight: '1.6' }}>
              Get in touch with our team for professional China sourcing assistance. 
              We're here to help you find the right suppliers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div className="grid grid-4">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="card" 
                style={{ textAlign: 'center' }}
              >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: '#FFF5EB', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  color: '#E67E22'
                }}>
                  {info.icon}
                </div>
                <h4 style={{ marginBottom: '8px' }}>{info.title}</h4>
                <p style={{ fontWeight: '500', marginBottom: '8px', color: '#1E293B' }}>
                  {info.content}
                </p>
                <p style={{ fontSize: '13px', margin: 0 }}>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section" style={{ backgroundColor: '#F8FAFC' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="text-center mb-8">
              <h2 style={{ marginBottom: '16px' }}>Send Us a Message</h2>
              <p style={{ fontSize: '18px' }}>
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '48px',
              border: '1px solid #E2E8F0'
            }}>
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: errors.name ? '2px solid #EF4444' : '1px solid #E2E8F0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      placeholder="John Smith"
                    />
                    {errors.name && <p style={{ color: '#EF4444', fontSize: '13px', marginTop: '6px' }}>{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: errors.email ? '2px solid #EF4444' : '1px solid #E2E8F0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p style={{ color: '#EF4444', fontSize: '13px', marginTop: '6px' }}>{errors.email}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      placeholder="Your Company Ltd"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      placeholder="+1 234 567 8900"
                    />
                  </div>

                  {/* Product */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
                      Product Interested In *
                    </label>
                    <input
                      type="text"
                      name="product"
                      value={formData.product}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: errors.product ? '2px solid #EF4444' : '1px solid #E2E8F0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      placeholder="e.g., Electronics, Textiles"
                    />
                    {errors.product && <p style={{ color: '#EF4444', fontSize: '13px', marginTop: '6px' }}>{errors.product}</p>}
                  </div>

                  {/* Quantity */}
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '14px 16px',
                        border: '1px solid #E2E8F0',
                        borderRadius: '8px',
                        fontSize: '15px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                      placeholder="e.g., 5000 units"
                    />
                  </div>
                </div>

                {/* Service */}
                <div style={{ marginTop: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: '1px solid #E2E8F0',
                      borderRadius: '8px',
                      fontSize: '15px',
                      outline: 'none',
                      backgroundColor: '#FFFFFF',
                      cursor: 'pointer'
                    }}
                  >
                    <option value="">Select a service...</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginTop: '24px' }}>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', fontSize: '14px' }}>
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px 16px',
                      border: errors.message ? '2px solid #EF4444' : '1px solid #E2E8F0',
                      borderRadius: '8px',
                      fontSize: '15px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                      resize: 'vertical',
                      fontFamily: 'inherit'
                    }}
                    placeholder="Tell us about your sourcing requirements, timeline, and any specific needs..."
                  />
                  {errors.message && <p style={{ color: '#EF4444', fontSize: '13px', marginTop: '6px' }}>{errors.message}</p>}
                </div>

                {/* Submit */}
                <div style={{ marginTop: '32px' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '18px', fontSize: '18px' }}
                  >
                    <Send size={20} style={{ marginRight: '8px' }} />
                    Submit Inquiry
                  </button>
                </div>

                <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '13px', color: '#64748B' }}>
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;