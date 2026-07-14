import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Sample Management',
];

const categoryOptions = [
  'Electronics',
  'Furniture',
  'Apparel & Textiles',
  'Hardware & Tools',
  'Packaging',
  'Toys & Sports',
  'Home Goods',
  'Beauty & Health',
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
  target_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
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
    if (!values.product_description.trim()) return 'Please describe the product you want to source.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) { setError(validationError); return; }

    setStatus('submitting');

    const payload = {
      full_name: values.full_name,
      email: values.email,
      product_description: values.product_description,
    };
    if (values.company) payload.company = values.company;
    if (values.country) payload.country = values.country;
    if (values.phone) payload.phone = values.phone;
    if (values.product_category) payload.product_category = values.product_category;
    if (values.target_quantity) payload.target_quantity = values.target_quantity;
    if (values.target_price) payload.target_price = values.target_price;
    if (values.services_needed.length > 0) payload.services_needed = values.services_needed;
    if (values.message) payload.message = values.message;
    payload.status = 'new';

    const { data: response, error: submitError } = await client
      .from('Sourcing Inquiries')
      .insert({ data: payload })
      .select()
      .single();

    if (submitError || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : submitError?.message || 'Submission failed. Please try again.';
      setError(msg);
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(initialValues);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-red-300 uppercase tracking-wider mb-3">Get in Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get a Free Sourcing Quote</h1>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan and cost estimate.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-navy mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Office Location</p>
                    <p className="text-sm text-text-muted">Guangzhou, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-brand-red hover:underline">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Phone / WhatsApp</p>
                    <p className="text-sm text-text-muted">+86 20 0000 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-light rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy">Response Time</p>
                    <p className="text-sm text-text-muted">Within 24 hours (business days)</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-light rounded-xl p-5">
                <h3 className="text-sm font-bold text-navy mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a tailored sourcing plan',
                    'We schedule a call to discuss your project',
                    'We begin supplier research',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-dark">
                      <span className="w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h2 className="text-xl font-bold text-navy mb-2">Inquiry Received!</h2>
                  <p className="text-text-muted mb-6">
                    Thank you for reaching out. We'll review your request and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-navy hover:bg-navy-dark text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* Personal Info */}
                  <div>
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Your Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Full Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Business Email <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="jane@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="United States"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div>
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Product Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy bg-white"
                        >
                          <option value="">Select a category</option>
                          {categoryOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Product Description <span className="text-brand-red">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product you want to source — include materials, dimensions, features, certifications needed, etc."
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-dark mb-1">Target Quantity</label>
                          <input
                            type="text"
                            name="target_quantity"
                            value={values.target_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units/month"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-dark mb-1">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-sm font-bold text-navy uppercase tracking-wider mb-4">Services Needed</h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                            values.services_needed.includes(svc)
                              ? 'bg-navy text-white border-navy'
                              : 'bg-white text-text-dark border-gray-200 hover:border-navy hover:text-navy'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-1">Additional Information</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or context that would help us understand your project."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-text-dark focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-red hover:bg-brand-red-dark disabled:opacity-60 text-white font-semibold py-4 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-text-muted text-center">
                    We respond within 24 business hours. Your information is kept confidential.
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
