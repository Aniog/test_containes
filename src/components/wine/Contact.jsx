import { useState } from 'react';
import { Wine, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-wine-deep py-24 px-6 border-t border-wine-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-wine-gold uppercase tracking-widest text-sm font-semibold mb-4">Get in Touch</p>
          <h2 className="font-serif text-4xl md:text-5xl text-wine-cream font-bold mb-4">
            We'd Love to Hear From You
          </h2>
          <p className="text-wine-muted text-lg max-w-xl mx-auto">
            Whether you're planning a private event, seeking a recommendation, or simply want to talk wine — our team is here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-wine-surface border border-wine-border flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-wine-gold" />
                </div>
                <div>
                  <p className="text-wine-cream font-semibold mb-1">Visit Us</p>
                  <p className="text-wine-muted text-sm">12 Rue du Château, Bordeaux<br />33000, France</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-wine-surface border border-wine-border flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-wine-gold" />
                </div>
                <div>
                  <p className="text-wine-cream font-semibold mb-1">Call Us</p>
                  <p className="text-wine-muted text-sm">+33 5 56 00 00 00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-wine-surface border border-wine-border flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-wine-gold" />
                </div>
                <div>
                  <p className="text-wine-cream font-semibold mb-1">Email Us</p>
                  <p className="text-wine-muted text-sm">hello@vinocellar.com</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-wine-border">
              <p className="text-wine-muted text-sm mb-4 uppercase tracking-widest font-semibold">Follow Us</p>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-wine-surface border border-wine-border flex items-center justify-center text-wine-muted hover:text-wine-gold hover:border-wine-gold/50 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-wine-surface border border-wine-border rounded-2xl p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-wine-primary/20 border border-wine-primary flex items-center justify-center mx-auto mb-4">
                  <Wine className="w-7 h-7 text-wine-gold" />
                </div>
                <h3 className="font-serif text-2xl text-wine-cream font-bold mb-2">Merci!</h3>
                <p className="text-wine-muted">Your message has been received. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-wine-muted text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full bg-wine-deep border border-wine-border rounded-xl px-4 py-3 text-wine-cream placeholder-wine-muted/50 text-sm focus:outline-none focus:border-wine-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-wine-muted text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-wine-deep border border-wine-border rounded-xl px-4 py-3 text-wine-cream placeholder-wine-muted/50 text-sm focus:outline-none focus:border-wine-gold/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-wine-muted text-sm font-medium mb-2">Subject</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-wine-deep border border-wine-border rounded-xl px-4 py-3 text-wine-cream text-sm focus:outline-none focus:border-wine-gold/50 transition-colors"
                  >
                    <option value="" className="bg-wine-deep">Select a subject</option>
                    <option value="tasting" className="bg-wine-deep">Private Tasting</option>
                    <option value="order" className="bg-wine-deep">Order Enquiry</option>
                    <option value="event" className="bg-wine-deep">Event Planning</option>
                    <option value="other" className="bg-wine-deep">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-wine-muted text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us how we can help..."
                    className="w-full bg-wine-deep border border-wine-border rounded-xl px-4 py-3 text-wine-cream placeholder-wine-muted/50 text-sm focus:outline-none focus:border-wine-gold/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-wine-primary hover:bg-wine-hover text-wine-cream py-3 rounded-full font-semibold tracking-wide transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
