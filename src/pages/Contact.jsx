import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
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
  'Toys & Baby Products',
  'Beauty & Personal Care',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Automotive Parts',
  'Kitchenware & Cookware',
  'Medical & Health Devices',
  'Pet Products',
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
  estimated_quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
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
    if (!values.product_description.trim() || values.product_description.length < 10) return 'Please describe the product you want to source (at least 10 characters).';
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
        company: values.company || undefined,
        country: values.country || undefined,
        phone: values.phone || undefined,
        product_category: values.product_category || undefined,
        product_description: values.product_description,
        estimated_quantity: values.estimated_quantity || undefined,
        target_price: values.target_price || undefined,
        services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
        message: values.message || undefined,
      };

      const { data: response, error: insertError } = await client
        .from('SourcingInquiry')
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
      console.error('Submission error:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="text-lg font-bold text-text-primary mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-text-primary font-medium text-sm">Office Location</p>
                      <p className="text-text-secondary text-sm">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-text-primary font-medium text-sm">Email</p>
                      <a href="mailto:info@ssourcing.com" className="text-primary text-sm hover:underline">
                        info@ssourcing.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-text-primary font-medium text-sm">Phone / WhatsApp</p>
                      <a href="tel:+8620123456789" className="text-primary text-sm hover:underline">
                        +86 20 1234 5678
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-text-primary font-medium text-sm">Business Hours (CST)</p>
                      <p className="text-text-secondary text-sm">Mon–Fri: 9:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-xl p-6 text-white">
                <h4 className="font-bold text-base mb-3">What Happens Next?</h4>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'Our team assesses supplier availability',
                    'We send you a tailored sourcing plan',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/85">
                      <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
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
                <div className="bg-white rounded-xl border border-border p-10 text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary mb-3">Inquiry Received!</h3>
                  <p className="text-text-secondary mb-6 max-w-md mx-auto">
                    Thank you for reaching out. Our sourcing team will review your inquiry and respond within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8">
                  <h3 className="text-xl font-bold text-text-primary mb-6">Sourcing Inquiry Form</h3>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Your Details</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">
                          Business Email <span className="text-accent">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="United States"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Product Details</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Select a category...</option>
                          {categoryOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-primary mb-1.5">
                          Product Description <span className="text-accent">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product you want to source — include material, dimensions, features, certifications needed, and any other relevant specifications."
                          className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={values.estimated_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units, 1 x 20ft container"
                            className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-primary mb-1.5">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={handleChange}
                            placeholder="e.g. USD $5–8 per unit"
                            className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Services Needed</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                      {serviceOptions.map((service) => {
                        const selected = values.services_needed.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`text-left px-3 py-2.5 rounded-lg border text-sm font-medium transition-colors ${
                              selected
                                ? 'bg-primary border-primary text-white'
                                : 'bg-white border-border text-text-secondary hover:border-primary/50 hover:text-primary'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-text-primary mb-1.5">Additional Notes</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context that would help us understand your needs."
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-lg font-bold text-base transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-text-muted text-xs text-center mt-3">
                    We respond within 24 business hours. No spam, no obligation.
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
