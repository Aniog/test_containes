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
  'Private Label / OEM',
];

const categoryOptions = [
  'Electronics',
  'Furniture & Home',
  'Apparel & Textiles',
  'Hardware & Tools',
  'Toys & Baby Products',
  'Packaging & Printing',
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
  additional_notes: '',
};

function validate(v) {
  if (!v.full_name.trim()) return 'Full name is required.';
  if (!v.email.trim()) return 'Email address is required.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
  if (!v.product_description.trim()) return 'Product description is required.';
  if (v.product_description.trim().length < 10) return 'Please provide more detail about your product (at least 10 characters).';
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

  const onServiceToggle = (service) => {
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

    const validationError = validate(values);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    try {
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
            target_quantity: values.target_quantity || undefined,
            target_price: values.target_price || undefined,
            services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
            additional_notes: values.additional_notes || undefined,
            status: 'new',
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (insertError?.message || 'Submission failed.');
        setError(msgs);
        setStatus('error');
        return;
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
      <section className="bg-navy-900 text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-gold-400 font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tell us what you need and we'll respond within 24 hours with a free sourcing assessment and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Office Location</p>
                    <p className="text-gray-500 text-sm">Guangzhou, China</p>
                    <p className="text-gray-400 text-xs mt-0.5">Operations across Shenzhen, Yiwu & Ningbo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Email</p>
                    <a href="mailto:info@ssourcing.cn" className="text-navy-800 text-sm hover:text-navy-600">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Phone / WhatsApp</p>
                    <p className="text-gray-500 text-sm">+86 20 1234 5678</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-navy-800" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Response Time</p>
                    <p className="text-gray-500 text-sm">Within 24 hours (business days)</p>
                    <p className="text-gray-400 text-xs mt-0.5">China Standard Time (UTC+8)</p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-800 rounded-xl p-5 text-white">
                <h3 className="font-semibold mb-3 text-sm">What Happens Next?</h3>
                <ol className="flex flex-col gap-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a free sourcing assessment',
                    'We schedule a call to discuss your project',
                    'We begin sourcing with no upfront commitment',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-xs">
                      <span className="w-5 h-5 bg-gold-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
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
                <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Received!</h2>
                  <p className="text-gray-500 mb-6">
                    Thank you for your inquiry. We'll review your requirements and get back to you within 24 hours with a free sourcing assessment.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-navy-800 hover:bg-navy-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide mb-4">Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={onChange}
                          placeholder="John Smith"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="john@company.com"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Your Company Ltd."
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={onChange}
                          placeholder="United Kingdom"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+44 7700 900000"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide mb-4">Product Requirements</h3>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={onChange}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent bg-white"
                        >
                          <option value="">Select a category...</option>
                          {categoryOptions.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={onChange}
                          rows={4}
                          placeholder="Describe the product you want to source — include specifications, materials, dimensions, certifications required, and any other relevant details."
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Target Quantity</label>
                          <input
                            type="text"
                            name="target_quantity"
                            value={values.target_quantity}
                            onChange={onChange}
                            placeholder="e.g. 500 units / month"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={onChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 text-sm uppercase tracking-wide mb-4">Services Needed</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => onServiceToggle(service)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium border transition-colors text-left ${
                            values.services_needed.includes(service)
                              ? 'bg-navy-800 text-white border-navy-800'
                              : 'bg-white text-gray-600 border-gray-300 hover:border-navy-800 hover:text-navy-800'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea
                      name="additional_notes"
                      value={values.additional_notes}
                      onChange={onChange}
                      rows={3}
                      placeholder="Any other information that would help us understand your project..."
                      className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-navy-800 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-gold-600 hover:bg-gold-500 disabled:opacity-60 text-white font-bold py-4 rounded-lg text-base transition-colors"
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
