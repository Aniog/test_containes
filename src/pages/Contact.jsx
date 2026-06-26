import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productDetails: '',
    quantity: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        productDetails: '',
        quantity: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        'Room 501, Building A, Business Center',
        'Yiwu City, Zhejiang Province',
        'China 322000'
      ]
    },
    {
      icon: Phone,
      title: 'Phone',
      details: [
        '+86 579 8527 8888',
        '+86 579 8527 8889'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'info@ssourcing-china.com',
        'sales@ssourcing-china.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM (CST)',
        'Saturday: 9:00 AM - 1:00 PM (CST)'
      ]
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[var(--primary)] py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Contact Us</h1>
            <p className="text-xl text-gray-200">
              Get in touch with our sourcing experts. We're here to help you find the right suppliers in China.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-[var(--primary)]" />
                </div>
                <h4 className="mb-3">{info.title}</h4>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-[var(--text-secondary)]">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="mb-2">Send Us a Message</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={handleFormSubmit} className="card">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="input"
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleFormChange}
                      className="input"
                      required
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="input"
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="input"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="productDetails" className="block text-sm font-medium mb-2">Product Details *</label>
                    <input
                      type="text"
                      id="productDetails"
                      name="productDetails"
                      value={formData.productDetails}
                      onChange={handleFormChange}
                      className="input"
                      required
                      placeholder="What product do you need?"
                    />
                  </div>
                  <div>
                    <label htmlFor="quantity" className="block text-sm font-medium mb-2">Estimated Quantity</label>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleFormChange}
                      className="input"
                      placeholder="e.g., 5000 units"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    className="input"
                    placeholder="Any specific requirements, target price, or questions..."
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-cta w-full"
                  disabled={formStatus === 'submitting' || formStatus === 'success'}
                >
                  {formStatus === 'submitting' ? (
                    <>Sending...</>
                  ) : formStatus === 'success' ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle className="w-5 h-5" /> Sent Successfully!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" /> Send Message
                    </span>
                  )}
                </button>
                {formStatus === 'success' && (
                  <p className="text-center text-[var(--accent)] mt-4">
                    Thank you! We'll be in touch within 24 hours.
                  </p>
                )}
              </form>
            </div>

            {/* Additional Info */}
            <div>
              <h2 className="mb-2">Why Work With Us</h2>
              <p className="text-[var(--text-secondary)] mb-6">
                Learn what sets us apart in China sourcing.
              </p>

              <div className="space-y-4">
                <div className="card">
                  <h4 className="mb-2">12+ Years Experience</h4>
                  <p className="text-sm">Extensive knowledge of Chinese manufacturing, supplier networks, and quality standards.</p>
                </div>
                <div className="card">
                  <h4 className="mb-2">2,500+ Verified Suppliers</h4>
                  <p className="text-sm">Access to our pre-verified network of reliable manufacturers across all major industries.</p>
                </div>
                <div className="card">
                  <h4 className="mb-2">End-to-End Service</h4>
                  <p className="text-sm">From supplier verification to final delivery, we handle every step of your sourcing journey.</p>
                </div>
                <div className="card">
                  <h4 className="mb-2">Quality Guaranteed</h4>
                  <p className="text-sm">Rigorous QC processes ensure consistent product quality and reduced defect rates.</p>
                </div>
              </div>

              {/* WeChat QR Placeholder */}
              <div className="card mt-6 text-center">
                <MessageCircle className="w-10 h-10 text-[var(--primary)] mx-auto mb-3" />
                <h4 className="mb-2">WeChat</h4>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Scan to connect with us on WeChat for quick responses
                </p>
                <div className="w-32 h-32 bg-[var(--background)] mx-auto rounded-lg flex items-center justify-center">
                  <span className="text-xs text-[var(--text-muted)]">QR Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="card">
            <div className="bg-[var(--primary)]/5 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-[var(--primary)] mx-auto mb-2" />
                <p className="text-[var(--text-secondary)]">Yiwu, Zhejiang Province, China</p>
                <p className="text-sm text-[var(--text-muted)]">Click to view on map</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;