import { useState } from 'react'
import { Mail, Send } from 'lucide-react'

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#050d1a]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-400 text-sm uppercase tracking-widest font-semibold mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base">
            Have a question about microscopy, want to contribute images, or collaborate on research? We'd love to hear from you.
          </p>
        </div>

        <div className="bg-[#0f1f38] border border-teal-900/40 rounded-2xl p-8 shadow-[0_0_40px_rgba(20,184,166,0.08)]">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-teal-500/20 border border-teal-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-teal-400" />
              </div>
              <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
              <p className="text-slate-400">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-slate-300 text-sm font-medium block mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full bg-[#0a1628] border border-teal-900/50 focus:border-teal-500 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-slate-300 text-sm font-medium block mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-[#0a1628] border border-teal-900/50 focus:border-teal-500 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-slate-300 text-sm font-medium block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell us about your interest in the microcosmos..."
                  className="w-full bg-[#0a1628] border border-teal-900/50 focus:border-teal-500 text-white placeholder-slate-600 rounded-xl px-4 py-3 text-sm outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-white font-semibold px-8 py-3 rounded-full transition self-end"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
