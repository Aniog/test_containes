import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import {
  MapPin, Mail, Phone, Clock, CheckCircle, ArrowRight, AlertCircle
} from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
];

const initialValues = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_type: '',
  product_description: '',
  target_quantity: '',
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
    if (!values.full_name.trim()) return 'Full name is required.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'A valid email address is required.';
    if (!values.product_type.trim()) return 'Product type is required.';
    if (!values.product_description.trim()) return 'Product description is required.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) { setError(err); return; }

    setStatus('submitting');

    const { data: response, error: submitError } = await client
      .from('Sourcing Inquiries')
      .insert({
        data: {
          ...values,
          status: 'new',
        },
      })
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
      <section className="bg-[#1A3C6E] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-[#C0392B] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan and cost estimate.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
                <h3 className="font-bold text-[#1E293B] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E293B] text-sm">Office</p>
                      <p className="text-[#475569] text-sm">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E293B] text-sm">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-[#1A3C6E] text-sm hover:underline">info@ssourcing.cn</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E293B] text-sm">Phone / WhatsApp</p>
                      <p className="text-[#475569] text-sm">+86 20 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-[#1E293B] text-sm">Response Time</p>
                      <p className="text-[#475569] text-sm">Within 24 hours (Mon–Fri)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A3C6E] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3">Why Work With Us?</h3>
                <ul className="space-y-2">
                  {[
                    '500+ verified suppliers',
                    '12+ years in China sourcing',
                    'On-site factory audits',
                    'Transparent pricing',
                    'English-speaking team',
                    '40+ countries served',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-blue-100 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#D4A017] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
                <h3 className="font-bold text-[#1E293B] mb-2 text-sm">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to clarify requirements',
                    'We provide a tailored sourcing plan and cost estimate',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[#475569]">
                      <span className="flex-shrink-0 w-5 h-5 bg-[#EBF2FA] text-[#1A3C6E] rounded-full flex items-center justify-center text-xs font-bold">
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
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1E293B] mb-3">Inquiry Received!</h2>
                  <p className="text-[#475569] mb-6 max-w-md mx-auto">
                    Thank you for your inquiry. A member of our sourcing team will review your requirements and contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 bg-[#1A3C6E] hover:bg-[#15305A] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                  >
                    Submit Another Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-xl border border-[#E2E8F0] p-6 md:p-8 space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-[#1E293B] mb-1">Sourcing Inquiry Form</h2>
                    <p className="text-[#475569] text-sm">Fields marked with * are required.</p>
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  {/* Contact Details */}
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A3C6E] uppercase tracking-wide mb-4 pb-2 border-b border-[#E2E8F0]">
                      Your Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="full_name"
                          value={values.full_name}
                          onChange={onChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={values.country}
                          onChange={onChange}
                          placeholder="United States"
                          className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8]"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 555 000 0000"
                          className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A3C6E] uppercase tracking-wide mb-4 pb-2 border-b border-[#E2E8F0]">
                      Product Requirements
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                          Product Type / Category *
                        </label>
                        <input
                          type="text"
                          name="product_type"
                          value={values.product_type}
                          onChange={onChange}
                          placeholder="e.g. LED lighting, office chairs, sportswear"
                          className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8]"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                          Product Description & Specifications *
                        </label>
                        <textarea
                          name="product_description"
                          value={values.product_description}
                          onChange={onChange}
                          rows={4}
                          placeholder="Describe your product in detail — dimensions, materials, colors, certifications needed, packaging requirements, etc."
                          className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8] resize-none"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                            Target Quantity
                          </label>
                          <input
                            type="text"
                            name="target_quantity"
                            value={values.target_quantity}
                            onChange={onChange}
                            placeholder="e.g. 500 units / month"
                            className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8]"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                            Target Unit Price / Budget
                          </label>
                          <input
                            type="text"
                            name="target_price"
                            value={values.target_price}
                            onChange={onChange}
                            placeholder="e.g. USD 5–8 per unit"
                            className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8]"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                            Expected Timeline
                          </label>
                          <input
                            type="text"
                            name="timeline"
                            value={values.timeline}
                            onChange={onChange}
                            placeholder="e.g. First shipment needed by August 2026"
                            className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="text-sm font-semibold text-[#1A3C6E] uppercase tracking-wide mb-4 pb-2 border-b border-[#E2E8F0]">
                      Services Needed
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceOptions.map((svc) => (
                        <label
                          key={svc}
                          className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-colors duration-150 ${
                            values.services_needed.includes(svc)
                              ? 'border-[#1A3C6E] bg-[#EBF2FA]'
                              : 'border-[#E2E8F0] hover:border-[#1A3C6E]/40 hover:bg-[#F8FAFC]'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={values.services_needed.includes(svc)}
                            onChange={() => toggleService(svc)}
                            className="w-4 h-4 accent-[#1A3C6E]"
                          />
                          <span className="text-sm text-[#1E293B] font-medium">{svc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div>
                    <label className="block text-sm font-medium text-[#1E293B] mb-1.5">
                      Additional Notes
                    </label>
                    <textarea
                      name="additional_notes"
                      value={values.additional_notes}
                      onChange={onChange}
                      rows={3}
                      placeholder="Any other information that would help us understand your requirements..."
                      className="w-full px-4 py-2.5 border border-[#E2E8F0] rounded-lg text-[#1E293B] text-sm focus:outline-none focus:border-[#1A3C6E] focus:ring-1 focus:ring-[#1A3C6E] placeholder-[#94A3B8] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2 bg-[#C0392B] hover:bg-[#A93226] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-6 py-4 rounded-lg transition-colors duration-200"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Sourcing Inquiry <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-[#64748B] text-center">
                    By submitting this form, you agree to be contacted by our team regarding your sourcing inquiry. We do not share your information with third parties.
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
