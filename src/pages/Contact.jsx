import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Audit',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Consolidation & Labeling',
];

const timelineOptions = ['ASAP', '1-3 months', '3-6 months', '6+ months', 'Not sure'];

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_description: '',
  quantity: '',
  target_price: '',
  services_needed: [],
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

  const toggleService = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }));
  };

  const validate = () => {
    if (!values.name.trim()) return 'Name is required.';
    if (!values.email.trim()) return 'Email is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_description.trim() || values.product_description.trim().length < 10)
      return 'Please describe the product you want to source (at least 10 characters).';
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

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      product_description: values.product_description.trim(),
    };
    if (values.company.trim()) payload.company = values.company.trim();
    if (values.country.trim()) payload.country = values.country.trim();
    if (values.phone.trim()) payload.phone = values.phone.trim();
    if (values.quantity.trim()) payload.quantity = values.quantity.trim();
    if (values.target_price.trim()) payload.target_price = values.target_price.trim();
    if (values.services_needed.length > 0) payload.services_needed = values.services_needed;
    if (values.timeline) payload.timeline = values.timeline;
    if (values.additional_notes.trim()) payload.additional_notes = values.additional_notes.trim();
    payload.status = 'new';

    const { data: response, error: submitError } = await client
      .from('Sourcing Inquiries')
      .insert({ data: payload })
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
      {/* Hero */}
      <section className="bg-[#1B2B4B] py-16 md:py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <p className="text-red-400 text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5">Get a Free Sourcing Quote</h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              Tell us what you need and we'll send you a free sourcing plan within 24 hours. No commitment required.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-[#1B2B4B] mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1B2B4B] text-sm">Office</p>
                      <p className="text-gray-600 text-sm">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1B2B4B] text-sm">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-[#2E6DA4] text-sm hover:underline">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1B2B4B] text-sm">Phone / WhatsApp</p>
                      <a href="tel:+8620XXXXXXXX" className="text-[#2E6DA4] text-sm hover:underline">
                        +86 20 XXXX XXXX
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-[#1B2B4B] text-sm">Response Time</p>
                      <p className="text-gray-600 text-sm">Within 24 hours (business days)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h3 className="font-semibold text-[#1B2B4B] mb-3 text-sm">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a free sourcing plan',
                    'We schedule a call to discuss your project',
                    'We begin supplier research',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-5 h-5 bg-[#1B2B4B] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-700 text-sm">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white rounded-xl p-5 border border-gray-200">
                <h3 className="font-semibold text-[#1B2B4B] mb-3 text-sm">Trusted by Buyers in 40+ Countries</h3>
                <div className="flex flex-wrap gap-2">
                  {['🇺🇸 USA', '🇬🇧 UK', '🇩🇪 Germany', '🇦🇺 Australia', '🇨🇦 Canada', '🇸🇬 Singapore', '🇫🇷 France', '🇳🇱 Netherlands'].map((c) => (
                    <span key={c} className="text-xs text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1B2B4B] mb-3">Inquiry Received!</h2>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    Thank you for your inquiry. Our team will review your request and get back to you within 24 hours with a free sourcing plan.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 bg-[#1B2B4B] hover:bg-[#162240] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-xl border border-gray-200 p-7 md:p-8">
                  <h2 className="text-xl font-bold text-[#1B2B4B] mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm mb-5">
                      {error}
                    </div>
                  )}

                  {/* Contact Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Your Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={onChange}
                          placeholder="John Smith"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Business Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="john@company.com"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Your Company Ltd."
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={onChange}
                          placeholder="United States"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone / WhatsApp</label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 555 000 0000"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Product Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Product Description <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={onChange}
                          rows={4}
                          placeholder="Describe the product you want to source — include material, size, function, and any specific requirements."
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent resize-none"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Quantity</label>
                          <input
                            type="text"
                            name="quantity"
                            value={values.quantity}
                            onChange={onChange}
                            placeholder="e.g. 500 units / month"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Target Price</label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={onChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Services Needed</h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                            values.services_needed.includes(svc)
                              ? 'bg-[#1B2B4B] text-white border-[#1B2B4B]'
                              : 'bg-white text-gray-600 border-gray-300 hover:border-[#1B2B4B] hover:text-[#1B2B4B]'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Timeline</h3>
                    <div className="flex flex-wrap gap-2">
                      {timelineOptions.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setValues((v) => ({ ...v, timeline: t }))}
                          className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                            values.timeline === t
                              ? 'bg-[#1B2B4B] text-white border-[#1B2B4B]'
                              : 'bg-white text-gray-600 border-gray-300 hover:border-[#1B2B4B] hover:text-[#1B2B4B]'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div className="mb-7">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                    <textarea
                      name="additional_notes"
                      value={values.additional_notes}
                      onChange={onChange}
                      rows={3}
                      placeholder="Any other details, certifications required, or questions you have."
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#2E6DA4] focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-3.5 rounded-lg text-base transition-colors flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get a Free Sourcing Quote
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">
                    We respond within 24 hours. No spam, no commitment required.
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
