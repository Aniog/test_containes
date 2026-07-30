import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const categories = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Apparel & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts',
  'Other',
];

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Sample Procurement',
];

const initialValues = {
  name: '',
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

  const onServiceToggle = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }));
  };

  const validate = () => {
    if (!values.name.trim()) return 'Full name is required.';
    if (!values.email.trim()) return 'Email address is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
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
      const payload = {
        name: values.name,
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
      };

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
      console.error('Inquiry submission error:', err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">Get in Touch</p>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-white">Get a Free Sourcing Quote</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tell us what you need and we'll respond within 24 hours with a free consultation and initial assessment.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl border border-brand-border p-6">
                <h3 className="text-brand-navy font-bold text-lg mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-brand-navy text-sm font-medium">Office</p>
                      <p className="text-brand-muted text-sm">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-brand-navy text-sm font-medium">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-brand-blue text-sm hover:text-brand-navy">info@ssourcing.cn</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-brand-navy text-sm font-medium">Phone / WhatsApp</p>
                      <a href="tel:+8620123456789" className="text-brand-blue text-sm hover:text-brand-navy">+86 20 1234 5678</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-brand-navy text-sm font-medium">Response Time</p>
                      <p className="text-brand-muted text-sm">Within 24 hours (business days)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-blue rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to clarify requirements',
                    'We provide a free initial assessment and service proposal',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-100">
                      <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl border border-brand-border p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-extrabold text-brand-navy mb-3">Inquiry Received</h2>
                  <p className="text-brand-muted text-lg mb-6">
                    Thank you for your inquiry. A member of our team will contact you within 24 hours to discuss your sourcing requirements.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-brand-blue text-white px-6 py-2.5 rounded font-semibold hover:bg-brand-navy transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-xl border border-brand-border p-6 lg:p-8 space-y-5">
                  <h2 className="text-xl font-extrabold text-brand-navy mb-1">Sourcing Inquiry Form</h2>
                  <p className="text-brand-muted text-sm mb-4">Fields marked * are required.</p>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1">Full Name *</label>
                      <input
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        placeholder="Your full name"
                        className="w-full px-3 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1">Business Email *</label>
                      <input
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="you@company.com"
                        className="w-full px-3 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  {/* Company + Country */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1">Company Name</label>
                      <input
                        name="company"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                        className="w-full px-3 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1">Country</label>
                      <input
                        name="country"
                        value={values.country}
                        onChange={onChange}
                        placeholder="Your country"
                        className="w-full px-3 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  {/* Phone + Category */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1">Phone / WhatsApp</label>
                      <input
                        name="phone"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 555 000 0000"
                        className="w-full px-3 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1">Product Category</label>
                      <select
                        name="product_category"
                        value={values.product_category}
                        onChange={onChange}
                        className="w-full px-3 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
                      >
                        <option value="">Select a category</option>
                        {categories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Product description */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-1">Product Description *</label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={onChange}
                      rows={4}
                      placeholder="Describe the product you want to source — materials, dimensions, specifications, intended use, etc."
                      className="w-full px-3 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                    />
                  </div>

                  {/* Quantity + Price */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1">Estimated Quantity</label>
                      <input
                        name="estimated_quantity"
                        value={values.estimated_quantity}
                        onChange={onChange}
                        placeholder="e.g. 500 units / month"
                        className="w-full px-3 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1">Target Unit Price</label>
                      <input
                        name="target_price"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full px-3 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => onServiceToggle(svc)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                            values.services_needed.includes(svc)
                              ? 'bg-brand-blue text-white border-brand-blue'
                              : 'bg-white text-brand-navy border-brand-border hover:border-brand-blue'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-1">Additional Notes</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context that would help us assist you."
                      className="w-full px-3 py-2.5 border border-brand-border rounded text-brand-navy text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-accent text-white py-3.5 rounded font-bold text-base hover:bg-amber-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-brand-muted text-xs text-center">
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
