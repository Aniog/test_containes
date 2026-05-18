import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Info */}
        <div>
          <p className="text-cyan-600 text-sm uppercase tracking-widest font-semibold mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
            Ready to Experience Pure Water?
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-10">
            Whether you're ordering for home, your business, or just have a question
            about our source — we'd love to hear from you.
          </p>

          <div className="flex flex-col gap-6">
            {[
              { icon: Mail, label: 'Email', value: 'hello@aquapure.com' },
              { icon: Phone, label: 'Phone', value: '+1 (800) 278-2787' },
              { icon: MapPin, label: 'Address', value: 'Alpine Springs, CO 80401' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-sky-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">{label}</p>
                  <p className="text-slate-800 font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-sky-50 rounded-2xl p-8 border border-sky-100 shadow-sm">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💧</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600">
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-blue-700 font-semibold text-sm hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-sky-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-sky-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={onChange}
                  placeholder="How can we help you?"
                  className="w-full rounded-xl border border-sky-200 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full px-8 py-3 transition shadow-md"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
