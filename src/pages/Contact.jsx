import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';
import { createInquiry } from '../api/inquiries';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    full_name: '',
    email: '',
    company: '',
    phone: '',
    product_category: '',
    product_description: '',
    order_quantity: '',
    target_delivery: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    try {
      await createInquiry(values);
      setSubmitted(true);
      setStatus('success');
      setValues({
        full_name: '',
        email: '',
        company: '',
        phone: '',
        product_category: '',
        product_description: '',
        order_quantity: '',
        target_delivery: '',
      });
    } catch (err) {
      console.error('Inquiry submission failed:', err);
      setError(err?.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-brand/20 text-brand text-xs font-semibold uppercase tracking-wide rounded-full mb-4">
            Contact
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us what you need and we will respond within 48 hours with a
            tailored sourcing plan and next steps.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-navy mb-6">
                Contact Information
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Reach out directly or fill out the inquiry form. We look forward
                to learning about your sourcing needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-0.5">
                      Email
                    </p>
                    <a
                      href="mailto:info@ssourcingchina.com"
                      className="text-sm text-slate-600 hover:text-brand transition-colors"
                    >
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-0.5">
                      Phone
                    </p>
                    <a
                      href="tel:+8613800138000"
                      className="text-sm text-slate-600 hover:text-brand transition-colors"
                    >
                      +86 138 0013 8000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-0.5">
                      Office
                    </p>
                    <p className="text-sm text-slate-600">
                      Shenzhen, Guangdong, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-light-blue rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-navy mb-0.5">
                      Response Time
                    </p>
                    <p className="text-sm text-slate-600">
                      Within 48 hours on business days
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-navy mb-1">
                  Send Us an Inquiry
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Fill out the form below with as much detail as possible.
                </p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-12 h-12 text-emerald-500 mb-4" />
                    <h3 className="text-xl font-bold text-navy mb-2">
                      Inquiry Submitted
                    </h3>
                    <p className="text-slate-600">
                      Thank you. We will review your request and respond within
                      48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          required
                          name="full_name"
                          type="text"
                          value={values.full_name}
                          onChange={onChange}
                          placeholder="John Smith"
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          required
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Company Name
                        </label>
                        <input
                          name="company"
                          type="text"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Your Company Ltd."
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Phone / WhatsApp
                        </label>
                        <input
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 555 123 4567"
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Product Category
                      </label>
                      <select
                        name="product_category"
                        value={values.product_category}
                        onChange={onChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand bg-white text-slate-600"
                      >
                        <option value="">Select a category</option>
                        <option value="Electronics & Components">Electronics & Components</option>
                        <option value="Machinery & Industrial Equipment">Machinery & Industrial Equipment</option>
                        <option value="Textiles & Apparel">Textiles & Apparel</option>
                        <option value="Home & Hardware">Home & Hardware</option>
                        <option value="Automotive Parts">Automotive Parts</option>
                        <option value="Packaging & Printing">Packaging & Printing</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">
                        Product Description & Requirements *
                      </label>
                      <textarea
                        required
                        name="product_description"
                        value={values.product_description}
                        onChange={onChange}
                        rows={5}
                        placeholder="Describe the product you want to source, target quantity, quality standards, certifications, budget range, and any other requirements..."
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand resize-none"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Estimated Order Quantity
                        </label>
                        <input
                          name="order_quantity"
                          type="text"
                          value={values.order_quantity}
                          onChange={onChange}
                          placeholder="e.g., 1,000 units"
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1.5">
                          Target Delivery Date
                        </label>
                        <input
                          name="target_delivery"
                          type="text"
                          value={values.target_delivery}
                          onChange={onChange}
                          placeholder="e.g., Q4 2026"
                          className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
                        />
                      </div>
                    </div>

                    {error && (
                      <p className="text-sm text-red-600 bg-red-50 rounded-lg px-4 py-3">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand text-white font-semibold rounded-lg hover:bg-brand-dark transition-colors disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Inquiry
                        </>
                      )}
                    </button>

                    <p className="text-xs text-slate-400">
                      By submitting this form, you agree to our privacy policy.
                      We will only use your information to respond to your
                      inquiry.
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
