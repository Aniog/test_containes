import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { themes } from '@/lib/themes';

const t = themes.retro;

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      {/* Page hero */}
      <div style={{ backgroundColor: t.teal }} className="py-20 px-6 text-center">
        <p className="font-playfair italic text-lg mb-2" style={{ color: t.mustardLight }}>Get in Touch</p>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-white">
          Contact Us
        </h1>
        <p className="max-w-xl mx-auto text-sm md:text-base text-white/80">
          Questions, orders, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div style={{ backgroundColor: t.bg }} className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-playfair font-bold mb-8" style={{ color: t.text }}>Visit Us</h2>
            <div className="flex flex-col gap-6 mb-10">
              {[
                { icon: <MapPin className="w-5 h-5" style={{ color: t.teal }} />, label: 'Address', value: '42 Rue de la Paix, Downtown District' },
                { icon: <Phone className="w-5 h-5" style={{ color: t.teal }} />, label: 'Phone', value: '+1 (555) 234-5678' },
                { icon: <Mail className="w-5 h-5" style={{ color: t.teal }} />, label: 'Email', value: 'hello@lamaisonbakery.com' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="rounded-xl p-3 shrink-0" style={{ backgroundColor: t.card, border: `1px solid ${t.mustard}50` }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: t.text }}>{item.label}</p>
                    <p className="text-sm" style={{ color: t.muted }}>{item.value}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-4">
                <div className="rounded-xl p-3 shrink-0" style={{ backgroundColor: t.card, border: `1px solid ${t.mustard}50` }}>
                  <Clock className="w-5 h-5" style={{ color: t.teal }} />
                </div>
                <div>
                  <p className="font-semibold mb-1" style={{ color: t.text }}>Opening Hours</p>
                  <div className="text-sm flex flex-col gap-1" style={{ color: t.muted }}>
                    <p>Mon – Fri: 7:00 AM – 7:00 PM</p>
                    <p>Saturday: 7:00 AM – 8:00 PM</p>
                    <p>Sunday: 8:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden h-52 flex items-center justify-center" style={{ backgroundColor: t.card, border: `1px solid ${t.mustard}50` }}>
              <div className="text-center" style={{ color: t.muted }}>
                <MapPin className="w-8 h-8 mx-auto mb-2" style={{ color: t.teal }} />
                <p className="text-sm font-medium" style={{ color: t.text }}>42 Rue de la Paix</p>
                <p className="text-xs">Downtown District</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-2xl p-8 shadow-md" style={{ backgroundColor: t.card, border: `1px solid ${t.mustard}30` }}>
            <h2 className="text-2xl font-playfair font-bold mb-6" style={{ color: t.text }}>Send a Message</h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: t.teal }}>
                  <span className="text-white text-2xl">✓</span>
                </div>
                <h3 className="text-xl font-playfair font-bold mb-2" style={{ color: t.text }}>Thank you!</h3>
                <p style={{ color: t.muted }}>We've received your message and will get back to you within one business day.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 rounded-full px-6 py-2 text-sm font-semibold text-white transition-colors"
                  style={{ backgroundColor: t.teal }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: t.text }} htmlFor="name">Name</label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={onChange}
                      placeholder="Your name"
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ border: `1px solid ${t.mustard}60`, color: t.text, backgroundColor: t.bg }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: t.text }} htmlFor="email">Email</label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={onChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                      style={{ border: `1px solid ${t.mustard}60`, color: t.text, backgroundColor: t.bg }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: t.text }} htmlFor="subject">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    value={form.subject} onChange={onChange}
                    placeholder="How can we help?"
                    className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors"
                    style={{ border: `1px solid ${t.mustard}60`, color: t.text, backgroundColor: t.bg }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: t.text }} htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    value={form.message} onChange={onChange}
                    placeholder="Tell us more..."
                    className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors resize-none"
                    style={{ border: `1px solid ${t.mustard}60`, color: t.text, backgroundColor: t.bg }}
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full py-3 font-semibold text-white transition-colors"
                  style={{ backgroundColor: t.teal }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
