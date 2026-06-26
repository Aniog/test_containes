import { useState } from 'react'
import { Container } from '@/components/ui/Section'
import { Button } from '@/components/ui/Button'
import { client, getErrorMessage } from '@/api/data-client'
import { products } from '@/data/products'
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from 'lucide-react'

const initial = {
  name: '',
  email: '',
  phone: '',
  company: '',
  product_interest: '',
  message: '',
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Please enter your name.'
    if (!v.email.trim()) return 'Please enter your email.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email.'
    if (!v.message.trim()) return 'Please enter a message.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const err = validate(values)
    if (err) {
      setError(err)
      return
    }
    setStatus('submitting')
    try {
      const { data: response, error: createError } = await client
        .from('InquiryRequest')
        .insert({
          data: {
            name: values.name.trim(),
            email: values.email.trim(),
            phone: values.phone.trim(),
            company: values.company.trim(),
            product_interest: values.product_interest,
            message: values.message.trim(),
            status: 'new',
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        throw new Error(getErrorMessage(response, createError))
      }

      setStatus('success')
      setValues(initial)
    } catch (err) {
      console.error('Inquiry submission failed:', err)
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  const inputClass =
    'w-full rounded-lg border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-copper focus:border-copper transition'
  const labelClass = 'block text-sm font-medium text-ink mb-1.5'

  return (
    <>
      <section className="bg-ink text-ink-fg py-16 md:py-20">
        <Container>
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-copper" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-copper">
              Contact Us
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
            Request a Quote
          </h1>
          <p className="text-lg text-ink-muted max-w-2xl">
            Tell us about your application and our engineers will recommend the
            right folding machine for your shop.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            {/* Form */}
            <div className="lg:col-span-2 bg-white border border-line rounded-xl p-6 md:p-8">
              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-12">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-copper/10 text-copper mb-5">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h2 className="text-2xl font-bold text-ink mb-2">
                    Thank you!
                  </h2>
                  <p className="text-muted max-w-md mb-6">
                    Your inquiry has been received. One of our engineers will
                    get back to you within one business day.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setStatus('idle')}
                  >
                    Send another inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full name <span className="text-copper">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="Jane Doe"
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email <span className="text-copper">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="jane@company.com"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="+1 (555) 000-0000"
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={onChange}
                        className={inputClass}
                        placeholder="Acme Fabrication"
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_interest" className={labelClass}>
                      Product of interest
                    </label>
                    <select
                      id="product_interest"
                      name="product_interest"
                      value={values.product_interest}
                      onChange={onChange}
                      className={inputClass}
                      disabled={status === 'submitting'}
                    >
                      <option value="">Select a product (optional)</option>
                      {products.map((p) => (
                        <option key={p.slug} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message <span className="text-copper">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={onChange}
                      className={inputClass}
                      placeholder="Tell us about your materials, part geometries, and production volume..."
                      disabled={status === 'submitting'}
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3"
                    >
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    variant="accent"
                    disabled={status === 'submitting'}
                    className="w-full sm:w-auto"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Inquiry
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <aside className="space-y-6">
              <div className="bg-steel text-white rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4">Get in touch</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-copper shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white/70 text-xs uppercase tracking-wide">
                        Phone
                      </div>
                      <div>+1 (800) 555-0142</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-copper shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white/70 text-xs uppercase tracking-wide">
                        Email
                      </div>
                      <div>sales@artitectmachinery.com</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-copper shrink-0 mt-0.5" />
                    <div>
                      <div className="text-white/70 text-xs uppercase tracking-wide">
                        Address
                      </div>
                      <div>
                        1450 Industrial Parkway
                        <br />
                        Cleveland, OH 44114
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-line rounded-xl p-6">
                <h3 className="text-base font-bold text-ink mb-2">
                  Sales hours
                </h3>
                <p className="text-sm text-muted">
                  Monday – Friday
                  <br />
                  8:00 AM – 6:00 PM (ET)
                </p>
                <p className="text-sm text-muted mt-3">
                  Service &amp; support available 24/7 for existing customers.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  )
}
