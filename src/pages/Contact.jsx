import { useState } from 'react';

const contactInfo = [
  { icon: '📧', label: 'Email', value: 'hello@microcosmos.science', href: 'mailto:hello@microcosmos.science' },
  { icon: '📍', label: 'Location', value: 'Cambridge, MA, USA', href: null },
  { icon: '🕐', label: 'Response Time', value: 'Within 24 hours', href: null },
];

const topics = [
  'General Inquiry',
  'Research Collaboration',
  'Educational Partnership',
  'Media & Press',
  'Citizen Science',
  'Technical Support',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.topic) errs.topic = 'Please select a topic';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', topic: '', message: '' });
    }, 1500);
  };

  const inputClass = (field) =>
    `w-full bg-[#0f2040] border ${
      errors[field] ? 'border-red-500/60' : 'border-[#1a3a5c]'
    } text-[#e2f0ff] placeholder-[#7ba7cc]/50 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#00d4c8] transition-colors`;

  return (
    <div className="bg-[#050d1a] text-[#e2f0ff] min-h-screen">
      {/* Page Header */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#00d4c8]/10 border border-[#00d4c8]/20 text-[#00d4c8] text-xs font-medium px-4 py-2 rounded-full mb-6">
            Get in Touch
          </div>
          <h1 className="font-heading font-bold text-4xl md:text-6xl text-[#e2f0ff] mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-[#7ba7cc] text-lg max-w-2xl">
            Whether you're a researcher, educator, journalist, or simply fascinated by the microscopic world — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <h2 className="font-heading font-bold text-2xl text-[#e2f0ff] mb-2">Contact Information</h2>
                <p className="text-[#7ba7cc] text-sm leading-relaxed">
                  Our team of scientists and communicators is ready to answer your questions and explore potential collaborations.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {contactInfo.map((info) => (
                  <div key={info.label} className="bg-[#0a1628] border border-[#1a3a5c] rounded-xl p-4 flex items-center gap-4">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-[#7ba7cc] text-xs font-medium uppercase tracking-wider">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-[#e2f0ff] text-sm hover:text-[#00d4c8] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#e2f0ff] text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ */}
              <div className="bg-[#0a1628] border border-[#1a3a5c] rounded-2xl p-6 mt-2">
                <h3 className="font-heading font-semibold text-[#e2f0ff] text-base mb-4">Common Questions</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { q: 'Can I use your images?', a: 'Images are available for educational use with attribution. Contact us for commercial licensing.' },
                    { q: 'Do you accept research submissions?', a: 'Yes! We welcome contributions from researchers. See our submission guidelines.' },
                    { q: 'Are you open to school partnerships?', a: 'Absolutely. We have dedicated educational programs for K-12 and university levels.' },
                  ].map((faq) => (
                    <div key={faq.q} className="border-b border-[#1a3a5c] pb-4 last:border-0 last:pb-0">
                      <p className="text-[#e2f0ff] text-sm font-medium mb-1">{faq.q}</p>
                      <p className="text-[#7ba7cc] text-xs leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-[#0a1628] border border-[#1a3a5c] rounded-3xl p-8 md:p-10">
                {status === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#00d4c8]/10 border border-[#00d4c8]/20 flex items-center justify-center text-3xl mx-auto mb-6">
                      ✓
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-[#e2f0ff] mb-3">Message Sent!</h3>
                    <p className="text-[#7ba7cc] mb-6">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="border border-[#00d4c8] text-[#00d4c8] px-6 py-2 rounded-full text-sm hover:bg-[#00d4c8]/10 transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h2 className="font-heading font-bold text-xl text-[#e2f0ff] mb-2">Send Us a Message</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-[#7ba7cc] text-xs font-medium mb-2 uppercase tracking-wider">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Dr. Jane Smith"
                          className={inputClass('name')}
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-[#7ba7cc] text-xs font-medium mb-2 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="jane@university.edu"
                          className={inputClass('email')}
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[#7ba7cc] text-xs font-medium mb-2 uppercase tracking-wider">
                        Topic *
                      </label>
                      <select
                        name="topic"
                        value={form.topic}
                        onChange={handleChange}
                        className={`${inputClass('topic')} cursor-pointer`}
                      >
                        <option value="" disabled>Select a topic...</option>
                        {topics.map((t) => (
                          <option key={t} value={t} className="bg-[#0f2040]">{t}</option>
                        ))}
                      </select>
                      {errors.topic && <p className="text-red-400 text-xs mt-1">{errors.topic}</p>}
                    </div>

                    <div>
                      <label className="block text-[#7ba7cc] text-xs font-medium mb-2 uppercase tracking-wider">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Tell us about your inquiry, research, or collaboration idea..."
                        className={`${inputClass('message')} resize-none`}
                      />
                      {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                      <p className="text-[#7ba7cc]/50 text-xs mt-1 text-right">{form.message.length} characters</p>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="bg-[#00d4c8] text-[#050d1a] font-semibold px-8 py-4 rounded-full hover:bg-[#00b8ad] transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {status === 'submitting' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-[#050d1a]/30 border-t-[#050d1a] rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        'Send Message →'
                      )}
                    </button>
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
