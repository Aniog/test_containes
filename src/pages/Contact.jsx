import { useState } from 'react';
import { DataClient, User } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, CheckCircle, ArrowRight, Send } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const initialForm = {
  full_name: '',
  email: '',
  company: '',
  country: '',
  phone: '',
  product_name: '',
  product_category: '',
  estimated_quantity: '',
  target_price: '',
  service_needed: '',
  message: '',
};

const productCategories = [
  'Electronics & Components',
  'Furniture & Home Décor',
  'Apparel & Textiles',
  'Machinery & Industrial',
  'Toys & Baby Products',
  'Health & Beauty',
  'Sports & Outdoor',
  'Packaging & Labels',
  'Auto Parts',
  'Hardware & Tools',
  'Food & Agriculture',
  'Other',
];

const services = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Private Label / OEM',
  'Full Sourcing Service',
];

const contactInfo = [
  { icon: MapPin, label: 'Location', value: 'Guangzhou, Guangdong, China' },
  { icon: Mail, label: 'Email', value: 'info@ssourcingchina.com', href: 'mailto:info@ssourcingchina.com' },
  { icon: Phone, label: 'Phone', value: '+86 20 XXXX XXXX', href: 'tel:+8620XXXXXXXX' },
  { icon: Clock, label: 'Response Time', value: 'Within 24 business hours' },
];

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.full_name.trim()) return 'Full name is required.';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) return 'A valid email address is required.';
    if (!form.product_name.trim()) return 'Product name is required.';
    if (!form.service_needed) return 'Please select the service you need.';
    if (!form.message.trim() || form.message.trim().length < 10) return 'Please provide more details in the message field.';
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
      const userRecord = await User.upsert({
        email: form.email,
        name: form.full_name,
        role: 'guest',
      });

      const payload = {
        full_name: form.full_name,
        email: form.email,
        product_name: form.product_name,
        service_needed: form.service_needed,
        message: form.message,
        ...(form.company && { company: form.company }),
        ...(form.country && { country: form.country }),
        ...(form.phone && { phone: form.phone }),
        ...(form.product_category && { product_category: form.product_category }),
        ...(form.estimated_quantity && { estimated_quantity: form.estimated_quantity }),
        ...(form.target_price && { target_price: form.target_price }),
        ...(userRecord?.id && { user_id: userRecord.id }),
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
      setForm(initialForm);
    } catch (err) {
      console.error('Contact form error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-borderColor bg-white text-textDark placeholder-textMuted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm transition-colors";
  const labelClass = "block text-sm font-medium text-textDark mb-1.5";

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-gold uppercase tracking-widest">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              Tell us about your sourcing project and we'll respond within 24 hours with a tailored plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-bgLight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-2xl border border-borderColor p-6 shadow-sm">
                <h2 className="text-xl font-bold text-textDark mb-5">Contact Information</h2>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-textMuted uppercase tracking-wider">{info.label}</div>
                        {info.href ? (
                          <a href={info.href} className="text-sm text-textBody hover:text-primary transition-colors font-medium">
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-sm text-textBody font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-3">What Happens Next?</h3>
                <div className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'A sourcing specialist contacts you to clarify requirements',
                    'We provide a tailored sourcing plan and quote',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-blue-100 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-borderColor p-6 shadow-sm">
                <h3 className="font-bold text-textDark mb-3">Why Buyers Choose Us</h3>
                <div className="space-y-2">
                  {[
                    'On-the-ground team in China',
                    'Transparent fees, no hidden costs',
                    'Bilingual communication',
                    'AQL-standard quality inspections',
                    '10+ years of sourcing experience',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-textBody">
                      <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-borderColor p-10 shadow-sm text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-textDark mb-3">Inquiry Received!</h2>
                  <p className="text-textBody mb-6 max-w-md mx-auto">
                    Thank you for your inquiry. A member of our sourcing team will review your request and get back to you within 24 business hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-borderColor p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-textDark mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-textBody text-sm mb-7">Fields marked with * are required.</p>

                  <form onSubmit={onSubmit} className="space-y-5">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Full Name *</label>
                        <input
                          type="text"
                          name="full_name"
                          value={form.full_name}
                          onChange={onChange}
                          placeholder="Your full name"
                          className={inputClass}
                          required
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Business Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={onChange}
                          placeholder="you@company.com"
                          className={inputClass}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
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
                          value={form.country}
                          onChange={onChange}
                          placeholder="e.g. United States"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={onChange}
                        placeholder="+1 555 000 0000"
                        className={inputClass}
                      />
                    </div>

                    <hr className="border-borderColor" />

                    {/* Product Info */}
                    <div>
                      <label className={labelClass}>Product Name / Description *</label>
                      <input
                        type="text"
                        name="product_name"
                        value={form.product_name}
                        onChange={onChange}
                        placeholder="e.g. Wireless Bluetooth Earbuds, Wooden Dining Chair"
                        className={inputClass}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Product Category</label>
                        <select
                          name="product_category"
                          value={form.product_category}
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
                        <label className={labelClass}>Service Needed *</label>
                        <select
                          name="service_needed"
                          value={form.service_needed}
                          onChange={onChange}
                          className={inputClass}
                          required
                        >
                          <option value="">Select a service</option>
                          {services.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className={labelClass}>Estimated Quantity</label>
                        <input
                          type="text"
                          name="estimated_quantity"
                          value={form.estimated_quantity}
                          onChange={onChange}
                          placeholder="e.g. 500 units, 1 x 20ft container"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Target Unit Price</label>
                        <input
                          type="text"
                          name="target_price"
                          value={form.target_price}
                          onChange={onChange}
                          placeholder="e.g. USD 5–8 per unit"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={labelClass}>Additional Details *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={onChange}
                        rows={5}
                        placeholder="Please describe your product requirements, certifications needed, delivery timeline, or any other relevant details..."
                        className={inputClass}
                        required
                      />
                    </div>

                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-red-700 disabled:bg-red-300 text-white font-semibold px-8 py-4 rounded-lg text-base transition-colors shadow-md"
                    >
                      {status === 'submitting' ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Sourcing Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-textMuted text-center">
                      By submitting this form, you agree to our privacy policy. We will never share your information with third parties.
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
