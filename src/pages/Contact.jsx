import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const productOptions = [
  'Double Folding Machine',
  'Double Folder',
  'Sheet Metal Folder',
  'Sheet Metal Folding Machine',
  'Metal Folder',
  'Metal Folding Machine',
  'Other / Not Sure',
]

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    product_interest: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required'
    if (!v.email.trim()) return 'Email is required'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Please enter a valid email'
    if (!v.message.trim()) return 'Message is required'
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
      const { data: response, error: submitError } = await client
        .from('ContactFormResponse')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            phone: values.phone,
            company: values.company,
            product_interest: values.product_interest,
            message: values.message,
          },
        })
        .select()
        .single()

      if (submitError || response?.success === false) {
        const messages = Array.isArray(response?.errors) ? response.errors.join(', ') : submitError?.message || 'Submission failed. Please try again later.'
        throw new Error(messages)
      }

      setStatus('success')
      setValues({
        name: '',
        email: '',
        phone: '',
        company: '',
        product_interest: '',
        message: '',
      })
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      <section className="bg-primary py-20 md:py-28">
        <div className="container-main">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Get in Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground-inverse mb-4">
            Contact Us
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Have a question about our machines? Need a quote or technical guidance?
            Fill out the form below and our team will respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-xl border border-border p-6 md:p-10">
                <h2 className="text-xl font-bold mb-6">Send an Inquiry</h2>
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className="text-lg font-bold mb-2">Thank you!</h3>
                    <p className="text-muted text-sm max-w-md">
                      Your inquiry has been received. A member of our team will reach
                      out within one business day.
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-6 text-accent text-sm font-semibold hover:text-accent-hover transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                          Full Name <span className="text-accent">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={values.name}
                          onChange={onChange}
                          placeholder="John Doe"
                          className="w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                          Email <span className="text-accent">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={onChange}
                          placeholder="john@company.com"
                          className="w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={values.phone}
                          onChange={onChange}
                          placeholder="+1 (800) 555-0199"
                          className="w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1.5">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={values.company}
                          onChange={onChange}
                          placeholder="Acme Fabrication"
                          className="w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="product_interest" className="block text-sm font-medium mb-1.5">
                        Product Interest
                      </label>
                      <select
                        id="product_interest"
                        name="product_interest"
                        value={values.product_interest}
                        onChange={onChange}
                        className="w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                      >
                        <option value="">Select a product</option>
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={values.message}
                        onChange={onChange}
                        placeholder="Tell us about your project, required specs, or questions..."
                        className="w-full rounded-md border border-border bg-white px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent resize-y"
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600" role="alert">
                        {error}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover disabled:opacity-60 text-white font-medium px-7 py-3 rounded-md transition-colors"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Inquiry
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-muted text-sm leading-relaxed">
                      123 Industrial Parkway, Suite 400<br />
                      Manufacturing District, CA 90210
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0" />
                    <a
                      href="tel:+18005550199"
                      className="text-muted text-sm hover:text-accent transition-colors"
                    >
                      +1 (800) 555-0199
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-accent shrink-0" />
                    <a
                      href="mailto:sales@artitectmachinery.com"
                      className="text-muted text-sm hover:text-accent transition-colors"
                    >
                      sales@artitectmachinery.com
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-surface rounded-xl border border-border p-6">
                <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-3">
                  Business Hours
                </h4>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="font-medium text-foreground">8:00 – 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-foreground">9:00 – 14:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
