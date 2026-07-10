import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const info = [
  { icon: MapPin, label: 'Address', value: '123 Orchard Lane, Green Valley, CA 94501' },
  { icon: Phone, label: 'Phone', value: '+1 (555) 234-5678' },
  { icon: Mail, label: 'Email', value: 'hello@greenvalleyfarm.com' },
  { icon: Clock, label: 'Open Hours', value: 'Mon – Sat: 8am – 6pm\nSunday: 9am – 4pm' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div>
      {/* Page header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <p className="text-farm-orange text-sm font-medium uppercase tracking-widest mb-2">Say Hello</p>
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            We'd love to hear from you. Whether you want to visit, buy fruit, or just ask a question — reach out anytime.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Farm Information</h2>
            <div className="flex flex-col gap-5">
              {info.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-farm-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-gray-700 text-sm whitespace-pre-line">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h2>

            {sent ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-farm-green" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Message Sent!</h3>
                <p className="text-gray-500 text-sm">Thanks for reaching out. We'll get back to you soon.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-5 text-sm text-farm-green hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-farm-green/30 focus:border-farm-green transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-farm-green/30 focus:border-farm-green transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={onChange}
                    placeholder="How can we help?"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-farm-green/30 focus:border-farm-green transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-farm-green text-white px-6 py-3 rounded-full font-medium hover:bg-green-800 transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
