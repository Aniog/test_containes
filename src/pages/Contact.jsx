import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { siteConfig } from '@/data/content';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);
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

export default function Contact() {
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
      console.error('Contact form error:', err);
      setError(err.message || 'Request failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-ss-blue-dark via-ss-blue to-ss-blue-light py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Ready to start sourcing from China? Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-ss-text mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-ss-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-ss-text">Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-sm text-ss-blue hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-ss-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-ss-text">Phone</p>
                    <a href={`tel:${siteConfig.phone}`} className="text-sm text-ss-blue hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-ss-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-ss-text">Office</p>
                    <p className="text-sm text-ss-body">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-ss-blue" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-ss-text">Response Time</p>
                    <p className="text-sm text-ss-body">Within 24 hours (Mon-Fri)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-ss-surface rounded-xl border border-ss-border">
                <h3 className="text-sm font-semibold text-ss-text mb-3">Why Contact Us?</h3>
                <ul className="space-y-2.5">
                  <li className="flex items-start text-sm text-ss-body">
                    <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-2 shrink-0" />
                    Free consultation with no obligation
                  </li>
                  <li className="flex items-start text-sm text-ss-body">
                    <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-2 shrink-0" />
                    Tailored sourcing plan for your needs
                  </li>
                  <li className="flex items-start text-sm text-ss-body">
                    <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-2 shrink-0" />
                    Transparent pricing with no hidden fees
                  </li>
                  <li className="flex items-start text-sm text-ss-body">
                    <CheckCircle2 className="w-4 h-4 text-ss-success mt-0.5 mr-2 shrink-0" />
                    Dedicated account manager assigned
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-ss-success" />
                  </div>
                  <h3 className="text-xl font-semibold text-ss-text mb-2">Thank You for Your Inquiry!</h3>
                  <p className="text-sm text-ss-body mb-6 max-w-md mx-auto">
                    We have received your sourcing request and our team will review it within 24 hours. 
                    You will hear from us at <strong>{values.email}</strong>.
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
                      <label htmlFor="contact-name" className="block text-sm font-medium text-ss-text mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
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
                      <label htmlFor="contact-email" className="block text-sm font-medium text-ss-text mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
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
                      <label htmlFor="contact-company" className="block text-sm font-medium text-ss-text mb-1.5">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company name"
                        className="w-full px-3.5 py-2.5 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-ss-text mb-1.5">
                        Phone
                      </label>
                      <input
                        id="contact-phone"
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
                    <label htmlFor="contact-product" className="block text-sm font-medium text-ss-text mb-1.5">
                      Product or Category You Want to Source
                    </label>
                    <input
                      id="contact-product"
                      name="product_interest"
                      type="text"
                      value={values.product_interest}
                      onChange={onChange}
                      placeholder="e.g. Bluetooth headphones, home decor, auto parts"
                      className="w-full px-3.5 py-2.5 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-quantity" className="block text-sm font-medium text-ss-text mb-1.5">
                      Estimated Quantity
                    </label>
                    <input
                      id="contact-quantity"
                      name="quantity"
                      type="text"
                      value={values.quantity}
                      onChange={onChange}
                      placeholder="e.g. 500-1000 units per month"
                      className="w-full px-3.5 py-2.5 text-sm border border-ss-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ss-blue/20 focus:border-ss-blue bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-ss-text mb-1.5">
                      Tell Us About Your Sourcing Needs <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
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
    </div>
  );
}