import { useState } from 'react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { MapPin, Mail, Clock, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Trade Compliance',
];

const categoryOptions = [
  'Electronics & Components',
  'Furniture & Home Goods',
  'Apparel & Textiles',
  'Toys & Baby Products',
  'Hardware & Tools',
  'Packaging Materials',
  'Sporting Goods',
  'Industrial Equipment',
  'Cosmetics & Personal Care',
  'Food & Beverage Packaging',
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

  const handleServiceToggle = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'A valid email address is required.';
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

    try {
      const userRecord = await User.upsert({
        email: values.email,
        name: values.full_name,
        role: 'guest',
      });

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
            estimated_quantity: values.estimated_quantity || undefined,
            target_price: values.target_price || undefined,
            services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
            message: values.message || undefined,
            user_id: userRecord?.id || undefined,
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
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-red-china font-semibold text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5 text-white">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tell us what you need to source. We'll review your inquiry and respond within 24 business hours with a tailored plan and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-navy mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-slate-bg rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">Office Location</div>
                      <div className="text-text-muted text-sm mt-0.5">Guangzhou, Guangdong Province, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-slate-bg rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">Email</div>
                      <a href="mailto:info@ssourcing.cn" className="text-text-muted text-sm mt-0.5 hover:text-navy transition-colors">
                        info@ssourcing.cn
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-slate-bg rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-navy" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-sm">Business Hours</div>
                      <div className="text-text-muted text-sm mt-0.5">Monday – Friday, 9:00–18:00 CST</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-bg rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold text-navy mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a tailored sourcing plan and quote',
                    'We schedule a call to discuss your requirements',
                    'We begin supplier research once you confirm',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-muted">
                      <span className="w-5 h-5 bg-navy text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-navy rounded-xl p-6 text-white">
                <h3 className="font-semibold mb-2">No Commitment Required</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Submitting this form is free and non-binding. We'll provide a quote and you decide whether to proceed.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-3">Inquiry Received!</h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                    Thank you for your inquiry. Our team will review your requirements and get back to you within 24 business hours with a sourcing plan and quote.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy-dark transition-colors"
                  >
                    Submit Another Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Details */}
                  <div>
                    <h2 className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-200">Your Contact Details</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-text-main mb-1.5">
                          Full Name <span className="text-red-china">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-main mb-1.5">
                          Email Address <span className="text-red-china">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-main mb-1.5">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-main mb-1.5">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={handleChange}
                          placeholder="United States"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-text-main mb-1.5">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={handleChange}
                          placeholder="+1 555 000 0000"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <h2 className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-200">Product Details</h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-text-main mb-1.5">Product Category</label>
                        <select
                          name="product_category"
                          value={values.product_category}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent bg-white"
                        >
                          <option value="">Select a category</option>
                          {categoryOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-main mb-1.5">
                          Product Description <span className="text-red-china">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={handleChange}
                          rows={4}
                          placeholder="Describe the product you want to source — include material, dimensions, function, certifications needed, and any other relevant specifications."
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-text-main mb-1.5">Estimated Quantity</label>
                          <input
                            type="text"
                            name="estimated_quantity"
                            value={values.estimated_quantity}
                            onChange={handleChange}
                            placeholder="e.g. 500 units / month"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-text-main mb-1.5">Target Unit Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={handleChange}
                            placeholder="e.g. $5–$8 USD"
                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h2 className="text-lg font-bold text-navy mb-4 pb-2 border-b border-gray-200">Services Needed</h2>
                    <p className="text-text-muted text-sm mb-3">Select all that apply (optional):</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors text-left ${
                            values.services_needed.includes(svc)
                              ? 'bg-navy text-white border-navy'
                              : 'bg-white text-text-main border-gray-300 hover:border-navy hover:text-navy'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-text-main mb-1.5">Additional Information</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or context that would help us understand your requirements."
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-text-main focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                    />
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 rounded-lg p-4">
                      <AlertCircle className="w-4 h-4 text-red-china flex-shrink-0 mt-0.5" />
                      <p className="text-red-china text-sm">{error}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-red-china text-white py-3.5 rounded-lg font-semibold text-base hover:bg-red-china-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Sourcing Inquiry
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-text-muted text-xs text-center">
                    By submitting this form, you agree to be contacted by SSourcing China regarding your inquiry. No spam, no commitment.
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
