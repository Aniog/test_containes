import { useState } from 'react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, MapPin, Globe, CheckCircle, AlertCircle } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';

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
  'Sample Procurement',
];

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
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

  const validate = () => {
    if (!values.name.trim()) return 'Name is required.';
    if (!values.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_description.trim()) return 'Product description is required.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) { setError(err); return; }

    setStatus('submitting');

    try {
      const userRecord = await User.upsert({
        email: values.email,
        name: values.name,
        role: 'guest',
      });

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company || undefined,
            country: values.country || undefined,
            product_category: values.product_category || undefined,
            product_description: values.product_description,
            estimated_quantity: values.estimated_quantity || undefined,
            target_price: values.target_price || undefined,
            services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
            message: values.message || undefined,
            user_id: userRecord?.id || undefined,
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
      console.error('Inquiry submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      <PageHero
        title="Get a Free Sourcing Quote"
        subtitle="Tell us about your product and sourcing needs. We'll review your inquiry and respond within one business day."
        breadcrumb="Contact"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#1a202c] mb-4">Contact Information</h2>
              <p className="text-[#64748b] mb-8 leading-relaxed">
                We're based in Guangzhou, China, and work with buyers across Europe, North America, Australia, and beyond.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#e8f0fb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1a4f8a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a202c] text-sm">Email</div>
                    <a href="mailto:info@ssourcing.cn" className="text-[#1a4f8a] text-sm hover:underline">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#e8f0fb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1a4f8a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a202c] text-sm">Location</div>
                    <div className="text-[#64748b] text-sm">Guangzhou, Guangdong, China</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#e8f0fb] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[#1a4f8a]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a202c] text-sm">Languages</div>
                    <div className="text-[#64748b] text-sm">English · Français · Español</div>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-[#f4f6f9] rounded-xl p-6">
                <h3 className="font-semibold text-[#1a202c] mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 1 business day',
                    'We send you a tailored sourcing proposal',
                    'We schedule a call to discuss your project',
                    'We begin supplier research once you confirm',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#64748b]">
                      <span className="w-5 h-5 bg-[#1a4f8a] text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-[#f0fdf4] border border-[#86efac] rounded-xl p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-[#16a34a] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-[#1a202c] mb-2">Inquiry Received</h3>
                  <p className="text-[#64748b] max-w-md mx-auto">
                    Thank you for your inquiry. Our team will review your requirements and get back to you within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  {/* Contact Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a202c] mb-4 pb-2 border-b border-[#e2e8f0]">Your Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1a202c] mb-1.5">
                          Full Name <span className="text-[#c0392b]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={onChange}
                          placeholder="Your full name"
                          className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#1a202c] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1a202c] mb-1.5">
                          Business Email <span className="text-[#c0392b]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="you@company.com"
                          className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#1a202c] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1a202c] mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Your company"
                          className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#1a202c] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1a202c] mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={onChange}
                          placeholder="e.g. United States"
                          className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#1a202c] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a202c] mb-4 pb-2 border-b border-[#e2e8f0]">Product Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1a202c] mb-1.5">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={onChange}
                          className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#1a202c] focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          {productCategories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1a202c] mb-1.5">
                          Product Description <span className="text-[#c0392b]">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={onChange}
                          rows={4}
                          placeholder="Describe the product you want to source — materials, dimensions, features, certifications required, etc."
                          className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#1a202c] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent resize-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#1a202c] mb-1.5">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={values.estimated_quantity}
                            onChange={onChange}
                            placeholder="e.g. 500 units / month"
                            className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#1a202c] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1a202c] mb-1.5">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={onChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#1a202c] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-lg font-semibold text-[#1a202c] mb-4 pb-2 border-b border-[#e2e8f0]">Services Needed</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {serviceOptions.map((svc) => {
                        const selected = values.services_needed.includes(svc);
                        return (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => onServiceToggle(svc)}
                            className={`text-left px-4 py-3 rounded-lg border text-sm font-medium transition-colors ${
                              selected
                                ? 'bg-[#1a4f8a] border-[#1a4f8a] text-white'
                                : 'bg-white border-[#e2e8f0] text-[#1a202c] hover:border-[#1a4f8a] hover:text-[#1a4f8a]'
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-[#1a202c] mb-1.5">Additional Notes</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      rows={3}
                      placeholder="Any other requirements, questions, or context that would help us understand your project."
                      className="w-full border border-[#e2e8f0] rounded-lg px-4 py-2.5 text-sm text-[#1a202c] placeholder-[#94a3b8] focus:outline-none focus:ring-2 focus:ring-[#1a4f8a] focus:border-transparent resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-2 bg-[#fef2f2] border border-[#fca5a5] rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 text-[#c0392b] flex-shrink-0 mt-0.5" />
                      <p className="text-[#c0392b] text-sm">{error}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#c0392b] hover:bg-[#a93226] disabled:opacity-60 text-white font-semibold px-6 py-4 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-[#64748b] text-xs text-center">
                    We respond to all inquiries within 1 business day. No spam, no unsolicited calls.
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
