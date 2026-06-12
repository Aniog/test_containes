import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Décor',
  'Apparel & Textiles',
  'Industrial Equipment',
  'Toys & Baby Products',
  'Sports & Outdoor Gear',
  'Packaging & Labels',
  'Auto Parts',
  'Health & Beauty',
  'Pet Products',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping & Logistics',
  'Private Label / OEM',
  'Full Sourcing Service',
];

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product_category: '',
  product_description: '',
  estimated_quantity: '',
  target_price: '',
  service_needed: '',
  message: '',
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
    if (!values.name.trim()) return 'Full name is required.';
    if (!values.email.trim()) return 'Email address is required.';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product_description.trim()) return 'Product description is required.';
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
            name: values.name,
            email: values.email,
            company: values.company || undefined,
            country: values.country || undefined,
            product_category: values.product_category || undefined,
            product_description: values.product_description,
            estimated_quantity: values.estimated_quantity || undefined,
            target_price: values.target_price || undefined,
            service_needed: values.service_needed || undefined,
            message: values.message || undefined,
            status: 'new',
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

  const inputClass = 'w-full border border-[#E2E8F0] rounded-lg px-4 py-3 text-[#1A1A2E] text-sm focus:outline-none focus:ring-2 focus:ring-[#1A3C6E] focus:border-transparent bg-white placeholder-[#A0AEC0]';
  const labelClass = 'block text-sm font-medium text-[#1A1A2E] mb-1.5';

  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1A3C6E] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-white/10 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Tell us what you need to source from China. We'll review your inquiry and respond within 24 hours with a tailored sourcing plan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
                <h3 className="font-bold text-[#1A1A2E] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#1A1A2E]">Office Location</p>
                      <p className="text-sm text-[#4A5568]">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#1A1A2E]">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-[#1A3C6E] no-underline hover:text-[#C0392B]">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#1A1A2E]">Phone / WhatsApp</p>
                      <p className="text-sm text-[#4A5568]">+86 20 0000 0000</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#C0392B] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#1A1A2E]">Response Time</p>
                      <p className="text-sm text-[#4A5568]">Within 24 hours (business days)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A3C6E] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We assess your requirements and identify potential suppliers',
                    'We send you a tailored sourcing proposal',
                    'We schedule a call to discuss next steps',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-blue-100">
                      <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
                <h3 className="font-bold text-[#1A1A2E] mb-3">Why Choose Us?</h3>
                <ul className="space-y-2">
                  {[
                    '10+ years China sourcing experience',
                    '1,200+ verified factory network',
                    'Bilingual team (EN/ZH)',
                    'Transparent pricing, no hidden fees',
                    '98% client satisfaction rate',
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-2 text-sm text-[#4A5568]">
                      <CheckCircle className="w-4 h-4 text-[#1A3C6E] flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl border border-[#E2E8F0] p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#1A1A2E] mb-3">Inquiry Received!</h2>
                  <p className="text-[#4A5568] mb-6 max-w-md mx-auto">
                    Thank you for your sourcing inquiry. Our team will review your requirements and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 bg-[#1A3C6E] hover:bg-[#15305A] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-xl border border-[#E2E8F0] p-6 md:p-8">
                  <h2 className="text-xl font-bold text-[#1A1A2E] mb-6">Sourcing Inquiry Form</h2>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm mb-6">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>Full Name <span className="text-[#C0392B]">*</span></label>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        placeholder="Your full name"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Business Email <span className="text-[#C0392B]">*</span></label>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>Product Category</label>
                      <select
                        name="product_category"
                        value={values.product_category}
                        onChange={onChange}
                        className={inputClass}
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Service Needed</label>
                      <select
                        name="service_needed"
                        value={values.service_needed}
                        onChange={onChange}
                        className={inputClass}
                      >
                        <option value="">Select a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className={labelClass}>Product Description <span className="text-[#C0392B]">*</span></label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={onChange}
                      rows={4}
                      placeholder="Describe the product you want to source — include specifications, materials, dimensions, certifications required, etc."
                      className={inputClass}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className={labelClass}>Estimated Quantity</label>
                      <input
                        type="text"
                        name="estimated_quantity"
                        value={values.estimated_quantity}
                        onChange={onChange}
                        placeholder="e.g. 500 units / month"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Target Price (per unit)</label>
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

                  <div className="mb-6">
                    <label className={labelClass}>Additional Message</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      rows={3}
                      placeholder="Any other details, questions, or requirements..."
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#C0392B] hover:bg-[#A93226] disabled:opacity-60 text-white font-bold py-4 rounded-lg text-base transition-colors duration-200"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Sourcing Inquiry'}
                  </button>

                  <p className="text-xs text-[#718096] text-center mt-4">
                    We respond within 24 hours on business days. Your information is kept confidential.
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
