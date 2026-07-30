import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const SERVICES = [
  'Supplier Sourcing',
  'Factory Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Sample Procurement',
];

const CATEGORIES = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Apparel & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts & Accessories',
  'Other',
];

const initialValues = {
  full_name: '',
  company_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
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
    if (!values.product_description.trim()) return 'Product description is required.';
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
          full_name: values.full_name,
          company_name: values.company_name || undefined,
          email: values.email,
          phone: values.phone || undefined,
          country: values.country || undefined,
          product_category: values.product_category || undefined,
          product_description: values.product_description,
          estimated_quantity: values.estimated_quantity || undefined,
          target_price: values.target_price || undefined,
          services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
          additional_notes: values.additional_notes || undefined,
          status: 'new',
        },
      })
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
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/10 text-blue-200 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Tell us about your sourcing project and we'll get back to you within 48 hours with a tailored plan and quote.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-darktext text-sm">Office Location</div>
                    <div className="text-muted text-sm mt-0.5">Guangzhou, Guangdong, China</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-darktext text-sm">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-primary text-sm mt-0.5 hover:text-accent transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-darktext text-sm">Phone / WhatsApp</div>
                    <a href="tel:+8620XXXXXXXX" className="text-primary text-sm mt-0.5 hover:text-accent transition-colors">
                      +86 20 XXXX XXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-darktext text-sm">Response Time</div>
                    <div className="text-muted text-sm mt-0.5">Within 48 business hours</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-5">
                <h3 className="font-semibold text-darktext mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 48 hours',
                    'Our team contacts you to clarify requirements',
                    'We present a tailored sourcing plan and quote',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
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
                <div className="bg-white rounded-2xl border border-border p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">Inquiry Received!</h2>
                  <p className="text-muted leading-relaxed max-w-md mx-auto mb-6">
                    Thank you for your inquiry. Our sourcing team will review your requirements and get back to you within 48 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#152f58] transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-6 md:p-8">
                  <h2 className="text-xl font-bold text-primary mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-lg p-4 mb-5">
                      <AlertCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-accent text-sm">{error}</p>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-darktext uppercase tracking-wider mb-4 pb-2 border-b border-border">Contact Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-darktext mb-1.5">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-darktext mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company_name"
                          value={values.company_name}
                          onChange={handleChange}
                          placeholder="Your company name"
                          className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-darktext mb-1.5">
                          Business Email <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-darktext mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-darktext mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="Your country"
                          className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-darktext mb-1.5">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
                        >
                          <option value="">Select a category</option>
                          {CATEGORIES.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-darktext uppercase tracking-wider mb-4 pb-2 border-b border-border">Product Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-darktext mb-1.5">
                          Product Description <span className="text-accent">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product(s) you want to source — include specifications, materials, dimensions, certifications needed, etc."
                          className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-darktext mb-1.5">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={values.estimated_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units/month"
                            className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-darktext mb-1.5">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-darktext uppercase tracking-wider mb-4 pb-2 border-b border-border">Services Needed</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {SERVICES.map((service) => (
                        <label
                          key={service}
                          className={`flex items-center gap-2.5 p-3 rounded-lg border cursor-pointer transition-colors text-sm ${
                            values.services_needed.includes(service)
                              ? 'border-primary bg-primary/5 text-primary font-medium'
                              : 'border-border text-darktext hover:border-primary/40'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={values.services_needed.includes(service)}
                            onChange={() => handleServiceToggle(service)}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                            values.services_needed.includes(service) ? 'bg-primary border-primary' : 'border-border'
                          }`}>
                            {values.services_needed.includes(service) && (
                              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 12 12">
                                <path d="M10 3L5 8.5 2 5.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                          {service}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-darktext mb-1.5">Additional Notes</label>
                    <textarea
                      name="additional_notes"
                      value={values.additional_notes}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context that would help us understand your project."
                      className="w-full px-3.5 py-2.5 border border-border rounded-lg text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent text-white py-3.5 rounded-lg font-semibold text-base hover:bg-[#a93226] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-muted text-center mt-3">
                    We respond within 48 business hours. No spam, no obligation.
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
