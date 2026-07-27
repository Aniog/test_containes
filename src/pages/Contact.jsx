import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2, MessageSquare, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productType: '',
    quantity: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.productType.trim()) newErrors.productType = 'Product type is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="max-w-2xl mx-auto text-center px-4">
          <div className="w-24 h-24 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-accent-600" />
          </div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">Thank You!</h1>
          <p className="text-xl text-neutral-600 mb-8">
            We've received your inquiry and will get back to you within 24 hours.
          </p>
          <p className="text-neutral-500 mb-8">
            In the meantime, feel free to explore our <Link to="/services" className="text-primary-700 hover:underline">services</Link> or <Link to="/how-it-works" className="text-primary-700 hover:underline">learn how we work</Link>.
          </p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium mb-6">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your Sourcing Needs
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours with a customized sourcing plan.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-spacing bg-neutral-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                  Request a Free Quote
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Company */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="input-label">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="company" className="input-label">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="Your Company Inc."
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="input-label">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="input-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Country & Product Type */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="country" className="input-label">
                        Your Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select country</option>
                        <option value="US">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="DE">Germany</option>
                        <option value="FR">France</option>
                        <option value="AU">Australia</option>
                        <option value="CA">Canada</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="productType" className="input-label">
                        Product Type *
                      </label>
                      <input
                        type="text"
                        id="productType"
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className={`input-field ${errors.productType ? 'border-red-500' : ''}`}
                        placeholder="e.g., Electronics, Furniture"
                      />
                      {errors.productType && <p className="text-red-500 text-sm mt-1">{errors.productType}</p>}
                    </div>
                  </div>

                  {/* Quantity & Service */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quantity" className="input-label">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="input-field"
                        placeholder="e.g., 5,000 units"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="input-label">
                        Services Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select services</option>
                        <option value="full">Full Sourcing Service</option>
                        <option value="verification">Supplier Verification Only</option>
                        <option value="qc">Quality Inspection Only</option>
                        <option value="shipping">Shipping & Logistics Only</option>
                        <option value="custom">Custom Solution</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="input-label">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="input-field resize-none"
                      placeholder="Tell us more about your project, timeline, specific requirements, or any questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-accent text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Inquiry
                        <Send className="w-5 h-5" />
                      </span>
                    )}
                  </button>

                  <p className="text-center text-neutral-500 text-sm">
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-neutral-900 mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a href="mailto:info@ssourcingchina.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-800 transition-colors">
                      <Mail className="w-5 h-5 text-primary-700 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Email</p>
                      <p className="font-medium text-neutral-900 group-hover:text-primary-700 transition-colors">
                        info@ssourcingchina.com
                      </p>
                    </div>
                  </a>
                  <a href="tel:+862112345678" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-800 transition-colors">
                      <Phone className="w-5 h-5 text-primary-700 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Phone</p>
                      <p className="font-medium text-neutral-900 group-hover:text-primary-700 transition-colors">
                        +86 21 1234 5678
                      </p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Office</p>
                      <p className="font-medium text-neutral-900">
                        Shanghai, China
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary-700" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500">Working Hours</p>
                      <p className="font-medium text-neutral-900">
                        Mon-Fri: 9:00 AM - 6:00 PM (CST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-accent-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-accent-600" />
                  <h3 className="text-lg font-bold text-neutral-900">
                    Quick Response
                  </h3>
                </div>
                <p className="text-neutral-600 text-sm">
                  We typically respond to all inquiries within <strong>24 hours</strong>. For urgent requests, please call us directly.
                </p>
              </div>

              {/* What to Expect */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-neutral-900 mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-neutral-600">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    Personalized sourcing strategy
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-600">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    No-obligation quote within 24h
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-600">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    Supplier shortlist options
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-600">
                    <CheckCircle className="w-5 h-5 text-accent-500 shrink-0 mt-0.5" />
                    Transparent pricing breakdown
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'Is the initial consultation really free?',
                  a: 'Yes, initial consultations and supplier identification are completely free with no obligation.',
                },
                {
                  q: 'How do you charge for your services?',
                  a: 'Our fees depend on the services required. We typically charge a percentage of the order value or a flat fee per service. We provide transparent pricing before any work begins.',
                },
                {
                  q: 'What information do you need to get started?',
                  a: 'We need details about your product (type, specifications, quantity), target budget, timeline, and any specific requirements you have.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-neutral-50 rounded-xl p-6">
                  <h3 className="font-semibold text-neutral-900 mb-2">{faq.q}</h3>
                  <p className="text-neutral-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
