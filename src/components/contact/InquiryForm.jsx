import { useMemo, useState } from 'react'
import Button from '@/components/ui/Button'
import { createInquiry, emptyInquiryValues } from '@/api/inquiries'
import { serviceNeedOptions } from '@/content/siteContent'

const initialState = {
  status: 'idle',
  message: '',
}

function validate(values) {
  if (!values.name.trim()) return 'Please enter your name.'
  if (!values.company_name.trim()) return 'Please enter your company name.'
  if (!values.email.trim()) return 'Please enter your email address.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return 'Please enter a valid email address.'
  if (!values.product_name.trim()) return 'Please tell us what product you want to source.'
  if (!values.product_description.trim()) return 'Please add a short product description.'
  if (!values.shipping_destination.trim()) return 'Please add your shipping destination.'
  if (values.service_needs.length === 0) return 'Please select at least one service need.'
  return ''
}

export default function InquiryForm({ sourcePage = 'website' }) {
  const [values, setValues] = useState(emptyInquiryValues)
  const [submitState, setSubmitState] = useState(initialState)

  const isSubmitting = submitState.status === 'submitting'
  const selectedServices = useMemo(() => new Set(values.service_needs), [values.service_needs])

  const updateValue = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  const toggleService = (serviceName) => {
    setValues((current) => {
      const alreadySelected = current.service_needs.includes(serviceName)
      return {
        ...current,
        service_needs: alreadySelected
          ? current.service_needs.filter((item) => item !== serviceName)
          : [...current.service_needs, serviceName],
      }
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const validationMessage = validate(values)
    if (validationMessage) {
      setSubmitState({ status: 'error', message: validationMessage })
      return
    }

    setSubmitState({ status: 'submitting', message: '' })

    const { errorMessage } = await createInquiry(values, sourcePage)

    if (errorMessage) {
      setSubmitState({ status: 'error', message: errorMessage })
      return
    }

    setValues(emptyInquiryValues)
    setSubmitState({
      status: 'success',
      message:
        'Thanks. Your sourcing inquiry has been received. We will review your request and follow up with the next steps.',
    })
  }

  return (
    <form
      className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
      onSubmit={handleSubmit}
    >
      <div className="mb-8 space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
          Get a Free Sourcing Quote
        </p>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">
          Tell us what you need to source from China
        </h3>
        <p className="text-sm leading-7 text-slate-600 md:text-base">
          Share your product details, service needs, and destination market. The more specific your brief is, the better we can qualify the inquiry.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-800">
          <span>Name</span>
          <input
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-blue-600"
            name="name"
            value={values.name}
            onChange={updateValue}
            placeholder="Your full name"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          <span>Company</span>
          <input
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-blue-600"
            name="company_name"
            value={values.company_name}
            onChange={updateValue}
            placeholder="Company name"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          <span>Email</span>
          <input
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-blue-600"
            type="email"
            name="email"
            value={values.email}
            onChange={updateValue}
            placeholder="you@company.com"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          <span>Phone / WhatsApp</span>
          <input
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-blue-600"
            name="phone"
            value={values.phone}
            onChange={updateValue}
            placeholder="Optional"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          <span>Country</span>
          <input
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-blue-600"
            name="country"
            value={values.country}
            onChange={updateValue}
            placeholder="Your company location"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          <span>Shipping destination</span>
          <input
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-blue-600"
            name="shipping_destination"
            value={values.shipping_destination}
            onChange={updateValue}
            placeholder="Country / port / warehouse"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800 md:col-span-2">
          <span>Product name / category</span>
          <input
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-blue-600"
            name="product_name"
            value={values.product_name}
            onChange={updateValue}
            placeholder="Example: stainless steel kitchen utensils"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800 md:col-span-2">
          <span>Product description</span>
          <textarea
            className="min-h-[132px] w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-blue-600"
            name="product_description"
            value={values.product_description}
            onChange={updateValue}
            placeholder="Describe the product, materials, customization needs, specs, or quality concerns."
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          <span>Estimated order volume</span>
          <input
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-blue-600"
            name="order_volume"
            value={values.order_volume}
            onChange={updateValue}
            placeholder="MOQ, trial order, or annual estimate"
          />
        </label>

        <label className="space-y-2 text-sm font-medium text-slate-800">
          <span>Target timeline</span>
          <input
            className="h-12 w-full rounded-2xl border border-slate-300 px-4 text-slate-950 outline-none transition focus:border-blue-600"
            name="timeline"
            value={values.timeline}
            onChange={updateValue}
            placeholder="Example: sampling this month"
          />
        </label>

        <fieldset className="space-y-3 md:col-span-2">
          <legend className="text-sm font-medium text-slate-800">Service needs</legend>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {serviceNeedOptions.map((option) => {
              const checked = selectedServices.has(option)

              return (
                <label
                  key={option}
                  className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                    checked
                      ? 'border-blue-300 bg-blue-50 text-blue-700'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                  }`}
                >
                  <input
                    checked={checked}
                    className="h-4 w-4 rounded border-slate-300"
                    type="checkbox"
                    onChange={() => toggleService(option)}
                  />
                  <span>{option}</span>
                </label>
              )
            })}
          </div>
        </fieldset>

        <label className="space-y-2 text-sm font-medium text-slate-800 md:col-span-2">
          <span>Additional notes</span>
          <textarea
            className="min-h-[120px] w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-blue-600"
            name="notes"
            value={values.notes}
            onChange={updateValue}
            placeholder="Add target price range, certifications, packaging requirements, current supplier issues, or anything else helpful."
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6">
        <Button type="submit" size="lg" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Get a Free Sourcing Quote'}
        </Button>

        {submitState.status === 'success' ? (
          <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-700">
            {submitState.message}
          </p>
        ) : null}

        {submitState.status === 'error' ? (
          <p className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-6 text-amber-700">
            {submitState.message}
          </p>
        ) : null}

        <p className="text-xs leading-6 text-slate-500">
          By submitting this form, you agree to be contacted regarding your sourcing request.
        </p>
      </div>
    </form>
  )
}
