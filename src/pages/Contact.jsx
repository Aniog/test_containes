import React, { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';
import { products } from '@/data/siteData.jsx';
import SectionHeader from '@/components/shared/SectionHeader.jsx';

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  machine: '',
  message: '',
};

const Contact = () => {
  const containerRef = useRef(null);
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (v) => {
    const errs = {};
    if (!v.name.trim()) errs.name = 'Please tell us your name.';
    if (!v.email.trim()) errs.email = 'Email is required.';
    else if (!/^\S+@\S+\.\S+$/.test(v.email)) errs.email = 'That email doesn\u2019t look right.';
    if (!v.message.trim()) errs.message = 'Tell us a bit about your project.';
    return errs;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setSubmitted(true);
      setValues(initialValues);
    }, 700);
  };

  return (
    <div ref={containerRef} className="bg-paper">
      <section className="bg-steel-50 border-b border-steel-200">
        <div className="container-artitect pt-20 md:pt-28 pb-12 md:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <span id="contact-hero-eyebrow" className="label-eyebrow brass-bar">
                Get in touch
              </span>
              <h1
                id="contact-hero-title"
                className="mt-6 font-display font-extrabold text-5xl md:text-7xl lg:text-8xl text-ink-900 leading-[0.95] tracking-tight"
              >
                Tell us about
                <br />
                <span className="text-accent-600">your next fold.</span>
              </h1>
            </div>
            <div className="lg:col-span-4">
              <p
                id="contact-hero-desc"
                className="text-lg md:text-xl text-ink-500 leading-relaxed"
              >
                An ARTITECT engineer responds to every request within one
                business day. For urgent service, call our 24/7 hotline.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-artitect">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <SectionHeader
                id="contact-info"
                eyebrow="Reach us"
                title="Talk to a person, not a chatbot."
              />

              <ul className="mt-10 space-y-8">
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 flex items-center justify-center bg-ink-900 text-paper flex-shrink-0">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="label-eyebrow">Headquarters</div>
                    <div className="mt-2 font-display font-semibold text-ink-900">
                      No. 88 Precision Avenue
                    </div>
                    <div className="text-ink-500">
                      Industrial Park, Suzhou 215123, China
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 flex items-center justify-center bg-ink-900 text-paper flex-shrink-0">
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="label-eyebrow">Email</div>
                    <a
                      href="mailto:sales@artitect-machinery.com"
                      className="mt-2 block font-display font-semibold text-ink-900 hover:text-accent-600"
                    >
                      sales@artitect-machinery.com
                    </a>
                    <div className="text-ink-500">
                      Replies within one business day
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 flex items-center justify-center bg-ink-900 text-paper flex-shrink-0">
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="label-eyebrow">24/7 Service Hotline</div>
                    <a
                      href="tel:+8651288889999"
                      className="mt-2 block font-display font-semibold text-ink-900 hover:text-accent-600"
                    >
                      +86 512 8888 9999
                    </a>
                    <div className="text-ink-500">Spare parts &amp; field service</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-10 h-10 flex items-center justify-center bg-ink-900 text-paper flex-shrink-0">
                    <Clock className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="label-eyebrow">Sales hours</div>
                    <div className="mt-2 font-display font-semibold text-ink-900">
                      Mon\u2013Fri · 08:00\u201318:00 CST
                    </div>
                    <div className="text-ink-500">Saturday by appointment</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-steel-50 border border-steel-200 p-6 md:p-10">
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-14 h-14 mx-auto flex items-center justify-center bg-ink-900 text-paper">
                      <Check className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <h3 className="mt-6 font-display font-bold text-2xl md:text-3xl text-ink-900">
                      Thanks, {values.name || 'we\u2019ll be in touch'}.
                    </h3>
                    <p className="mt-3 text-ink-500 text-lg max-w-md mx-auto">
                      Your message is on its way to our applications team. We&apos;ll
                      respond within one business day.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setStatus('idle');
                      }}
                      className="mt-8 btn-outline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="label-eyebrow block text-ink-700"
                        >
                          Your name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={onChange}
                          className={`mt-3 w-full bg-paper border ${
                            errors.name ? 'border-signal-500' : 'border-steel-300'
                          } px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900 transition-colors`}
                          placeholder="Jane Doe"
                        />
                        {errors.name && (
                          <p className="mt-2 text-sm text-signal-500">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="label-eyebrow block text-ink-700"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={values.company}
                          onChange={onChange}
                          className="mt-3 w-full bg-paper border border-steel-300 px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900 transition-colors"
                          placeholder="Acme Fabrication Co."
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="label-eyebrow block text-ink-700"
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={onChange}
                          className={`mt-3 w-full bg-paper border ${
                            errors.email ? 'border-signal-500' : 'border-steel-300'
                          } px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900 transition-colors`}
                          placeholder="you@company.com"
                        />
                        {errors.email && (
                          <p className="mt-2 text-sm text-signal-500">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="label-eyebrow block text-ink-700"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={onChange}
                          className="mt-3 w-full bg-paper border border-steel-300 px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900 transition-colors"
                          placeholder="+1 555 0123"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label
                          htmlFor="machine"
                          className="label-eyebrow block text-ink-700"
                        >
                          Which machine are you interested in?
                        </label>
                        <select
                          id="machine"
                          name="machine"
                          value={values.machine}
                          onChange={onChange}
                          className="mt-3 w-full bg-paper border border-steel-300 px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900 transition-colors"
                        >
                          <option value="">Not sure yet — please advise</option>
                          {products.map((p) => (
                            <option key={p.slug} value={p.slug}>
                              {p.name} — {p.category}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label
                          htmlFor="message"
                          className="label-eyebrow block text-ink-700"
                        >
                          Tell us about your project *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={values.message}
                          onChange={onChange}
                          className={`mt-3 w-full bg-paper border ${
                            errors.message ? 'border-signal-500' : 'border-steel-300'
                          } px-4 py-3 text-ink-900 focus:outline-none focus:border-ink-900 transition-colors`}
                          placeholder="Material, thickness, working length, tolerances, expected throughput…"
                        />
                        {errors.message && (
                          <p className="mt-2 text-sm text-signal-500">{errors.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-xs text-steel-500 leading-relaxed max-w-md">
                        By submitting this form you agree to be contacted by an
                        ARTITECT representative. We&apos;ll never share your
                        details.
                      </p>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'submitting' ? 'Sending…' : 'Send message'}
                        <Send className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
