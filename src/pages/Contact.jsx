import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Phone, MapPin, Clock, CheckCircle, Send,
  MessageSquare, FileText, ArrowRight, Building2
} from 'lucide-react';
import { ImageHelper, DataClient } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productType: '',
    orderQuantity: '',
    budget: '',
    timeline: '',
    message: '',
    services: []
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});


  const serviceOptions = [
    'Supplier Sourcing',
    'Factory Verification',
    'Quality Control',
    'Production Follow-up',
    'Shipping & Logistics'
  ];

  const countries = [
    'United States', 'United Kingdom', 'Germany', 'France', 'Canada',
    'Australia', 'Netherlands', 'Sweden', 'Norway', 'Denmark',
    'Belgium', 'Switzerland', 'Austria', 'Spain', 'Italy',
    'Japan', 'South Korea', 'Singapore', 'New Zealand', 'Other'
  ];

  const orderQuantities = [
    'Under 1,000 units',
    '1,000 - 5,000 units',
    '5,000 - 10,000 units',
    '10,000 - 50,000 units',
    '50,000 - 100,000 units',
    'Over 100,000 units'
  ];

  const timelines = [
    'Urgent (within 4 weeks)',
    '1-2 months',
    '2-4 months',
    '4-6 months',
    '6+ months',
    'Flexible / Planning'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
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
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your project';
    return newErrors;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: formData.name,
            company: formData.company,
            email: formData.email,
            phone: formData.phone,
            country: formData.country,
            product_type: formData.productType,
            order_quantity: formData.orderQuantity,
            target_budget: formData.budget,
            timeline: formData.timeline,
            services_needed: formData.services,
            project_details: formData.message,
            status: 'new',
            source: 'website'
          }
        })
        .select()
        .single();
      
      if (error || response?.success === false) {
        console.error('Form submission error:', error || response.errors);
        setSubmitError('There was an error submitting your inquiry. Please try again or email us directly.');
        setIsSubmitting(false);
        return;
      }
      
      console.log('Form submitted successfully:', response);
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission error:', err);
      setSubmitError('There was an error submitting your inquiry. Please try again or email us directly.');
    }
    
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
    <div ref={containerRef}>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Thank You for Your Inquiry
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We've received your sourcing request and will respond within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Success Message */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Inquiry Has Been Received
              </h2>
              <p className="text-gray-600 mb-8">
                Our sourcing team will review your requirements and get back to you within 24 hours with initial supplier recommendations and a customized quote.
              </p>
              <div className="bg-gray-50 rounded-xl p-6 text-left mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">What happens next?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">1</span>
                    </div>
                    <span className="text-gray-700">We review your requirements and identify suitable suppliers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">2</span>
                    </div>
                    <span className="text-gray-700">We conduct factory verification on potential matches</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-600">3</span>
                    </div>
                    <span className="text-gray-700">You receive detailed supplier profiles and a customized quote</span>
                  </li>
                </ul>
              </div>
              <a href="/" className="btn-primary inline-flex items-center gap-2">
                Return to Home
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tell us about your sourcing needs. We'll respond within 24 hours with supplier recommendations and a customized quote.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24h Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sourcing Inquiry Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="John Smith"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Your Company Ltd."
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select country</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Type <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.productType ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                        placeholder="e.g., Electronics, Home Decor, Apparel"
                      />
                      {errors.productType && <p className="text-red-500 text-sm mt-1">{errors.productType}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Order Quantity
                      </label>
                      <select
                        name="orderQuantity"
                        value={formData.orderQuantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select quantity range</option>
                        {orderQuantities.map(qty => (
                          <option key={qty} value={qty}>{qty}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Target Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $10,000">Under $10,000</option>
                        <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000 - $500,000">$100,000 - $500,000</option>
                        <option value="Over $500,000">Over $500,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Services You Need (select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {serviceOptions.map(service => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceChange(service)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            formData.services.includes(service)
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Tell us about your product requirements, quality standards, special needs, or any questions you have..."
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  {submitError && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-4 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Submit Inquiry
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by our sourcing team. We respect your privacy and will not share your information.
                  </p>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-gray-900 hover:text-blue-600">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <a href="tel:+8675588887777" className="text-gray-900 hover:text-blue-600">
                        +86 755 8888 7777
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Office</p>
                      <p className="text-gray-900">
                        Shenzhen, Guangdong<br />
                        China 518000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Response Time</p>
                      <p className="text-gray-900">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  What to Expect
                </h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Initial response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Supplier shortlist within 3-5 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Detailed quote with factory profiles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>No obligation until you're ready</span>
                  </li>
                </ul>
              </div>

              {/* Quick Inquiry */}
              <div className="bg-slate-900 text-white rounded-2xl p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  Prefer Email?
                </h3>
                <p className="text-sm text-gray-400 mb-4">
                  Send your inquiry directly to our team at:
                </p>
                <a 
                  href="mailto:info@ssourcingchina.com?subject=Sourcing Inquiry"
                  className="text-blue-400 hover:text-blue-300 font-medium break-all"
                >
                  info@ssourcingchina.com
                </a>
                <p className="text-xs text-gray-500 mt-4">
                  Include: product type, quantity, target price, and timeline for best response.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
