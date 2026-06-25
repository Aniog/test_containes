import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const categories = [
  'Electronics', 'Furniture', 'Apparel & Textiles', 'Industrial & Machinery',
  'Home & Kitchen', 'Health & Beauty', 'Toys & Sporting Goods', 'Packaging & Print', 'Other',
];

const serviceOptions = [
  'Supplier Sourcing', 'Factory Verification', 'Quality Inspection',
  'Production Follow-up', 'Shipping Coordination', 'Trade Compliance',
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  product_name: '',
  product_category: '',
  order_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
};

function validate(v) {
  if (!v.full_name.trim()) return 'Full name is required.';
  if (!v.email.trim()) return 'Email address is required.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
  if (!v.product_name.trim()) return 'Product name is required.';
  return null;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const toggleService = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) { setError(err); return; }

    setStatus('submitting');
    try {
      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            full_name: values.full_name,
            email: values.email,
            company: values.company || undefined,
            country: values.country || undefined,
            product_name: values.product_name,
            product_category: values.product_category || undefined,
            order_quantity: values.order_quantity || undefined,
            target_price: values.target_price || undefined,
            services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
            message: values.message || undefined,
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (insertError?.message || 'Submission failed.');
        setError(msgs);
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f2d5e] to-[#1a4f8a] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-blue-300 uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Get a Free Sourcing Quote</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Tell us about your product and sourcing needs. We'll review your inquiry and respond within 24 hours with a tailored plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Office Location</p>
                      <p className="text-sm text-slate-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-[#2563eb] hover:text-[#1a4f8a] no-underline">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Phone / WhatsApp</p>
                      <a href="tel:+8620XXXXXXXX" className="text-sm text-[#2563eb] hover:text-[#1a4f8a] no-underline">
                        +86 20 XXXX XXXX
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#2563eb] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Response Time</p>
                      <p className="text-sm text-slate-600">Within 24 business hours</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-100 p-5">
                <h3 className="text-sm font-bold text-slate-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We schedule a brief call to clarify requirements',
                    'We send you a tailored sourcing proposal',
                    'We begin supplier research upon your approval',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 bg-[#2563eb] text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-sm text-slate-600">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-blue-50 rounded-xl border border-blue-100 p-5">
                <p className="text-sm font-semibold text-[#1a4f8a] mb-1">No Commitment Required</p>
                <p className="text-sm text-slate-600">Submitting this form is free and non-binding. We'll assess your project and provide a proposal before any fees are discussed.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-9 h-9 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Inquiry Received!</h2>
                  <p className="text-slate-600 max-w-md mx-auto mb-6">
                    Thank you for your sourcing inquiry. Our team will review your request and get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-[#2563eb] hover:bg-[#1a4f8a] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-slate-100 p-8 space-y-6">
                  <h2 className="text-xl font-bold text-slate-900">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2.5 bg-red-50 border border-red-100 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Your Details</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="full_name">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="full_name"
                          name="full_name"
                          type="text"
                          value={values.full_name}
                          onChange={onChange}
                          placeholder="John Smith"
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="email">
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="john@company.com"
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="company">
                          Company Name
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Acme Ltd."
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="country">
                          Country
                        </label>
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={values.country}
                          onChange={onChange}
                          placeholder="United States"
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Product Details</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="product_name">
                          Product Name / Description <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="product_name"
                          name="product_name"
                          type="text"
                          value={values.product_name}
                          onChange={onChange}
                          placeholder="e.g. Stainless steel water bottles, 500ml, BPA-free"
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="product_category">
                          Product Category
                        </label>
                        <select
                          id="product_category"
                          name="product_category"
                          value={values.product_category}
                          onChange={onChange}
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="order_quantity">
                          Estimated Order Quantity
                        </label>
                        <input
                          id="order_quantity"
                          name="order_quantity"
                          type="text"
                          value={values.order_quantity}
                          onChange={onChange}
                          placeholder="e.g. 500 units"
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="target_price">
                          Target Unit Price / Budget
                        </label>
                        <input
                          id="target_price"
                          name="target_price"
                          type="text"
                          value={values.target_price}
                          onChange={onChange}
                          placeholder="e.g. USD 3–5 per unit"
                          className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Services Needed (select all that apply)</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`text-left px-3 py-2 rounded-lg border text-xs font-medium transition-colors ${
                            values.services_needed.includes(svc)
                              ? 'bg-[#2563eb] border-[#2563eb] text-white'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-[#2563eb] hover:text-[#2563eb]'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5" htmlFor="message">
                      Additional Details / Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Tell us more about your product requirements, certifications needed, timeline, or any other relevant details..."
                      className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#2563eb] hover:bg-[#1a4f8a] disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-slate-500 text-center">
                    By submitting this form you agree to be contacted by SSourcing China regarding your inquiry. We do not share your information with third parties.
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
