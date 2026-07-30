import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import CTASection from '@/components/CTASection';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Sample Procurement',
];

const categoryOptions = [
  'Electronics & Components',
  'Furniture & Home Decor',
  'Apparel & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Printing',
  'Auto Parts',
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
  message: '',
};

export default function ContactPage() {
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

    try {
      // Insert inquiry directly
      const { data: response, error: insertError } = await client
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
            message: values.message || undefined,
            status: 'new',
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : insertError?.message || 'Submission failed.';
        setError(msgs);
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us what you need to source. Our team will review your requirements and respond within 24 hours with a tailored plan and cost estimate — at no charge.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-lightbg py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-darktext mb-4">Contact Information</h2>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
                    { icon: Phone, label: 'Phone / WhatsApp', value: '+86 (0) 20 0000 0000', href: 'tel:+862000000000' },
                    { icon: MapPin, label: 'Location', value: 'Guangzhou, Guangdong, China', href: null },
                    { icon: Clock, label: 'Response Time', value: 'Within 24 business hours', href: null },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-muted font-medium uppercase tracking-wider">{label}</div>
                        {href ? (
                          <a href={href} className="text-darktext text-sm font-medium hover:text-accent transition-colors">{value}</a>
                        ) : (
                          <div className="text-darktext text-sm font-medium">{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-semibold text-darktext mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your requirements within 24 hours.',
                    'A sourcing specialist contacts you to clarify details.',
                    'We provide a tailored sourcing plan and cost estimate.',
                    'You decide whether to proceed — no obligation.',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-bodytext">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
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
                <div className="bg-white rounded-2xl border border-border p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-darktext mb-2">Inquiry Received!</h2>
                  <p className="text-bodytext mb-6">
                    Thank you for your sourcing inquiry. Our team will review your requirements and get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-primary text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#152f58] transition-colors text-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-border p-8 md:p-10 space-y-6">
                  <h2 className="text-xl font-bold text-darktext">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        placeholder="Your company or business"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1.5">Phone / WhatsApp</label>
                      <input
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1.5">Product Category</label>
                      <select
                        name="product_category"
                        value={values.product_category}
                        onChange={handleChange}
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
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
                    <label className="block text-sm font-medium text-darktext mb-1.5">
                      Product Description <span className="text-accent">*</span>
                    </label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the product you want to source — materials, dimensions, features, quality requirements, target market, etc."
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  {/* Quantity & Price */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        name="estimated_quantity"
                        value={values.estimated_quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 units/month"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Services Needed */}
                  <div>
                    <label className="block text-sm font-medium text-darktext mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                            values.services_needed.includes(service)
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-bodytext border-border hover:border-primary hover:text-primary'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-darktext mb-1.5">Additional Notes</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context that would help us understand your needs."
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent text-white py-3.5 rounded-lg font-semibold hover:bg-[#a93226] transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-xs text-muted text-center">
                    No commitment required. We'll respond within 24 business hours.
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
