import { useState } from 'react'
import { Mail, Phone, MapPin, Check } from 'lucide-react'
import { PRODUCTS } from '@/data/products'

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name'
    if (!v.email.trim()) return 'Please enter your email'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.message.trim()) return 'Please tell us a little about your project'
    return null
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }
    // Local-only confirmation. Hook up to backend when ready.
    setStatus('success')
    setValues({ name: '', company: '', email: '', phone: '', interest: '', message: '' })
  }

  return (
    <div>
      <section className="bg-ink text-paper">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-px bg-ember" />
            <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">Contact</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight max-w-3xl">
            Tell us about the line you're building.
          </h1>
          <p className="mt-6 text-lg text-silver max-w-2xl leading-relaxed">
            Share your sheet sizes, materials, and production targets. An Artitect
            engineer will reply within one business day with a recommended machine
            configuration.
          </p>
        </div>
      </section>

      <section className="bg-bone py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-paper border border-silver/40 p-8">
              <h2 className="font-serif text-2xl text-ink font-medium">Reach us directly</h2>
              <ul className="mt-6 space-y-5 text-steel">
                <li className="flex items-start gap-4">
                  <span className="mt-1 inline-flex items-center justify-center w-8 h-8 bg-ember/10 text-ember">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-silver">Headquarters</div>
                    <div className="text-ink mt-1">Industrial Park 14<br />44263 Dortmund, Germany</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 inline-flex items-center justify-center w-8 h-8 bg-ember/10 text-ember">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-silver">Phone</div>
                    <a href="tel:+49000000000" className="text-ink mt-1 block hover:text-ember transition-colors">+49 (0) 231 00 00 00</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 inline-flex items-center justify-center w-8 h-8 bg-ember/10 text-ember">
                    <Mail className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-silver">Email</div>
                    <a href="mailto:hello@artitect.com" className="text-ink mt-1 block hover:text-ember transition-colors">hello@artitect.com</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-paper border border-silver/40 p-8">
              <h3 className="font-serif text-xl text-ink font-medium">Working hours</h3>
              <dl className="mt-5 space-y-3 text-steel">
                <div className="flex justify-between border-b border-silver/40 pb-2">
                  <dt>Monday – Friday</dt>
                  <dd className="text-ink">08:00 – 18:00</dd>
                </div>
                <div className="flex justify-between border-b border-silver/40 pb-2">
                  <dt>Saturday</dt>
                  <dd className="text-ink">09:00 – 13:00</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Sunday</dt>
                  <dd className="text-ink">Closed</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="bg-paper border border-silver/40 p-8 md:p-12"
              aria-busy={status === 'submitting'}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-ember" />
                <span className="text-xs uppercase tracking-[0.3em] text-ember font-medium">Quote Request</span>
              </div>
              <h2 className="font-serif text-3xl text-ink font-light leading-tight">
                Send us your project details
              </h2>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-steel block mb-2">Name *</label>
                  <input
                    id="name" name="name" type="text" value={values.name} onChange={onChange} required
                    className="w-full bg-paper border border-silver text-ink placeholder:text-silver focus:border-ink focus:outline-none px-4 py-3"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-xs uppercase tracking-[0.2em] text-steel block mb-2">Company</label>
                  <input
                    id="company" name="company" type="text" value={values.company} onChange={onChange}
                    className="w-full bg-paper border border-silver text-ink placeholder:text-silver focus:border-ink focus:outline-none px-4 py-3"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-steel block mb-2">Email *</label>
                  <input
                    id="email" name="email" type="email" value={values.email} onChange={onChange} required
                    className="w-full bg-paper border border-silver text-ink placeholder:text-silver focus:border-ink focus:outline-none px-4 py-3"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs uppercase tracking-[0.2em] text-steel block mb-2">Phone</label>
                  <input
                    id="phone" name="phone" type="tel" value={values.phone} onChange={onChange}
                    className="w-full bg-paper border border-silver text-ink placeholder:text-silver focus:border-ink focus:outline-none px-4 py-3"
                    placeholder="+49 ..."
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="interest" className="text-xs uppercase tracking-[0.2em] text-steel block mb-2">Machine of interest</label>
                  <select
                    id="interest" name="interest" value={values.interest} onChange={onChange}
                    className="w-full bg-paper border border-silver text-ink focus:border-ink focus:outline-none px-4 py-3"
                  >
                    <option value="">No preference yet</option>
                    {PRODUCTS.map((p) => (
                      <option key={p.slug} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-[0.2em] text-steel block mb-2">Project details *</label>
                  <textarea
                    id="message" name="message" rows={6} value={values.message} onChange={onChange} required
                    className="w-full bg-paper border border-silver text-ink placeholder:text-silver focus:border-ink focus:outline-none px-4 py-3"
                    placeholder="Sheet sizes, materials, expected production volume, current setup…"
                  />
                </div>
              </div>

              {error && (
                <p role="alert" className="mt-5 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3">
                  {error}
                </p>
              )}

              {status === 'success' && (
                <p role="status" className="mt-5 text-sm text-ink bg-ember-soft/40 border border-ember/40 px-4 py-3 inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-ember" />
                  Thank you. We'll be in touch within one business day.
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-ink text-paper px-8 py-4 text-xs uppercase tracking-[0.2em] hover:bg-graphite transition-colors disabled:opacity-60"
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Request'}
                </button>
                <p className="text-sm text-silver">We never share your details with third parties.</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
