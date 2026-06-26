import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  AlertCircle,
  ArrowRight,
  MessageSquare,
  FileText,
  HeadphonesIcon,
  Search
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    productCategory: '',
    productDetails: '',
    quantity: '',
    targetPrice: '',
    timeline: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
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
    if (!formData.productDetails.trim()) newErrors.productDetails = 'Product details are required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
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
        timeline: '',
        message: '',
      });
    } catch (error) {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      details: ['Guangzhou, China', 'Serving clients worldwide'],
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@ssourcingchina.com', 'support@ssourcingchina.com'],
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+86 20 1234 5678', '+86 138 0011 2233'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 9:00 - 14:00 CST'],
    },
  ];

  const services = [
    {
      icon: Search,
      title: 'Supplier Sourcing',
      description: 'Find the right suppliers for your products',
    },
    {
      icon: FileText,
      title: 'Factory Verification',
      description: 'Verify supplier legitimacy and capabilities',
    },
    {
      icon: HeadphonesIcon,
      title: 'Quality Inspection',
      description: 'Professional QC at all production stages',
    },
    {
      icon: MessageSquare,
      title: 'Custom Inquiry',
      description: 'Other sourcing assistance',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-200">
              Ready to start sourcing from China? Get in touch with our team. We'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-white border-b border-[var(--color-border)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-[var(--color-text-muted)]">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-[var(--color-background)]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-8">
                <h2 className="text-2xl font-bold mb-6">Get a Free Sourcing Quote</h2>
                
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[var(--color-success)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-[var(--color-success)]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-[var(--color-text-secondary)] mb-6">
                      Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-[var(--color-primary)] font-semibold hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {/* Personal Information */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'border-[var(--color-secondary)]' : ''}
                            placeholder="Your full name"
                          />
                          {errors.name && (
                            <p className="text-[var(--color-secondary)] text-sm mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium mb-2">
                            Company
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'border-[var(--color-secondary)]' : ''}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="text-[var(--color-secondary)] text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium mb-2">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Product Information */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold mb-4">Product Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="productCategory" className="block text-sm font-medium mb-2">
                            Product Category
                          </label>
                          <select
                            id="productCategory"
                            name="productCategory"
                            value={formData.productCategory}
                            onChange={handleChange}
                          >
                            <option value="">Select a category</option>
                            <option value="electronics">Electronics</option>
                            <option value="textiles">Textiles & Apparel</option>
                            <option value="machinery">Machinery</option>
                            <option value="furniture">Furniture</option>
                            <option value="packaging">Packaging</option>
                            <option value="home">Home & Garden</option>
                            <option value="automotive">Automotive</option>
                            <option value="fashion">Fashion & Accessories</option>
                            <option value="toys">Toys & Games</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                            Estimated Quantity
                          </label>
                          <input
                            type="text"
                            id="quantity"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="e.g., 10,000 units"
                          />
                        </div>
                        <div>
                          <label htmlFor="targetPrice" className="block text-sm font-medium mb-2">
                            Target Price (per unit)
                          </label>
                          <input
                            type="text"
                            id="targetPrice"
                            name="targetPrice"
                            value={formData.targetPrice}
                            onChange={handleChange}
                            placeholder="e.g., $5-10 USD"
                          />
                        </div>
                        <div>
                          <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                            Timeline
                          </label>
                          <select
                            id="timeline"
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleChange}
                          >
                            <option value="">Select timeline</option>
                            <option value="asap">ASAP (urgent)</option>
                            <option value="1month">Within 1 month</option>
                            <option value="3months">Within 3 months</option>
                            <option value="6months">Within 6 months</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label htmlFor="productDetails" className="block text-sm font-medium mb-2">
                            Product Details *
                          </label>
                          <textarea
                            id="productDetails"
                            name="productDetails"
                            rows={4}
                            value={formData.productDetails}
                            onChange={handleChange}
                            className={errors.productDetails ? 'border-[var(--color-secondary)]' : ''}
                            placeholder="Describe your product requirements, specifications, materials, etc."
                          />
                          {errors.productDetails && (
                            <p className="text-[var(--color-secondary)] text-sm mt-1">{errors.productDetails}</p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Additional Message */}
                    <div className="mb-8">
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Additional Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className={errors.message ? 'border-[var(--color-secondary)]' : ''}
                        placeholder="Any additional information or questions..."
                      />
                      {errors.message && (
                        <p className="text-[var(--color-secondary)] text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 p-4 mb-6 bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] rounded">
                        <AlertCircle className="w-5 h-5" />
                        <p>Something went wrong. Please try again.</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[var(--color-secondary)] text-white py-4 rounded font-semibold hover:bg-[#9b2c2c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Inquiry <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Services */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4">How Can We Help?</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{service.title}</h4>
                        <p className="text-xs text-[var(--color-text-muted)]">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What to Expect */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-text-secondary)]">Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-text-secondary)]">Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-text-secondary)]">No obligation quote</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--color-text-secondary)]">Confidential handling of information</span>
                  </li>
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="card p-6 bg-[var(--color-primary)] text-white">
                <h3 className="text-lg font-semibold mb-4">Prefer to Talk Directly?</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Call us during business hours for immediate assistance.
                </p>
                <a
                  href="tel:+862012345678"
                  className="block text-center bg-white text-[var(--color-primary)] py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
                >
                  +86 20 1234 5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-[var(--color-text-secondary)]">
              We're based in Guangzhou, China - the heart of manufacturing. Schedule a visit and we'll be happy to meet with you.
            </p>
          </div>
          <div className="card overflow-hidden">
            <div 
              className="aspect-[21/9] bg-gray-200"
              data-strk-bg-id="office-location"
              data-strk-bg="Guangzhou China cityscape business district"
              data-strk-bg-ratio="21x9"
              data-strk-bg-width="1200"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;