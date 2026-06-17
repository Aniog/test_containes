import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setError(null)
    if (!values.name.trim()) return setError('Please enter your name.')
    if (!/^\S+@\S+\.\S+$/.test(values.email))
      return setError('Please provide a valid email.')
    if (!values.message.trim()) return setError('Please add a brief message.')

    setStatus('submitting')
    // Simulate request — no backend wired yet.
    setTimeout(() => {
      setStatus('success')
      setValues({ name: '', email: '', company: '', interest: '', message: '' })
    }, 700)
  }

  return (
    <div className="bg-paper">
      {/* Header */}
      <section className="bg-bone pt-36 pb-20 md:pt-44 md:pb-24 border-b border-mist">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-6">
            Get in Touch
          </span>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-ink leading-[1.05] max-w-4xl">
            Let's talk about your next machine.
          </h1>
          <p className="mt-8 text-lg text-steel max-w-2xl leading-relaxed">
            Tell us about your workshop and what you make. Our engineers will
            respond within 48 hours with thoughtful questions and a tailored
            recommendation.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl text-ink mb-10">
              Send us a message
            </h2>

            {status === 'success' ? (
              <div className="border border-mist p-10 bg-bone">
                <CheckCircle2 className="w-10 h-10 text-brass" strokeWidth={1.25} />
                <h3 className="font-serif text-2xl text-ink mt-5">
                  Thank you.
                </h3>
                <p className="mt-3 text-steel leading-relaxed">
                  Your message has reached our team. We'll respond within
                  48 hours with next steps.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-ink border-b border-ink pb-1 hover:text-brass hover:border-brass transition"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6" aria-busy={status === 'submitting'}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field
                    label="Name"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    required
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={onChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Field
                    label="Company"
                    name="company"
                    value={values.company}
                    onChange={onChange}
                  />

                  <div>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-steel mb-2">
                      Interested in
                    </label>
                    <select
                      name="interest"
                      value={values.interest}
                      onChange={onChange}
                      className="w-full bg-paper border border-mist px-0 py-3 text-ink focus:outline-none focus:border-ink transition"
                    >
                      <option value="">Select a machine type</option>
                      <option value="Double Folding Machine">Double Folding Machine</option>
                      <option value="Sheet Metal Folder">Sheet Metal Folder</option>
                      <option value="Metal Folder Machine">Metal Folder Machine</option>
                      <option value="Metal Folding Machine">Metal Folding Machine</option>
                      <option value="Custom">Custom configuration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-steel mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={onChange}
                    rows={6}
                    required
                    placeholder="Tell us about your production needs, materials, and timeline..."
                    className="w-full bg-paper border border-mist px-0 py-3 text-ink placeholder:text-steel/60 focus:outline-none focus:border-ink transition resize-none"
                  />
                </div>

                {error && (
                  <p className="text-sm text-brass-dark" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-3 bg-brass text-white px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-brass-dark transition disabled:opacity-60"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Info column */}
          <aside className="lg:col-span-5 lg:border-l lg:border-mist lg:pl-16">
            <h2 className="font-serif text-3xl text-ink mb-10">
              Reach our team
            </h2>

            <div className="space-y-8">
              <ContactItem
                icon={MapPin}
                label="Workshop"
                text={<>124 Foundry Lane<br />Industrial District</>}
              />
              <ContactItem
                icon={Phone}
                label="Telephone"
                text="+1 (415) 555-0188"
              />
              <ContactItem
                icon={Mail}
                label="Email"
                text="hello@artitect.co"
              />
            </div>

            <div className="mt-12 pt-10 border-t border-mist">
              <h3 className="font-serif text-xl text-ink">Workshop Hours</h3>
              <ul className="mt-4 space-y-2 text-steel">
                <li className="flex justify-between">
                  <span>Monday – Friday</span>
                  <span className="text-ink">08:00 – 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-ink">By appointment</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-ink">Closed</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

const Field = ({ label, name, type = 'text', value, onChange, required }) => (
  <div>
    <label className="block text-[10px] tracking-[0.3em] uppercase text-steel mb-2">
      {label} {required && <span className="text-brass">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-paper border-b border-mist px-0 py-3 text-ink focus:outline-none focus:border-ink transition"
    />
  </div>
)

const ContactItem = ({ icon: Icon, label, text }) => (
  <div className="flex items-start gap-5">
    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-ink/20">
      <Icon className="w-4 h-4 text-brass" strokeWidth={1.5} />
    </div>
    <div>
      <p className="text-[10px] tracking-[0.3em] uppercase text-steel mb-1">
        {label}
      </p>
      <p className="text-ink leading-relaxed">{text}</p>
    </div>
  </div>
)

export default Contact
