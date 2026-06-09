import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import CTABannerSection from '@/components/home/CTABannerSection';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  { value: 'full_sourcing', label: 'Full Sourcing Service (end-to-end)' },
  { value: 'supplier_only', label: 'Supplier Sourcing & Shortlisting Only' },
  { value: 'factory_audit', label: 'Factory Audit & Verification' },
  { value: 'quality_inspection', label: 'Quality Control Inspection' },
  { value: 'shipping_only', label: 'Shipping Coordination Only' },
  { value: 'consulting', label: 'Sourcing Strategy Consulting' },
  { value: 'other', label: 'Other / Not Sure Yet' },
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_description: '',
  target_quantity: '',
  target_price: '',
  service_needed: '',
  timeline: '',
  additional_notes: '',
};

function validate(v) {
  if (!v.full_name.trim()) return 'Full name is required.';
  if (!v.email.trim()) return 'Email address is required.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
  if (!v.product_description.trim() || v.product_description.trim().length < 10)
    return 'Please describe the product you want to source (at least 10 characters).';
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
            phone: values.phone,
            product_description: values.product_description,
            target_quantity: values.target_quantity,
            target_price: values.target_price,
            service_needed: values.service_needed,
            timeline: values.timeline,
            additional_notes: values.additional_notes,
          },
        })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed. Please try again.';
        console.error('Insert error:', msg);
        setError(msg);
        setStatus('error');
        return;
      }

      console.log('Inquiry submitted successfully:', response?.data?.id);
      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Submission error:', err);
      setError(err.message || 'An unexpected error occurred. Please try again.');
      setStatus('error');
    }
  };

  const inputClass = 'w-full px-4 py-3 border border-slate-300 rounded-lg text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-colors bg-white placeholder-gray-400';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div>
      {/* Page Header */}
      <div className="bg-brand-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-300 mb-3 bg-white/10 px-3 py-1 rounded-full">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Tell us what you need and we'll respond within 24 hours with a free sourcing plan and initial supplier recommendations.
          </p>
        </div>
      </div>

      <section className="py-20 md:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-brand-navy mb-2">Contact Information</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Our team is based in China and available Monday–Friday, 9am–6pm CST.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
                  { icon: Phone, label: 'Phone / WhatsApp', value: '+86 755 0000 0000', href: 'tel:+8675500000000' },
                  { icon: MapPin, label: 'Location', value: 'Shenzhen, Guangdong, China', href: null },
                  { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-slate-200">
                    <div className="w-9 h-9 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm font-medium text-brand-navy hover:text-brand-blue no-underline">{value}</a>
                      ) : (
                        <p className="text-sm font-medium text-brand-navy">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-blue rounded-xl p-5 text-white">
                <h3 className="font-semibold mb-2">What Happens Next?</h3>
                <ol className="space-y-2 text-sm text-blue-100">
                  <li className="flex gap-2"><span className="font-bold text-brand-gold">1.</span> We review your inquiry within 24 hours</li>
                  <li className="flex gap-2"><span className="font-bold text-brand-gold">2.</span> We send you a free sourcing plan</li>
                  <li className="flex gap-2"><span className="font-bold text-brand-gold">3.</span> We schedule a call to discuss your needs</li>
                  <li className="flex gap-2"><span className="font-bold text-brand-gold">4.</span> We begin supplier research immediately</li>
                </ol>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">
                <h2 className="text-xl font-bold text-brand-navy mb-6">Sourcing Inquiry Form</h2>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">Inquiry Received!</h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for your inquiry. Our team will review your requirements and respond within 24 hours with a free sourcing plan.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-sm font-medium text-brand-blue hover:text-brand-navy"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass} htmlFor="full_name">Full Name <span className="text-brand-red">*</span></label>
                        <input id="full_name" name="full_name" type="text" value={values.full_name} onChange={onChange} placeholder="Your full name" className={inputClass} required />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="email">Business Email <span className="text-brand-red">*</span></label>
                        <input id="email" name="email" type="email" value={values.email} onChange={onChange} placeholder="you@company.com" className={inputClass} required />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass} htmlFor="company">Company Name</label>
                        <input id="company" name="company" type="text" value={values.company} onChange={onChange} placeholder="Your company" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="country">Country</label>
                        <input id="country" name="country" type="text" value={values.country} onChange={onChange} placeholder="e.g. United States" className={inputClass} />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass} htmlFor="phone">Phone / WhatsApp</label>
                        <input id="phone" name="phone" type="tel" value={values.phone} onChange={onChange} placeholder="+1 555 000 0000" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="service_needed">Service Needed <span className="text-brand-red">*</span></label>
                        <select id="service_needed" name="service_needed" value={values.service_needed} onChange={onChange} className={inputClass} required>
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Product description */}
                    <div>
                      <label className={labelClass} htmlFor="product_description">
                        Product Description <span className="text-brand-red">*</span>
                      </label>
                      <textarea
                        id="product_description"
                        name="product_description"
                        rows={4}
                        value={values.product_description}
                        onChange={onChange}
                        placeholder="Describe the product you want to source — include material, size, function, certifications needed, etc."
                        className={inputClass}
                        required
                      />
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass} htmlFor="target_quantity">Target Quantity</label>
                        <input id="target_quantity" name="target_quantity" type="text" value={values.target_quantity} onChange={onChange} placeholder="e.g. 1,000 units / month" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass} htmlFor="target_price">Target Unit Price</label>
                        <input id="target_price" name="target_price" type="text" value={values.target_price} onChange={onChange} placeholder="e.g. USD 5–8 per unit" className={inputClass} />
                      </div>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className={labelClass} htmlFor="timeline">Desired Timeline</label>
                      <input id="timeline" name="timeline" type="text" value={values.timeline} onChange={onChange} placeholder="e.g. Need delivery by September 2026" className={inputClass} />
                    </div>

                    {/* Notes */}
                    <div>
                      <label className={labelClass} htmlFor="additional_notes">Additional Notes</label>
                      <textarea
                        id="additional_notes"
                        name="additional_notes"
                        rows={3}
                        value={values.additional_notes}
                        onChange={onChange}
                        placeholder="Any other requirements, certifications, packaging needs, or questions..."
                        className={inputClass}
                      />
                    </div>

                    {/* Error */}
                    {error && (
                      <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-brand-blue hover:bg-brand-navy disabled:opacity-60 text-white font-semibold py-4 rounded-lg transition-colors text-base"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      No commitment required. We'll respond within 24 hours with a free sourcing plan.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
