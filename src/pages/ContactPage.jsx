import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import SectionLabel from '@/components/SectionLabel';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Sample Procurement',
];

const CATEGORIES = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Clothing & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts & Accessories',
  'Other',
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
};

function validate(v) {
  if (!v.full_name.trim()) return 'Full name is required.';
  if (!v.email.trim()) return 'Email address is required.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
  if (!v.product_description.trim()) return 'Please describe the product(s) you want to source.';
  return null;
}

export default function ContactPage() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(service)
        ? v.services_needed.filter((s) => s !== service)
        : [...v.services_needed, service],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate(values);
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');

    try {
      const { data: response, error: createError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            full_name: values.full_name,
            email: values.email,
            company: values.company || undefined,
            country: values.country || undefined,
            product_category: values.product_category || undefined,
            product_description: values.product_description,
            estimated_quantity: values.estimated_quantity || undefined,
            target_price: values.target_price || undefined,
            services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
            message: values.message || undefined,
            status: 'new',
          },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (createError?.message || 'Submission failed.');
        setErrorMsg(msgs);
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Contact form error:', err);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <SectionLabel className="text-red-400">Get in Touch</SectionLabel>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tell us about your sourcing project and we'll respond within 24 hours with a tailored plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-navy-900 mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm">Email</p>
                    <a href="mailto:info@ssourcing.cn" className="text-slate-600 text-sm hover:text-red-600 transition-colors">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm">Phone / WhatsApp</p>
                    <a href="tel:+8621000000" className="text-slate-600 text-sm hover:text-red-600 transition-colors">+86 21 0000 0000</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm">Location</p>
                    <p className="text-slate-600 text-sm">Shanghai, China<br />Serving buyers worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-navy-900 font-semibold text-sm">Response Time</p>
                    <p className="text-slate-600 text-sm">Within 24 business hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-900 rounded-xl p-6 text-white">
                <h3 className="font-bold text-base mb-3">What Happens Next?</h3>
                <ol className="flex flex-col gap-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to clarify requirements',
                    'We provide a tailored sourcing plan and quote',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-5 h-5 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl border border-slate-200 p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy-900 mb-3">Inquiry Received!</h2>
                  <p className="text-slate-600 mb-6 max-w-md mx-auto">
                    Thank you for reaching out. A member of our sourcing team will review your inquiry and get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-8">
                  <h2 className="text-xl font-bold text-navy-900 mb-6">Sourcing Inquiry Form</h2>

                  {/* Error */}
                  {errorMsg && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-widest mb-4 pb-2 border-b border-slate-100">Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">
                          Full Name <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">
                          Business Email <span className="text-red-600">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="e.g. United States"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-widest mb-4 pb-2 border-b border-slate-100">Product Details</h3>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-navy-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          {CATEGORIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-900 mb-1.5">
                          Product Description <span className="text-red-600">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product(s) you want to source — materials, dimensions, specifications, intended use, etc."
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy-900 mb-1.5">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={values.estimated_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units / month"
                            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-900 mb-1.5">Target Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-navy-900 uppercase tracking-widest mb-4 pb-2 border-b border-slate-100">Services Needed</h3>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((service) => {
                        const selected = values.services_needed.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all ${
                              selected
                                ? 'bg-red-600 border-red-600 text-white'
                                : 'bg-white border-slate-300 text-slate-700 hover:border-red-400 hover:text-red-600'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-navy-900 mb-1.5">Additional Notes</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context that would help us understand your project."
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-navy-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3.5 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-slate-400 text-xs text-center mt-3">
                    No obligation. We'll review your inquiry and respond within 24 hours.
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
