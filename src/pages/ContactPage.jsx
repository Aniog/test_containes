import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { CheckCircle, Mail, MapPin, Globe, Clock, AlertCircle } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  'Supplier Sourcing',
  'Factory Verification',
  'Quality Inspection',
  'Production Follow-up',
  'Shipping Coordination',
  'Other',
];

const initialValues = {
  name: '',
  email: '',
  company: '',
  country: '',
  product: '',
  quantity: '',
  budget: '',
  services_needed: [],
  message: '',
};

export default function ContactPage() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

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
    if (!values.name.trim()) return 'Please enter your name.';
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.';
    if (!values.product.trim()) return 'Please describe the product you want to source.';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');

    const payload = {
      name: values.name.trim(),
      email: values.email.trim(),
      product: values.product.trim(),
    };
    if (values.company.trim()) payload.company = values.company.trim();
    if (values.country.trim()) payload.country = values.country.trim();
    if (values.quantity.trim()) payload.quantity = values.quantity.trim();
    if (values.budget.trim()) payload.budget = values.budget.trim();
    if (values.services_needed.length > 0) payload.services_needed = values.services_needed;
    if (values.message.trim()) payload.message = values.message.trim();

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

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-red-300 text-sm font-semibold uppercase tracking-widest mb-4">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Tell us what you need to source. We'll review your requirements and respond with a free, no-obligation quote within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="flex flex-col gap-5 mb-10">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Location</p>
                    <p className="text-text-muted text-sm">Guangzhou, China<br />Serving buyers worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-accent text-sm hover:underline">info@ssourcingchina.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Languages</p>
                    <p className="text-text-muted text-sm">English & Chinese (Mandarin)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">Response Time</p>
                    <p className="text-text-muted text-sm">Within 24 hours<br />Monday – Saturday</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-bold text-text-dark mb-3">What Happens Next?</h3>
                <ol className="flex flex-col gap-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We send you a free sourcing quote',
                    'We discuss your requirements in detail',
                    'We begin sourcing once you approve',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-sm text-text-muted">
                      <span className="w-5 h-5 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-white rounded-2xl border border-border p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">Inquiry Received!</h2>
                  <p className="text-text-muted leading-relaxed max-w-md mx-auto">
                    Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours with a free sourcing quote.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-border p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-primary mb-2">Sourcing Inquiry Form</h2>
                  <p className="text-text-muted text-sm mb-8">Fields marked with * are required.</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-1.5" htmlFor="name">Full Name *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={values.name} onChange={onChange}
                        placeholder="Your full name"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-1.5" htmlFor="email">Business Email *</label>
                      <input
                        id="email" name="email" type="email" required
                        value={values.email} onChange={onChange}
                        placeholder="you@company.com"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-1.5" htmlFor="company">Company Name</label>
                      <input
                        id="company" name="company" type="text"
                        value={values.company} onChange={onChange}
                        placeholder="Your company"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-1.5" htmlFor="country">Your Country</label>
                      <input
                        id="country" name="country" type="text"
                        value={values.country} onChange={onChange}
                        placeholder="e.g. United States"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-text-dark mb-1.5" htmlFor="product">Product You Want to Source *</label>
                    <input
                      id="product" name="product" type="text" required
                      value={values.product} onChange={onChange}
                      placeholder="e.g. Bluetooth speakers, office chairs, custom packaging..."
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-1.5" htmlFor="quantity">Estimated Quantity / MOQ</label>
                      <input
                        id="quantity" name="quantity" type="text"
                        value={values.quantity} onChange={onChange}
                        placeholder="e.g. 500 units, 1 container"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-text-dark mb-1.5" htmlFor="budget">Target Unit Price / Budget</label>
                      <input
                        id="budget" name="budget" type="text"
                        value={values.budget} onChange={onChange}
                        placeholder="e.g. $5–8 per unit, $10,000 total"
                        className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-sm font-semibold text-text-dark mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                            values.services_needed.includes(svc)
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-text-dark border-border hover:border-primary hover:text-primary'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-text-dark mb-1.5" htmlFor="message">Additional Details</label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={values.message} onChange={onChange}
                      placeholder="Any specific requirements, certifications needed, timeline, or other details..."
                      className="w-full border border-border rounded-lg px-4 py-2.5 text-sm text-text-dark placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm mb-5">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent text-white py-3.5 rounded-lg font-semibold text-base hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-text-muted text-center mt-3">
                    No commitment required. We'll respond within 24 hours.
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
