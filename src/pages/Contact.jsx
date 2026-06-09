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

const initialForm = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_type: '',
  product_description: '',
  target_quantity: '',
  target_price: '',
  services_needed: [],
  timeline: '',
  additional_notes: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (svc) => {
    setForm((prev) => ({
      ...prev,
      services_needed: prev.services_needed.includes(svc)
        ? prev.services_needed.filter((s) => s !== svc)
        : [...prev.services_needed, svc],
    }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Full name is required.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'A valid email address is required.';
    if (!form.product_type.trim()) return 'Product type is required.';
    if (!form.product_description.trim()) return 'Product description is required.';
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
          name: form.name,
          email: form.email,
          company: form.company,
          country: form.country,
          phone: form.phone,
          product_type: form.product_type,
          product_description: form.product_description,
          target_quantity: form.target_quantity,
          target_price: form.target_price,
          services_needed: form.services_needed,
          timeline: form.timeline,
          additional_notes: form.additional_notes,
          status: 'new',
        },
      })
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
    setForm(initialForm);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Tell us about your product and sourcing needs. We will respond within 24 hours with a tailored plan and quote.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold text-primary-dark mb-2">Contact Information</h2>
                <p className="text-text-muted text-sm leading-relaxed">
                  Reach us directly or fill out the inquiry form. We respond to all inquiries within one business day.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { icon: MapPin, label: 'Office', value: 'Shenzhen, Guangdong, China' },
                  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com' },
                  { icon: Phone, label: 'Phone / WhatsApp', value: '+86 755 0000 0000' },
                  { icon: Clock, label: 'Response Time', value: 'Within 24 hours (Mon–Fri)' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-light-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">{label}</div>
                      <div className="text-text-dark text-sm font-medium">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-border-color rounded-xl p-5">
                <h3 className="font-semibold text-primary-dark mb-3 text-sm">What Happens Next?</h3>
                <ol className="flex flex-col gap-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a tailored sourcing plan',
                    'We schedule a call to discuss details',
                    'We begin supplier research',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <span className="w-5 h-5 bg-primary text-white rounded-full text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
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
                <div className="bg-white border border-border-color rounded-xl p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-primary-dark mb-3">Inquiry Submitted!</h2>
                  <p className="text-text-muted mb-6">
                    Thank you for reaching out. We have received your sourcing inquiry and will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-border-color rounded-xl p-6 md:p-8">
                  <h2 className="text-xl font-bold text-primary-dark mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-primary-dark uppercase tracking-wider mb-4 pb-2 border-b border-border-color">
                      Your Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Email Address <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={form.country}
                          onChange={handleChange}
                          placeholder="United Kingdom"
                          className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-text-dark mb-1">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+44 7700 000000"
                          className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-primary-dark uppercase tracking-wider mb-4 pb-2 border-b border-border-color">
                      Product Details
                    </h3>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Product Type / Category <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="product_type"
                          value={form.product_type}
                          onChange={handleChange}
                          placeholder="e.g. LED lighting, office furniture, sportswear"
                          className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">
                          Product Description & Specifications <span className="text-accent">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={form.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe your product in detail — dimensions, materials, certifications needed, packaging requirements, etc."
                          className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-dark mb-1">Target Quantity / MOQ</label>
                          <input
                            type="text"
                            name="target_quantity"
                            value={form.target_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units, 1000 pcs"
                            className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-dark mb-1">Target Unit Price / Budget</label>
                          <input
                            type="text"
                            name="target_price"
                            value={form.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-dark mb-1">Required Timeline</label>
                        <input
                          type="text"
                          name="timeline"
                          value={form.timeline}
                          onChange={handleChange}
                          placeholder="e.g. Delivery needed by September 2026"
                          className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-primary-dark uppercase tracking-wider mb-4 pb-2 border-b border-border-color">
                      Services Needed
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                            form.services_needed.includes(svc)
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-text-muted border-border-color hover:border-primary hover:text-primary'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-text-dark mb-1">Additional Notes</label>
                    <textarea
                      name="additional_notes"
                      value={form.additional_notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other information that would help us understand your needs..."
                      className="w-full px-4 py-2.5 border border-border-color rounded-lg text-sm text-text-dark focus:outline-none focus:border-primary bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent hover:bg-[#a93226] disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-colors text-base"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-text-muted text-center mt-3">
                    No commitment required. We will respond within 24 hours.
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
