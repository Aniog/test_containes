import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import {
  MapPin, Mail, Globe, Clock, CheckCircle, ArrowRight, Phone
} from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productCategories = [
  'Electronics', 'Textiles & Apparel', 'Furniture & Home',
  'Hardware & Tools', 'Toys & Gifts', 'Industrial Parts',
  'Health & Beauty', 'Packaging', 'Other',
];

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
];

const initialValues = {
  full_name: '',
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
          email: values.email,
          company: values.company || undefined,
          country: values.country || undefined,
          product_category: values.product_category || undefined,
          product_description: values.product_description,
          estimated_quantity: values.estimated_quantity || undefined,
          target_price: values.target_price || undefined,
          services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
          message: values.message || undefined,
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
      <section className="bg-brand-blue py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/20 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Tell us about your product and sourcing needs. We'll review your brief and respond within 24 hours with a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-brand-dark mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">Office Location</div>
                      <div className="text-gray-600 text-sm">Guangzhou, Guangdong, China</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">Email</div>
                      <a href="mailto:info@ssourcing.cn" className="text-brand-blue text-sm hover:underline">info@ssourcing.cn</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">Response Time</div>
                      <div className="text-gray-600 text-sm">Within 24 hours (business days)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-brand-dark text-sm">Languages</div>
                      <div className="text-gray-600 text-sm">English · Français · Español · Deutsch</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-blue-light rounded-xl p-6">
                <h3 className="font-bold text-brand-dark mb-3">What happens next?</h3>
                <ul className="space-y-3">
                  {[
                    'We review your sourcing brief',
                    'We send you a free consultation and quote',
                    'We identify qualified suppliers',
                    'You approve and we get started',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-brand-blue text-white text-xs font-bold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <CheckCircle className="w-6 h-6 text-green-600 mb-2" />
                <h3 className="font-bold text-brand-dark mb-1 text-sm">Free, No-Obligation Quote</h3>
                <p className="text-gray-600 text-sm">Our initial consultation and sourcing quote are completely free. No commitment required.</p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-brand-dark mb-2">Inquiry Received!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for your sourcing inquiry. Our team will review your brief and get back to you within 24 hours with a free consultation and quote.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Full Name <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={values.full_name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                        Business Email <span className="text-brand-orange">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">Product Category</label>
                    <select
                      name="product_category"
                      value={values.product_category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent bg-white"
                    >
                      <option value="">Select a category</option>
                      {productCategories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">
                      Product Description <span className="text-brand-orange">*</span>
                    </label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the product you want to source — include specifications, materials, dimensions, certifications needed, etc."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Estimated Quantity</label>
                      <input
                        type="text"
                        name="estimated_quantity"
                        value={values.estimated_quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 units, 1,000–5,000 pcs"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-dark mb-1.5">Target Unit Price</label>
                      <input
                        type="text"
                        name="target_price"
                        value={values.target_price}
                        onChange={handleChange}
                        placeholder="e.g. $5–$10 USD per unit"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((service) => (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                            values.services_needed.includes(service)
                              ? 'bg-brand-blue text-white border-brand-blue'
                              : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-dark mb-1.5">Additional Message</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or requirements..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-orange hover:bg-orange-700 disabled:opacity-60 text-white font-semibold px-6 py-4 rounded-lg transition-colors text-base flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending your inquiry...
                      </>
                    ) : (
                      <>
                        Send Sourcing Inquiry
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    By submitting this form, you agree to be contacted by SSourcing China regarding your sourcing inquiry. We do not share your information with third parties.
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
