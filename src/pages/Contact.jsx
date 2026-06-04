import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

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
      <div className="bg-brown-dark py-20 px-6 text-center">
        <p className="text-amber-light font-playfair italic text-lg mb-2">Get in Touch</p>
        <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4" style={{ color: '#FFFDF8' }}>
          Contact Us
        </h1>
        <p className="max-w-xl mx-auto text-sm md:text-base" style={{ color: 'rgba(255,253,248,0.75)' }}>
          Questions, orders, or just want to say hello? We'd love to hear from you.
        </p>
      </div>

      <div className="bg-cream py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-playfair font-bold text-brown-dark mb-8">Visit Us</h2>
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-amber/10 rounded-xl p-3 shrink-0">
                  <MapPin className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="font-semibold text-brown-dark mb-1">Address</p>
                  <p className="text-brown-light text-sm">42 Rue de la Paix, Downtown District</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber/10 rounded-xl p-3 shrink-0">
                  <Phone className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="font-semibold text-brown-dark mb-1">Phone</p>
                  <p className="text-brown-light text-sm">+1 (555) 234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber/10 rounded-xl p-3 shrink-0">
                  <Mail className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="font-semibold text-brown-dark mb-1">Email</p>
                  <p className="text-brown-light text-sm">hello@lamaisonbakery.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-amber/10 rounded-xl p-3 shrink-0">
                  <Clock className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <p className="font-semibold text-brown-dark mb-1">Opening Hours</p>
                  <div className="text-brown-light text-sm flex flex-col gap-1">
                    <p>Mon – Fri: 7:00 AM – 7:00 PM</p>
                    <p>Saturday: 7:00 AM – 8:00 PM</p>
                    <p>Sunday: 8:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden bg-brown-light/10 h-52 flex items-center justify-center border border-amber/20">
              <div className="text-center text-brown-light">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-amber" />
                <p className="text-sm font-medium">42 Rue de la Paix</p>
                <p className="text-xs">Downtown District</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-warm-white rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-playfair font-bold text-brown-dark mb-6">Send a Message</h2>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✦</div>
                <h3 className="text-xl font-playfair font-bold text-brown-dark mb-2">Thank you!</h3>
                <p className="text-brown-light">We've received your message and will get back to you within one business day.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                  className="mt-6 bg-amber text-warm-white rounded-full px-6 py-2 text-sm font-semibold hover:bg-amber-light transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-brown-dark mb-1" htmlFor="name">Name</label>
                    <input
                      id="name" name="name" type="text" required
                      value={form.name} onChange={onChange}
                      placeholder="Your name"
                      className="w-full border border-amber/30 rounded-xl px-4 py-3 text-sm text-brown bg-cream focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brown-dark mb-1" htmlFor="email">Email</label>
                    <input
                      id="email" name="email" type="email" required
                      value={form.email} onChange={onChange}
                      placeholder="you@example.com"
                      className="w-full border border-amber/30 rounded-xl px-4 py-3 text-sm text-brown bg-cream focus:outline-none focus:border-amber transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1" htmlFor="subject">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    value={form.subject} onChange={onChange}
                    placeholder="How can we help?"
                    className="w-full border border-amber/30 rounded-xl px-4 py-3 text-sm text-brown bg-cream focus:outline-none focus:border-amber transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brown-dark mb-1" htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={5} required
                    value={form.message} onChange={onChange}
                    placeholder="Tell us more..."
                    className="w-full border border-amber/30 rounded-xl px-4 py-3 text-sm text-brown bg-cream focus:outline-none focus:border-amber transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-amber text-warm-white rounded-full py-3 font-semibold hover:bg-amber-light transition-colors"
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
