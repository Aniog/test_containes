import { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2,
  MessageSquare, FileText, Users, Globe
} from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import SectionHeader from '../components/common/SectionHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    productType: '',
    estimatedBudget: '',
    timeline: '',
    message: '',
    howDidYouHear: '',
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.productType.trim()) newErrors.productType = 'Please describe the product(s) you want to source';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('submitting');
    setSubmitError('');
    
    try {
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
      
      const response = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            company: formData.company,
            phone: formData.phone || '',
            country: formData.country || '',
            product_type: formData.productType,
            estimated_budget: formData.estimatedBudget || '',
            timeline: formData.timeline || '',
            message: formData.message || '',
            how_did_you_hear: formData.howDidYouHear || '',
            status: 'new',
          },
        })
        .select()
        .single();

      console.log('Form submitted successfully:', response);
      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        phone: '',
        country: '',
        productType: '',
        estimatedBudget: '',
        timeline: '',
        message: '',
        howDidYouHear: '',
      });
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitError(err.message || 'Failed to submit. Please try again.');
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['Room 1508, Building A', 'Shenzhen, Guangdong', 'China 518000'],
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+86 755 8123 4567', 'Monday - Friday, 9am - 6pm CST'],
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@ssourcingchina.com', 'We respond within 24 hours'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#2d4a6f] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-xl text-[#94a3b8]">
              Tell us about your sourcing needs and we'll get back to you within 24 hours with supplier options and cost estimates.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-xl flex items-center justify-center text-[#1e3a5f] flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f172a] mb-1">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-[#64748b]">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 bg-white rounded-xl border border-[#e2e8f0]">
                <h3 className="font-semibold text-[#0f172a] mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</span>
                    <span className="text-sm text-[#475569]">We review your requirements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">2</span>
                    <span className="text-sm text-[#475569]">We identify matching suppliers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-[#1e3a5f] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">3</span>
                    <span className="text-sm text-[#475569]">We send you options with quotes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-accent-500 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">4</span>
                    <span className="text-sm text-[#475569]">You choose; we handle the rest</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e2e8f0]">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-accent-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-[#0f172a] mb-4">Thank You!</h2>
                    <p className="text-[#64748b] mb-6 max-w-md mx-auto">
                      We've received your inquiry and will get back to you within 24 hours with supplier options and cost estimates.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="btn-secondary"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#0f172a] mb-2">Sourcing Inquiry Form</h2>
                    <p className="text-[#64748b] mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#0f172a] mb-2">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.firstName ? 'border-red-500' : 'border-[#e2e8f0]'
                            } focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors`}
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0f172a] mb-2">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.lastName ? 'border-red-500' : 'border-[#e2e8f0]'
                            } focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors`}
                            placeholder="Smith"
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-[#0f172a] mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.email ? 'border-red-500' : 'border-[#e2e8f0]'
                          } focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors`}
                          placeholder="john@company.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>

                      {/* Company & Phone */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#0f172a] mb-2">
                            Company Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.company ? 'border-red-500' : 'border-[#e2e8f0]'
                            } focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors`}
                            placeholder="Your Company Ltd."
                          />
                          {errors.company && (
                            <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0f172a] mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                      </div>

                      {/* Country & Product Type */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-[#0f172a] mb-2">
                            Country
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors bg-white"
                          >
                            <option value="">Select your country</option>
                            <option value="US">United States</option>
                            <option value="UK">United Kingdom</option>
                            <option value="DE">Germany</option>
                            <option value="FR">France</option>
                            <option value="CA">Canada</option>
                            <option value="AU">Australia</option>
                            <option value="NL">Netherlands</option>
                            <option value="SE">Sweden</option>
                            <option value="NO">Norway</option>
                            <option value="DK">Denmark</option>
                            <option value="OTHER">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#0f172a] mb-2">
                            Estimated Budget
                          </label>
                          <select
                            name="estimatedBudget"
                            value={formData.estimatedBudget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors bg-white"
                          >
                            <option value="">Select budget range</option>
                            <option value="under-5k">Under $5,000</option>
                            <option value="5k-25k">$5,000 - $25,000</option>
                            <option value="25k-100k">$25,000 - $100,000</option>
                            <option value="100k-500k">$100,000 - $500,000</option>
                            <option value="500k-plus">$500,000+</option>
                          </select>
                        </div>
                      </div>

                      {/* Product Type */}
                      <div>
                        <label className="block text-sm font-medium text-[#0f172a] mb-2">
                          Products You Want to Source <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="productType"
                          value={formData.productType}
                          onChange={handleChange}
                          rows={4}
                          className={`w-full px-4 py-3 rounded-lg border ${
                            errors.productType ? 'border-red-500' : 'border-[#e2e8f0]'
                          } focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors resize-none`}
                          placeholder="Please describe the products you're looking to source, including any specific requirements, quantities, or certifications needed..."
                        />
                        {errors.productType && (
                          <p className="text-red-500 text-sm mt-1">{errors.productType}</p>
                        )}
                      </div>

                      {/* Timeline */}
                      <div>
                        <label className="block text-sm font-medium text-[#0f172a] mb-2">
                          Project Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors bg-white"
                        >
                          <option value="">When do you need products delivered?</option>
                          <option value="asap">As soon as possible</option>
                          <option value="1-2-months">1-2 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="6-plus-months">6+ months</option>
                          <option value="exploring">Just exploring options</option>
                        </select>
                      </div>

                      {/* How did you hear */}
                      <div>
                        <label className="block text-sm font-medium text-[#0f172a] mb-2">
                          How did you hear about us?
                        </label>
                        <select
                          name="howDidYouHear"
                          value={formData.howDidYouHear}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors bg-white"
                        >
                          <option value="">Select an option</option>
                          <option value="google">Google Search</option>
                          <option value="linkedin">LinkedIn</option>
                          <option value="referral">Referral</option>
                          <option value="blog">Blog/Article</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      {/* Additional Message */}
                      <div>
                        <label className="block text-sm font-medium text-[#0f172a] mb-2">
                          Additional Information
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-[#e2e8f0] focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-colors resize-none"
                          placeholder="Any other details about your project or questions..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="w-full btn-primary py-4 flex items-center justify-center"
                      >
                        {status === 'submitting' ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Get My Free Quote
                          </>
                        )}
                      </button>

                      {submitError && (
                        <p className="text-red-500 text-sm text-center">
                          {submitError}
                        </p>
                      )}

                      <p className="text-xs text-[#64748b] text-center">
                        By submitting this form, you agree to our privacy policy. We'll never spam you or share your information.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Frequently Asked Questions"
            subtitle="Quick answers to common questions about working with us"
          />
          <div className="space-y-4">
            {[
              {
                q: 'How long does it take to get supplier quotes?',
                a: 'Typically 24-48 hours after you submit your requirements. For complex products or multiple categories, it may take a bit longer.',
              },
              {
                q: 'Is there a minimum order quantity (MOQ)?',
                a: 'MOQs vary by supplier and product. Many factories have MOQs of 500-1000 pieces per design, but we can help you find suppliers that match your needs.',
              },
              {
                q: 'What are your service fees?',
                a: 'Our fees depend on the services you need. We offer transparent pricing with no hidden costs. Contact us for a personalized quote.',
              },
              {
                q: 'Do you work with small businesses?',
                a: 'Yes! We work with businesses of all sizes, from startups to established enterprises. Let\'s discuss your needs.',
              },
            ].map((faq, index) => (
              <details key={index} className="bg-[#f8fafc] rounded-xl border border-[#e2e8f0] group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[#0f172a] pr-4">{faq.q}</span>
                  <div className="w-6 h-6 flex-shrink-0 text-[#64748b] group-open:rotate-180 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </summary>
                <div className="px-6 pb-6 text-[#64748b]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
