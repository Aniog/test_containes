import { useState } from 'react';
import { Send } from 'lucide-react';

const contactInfo = [
  { label: 'Representation', value: 'ICM Partners — Film Division' },
  { label: 'Email', value: 'archive@cinematography.studio' },
  { label: 'Based in', value: 'Los Angeles / Paris' },
  { label: 'Available for', value: 'Feature Films, Commercials, Editorials' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', project: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sent');
  };

  return (
    <div className="min-h-screen bg-cinema-black flex flex-col">
      {/* Hero */}
      <section className="pt-32 lg:pt-48 pb-16 lg:pb-24 px-6 text-center">
        <p className="font-body text-gold text-[10px] tracking-[0.5em] uppercase mb-6">
          Get in Touch
        </p>
        <h1 className="font-display text-6xl lg:text-[9rem] xl:text-[12rem] font-light text-cinema-white leading-none tracking-tight mb-6">
          Contact
        </h1>
        <div className="w-16 h-px bg-gold mx-auto mb-8" />
        <p className="font-body text-cinema-grey text-sm lg:text-base leading-relaxed max-w-md mx-auto">
          For project inquiries, collaborations, and representation — reach out through the form below or via direct contact.
        </p>
      </section>

      {/* Main content */}
      <section className="flex-1 px-6 lg:px-12 max-w-screen-xl mx-auto w-full pb-24 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: Contact info */}
          <div className="flex flex-col justify-center">
            <div className="space-y-10">
              {contactInfo.map(({ label, value }) => (
                <div key={label} className="border-b border-cinema-surface pb-8">
                  <span className="font-body text-[10px] tracking-[0.4em] uppercase text-cinema-muted block mb-2">
                    {label}
                  </span>
                  <span className="font-display text-xl lg:text-2xl font-light text-cinema-white">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Decorative quote */}
            <div className="mt-16 pt-10 border-t border-cinema-surface">
              <blockquote>
                <p className="font-display text-2xl lg:text-3xl text-cinema-grey italic leading-relaxed">
                  "Every frame is a decision. Every decision is a statement."
                </p>
                <footer className="mt-4 font-body text-[10px] tracking-[0.3em] uppercase text-cinema-muted">
                  — On the philosophy of cinematography
                </footer>
              </blockquote>
            </div>
          </div>

          {/* Right: Form */}
          <div className="flex flex-col justify-center">
            {status === 'sent' ? (
              <div className="text-center py-20">
                <div className="w-12 h-px bg-gold mx-auto mb-8" />
                <h2 className="font-display text-4xl lg:text-5xl font-light text-cinema-white mb-4">
                  Message Received
                </h2>
                <p className="font-body text-cinema-grey text-sm leading-relaxed max-w-xs mx-auto">
                  Thank you for reaching out. We will be in touch within 48 hours.
                </p>
                <div className="w-12 h-px bg-gold mx-auto mt-8" />
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="font-body text-[10px] tracking-[0.4em] uppercase text-cinema-muted block mb-3"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-cinema-surface focus:border-gold text-cinema-white font-body text-base font-light py-3 outline-none transition-colors duration-300 placeholder:text-cinema-muted"
                  />
                </div>

                {/* Email */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="font-body text-[10px] tracking-[0.4em] uppercase text-cinema-muted block mb-3"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@studio.com"
                    className="w-full bg-transparent border-b border-cinema-surface focus:border-gold text-cinema-white font-body text-base font-light py-3 outline-none transition-colors duration-300 placeholder:text-cinema-muted"
                  />
                </div>

                {/* Project type */}
                <div className="group">
                  <label
                    htmlFor="project"
                    className="font-body text-[10px] tracking-[0.4em] uppercase text-cinema-muted block mb-3"
                  >
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={form.project}
                    onChange={handleChange}
                    className="w-full bg-cinema-black border-b border-cinema-surface focus:border-gold text-cinema-white font-body text-base font-light py-3 outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-cinema-dark text-cinema-grey">Select a category</option>
                    <option value="feature" className="bg-cinema-dark">Feature Film</option>
                    <option value="documentary" className="bg-cinema-dark">Documentary</option>
                    <option value="commercial" className="bg-cinema-dark">Commercial</option>
                    <option value="editorial" className="bg-cinema-dark">Editorial / Fashion</option>
                    <option value="other" className="bg-cinema-dark">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="font-body text-[10px] tracking-[0.4em] uppercase text-cinema-muted block mb-3"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-cinema-surface focus:border-gold text-cinema-white font-body text-base font-light py-3 outline-none transition-colors duration-300 placeholder:text-cinema-muted resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group flex items-center gap-4 border border-gold/40 hover:border-gold text-cinema-white hover:text-gold px-8 py-4 font-body text-xs tracking-[0.3em] uppercase transition-all duration-400 w-full lg:w-auto justify-center lg:justify-start"
                  >
                    <span>Send Message</span>
                    <Send
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Bottom decorative strip */}
      <div className="border-t border-cinema-surface py-8 px-6 text-center">
        <p className="font-body text-cinema-muted text-[10px] tracking-[0.4em] uppercase">
          Los Angeles · Paris · Tokyo
        </p>
      </div>
    </div>
  );
}
