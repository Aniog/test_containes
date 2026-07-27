import { useState } from 'react';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle,
  ArrowRight, MessageSquare, User, Building, Package, Globe
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productType: '',
    orderQuantity: '',
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
    if (!formData.message.trim()) newErrors.message = 'Please describe your requirements';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary-600 to-secondary py-20 lg:py-28">
          <div className="container-main">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Thank You for Your Inquiry
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                We've received your request and will get back to you within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <section className="section-padding bg-background-light">
          <div className="container-main">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Inquiry Submitted Successfully
              </h2>
              <p className="text-text-secondary mb-8">
                Our team will review your requirements and contact you within 24 business hours 
                with supplier options and a detailed plan.
              </p>
              <div className="bg-white rounded-xl p-6 text-left border border-border">
                <h3 className="font-semibold text-text-primary mb-4">What happens next?</h3>
                <div className="space-y-4">
                  {[
                    'We review your inquiry and identify suitable suppliers',
                    'Our team prepares a customized sourcing plan',
                    'You receive supplier options with pricing and timelines',
                    'We begin the sourcing process once you approve',
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary-50 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-semibold text-primary">{index + 1}</span>
                      </div>
                      <span className="text-sm text-text-secondary">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-600 to-secondary py-20 lg:py-28">
        <div className="container-main">
          <div className="max-w-3xl">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Tell us about your product requirements and receive quotes from verified suppliers 
              within 48 hours. No obligation, no pressure.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">No commitment required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background-light">
        <div className="container-main">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="text-2xl font-bold text-text-primary mb-6">Submit Your Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                            errors.name ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="John Smith"
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                            errors.email ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="john@company.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Company & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Your Company Inc."
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Country & Product Type */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Country
                      </label>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="United States"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-primary mb-2">
                        Product Type <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Package className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-secondary" />
                        <input
                          type="text"
                          name="productType"
                          value={formData.productType}
                          onChange={handleChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                            errors.productType ? 'border-red-500' : 'border-border'
                          }`}
                          placeholder="e.g., Electronics, Furniture"
                        />
                      </div>
                      {errors.productType && (
                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.productType}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Order Quantity */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Estimated Order Quantity
                    </label>
                    <select
                      name="orderQuantity"
                      value={formData.orderQuantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                    >
                      <option value="">Select quantity range</option>
                      <option value="1-100">1 - 100 units</option>
                      <option value="100-500">100 - 500 units</option>
                      <option value="500-1000">500 - 1,000 units</option>
                      <option value="1000-5000">1,000 - 5,000 units</option>
                      <option value="5000-10000">5,000 - 10,000 units</option>
                      <option value="10000+">10,000+ units</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">
                      Your Requirements <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-text-secondary" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none ${
                          errors.message ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="Please describe your product requirements, specifications, quality standards, target price, timeline, and any other relevant details..."
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-text-secondary text-center">
                    By submitting this form, you agree to be contacted by our team regarding your inquiry. 
                    We respect your privacy and will not share your information.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-card">
                <h3 className="font-bold text-text-primary mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-secondary">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-text-primary hover:text-primary">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-secondary">Phone</p>
                      <a href="tel:+861234567890" className="text-text-primary hover:text-primary">
                        +86 123 4567 890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-secondary">Office</p>
                      <p className="text-text-primary">Shenzhen, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-text-secondary">Business Hours</p>
                      <p className="text-text-primary">Mon-Fri: 9:00 - 18:00 (CST)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white">
                <h3 className="font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-3">
                  {[
                    'No upfront fees for initial consultation',
                    'Verified suppliers only',
                    'Transparent pricing',
                    'Multi-stage quality control',
                    'End-to-end project management',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-card">
                <h3 className="font-bold text-text-primary mb-4">Quick Response</h3>
                <p className="text-sm text-text-secondary mb-4">
                  We typically respond to inquiries within 24 hours during business days.
                </p>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Average response time: 4-8 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Common Questions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { q: 'What are your service fees?', a: 'Our pricing is project-based and depends on the scope of services required.' },
              { q: 'How long does sourcing take?', a: 'Timeline varies by product complexity, typically 4-12 weeks from inquiry to delivery.' },
              { q: 'Do you handle shipping?', a: 'Yes, we coordinate all shipping and logistics aspects of your order.' },
            ].map((faq, index) => (
              <div key={index} className="bg-background-light rounded-lg p-5">
                <h4 className="font-semibold text-text-primary mb-2">{faq.q}</h4>
                <p className="text-sm text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
