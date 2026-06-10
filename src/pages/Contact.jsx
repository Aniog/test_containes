import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: 'DuoFold Pro 2500',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.'
    if (!values.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
    if (!values.message.trim()) return 'Please share a few details about your application.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) {
      setError(err)
      return
    }
    setStatus('submitting')
    // Simulate sending
    await new Promise((r) => setTimeout(r, 700))
    setStatus('success')
    setValues({
      name: '',
      company: '',
      email: '',
      phone: '',
      interest: 'DuoFold Pro 2500',
      message: '',
    })
  }

  return (
    <div>
      {/* HEADER */}
      <section className="bg-bone border-b border-mist">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-amber-brand" />
            <span id="contact-eyebrow" className="text-xs uppercase tracking-widest2 text-steel">Contact</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <h1 id="contact-title" className="lg:col-span-7 font-serif font-light text-5xl md:text-7xl leading-[1.05] text-ink">
              Speak with our engineers.
            </h1>
            <p id="contact-subtitle" className="lg:col-span-5 text-graphite text-lg leading-relaxed">
              Tell us about your sheet sizes, materials, and throughput goals.
              We'll respond within one business day with a tailored
              recommendation.
            </p>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-canvas py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* FORM */}
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="bg-bone border border-mist p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field label="Full name" required>
                  <input
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={onChange}
                    placeholder="Your name"
                    className="w-full bg-canvas border border-mist rounded-sm px-4 py-3 text-ink placeholder-steel focus:outline-none focus:border-ink"
                  />
                </Field>
                <Field label="Company">
                  <input
                    name="company"
                    type="text"
                    value={values.company}
                    onChange={onChange}
                    placeholder="Your fabrication shop"
                    className="w-full bg-canvas border border-mist rounded-sm px-4 py-3 text-ink placeholder-steel focus:outline-none focus:border-ink"
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="w-full bg-canvas border border-mist rounded-sm px-4 py-3 text-ink placeholder-steel focus:outline-none focus:border-ink"
                  />
                </Field>
                <Field label="Phone">
                  <input
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={onChange}
                    placeholder="+1 (415) 555 0142"
                    className="w-full bg-canvas border border-mist rounded-sm px-4 py-3 text-ink placeholder-steel focus:outline-none focus:border-ink"
                  />
                </Field>
                <Field label="Machine of interest" className="md:col-span-2">
                  <select
                    name="interest"
                    value={values.interest}
                    onChange={onChange}
                    className="w-full bg-canvas border border-mist rounded-sm px-4 py-3 text-ink focus:outline-none focus:border-ink"
                  >
                    <option>DuoFold Pro 2500</option>
                    <option>DuoMaster 3200</option>
                    <option>PanelEdge 2000</option>
                    <option>CraftFold 1600</option>
                    <option>DuoElite 4000</option>
                    <option>Classic Folder 2200</option>
                    <option>Custom configuration</option>
                  </select>
                </Field>
                <Field label="Tell us about your application" required className="md:col-span-2">
                  <textarea
                    name="message"
                    rows={5}
                    value={values.message}
                    onChange={onChange}
                    placeholder="Sheet sizes, materials, throughput, automation..."
                    className="w-full bg-canvas border border-mist rounded-sm px-4 py-3 text-ink placeholder-steel focus:outline-none focus:border-ink resize-none"
                  />
                </Field>
              </div>

              {error && (
                <div className="mt-6 text-sm text-red-700 bg-red-50 border border-red-200 px-4 py-3" role="alert">
                  {error}
                </div>
              )}

              {status === 'success' && (
                <div className="mt-6 flex items-start gap-3 text-sm text-ink bg-canvas border border-mist px-4 py-4" role="status">
                  <CheckCircle2 className="w-5 h-5 text-amber-brand mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="font-medium">Thank you — your enquiry has been received.</div>
                    <div className="text-steel mt-1">An Artitect engineer will reply within one business day.</div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <p className="text-xs text-steel">
                  By submitting, you agree to be contacted about your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-3 bg-ink text-canvas px-8 py-4 text-xs uppercase tracking-widest2 hover:bg-graphite transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send enquiry'}
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </form>
          </div>

          {/* INFO */}
          <aside className="lg:col-span-5">
            <div className="border border-mist bg-canvas p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-amber-brand" />
                <span className="text-xs uppercase tracking-widest2 text-steel">Direct contact</span>
              </div>
              <div className="space-y-6 text-ink">
                <ContactRow icon={Phone} title="Sales & engineering" body="+1 (415) 555 0142" />
                <ContactRow icon={Mail} title="Email" body="sales@artitect.co" />
                <ContactRow
                  icon={MapPin}
                  title="Workshop"
                  body={
                    <>
                      14 Foundry Lane
                      <br />
                      Industrial District
                      <br />
                      Open Mon–Fri · 08:00–17:30
                    </>
                  }
                />
              </div>
            </div>

            <div className="mt-6 border border-mist bg-bone p-8 md:p-10">
              <div className="font-serif text-2xl text-ink">Site visits welcome.</div>
              <p className="mt-3 text-graphite leading-relaxed">
                Visit our workshop to see our double folding machines and sheet
                metal folders running on the shop floor. Bookings recommended
                two weeks in advance.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

const Field = ({ label, required, children, className = '' }) => (
  <label className={`block ${className}`}>
    <span className="block text-xs uppercase tracking-widest2 text-steel mb-2">
      {label}
      {required && <span className="text-amber-brand ml-1">*</span>}
    </span>
    {children}
  </label>
)

const ContactRow = ({ icon: Icon, title, body }) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 border border-mist flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-amber-brand" strokeWidth={1.5} />
    </div>
    <div>
      <div className="text-xs uppercase tracking-widest2 text-steel">{title}</div>
      <div className="mt-1 text-ink leading-relaxed">{body}</div>
    </div>
  </div>
)

export default Contact
