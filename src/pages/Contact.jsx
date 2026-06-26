import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed. Please try again.';
};

const PRODUCT_CATEGORIES = [
  'Electronics & Electrical',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Hardware & Tools',
  'Packaging & Printing',
  'Toys & Baby Products',
  'Health & Beauty',
  'Automotive & Parts',
  'Sports & Outdoor',
  'Other',
];

const SERVICES = [
  'Full Sourcing Service',
  'Supplier Sourcing Only',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Not Sure',
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
  service_needed: '',
  message: '',
};

const Contact = () => {
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
    if (!values.product_description.trim()) return 'Product description is required.';
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
        data: {
          full_name: values.full_name,
          email: values.email,
          company: values.company || undefined,
          country: values.country || undefined,
          product_category: values.product_category || undefined,
          product_description: values.product_description,
          estimated_quantity: values.estimated_quantity || undefined,
          target_price: values.target_price || undefined,
          service_needed: values.service_needed || undefined,
          message: values.message || undefined,
        },
      };

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert(payload)
        .select()
        .single();

      if (insertError || response?.success === false) {
        setError(getErrorMessage(response, insertError));
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Inquiry submission error:', err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  const inputClass = 'w-full px-4 py-3 rounded-lg border border-[#e2e8f0] text-[#1a2e4a] bg-white focus:outline-none focus:ring-2 focus:ring-[#2980b9] focus:border-transparent text-sm';
  const labelClass = 'block text-sm font-medium mb-1.5 text-[#1a2e4a]';

  return (
    <div>
      {/* Header */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#1a2e4a' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4" style={{ backgroundColor: 'rgba(192,57,43,0.2)', color: '#e88a80' }}>
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Tell us what you need to source. We'll review your inquiry and respond within 24 hours with a sourcing plan.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f4f6f9' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0] mb-6">
                <h3 className="text-lg font-semibold mb-4" style={{ color: '#1a2e4a' }}>Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1a2e4a' }}>Office Locations</div>
                      <div className="text-sm" style={{ color: '#4a5568' }}>Shenzhen & Yiwu, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1a2e4a' }}>Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm no-underline hover:underline" style={{ color: '#2980b9' }}>
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1a2e4a' }}>Phone / WhatsApp</div>
                      <div className="text-sm" style={{ color: '#4a5568' }}>+86 755 0000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} />
                    <div>
                      <div className="text-sm font-medium" style={{ color: '#1a2e4a' }}>Response Time</div>
                      <div className="text-sm" style={{ color: '#4a5568' }}>Within 24 hours (business days)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-[#e2e8f0]">
                <h3 className="text-base font-semibold mb-3" style={{ color: '#1a2e4a' }}>What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a free sourcing plan with supplier options',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white mt-0.5" style={{ backgroundColor: '#c0392b' }}>
                        {i + 1}
                      </span>
                      <span className="text-sm" style={{ color: '#4a5568' }}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl p-10 shadow-sm border border-[#e2e8f0] text-center">
                  <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: '#27ae60' }} />
                  <h2 className="text-2xl font-bold mb-3" style={{ color: '#1a2e4a' }}>Inquiry Received!</h2>
                  <p className="text-base mb-6" style={{ color: '#4a5568' }}>
                    Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours with a sourcing plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-[#c0392b] hover:bg-[#a93226] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-[#e2e8f0]">
                  <h2 className="text-xl font-bold mb-6" style={{ color: '#1a2e4a' }}>Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-3 p-4 rounded-lg mb-6" style={{ backgroundColor: '#fef2f2', border: '1px solid #fecaca' }}>
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#c0392b' }} />
                      <p className="text-sm" style={{ color: '#c0392b' }}>{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass} htmlFor="full_name">
                        Full Name <span style={{ color: '#c0392b' }}>*</span>
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
                        Business Email <span style={{ color: '#c0392b' }}>*</span>
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
                        {PRODUCT_CATEGORIES.map((c) => (
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
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass} htmlFor="product_description">
                        Product Description <span style={{ color: '#c0392b' }}>*</span>
                      </label>
                      <textarea
                        id="product_description"
                        name="product_description"
                        value={values.product_description}
                        onChange={onChange}
                        rows={4}
                        placeholder="Describe the product you want to source — material, dimensions, certifications needed, etc."
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="estimated_quantity">Estimated Quantity</label>
                      <input
                        id="estimated_quantity"
                        name="estimated_quantity"
                        type="text"
                        value={values.estimated_quantity}
                        onChange={onChange}
                        placeholder="e.g. 500 units, 1000–2000 pcs"
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
                    <div className="md:col-span-2">
                      <label className={labelClass} htmlFor="message">Additional Information</label>
                      <textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={onChange}
                        rows={3}
                        placeholder="Any other details, questions, or requirements..."
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full md:w-auto bg-[#c0392b] hover:bg-[#a93226] disabled:opacity-60 text-white font-semibold px-8 py-3 rounded-lg text-sm transition-colors cursor-pointer"
                    >
                      {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                    </button>
                    <p className="mt-3 text-xs" style={{ color: '#718096' }}>
                      We respond within 24 hours. No commitment required.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
