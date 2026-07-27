import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.product.trim()) newErrors.product = 'Product is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: ['Shenzhen, Guangdong, China', 'Serving clients worldwide'],
      description: 'Based in the heart of China\'s manufacturing hub'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 755 8888 8888', '+86 138 0000 0000'],
      description: 'Available during business hours (GMT+8)'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ssourcing-china.com', 'support@ssourcing-china.com'],
      description: 'We respond within 24 hours'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 9:00 - 14:00'],
      description: 'China Standard Time (GMT+8)'
    }
  ];

  const services = [
    'Supplier Verification',
    'Factory Audit',
    'Quality Inspection',
    'Production Follow-up',
    'Shipping & Logistics',
    'Sample Management',
    'Not Sure - Need Consultation'
  ];

  if (submitted) {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
          <div className="container">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
                Contact Us
              </h1>
              <p className="text-xl text-gray-200">
                Get in touch with our team. We're here to help with all your China sourcing needs.
              </p>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <section className="section">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-[var(--accent)] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-white" size={40} />
              </div>
              <h2 className="mb-4">Thank You for Your Inquiry!</h2>
              <p className="text-lg text-[var(--text-secondary)] mb-8">
                We've received your message and will get back to you within 24 hours. Our team is reviewing your requirements and will prepare a tailored solution for you.
              </p>
              <div className="bg-[var(--bg-secondary)] rounded-lg p-6 mb-8">
                <h4 className="mb-4">What happens next?</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                    <p className="text-[var(--text-secondary)]">We'll review your requirements and match you with suitable suppliers</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                    <p className="text-[var(--text-secondary)]">We'll contact you to discuss the details and answer any questions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-[var(--primary)] text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                    <p className="text-[var(--text-secondary)]">We'll send you a detailed quote with supplier options and pricing</p>
                  </div>
                </div>
              </div>
              <Link to="/" className="btn btn-primary inline-flex items-center gap-2">
                Return to Home <ArrowRight size={18} />
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
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200">
              Get in touch with our team. We're here to help with all your China sourcing needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card text-center">
                <div className="w-14 h-14 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-white" size={24} />
                </div>
                <h3 className="mb-2">{info.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{info.description}</p>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section section-alt">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card">
                <h2 className="mb-2">Send Us a Message</h2>
                <p className="text-[var(--text-secondary)] mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="label">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`input ${errors.name ? 'border-[var(--error)]' : ''}`}
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-[var(--error)] text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="label">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`input ${errors.email ? 'border-[var(--error)]' : ''}`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-[var(--error)] text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="label">Company Name</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="product" className="label">Product You're Sourcing *</label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        value={formData.product}
                        onChange={handleInputChange}
                        className={`input ${errors.product ? 'border-[var(--error)]' : ''}`}
                        placeholder="e.g., Ceramic Mugs"
                      />
                      {errors.product && <p className="text-[var(--error)] text-sm mt-1">{errors.product}</p>}
                    </div>
                    <div>
                      <label htmlFor="quantity" className="label">Estimated Quantity</label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        className="input"
                        placeholder="e.g., 10,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="label">Service You're Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="input"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="label">Your Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`textarea ${errors.message ? 'border-[var(--error)]' : ''}`}
                      placeholder="Tell us about your requirements, target price, timeline, and any specific needs..."
                      rows={5}
                    ></textarea>
                    {errors.message && <p className="text-[var(--error)] text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" className="btn btn-primary w-full inline-flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Inquiry
                  </button>
                  
                  <p className="text-xs text-center text-[var(--text-light)]">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Why Work With Us */}
              <div className="card">
                <h3 className="mb-4">Why Work With Us?</h3>
                <div className="space-y-4">
                  {[
                    '10+ years of China sourcing experience',
                    '500+ verified suppliers in our network',
                    'On-the-ground team in Shenzhen',
                    'No upfront fees - pay for results',
                    '98% client satisfaction rate',
                    'End-to-end sourcing support'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="text-[var(--accent)] flex-shrink-0" size={18} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="card bg-[var(--primary)] text-white">
                <h3 className="text-white mb-4">Prefer to Talk Directly?</h3>
                <p className="text-gray-300 mb-6">
                  Call us during business hours for an immediate consultation.
                </p>
                <div className="space-y-4">
                  <a href="tel:+8675588888888" className="flex items-center gap-3 text-white hover:text-[var(--secondary)] transition-colors">
                    <Phone size={20} />
                    <span>+86 755 8888 8888</span>
                  </a>
                  <a href="mailto:info@ssourcing-china.com" className="flex items-center gap-3 text-white hover:text-[var(--secondary)] transition-colors">
                    <Mail size={20} />
                    <span>info@ssourcing-china.com</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <MessageCircle size={20} />
                    <span>WeChat: SSourcingChina</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="card">
                <div className="flex items-start gap-4">
                  <Clock className="text-[var(--secondary)] flex-shrink-0" size={24} />
                  <div>
                    <h4 className="mb-1">Quick Response Guarantee</h4>
                    <p className="text-sm text-[var(--text-secondary)]">
                      We respond to all inquiries within 24 hours. For urgent requests, please call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section">
        <div className="container">
          <div className="card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-[var(--bg-secondary)] aspect-square lg:aspect-auto flex items-center justify-center p-8">
                <div className="text-center">
                  <MapPin className="text-[var(--primary)] mx-auto mb-4" size={64} />
                  <h3 className="mb-2">Shenzhen, China</h3>
                  <p className="text-[var(--text-secondary)]">
                    Located in the heart of China's<br />manufacturing hub
                  </p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="mb-6">Visit Our Office</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Office Address</h4>
                    <p className="text-[var(--text-secondary)]">
                      Futian District<br />
                      Shenzhen, Guangdong<br />
                      China 518000
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">What to Expect</h4>
                    <p className="text-[var(--text-secondary)]">
                      We welcome clients to visit our office. We can also arrange factory visits and accompany you as your interpreters and guides.
                    </p>
                  </div>
                  <Link to="/contact" className="btn btn-secondary inline-flex items-center gap-2">
                    Schedule a Visit <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;