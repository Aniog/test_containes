import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const containerRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: image + text */}
          <div>
            <p className="text-sm text-cyan-400 uppercase tracking-widest font-medium mb-3">Get in Touch</p>
            <h2 id="contact-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join the MicroCosmos Community
            </h2>
            <p id="contact-desc" className="text-gray-400 text-lg leading-relaxed mb-8">
              Are you a scientist, photographer, or simply fascinated by the microscopic world? We'd love to hear from you. Share your discoveries, ask questions, or collaborate with us.
            </p>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscope laboratory"
                className="w-full h-full object-cover"
                data-strk-img-id="contact-img-mc050"
                data-strk-img="[contact-desc] [contact-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width={700}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-xl flex items-center justify-center">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-xl">Send a Message</h3>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-emerald-400" />
                </div>
                <h4 className="text-white font-semibold text-xl mb-2">Message Sent!</h4>
                <p className="text-gray-400">Thank you for reaching out. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full bg-gray-800 border border-gray-600 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full bg-gray-800 border border-gray-600 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your interest in the microscopic world..."
                    className="w-full bg-gray-800 border border-gray-600 text-white placeholder-gray-500 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-6 py-3 rounded-full transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
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

export default ContactSection;
