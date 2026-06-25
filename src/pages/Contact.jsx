import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { PRODUCTS, PRODUCT_INTEREST_OPTIONS } from '@/data/products'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const initialValues = {
  name: '',
  email: '',
  company: '',
  phone: '',
  country: '',
  product_interest: 'general_inquiry',
  message: '',
}

const productIdToInterest = (productId) => {
  const product = PRODUCTS.find((p) => p.id === productId)
  if (!product) return 'general_inquiry'
  const category = product.category.toLowerCase()
  if (category.includes('double')) return 'double_folding_machine'
  if (category.includes('sheet')) return 'sheet_metal_folder'
  if (category === 'metal folder' || category.includes('metal folding'))
    return 'metal_folding_machine'
  if (category.includes('custom')) return 'custom_solution'
  return 'general_inquiry'
}

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Submission failed. Please try again.'
}

export default function Contact() {
  const location = useLocation()
  const initialInterest = useMemo(() => {
    const params = new URLSearchParams(location.search)
    const productParam = params.get('product')
    return productParam ? productIdToInterest(productParam) : 'general_inquiry'
  }, [location.search])

  const [values, setValues] = useState({
    ...initialValues,
    product_interest: initialInterest,
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  useEffect(() => {
    setValues((v) => ({ ...v, product_interest: initialInterest }))
  }, [initialInterest])

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim()) return 'Please enter your email address.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email address.'
    if (!v.message.trim()) return 'Please tell us about your project.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate(values)
    if (validationError) {
      setError(validationError)
      return
    }
    setStatus('submitting')

    try {
      const { data: response, error: insertError } = await client
        .from('ContactInquiry')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            country: values.country,
            product_interest: values.product_interest,
            message: values.message,
            status: 'new',
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        throw new Error(getErrorMessage(response, insertError))
      }

      setStatus('success')
      setValues({ ...initialValues, product_interest: initialInterest })
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-graphite-900 text-bone-50 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p className="eyebrow eyebrow-light">Get in Touch</p>
          <h1 className="mt-4 font-serif font-light text-5xl md:text-7xl leading-[1.05] max-w-4xl">
            Let's discuss<br />the folds you need.
          </h1>
          <div className="hairline-brass mt-8" />
          <p className="mt-8 max-w-2xl text-steel-300 leading-relaxed">
            Tell us about your sheet sizes, throughput, and the shapes you fold.
            We will reply within one business day with a recommendation and a
            transparent quotation.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-bone-50 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid gap-14 lg:grid-cols-5">
          {/* Info */}
          <aside className="lg:col-span-2 space-y-10">
            <div>
              <p className="eyebrow">Direct lines</p>
              <h2 className="mt-4 font-serif font-light text-3xl md:text-4xl text-graphite-900 leading-tight">
                Real people, ready to help.
              </h2>
              <div className="hairline-brass mt-5" />
            </div>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-brass-600" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-steel-500">
                    Email
                  </div>
                  <a
                    href="mailto:hello@artitect-machinery.com"
                    className="mt-1 block font-serif text-xl text-graphite-900 hover:text-brass-600 transition-colors"
                  >
                    hello@artitect-machinery.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-brass-600" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-steel-500">
                    Phone
                  </div>
                  <a
                    href="tel:+14155550142"
                    className="mt-1 block font-serif text-xl text-graphite-900 hover:text-brass-600 transition-colors"
                  >
                    +1 (415) 555-0142
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-brass-600" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-steel-500">
                    Workshop & Showroom
                  </div>
                  <div className="mt-1 font-serif text-xl text-graphite-900">
                    Via Industriale 18<br />25030 Brescia, Italy
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="w-5 h-5 mt-1 text-brass-600" strokeWidth={1.5} />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-steel-500">
                    Office Hours
                  </div>
                  <div className="mt-1 font-serif text-xl text-graphite-900">
                    Mon – Fri · 08:00 – 18:00 CET
                  </div>
                </div>
              </li>
            </ul>
          </aside>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="bg-white border border-bone-200 p-8 md:p-12"
              noValidate
            >
              <div className="grid gap-6 md:grid-cols-2">
                <Field
                  label="Full Name *"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  required
                  placeholder="Your name"
                />
                <Field
                  label="Email *"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={onChange}
                  required
                  placeholder="you@company.com"
                />
                <Field
                  label="Company"
                  name="company"
                  value={values.company}
                  onChange={onChange}
                  placeholder="Workshop or company name"
                />
                <Field
                  label="Phone"
                  name="phone"
                  value={values.phone}
                  onChange={onChange}
                  placeholder="+1 555 123 4567"
                />
                <Field
                  label="Country"
                  name="country"
                  value={values.country}
                  onChange={onChange}
                  placeholder="Where will the machine ship?"
                />

                <div className="flex flex-col">
                  <label
                    htmlFor="product_interest"
                    className="text-[11px] uppercase tracking-[0.22em] text-steel-500 mb-2"
                  >
                    Product Interest
                  </label>
                  <select
                    id="product_interest"
                    name="product_interest"
                    value={values.product_interest}
                    onChange={onChange}
                    className="bg-bone-50 border border-bone-200 focus:border-brass-500 focus:outline-none px-4 py-3 text-graphite-900"
                  >
                    {PRODUCT_INTEREST_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-6 flex flex-col">
                <label
                  htmlFor="message"
                  className="text-[11px] uppercase tracking-[0.22em] text-steel-500 mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={onChange}
                  required
                  placeholder="Tell us about your sheet sizes, materials, throughput, and the shapes you fold."
                  className="bg-bone-50 border border-bone-200 focus:border-brass-500 focus:outline-none px-4 py-3 text-graphite-900 placeholder:text-steel-500"
                />
              </div>

              <div className="mt-8 flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center justify-center gap-3 bg-brass-500 hover:bg-brass-600 text-graphite-950 px-8 py-4 text-xs uppercase tracking-[0.22em] font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Sending…' : 'Send Inquiry'}
                  <Send className="w-4 h-4" strokeWidth={1.5} />
                </button>

                {status === 'success' && (
                  <p
                    role="status"
                    className="text-sm text-graphite-900 bg-brass-300/30 border border-brass-500 px-4 py-3"
                  >
                    Thank you. Your inquiry has been received — we will reply
                    within one business day.
                  </p>
                )}
                {status === 'error' && !!error && (
                  <p
                    role="alert"
                    className="text-sm text-graphite-900 bg-bone-100 border border-graphite-900 px-4 py-3"
                  >
                    {error}
                  </p>
                )}
                {status !== 'error' && !!error && (
                  <p
                    role="alert"
                    className="text-sm text-graphite-900 bg-bone-100 border border-graphite-900 px-4 py-3"
                  >
                    {error}
                  </p>
                )}

                <p className="text-xs text-steel-500">
                  By submitting this form, you agree to be contacted by ARTITECT
                  Machinery regarding your inquiry.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

function Field({ label, name, type = 'text', value, onChange, required, placeholder }) {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={name}
        className="text-[11px] uppercase tracking-[0.22em] text-steel-500 mb-2"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="bg-bone-50 border border-bone-200 focus:border-brass-500 focus:outline-none px-4 py-3 text-graphite-900 placeholder:text-steel-500"
      />
    </div>
  )
}
