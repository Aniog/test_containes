import React, { useState } from 'react';
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Compliance & Certification',
];

const categoryOptions = [
  'Electronics & Technology',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial & Machinery',
  'Health & Beauty',
  'Toys & Baby Products',
  'Automotive & Parts',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Other',
];

const initialForm = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setForm((prev) => ({
      ...prev,
      services_needed: prev.services_needed.includes(service)
        ? prev.services_needed.filter((s) => s !== service)
        : [...prev.services_needed, service],
    }));
  };

  const validate = () => {
    if (!form.full_name.trim()) return 'Full name is required.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'A valid email address is required.';
    if (!form.product_description.trim()) return 'Please describe the product you want to source.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    try {
      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            full_name: form.full_name,
            email: form.email,
            company: form.company,
            country: form.country,
            phone: form.phone,
            product_category: form.product_category || undefined,
            product_description: form.product_description,
            estimated_quantity: form.estimated_quantity,
            target_price: form.target_price,
            services_needed: form.services_needed.length > 0 ? form.services_needed : undefined,
            message: form.message,
            status: 'new',
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : insertError?.message || 'Submission failed.';
        setError(msgs);
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/15 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Tell us what you need to source. We'll review your requirements and get back to you within one business day with a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h2 className="text-lg font-bold text-dark-text mb-5">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-text text-sm">Office Locations</p>
                      <p className="text-body-text text-sm">Shenzhen, Guangdong</p>
                      <p className="text-body-text text-sm">Yiwu, Zhejiang</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-text text-sm">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-navy text-sm hover:underline">info@ssourcing.cn</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-text text-sm">Phone / WhatsApp</p>
                      <p className="text-body-text text-sm">+86 755 0000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-navy/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <p className="font-medium text-dark-text text-sm">Response Time</p>
                      <p className="text-body-text text-sm">Within 1 business day</p>
                      <p className="text-muted-text text-xs">Mon–Fri, 9am–6pm CST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-xl p-6">
                <h3 className="text-white font-bold mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 1 business day',
                    'We send you a tailored sourcing proposal',
                    'We schedule a call to discuss your requirements',
                    'We begin supplier research upon your approval',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-white/80 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl p-10 border border-gray-100 shadow-sm text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-success-green" />
                  </div>
                  <h2 className="text-2xl font-bold text-dark-text mb-3">Inquiry Received</h2>
                  <p className="text-body-text mb-6 max-w-md mx-auto">
                    Thank you for your inquiry. Our team will review your requirements and get back to you within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-bold text-dark-text mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <AlertCircle className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                      <p className="text-[#C0392B] text-sm">{error}</p>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-dark-text uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                      Your Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-1.5">
                          Full Name <span className="text-[#C0392B]">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={form.full_name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-1.5">
                          Business Email <span className="text-[#C0392B]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-dark-text uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                      Product Requirements
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-1.5">Product Category</label>
                        <select
                          name="product_category"
                          value={form.product_category}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy bg-white"
                        >
                          <option value="">Select a category</option>
                          {categoryOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-1.5">
                          Product Description <span className="text-[#C0392B]">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={form.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product you want to source — include specifications, materials, dimensions, or any reference products."
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-dark-text mb-1.5">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={form.estimated_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units, 1,000–2,000 pcs"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-dark-text mb-1.5">Target Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={form.target_price}
                            onChange={handleChange}
                            placeholder="e.g. $5–8 per unit"
                            className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-dark-text uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                      Services Needed
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            form.services_needed.includes(service)
                              ? 'border-navy bg-light-blue'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={form.services_needed.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="w-4 h-4 accent-navy"
                          />
                          <span className="text-sm text-dark-text">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-dark-text mb-1.5">Additional Information</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or context that would help us understand your requirements."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-navy/30 focus:border-navy resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#A93226] disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors duration-200"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Sourcing Inquiry'
                    )}
                  </button>
                  <p className="text-muted-text text-xs text-center mt-3">
                    We respond within 1 business day. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
