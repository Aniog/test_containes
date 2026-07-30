import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
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

export default function Contact() {
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
      status: 'new',
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
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get a Free Sourcing Quote
            </h1>
            <p className="text-blue-200 text-lg leading-relaxed">
              Tell us about your product and sourcing requirements. We will review your inquiry and respond within 24 hours with an initial assessment and next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 bg-lightblue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-darktext mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-darktext">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-mutedtext hover:text-primary transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-darktext">Phone / WhatsApp</p>
                      <p className="text-sm text-mutedtext">+86 (0) 20 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-darktext">Office Locations</p>
                      <p className="text-sm text-mutedtext">Guangzhou & Yiwu, China</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-darktext">Response Time</p>
                      <p className="text-sm text-mutedtext">Within 24 hours (business days)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-darktext mb-3">What Happens Next?</h3>
                <ol className="space-y-3">
                  {[
                    'We review your inquiry within 24 hours',
                    'We assess your product and sourcing requirements',
                    'We send you an initial sourcing plan and quote',
                    'We schedule a call to discuss next steps',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-mutedtext">
                      <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold">
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
                <div className="bg-white rounded-2xl border border-gray-200 p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-success" />
                  </div>
                  <h2 className="text-2xl font-bold text-darktext mb-3">Inquiry Received</h2>
                  <p className="text-mutedtext mb-6">
                    Thank you for your inquiry. Our team will review your requirements and get back to you within 24 hours with an initial assessment.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="bg-primary text-white px-6 py-3 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="bg-white rounded-2xl border border-gray-200 p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-darktext mb-8">Sourcing Inquiry Form</h2>

                  {/* Contact Details */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-darktext uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                      Your Details
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-darktext mb-1.5">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="name" name="name" type="text"
                          value={values.name} onChange={onChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-darktext mb-1.5">
                          Business Email <span className="text-accent">*</span>
                        </label>
                        <input
                          id="email" name="email" type="email"
                          value={values.email} onChange={onChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-darktext mb-1.5">
                          Company Name
                        </label>
                        <input
                          id="company" name="company" type="text"
                          value={values.company} onChange={onChange}
                          placeholder="Your company"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-darktext mb-1.5">
                          Country
                        </label>
                        <input
                          id="country" name="country" type="text"
                          value={values.country} onChange={onChange}
                          placeholder="e.g. United States"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-darktext uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                      Product Requirements
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="product" className="block text-sm font-medium text-darktext mb-1.5">
                          Product / Category <span className="text-accent">*</span>
                        </label>
                        <input
                          id="product" name="product" type="text"
                          value={values.product} onChange={onChange}
                          placeholder="e.g. Stainless steel water bottles, 500ml, custom logo"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="quantity" className="block text-sm font-medium text-darktext mb-1.5">
                            Estimated Quantity
                          </label>
                          <input
                            id="quantity" name="quantity" type="text"
                            value={values.quantity} onChange={onChange}
                            placeholder="e.g. 1,000 units / month"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-darktext mb-1.5">
                            Target Budget / Unit Price
                          </label>
                          <input
                            id="budget" name="budget" type="text"
                            value={values.budget} onChange={onChange}
                            placeholder="e.g. USD 3–5 per unit"
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-darktext uppercase tracking-wider mb-4 pb-2 border-b border-gray-100">
                      Services Needed
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
                            values.services_needed.includes(svc)
                              ? 'bg-primary text-white border-primary'
                              : 'bg-white text-darktext border-gray-300 hover:border-primary hover:text-primary'
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-darktext mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="message" name="message" rows={5}
                      value={values.message} onChange={onChange}
                      placeholder="Any additional requirements, certifications needed, timeline, or questions..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-darktext focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-sm text-accent">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-accent text-white py-4 rounded-lg font-semibold text-base hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Sourcing Inquiry'}
                  </button>
                  <p className="text-xs text-mutedtext text-center mt-3">
                    We respond within 24 hours. Your information is kept confidential.
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
