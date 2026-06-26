import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed. Please try again.';
};

const initialValues = {
  name: '',
  email: '',
  phone: '',
  company: '',
  product_interest: '',
  quantity: '',
  message: '',
};

export default function InquirySection() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name';
    if (!v.email.trim()) return 'Please enter your email';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address';
    if (!v.message.trim()) return 'Please tell us about your sourcing needs';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
      return;
    }

    setStatus('submitting');

    try {
      const { data: response, error: createError } = await client
        .from('SourcingInquiries')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            phone: values.phone.trim(),
            company: values.company.trim(),
            product_interest: values.product_interest.trim(),
            quantity: values.quantity.trim(),
            message: values.message.trim(),
            created_at: new Date().toISOString(),
          },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        setError(getErrorMessage(response, createError));
        setStatus('error');
        return;
      }

      setStatus('success');
      setValues(initialValues);
    } catch (err) {
      console.error('Inquiry submission error:', err);
      setError(err.message || 'Request failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="py-16 md:py-24 bg-ss-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-ss-text tracking-tight mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-lg text-ss-body leading-relaxed mb-8">
              Tell us about your sourcing needs and we will get back to you within 24 hours with a 
              tailored proposal and estimated costs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-ss-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-ss-text">Free Consultation</h3>
                  <p className="text-sm text-ss-body">No obligation, no upfront payment required.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-ss-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-ss-text">Fast Response</h3>
                  <p className="text-sm text-ss-body">We typically respond within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-ss-blue" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold text-ss-text">Tailored Solutions</h3>
                  <p className="text-sm text-ss-body">Every inquiry gets a custom sourcing plan.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-xl border border-ss-border shadow-sm p-6 md:p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-ss-success" />
                </div>
                <h3 className="text-lg font-semibold text-ss-text mb-2">Thank You!</h3>
                <p className="text-sm text-ss-body mb-6">
                  Your inquiry has been submitted. We will review your requirements and get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="px-6 py-2.5 bg-ss-blue text-white text-sm font-medium rounded-lg hover:bg-ss-blue-dark transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5" aria-busy={status === 'submitting'}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-name" className="block text-sm font-medium text-ss-text mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-email" className="block text-sm font-medium text-ss-text mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2.5 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="inquiry-company" className="block text-sm font-medium text-ss-text mb-1.5">
                      Company
                    </label>
                    <input
                      id="inquiry-company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      placeholder="Your company name"
                      className="w-full px-3.5 py-2.5 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiry-phone" className="block text-sm font-medium text-ss-text mb-1.5">
                      Phone
                    </label>
                    <input
                      id="inquiry-phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={onChange}
                      placeholder="+1 234 567 8900"
                      className="w-full px-3.5 py-2.5 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-product" className="block text-sm font-medium text-ss-text mb-1.5">
                    Product or Category You Want to Source
                  </label>
                  <input
                    id="inquiry-product"
                    name="product_interest"
                    type="text"
                    value={values.product_interest}
                    onChange={onChange}
                    placeholder="e.g. Bluetooth headphones, home decor, auto parts"
                    className="w-full px-3.5 py-2.5 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-quantity" className="block text-sm font-medium text-ss-text mb-1.5">
                    Estimated Quantity
                  </label>
                  <input
                    id="inquiry-quantity"
                    name="quantity"
                    type="text"
                    value={values.quantity}
                    onChange={onChange}
                    placeholder="e.g. 500-1000 units per month"
                    className="w-full px-3.5 py-2.5 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-sm font-medium text-ss-text mb-1.5">
                    Tell Us About Your Sourcing Needs <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="inquiry-message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={onChange}
                    required
                    placeholder="Describe your product, quality requirements, target budget, timeline, and any other important details..."
                    className="w-full px-3.5 py-2.5 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white resize-vertical"
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center px-6 py-3 bg-ss-orange text-white text-sm font-semibold rounded-lg hover:bg-ss-orange-light disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Sourcing Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-ss-muted text-center">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}