import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Badge, Card } from '@/components/ui/SharedComponents';

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
  'Other',
];

const servicesOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Sample Procurement',
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

function InputField({ label, id, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const inputClass = 'w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent placeholder-gray-400 bg-white';

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
      .from('SourcingInquiry')
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
    setValues(initialValues);
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge variant="gold" className="mb-4">Get in Touch</Badge>
            <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tell us what you need to source. Our team will review your inquiry and respond within 24 hours with a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-brand-navy text-2xl font-bold mb-2">Contact Information</h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Reach out directly or use the inquiry form. We respond to all inquiries within one business day.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'info@ssourcing.cn', href: 'mailto:info@ssourcing.cn' },
                  { icon: Phone, label: 'Phone / WhatsApp', value: '+86 20 XXXX XXXX', href: 'tel:+8620XXXXXXXX' },
                  { icon: MapPin, label: 'Location', value: 'Guangzhou, Guangdong, China', href: null },
                  { icon: Clock, label: 'Business Hours', value: 'Mon–Fri, 9:00–18:00 CST', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-brand-blue" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</p>
                      {href ? (
                        <a href={href} className="text-brand-navy text-sm font-medium hover:text-brand-blue transition-colors">{value}</a>
                      ) : (
                        <p className="text-brand-navy text-sm font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-brand-navy border-0">
                <h3 className="text-white font-semibold text-base mb-3">What to Expect</h3>
                <ul className="space-y-2.5">
                  {[
                    'Response within 24 business hours',
                    'Free initial consultation',
                    'No obligation quote',
                    'Confidential and professional',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-brand-navy text-2xl font-bold mb-3">Inquiry Received!</h3>
                    <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                      Thank you for your inquiry. Our sourcing team will review your requirements and contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-brand-blue font-semibold text-sm hover:text-brand-sky transition-colors"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-brand-navy text-xl font-bold mb-1">Sourcing Inquiry Form</h2>
                      <p className="text-gray-500 text-sm">Fields marked with * are required.</p>
                    </div>

                    {/* Contact Details */}
                    <div>
                      <h3 className="text-brand-navy font-semibold text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100">Your Details</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <InputField label="Full Name" id="full_name" required>
                          <input
                            id="full_name"
                            name="full_name"
                            type="text"
                            value={values.full_name}
                            onChange={handleChange}
                            placeholder="John Smith"
                            className={inputClass}
                          />
                        </InputField>
                        <InputField label="Business Email" id="email" required>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className={inputClass}
                          />
                        </InputField>
                        <InputField label="Company Name" id="company">
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={values.company}
                            onChange={handleChange}
                            placeholder="Your company"
                            className={inputClass}
                          />
                        </InputField>
                        <InputField label="Country" id="country">
                          <input
                            id="country"
                            name="country"
                            type="text"
                            value={values.country}
                            onChange={handleChange}
                            placeholder="United States"
                            className={inputClass}
                          />
                        </InputField>
                        <InputField label="Phone / WhatsApp" id="phone">
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={values.phone}
                            onChange={handleChange}
                            placeholder="+1 555 000 0000"
                            className={inputClass}
                          />
                        </InputField>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div>
                      <h3 className="text-brand-navy font-semibold text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100">Product Requirements</h3>
                      <div className="space-y-4">
                        <InputField label="Product Category" id="product_category">
                          <select
                            id="product_category"
                            name="product_category"
                            value={values.product_category}
                            onChange={handleChange}
                            className={inputClass}
                          >
                            <option value="">Select a category</option>
                            {productCategories.map((cat) => (
                              <option key={cat} value={cat}>{cat}</option>
                            ))}
                          </select>
                        </InputField>
                        <InputField label="Product Description" id="product_description" required>
                          <textarea
                            id="product_description"
                            name="product_description"
                            rows={4}
                            value={values.product_description}
                            onChange={handleChange}
                            placeholder="Describe the product you want to source — materials, dimensions, specifications, certifications required, etc."
                            className={inputClass}
                          />
                        </InputField>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <InputField label="Estimated Quantity" id="estimated_quantity">
                            <input
                              id="estimated_quantity"
                              name="estimated_quantity"
                              type="text"
                              value={values.estimated_quantity}
                              onChange={handleChange}
                              placeholder="e.g. 500 units/month"
                              className={inputClass}
                            />
                          </InputField>
                          <InputField label="Target Unit Price" id="target_price">
                            <input
                              id="target_price"
                              name="target_price"
                              type="text"
                              value={values.target_price}
                              onChange={handleChange}
                              placeholder="e.g. USD 5–8 per unit"
                              className={inputClass}
                            />
                          </InputField>
                        </div>
                      </div>
                    </div>

                    {/* Services Needed */}
                    <div>
                      <h3 className="text-brand-navy font-semibold text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100">Services Required</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {servicesOptions.map((service) => {
                          const checked = values.services_needed.includes(service);
                          return (
                            <button
                              key={service}
                              type="button"
                              onClick={() => handleServiceToggle(service)}
                              className={`px-3 py-2.5 rounded-lg text-xs font-medium border transition-colors text-left ${
                                checked
                                  ? 'bg-brand-blue text-white border-brand-blue'
                                  : 'bg-white text-gray-700 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
                              }`}
                            >
                              {service}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <h3 className="text-brand-navy font-semibold text-sm uppercase tracking-wide mb-4 pb-2 border-b border-gray-100">Additional Notes</h3>
                      <InputField label="Message" id="message">
                        <textarea
                          id="message"
                          name="message"
                          rows={3}
                          value={values.message}
                          onChange={handleChange}
                          placeholder="Any other requirements, questions, or context that would help us assist you."
                          className={inputClass}
                        />
                      </InputField>
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-brand-blue hover:bg-brand-sky disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors text-base"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                    </button>
                    <p className="text-gray-400 text-xs text-center">
                      By submitting this form, you agree to be contacted by our team regarding your sourcing inquiry.
                    </p>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
