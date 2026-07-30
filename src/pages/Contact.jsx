import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import CTAButton from '@/components/CTAButton';
import SectionHeader from '@/components/SectionHeader';
import { Mail, Phone, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Supplier Negotiation',
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  product_description: '',
  target_quantity: '',
  target_price: '',
  services_needed: [],
  additional_notes: '',
};

function validate(v) {
  if (!v.full_name.trim()) return 'Full name is required.';
  if (!v.email.trim()) return 'Email address is required.';
  if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.';
  if (!v.product_description.trim() || v.product_description.trim().length < 10)
    return 'Please describe your product in at least 10 characters.';
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

  const toggleService = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
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
            product_description: values.product_description,
            target_quantity: values.target_quantity || undefined,
            target_price: values.target_price || undefined,
            services_needed: values.services_needed.length > 0 ? values.services_needed : undefined,
            additional_notes: values.additional_notes || undefined,
          },
        })
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
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-red text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us what you need and we'll respond within one business day with a tailored sourcing plan and fee estimate.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-0.5">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-gray-600 text-sm hover:text-navy transition-colors">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-0.5">Phone / WhatsApp</div>
                    <a href="tel:+8618000000000" className="text-gray-600 text-sm hover:text-navy transition-colors">
                      +86 180 0000 0000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-0.5">Location</div>
                    <span className="text-gray-600 text-sm">Guangzhou, China<br />Serving buyers worldwide</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-navy" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 mb-0.5">Response Time</div>
                    <span className="text-gray-600 text-sm">Within 1 business day</span>
                  </div>
                </div>
              </div>

              <div className="bg-navy rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">What Happens Next?</h3>
                <ul className="flex flex-col gap-3">
                  {[
                    'We review your inquiry and product requirements',
                    'We send you a free sourcing plan and fee estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className="w-5 h-5 bg-brand-red rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
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
                <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center shadow-sm">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3">Inquiry Received!</h2>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for reaching out. We've received your sourcing inquiry and will respond within one business day with a tailored plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-navy font-semibold text-sm hover:text-navy-dark transition-colors"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 mb-6 text-sm">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="full_name" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        id="full_name"
                        name="full_name"
                        type="text"
                        value={values.full_name}
                        onChange={onChange}
                        placeholder="Your full name"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Business Email <span className="text-brand-red">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        placeholder="you@company.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Your Country
                      </label>
                      <input
                        id="country"
                        name="country"
                        type="text"
                        value={values.country}
                        onChange={onChange}
                        placeholder="e.g. United States"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label htmlFor="product_description" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Product Description <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={4}
                      value={values.product_description}
                      onChange={onChange}
                      placeholder="Describe the product you want to source — type, materials, specifications, intended use, etc."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label htmlFor="target_quantity" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Target Quantity
                      </label>
                      <input
                        id="target_quantity"
                        name="target_quantity"
                        type="text"
                        value={values.target_quantity}
                        onChange={onChange}
                        placeholder="e.g. 500 units / month"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="target_price" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Target Unit Price
                      </label>
                      <input
                        id="target_price"
                        name="target_price"
                        type="text"
                        value={values.target_price}
                        onChange={onChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Services Needed <span className="text-gray-400 font-normal">(select all that apply)</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => {
                        const selected = values.services_needed.includes(svc);
                        return (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => toggleService(svc)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                              selected
                                ? 'bg-navy text-white border-navy'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-navy hover:text-navy'
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="additional_notes" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      id="additional_notes"
                      name="additional_notes"
                      rows={3}
                      value={values.additional_notes}
                      onChange={onChange}
                      placeholder="Any other details, deadlines, certifications required, or questions for our team."
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-brand-red text-white font-bold py-3.5 rounded-lg hover:bg-brand-red-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base"
                  >
                    {status === 'submitting' ? 'Sending Inquiry…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-gray-400 text-xs text-center mt-3">
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
