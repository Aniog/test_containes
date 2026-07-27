import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock, CheckCircle, Globe, MessageSquare } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_category: '',
  service_needed: '',
  estimated_order_value: '',
  product_description: '',
  timeline: '',
  how_did_you_hear: '',
};

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Décor',
  'Apparel & Textiles',
  'Hardware & Tools',
  'Packaging & Printing',
  'Home & Kitchen',
  'Sports & Outdoor',
  'Beauty & Personal Care',
  'Toys & Baby Products',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Full Sourcing Package',
  'Not Sure Yet',
];

const orderValues = [
  'Under $5,000',
  '$5,000 – $20,000',
  '$20,000 – $100,000',
  'Over $100,000',
  'Not sure yet',
];

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.';
    if (!values.email.trim()) return 'Email address is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_description.trim()) return 'Please describe the product you want to source.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    try {
      const payload = {
        full_name: values.full_name,
        email: values.email,
        product_description: values.product_description,
      };
      if (values.company) payload.company = values.company;
      if (values.country) payload.country = values.country;
      if (values.phone) payload.phone = values.phone;
      if (values.product_category) payload.product_category = values.product_category;
      if (values.service_needed) payload.service_needed = values.service_needed;
      if (values.estimated_order_value) payload.estimated_order_value = values.estimated_order_value;
      if (values.timeline) payload.timeline = values.timeline;
      if (values.how_did_you_hear) payload.how_did_you_hear = values.how_did_you_hear;

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({ data: payload })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed. Please try again.';
        setError(msg);
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  const inputClass = 'w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white text-sm';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div>
      {/* Header */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-gold-accent uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us what you need and we will respond within 24 hours with a tailored
              sourcing plan and cost estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Office Location</p>
                    <p className="text-gray-500 text-sm">Shenzhen, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-navy hover:underline text-sm">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">WeChat / WhatsApp</p>
                    <p className="text-gray-500 text-sm">Available on request</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Response Time</p>
                    <p className="text-gray-500 text-sm">Within 24 hours (business days)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-navy flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Languages</p>
                    <p className="text-gray-500 text-sm">English · Français · Español · Deutsch</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a tailored sourcing plan',
                    'We schedule a call to discuss your needs',
                    'We begin supplier research',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 rounded-full bg-navy text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Received!</h2>
                  <p className="text-gray-500 mb-6">
                    Thank you for reaching out. We will review your inquiry and get back to you
                    within 24 hours with a sourcing plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-primary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Sourcing Inquiry Form</h2>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass} htmlFor="full_name">
                        Full Name <span className="text-china-red">*</span>
                      </label>
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        value={values.full_name}
                        onChange={onChange}
                        placeholder="Jane Smith"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">
                        Email Address <span className="text-china-red">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="jane@company.com"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="company">Company / Business Name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Acme Trading Ltd."
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
                        placeholder="United States"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">Phone / WhatsApp</label>
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 555 000 0000"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Sourcing Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass} htmlFor="product_category">Product Category</label>
                      <select
                        id="product_category"
                        name="product_category"
                        value={values.product_category}
                        onChange={onChange}
                        className={inputClass}
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="service_needed">Service Needed</label>
                      <select
                        id="service_needed"
                        name="service_needed"
                        value={values.service_needed}
                        onChange={onChange}
                        className={inputClass}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="estimated_order_value">Estimated Order Value</label>
                      <select
                        id="estimated_order_value"
                        name="estimated_order_value"
                        value={values.estimated_order_value}
                        onChange={onChange}
                        className={inputClass}
                      >
                        <option value="">Select a range</option>
                        {orderValues.map((v) => (
                          <option key={v} value={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="timeline">Desired Timeline</label>
                      <input
                        id="timeline"
                        name="timeline"
                        type="text"
                        value={values.timeline}
                        onChange={onChange}
                        placeholder="e.g. Delivery by October 2026"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className={labelClass} htmlFor="product_description">
                      Product Description <span className="text-china-red">*</span>
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={5}
                      value={values.product_description}
                      onChange={onChange}
                      placeholder="Describe the product you want to source: name, specifications, materials, quantity, target price, any certifications required, and any other relevant details."
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className={labelClass} htmlFor="how_did_you_hear">How Did You Find Us?</label>
                    <input
                      id="how_did_you_hear"
                      name="how_did_you_hear"
                      type="text"
                      value={values.how_did_you_hear}
                      onChange={onChange}
                      placeholder="Google, LinkedIn, referral, etc."
                      className={inputClass}
                    />
                  </div>

                  {error && (
                    <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-china-red hover:bg-china-red-dark disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition-colors text-base"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-4">
                    We respond within 24 hours on business days. Your information is kept confidential.
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
