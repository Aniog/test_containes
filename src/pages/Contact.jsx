import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

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
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email.'
    if (!v.message.trim()) return 'Please tell us how we can help.'
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
    setStatus('success')
    setValues({
      name: '',
      company: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
    })
  }

  return (
    <div>
      {/* Header */}
      <section className="border-b border-mist/50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.2em] text-steel mb-5">
              Get in touch
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-ink leading-[1.05]">
              Let&apos;s talk<br />
              <span className="italic text-accent">about your folds.</span>
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-base md:text-lg text-steel leading-relaxed">
              Tell us your sheet specs and run sizes. An engineer responds
              within one working day with a tailored recommendation, lead time
              and quote.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bone">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-12">
          {/* Form */}
          <div className="md:col-span-7">
            <div className="bg-paper border border-mist/60 p-8 md:p-12">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div className="inline-flex w-12 h-12 border border-accent items-center justify-center text-accent">
                    <Send className="w-5 h-5" />
                  </div>
                  <h2 className="mt-6 font-serif text-3xl text-ink">
                    Message received.
                  </h2>
                  <p className="mt-3 text-steel max-w-md mx-auto">
                    Thank you — one of our engineers will be in touch within
                    one working day.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 inline-flex items-center gap-2 border border-ink text-ink px-5 py-2.5 text-sm hover:bg-ink hover:text-bone transition"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate>
                  <p className="text-xs uppercase tracking-[0.2em] text-steel mb-6">
                    Project enquiry
                  </p>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" name="name" value={values.name} onChange={onChange} required />
                    <Field label="Company" name="company" value={values.company} onChange={onChange} />
                    <Field label="Email" name="email" type="email" value={values.email} onChange={onChange} required />
                    <Field label="Phone" name="phone" value={values.phone} onChange={onChange} />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="interest"
                      className="block text-xs uppercase tracking-[0.2em] text-steel mb-2"
                    >
                      Machine of interest
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={values.interest}
                      onChange={onChange}
                      className="w-full bg-bone border border-mist/70 text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition"
                    >
                      <option value="">Select a machine (optional)</option>
                      <option>Double folding machine</option>
                      <option>Sheet metal folder</option>
                      <option>Sheet metal folding machine</option>
                      <option>Metal folder</option>
                      <option>Metal folding machine</option>
                      <option>Not sure — recommend one</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-[0.2em] text-steel mb-2"
                    >
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={values.message}
                      onChange={onChange}
                      placeholder="Sheet thickness, max length, materials, monthly volume…"
                      required
                      className="w-full bg-bone border border-mist/70 text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition resize-y"
                    />
                  </div>

                  {error && (
                    <p role="alert" className="mt-4 text-sm text-accent">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="mt-8 inline-flex items-center gap-2 bg-ink text-bone px-7 py-3.5 text-sm tracking-wide hover:bg-graphite transition"
                  >
                    Send enquiry
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Side info */}
          <aside className="md:col-span-5 space-y-8">
            <InfoBlock icon={MapPin} title="Workshop & HQ">
              Hall 4, Industrial Park East<br />
              Via dell&apos;Acciaio 12<br />
              25124 Brescia, Italy
            </InfoBlock>
            <InfoBlock icon={Phone} title="Speak to sales">
              +39 030 555 0148<br />
              Mon–Fri, 08:30 – 18:00 CET
            </InfoBlock>
            <InfoBlock icon={Mail} title="Email">
              sales@artitect.machinery<br />
              service@artitect.machinery
            </InfoBlock>

            <div className="bg-ink text-bone p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-mist mb-3">
                Service & support
              </p>
              <p className="font-serif text-2xl leading-snug">
                24-hour response on every machine, every shift.
              </p>
              <p className="mt-3 text-sm text-mist">
                Existing customers can reach our service line directly at
                +39 030 555 0150.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

function Field({ label, name, value, onChange, type = 'text', required = false }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs uppercase tracking-[0.2em] text-steel mb-2"
      >
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-bone border border-mist/70 text-ink px-4 py-3 text-sm focus:outline-none focus:border-ink transition"
      />
    </div>
  )
}

function InfoBlock({ icon: Icon, title, children }) {
  return (
    <div className="border-l-2 border-accent pl-5">
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
        <p className="text-xs uppercase tracking-[0.2em] text-steel">{title}</p>
      </div>
      <p className="mt-3 text-sm text-ink leading-relaxed">{children}</p>
    </div>
  )
}
