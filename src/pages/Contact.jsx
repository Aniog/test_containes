import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  { value: 'full_sourcing', label: 'Full Sourcing Service' },
  { value: 'factory_audit', label: 'Factory Audit Only' },
  { value: 'quality_inspection', label: 'Quality Inspection Only' },
  { value: 'shipping_only', label: 'Shipping Coordination Only' },
  { value: 'other', label: 'Other / Not Sure Yet' },
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  product_type: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  service_needed: '',
  message: '',
};

function validate(v) {
  if (!v.full_name.trim()) return 'Full name is required.';
  if (!v.email.trim()) return 'Email address is required.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
  if (!v.product_type.trim()) return 'Product type is required.';
  if (!v.service_needed) return 'Please select the service you need.';
  return null;
}

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) { setError(err); return; }

    setStatus('submitting');
    console.log('Submitting sourcing inquiry:', values);

    try {
      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            full_name: values.full_name,
            email: values.email,
            company: values.company,
            country: values.country,
            product_type: values.product_type,
            product_description: values.product_description,
            estimated_quantity: values.estimated_quantity,
            target_price: values.target_price,
            service_needed: values.service_needed,
            message: values.message,
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const errMsg = Array.isArray(response?.errors) ? response.errors.join(', ') : (insertError?.message || 'Submission failed.');
        console.error('Insert error:', errMsg);
        setError(errMsg);
        setStatus('error');
        return;
      }

      console.log('Inquiry submitted successfully:', response?.data?.id);
      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gray-200 text-text-dark bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm placeholder-gray-400 transition";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">Get a Free Sourcing Quote</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Tell us what you need. We will review your inquiry and respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5 mb-10">
                {[
                  { icon: Mail, label: 'Email', value: 'info@ssourcing.cn', href: 'mailto:info@ssourcing.cn' },
                  { icon: Phone, label: 'Phone / WeChat', value: '+86 21 0000 0000', href: 'tel:+8621000000' },
                  { icon: MapPin, label: 'Location', value: 'Shanghai, China\n(Operations in Guangdong, Zhejiang, Jiangsu)', href: null },
                  { icon: Clock, label: 'Response Time', value: 'Within 1 business day', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-text-dark font-medium hover:text-primary transition-colors text-sm">{value}</a>
                      ) : (
                        <p className="text-text-dark font-medium text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-semibold text-text-dark mb-3">What Happens Next?</h3>
                <ol className="flex flex-col gap-3">
                  {[
                    'We review your inquiry within 1 business day',
                    'We ask any clarifying questions if needed',
                    'We provide a tailored sourcing proposal',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl p-10 border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-dark mb-3">Inquiry Received</h2>
                  <p className="text-gray-500 mb-6 max-w-md mx-auto">
                    Thank you for reaching out. We have received your sourcing inquiry and will respond within one business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-text-dark mb-8">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass} htmlFor="full_name">Full Name <span className="text-accent-red">*</span></label>
                      <input id="full_name" name="full_name" type="text" value={values.full_name} onChange={onChange} placeholder="Your full name" className={inputClass} required />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">Business Email <span className="text-accent-red">*</span></label>
                      <input id="email" name="email" type="email" value={values.email} onChange={onChange} placeholder="you@company.com" className={inputClass} required />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="company">Company Name</label>
                      <input id="company" name="company" type="text" value={values.company} onChange={onChange} placeholder="Your company" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="country">Country</label>
                      <input id="country" name="country" type="text" value={values.country} onChange={onChange} placeholder="e.g. United States" className={inputClass} />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className={labelClass} htmlFor="service_needed">Service Needed <span className="text-accent-red">*</span></label>
                    <select id="service_needed" name="service_needed" value={values.service_needed} onChange={onChange} className={inputClass} required>
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-5">
                    <label className={labelClass} htmlFor="product_type">Product Type <span className="text-accent-red">*</span></label>
                    <input id="product_type" name="product_type" type="text" value={values.product_type} onChange={onChange} placeholder="e.g. LED lighting, office chairs, sportswear" className={inputClass} required />
                  </div>

                  <div className="mb-5">
                    <label className={labelClass} htmlFor="product_description">Product Description & Specifications</label>
                    <textarea id="product_description" name="product_description" rows={4} value={values.product_description} onChange={onChange} placeholder="Describe your product in detail — materials, dimensions, features, certifications needed, etc." className={inputClass} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass} htmlFor="estimated_quantity">Estimated Quantity</label>
                      <input id="estimated_quantity" name="estimated_quantity" type="text" value={values.estimated_quantity} onChange={onChange} placeholder="e.g. 500 units/month" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="target_price">Target Unit Price</label>
                      <input id="target_price" name="target_price" type="text" value={values.target_price} onChange={onChange} placeholder="e.g. USD 5–8 per unit" className={inputClass} />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className={labelClass} htmlFor="message">Additional Information</label>
                    <textarea id="message" name="message" rows={3} value={values.message} onChange={onChange} placeholder="Any other details, timeline requirements, or questions..." className={inputClass} />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-base hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    We respond within 1 business day. No spam, no obligation.
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
