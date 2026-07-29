import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier Sourcing' },
  { value: 'factory_verification', label: 'Factory Verification' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_followup', label: 'Production Follow-up' },
  { value: 'shipping_coordination', label: 'Shipping Coordination' },
  { value: 'private_label', label: 'Private Label / OEM' },
  { value: 'full_service', label: 'Full Sourcing Service' },
  { value: 'not_sure', label: 'Not Sure — Please Advise' },
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_type: '',
  quantity: '',
  target_price: '',
  service_needed: '',
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

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'A valid email address is required.';
    if (!values.product_type.trim()) return 'Please describe the product you want to source.';
    if (!values.service_needed) return 'Please select the service you need.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    try {
      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({
          data: {
            full_name: values.full_name,
            email: values.email,
            company: values.company || undefined,
            country: values.country || undefined,
            phone: values.phone || undefined,
            product_type: values.product_type,
            quantity: values.quantity || undefined,
            target_price: values.target_price || undefined,
            service_needed: values.service_needed,
            message: values.message || undefined,
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

  const inputClass = 'w-full border border-gray-300 rounded-lg px-4 py-3 text-brand-dark text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-colors bg-white';
  const labelClass = 'block text-sm font-medium text-brand-navy mb-1.5';

  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-gold font-semibold text-sm uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us what you need. We will review your requirements and get back to you within 1 business day.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-brand-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-4">Contact Information</h2>
                <p className="text-brand-gray text-sm leading-relaxed">
                  Our team is based in China and available to answer your sourcing questions. We respond to all inquiries within 1 business day.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-sm">Office</p>
                    <p className="text-brand-gray text-sm">Guangzhou, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-sm">Email</p>
                    <a href="mailto:info@ssourcing.com" className="text-brand-blue text-sm hover:text-brand-sky transition-colors">
                      info@ssourcing.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-sm">Phone / WhatsApp</p>
                    <a href="tel:+8620XXXXXXXX" className="text-brand-blue text-sm hover:text-brand-sky transition-colors">
                      +86 20 XXXX XXXX
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-blue" />
                  </div>
                  <div>
                    <p className="font-semibold text-brand-navy text-sm">Response Time</p>
                    <p className="text-brand-gray text-sm">Within 1 business day</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="font-semibold text-brand-navy mb-3">What Happens Next?</h3>
                <ul className="space-y-2">
                  {[
                    'We review your requirements',
                    'A sourcing specialist contacts you',
                    'We provide a tailored proposal',
                    'You decide — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-brand-gray">
                      <span className="w-5 h-5 bg-brand-navy rounded-full flex items-center justify-center text-brand-gold text-xs font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-3">Inquiry Received</h2>
                  <p className="text-brand-gray mb-6">
                    Thank you for your inquiry. A member of our sourcing team will review your requirements and contact you within 1 business day.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-brand-blue hover:bg-brand-sky text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-brand-navy mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass} htmlFor="full_name">Full Name *</label>
                      <input id="full_name" name="full_name" type="text" value={values.full_name} onChange={onChange} required placeholder="Your full name" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="email">Business Email *</label>
                      <input id="email" name="email" type="email" value={values.email} onChange={onChange} required placeholder="you@company.com" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="company">Company Name</label>
                      <input id="company" name="company" type="text" value={values.company} onChange={onChange} placeholder="Your company" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="country">Country</label>
                      <input id="country" name="country" type="text" value={values.country} onChange={onChange} placeholder="e.g. United States" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="phone">Phone / WhatsApp</label>
                      <input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange} placeholder="+1 555 000 0000" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="service_needed">Service Needed *</label>
                      <select id="service_needed" name="service_needed" value={values.service_needed} onChange={onChange} required className={inputClass}>
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass} htmlFor="product_type">Product You Want to Source *</label>
                      <input id="product_type" name="product_type" type="text" value={values.product_type} onChange={onChange} required placeholder="e.g. Outdoor furniture, LED lights, Apparel..." className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="quantity">Estimated Quantity</label>
                      <input id="quantity" name="quantity" type="text" value={values.quantity} onChange={onChange} placeholder="e.g. 500 units, 1 container" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass} htmlFor="target_price">Target Unit Price</label>
                      <input id="target_price" name="target_price" type="text" value={values.target_price} onChange={onChange} placeholder="e.g. USD 15–20 per unit" className={inputClass} />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass} htmlFor="message">Additional Details</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={values.message}
                        onChange={onChange}
                        placeholder="Any additional requirements, specifications, certifications needed, timeline, or questions..."
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-brand-gold hover:bg-yellow-600 disabled:opacity-60 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                    </button>
                    <p className="text-brand-gray text-xs mt-3 text-center">
                      No commitment required. We will review your inquiry and respond within 1 business day.
                    </p>
                  </div>
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
