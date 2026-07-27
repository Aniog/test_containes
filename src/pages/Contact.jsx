import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building2, User as UserIcon, MessageSquare, Loader2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const servicesOptions = [
  { value: 'supplier_search', label: 'Supplier Search & Verification' },
  { value: 'factory_verification', label: 'Factory Audits' },
  { value: 'quality_inspection', label: 'Quality Control Inspections' },
  { value: 'production_follow_up', label: 'Production Follow-up' },
  { value: 'shipping_coordination', label: 'Shipping & Logistics' },
  { value: 'sample_management', label: 'Sample Management' },
  { value: 'negotiation', label: 'Price Negotiation' },
  { value: 'customs_clearance', label: 'Customs Clearance' },
];

const countries = [
  'United States', 'United Kingdom', 'Germany', 'France', 'Spain', 'Italy',
  'Netherlands', 'Belgium', 'Sweden', 'Norway', 'Denmark', 'Finland',
  'Australia', 'New Zealand', 'Canada', 'Japan', 'South Korea',
  'Singapore', 'United Arab Emirates', 'Saudi Arabia', 'Other'
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    product_description: '',
    estimated_quantity: '',
    target_price: '',
    services_needed: [],
    timeline: '',
    shipping_address: '',
    referral_source: '',
    additional_notes: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services_needed: checked 
          ? [...prev.services_needed, value]
          : prev.services_needed.filter(s => s !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.product_description.trim()) return 'Product description is required';
    if (formData.product_description.trim().length < 10) return 'Please provide more details about your product (at least 10 characters)';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

      // Create the sourcing inquiry
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          name: formData.name,
          company: formData.company || null,
          email: formData.email,
          phone: formData.phone || null,
          country: formData.country || null,
          product_description: formData.product_description,
          estimated_quantity: formData.estimated_quantity || null,
          target_price: formData.target_price || null,
          timeline: formData.timeline || null,
          shipping_address: formData.shipping_address || null,
          services_needed: formData.services_needed,
          referral_source: formData.referral_source || null,
          additional_notes: formData.additional_notes || null,
        })
        .select()
        .single();

      if (error || response?.success === false) {
        const errorMsg = response?.errors?.join(', ') || error?.message || 'Failed to submit inquiry';
        setErrorMessage(errorMsg);
        setStatus('error');
        return;
      }

      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        product_description: '',
        estimated_quantity: '',
        target_price: '',
        services_needed: [],
        timeline: '',
        shipping_address: '',
        referral_source: '',
        additional_notes: '',
      });
    } catch (err) {
      console.error('Form submission error:', err);
      setErrorMessage(err.message || 'An unexpected error occurred. Please try again.');
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      lines: ['Room 1208, Building A', 'Yonghe Plaza, Guangzhou', 'China 510000']
    },
    {
      icon: Phone,
      title: 'Call Us',
      lines: ['+86 20 1234 5678', 'Mon-Fri: 9AM-6PM CST']
    },
    {
      icon: Mail,
      title: 'Email Us',
      lines: ['info@ssourcingchina.com', 'sales@ssourcingchina.com']
    },
    {
      icon: Clock,
      title: 'Response Time',
      lines: ['Within 24 hours', 'Usually within 2-4 hours']
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#1E3A5F] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Tell us about your product requirements and we'll respond within 24 hours with supplier recommendations and a quote for our services.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-[#1E3A5F]" />
                </div>
                <h3 className="font-semibold text-[#1E293B] mb-2">{info.title}</h3>
                {info.lines.map((line, i) => (
                  <p key={i} className="text-sm text-[#64748B]">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-8">
                <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Sourcing Inquiry Form</h2>
                
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-[#059669]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#059669]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#1E293B] mb-4">Thank You!</h3>
                    <p className="text-[#64748B] mb-6 max-w-md mx-auto">
                      Your inquiry has been submitted successfully. Our team will review your requirements and get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-[#1E3A5F] font-semibold hover:text-[#2C5282] transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {status === 'error' && errorMessage && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                        {errorMessage}
                      </div>
                    )}

                    {/* Personal Information */}
                    <div className="border-b border-[#E2E8F0] pb-6">
                      <h3 className="text-lg font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
                        <UserIcon className="w-5 h-5 text-[#C9A227]" />
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#1E293B] mb-1">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1E293B] mb-1">
                            Company Name
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                            placeholder="Your company name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1E293B] mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                            placeholder="you@company.com"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1E293B] mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                            placeholder="+1 234 567 8900"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1E293B] mb-1">
                            Country
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors bg-white"
                          >
                            <option value="">Select your country</option>
                            {countries.map(country => (
                              <option key={country} value={country}>{country}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1E293B] mb-1">
                            How did you hear about us?
                          </label>
                          <select
                            name="referral_source"
                            value={formData.referral_source}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors bg-white"
                          >
                            <option value="">Select an option</option>
                            <option value="google">Google Search</option>
                            <option value="referral">Referral</option>
                            <option value="linkedin">LinkedIn</option>
                            <option value="trade_show">Trade Show</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Product Information */}
                    <div className="border-b border-[#E2E8F0] pb-6">
                      <h3 className="text-lg font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-[#C9A227]" />
                        Product Requirements
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-[#1E293B] mb-1">
                            Product Description <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            name="product_description"
                            value={formData.product_description}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                            placeholder="Please describe the product(s) you need to source. Include details like materials, specifications, intended use, any required certifications, etc."
                            required
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-[#1E293B] mb-1">
                              Estimated Quantity
                            </label>
                            <input
                              type="text"
                              name="estimated_quantity"
                              value={formData.estimated_quantity}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                              placeholder="e.g., 5,000 units"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#1E293B] mb-1">
                              Target Price
                            </label>
                            <input
                              type="text"
                              name="target_price"
                              value={formData.target_price}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                              placeholder="e.g., $5-8 per unit"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-[#1E293B] mb-1">
                              Timeline
                            </label>
                            <select
                              name="timeline"
                              value={formData.timeline}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors bg-white"
                            >
                              <option value="">Select timeline</option>
                              <option value="urgent">Urgent (within 2 weeks)</option>
                              <option value="short">Short term (1-2 months)</option>
                              <option value="medium">Medium term (2-4 months)</option>
                              <option value="long">Long term planning</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1E293B] mb-1">
                            Shipping Destination
                          </label>
                          <input
                            type="text"
                            name="shipping_address"
                            value={formData.shipping_address}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                            placeholder="Country/region for final delivery"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Services Needed */}
                    <div className="border-b border-[#E2E8F0] pb-6">
                      <h3 className="text-lg font-semibold text-[#1E293B] mb-4 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-[#C9A227]" />
                        Services You Need
                      </h3>
                      <p className="text-sm text-[#64748B] mb-4">Select the services you're interested in (select all that apply):</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {servicesOptions.map((service) => (
                          <label 
                            key={service.value}
                            className="flex items-center gap-3 p-3 bg-[#F8FAFC] rounded-lg cursor-pointer hover:bg-[#F1F5F9] transition-colors"
                          >
                            <input
                              type="checkbox"
                              name="services"
                              value={service.value}
                              checked={formData.services_needed.includes(service.value)}
                              onChange={handleChange}
                              className="w-4 h-4 text-[#1E3A5F] rounded border-[#E2E8F0] focus:ring-[#1E3A5F]"
                            />
                            <span className="text-sm text-[#1E293B]">{service.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block text-sm font-medium text-[#1E293B] mb-1">
                        Additional Notes
                      </label>
                      <textarea
                        name="additional_notes"
                        value={formData.additional_notes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-[#E2E8F0] focus:ring-2 focus:ring-[#1E3A5F] focus:border-[#1E3A5F] transition-colors"
                        placeholder="Any other details or questions you'd like us to know..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 bg-[#C9A227] text-white px-8 py-4 rounded-md font-semibold text-lg hover:bg-[#B8922A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-[#64748B] text-center">
                      By submitting this form, you agree to be contacted by our team regarding your inquiry. We typically respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Trust Points */}
              <div className="bg-white rounded-xl shadow-sm border border-[#E2E8F0] p-6">
                <h3 className="text-lg font-semibold text-[#1E293B] mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#64748B]">Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#64748B]">Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#64748B]">No obligation quotes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#64748B]">Transparent pricing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#64748B]">English-speaking team</span>
                  </li>
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="bg-[#1E3A5F] rounded-xl p-6 text-white">
                <h3 className="text-lg font-semibold mb-4">Prefer to Talk?</h3>
                <p className="text-white/80 text-sm mb-4">
                  Call us directly for an immediate consultation about your sourcing needs.
                </p>
                <a 
                  href="tel:+862012345678"
                  className="flex items-center justify-center gap-2 bg-white text-[#1E3A5F] px-6 py-3 rounded-md font-semibold hover:bg-white/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  +86 20 1234 5678
                </a>
              </div>

              {/* Process Steps */}
              <div className="bg-[#F8FAFC] rounded-xl p-6">
                <h3 className="text-lg font-semibold text-[#1E293B] mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C9A227] rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <span className="text-sm text-[#64748B]">We review your inquiry and prepare supplier options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C9A227] rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <span className="text-sm text-[#64748B]">We contact you within 24 hours with recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C9A227] rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <span className="text-sm text-[#64748B]">Discuss details and provide a service quote</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#C9A227] rounded-full flex items-center justify-center shrink-0">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <span className="text-sm text-[#64748B]">Start your sourcing project upon approval</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
