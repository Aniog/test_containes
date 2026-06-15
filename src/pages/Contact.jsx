import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier Sourcing' },
  { value: 'factory_audit', label: 'Factory Audit & Verification' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_followup', label: 'Production Follow-up' },
  { value: 'shipping_coordination', label: 'Shipping Coordination' },
  { value: 'full_service', label: 'Full Sourcing Service' },
  { value: 'not_sure', label: 'Not Sure — Need Advice' },
];

const timelineOptions = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '1_month', label: 'Within 1 month' },
  { value: '1_3_months', label: '1–3 months' },
  { value: '3_6_months', label: '3–6 months' },
  { value: 'flexible', label: 'Flexible / Not sure yet' },
];

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product_description: '',
  target_quantity: '',
  target_price: '',
  service_needed: '',
  timeline: '',
  additional_notes: '',
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.name.trim()) return 'Your name is required.';
    if (!values.email.trim()) return 'Your email address is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_description.trim()) return 'Please describe the product you want to source.';
    if (values.product_description.trim().length < 10) return 'Product description must be at least 10 characters.';
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
      const insertData = {
        name: values.name,
        email: values.email,
        product_description: values.product_description,
        status: 'new',
      };
      if (values.company) insertData.company = values.company;
      if (values.country) insertData.country = values.country;
      if (values.target_quantity) insertData.target_quantity = values.target_quantity;
      if (values.target_price) insertData.target_price = values.target_price;
      if (values.service_needed) insertData.service_needed = values.service_needed;
      if (values.timeline) insertData.timeline = values.timeline;
      if (values.additional_notes) insertData.additional_notes = values.additional_notes;

      const { data: response, error: insertError } = await client
        .from('Sourcing Inquiries')
        .insert({ data: insertData })
        .select()
        .single();

      if (insertError || response?.success === false) {
        const msg = Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(', ')
          : insertError?.message || 'Submission failed. Please try again.';
        setError(msg);
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

  const inputClass = 'w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors bg-white placeholder-gray-400';
  const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5';

  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-gold mb-3">Get in Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Tell us what you need and we'll get back to you within 24 hours with a free sourcing plan and cost estimate.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-primary-dark mb-6">Contact Information</h2>
              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-dark">Email</p>
                    <a href="mailto:info@ssourcing.cn" className="text-sm text-gray-600 hover:text-primary transition-colors">info@ssourcing.cn</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-dark">Location</p>
                    <p className="text-sm text-gray-600">Guangzhou, China</p>
                    <p className="text-xs text-gray-500 mt-0.5">Operations across all major manufacturing hubs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary-dark">Business Hours</p>
                    <p className="text-sm text-gray-600">Monday – Friday</p>
                    <p className="text-sm text-gray-600">9:00 AM – 6:00 PM CST (UTC+8)</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-100">
                <h3 className="text-sm font-bold text-primary-dark mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'Your sourcing manager contacts you to clarify details',
                    'We provide a free sourcing plan and cost estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-dark mb-3">Inquiry Received!</h2>
                  <p className="text-gray-600 mb-2">Thank you for reaching out. We've received your sourcing inquiry.</p>
                  <p className="text-gray-600 mb-6">Your dedicated sourcing manager will review your request and contact you within <strong>24 hours</strong>.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-bold text-primary-dark mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-5 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>Full Name <span className="text-accent">*</span></label>
                      <input type="text" name="name" value={values.name} onChange={onChange} placeholder="Your full name" className={inputClass} required />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address <span className="text-accent">*</span></label>
                      <input type="email" name="email" value={values.email} onChange={onChange} placeholder="you@company.com" className={inputClass} required />
                    </div>
                    <div>
                      <label className={labelClass}>Company Name</label>
                      <input type="text" name="company" value={values.company} onChange={onChange} placeholder="Your company (optional)" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Country</label>
                      <input type="text" name="country" value={values.country} onChange={onChange} placeholder="e.g. United States" className={inputClass} />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className={labelClass}>Product Description <span className="text-accent">*</span></label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={onChange}
                      rows={4}
                      placeholder="Describe the product you want to source — include material, dimensions, function, certifications needed, or any other relevant details."
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>Target Quantity</label>
                      <input type="text" name="target_quantity" value={values.target_quantity} onChange={onChange} placeholder="e.g. 500 units, 1000–2000 pcs" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Target Unit Price</label>
                      <input type="text" name="target_price" value={values.target_price} onChange={onChange} placeholder="e.g. $5–8 USD per unit" className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>Service Needed</label>
                      <select name="service_needed" value={values.service_needed} onChange={onChange} className={inputClass}>
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Timeline</label>
                      <select name="timeline" value={values.timeline} onChange={onChange} className={inputClass}>
                        <option value="">Select timeline...</option>
                        {timelineOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className={labelClass}>Additional Notes</label>
                    <textarea
                      name="additional_notes"
                      value={values.additional_notes}
                      onChange={onChange}
                      rows={3}
                      placeholder="Any other details, questions, or requirements you'd like to share."
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-lg text-base transition-colors duration-200"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    We respond within 24 hours. No obligation — just a free consultation.
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
