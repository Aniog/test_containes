import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [feedback, setFeedback] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    setFeedback(null)

    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setFeedback('Thank you! Our team will get back to you within 24 hours.')
    setForm({ name: '', email: '', company: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-500 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Request a Quote
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base md:text-lg">
            Tell us about your requirements and we will recommend the ideal folding
            solution for your workshop.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Email</p>
                <a href="mailto:sales@artitectmachinery.com" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  sales@artitectmachinery.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Phone</p>
                <a href="tel:+1234567890" className="text-slate-400 hover:text-amber-400 text-sm transition-colors">
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-600/20 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Headquarters</p>
                <p className="text-slate-400 text-sm">
                  1200 Industrial Blvd, Suite 400<br />
                  Chicago, IL 60607, USA
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="John Smith"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="john@company.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={onChange}
                placeholder="Your Company Inc."
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-sm"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about the machines you are interested in and your production requirements..."
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-200 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>

            {feedback && (
              <p className="text-emerald-400 text-sm font-medium mt-2">{feedback}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}