import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const topics = [
  'General Inquiry',
  'Trip Planning',
  'Conservation Partnership',
  'Media & Press',
  'Volunteer',
  'Other',
];

const Contact = () => {
  const containerRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) errs.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Enter a valid email';
    if (!form.topic) errs.topic = 'Please select a topic';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    console.log('Contact form submitted:', form);
    setSubmitted(true);
  };

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="contact-hero-bg-o1p2"
          data-strk-bg="[contact-hero-subtitle] [contact-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1400"
        />
        <div className="absolute inset-0 bg-peak/65" />
        <div className="relative z-10 text-center px-4">
          <p id="contact-hero-subtitle" className="text-amber-peak font-semibold text-sm uppercase tracking-widest mb-3">
            We'd Love to Hear From You
          </p>
          <h1 id="contact-hero-title" className="font-playfair font-bold text-4xl md:text-6xl text-white">
            Get in Touch
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-snow py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Info Panel */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="font-playfair font-bold text-2xl text-peak mb-4">
                  Connect With Summit
                </h2>
                <p className="text-stone leading-relaxed">
                  Whether you're planning an expedition, interested in conservation partnerships, or just want to share your mountain story — we're here for it.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-summit flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-alpine" />
                  </div>
                  <div>
                    <p className="font-semibold text-peak text-sm">Email</p>
                    <p className="text-stone text-sm">hello@summitmountains.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-summit flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-alpine" />
                  </div>
                  <div>
                    <p className="font-semibold text-peak text-sm">Phone</p>
                    <p className="text-stone text-sm">+1 (800) 786-6886</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-summit flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-alpine" />
                  </div>
                  <div>
                    <p className="font-semibold text-peak text-sm">Base Camp</p>
                    <p className="text-stone text-sm">Chamonix, France</p>
                  </div>
                </div>
              </div>

              {/* Map image */}
              <div className="rounded-2xl overflow-hidden aspect-video shadow-md">
                <img
                  alt="Chamonix mountain base"
                  data-strk-img-id="contact-map-img-p2q3"
                  data-strk-img="[contact-hero-subtitle] [contact-hero-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                  <CheckCircle className="w-16 h-16 text-pine mb-4" />
                  <h3 className="font-playfair font-bold text-2xl text-peak mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-stone max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 2 business days.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', topic: '', message: '' }); }}
                    className="mt-8 text-alpine font-semibold hover:text-peak transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl shadow-md p-8 space-y-6"
                  noValidate
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-peak mb-1.5" htmlFor="name">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={`w-full px-4 py-3 rounded-xl border text-peak placeholder-stone/50 focus:outline-none focus:ring-2 focus:ring-alpine transition ${errors.name ? 'border-red-400' : 'border-glacier'}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-peak mb-1.5" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-peak placeholder-stone/50 focus:outline-none focus:ring-2 focus:ring-alpine transition ${errors.email ? 'border-red-400' : 'border-glacier'}`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-peak mb-1.5" htmlFor="topic">
                      Topic
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={form.topic}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-peak focus:outline-none focus:ring-2 focus:ring-alpine transition bg-white ${errors.topic ? 'border-red-400' : 'border-glacier'}`}
                    >
                      <option value="">Select a topic…</option>
                      {topics.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    {errors.topic && <p className="text-red-500 text-xs mt-1">{errors.topic}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-peak mb-1.5" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what's on your mind…"
                      className={`w-full px-4 py-3 rounded-xl border text-peak placeholder-stone/50 focus:outline-none focus:ring-2 focus:ring-alpine transition resize-none ${errors.message ? 'border-red-400' : 'border-glacier'}`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-peak text-white py-4 rounded-xl font-semibold hover:bg-slate-peak transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-peak py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-playfair font-bold text-3xl text-white mb-3">
            Stay Connected
          </h2>
          <p className="text-glacier/80 mb-8">
            Get the latest mountain stories, expedition reports, and conservation news delivered to your inbox.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full text-peak placeholder-stone/60 focus:outline-none focus:ring-2 focus:ring-amber-peak"
            />
            <button
              type="submit"
              className="bg-amber-peak text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all duration-300 shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
