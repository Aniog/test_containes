import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    interest: 'DF-2500 Double Folder',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.'
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email))
      return 'Please enter a valid email address.'
    if (!values.message.trim()) return 'Please tell us a little about your project.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); setStatus('error'); return }
    setStatus('submitting')
    // Lightweight client-side handler. Replace with real backend integration later.
    await new Promise((r) => setTimeout(r, 700))
    setStatus('success')
    setValues({ name: '', company: '', email: '', interest: values.interest, message: '' })
  }

  return (
    <section id="contact" className="bg-paper py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <p className="text-xs tracking-[0.3em] uppercase text-accent mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight tracking-tight text-ink">
            Tell us about <br />
            your line.
          </h2>
          <div className="w-12 h-px bg-accent mt-6 mb-8" />
          <p className="text-steel leading-relaxed text-base md:text-lg max-w-md">
            Share a few details — material, sheet size, and what you're trying to make —
            and our engineers will get back to you with a tailored recommendation
            within one business day.
          </p>

          <ul className="mt-10 space-y-5 text-ink">
            <li className="flex items-start gap-4">
              <span className="w-9 h-9 grid place-items-center bg-bone border border-mist shrink-0">
                <MapPin className="w-4 h-4 text-accent" />
              </span>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-steel">Workshop</div>
                <div className="mt-1">Industrial Park 12, Bursa, Türkiye</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-9 h-9 grid place-items-center bg-bone border border-mist shrink-0">
                <Phone className="w-4 h-4 text-accent" />
              </span>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-steel">Phone</div>
                <a href="tel:+900000000000" className="mt-1 block hover:text-accent">+90 000 000 00 00</a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-9 h-9 grid place-items-center bg-bone border border-mist shrink-0">
                <Mail className="w-4 h-4 text-accent" />
              </span>
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-steel">Email</div>
                <a href="mailto:hello@artitect.machinery" className="mt-1 block hover:text-accent">
                  hello@artitect.machinery
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-7 bg-bone border border-mist p-8 md:p-10"
          aria-busy={status === 'submitting'}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs tracking-[0.25em] uppercase text-steel mb-2">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={values.name}
                onChange={onChange}
                required
                className="w-full bg-paper border border-mist text-ink px-4 py-3 focus:outline-none focus:border-ink"
                placeholder="Jane Architect"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-xs tracking-[0.25em] uppercase text-steel mb-2">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={values.company}
                onChange={onChange}
                className="w-full bg-paper border border-mist text-ink px-4 py-3 focus:outline-none focus:border-ink"
                placeholder="Studio / Fabricator"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs tracking-[0.25em] uppercase text-steel mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={onChange}
                required
                className="w-full bg-paper border border-mist text-ink px-4 py-3 focus:outline-none focus:border-ink"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label htmlFor="interest" className="block text-xs tracking-[0.25em] uppercase text-steel mb-2">
                Machine of interest
              </label>
              <select
                id="interest"
                name="interest"
                value={values.interest}
                onChange={onChange}
                className="w-full bg-paper border border-mist text-ink px-4 py-3 focus:outline-none focus:border-ink"
              >
                <option>DF-2500 Double Folder</option>
                <option>SM-3200 Sheet Metal Folder</option>
                <option>MF-2000 Metal Folder</option>
                <option>PRO-4000 Industrial Folder</option>
                <option>Not sure yet — please advise</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-xs tracking-[0.25em] uppercase text-steel mb-2">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={onChange}
                required
                className="w-full bg-paper border border-mist text-ink px-4 py-3 focus:outline-none focus:border-ink resize-none"
                placeholder="Material, max sheet size, expected volume…"
              />
            </div>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-ink text-paper text-sm font-medium tracking-wide hover:bg-accent transition-colors disabled:opacity-60"
            >
              {status === 'submitting' ? 'Sending…' : 'Send message'}
              <Send className="w-4 h-4" />
            </button>
            <p className="text-sm text-steel">
              We respond within one business day, Monday – Friday.
            </p>
          </div>

          {status === 'success' && (
            <div role="status" className="mt-6 flex items-start gap-3 bg-paper border border-accent p-4 text-ink">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Thank you — your message is in.</div>
                <div className="text-sm text-steel mt-1">
                  An ARTITECT engineer will be in touch shortly.
                </div>
              </div>
            </div>
          )}

          {status === 'error' && error && (
            <p role="alert" className="mt-6 text-sm text-accent-dark">{error}</p>
          )}
        </form>
      </div>
    </section>
  )
}
