import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productOptions = [
  { value: '', label: 'Select a product' },
  { value: 'double-folding-machine', label: 'Double Folding Machine' },
  { value: 'double-folder', label: 'Double Folder' },
  { value: 'sheet-metal-folder', label: 'Sheet Metal Folder' },
  { value: 'sheet-metal-folding-machine', label: 'Sheet Metal Folding Machine' },
  { value: 'metal-folder', label: 'Metal Folder' },
  { value: 'metal-folder-machine', label: 'Metal Folder Machine' },
  { value: 'metal-folding-machine', label: 'Metal Folding Machine' },
  { value: 'other', label: 'Other / Not Sure' },
];

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    lines: ['Industrial Zone, 888 Machinery Ave', 'Shanghai, China 200000'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+86 21 5888 8888', '+86 21 5888 8899'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['info@artitect.com', 'sales@artitect.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon - Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 12:00 PM (CST)'],
  },
];

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email';
    if (!v.message.trim()) return 'Message is required';
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
      const { error: responseError } = await client
        .from('ContactFormSubmission')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            product_interest: values.product_interest,
            message: values.message,
          },
        });

      if (responseError) throw responseError;

      setStatus('success');
      setValues({
        name: '',
        email: '',
        phone: '',
        company: '',
        product_interest: '',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold font-medium text-sm tracking-[0.2em] uppercase mb-4">
            Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Talk Solutions
          </h1>
          <p className="text-navy-200 text-lg max-w-2xl leading-relaxed">
            Whether you need a custom configuration, technical support, or a 
            competitive quote, our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 md:py-28 bg-warm-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-lg border border-warm-border">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-navy mb-3">
                      Message Sent Successfully
                    </h3>
                    <p className="text-warm-text mb-8">
                      Thank you for contacting ARTITECT MACHINERY. Our team will 
                      review your inquiry and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="text-gold font-semibold hover:text-gold-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-navy mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-warm-text text-sm mb-8">
                      Fill out the form below and we'll get back to you promptly.
                    </p>

                    <form onSubmit={onSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
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
                            className="w-full px-4 py-3 rounded-md border border-warm-border bg-white text-navy placeholder:text-warm-muted focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
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
                            className="w-full px-4 py-3 rounded-md border border-warm-border bg-white text-navy placeholder:text-warm-muted focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                            Phone Number
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={values.phone}
                            onChange={onChange}
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-4 py-3 rounded-md border border-warm-border bg-white text-navy placeholder:text-warm-muted focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                            Company Name
                          </label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={values.company}
                            onChange={onChange}
                            placeholder="Your company"
                            className="w-full px-4 py-3 rounded-md border border-warm-border bg-white text-navy placeholder:text-warm-muted focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="product_interest" className="block text-sm font-medium text-navy mb-2">
                          Product of Interest
                        </label>
                        <select
                          id="product_interest"
                          name="product_interest"
                          value={values.product_interest}
                          onChange={onChange}
                          className="w-full px-4 py-3 rounded-md border border-warm-border bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors"
                        >
                          {productOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={values.message}
                          onChange={onChange}
                          required
                          placeholder="Tell us about your requirements, production needs, or any questions you have..."
                          className="w-full px-4 py-3 rounded-md border border-warm-border bg-white text-navy placeholder:text-warm-muted focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-colors resize-vertical"
                        />
                      </div>

                      {error && (
                        <p className="text-red-600 text-sm">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-white font-semibold px-8 py-3.5 rounded-md transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? (
                          <>Sending...</>
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white p-6 rounded-lg border border-warm-border"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-navy mb-2">{info.title}</h4>
                      {info.lines.map((line) => (
                        <p key={line} className="text-warm-text text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-navy p-6 rounded-lg text-center">
                <p className="text-gold font-semibold text-lg mb-2">Quick Response</p>
                <p className="text-navy-200 text-sm">
                  We typically respond to inquiries within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
