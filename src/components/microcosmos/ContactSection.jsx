import { useState } from 'react';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-neutral-950 py-24 px-6 md:px-12">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4 text-center">06 — Contact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Join the Exploration
        </h2>
        <p className="text-neutral-400 text-center mb-12 text-lg">
          Have a question, a discovery to share, or want to collaborate? We'd love to hear from you.
        </p>

        {submitted ? (
          <div className="text-center py-16 border border-neutral-800 rounded-2xl">
            <p className="text-4xl mb-4">🔬</p>
            <p className="text-white font-bold text-xl mb-2">Message Received!</p>
            <p className="text-neutral-400">We'll be in touch soon from the microcosmos.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us about your curiosity..."
                className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-neutral-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black font-semibold py-4 rounded-full hover:bg-neutral-200 transition-colors text-base"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
