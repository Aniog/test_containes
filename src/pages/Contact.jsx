import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MapPin, Mail, Clock, CheckCircle2 } from 'lucide-react'
import SectionEyebrow from '@/components/SectionEyebrow'

const subjects = ['General Inquiry', 'Specimen Request', 'Preparation Guide', 'Editorial Note']

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    affiliation: '',
    email: '',
    subject: subjects[0],
    specimen: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return 'Please enter the observer’s name.'
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email))
      return 'A valid correspondence email is required.'
    if (!values.message.trim() || values.message.trim().length < 10)
      return 'Please write a brief observation (at least 10 characters).'
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
    // Simulate submission. In a real environment, integrate with backend.
    await new Promise((r) => setTimeout(r, 900))
    setStatus('success')
    setValues({
      name: '',
      affiliation: '',
      email: '',
      subject: subjects[0],
      specimen: '',
      message: '',
    })
  }

  return (
    <div className="relative">
      {/* Watermark — micrometer scale */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <svg
          className="absolute -right-12 top-40 opacity-[0.05]"
          width="900"
          height="900"
          viewBox="0 0 900 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="450" cy="450" r="440" stroke="#1A1A1A" strokeWidth="1" />
          <circle cx="450" cy="450" r="320" stroke="#1A1A1A" strokeWidth="1" />
          <circle cx="450" cy="450" r="200" stroke="#1A1A1A" strokeWidth="1" />
          {Array.from({ length: 60 }).map((_, i) => {
            const angle = (i / 60) * Math.PI * 2
            const x1 = 450 + Math.cos(angle) * 200
            const y1 = 450 + Math.sin(angle) * 200
            const long = i % 5 === 0
            const r2 = long ? 260 : 230
            const x2 = 450 + Math.cos(angle) * r2
            const y2 = 450 + Math.sin(angle) * r2
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1A1A1A" strokeWidth="1" />
            )
          })}
          <line x1="20" y1="450" x2="880" y2="450" stroke="#1A1A1A" strokeWidth="1" />
          <line x1="450" y1="20" x2="450" y2="880" stroke="#1A1A1A" strokeWidth="1" />
        </svg>

        {/* Top-of-page horizontal micrometer ruler */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-32 opacity-[0.06]"
          width="1100"
          height="48"
          viewBox="0 0 1100 48"
          fill="none"
        >
          <line x1="0" y1="24" x2="1100" y2="24" stroke="#1A1A1A" strokeWidth="1" />
          {Array.from({ length: 111 }).map((_, i) => {
            const long = i % 10 === 0
            return (
              <line
                key={i}
                x1={i * 10}
                y1={24}
                x2={i * 10}
                y2={long ? 4 : 14}
                stroke="#1A1A1A"
                strokeWidth="1"
              />
            )
          })}
        </svg>
      </div>

      <section className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16">
        <SectionEyebrow index="Vol. III" label="Lab Notes & Feedback" />
        <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
          <h1 className="lg:col-span-8 font-serif text-5xl lg:text-7xl leading-[0.98] tracking-tight text-ink">
            File a laboratory report.
          </h1>
          <p className="lg:col-span-4 text-charcoal/90 leading-relaxed">
            Submit observations, request a specimen, or correspond with the editors. Each entry is
            archived under the standard report card format used by the journal.
          </p>
        </div>
        <div className="mt-10 rule-double" />
      </section>

      <section className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-24 grid lg:grid-cols-12 gap-10">
        {/* Form card styled like a physical report */}
        <div className="lg:col-span-8">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative bg-bone/95 border border-ink/15 shadow-[0_30px_60px_-30px_rgba(26,26,26,0.35)] rounded-md"
          >
            {/* Report header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-7 lg:px-10 pt-7 pb-5 border-b border-ink/15">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
                  Form A · Observer&apos;s Report
                </p>
                <p className="font-serif text-2xl text-ink mt-1">Laboratory Note</p>
              </div>
              <div className="flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
                <span>File N° __________</span>
                <span>Date · {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
              </div>
            </div>

            <div className="px-7 lg:px-10 py-8 grid sm:grid-cols-2 gap-x-8 gap-y-7">
              <Field
                label="Observer’s name"
                hint="Surname first, please"
                name="name"
                value={values.name}
                onChange={onChange}
                required
              />
              <Field
                label="Affiliation"
                hint="Institution or laboratory"
                name="affiliation"
                value={values.affiliation}
                onChange={onChange}
              />
              <Field
                label="Correspondence email"
                type="email"
                name="email"
                value={values.email}
                onChange={onChange}
                required
              />

              <div>
                <Label hint="Choose one">Nature of report</Label>
                <select
                  name="subject"
                  value={values.subject}
                  onChange={onChange}
                  className="mt-1 w-full bg-transparent border-b border-ink/30 focus:border-ink py-2 text-ink font-sans outline-none transition-colors appearance-none pr-6 cursor-pointer"
                >
                  {subjects.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <Field
                className="sm:col-span-2"
                label="Specimen reference"
                hint="ID, species, or working title (optional)"
                name="specimen"
                value={values.specimen}
                onChange={onChange}
              />

              <div className="sm:col-span-2">
                <Label hint="Please be precise.">Observation</Label>
                <textarea
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={onChange}
                  required
                  placeholder="Describe the preparation, the observation, and any questions arising…"
                  className="mt-1 w-full bg-transparent border-b border-ink/30 focus:border-ink py-2 text-ink font-sans outline-none resize-none placeholder:text-ash transition-colors"
                />
              </div>
            </div>

            <div className="px-7 lg:px-10 pb-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-ink/15 pt-5">
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
                <span aria-hidden className="block w-8 h-px bg-ink/40" />
                Signed · {values.name || '____________________'}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="group inline-flex items-center gap-2 rounded-full bg-white/40 backdrop-blur-md border border-ink/20 px-6 py-3 text-sm font-medium text-ink hover:bg-white/70 transition-colors disabled:opacity-60"
              >
                <Send size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                {status === 'submitting' ? 'Filing report…' : 'File the report'}
              </button>
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="alert"
                  className="px-7 lg:px-10 pb-6 -mt-3 text-sm text-ink"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite mr-2">Error</span>
                  {error}
                </motion.p>
              )}

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  role="status"
                  className="mx-7 lg:mx-10 mb-7 -mt-2 rounded-xl bg-white/55 backdrop-blur-md border border-white/60 p-4 flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="mt-0.5 text-ink" />
                  <div>
                    <p className="font-serif text-lg text-ink leading-tight">Report filed.</p>
                    <p className="text-sm text-charcoal mt-0.5">
                      Thank you for your contribution. The editors will respond by return of post.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>

        {/* Aside — contacts */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl bg-white/45 backdrop-blur-md border border-white/60 p-6 shadow-[0_20px_40px_-25px_rgba(26,26,26,0.35)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
              Editorial office
            </p>
            <h3 className="mt-2 font-serif text-2xl text-ink">Department of Histology</h3>
            <ul className="mt-4 space-y-3 text-sm text-charcoal">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 text-ink" />
                <span>Building C · Annex 4<br />Faculty of Natural Sciences</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 text-ink" />
                <span>editors@microcosmos.journal</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 text-ink" />
                <span>Open hours · 09:00–17:30 weekdays</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-ink text-bone p-6 shadow-[0_30px_60px_-30px_rgba(26,26,26,0.6)]">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/70">
              Submission notice
            </p>
            <p className="mt-3 font-serif italic text-xl leading-snug">
              “All reports are reviewed in the order received. Original specimens may be requested
              for confirmation, with appropriate fixation and labelling.”
            </p>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/60">
              — The Editors
            </p>
          </div>
        </aside>
      </section>
    </div>
  )
}

function Label({ children, hint }) {
  return (
    <span className="flex items-baseline gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite">
        {children}
      </span>
      {hint && <span className="font-serif italic text-[11px] text-ash">— {hint}</span>}
    </span>
  )
}

function Field({ label, hint, name, value, onChange, type = 'text', required = false, className = '' }) {
  return (
    <div className={className}>
      <Label hint={hint}>{label}{required && ' *'}</Label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 w-full bg-transparent border-b border-ink/30 focus:border-ink py-2 text-ink font-sans outline-none placeholder:text-ash transition-colors"
      />
    </div>
  )
}
