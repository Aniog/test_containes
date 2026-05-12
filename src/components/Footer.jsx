import { useState } from 'react';

const ContactForm = () => {
  const [values, setValues] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <span className="text-4xl mb-4 block">🎉</span>
        <p className="font-display font-bold text-charcoal text-xl mb-2">Thanks for reaching out!</p>
        <p className="font-body text-muted text-sm">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={values.name}
          onChange={handleChange}
          required
          className="bg-white border border-border rounded-xl px-4 py-3 font-body text-charcoal text-sm placeholder:text-muted focus:outline-none focus:border-coral transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={values.email}
          onChange={handleChange}
          required
          className="bg-white border border-border rounded-xl px-4 py-3 font-body text-charcoal text-sm placeholder:text-muted focus:outline-none focus:border-coral transition-colors"
        />
      </div>
      <textarea
        name="message"
        placeholder="Your message or order enquiry..."
        value={values.message}
        onChange={handleChange}
        required
        rows={4}
        className="bg-white border border-border rounded-xl px-4 py-3 font-body text-charcoal text-sm placeholder:text-muted focus:outline-none focus:border-coral transition-colors resize-none"
      />
      <button
        type="submit"
        className="bg-coral text-white px-8 py-3.5 rounded-full font-body font-bold text-sm hover:bg-coral-dark transition-colors w-fit shadow-md"
      >
        Send Message
      </button>
    </form>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-charcoal text-white">
    {/* Contact CTA band */}
    <div className="bg-coral py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <div>
          <span className="inline-block bg-white/20 text-white text-xs font-body font-bold px-4 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            Get in Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Order or Have a Question?
          </h2>
          <p className="font-body text-white/80 text-base leading-relaxed">
            Whether you want to place a bulk order, ask about our ingredients, or just say hello — we'd love to hear from you.
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </div>

    {/* Footer bottom */}
    <div className="py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl font-bold text-coral mb-1">Sip & Bloom</p>
          <p className="font-body text-white/50 text-sm">Handcrafted fruit teas, made with love.</p>
        </div>
        <div className="flex gap-6 text-white/60 font-body text-sm">
          {['Our Teas', 'About', 'Contact'].map((link) => (
            <button
              key={link}
              onClick={() => {
                const id = link === 'Our Teas' ? 'menu' : link.toLowerCase();
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-coral transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
        <p className="font-body text-white/40 text-xs">
          © {new Date().getFullYear()} Sip & Bloom. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
