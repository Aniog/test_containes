import React, { useState, useEffect, useRef } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || 'Request failed';
};

const Contact = () => {
  const containerRef = useRef(null);
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_category: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please provide a valid email address';
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
        .from('Sourcing Inquiry')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            company: values.company.trim() || undefined,
            phone: values.phone.trim() || undefined,
            product_category: values.product_category.trim() || undefined,
            message: values.message.trim(),
            source: 'website',
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
      setValues({
        name: '',
        email: '',
        company: '',
        phone: '',
        product_category: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed');
      setStatus('error');
    }
  };

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Contact Us</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to start sourcing from China? Get in touch for a free consultation and personalized sourcing quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Have questions about our services? Want to discuss a specific sourcing project? We are here to help.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <a href="tel:+8613800000000" className="text-slate-600 hover:text-slate-900">
                      +86 138 0000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-slate-900">
                      info@ssourcingchina.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Office</p>
                    <p className="text-slate-600">
                      Room 1208, Trade Center<br />
                      Yiwu, Zhejiang, China
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-slate-700" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-slate-900">Business Hours</p>
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 - 18:00 (CST)<br />
                      Saturday: 9:00 - 12:00 (CST)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Get a Free Sourcing Quote</h2>
                <p className="text-slate-600 mb-8">
                  Tell us about your sourcing needs and we will get back to you within 24 hours.
                </p>

                {status === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 font-medium">Thank you for your inquiry!</p>
                      <p className="text-green-700 text-sm mt-1">
                        We have received your request and will get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-red-800 text-sm">{error}</p>
                  </div>
                )}

                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={onChange}
                        required
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={values.company}
                        onChange={onChange}
                        placeholder="Your company"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={values.phone}
                        onChange={onChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-2">
                      Product Category
                    </label>
                    <input
                      type="text"
                      id="product_category"
                      name="product_category"
                      value={values.product_category}
                      onChange={onChange}
                      placeholder="e.g., Electronics, Home & Garden, Textiles"
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Tell Us About Your Sourcing Needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={values.message}
                      onChange={onChange}
                      required
                      rows={6}
                      placeholder="Describe your product requirements, target price, quality standards, and any other details that would help us understand your needs..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Inquiry
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
