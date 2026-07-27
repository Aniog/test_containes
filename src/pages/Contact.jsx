import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { CheckCircle, MapPin, Mail, Phone, Clock, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const SERVICES = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Sample Procurement',
];

const CATEGORIES = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Clothing & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts',
  'Other',
];

const initialForm = {
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
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleServiceToggle = (svc) => {
    setForm((f) => ({
      ...f,
      services_needed: f.services_needed.includes(svc)
        ? f.services_needed.filter((s) => s !== svc)
        : [...f.services_needed, svc],
    }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Full name is required.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'A valid email address is required.';
    if (!form.product_description.trim()) return 'Please describe the product you want to source.';
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
      name: form.name,
      email: form.email,
      product_description: form.product_description,
    };
    if (form.company) payload.company = form.company;
    if (form.country) payload.country = form.country;
    if (form.phone) payload.phone = form.phone;
    if (form.product_category) payload.product_category = form.product_category;
    if (form.estimated_quantity) payload.estimated_quantity = form.estimated_quantity;
    if (form.target_price) payload.target_price = form.target_price;
    if (form.services_needed.length > 0) payload.services_needed = form.services_needed;
    if (form.message) payload.message = form.message;

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
    setForm(initialForm);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-900 text-white py-20">
        <div className="container-xl">
          <div className="max-w-2xl">
            <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tell us about your product and sourcing needs. We will review your inquiry and respond within 24 hours with a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="card mb-6">
                <h3 className="text-navy-800 font-bold text-lg mb-5">Contact Information</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Office Locations</p>
                      <p className="text-gray-600 text-sm">Guangzhou & Yiwu, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-navy-600 text-sm hover:text-gold-600 transition-colors">info@ssourcing.cn</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Phone / WhatsApp</p>
                      <p className="text-gray-600 text-sm">+86 (0) 20 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-navy-800 font-medium text-sm">Response Time</p>
                      <p className="text-gray-600 text-sm">Within 24 hours (business days)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card bg-navy-800 border-navy-700">
                <h3 className="text-white font-bold text-base mb-3">What Happens Next?</h3>
                <ol className="flex flex-col gap-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We schedule a free consultation call',
                    'We present a sourcing plan and quote',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="w-5 h-5 bg-gold-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="card text-center py-16">
                  <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
                  <h2 className="text-navy-800 text-2xl font-bold mb-3">Inquiry Received!</h2>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for your inquiry. Our sourcing team will review your request and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-primary"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="card">
                  <h2 className="text-navy-800 text-xl font-bold mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Your Contact Details</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-800 mb-1.5">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-800 mb-1.5">
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-800 mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-800 mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-navy-800 mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Product Details</p>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="block text-sm font-medium text-navy-800 mb-1.5">Product Category</label>
                        <select
                          name="product_category"
                          value={form.product_category}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          {CATEGORIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-800 mb-1.5">
                          Product Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={form.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product you want to source — materials, dimensions, specifications, intended use, etc."
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-navy-800 mb-1.5">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={form.estimated_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units / month"
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-navy-800 mb-1.5">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={form.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Services Needed</p>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                            form.services_needed.includes(svc)
                              ? 'bg-navy-800 text-white border-navy-800'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-navy-400'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-navy-800 mb-1.5">Additional Notes</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context that would help us understand your needs."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-navy-400 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-gold-600 text-white py-3.5 rounded-lg font-bold text-base hover:bg-gold-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-gray-400 text-xs text-center mt-3">
                    We respond within 24 hours. No commitment required.
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
