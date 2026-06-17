import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import PageHero from '@/components/shared/PageHero';
import { MapPin, Mail, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  { value: 'full_service', label: 'Full Sourcing Service (End-to-End)' },
  { value: 'supplier_sourcing', label: 'Supplier Sourcing & Shortlisting' },
  { value: 'factory_audit', label: 'Factory Audit & Verification' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_followup', label: 'Production Follow-up' },
  { value: 'shipping', label: 'Shipping Coordination' },
  { value: 'other', label: 'Other / Not Sure Yet' },
];

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product: '',
  quantity: '',
  budget: '',
  service: '',
  message: '',
};

function validate(v) {
  if (!v.name.trim()) return 'Full name is required.';
  if (!v.email.trim()) return 'Email address is required.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
  if (!v.product.trim()) return 'Please describe the product you want to source.';
  if (!v.message.trim()) return 'Please add a message with your requirements.';
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
    try {
      const payload = {
        name: values.name,
        email: values.email,
        company: values.company || undefined,
        country: values.country || undefined,
        product: values.product,
        quantity: values.quantity || undefined,
        budget: values.budget || undefined,
        service: values.service || undefined,
        message: values.message,
        status: 'new',
      };

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({ data: payload })
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

  const inputClass = 'w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent transition';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1';

  return (
    <div>
      <PageHero
        title="Get a Free Sourcing Quote"
        subtitle="Tell us what you need and we'll get back to you within 24 hours with a tailored sourcing plan."
        breadcrumb="Contact"
      />

      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-brand-blue mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Office Locations</div>
                    <div className="text-gray-600 text-sm">Shenzhen, Guangdong, China</div>
                    <div className="text-gray-600 text-sm">Yiwu, Zhejiang, China</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-brand-blue text-sm hover:text-brand-red transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">Response Time</div>
                    <div className="text-gray-600 text-sm">Within 24 business hours</div>
                    <div className="text-gray-500 text-xs">Mon–Fri, China Standard Time</div>
                  </div>
                </div>
              </div>

              <div className="bg-brand-bg-alt rounded-xl p-5">
                <h3 className="font-bold text-brand-blue text-sm mb-3">What happens next?</h3>
                <ol className="flex flex-col gap-2">
                  {[
                    'We review your requirements',
                    'We prepare a tailored sourcing plan',
                    'We schedule a call to discuss details',
                    'We begin supplier research',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
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
                <div className="card-base p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue mb-3">Inquiry Received!</h3>
                  <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                    Thank you for reaching out. Our team will review your requirements and get back to you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="card-base p-8">
                  <h2 className="text-xl font-bold text-brand-blue mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 mb-6 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name <span className="text-brand-red">*</span></label>
                      <input name="name" type="text" value={values.name} onChange={onChange} placeholder="Your full name" className={inputClass} required />
                    </div>
                    <div>
                      <label className={labelClass}>Business Email <span className="text-brand-red">*</span></label>
                      <input name="email" type="email" value={values.email} onChange={onChange} placeholder="you@company.com" className={inputClass} required />
                    </div>
                    <div>
                      <label className={labelClass}>Company Name</label>
                      <input name="company" type="text" value={values.company} onChange={onChange} placeholder="Your company" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Country</label>
                      <input name="country" type="text" value={values.country} onChange={onChange} placeholder="e.g. United States" className={inputClass} />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>Product You Want to Source <span className="text-brand-red">*</span></label>
                      <input name="product" type="text" value={values.product} onChange={onChange} placeholder="e.g. LED desk lamps, custom packaging boxes" className={inputClass} required />
                    </div>
                    <div>
                      <label className={labelClass}>Estimated Quantity</label>
                      <input name="quantity" type="text" value={values.quantity} onChange={onChange} placeholder="e.g. 500 units/month" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Target Budget / Unit Price</label>
                      <input name="budget" type="text" value={values.budget} onChange={onChange} placeholder="e.g. $5–8 per unit" className={inputClass} />
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>Service Required</label>
                      <select name="service" value={values.service} onChange={onChange} className={inputClass}>
                        <option value="">Select a service (optional)</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className={labelClass}>Additional Requirements <span className="text-brand-red">*</span></label>
                      <textarea
                        name="message"
                        value={values.message}
                        onChange={onChange}
                        rows={5}
                        placeholder="Please describe your product specifications, quality standards, certifications needed, timeline, or any other relevant details."
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-gray-400">
                      Your information is kept confidential and never shared with third parties.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-primary whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Sending…' : 'Submit Inquiry'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
