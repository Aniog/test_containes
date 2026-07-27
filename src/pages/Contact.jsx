import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
];

const categoryOptions = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Apparel & Textiles',
  'Industrial Machinery',
  'Packaging & Printing',
  'Health & Beauty',
  'Toys & Baby Products',
  'Sports & Outdoor',
  'Automotive Parts',
  'Other',
];

const timelineOptions = [
  'As soon as possible',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'No fixed timeline',
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
  timeline: '',
  additional_notes: '',
};

const Contact = () => {
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
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'A valid email address is required.';
    if (!values.product_description.trim() || values.product_description.length < 10) return 'Please describe your product (at least 10 characters).';
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

    try {
      const payload = {
        full_name: values.full_name,
        email: values.email,
        product_description: values.product_description,
        ...(values.company && { company: values.company }),
        ...(values.country && { country: values.country }),
        ...(values.phone && { phone: values.phone }),
        ...(values.product_category && { product_category: values.product_category }),
        ...(values.target_quantity && { target_quantity: values.target_quantity }),
        ...(values.target_price && { target_price: values.target_price }),
        ...(values.services_needed.length > 0 && { services_needed: values.services_needed }),
        ...(values.timeline && { timeline: values.timeline }),
        ...(values.additional_notes && { additional_notes: values.additional_notes }),
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
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-white/75 text-lg leading-relaxed">
              Tell us what you need. We'll review your requirements and respond within 24 hours with a tailored sourcing plan and fee estimate.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl border border-neutral-200 p-6">
                <h3 className="font-bold text-neutral-900 mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">Office Location</p>
                      <p className="text-neutral-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-brand-blue hover:text-brand-navy transition-colors">info@ssourcing.cn</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">Phone / WhatsApp</p>
                      <p className="text-neutral-600">+86 20 0000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-brand-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-neutral-800">Response Time</p>
                      <p className="text-neutral-600">Within 24 hours (business days)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-navy rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a tailored sourcing plan',
                    'We agree on scope and fees upfront',
                    'We start sourcing your product',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl border border-neutral-200 p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-neutral-900 mb-2">Inquiry Received!</h2>
                  <p className="text-neutral-600 mb-6">
                    Thank you for your sourcing inquiry. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-brand-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-navy transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 space-y-6">
                  <h2 className="text-xl font-bold text-neutral-900">Sourcing Inquiry Form</h2>

                  {/* Contact Details */}
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Full Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Business Email <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="e.g. United States"
                          className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">Product Requirements</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          {categoryOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-1">
                          Product Description <span className="text-brand-red">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product you want to source — include specifications, materials, dimensions, certifications needed, etc."
                          className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Target Quantity / MOQ</label>
                          <input
                            type="text"
                            name="target_quantity"
                            value={values.target_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units"
                            className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-1">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">Services Needed</h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                            values.services_needed.includes(service)
                              ? 'bg-brand-blue text-white border-brand-blue'
                              : 'bg-white text-neutral-700 border-neutral-200 hover:border-brand-blue hover:text-brand-blue'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Desired Timeline</label>
                    <select
                      name="timeline"
                      value={values.timeline}
                      onChange={handleChange}
                      className="w-full md:w-64 border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1">Additional Notes</label>
                    <textarea
                      name="additional_notes"
                      value={values.additional_notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context we should know about."
                      className="w-full border border-neutral-200 rounded-lg px-3 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-gold text-white py-3.5 rounded-lg font-bold text-base hover:bg-yellow-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-neutral-500 text-center">
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
};

export default Contact;
