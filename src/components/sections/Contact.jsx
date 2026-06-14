import React, { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea, Select, Label } from '@/components/ui/Input'
import { useToast } from '@/components/ui/Toaster'

const PRODUCT_OPTIONS = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folder Machine',
  'Metal Folding Machine',
  'Not sure yet — please advise',
]

const TIMELINE_OPTIONS = [
  'Immediately (this month)',
  '1–3 months',
  '3–6 months',
  '6+ months',
  'Just researching',
]

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: PRODUCT_OPTIONS[0],
  timeline: TIMELINE_OPTIONS[0],
  message: '',
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.company.trim()) errors.company = 'A company name helps us route the request.'
  if (!values.email.trim()) {
    errors.email = 'An email address is required.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'That email address looks off — please double-check it.'
  }
  if (!values.message.trim()) {
    errors.message = 'A short description helps us prepare for the call.'
  }
  return errors
}

const Field = ({ label, htmlFor, error, children, hint }) => (
  <div className="flex flex-col gap-2">
    <Label htmlFor={htmlFor}>{label}</Label>
    {children}
    {hint && !error && <p className="text-xs text-muted">{hint}</p>}
    {error && (
      <p role="alert" className="text-xs text-red-600">
        {error}
      </p>
    )}
  </div>
)

const Contact = () => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const toast = useToast()

  const update = (key) => (e) => {
    const v = e?.target ? e.target.value : e
    setValues((s) => ({ ...s, [key]: v }))
    if (errors[key]) {
      setErrors((s) => {
        const next = { ...s }
        delete next[key]
        return next
      })
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    if (Object.keys(found).length > 0) {
      setErrors(found)
      toast.error('Please review the form', 'A few fields need your attention before we can route this.')
      return
    }

    setStatus('submitting')
    setErrors({})

    // Simulated submission (no backend configured for this site build)
    await new Promise((resolve) => setTimeout(resolve, 700))

    setStatus('success')
    setValues(initialValues)
    toast.success(
      'Request received',
      'Our applications team will reach out within one business day.'
    )
    setTimeout(() => setStatus('idle'), 300)
  }

  const submitting = status === 'submitting'

  return (
    <section id="contact" className="bg-bg py-20 md:py-28">
      <div className="container-x">
        <div className="rounded-3xl bg-slate text-bg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-5 p-8 md:p-12 lg:p-14 relative">
              <div
                aria-hidden
                className="absolute inset-0 -z-0"
                data-strk-bg-id="contact-bg-2d77"
                data-strk-bg="[contact-eyebrow] [contact-title]"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="900"
              />
              <div
                aria-hidden
                className="absolute inset-0 -z-0 bg-gradient-to-br from-slate via-slate-soft/80 to-slate"
              />
              <div className="relative">
                <p
                  id="contact-eyebrow"
                  className="eyebrow text-accent"
                >
                  Talk to engineering
                </p>
                <h2
                  id="contact-title"
                  className="mt-4 font-display text-3xl md:text-4xl leading-[1.1] tracking-tight text-bg text-balance"
                >
                  Tell us about your next bend.
                </h2>
                <p className="mt-4 text-[15px] text-bg/70 leading-relaxed max-w-md">
                  Share a few details about your part, your material, and
                  the angle tolerance you need. We will respond within one
                  business day with a machine recommendation and a fixed
                  quote.
                </p>

                <div className="mt-10 space-y-4 text-sm text-bg/80">
                  <a
                    href="mailto:engineering@artitect-machinery.com"
                    className="flex items-center gap-3 hover:text-bg transition-colors"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-accent">
                      <Mail className="h-4 w-4" />
                    </span>
                    engineering@artitect-machinery.com
                  </a>
                  <a
                    href="tel:+18005550199"
                    className="flex items-center gap-3 hover:text-bg transition-colors"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-accent">
                      <Phone className="h-4 w-4" />
                    </span>
                    +1 (800) 555-0199
                  </a>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-accent">
                      <MapPin className="h-4 w-4" />
                    </span>
                    220 Foundry Lane, Pittsburgh, PA 15222
                  </div>
                </div>

                <p className="mt-12 text-[11px] uppercase tracking-eyebrow text-bg/50">
                  Mon – Fri · 8:00 – 18:00 ET
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface text-ink p-8 md:p-12 lg:p-14">
              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5" noValidate>
                <Field label="Name" htmlFor="name" error={errors.name}>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your full name"
                    value={values.name}
                    onChange={update('name')}
                    invalid={!!errors.name}
                  />
                </Field>
                <Field label="Company" htmlFor="company" error={errors.company}>
                  <Input
                    id="company"
                    name="company"
                    autoComplete="organization"
                    placeholder="Workshop or manufacturer"
                    value={values.company}
                    onChange={update('company')}
                    invalid={!!errors.company}
                  />
                </Field>
                <Field
                  label="Work email"
                  htmlFor="email"
                  error={errors.email}
                >
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={update('email')}
                    invalid={!!errors.email}
                  />
                </Field>
                <Field
                  label="Phone (optional)"
                  htmlFor="phone"
                  error={errors.phone}
                >
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 555 0100"
                    value={values.phone}
                    onChange={update('phone')}
                  />
                </Field>
                <Field
                  label="Which machine?"
                  htmlFor="product"
                  hint="Pick the closest match — we'll confirm in our reply."
                >
                  <Select
                    id="product"
                    name="product"
                    value={values.product}
                    onChange={update('product')}
                  >
                    {PRODUCT_OPTIONS.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </Select>
                </Field>
                <Field label="Timeline" htmlFor="timeline">
                  <Select
                    id="timeline"
                    name="timeline"
                    value={values.timeline}
                    onChange={update('timeline')}
                  >
                    {TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </Select>
                </Field>
                <div className="md:col-span-2">
                  <Field
                    label="Tell us about the project"
                    htmlFor="message"
                    error={errors.message}
                    hint="Material, thickness, target tolerances, and any deadlines."
                  >
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="We need to fold 2 mm stainless into 1500 mm long channels at ±0.2°, running 200 units per week…"
                      value={values.message}
                      onChange={update('message')}
                      invalid={!!errors.message}
                    />
                  </Field>
                </div>

                <div className="md:col-span-2 mt-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-2">
                  <p className="text-xs text-muted max-w-md">
                    By submitting, you agree to receive a follow-up from
                    our applications team. We never share your details.
                  </p>
                  <Button
                    type="submit"
                    variant="accent"
                    size="lg"
                    disabled={submitting}
                    className="md:shrink-0"
                  >
                    {submitting ? 'Sending…' : 'Send request'}
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
