import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { CheckCircle, Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

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
  quantity: '',
  target_price: '',
  services_needed: [],
  message: '',
};

const Contact = () => {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(v => ({ ...v, [name]: value }));
  };

  const handleServiceToggle = (service) => {
    setValues(v => ({
      ...v,
      services_needed: v.services_needed.includes(service)
        ? v.services_needed.filter(s => s !== service)
        : [...v.services_needed, service],
    }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return 'Full name is required.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'A valid email address is required.';
    if (!values.product_type.trim()) return 'Please describe the product you want to source.';
    return null;
  };

  const handleSubmit = async (e) => {
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
            company: values.company,
            country: values.country,
            phone: values.phone,
            product_type: values.product_type,
            quantity: values.quantity,
            target_price: values.target_price,
            services_needed: values.services_needed,
            message: values.message,
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

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get a Free Sourcing Quote</h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us what you need and we'll respond within 24 hours with a free sourcing assessment and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-lightbg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-bold text-primary mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-darktext text-sm">Office Location</p>
                      <p className="text-muted text-sm">Guangzhou, Guangdong, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-darktext text-sm">Email</p>
                      <a href="mailto:info@ssourcing.cn" className="text-primary text-sm hover:text-accent transition-colors">info@ssourcing.cn</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-darktext text-sm">Phone / WhatsApp</p>
                      <a href="tel:+8620XXXXXXXX" className="text-primary text-sm hover:text-accent transition-colors">+86 20 XXXX XXXX</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-darktext text-sm">Response Time</p>
                      <p className="text-muted text-sm">Within 24 hours (Mon–Fri)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-darktext text-sm">Languages</p>
                      <p className="text-muted text-sm">English, Chinese (Mandarin)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-5">
                <h3 className="font-semibold text-darktext mb-3">What Happens Next?</h3>
                <ol className="space-y-2">
                  {[
                    'We review your inquiry within 24 hours',
                    'We schedule a brief call to clarify requirements',
                    'We provide a free sourcing assessment',
                    'You decide whether to proceed — no obligation',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted">
                      <span className="w-5 h-5 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-xl border border-border p-10 text-center">
                  <CheckCircle className="w-14 h-14 text-success mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-primary mb-2">Inquiry Received</h2>
                  <p className="text-muted mb-6">Thank you for contacting SSourcing China. We'll review your requirements and get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-primary hover:bg-blue-900 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-border p-6 md:p-8 space-y-5">
                  <h2 className="text-xl font-bold text-primary mb-1">Sourcing Inquiry Form</h2>
                  <p className="text-muted text-sm mb-4">Fields marked with * are required.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="full_name"
                        value={values.full_name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1">Business Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        placeholder="e.g. United States"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1">Phone / WhatsApp</label>
                      <input
                        type="text"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        placeholder="+1 555 000 0000"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1">Product Type *</label>
                      <input
                        type="text"
                        name="product_type"
                        value={values.product_type}
                        onChange={handleChange}
                        placeholder="e.g. Bluetooth speakers, furniture"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        name="quantity"
                        value={values.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 units/month"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-darktext mb-1">Target Unit Price</label>
                      <input
                        type="text"
                        name="target_price"
                        value={values.target_price}
                        onChange={handleChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-darktext mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map(s => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => handleServiceToggle(s)}
                          className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-colors ${
                            values.services_needed.includes(s)
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-muted border-border hover:border-primary hover:text-primary'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-darktext mb-1">Additional Details</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Any other requirements, certifications needed, destination country, timeline, etc."
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-accent text-sm px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent hover:bg-red-700 disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-lg text-base transition-colors"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-muted text-center">We respond within 24 hours. No obligation, no upfront fees.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
