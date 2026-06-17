import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    machine: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const machines = [
    'Double Folding Machine',
    'Double Folder',
    'Sheet Metal Folder',
    'Sheet Metal Folding Machine',
    'Metal Folder',
    'Metal Folder Machine',
    'Metal Folding Machine',
    'Custom Configuration',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setStatus('submitting');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in your name, email, and message.');
      setStatus('idle');
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        machine: '',
        message: '',
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <div className="uppercase tracking-[3px] text-sm text-amber-700 font-medium mb-4">LET'S TALK</div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6 leading-none">
              Ready to elevate<br />your fabrication?
            </h2>
            <p className="text-xl text-slate-600 mb-10">
              Our team of application engineers will help you find the right machine for your specific needs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Headquarters</div>
                  <div className="text-slate-600">Industriestraße 42<br />D-42897 Remscheid, Germany</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Phone</div>
                  <a href="tel:+492191567890" className="text-slate-600 hover:text-slate-900">+49 2191 567 890</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Email</div>
                  <a href="mailto:sales@artitect-machinery.com" className="text-slate-600 hover:text-slate-900">sales@artitect-machinery.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-slate-700" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Business Hours</div>
                  <div className="text-slate-600">Monday – Friday: 7:00 – 17:00 CET<br />24/7 Emergency Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-10">
            {status === 'success' ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">Thank you for reaching out.</h3>
                <p className="text-slate-600 mb-8">One of our specialists will contact you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm font-medium text-slate-600 hover:text-slate-900 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-400 text-slate-900"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-400 text-slate-900"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-400 text-slate-900"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-400 text-slate-900"
                      placeholder="+1 555 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Machine of Interest</label>
                  <select
                    name="machine"
                    value={formData.machine}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-400 text-slate-900"
                  >
                    <option value="">Select a machine (optional)</option>
                    {machines.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-slate-400 text-slate-900 resize-y"
                    placeholder="Tell us about your project, material types, production volume, or any specific requirements..."
                  />
                </div>

                {error && (
                  <div className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">{error}</div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-4 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 disabled:opacity-70 transition-colors mt-2"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                <p className="text-xs text-center text-slate-500">We typically respond within one business day.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
