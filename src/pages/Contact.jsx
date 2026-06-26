import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
  User,
  Building,
  Package,
  FileText,
} from 'lucide-react';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formStatus, setFormStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    timeline: '',
    message: '',
    howDidYouHear: '',
  });

  useEffect(() => {
    const product = searchParams.get('product');
    if (product) {
      setFormData((prev) => ({ ...prev, product }));
    }
  }, [searchParams]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.product.trim()) newErrors.product = 'Product details are required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      details: ['Shenzhen, Guangdong', 'China 518000'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+86 755 8123 4567', '+86 755 8123 4568'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@ssourcingchina.com', 'sales@ssourcingchina.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 - 18:00', 'Saturday: 9:00 - 12:00 (CST)'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1e3a5f] via-[#2d5a8e] to-[#1e3a5f] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#e67e22] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              Ready to source products from China? Fill out the form below and we'll get back to you within 24 hours with a customized sourcing plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#f7fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
                <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">
                  Tell Us About Your Project
                </h2>
                <p className="text-[#4a5568] mb-8">
                  The more details you provide, the better we can tailor our response to your needs.
                </p>

                {formStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1e3a5f] mb-4">Thank You!</h3>
                    <p className="text-[#4a5568] mb-6 max-w-md mx-auto">
                      We've received your inquiry and will get back to you within 24 hours. In the meantime, feel free to explore our services or read our latest blog posts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="/services"
                        className="inline-flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#2d5a8e] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                      >
                        Explore Our Services
                      </a>
                      <a
                        href="/blog"
                        className="inline-flex items-center justify-center gap-2 bg-[#f7fafc] hover:bg-[#edf2f7] text-[#1e3a5f] px-6 py-3 rounded-xl font-semibold transition-colors"
                      >
                        Read Our Blog
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096]" />
                          <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f] transition-colors ${
                              errors.name ? 'border-red-500' : 'border-[#e2e8f0]'
                            }`}
                            placeholder="John Smith"
                          />
                        </div>
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096]" />
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f] transition-colors ${
                              errors.email ? 'border-red-500' : 'border-[#e2e8f0]'
                            }`}
                            placeholder="john@company.com"
                          />
                        </div>
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                          Company Name
                        </label>
                        <div className="relative">
                          <Building size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096]" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-11 pr-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f]"
                            placeholder="Your Company Inc."
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096]" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-11 pr-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f]"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                          Product Details *
                        </label>
                        <div className="relative">
                          <Package size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096]" />
                          <input
                            type="text"
                            name="product"
                            required
                            value={formData.product}
                            onChange={handleInputChange}
                            className={`w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f] transition-colors ${
                              errors.product ? 'border-red-500' : 'border-[#e2e8f0]'
                            }`}
                            placeholder="What product do you need?"
                          />
                        </div>
                        {errors.product && (
                          <p className="text-red-500 text-sm mt-1">{errors.product}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                          Estimated Quantity
                        </label>
                        <div className="relative">
                          <FileText size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718096]" />
                          <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleInputChange}
                            className="w-full pl-11 pr-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f]"
                            placeholder="e.g., 5,000 units"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                          Project Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f] bg-white"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Urgent (within 1 month)</option>
                          <option value="short">Short term (1-3 months)</option>
                          <option value="medium">Medium term (3-6 months)</option>
                          <option value="long">Long term (6+ months)</option>
                          <option value="ongoing">Ongoing project</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                          How Did You Find Us?
                        </label>
                        <select
                          name="howDidYouHear"
                          value={formData.howDidYouHear}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f] bg-white"
                        >
                          <option value="">Select an option</option>
                          <option value="google">Google Search</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="referral">Referral</option>
                          <option value="blog">Blog/Article</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#1e3a5f] mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-[#e2e8f0] rounded-lg focus:ring-2 focus:ring-[#e67e22] focus:border-transparent text-[#1e3a5f] resize-none"
                        placeholder="Tell us more about your requirements, target price, quality standards, certifications needed, etc."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-[#e67e22] hover:bg-[#d35400] disabled:bg-[#e67e22]/50 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <Send size={18} />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-[#718096] text-center">
                      By submitting this form, you agree to our Privacy Policy. We'll never share your information or send spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-[#1e3a5f] mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#fef7f0] rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon size={24} className="text-[#e67e22]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1e3a5f] mb-1">{item.title}</h4>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-[#4a5568] text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a8e] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Why Work With Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#e67e22] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">No Upfront Costs</h4>
                      <p className="text-sm text-gray-300">Free supplier matching and consultation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#e67e22] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Fast Response</h4>
                      <p className="text-sm text-gray-300">We respond within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#e67e22] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Proven Track Record</h4>
                      <p className="text-sm text-gray-300">200+ satisfied clients worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-[#e67e22] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Complete Transparency</h4>
                      <p className="text-sm text-gray-300">No hidden fees or surprises</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={24} className="text-[#e67e22]" />
                  <h3 className="font-bold text-[#1e3a5f]">Need Immediate Help?</h3>
                </div>
                <p className="text-[#4a5568] text-sm mb-4">
                  For urgent inquiries, you can reach us directly via email or phone during business hours.
                </p>
                <a
                  href="mailto:info@ssourcingchina.com"
                  className="block text-center bg-[#f7fafc] hover:bg-[#edf2f7] text-[#1e3a5f] py-3 rounded-lg font-semibold transition-colors"
                >
                  info@ssourcingchina.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Mini Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">
            Common Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: 'How quickly will I receive a response?',
                a: 'We typically respond to all inquiries within 24 hours during business days. For urgent requests, we prioritize responses to ensure you get the information you need quickly.',
              },
              {
                q: 'What information do I need to provide?',
                a: 'At minimum, we need your name, email, and a description of the product you want to source. Additional details like quantity, target price, and timeline help us provide more accurate quotes.',
              },
              {
                q: 'Is there a minimum order requirement?',
                a: 'Minimum order quantities vary by product and factory. Generally, most suppliers require 500-1,000 units per order. We can discuss specific requirements based on your product needs.',
              },
              {
                q: 'What happens after I submit this form?',
                a: 'Our team will review your inquiry and reach out to discuss your requirements in more detail. We\'ll then provide a customized sourcing plan with estimated timelines and costs.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-[#f7fafc] rounded-xl p-6">
                <h3 className="font-semibold text-[#1e3a5f] mb-2">{faq.q}</h3>
                <p className="text-[#4a5568] text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;