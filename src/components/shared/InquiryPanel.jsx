import { useState } from 'react'
import { inquiryChecklist } from '@/content/siteContent'

const fields = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
  { name: 'company', label: 'Company', type: 'text', placeholder: 'Company name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com' },
  { name: 'product', label: 'Product to source', type: 'text', placeholder: 'Example: stainless steel drinkware' },
]

const InquiryPanel = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    product: '',
    details: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Inquiry preview form submitted', formData)
    setSubmitted(true)
  }

  return (
    <div className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="space-y-5">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Inquiry form
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Get a Free Sourcing Quote
          </h3>
          <p className="text-base leading-7 text-slate-600">
            Share your product and sourcing needs. This preview form shows the intended user experience and lead qualification fields.
          </p>
        </div>

        <div className="rounded-2xl bg-blue-50 p-5 text-slate-900">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
            Helpful details to include
          </p>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
            {inquiryChecklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-blue-700" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field.name} className="space-y-2">
              <span className="text-sm font-medium text-slate-800">{field.label}</span>
              <input
                required={field.name !== 'company'}
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-0 transition placeholder:text-slate-400 focus:border-blue-500"
              />
            </label>
          ))}
        </div>

        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-800">Project details</span>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={6}
            placeholder="Tell us about your quantity, quality expectations, packaging, destination market, and timeline."
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500"
          />
        </label>

        <button
          type="submit"
          className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
          Get a Free Sourcing Quote
        </button>

        <p className="text-sm leading-6 text-slate-500">
          Frontend preview note: form submission is not connected to a backend yet. This step is for visual approval only.
        </p>

        {submitted && (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-6 text-emerald-800">
            Thank you. Your inquiry has been captured in this preview state so you can review the intended form experience.
          </div>
        )}
      </form>
    </div>
  )
}

export default InquiryPanel
