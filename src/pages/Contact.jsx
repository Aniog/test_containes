import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'

const SUBJECTS = ['General Inquiry', 'Specimen Submission', 'Course Enrollment', 'Collaboration']

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    affiliation: '',
    subject: SUBJECTS[0],
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Name is required.'
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Provide a valid email address.'
    if (!values.message.trim()) return 'A note or message is required.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate()
    if (err) { setError(err); return }
    setStatus('submitting')
    // Simulated send — preserves the editorial submission ritual.
    await new Promise((r) => setTimeout(r, 850))
    setStatus('success')
    setValues({ name: '', email: '', affiliation: '', subject: SUBJECTS[0], message: '' })
  }

  return (
    <div>
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-12">
        <div className="flex items-end justify-between gap-6 border-b border-bone pb-6">
          <p className="small-caps text-graphite">Section · IV</p>
          <p className="font-mono text-xs text-graphite">/contact</p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl text-ink mt-10 leading-[0.95]"
        >
          Lab Notes <br /><span className="italic font-light">&amp; Correspondence.</span>
        </motion.h1>
        <p className="mt-8 max-w-2xl text-charcoal text-lg leading-relaxed">
          Submit observations, request specimens, or pose a question to the
          editorial desk. All correspondence is reviewed in the order received.
        </p>
      </section>

      {/* Form area --------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Lab report card ----------------------------------- */}
          <div className="lg:col-span-8">
            <div className="relative bg-parchment-dim ring-1 ring-bone rounded-sm p-8 sm:p-12 overflow-hidden">
              {/* Watermark micrometer */}
              <svg
                aria-hidden="true"
                viewBox="0 0 800 100"
                className="absolute -bottom-4 left-0 right-0 w-full opacity-[0.07] pointer-events-none"
              >
                <line x1="20" y1="50" x2="780" y2="50" stroke="#1A1A1A" strokeWidth="1" />
                {Array.from({ length: 77 }).map((_, i) => {
                  const x = 20 + i * 10
                  const big = i % 5 === 0
                  return (
                    <line key={i} x1={x} y1={big ? 25 : 38} x2={x} y2={big ? 75 : 62} stroke="#1A1A1A" strokeWidth="1" />
                  )
                })}
              </svg>

              {/* Report header strip */}
              <header className="flex flex-wrap items-end justify-between gap-3 border-b border-ink/40 pb-4">
                <div>
                  <p className="small-caps text-graphite">Form 04-A</p>
                  <h2 className="font-serif text-3xl text-ink mt-1">Laboratory Report Card</h2>
                </div>
                <p className="font-mono text-xs text-graphite">REF: MC/{new Date().getFullYear()}/—</p>
              </header>

              <form onSubmit={onSubmit} className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-7 relative">
                <Field
                  label="Observer's Name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  placeholder="J. Whitcombe"
                  required
                />
                <Field
                  label="Email Correspondent"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  placeholder="observer@institute.edu"
                  required
                />
                <Field
                  label="Affiliation"
                  name="affiliation"
                  value={values.affiliation}
                  onChange={onChange}
                  placeholder="Department of Microscopy"
                />
                <SelectField
                  label="Subject of Note"
                  name="subject"
                  value={values.subject}
                  onChange={onChange}
                  options={SUBJECTS}
                />
                <div className="sm:col-span-2">
                  <label className="block">
                    <span className="small-caps text-graphite">Notes &amp; Observations</span>
                    <textarea
                      name="message"
                      rows={6}
                      value={values.message}
                      onChange={onChange}
                      required
                      placeholder="Mounted in Canada balsam. Specimen displays…"
                      className="mt-2 block w-full bg-transparent border-0 border-b border-ink/30 focus:border-ink
                                 outline-none text-ink placeholder:text-pencil py-2 text-base font-serif italic
                                 resize-none transition-colors"
                    />
                  </label>
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="sm:col-span-2 flex items-start gap-2 text-ink bg-white/55 border border-ink/20 backdrop-blur-md rounded-2xl px-4 py-3"
                      role="alert"
                    >
                      <AlertCircle className="w-4 h-4 mt-0.5" />
                      <span className="text-sm">{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-bone mt-2">
                  <p className="font-mono text-xs text-graphite leading-relaxed max-w-md">
                    By submitting this form you affirm that the contents of your
                    note are your own observations.
                  </p>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full
                               bg-white/45 backdrop-blur-md border border-white/50 text-ink
                               hover:bg-white/70 disabled:opacity-60 transition shadow-[0_10px_36px_rgba(26,26,26,0.10)]"
                  >
                    {status === 'submitting' ? 'Submitting…' : 'Submit Lab Note'}
                    <Send className="w-4 h-4 transition group-hover:translate-x-0.5 -translate-y-0.5" strokeWidth={1.6} />
                  </button>
                </div>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="sm:col-span-2 flex items-start gap-3 bg-white/65 border border-ink/15 backdrop-blur-md rounded-2xl px-5 py-4"
                      role="status"
                    >
                      <CheckCircle2 className="w-5 h-5 mt-0.5 text-ink" />
                      <div>
                        <p className="font-serif text-xl text-ink">Your note has been received.</p>
                        <p className="text-sm text-charcoal mt-1">A reply will be entered into the correspondence ledger and returned in due course.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

          {/* Sidebar — imprint */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-md p-7 shadow-[0_10px_36px_rgba(26,26,26,0.06)]">
              <p className="small-caps text-graphite">Editorial Desk</p>
              <h3 className="font-serif text-2xl text-ink mt-2 leading-tight">Department of Microscopy</h3>
              <p className="mt-4 text-charcoal text-sm leading-relaxed">
                Old Hall, West Wing<br />
                Room 214, Microscopy Suite<br />
                Open Mon — Fri, 09:00 to 17:00
              </p>
            </div>

            <div className="rounded-3xl border border-white/40 bg-white/40 backdrop-blur-md p-7 shadow-[0_10px_36px_rgba(26,26,26,0.06)]">
              <p className="small-caps text-graphite">Submission Notes</p>
              <ul className="mt-4 space-y-3 text-sm text-charcoal leading-relaxed">
                <li className="flex gap-2"><span className="font-mono text-graphite">01</span><span>Specify magnification and stain in your note.</span></li>
                <li className="flex gap-2"><span className="font-mono text-graphite">02</span><span>Reference the volume number when applicable.</span></li>
                <li className="flex gap-2"><span className="font-mono text-graphite">03</span><span>Image plates are reviewed in monthly editorial sessions.</span></li>
              </ul>
            </div>

            <div className="rounded-3xl border border-bone bg-parchment-dim p-7">
              <p className="small-caps text-graphite">Correspondence</p>
              <p className="font-mono text-sm text-ink mt-3">desk@microcosmos.edu</p>
              <p className="font-mono text-sm text-ink">+1 (415) 555-0162</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}

// ----------------------- Sub-components -----------------------

function Field({ label, name, value, onChange, type = 'text', placeholder, required }) {
  return (
    <label className="block">
      <span className="small-caps text-graphite">{label}{required && <span className="text-ink ml-1">·</span>}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 block w-full bg-transparent border-0 border-b border-ink/30 focus:border-ink
                   outline-none text-ink placeholder:text-pencil py-2 text-base font-serif italic
                   transition-colors"
      />
    </label>
  )
}

function SelectField({ label, name, value, onChange, options }) {
  return (
    <label className="block">
      <span className="small-caps text-graphite">{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 block w-full bg-transparent border-0 border-b border-ink/30 focus:border-ink
                   outline-none text-ink py-2 text-base font-serif italic transition-colors cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt} value={opt} className="font-sans not-italic">{opt}</option>
        ))}
      </select>
    </label>
  )
}
