import { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a1628]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-5xl font-black text-sky-50 mb-4">
            Join the Exploration
          </h2>
          <p className="text-slate-400 text-lg">
            Curious about the microcosmos? Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 bg-[#0f1f38] border border-cyan-500/20 rounded-2xl">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-sky-50 font-bold text-2xl mb-2">Message Received!</h3>
            <p className="text-slate-400">Thank you for your curiosity. We'll be in touch soon.</p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="bg-[#0f1f38] border border-cyan-500/20 rounded-2xl p-8 md:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="name">
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
                  className="w-full bg-[#050d1a] border border-cyan-500/20 rounded-xl px-4 py-3 text-sky-50 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="email">
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
                  className="w-full bg-[#050d1a] border border-cyan-500/20 rounded-xl px-4 py-3 text-sky-50 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your interest in the microcosmos..."
                className="w-full bg-[#050d1a] border border-cyan-500/20 rounded-xl px-4 py-3 text-sky-50 placeholder-slate-600 focus:outline-none focus:border-cyan-500/60 transition-colors text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-cyan-500 hover:bg-cyan-400 text-[#050d1a] font-bold rounded-xl transition-all duration-200 text-sm tracking-wide shadow-lg shadow-cyan-500/20"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
