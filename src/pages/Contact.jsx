import { useState } from 'react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';

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
  'Electronics',
  'Furniture & Home',
  'Apparel & Textiles',
  'Industrial & Hardware',
  'Toys & Sports',
  'Beauty & Health',
  'Packaging',
  'Other',
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_name: '',
  product_category: '',
  target_quantity: '',
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

  const toggleService = (service) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(service)
        ? v.services_needed.filter((s) => s !== service)
        : [...v.services_needed, service],
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) { setError(err); return; }

    setStatus('submitting');

    try {
      let userId = null;
      try {
        const userRecord = await User.upsert({
          email: values.email,
          name: values.full_name,
          role: 'guest',
        });
        userId = userRecord?.id || null;
      } catch (userErr) {
        console.warn('User upsert failed, continuing without user_id:', userErr);
      }

      const payload = {
        data: {
          full_name: values.full_name,
          email: values.email,
          company: values.company || undefined,
          country: values.country || undefined,
          phone: values.phone || undefined,
          product_name: values.product_name,
          product_category: values.product_category || undefined,
          target_quantity: values.target_quantity || undefined,
          target_price: values.target_price || undefined,
          services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
          message: values.message || undefined,
          status: 'new',
        },
      };

      if (userId) payload.data.user_id = userId;

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert(payload)
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (insertError?.message || 'Submission failed');
        throw new Error(msgs);
      }

      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Inquiry submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ backgroundColor: '#0d2b4e' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#93c5fd' }}>
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tell us what you need and we will respond within 24 hours with a free consultation and sourcing plan.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#0d2b4e' }}>Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f0fb' }}>
                    <MapPin className="w-5 h-5" style={{ color: '#1a4f8a' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: '#0d2b4e' }}>Office Locations</div>
                    <div className="text-slate-600 text-sm">Guangzhou & Yiwu, China</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f0fb' }}>
                    <Mail className="w-5 h-5" style={{ color: '#1a4f8a' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: '#0d2b4e' }}>Email</div>
                    <a href="mailto:info@ssourcing.cn" className="text-slate-600 text-sm hover:text-[#1a4f8a] transition-colors">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f0fb' }}>
                    <Phone className="w-5 h-5" style={{ color: '#1a4f8a' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: '#0d2b4e' }}>Phone / WhatsApp</div>
                    <div className="text-slate-600 text-sm">+86 20 0000 0000</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#e8f0fb' }}>
                    <Clock className="w-5 h-5" style={{ color: '#1a4f8a' }} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-0.5" style={{ color: '#0d2b4e' }}>Response Time</div>
                    <div className="text-slate-600 text-sm">Within 24 hours (business days)</div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-5 border border-slate-200" style={{ backgroundColor: '#f8fafc' }}>
                <h3 className="font-semibold text-sm mb-3" style={{ color: '#0d2b4e' }}>What happens next?</h3>
                <div className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to discuss your needs',
                    'We provide a free sourcing plan and cost estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold text-white" style={{ backgroundColor: '#1a4f8a' }}>
                        {i + 1}
                      </div>
                      <span className="text-slate-600 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#dcfce7' }}>
                    <CheckCircle className="w-8 h-8" style={{ color: '#16a34a' }} />
                  </div>
                  <h2 className="text-2xl font-bold mb-2" style={{ color: '#0d2b4e' }}>Inquiry Received!</h2>
                  <p className="text-slate-600 max-w-md">
                    Thank you for your inquiry. A member of our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-colors"
                    style={{ backgroundColor: '#1a4f8a' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0d2b4e' }}>
                        Full Name <span style={{ color: '#c0392b' }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={values.full_name}
                        onChange={onChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0d2b4e' }}>
                        Business Email <span style={{ color: '#c0392b' }}>*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0d2b4e' }}>Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0d2b4e' }}>Country</label>
                      <input
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={onChange}
                        placeholder="e.g. United States"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0d2b4e' }}>Phone / WhatsApp</label>
                      <input
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 555 000 0000"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0d2b4e' }}>Product Category</label>
                      <select
                        name="product_category"
                        value={values.product_category}
                        onChange={onChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                      >
                        <option value="">Select a category</option>
                        {categoryOptions.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0d2b4e' }}>
                      Product Name / Description <span style={{ color: '#c0392b' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="product_name"
                      value={values.product_name}
                      onChange={onChange}
                      placeholder="e.g. Stainless steel water bottles, 500ml, BPA-free"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0d2b4e' }}>Target Quantity</label>
                      <input
                        type="text"
                        name="target_quantity"
                        value={values.target_quantity}
                        onChange={onChange}
                        placeholder="e.g. 1,000 units per order"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0d2b4e' }}>Target Unit Price</label>
                      <input
                        type="text"
                        name="target_price"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. USD 3–5 per unit"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#0d2b4e' }}>Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                            values.services_needed.includes(service)
                              ? 'text-white border-transparent'
                              : 'text-slate-600 border-slate-300 bg-white hover:border-[#1a4f8a] hover:text-[#1a4f8a]'
                          }`}
                          style={values.services_needed.includes(service) ? { backgroundColor: '#1a4f8a', borderColor: '#1a4f8a' } : {}}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1.5" style={{ color: '#0d2b4e' }}>Additional Details</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      rows={5}
                      placeholder="Tell us more about your requirements, timeline, certifications needed, or any other relevant details..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:border-transparent bg-white resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 p-4 rounded-lg border" style={{ backgroundColor: '#fef2f2', borderColor: '#fecaca' }}>
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#dc2626' }} />
                      <p className="text-sm" style={{ color: '#dc2626' }}>{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-lg text-base font-semibold text-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#c0392b' }}
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-slate-400 text-center">
                    By submitting this form, you agree to be contacted by our team. We do not share your information with third parties.
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
