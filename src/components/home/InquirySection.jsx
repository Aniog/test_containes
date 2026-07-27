import { useState } from 'react'
import { CheckCircle2, Mail, MessageSquare, PackageSearch } from 'lucide-react'
import { createSourcingInquiry } from '@/api/sourcingInquiries'
import SectionHeader from '@/components/shared/SectionHeader'

const initialValues = {
  name: '',
  email: '',
  company: '',
  destination_country: '',
  product_category: '',
  message: '',
}

const validateInquiry = (values) => {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.email.trim()) return 'Please enter your work email.'
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) return 'Please enter a valid work email.'
  if (!values.product_category.trim()) return 'Please enter the product or category you want to source.'
  if (!values.message.trim()) return 'Please share a few details about your sourcing request.'
  return null
}

export default function InquirySection() {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setError('')

    const validationError = validateInquiry(values)
    if (validationError) {
      setError(validationError)
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      await createSourcingInquiry(values)
      setValues(initialValues)
      setStatus('success')
    } catch (submissionError) {
      setError(submissionError.message || 'Unable to submit your inquiry. Please try again.')
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <section className="bg-brand-mist py-16 text-brand-ink md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Inquiry"
            title="Get a Free Sourcing Quote"
            description="Tell us what you want to source from China. The more detail you share, the easier it is to identify suitable suppliers and quote the right service scope."
          />
          <div className="mt-8 space-y-4">
            {[
              ['Product details', 'Photos, drawings, links, materials, dimensions, or technical requirements.'],
              ['Order information', 'Estimated quantity, target price range, destination country, and timeline.'],
              ['Support needed', 'Supplier search, verification, inspection, production follow-up, or shipping coordination.'],
            ].map(([title, text]) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-brand-line bg-white p-5 text-brand-ink shadow-sm">
                <PackageSearch className="mt-1 h-5 w-5 flex-none text-brand-blue" />
                <div>
                  <p className="font-semibold text-brand-navy">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-brand-muted">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="rounded-3xl border border-brand-line bg-white p-6 text-brand-ink shadow-soft md:p-8" aria-label="Sourcing inquiry form" onSubmit={handleSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-semibold text-brand-navy">
              Name
              <input name="name" value={values.name} onChange={handleChange} className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="Your name" type="text" autoComplete="name" disabled={isSubmitting} />
            </label>
            <label className="block text-sm font-semibold text-brand-navy">
              Work email
              <input name="email" value={values.email} onChange={handleChange} className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="name@company.com" type="email" autoComplete="email" disabled={isSubmitting} />
            </label>
            <label className="block text-sm font-semibold text-brand-navy">
              Company
              <input name="company" value={values.company} onChange={handleChange} className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="Company name" type="text" autoComplete="organization" disabled={isSubmitting} />
            </label>
            <label className="block text-sm font-semibold text-brand-navy">
              Destination country
              <input name="destination_country" value={values.destination_country} onChange={handleChange} className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="United States, Germany..." type="text" autoComplete="country-name" disabled={isSubmitting} />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-brand-navy">
            Product or category
            <input name="product_category" value={values.product_category} onChange={handleChange} className="mt-2 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="Industrial parts, packaging, electronics accessories..." type="text" disabled={isSubmitting} />
          </label>
          <label className="mt-5 block text-sm font-semibold text-brand-navy">
            Tell us what you need
            <textarea name="message" value={values.message} onChange={handleChange} className="mt-2 min-h-36 w-full rounded-xl border border-brand-line bg-white px-4 py-3 text-brand-ink placeholder:text-slate-400 focus:border-brand-blue focus:outline-none focus:ring-4 focus:ring-brand-blue/10" placeholder="Share specs, target quantity, timeline, supplier concerns, QC needs, or shipping requirements." disabled={isSubmitting} />
          </label>
          <button type="submit" disabled={isSubmitting} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-blue/20 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto">
            <MessageSquare className="h-4 w-4" /> {isSubmitting ? 'Submitting...' : 'Get a Free Sourcing Quote'}
          </button>
          {status === 'success' && (
            <p className="mt-4 flex items-start gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800" role="status">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none" /> Thank you. Your sourcing inquiry has been received, and we will review your requirements.
            </p>
          )}
          {status === 'error' && error && (
            <p className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800" role="alert">
              {error}
            </p>
          )}
          <p className="mt-4 flex items-center gap-2 text-sm text-brand-muted">
            <Mail className="h-4 w-4 text-brand-blue" /> We use your details only to respond to this sourcing request.
          </p>
        </form>
      </div>
    </section>
  )
}
