import { useState } from 'react';
import { Mail, Send, CheckCircle, MapPin, Twitter, Instagram, Youtube } from 'lucide-react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#0d1526] border border-cyan-500/20 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-cyan-400" />
        </div>
        <h3 className="font-display font-bold text-2xl text-slate-100 mb-3">Message Sent!</h3>
        <p className="text-slate-400 mb-6">
          Thank you for reaching out. We'll get back to you within 2–3 business days.
        </p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
          className="text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#0d1526] border border-cyan-500/15 rounded-2xl p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full bg-[#111e35] border border-cyan-500/20 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>
        <div>
          <label className="block text-slate-300 text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
            className="w-full bg-[#111e35] border border-cyan-500/20 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>
      </div>
      <div>
        <label className="block text-slate-300 text-sm font-medium mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          placeholder="What's this about?"
          className="w-full bg-[#111e35] border border-cyan-500/20 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors"
        />
      </div>
      <div>
        <label className="block text-slate-300 text-sm font-medium mb-2">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us what's on your mind..."
          className="w-full bg-[#111e35] border border-cyan-500/20 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-[#050b18] font-semibold py-3.5 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-[#050b18]/30 border-t-[#050b18] rounded-full animate-spin" />
            Sending...
          </span>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 800));
    setDone(true);
  };

  return (
    <div id="newsletter" className="bg-[#0d1526] border border-teal-500/20 rounded-2xl p-8">
      <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
        <Mail className="w-5 h-5 text-teal-400" />
      </div>
      <h3 className="font-display font-bold text-xl text-slate-100 mb-2">Stay in the Loop</h3>
      <p className="text-slate-400 text-sm mb-5 leading-relaxed">
        Get weekly updates on new organisms, research breakthroughs, and microscopy discoveries 
        delivered straight to your inbox.
      </p>
      {done ? (
        <div className="flex items-center gap-2 text-teal-300 text-sm">
          <CheckCircle className="w-4 h-4" />
          You're subscribed! Welcome to the MicroCosmos community.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="your@email.com"
            className="flex-1 bg-[#111e35] border border-teal-500/20 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-teal-500/50 transition-colors"
          />
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-400 text-[#050b18] font-semibold px-5 py-2.5 rounded-xl text-sm transition-all"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#050b18]">
      {/* Page Header */}
      <div className="relative pt-32 pb-16 hero-gradient overflow-hidden">
        <div className="orb w-72 h-72 bg-cyan-500/15 top-0 left-1/4 animate-pulse-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium px-4 py-2 rounded-full mb-6">
            <Mail className="w-3 h-3" />
            Get in Touch
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-4">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Connect
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Have a question, a research collaboration idea, or just want to share your love 
            of microbes? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#0d1526] border border-cyan-500/15 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-slate-100 mb-4">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">Email</p>
                    <p className="text-slate-400 text-sm">hello@microcosmos.science</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-slate-300 text-sm font-medium">Location</p>
                    <p className="text-slate-400 text-sm">Cambridge, MA, USA</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-cyan-500/10">
                <p className="text-slate-400 text-sm mb-3">Follow us</p>
                <div className="flex gap-3">
                  {[Twitter, Instagram, Youtube].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <NewsletterSignup />
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <h2 className="font-display font-bold text-2xl text-slate-100 mb-6">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
