import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier Sourcing' },
  { value: 'factory_verification', label: 'Factory Verification & Audit' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_followup', label: 'Production Follow-up' },
  { value: 'shipping_coordination', label: 'Shipping Coordination' },
  { value: 'private_label_oem', label: 'Private Label / OEM' },
  { value: 'full_service', label: 'Full Sourcing Service' },
  { value: 'not_sure', label: 'Not Sure — Need Advice' },
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  service_needed: '',
  product_description: '',
  target_quantity: '',
  target_price: '',
  timeline: '',
  additional_notes: '',
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
    if (!values.email.trim()) return 'Email address is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_description.trim()) return 'Please describe the product you want to source.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) { setError(err); return; }

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
            service_needed: values.service_needed || undefined,
            product_description: values.product_description,
            target_quantity: values.target_quantity || undefined,
            target_price: values.target_price || undefined,
            timeline: values.timeline || undefined,
            additional_notes: values.additional_notes || undefined,
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msgs = Array.isArray(response?.errors) ? response.errors.join(', ') : (insertError?.message || 'Submission failed.');
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

  const inputClass = 'w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:ring-2 focus:ring-brand-navy focus:border-transparent bg-white placeholder-gray-400';
  const labelClass = 'block text-sm font-medium text-brand-dark mb-1.5';

  return (
    <div>
      {/* Hero */}
      <section style={{ backgroundColor: '#1A3C6E' }} className="py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p style={{ color: '#D4A017' }} className="text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#ffffff' }}>
              Get a Free Sourcing Quote
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#bfdbfe' }}>
              Tell us what you need. We'll review your requirements and respond within 24 hours with a free consultation and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-brand-bg">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl border border-brand-border p-6">
                <h3 className="text-lg font-bold text-brand-navy mb-4">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Office Location</p>
                      <p className="text-sm text-brand-muted">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-sm text-brand-navy hover:text-brand-red transition-colors">info@ssourcing.cn</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Phone / WhatsApp</p>
                      <p className="text-sm text-brand-muted">+86 20 1234 5678</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-brand-dark">Response Time</p>
                      <p className="text-sm text-brand-muted">Within 24 hours (business days)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-navy rounded-2xl p-6">
                <h3 className="text-white font-bold mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We schedule a free consultation call',
                    'We provide a detailed sourcing proposal',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-brand-red text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      <p className="text-blue-200 text-sm">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-brand-border p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-brand-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy mb-3">Inquiry Received!</h2>
                  <p className="text-brand-muted mb-6 max-w-md mx-auto">
                    Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 bg-brand-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-brand-border p-8">
                  <h2 className="text-2xl font-bold text-brand-navy mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="full_name" className={labelClass}>Full Name <span className="text-brand-red">*</span></label>
                        <input id="full_name" name="full_name" type="text" value={values.full_name} onChange={onChange} placeholder="Your full name" className={inputClass} required />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>Business Email <span className="text-brand-red">*</span></label>
                        <input id="email" name="email" type="email" value={values.email} onChange={onChange} placeholder="you@company.com" className={inputClass} required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="company" className={labelClass}>Company Name</label>
                        <input id="company" name="company" type="text" value={values.company} onChange={onChange} placeholder="Your company" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="country" className={labelClass}>Country</label>
                        <input id="country" name="country" type="text" value={values.country} onChange={onChange} placeholder="e.g. United Kingdom" className={inputClass} />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className={labelClass}>Phone / WhatsApp</label>
                        <input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange} placeholder="+1 234 567 8900" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="service_needed" className={labelClass}>Service Needed</label>
                        <select id="service_needed" name="service_needed" value={values.service_needed} onChange={onChange} className={inputClass}>
                          <option value="">Select a service...</option>
                          {serviceOptions.map(({ value, label }) => (
                            <option key={value} value={value}>{label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product_description" className={labelClass}>Product Description <span className="text-brand-red">*</span></label>
                      <textarea
                        id="product_description"
                        name="product_description"
                        rows={4}
                        value={values.product_description}
                        onChange={onChange}
                        placeholder="Describe the product(s) you want to source: material, dimensions, function, certifications needed, etc."
                        className={inputClass}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="target_quantity" className={labelClass}>Target Quantity / MOQ</label>
                        <input id="target_quantity" name="target_quantity" type="text" value={values.target_quantity} onChange={onChange} placeholder="e.g. 500 units per order" className={inputClass} />
                      </div>
                      <div>
                        <label htmlFor="target_price" className={labelClass}>Target Unit Price / Budget</label>
                        <input id="target_price" name="target_price" type="text" value={values.target_price} onChange={onChange} placeholder="e.g. USD 5–8 per unit" className={inputClass} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="timeline" className={labelClass}>Desired Timeline</label>
                      <input id="timeline" name="timeline" type="text" value={values.timeline} onChange={onChange} placeholder="e.g. Need delivery by September 2026" className={inputClass} />
                    </div>

                    <div>
                      <label htmlFor="additional_notes" className={labelClass}>Additional Notes</label>
                      <textarea
                        id="additional_notes"
                        name="additional_notes"
                        rows={3}
                        value={values.additional_notes}
                        onChange={onChange}
                        placeholder="Any other requirements, certifications, or questions..."
                        className={inputClass}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 bg-brand-red text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                      {status !== 'submitting' && <ArrowRight className="w-5 h-5" />}
                    </button>

                    <p className="text-xs text-brand-muted text-center">
                      By submitting this form, you agree to be contacted by SSourcing China regarding your inquiry. We do not share your information with third parties.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
