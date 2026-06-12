import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  { value: 'full_service', label: 'Full Sourcing Service (end-to-end)' },
  { value: 'sourcing_only', label: 'Supplier Sourcing Only' },
  { value: 'inspection_only', label: 'Quality Inspection Only' },
  { value: 'shipping_only', label: 'Shipping Coordination Only' },
  { value: 'factory_audit', label: 'Factory Audit / Verification' },
  { value: 'not_sure', label: 'Not Sure — Please Advise' },
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  service_needed: '',
  additional_notes: '',
};

function validate(v) {
  if (!v.full_name.trim()) return 'Full name is required.';
  if (!v.email.trim()) return 'Email address is required.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
  if (!v.product_description.trim()) return 'Please describe the product you want to source.';
  if (v.product_description.trim().length < 10) return 'Product description must be at least 10 characters.';
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
            product_description: values.product_description,
            estimated_quantity: values.estimated_quantity || undefined,
            target_price: values.target_price || undefined,
            service_needed: values.service_needed || undefined,
            additional_notes: values.additional_notes || undefined,
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

  const inputClass = 'w-full bg-white border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 text-sm placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-shadow';
  const labelClass = 'block text-sm font-semibold text-neutral-700 mb-1.5';

  return (
    <div>
      {/* Header */}
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Tell us what you need and we will respond within one business day with a plan and a quote.
            No obligation, no upfront payment.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-neutral-900 font-bold text-xl mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5 mb-8">
                {[
                  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
                  { icon: Phone, label: 'Phone / WhatsApp', value: '+86 (0) 20 0000 0000', href: 'tel:+862000000000' },
                  { icon: MapPin, label: 'Location', value: 'Guangzhou, China\n(Operations across all major manufacturing hubs)' },
                  { icon: Clock, label: 'Response Time', value: 'Within 1 business day' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-neutral-500 text-xs font-semibold uppercase tracking-widest mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-neutral-800 text-sm font-medium hover:text-brand-blue transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-neutral-800 text-sm font-medium whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-brand-navy rounded-xl p-5">
                <p className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-2">What Happens Next</p>
                <ul className="flex flex-col gap-2">
                  {[
                    'We review your inquiry within 1 business day',
                    'We send you a tailored sourcing plan and quote',
                    'You decide whether to proceed — no pressure',
                  ].map((step) => (
                    <li key={step} className="flex items-start gap-2 text-white/70 text-sm">
                      <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white border border-neutral-200 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-neutral-900 font-bold text-2xl mb-2">Inquiry Received</h2>
                  <p className="text-neutral-600 leading-relaxed max-w-md mx-auto">
                    Thank you for your sourcing request. We will review your requirements and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white border border-neutral-200 rounded-2xl p-6 md:p-8">
                  <h2 className="text-neutral-900 font-bold text-xl mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mb-6">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass} htmlFor="full_name">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        value={values.full_name}
                        onChange={onChange}
                        placeholder="Your full name"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="you@company.com"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="company">Company Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="country">Country</label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={values.country}
                        onChange={onChange}
                        placeholder="e.g. United States"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className={labelClass} htmlFor="product_description">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={4}
                      value={values.product_description}
                      onChange={onChange}
                      placeholder="Describe the product you want to source — include material, size, function, and any specific requirements."
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass} htmlFor="estimated_quantity">Estimated Quantity</label>
                      <input
                        id="estimated_quantity"
                        name="estimated_quantity"
                        type="text"
                        value={values.estimated_quantity}
                        onChange={onChange}
                        placeholder="e.g. 500 units / month"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="target_price">Target Unit Price</label>
                      <input
                        id="target_price"
                        name="target_price"
                        type="text"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className={labelClass} htmlFor="service_needed">Service Needed</label>
                    <select
                      id="service_needed"
                      name="service_needed"
                      value={values.service_needed}
                      onChange={onChange}
                      className={inputClass}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-6">
                    <label className={labelClass} htmlFor="additional_notes">Additional Notes</label>
                    <textarea
                      id="additional_notes"
                      name="additional_notes"
                      rows={3}
                      value={values.additional_notes}
                      onChange={onChange}
                      placeholder="Any certifications required, packaging preferences, delivery timeline, or other details."
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-gold text-white font-bold py-4 rounded-lg text-base hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Request'}
                  </button>

                  <p className="text-neutral-400 text-xs text-center mt-4">
                    We respond within 1 business day. No commitment required.
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
