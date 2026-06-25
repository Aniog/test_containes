import { useState } from 'react';
import { MapPin, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Compliance & Certification',
];

const categoryOptions = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Machinery & Equipment',
  'Plastics & Packaging',
  'Hardware & Tools',
  'Health, Beauty & Personal Care',
  'Toys, Sports & Outdoor',
  'Automotive Parts & Accessories',
  'Other',
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  product_name: '',
  product_category: '',
  estimated_quantity: '',
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

  const handleServiceToggle = (service) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(service)
        ? v.services_needed.filter((s) => s !== service)
        : [...v.services_needed, service],
    }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.';
    if (!values.email.trim()) return 'Email address is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_name.trim()) return 'Product name is required.';
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

    const payload = {
      full_name: values.full_name,
      email: values.email,
      product_name: values.product_name,
      status: 'new',
    };
    if (values.company) payload.company = values.company;
    if (values.country) payload.country = values.country;
    if (values.product_category) payload.product_category = values.product_category;
    if (values.estimated_quantity) payload.estimated_quantity = values.estimated_quantity;
    if (values.target_price) payload.target_price = values.target_price;
    if (values.services_needed.length > 0) payload.services_needed = values.services_needed;
    if (values.message) payload.message = values.message;

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
      {/* Page Header */}
      <div className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[#e8621a] font-semibold text-sm uppercase tracking-wider mb-3">Contact</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Tell us what you need and we'll respond within 24 hours with a clear assessment and next steps.
          </p>
        </div>
      </div>

      <section className="py-20 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h2 className="text-lg font-bold text-[#0d2340] mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#e8621a] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[#0d2340] text-sm">Office Location</div>
                      <div className="text-gray-500 text-sm">Guangzhou, China</div>
                      <div className="text-gray-400 text-xs mt-0.5">Operations across Guangdong, Zhejiang, Jiangsu</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#e8621a] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[#0d2340] text-sm">Email</div>
                      <a href="mailto:info@ssourcing.cn" className="text-[#1a4f8a] text-sm hover:underline">info@ssourcing.cn</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#e8621a] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-medium text-[#0d2340] text-sm">Response Time</div>
                      <div className="text-gray-500 text-sm">Within 24 business hours</div>
                      <div className="text-gray-400 text-xs mt-0.5">Mon–Fri, 9:00–18:00 CST</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a4f8a] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to clarify requirements',
                    'We provide a free sourcing assessment with supplier options',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-blue-100">
                      <span className="w-5 h-5 bg-[#e8621a] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
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
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#0d2340] mb-3">Inquiry Received!</h2>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for your sourcing inquiry. A member of our team will review your request and contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 bg-[#1a4f8a] hover:bg-[#0d2340] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                  <h2 className="text-xl font-bold text-[#0d2340] mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="e.g. United States"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Product Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">
                          Product Name / Description <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="product_name"
                          value={values.product_name}
                          onChange={handleChange}
                          placeholder="e.g. LED desk lamp with USB charging port"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          {categoryOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Estimated Quantity</label>
                        <input
                          type="text"
                          name="estimated_quantity"
                          value={values.estimated_quantity}
                          onChange={handleChange}
                          placeholder="e.g. 5,000 units"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Target Unit Price</label>
                        <input
                          type="text"
                          name="target_price"
                          value={values.target_price}
                          onChange={handleChange}
                          placeholder="e.g. USD 8–12 per unit"
                          className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Services Needed</h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                            values.services_needed.includes(service)
                              ? 'bg-[#1a4f8a] text-white border-[#1a4f8a]'
                              : 'bg-white text-gray-700 border-slate-300 hover:border-[#1a4f8a] hover:text-[#1a4f8a]'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Additional Details</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any additional specifications, certifications required, timeline, or questions..."
                      className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#e8621a] hover:bg-[#c9521a] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-lg transition-colors text-base"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-gray-400 text-xs text-center mt-4">
                    We respond within 24 business hours. No commitment required.
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
