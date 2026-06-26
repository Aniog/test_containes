import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Compliance & Certification',
];

const categoryOptions = [
  'Electronics',
  'Furniture & Home',
  'Apparel & Textiles',
  'Hardware & Tools',
  'Toys & Baby',
  'Packaging',
  'Other',
];

const initialForm = {
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
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setForm((prev) => ({
      ...prev,
      services_needed: prev.services_needed.includes(service)
        ? prev.services_needed.filter((s) => s !== service)
        : [...prev.services_needed, service],
    }));
  };

  const validate = () => {
    if (!form.full_name.trim()) return 'Full name is required.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'A valid email address is required.';
    if (!form.product_description.trim()) return 'Please describe the product you want to source.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) { setError(validationError); return; }

    setStatus('submitting');

    try {
      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            full_name: form.full_name,
            email: form.email,
            company: form.company,
            country: form.country,
            phone: form.phone,
            product_category: form.product_category || undefined,
            product_description: form.product_description,
            estimated_quantity: form.estimated_quantity,
            target_price: form.target_price,
            services_needed: form.services_needed,
            message: form.message,
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
      setForm(initialForm);
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-brand-sky text-sm font-semibold uppercase tracking-widest mb-4">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tell us what you need and we'll send you a free sourcing plan within 24 hours.
              No commitment required.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">Contact Information</h2>
                <p className="text-brand-gray text-sm leading-relaxed">
                  Our team is based in China and available during business hours (GMT+8).
                  We typically respond within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
                  { icon: Phone, label: 'Phone / WhatsApp', value: '+86 (0) 20 1234 5678', href: 'tel:+862012345678' },
                  { icon: MapPin, label: 'Location', value: 'Guangzhou, China', href: null },
                  { icon: Clock, label: 'Business Hours', value: 'Mon–Fri, 9:00–18:00 CST', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-gray uppercase tracking-wider">{label}</p>
                      {href ? (
                        <a href={href} className="text-brand-navy font-medium text-sm hover:text-brand-blue transition-colors">{value}</a>
                      ) : (
                        <p className="text-brand-navy font-medium text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-navy rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a free sourcing plan',
                    'We schedule a call to discuss your needs',
                    'We get started — no upfront commitment',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="w-5 h-5 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-3">Inquiry Received!</h2>
                  <p className="text-brand-gray leading-relaxed mb-6">
                    Thank you for your inquiry. Our team will review your requirements and
                    send you a free sourcing plan within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-6">
                  <h2 className="text-xl font-bold text-brand-navy">Sourcing Inquiry Form</h2>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={form.full_name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your Company Ltd."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        placeholder="United States"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Product Category</label>
                      <select
                        name="product_category"
                        value={form.product_category}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
                      >
                        <option value="">Select a category</option>
                        {categoryOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Product Description */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Product Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="product_description"
                      value={form.product_description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the product you want to source — include specifications, materials, dimensions, or any reference products."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                      required
                    />
                  </div>

                  {/* Quantity & Price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        name="estimated_quantity"
                        value={form.estimated_quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 units / month"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Target Price</label>
                      <input
                        type="text"
                        name="target_price"
                        value={form.target_price}
                        onChange={handleChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors ${
                            form.services_needed.includes(svc)
                              ? 'bg-brand-blue text-white border-brand-blue'
                              : 'bg-white text-brand-navy border-gray-200 hover:border-brand-blue'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">Additional Information</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or context that would help us understand your needs."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-3">
                      <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-blue hover:bg-brand-sky disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors text-sm"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-xs text-brand-gray text-center">
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
