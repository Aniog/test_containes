import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  { value: 'supplier_sourcing', label: 'Supplier Sourcing & Shortlisting' },
  { value: 'factory_audit', label: 'Factory Audit & Verification' },
  { value: 'quality_inspection', label: 'Quality Control & Inspection' },
  { value: 'production_followup', label: 'Production Follow-up & Monitoring' },
  { value: 'shipping', label: 'Shipping Coordination' },
  { value: 'full_service', label: 'Full Sourcing Service (End-to-End)' },
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
  additional_notes: '',
  how_did_you_hear: '',
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.';
    if (!values.email.trim()) return 'Email address is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_description.trim()) return 'Product description is required.';
    if (values.product_description.trim().length < 10) return 'Please provide more detail about your product (at least 10 characters).';
    if (!values.service_needed) return 'Please select the service you need.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) {
      setErrorMsg(err);
      return;
    }

    setStatus('submitting');

    const payload = { ...values };
    // Remove empty optional fields
    Object.keys(payload).forEach((k) => {
      if (payload[k] === '') delete payload[k];
    });

    const { data: response, error } = await client
      .from('Sourcing Inquiries')
      .insert({ data: payload })
      .select()
      .single();

    if (error || response?.success === false) {
      const msg = Array.isArray(response?.errors) && response.errors.length > 0
        ? response.errors.join(', ')
        : error?.message || 'Submission failed. Please try again.';
      setErrorMsg(msg);
      setStatus('error');
      return;
    }

    setStatus('success');
    setValues(initialValues);
  };

  const inputClass = 'w-full border border-[#dde3ec] rounded-lg px-4 py-2.5 text-sm text-[#1a2332] bg-white focus:outline-none focus:border-[#1a4f8a] focus:ring-2 focus:ring-[#1a4f8a]/10 transition-colors placeholder:text-[#a8b8cc]';
  const labelClass = 'block text-sm font-medium text-[#1a2332] mb-1.5';

  return (
    <div>
      {/* Page Header */}
      <section className="bg-[#0d2340] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#e8621a] mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-[#a8b8cc] text-lg leading-relaxed">
              Tell us what you need and we'll get back to you within 24 hours with a no-obligation sourcing plan and fee estimate.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-[#dde3ec] p-6">
                <h2 className="text-lg font-bold text-[#0d2340] mb-5">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#f4f6f9] rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#5a6a7e] uppercase tracking-wide mb-0.5">Location</p>
                      <p className="text-sm text-[#1a2332]">Guangzhou, China</p>
                      <p className="text-xs text-[#5a6a7e]">Operations across major manufacturing hubs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#f4f6f9] rounded-lg flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#5a6a7e] uppercase tracking-wide mb-0.5">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-[#1a4f8a] hover:text-[#0d2340]">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#f4f6f9] rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#5a6a7e] uppercase tracking-wide mb-0.5">Phone / WhatsApp</p>
                      <p className="text-sm text-[#1a2332]">+86 (0) 20 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#f4f6f9] rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-[#1a4f8a]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#5a6a7e] uppercase tracking-wide mb-0.5">Response Time</p>
                      <p className="text-sm text-[#1a2332]">Within 24 business hours</p>
                      <p className="text-xs text-[#5a6a7e]">Mon–Fri, 9am–6pm CST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0d2340] rounded-xl p-6">
                <h3 className="text-white font-semibold mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We schedule a brief call to clarify requirements',
                    'We provide a free sourcing plan and fee estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-[#e8621a] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-[#a8b8cc] text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-[#dde3ec] shadow-sm p-8">
                <h2 className="text-xl font-bold text-[#0d2340] mb-6">Sourcing Inquiry Form</h2>

                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0d2340] mb-2">Inquiry Submitted!</h3>
                    <p className="text-[#5a6a7e] mb-6">
                      Thank you for your inquiry. We'll review your request and get back to you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="bg-[#1a4f8a] hover:bg-[#0d2340] text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={onChange}
                          placeholder="Your full name"
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="you@company.com"
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Your company"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={onChange}
                          placeholder="e.g. United States"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 555 000 0000"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>
                          Service Needed <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="service_needed"
                          value={values.service_needed}
                          onChange={onChange}
                          className={inputClass}
                          required
                        >
                          <option value="">Select a service...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Product Description */}
                    <div>
                      <label className={labelClass}>
                        Product Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="product_description"
                        value={values.product_description}
                        onChange={onChange}
                        rows={4}
                        placeholder="Describe the product(s) you want to source — include product name, specifications, materials, intended use, and any certifications required (e.g. CE, RoHS, FDA)."
                        className={inputClass}
                        required
                      />
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Target Quantity</label>
                        <input
                          type="text"
                          name="target_quantity"
                          value={values.target_quantity}
                          onChange={onChange}
                          placeholder="e.g. 500 units / month"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Target Unit Price</label>
                        <input
                          type="text"
                          name="target_price"
                          value={values.target_price}
                          onChange={onChange}
                          placeholder="e.g. USD 5–8 per unit"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className={labelClass}>Additional Notes</label>
                      <textarea
                        name="additional_notes"
                        value={values.additional_notes}
                        onChange={onChange}
                        rows={3}
                        placeholder="Any other requirements, timeline, or questions..."
                        className={inputClass}
                      />
                    </div>

                    {/* How did you hear */}
                    <div>
                      <label className={labelClass}>How did you find us?</label>
                      <input
                        type="text"
                        name="how_did_you_hear"
                        value={values.how_did_you_hear}
                        onChange={onChange}
                        placeholder="e.g. Google search, LinkedIn, referral..."
                        className={inputClass}
                      />
                    </div>

                    {/* Error */}
                    {(status === 'error' || errorMsg) && (
                      <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                        <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-red-700 text-sm">{errorMsg}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full bg-[#e8621a] hover:bg-[#c9521a] disabled:opacity-60 text-white font-semibold py-3.5 rounded-lg transition-colors text-base"
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                    </button>

                    <p className="text-xs text-[#5a6a7e] text-center">
                      By submitting this form, you agree to be contacted by SSourcing China regarding your inquiry. We do not share your information with third parties.
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
