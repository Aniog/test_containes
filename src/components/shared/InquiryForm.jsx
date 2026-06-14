import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitInquiry } from '@/api/inquiries'

const initialValues = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  productCategory: '',
  productDescription: '',
  targetQuantity: '',
  targetUnitPrice: '',
  targetPort: '',
  additionalNotes: '',
}

const validate = (values) => {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please tell us your name.'
  if (!values.email.trim()) errors.email = 'A business email is required.'
  else if (!/^\S+@\S+\.\S+$/.test(values.email)) errors.email = 'That email does not look valid.'
  if (!values.productDescription.trim() || values.productDescription.trim().length < 20) {
    errors.productDescription = 'Please describe the product in at least 20 characters (specs, materials, target price).'
  }
  return errors
}

const InquiryForm = ({ sourcePage, compact = false }) => {
  const location = useLocation()
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [serverError, setServerError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const v = validate(values)
    setErrors(v)
    if (Object.keys(v).length > 0) return

    setStatus('submitting')
    setServerError(null)

    try {
      await submitInquiry({
        ...values,
        sourcePage: sourcePage || location.pathname,
      })
      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      setServerError(err.message)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card border-emerald-200 bg-emerald-50 text-emerald-900">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-emerald-900 mb-1">
              Inquiry received
            </h3>
            <p className="text-sm text-emerald-800 leading-relaxed">
              Thank you. A sourcing manager will review your request and reply within one business day. For urgent matters, email <a className="underline" href="mailto:hello@ssourcingchina.com">hello@ssourcingchina.com</a>.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm font-semibold text-emerald-700 hover:text-emerald-900 underline"
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`card ${compact ? 'p-5 md:p-6' : ''}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        <div>
          <label htmlFor="name" className="label-base">Full name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={values.name}
            onChange={handleChange}
            className="input-base"
            placeholder="Jane Doe"
          />
          {errors.name && <p className="mt-1 text-xs text-accent">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="company" className="label-base">Company / brand</label>
          <input
            id="company"
            name="company"
            type="text"
            value={values.company}
            onChange={handleChange}
            className="input-base"
            placeholder="Acme Imports Ltd."
          />
        </div>

        <div>
          <label htmlFor="email" className="label-base">Business email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={handleChange}
            className="input-base"
            placeholder="jane@acmeimports.com"
          />
          {errors.email && <p className="mt-1 text-xs text-accent">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="label-base">Phone / WhatsApp</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={handleChange}
            className="input-base"
            placeholder="+1 415 555 0102"
          />
        </div>

        <div>
          <label htmlFor="country" className="label-base">Country / region</label>
          <input
            id="country"
            name="country"
            type="text"
            value={values.country}
            onChange={handleChange}
            className="input-base"
            placeholder="United States"
          />
        </div>

        <div>
          <label htmlFor="productCategory" className="label-base">Product category</label>
          <input
            id="productCategory"
            name="productCategory"
            type="text"
            value={values.productCategory}
            onChange={handleChange}
            className="input-base"
            placeholder="Home goods, electronics, apparel…"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="productDescription" className="label-base">What do you want to source? *</label>
          <textarea
            id="productDescription"
            name="productDescription"
            rows={4}
            required
            value={values.productDescription}
            onChange={handleChange}
            className="input-base"
            placeholder="Material, dimensions, color, packaging, target price, quantity…"
          />
          {errors.productDescription && (
            <p className="mt-1 text-xs text-accent">{errors.productDescription}</p>
          )}
        </div>

        <div>
          <label htmlFor="targetQuantity" className="label-base">Target quantity</label>
          <input
            id="targetQuantity"
            name="targetQuantity"
            type="text"
            value={values.targetQuantity}
            onChange={handleChange}
            className="input-base"
            placeholder="e.g. 2,000 units / first order"
          />
        </div>

        <div>
          <label htmlFor="targetUnitPrice" className="label-base">Target unit price</label>
          <input
            id="targetUnitPrice"
            name="targetUnitPrice"
            type="text"
            value={values.targetUnitPrice}
            onChange={handleChange}
            className="input-base"
            placeholder="e.g. USD 3.50 – 4.00 FOB Shanghai"
          />
        </div>

        <div>
          <label htmlFor="targetPort" className="label-base">Destination port / city</label>
          <input
            id="targetPort"
            name="targetPort"
            type="text"
            value={values.targetPort}
            onChange={handleChange}
            className="input-base"
            placeholder="Los Angeles, Rotterdam, Hamburg…"
          />
        </div>

        <div>
          <label htmlFor="additionalNotes" className="label-base">Certifications / notes</label>
          <input
            id="additionalNotes"
            name="additionalNotes"
            type="text"
            value={values.additionalNotes}
            onChange={handleChange}
            className="input-base"
            placeholder="CE, FDA, FSC, OEM, packaging, deadline…"
          />
        </div>
      </div>

      {serverError && (
        <div className="mt-5 flex items-start gap-2 p-3 rounded-md bg-red-50 border border-red-200 text-red-800 text-sm">
          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="mt-6 md:mt-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-xs text-primary-500 max-w-md">
          By submitting, you agree to be contacted about your inquiry. We do not share your information with third parties or factories without your approval.
        </p>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting…
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Get a Free Sourcing Quote
            </>
          )}
        </button>
      </div>
    </form>
  )
}

export default InquiryForm
