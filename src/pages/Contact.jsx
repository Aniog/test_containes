import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Submission failed';
};

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    productCategory: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email address';
    if (!v.productCategory.trim()) return 'Please select a product category';
    if (!v.message.trim()) return 'Message is required';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate(values);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    try {
      const { error: responseError, data: response } = await client
        .from('sourcingInquiries')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            country: values.country,
            productCategory: values.productCategory,
            message: values.message,
          },
        })
        .select()
        .single();

      if (responseError || response?.success === false) {
        throw new Error(getErrorMessage(response, responseError));
      }

      setStatus('success');
      setValues({
        name: '',
        email: '',
        company: '',
        country: '',
        productCategory: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed');
      setStatus('error');
    }
  };

  return (
    <div className="flex flex-col">
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="contact-title" className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Contact Us
            </h1>
            <p id="contact-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Tell us about your sourcing needs. We will get back to you within one business day with a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">Get a Free Sourcing Quote</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill out the form below and our team will contact you within one business day.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      required
                      placeholder="Your full name"
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      required
                      placeholder="you@company.com"
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700">
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      placeholder="Your company"
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-slate-700">
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      value={values.country}
                      onChange={onChange}
                      placeholder="Your country"
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="productCategory" className="block text-sm font-medium text-slate-700">
                      Product Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="productCategory"
                      name="productCategory"
                      value={values.productCategory}
                      onChange={onChange}
                      required
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    >
                      <option value="">Select a category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Home & Garden">Home & Garden</option>
                      <option value="Textiles & Apparel">Textiles & Apparel</option>
                      <option value="Industrial Parts">Industrial Parts</option>
                      <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                      <option value="Toys & Gifts">Toys & Gifts</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={values.message}
                      onChange={onChange}
                      required
                      placeholder="Describe your product, target price, quantity, quality requirements, and any other relevant details."
                      className="mt-1.5 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-1 focus:ring-slate-900"
                    />
                  </div>
                </div>

                {status === 'success' && (
                  <div className="mt-6 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
                    <CheckCircle2 className="h-5 w-5" />
                    <span>Thank you for your inquiry. We will get back to you within one business day.</span>
                  </div>
                )}

                {status === 'error' && error && (
                  <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 disabled:opacity-50 sm:w-auto"
                >
                  {status === 'submitting' ? (
                    'Submitting...'
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">Contact Information</h3>
                <div className="mt-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-slate-600 hover:text-slate-900">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Phone</div>
                      <a href="tel:+8610XXXXXXXX" className="text-sm text-slate-600 hover:text-slate-900">
                        +86 10 XXXX XXXX
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Office</div>
                      <p className="text-sm text-slate-600">
                        Guangzhou, China
                        <br />
                        Serving clients worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-900">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">Business Hours</div>
                      <p className="text-sm text-slate-600">
                        Monday - Friday: 9:00 AM - 6:00 PM (China Standard Time)
                        <br />
                        Saturday: 9:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
