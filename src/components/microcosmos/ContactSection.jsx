import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
        <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Get in Touch</span>
        <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white">
          Join the Exploration
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto text-base leading-relaxed mb-12">
          Passionate about microscopy? Want to contribute images or collaborate on research? We'd love to hear from you.
        </p>

        {sent ? (
          <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-2xl p-10 text-center">
            <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
            <p className="text-slate-400">Thank you for reaching out. We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#0a1628] border border-cyan-900/30 rounded-2xl p-8 text-left flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-[#050d1a] border border-cyan-900/40 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-[#050d1a] border border-cyan-900/40 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs text-slate-400 uppercase tracking-widest mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your interest in microscopy..."
                className="w-full bg-[#050d1a] border border-cyan-900/40 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/60 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="self-end flex items-center gap-2 bg-cyan-400 text-[#050d1a] font-bold px-8 py-3 rounded-full hover:bg-cyan-300 transition-colors duration-200 text-sm"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
