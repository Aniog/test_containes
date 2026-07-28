import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const PageHero = ({ title, subtitle }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-primary py-16 lg:py-24">
      <div className="container">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-white/80">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    productType: '',
    quantity: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['Shenzhen, Guangdong, China', 'Near Hong Kong Border'],
      description: 'Our headquarters in the heart of China\'s manufacturing hub',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 755 1234 5678', '+86 138 0000 0000'],
      description: 'Available during business hours (UTC+8)',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ssourcingchina.com', 'support@ssourcingchina.com'],
      description: 'We respond within 24 hours',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 9:00 - 14:00'],
      description: 'China Standard Time (UTC+8)',
    },
  ];

  const services = [
    'Supplier Verification',
    'Quality Inspection',
    'Production Follow-up',
    'Shipping Coordination',
    'Sample Management',
    'Full Sourcing Service',
    'Other',
  ];

  const productTypes = [
    'Electronics',
    'Textiles & Apparel',
    'Machinery',
    'Consumer Goods',
    'Packaging',
    'Furniture',
    'Automotive Parts',
    'Beauty & Personal Care',
    'Toys & Games',
    'Sports & Outdoors',
    'Other',
  ];

  return (
    <>
      <PageHero 
        title="Contact Us" 
        subtitle="Get in touch for a free sourcing consultation and quote"
      />

      {/* Contact Info */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-surface p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-text-secondary text-sm">
                    {detail}
                  </p>
                ))}
                <p className="text-text-muted text-xs mt-2">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Send Us a Message
              </h2>
              <p className="text-text-secondary mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              {isSubmitted ? (
                <div className="bg-success/10 border border-success/20 rounded-lg p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    Thank You!
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Your inquiry has been submitted successfully. We'll review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        productType: '',
                        quantity: '',
                        service: '',
                        message: '',
                      });
                    }}
                    className="text-primary font-medium hover:underline"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your Company Ltd"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="productType" className="block text-sm font-medium text-text-primary mb-2">
                        Product Type *
                      </label>
                      <select
                        id="productType"
                        name="productType"
                        required
                        value={formData.productType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Select product type</option>
                        {productTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-text-primary mb-2">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="e.g., 10,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                      Service You're Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Your Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      placeholder="Describe your product requirements, target price, quality standards, packaging needs, timeline, and any other specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-text-muted text-center">
                    By submitting this form, you agree to our privacy policy. We'll respond within 24 hours during business days.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact Options */}
              <div className="bg-surface rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Other Ways to Reach Us
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:info@ssourcingchina.com"
                    className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-text-primary">Email Us</div>
                      <div className="text-text-muted text-sm">info@ssourcingchina.com</div>
                    </div>
                  </a>
                  <a
                    href="tel:+8675512345678"
                    className="flex items-center gap-4 p-4 bg-background rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-text-primary">Call Us</div>
                      <div className="text-text-muted text-sm">+86 755 1234 5678</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 p-4 bg-background rounded-lg">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-text-primary">WeChat</div>
                      <div className="text-text-muted text-sm">SSourcing_China</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-primary text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">No obligation quote</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">Flexible service options</span>
                  </li>
                </ul>
              </div>

              {/* FAQ Link */}
              <div className="bg-surface rounded-lg border border-border p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Have Questions?
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Check our FAQ section for answers to common questions about our services.
                </p>
                <Link
                  to="/#faq"
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  View FAQ
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-primary/5">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              Shenzhen, China
            </h3>
            <p className="text-text-muted">
              Located in the heart of China's manufacturing hub
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;