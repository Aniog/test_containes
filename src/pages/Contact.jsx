import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { CheckCircle, Mail, Phone, MapPin, Clock, AlertCircle } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productCategories = [
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
    if (!values.name.trim()) return 'Please enter your name.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_description.trim()) return 'Please describe the product you want to source.';
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
      name: values.name,
      email: values.email,
      product_description: values.product_description,
    };
    if (values.company) payload.company = values.company;
    if (values.country) payload.country = values.country;
    if (values.phone) payload.phone = values.phone;
    if (values.product_category) payload.product_category = values.product_category;
    if (values.estimated_quantity) payload.estimated_quantity = values.estimated_quantity;
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
      console.error('Inquiry submission error:', msg);
      return;
    }

    console.log('Inquiry submitted successfully:', response?.data?.id);
    setStatus('success');
    setValues(initialValues);
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-blue py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-brand-gold text-xs font-bold uppercase tracking-widest mb-3">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Tell us what you need. Our team will review your requirements and respond within 24 hours with a tailored sourcing plan.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-brand-bg py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-brand-dark mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-brand-dark font-semibold text-sm">Email</p>
                    <a href="mailto:info@ssourcing.cn" className="text-gray-500 text-sm hover:text-brand-blue transition-colors">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-brand-dark font-semibold text-sm">Phone / WhatsApp</p>
                    <p className="text-gray-500 text-sm">+86 (0) 20 0000 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-brand-dark font-semibold text-sm">Location</p>
                    <p className="text-gray-500 text-sm">Guangzhou, China<br />(Operations across China)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-brand-dark font-semibold text-sm">Response Time</p>
                    <p className="text-gray-500 text-sm">Within 24 hours<br />(Mon–Fri, China time)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <h3 className="text-brand-dark font-bold text-sm mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We ask any clarifying questions',
                    'We present a sourcing plan and fee quote',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-500 text-sm">
                      <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-dark mb-3">Inquiry Received!</h2>
                  <p className="text-gray-500 leading-relaxed max-w-md mx-auto mb-6">
                    Thank you for your sourcing inquiry. Our team will review your requirements and get back to you within 24 hours with a tailored sourcing plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-brand-blue font-semibold text-sm hover:text-brand-red transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10">
                  <h2 className="text-xl font-bold text-brand-dark mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                      <AlertCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <p className="text-brand-red text-sm">{error}</p>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">Your Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Full Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Business Email <span className="text-brand-red">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={values.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1.5">Country</label>
                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone / WhatsApp</label>
                        <input
                          id="phone"
                          name="phone"
                          type="text"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">Product Requirements</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="product_category" className="block text-sm font-medium text-gray-700 mb-1.5">Product Category</label>
                        <select
                          id="product_category"
                          name="product_category"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all bg-white"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="product_description" className="block text-sm font-medium text-gray-700 mb-1.5">
                          Product Description <span className="text-brand-red">*</span>
                        </label>
                        <textarea
                          id="product_description"
                          name="product_description"
                          value={values.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product you want to source — include specifications, materials, dimensions, and any quality requirements."
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none"
                          required
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="estimated_quantity" className="block text-sm font-medium text-gray-700 mb-1.5">Estimated Quantity</label>
                          <input
                            id="estimated_quantity"
                            name="estimated_quantity"
                            type="text"
                            value={values.estimated_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units / month"
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="target_price" className="block text-sm font-medium text-gray-700 mb-1.5">Target Unit Price</label>
                          <input
                            id="target_price"
                            name="target_price"
                            type="text"
                            value={values.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="text-brand-dark font-semibold text-sm uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">Services Needed</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {serviceOptions.map((service) => (
                        <label
                          key={service}
                          className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all text-sm ${
                            values.services_needed.includes(service)
                              ? 'border-brand-blue bg-blue-50 text-brand-blue'
                              : 'border-gray-200 text-gray-600 hover:border-gray-300'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={values.services_needed.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                            values.services_needed.includes(service) ? 'bg-brand-blue border-brand-blue' : 'border-gray-300'
                          }`}>
                            {values.services_needed.includes(service) && (
                              <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </div>
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Additional Information</label>
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, special requirements, or questions for our team."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-red hover:bg-red-700 disabled:bg-red-300 text-white font-semibold py-3.5 rounded-lg transition-colors text-base shadow-md"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-gray-400 text-xs text-center mt-3">
                    We respond within 24 hours. No obligation — just a free consultation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '24h', label: 'Response Time' },
              { value: '500+', label: 'Verified Suppliers' },
              { value: '40+', label: 'Countries Served' },
              { value: '100%', label: 'Transparent Pricing' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="text-2xl font-bold text-brand-blue mb-1">{value}</div>
                <div className="text-gray-500 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
