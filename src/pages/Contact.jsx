import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';

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

const servicesOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Sample Procurement',
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
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email address.';
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

    const { data: response, error: submitError } = await client
      .from('Sourcing Inquiries')
      .insert({
        data: {
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          country: form.country || undefined,
          phone: form.phone || undefined,
          product_category: form.product_category || undefined,
          product_description: form.product_description,
          estimated_quantity: form.estimated_quantity || undefined,
          target_price: form.target_price || undefined,
          services_needed: form.services_needed.length > 0 ? form.services_needed : undefined,
          message: form.message || undefined,
          status: 'new',
        },
      })
      .select()
      .single();

    if (submitError || response?.success === false) {
      const errMsg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : submitError?.message || 'Submission failed. Please try again.';
      setError(errMsg);
      setStatus('error');
      return;
    }

    setStatus('success');
    setForm(initialForm);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-gold bg-white/10 px-3 py-1 rounded-full">Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Tell us what you need. We'll review your inquiry and respond within 24 hours with a tailored sourcing plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-gray py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-brand-navy mb-2">Contact Information</h2>
                <p className="text-brand-muted text-sm leading-relaxed">
                  Reach out directly or fill in the form. We respond to all inquiries within 24 business hours.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-navy text-sm">Office Location</div>
                    <div className="text-brand-muted text-sm">Guangzhou, Guangdong, China</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-navy text-sm">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-brand-blue text-sm hover:underline">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-navy text-sm">Phone / WhatsApp</div>
                    <div className="text-brand-muted text-sm">+86 (0)20 1234 5678</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-brand-blue" />
                  </div>
                  <div>
                    <div className="font-medium text-brand-navy text-sm">Response Time</div>
                    <div className="text-brand-muted text-sm">Within 24 business hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-brand-border">
                <h3 className="font-semibold text-brand-navy mb-3 text-sm">What Happens After You Submit?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a tailored sourcing plan',
                    'We provide a transparent, itemized quote',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-brand-muted">
                      <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-brand-border p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-2">Inquiry Received!</h2>
                  <p className="text-brand-muted mb-6">
                    Thank you for your inquiry. Our team will review your requirements and get back to you within 24 business hours with a tailored sourcing plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-brand-blue hover:bg-brand-navy text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-brand-border p-6 md:p-8 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-brand-navy mb-1">Sourcing Inquiry Form</h2>
                    <p className="text-brand-muted text-sm">Fields marked with * are required.</p>
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                      <p className="text-brand-red text-sm">{error}</p>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy uppercase tracking-wider mb-4 pb-2 border-b border-brand-border">
                      Your Contact Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1">
                          Full Name <span className="text-brand-red">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
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
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-brand-navy mb-1">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 8900"
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy uppercase tracking-wider mb-4 pb-2 border-b border-brand-border">
                      Product Details
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1">Product Category</label>
                        <select
                          name="product_category"
                          value={form.product_category}
                          onChange={handleChange}
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue bg-white"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-navy mb-1">
                          Product Description <span className="text-brand-red">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={form.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product you want to source — include specifications, materials, dimensions, or any other relevant details."
                          className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-brand-navy mb-1">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={form.estimated_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units/month"
                            className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-navy mb-1">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={form.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <h3 className="text-sm font-semibold text-brand-navy uppercase tracking-wider mb-4 pb-2 border-b border-brand-border">
                      Services Required
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {servicesOptions.map((service) => (
                        <label
                          key={service}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
                            form.services_needed.includes(service)
                              ? 'border-brand-blue bg-blue-50'
                              : 'border-brand-border hover:border-brand-blue/40'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={form.services_needed.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="w-4 h-4 text-brand-blue rounded"
                          />
                          <span className="text-sm text-brand-text">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-1">Additional Information</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, special requirements, or questions you'd like to share."
                      className="w-full border border-brand-border rounded-lg px-4 py-2.5 text-sm text-brand-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-red hover:bg-red-700 disabled:opacity-60 text-white font-bold py-4 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-xs text-brand-muted text-center">
                    By submitting this form, you agree to be contacted by SSourcing China regarding your inquiry. We do not share your information with third parties.
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
