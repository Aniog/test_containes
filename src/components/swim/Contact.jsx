import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-sky-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">Contact Us</h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Have a question about our products or need help choosing the right gear? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 border border-sky-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-sky-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sky-900 mb-1">Email Us</div>
                <div className="text-slate-600 text-sm">support@swimgear.com</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-sky-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-sky-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sky-900 mb-1">Call Us</div>
                <div className="text-slate-600 text-sm">+1 (800) 794-6327</div>
                <div className="text-slate-400 text-xs mt-0.5">Mon–Fri, 9am–6pm EST</div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-sky-100 flex items-start gap-4">
              <div className="w-10 h-10 bg-sky-700 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-sky-900 mb-1">Visit Us</div>
                <div className="text-slate-600 text-sm">123 Aquatic Drive, Miami, FL 33101</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 border border-sky-100 shadow-sm">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full py-8 text-center">
                <div className="w-14 h-14 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-7 h-7 text-cyan-600" />
                </div>
                <h3 className="text-xl font-bold text-sky-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 text-sm">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sky-700 font-semibold text-sm hover:underline bg-transparent border-0 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-sky-900 mb-1.5" htmlFor="name">
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
                    className="w-full border border-sky-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-900 mb-1.5" htmlFor="email">
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
                    className="w-full border border-sky-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-sky-900 mb-1.5" htmlFor="message">
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
                    className="w-full border border-sky-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-sky-700 hover:bg-sky-800 text-white rounded-full py-3 font-semibold text-sm transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
