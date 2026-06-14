import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { CheckCircle, MapPin, Mail, Phone, Clock } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Supplier Negotiation',
];

const categoryOptions = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Industrial Machinery',
  'Packaging & Printing',
  'Toys & Baby Products',
  'Beauty & Personal Care',
  'Auto Parts & Accessories',
  'Sports & Outdoor',
  'Medical & Health Devices',
  'Pet Products',
  'Building & Construction',
  'Other',
];

const timelineOptions = [
  'As soon as possible',
  'Within 1 month',
  '1-3 months',
  '3-6 months',
  'Just exploring',
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
  timeline: '',
  additional_notes: '',
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

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
    if (!values.full_name.trim()) return 'Full name is required.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'A valid email address is required.';
    if (!values.product_description.trim() || values.product_description.length < 10)
      return 'Please provide a product description (at least 10 characters).';
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
          timeline: values.timeline || undefined,
          additional_notes: values.additional_notes || undefined,
        },
      })
      .select()
      .single();

    if (insertError || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed. Please try again.';
      setError(msg);
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(initialValues);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-400 text-sm font-semibold uppercase tracking-widest">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan and fee estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="text-brand-navy font-bold text-lg mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-brand-navy font-medium text-sm">Office Location</div>
                      <div className="text-brand-slate text-sm">Guangzhou, Guangdong, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-brand-navy font-medium text-sm">Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-brand-slate text-sm hover:text-brand-red transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-brand-navy font-medium text-sm">Phone / WhatsApp</div>
                      <div className="text-brand-slate text-sm">+86 (0)20 0000 0000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-brand-navy font-medium text-sm">Response Time</div>
                      <div className="text-brand-slate text-sm">Within 24 hours (business days)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy rounded-xl p-6">
                <h3 className="text-white font-bold text-lg mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We schedule a call or send clarifying questions',
                    'We provide a sourcing plan and fee estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-brand-red rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-blue-200 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-brand-navy mb-2">Inquiry Received!</h2>
                  <p className="text-brand-slate mb-6">
                    Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-brand-red hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 space-y-6">
                  <h2 className="text-xl font-bold text-brand-navy">Sourcing Inquiry Form</h2>

                  {/* Contact details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1">
                        Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={values.full_name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1">
                        Business Email <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        placeholder="e.g. United Kingdom"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1">Phone / WhatsApp</label>
                      <input
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1">Product Category</label>
                      <select
                        name="product_category"
                        value={values.product_category}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors bg-white"
                      >
                        <option value="">Select a category</option>
                        {categoryOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Product description */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-1">
                      Product Description <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the product you want to source: materials, dimensions, specifications, certifications needed, etc."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* Quantity & price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        name="estimated_quantity"
                        value={values.estimated_quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 units, 1000 pcs/month"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-navy mb-1">Target Unit Price</label>
                      <input
                        type="text"
                        name="target_price"
                        value={values.target_price}
                        onChange={handleChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors"
                      />
                    </div>
                  </div>

                  {/* Services needed */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                            values.services_needed.includes(svc)
                              ? 'bg-brand-navy text-white border-brand-navy'
                              : 'bg-white text-brand-slate border-gray-200 hover:border-brand-navy hover:text-brand-navy'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-1">Project Timeline</label>
                    <select
                      name="timeline"
                      value={values.timeline}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors bg-white"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Additional notes */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-1">Additional Notes</label>
                    <textarea
                      name="additional_notes"
                      value={values.additional_notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other information or questions you'd like to share"
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-brand-navy text-sm focus:outline-none focus:border-brand-navy transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-red hover:bg-red-700 disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-xs text-brand-slate text-center">
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
