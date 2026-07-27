import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Trade Compliance',
];

const categoryOptions = [
  'Electronics',
  'Furniture & Home',
  'Apparel & Textiles',
  'Packaging',
  'Hardware & Tools',
  'Beauty & Personal Care',
  'Toys & Baby Products',
  'Sports & Outdoors',
  'Other',
];

const initialValues = {
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

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'A valid email address is required.';
    if (!values.product_description.trim()) return 'Please describe the product you want to source.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
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
            phone: values.phone || undefined,
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
      <section className="bg-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Tell us about your product and sourcing goals. Our team will review your inquiry
              and respond within 24 hours with a tailored plan and initial quote.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-navy mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy mb-0.5">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 text-sm hover:text-navy transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy mb-0.5">Phone / WhatsApp</div>
                    <span className="text-slate-600 text-sm">+86 (0) 20 0000 0000</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy mb-0.5">Location</div>
                    <span className="text-slate-600 text-sm">Guangzhou, China<br />Operations across all major manufacturing hubs</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy mb-0.5">Response Time</div>
                    <span className="text-slate-600 text-sm">Within 24 hours on business days</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-100 p-6">
                <h3 className="text-navy font-semibold mb-3">What Happens Next?</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We identify suitable suppliers from our network',
                    'You receive a tailored sourcing plan and quote',
                    'We begin work once you confirm',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl border border-slate-100 p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-3">Inquiry Received</h2>
                  <p className="text-slate-600 mb-6">
                    Thank you for your inquiry. Our team will review your request and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-steel font-semibold hover:text-navy transition-colors text-sm inline-flex items-center gap-1"
                  >
                    Submit another inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-xl border border-slate-100 p-8">
                  <h2 className="text-xl font-bold text-navy mb-6">Sourcing Inquiry Form</h2>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-china-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={values.full_name}
                        onChange={onChange}
                        placeholder="Your full name"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Business Email <span className="text-china-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="you@company.com"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={onChange}
                        placeholder="e.g. United States"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 555 000 0000"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category</label>
                      <select
                        name="product_category"
                        value={values.product_category}
                        onChange={onChange}
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors bg-white"
                      >
                        <option value="">Select a category</option>
                        {categoryOptions.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Product Description */}
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Description <span className="text-china-red">*</span>
                    </label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={onChange}
                      rows={4}
                      placeholder="Describe the product you want to source — include specifications, materials, dimensions, or any reference products."
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Quantity & Price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        name="estimated_quantity"
                        value={values.estimated_quantity}
                        onChange={onChange}
                        placeholder="e.g. 500 units / month"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Price (per unit)</label>
                      <input
                        type="text"
                        name="target_price"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. USD 5–8"
                        className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                            values.services_needed.includes(svc)
                              ? 'bg-navy text-white border-navy'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-navy hover:text-navy'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Information</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      rows={3}
                      placeholder="Any other details, questions, or requirements."
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg px-4 py-3 mb-5">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-china-red hover:bg-red-700 disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-slate-400 text-center mt-3">
                    We respond within 24 hours. Your information is kept confidential.
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
