import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { MapPin, Mail, Globe, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
];

const categoryOptions = [
  'Electronics & Tech',
  'Furniture & Home',
  'Apparel & Textiles',
  'Industrial & Hardware',
  'Health & Beauty',
  'Toys & Gifts',
  'Food & Agriculture',
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
  how_did_you_hear: '',
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleServiceToggle = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return 'Please enter your full name.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_description.trim() || values.product_description.length < 10)
      return 'Please describe the product you want to source (at least 10 characters).';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');

    const { data: response, error } = await client
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
          how_did_you_hear: values.how_did_you_hear || undefined,
        },
      })
      .select()
      .single();

    if (error || response?.success === false) {
      const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (error?.message || 'Submission failed. Please try again.');
      setErrorMsg(msgs);
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(initialValues);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            Tell us what you need to source and we will respond within one business day with a plan and quote — at no cost or obligation.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-900 font-medium text-sm">Office Location</p>
                      <p className="text-slate-500 text-sm">Guangzhou, China</p>
                      <p className="text-slate-400 text-xs mt-0.5">Operations in Shenzhen, Yiwu & Shanghai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-900 font-medium text-sm">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-blue-600 text-sm hover:text-blue-700">info@ssourcing.cn</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-900 font-medium text-sm">Response Time</p>
                      <p className="text-slate-500 text-sm">Within 1 business day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-900 font-medium text-sm">Languages</p>
                      <p className="text-slate-500 text-sm">English · Français · Español · Deutsch</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                <h3 className="text-blue-900 font-semibold mb-3 text-sm">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a tailored sourcing plan',
                    'We schedule a call to discuss your needs',
                    'We begin supplier research at no upfront cost',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                      <span className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white border border-slate-100 rounded-xl p-5 shadow-sm">
                <h3 className="text-slate-900 font-semibold mb-3 text-sm">Why Buyers Trust Us</h3>
                <ul className="space-y-2">
                  {[
                    'On-the-ground team in China',
                    'Transparent fees, no hidden costs',
                    'Independent QC — not paid by suppliers',
                    'Serving 40+ countries since 2016',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-3">Inquiry Received</h2>
                  <p className="text-slate-500 max-w-md mx-auto mb-6">
                    Thank you for your inquiry. Our team will review your request and get back to you within one business day with a sourcing plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm p-8 md:p-10 space-y-6"
                >
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">Sourcing Inquiry Form</h2>
                    <p className="text-slate-500 text-sm">All fields marked * are required. We respond within 1 business day.</p>
                  </div>

                  {/* Name + Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="full_name"
                        value={values.full_name}
                        onChange={handleChange}
                        placeholder="Jane Smith"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                      />
                    </div>
                  </div>

                  {/* Company + Country */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        placeholder="United Kingdom"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Product Category */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Product Category</label>
                    <select
                      name="product_category"
                      value={values.product_category}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
                    >
                      <option value="">Select a category...</option>
                      {categoryOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Product Description */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Product Description *
                    </label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the product you want to source — include material, dimensions, function, certifications needed, and any other relevant specifications."
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                      required
                    />
                  </div>

                  {/* Quantity + Price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        name="estimated_quantity"
                        value={values.estimated_quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 units / month"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Target Price</label>
                      <input
                        type="text"
                        name="target_price"
                        value={values.target_price}
                        onChange={handleChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                            values.services_needed.includes(svc)
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Additional Information</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or context that would help us understand your needs."
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm resize-none"
                    />
                  </div>

                  {/* How did you hear */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">How did you find us?</label>
                    <input
                      type="text"
                      name="how_did_you_hear"
                      value={values.how_did_you_hear}
                      onChange={handleChange}
                      placeholder="e.g. Google, LinkedIn, referral..."
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>

                  {/* Error */}
                  {(status === 'error' || errorMsg) && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{errorMsg}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3.5 rounded-lg transition-colors text-base"
                  >
                    {status === 'submitting' ? 'Sending Inquiry…' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-slate-400 text-xs text-center">
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
