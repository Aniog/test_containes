import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const machineOptions = [
  'General Inquiry',
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
  'Other',
];

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) 123-4567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@artitectmachinery.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Industrial Zone, Building 42, Manufacturing District',
  },
  {
    icon: Clock,
    label: 'Business Hours',
    value: 'Mon - Fri: 8:00 AM - 6:00 PM',
  },
];

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    machine_interest: 'General Inquiry',
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
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email';
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
      const { data: response, error: submitError } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            machine_interest: values.machine_interest,
            message: values.message,
          },
        })
        .select()
        .single();

      if (submitError || response?.success === false) {
        const msg = Array.isArray(response?.errors)
          ? response.errors.join(', ')
          : submitError?.message || 'Submission failed';
        throw new Error(msg);
      }

      setStatus('success');
      setValues({
        name: '',
        email: '',
        phone: '',
        company: '',
        machine_interest: 'General Inquiry',
        message: '',
      });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-dark pt-32 pb-16">
        <div className="container mx-auto px-4">
          <p className="text-brand-gold text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Have a question about our machines? Need a quote for your workshop? Our team is ready to help you find the perfect folding solution.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-2">
                  Reach Out
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Fill out the form or contact us directly using the information below. We typically respond within one business day.
                </p>
              </div>

              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand-gold/10 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-brand-gold" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-brand-dark font-medium">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-brand-dark rounded-xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">
                  Request a Live Demo
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  See our machines in action. Schedule a virtual or on-site demonstration with one of our product specialists.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-brand-gold font-semibold text-sm hover:gap-3 transition-all"
                >
                  Browse Products
                </Link>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <form
                onSubmit={onSubmit}
                className="bg-white rounded-xl border border-slate-100 shadow-sm p-6 md:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={onChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={onChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={values.phone}
                      onChange={onChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      onChange={onChange}
                      placeholder="Your Company Ltd."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="machine_interest"
                    className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2"
                  >
                    Machine of Interest
                  </label>
                  <select
                    id="machine_interest"
                    name="machine_interest"
                    value={values.machine_interest}
                    onChange={onChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-brand-dark bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors"
                  >
                    {machineOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    placeholder="Tell us about your requirements, workshop setup, or any questions you have..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm text-brand-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/30 focus:border-brand-gold transition-colors resize-none"
                  />
                </div>

                {error && (
                  <div className="flex items-start gap-2 mb-5 p-4 bg-red-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-red-600">{error}</p>
                  </div>
                )}

                {status === 'success' && (
                  <div className="flex items-start gap-2 mb-5 p-4 bg-green-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm text-green-700">
                      Thank you! Your message has been sent. We will get back to
                      you shortly.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 bg-brand-gold hover:bg-brand-goldHover disabled:opacity-60 text-brand-dark font-semibold px-7 py-3.5 rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                  {status === 'submitting'
                    ? 'Sending...'
                    : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
