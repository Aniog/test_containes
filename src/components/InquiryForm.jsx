import { useState } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { submitSourcingInquiry } from '@/api/inquiries'
import { cn } from '@/lib/utils'

const serviceOptions = [
  { value: 'supplier_search', label: 'Supplier Sourcing' },
  { value: 'factory_verification', label: 'Factory Verification' },
  { value: 'sampling', label: 'Sampling' },
  { value: 'quality_inspection', label: 'Quality Inspection' },
  { value: 'production_follow_up', label: 'Production Follow-up' },
  { value: 'shipping_logistics', label: 'Shipping & Logistics' },
  { value: 'private_label', label: 'Private Label / OEM' },
  { value: 'other', label: 'Other' },
]

const initialValues = {
  company: '',
  contact_name: '',
  email: '',
  phone: '',
  country: '',
  product_category: '',
  target_quantity: '',
  target_unit_price: '',
  services_needed: [],
  message: '',
}

export default function InquiryForm({ sourcePage = 'home', variant = 'card' }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const toggleService = (value) => {
    setValues((v) => {
      const exists = v.services_needed.includes(value)
      return {
        ...v,
        services_needed: exists
          ? v.services_needed.filter((s) => s !== value)
          : [...v.services_needed, value],
      }
    })
  }

  const validate = () => {
    if (!values.company.trim()) return 'Please enter your company name.'
    if (!values.contact_name.trim()) return 'Please enter your full name.'
    if (!values.email.trim()) return 'Please enter your business email.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      return 'Please enter a valid email address.'
    }
    if (!values.product_category.trim()) return 'Please describe the product you want to source.'
    if (!values.message.trim()) return 'Please share a short project brief.'
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const msg = validate()
    if (msg) {
      setError(msg)
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      await submitSourcingInquiry({
        ...values,
        source_page: sourcePage,
      })
      setStatus('success')
      setValues(initialValues)
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.')
      setStatus('error')
    }
  }

  const isDark = variant === 'dark'

  return (
    <div
      className={cn(
        'rounded-2xl p-6 md:p-8',
        isDark
          ? 'bg-brand-navy text-white border border-white/10'
          : 'bg-white border border-hairline shadow-card'
      )}
    >
      <div className="flex items-start gap-3 mb-1">
        <span className={cn('badge-soft', isDark && 'bg-white/10 text-white')}>
          Free Quote · No Commitment
        </span>
      </div>
      <h3
        id="inquiry-form-title"
        className={cn(
          'text-2xl md:text-3xl font-bold mt-3',
          isDark ? 'text-white' : 'text-brand-navy'
        )}
      >
        Tell us about your project
      </h3>
      <p
        id="inquiry-form-sub"
        className={cn('mt-2 text-sm md:text-base', isDark ? 'text-white/70' : 'text-ink-soft')}
      >
        Share a few details and our Shenzhen team will reply within 1 business day
        with next steps and a sourcing plan.
      </p>

      {status === 'success' ? (
        <div
          className={cn(
            'mt-6 rounded-xl p-5 flex items-start gap-3',
            isDark ? 'bg-white/10 border border-white/15' : 'bg-status-success/10 border border-status-success/20'
          )}
        >
          <CheckCircle2
            className={cn('w-5 h-5 mt-0.5', isDark ? 'text-white' : 'text-status-success')}
          />
          <div>
            <div
              className={cn(
                'font-semibold',
                isDark ? 'text-white' : 'text-status-success'
              )}
            >
              Inquiry received
            </div>
            <div className={cn('text-sm mt-1', isDark ? 'text-white/80' : 'text-ink-soft')}>
              Thank you. A sourcing manager will email you back within 1 business
              day. For urgent requests, message us on WhatsApp +86 138 0000 0000.
            </div>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className={cn(
                'mt-3 text-sm font-semibold',
                isDark ? 'text-white underline' : 'text-primary hover:text-primary-hover'
              )}
            >
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="company" className={cn('label-base', isDark && 'text-white/85')}>
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              value={values.company}
              onChange={onChange}
              placeholder="Your company or brand"
              className={cn(
                'input-base',
                isDark && 'bg-white/5 border-white/15 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20'
              )}
            />
          </div>
          <div>
            <label htmlFor="contact_name" className={cn('label-base', isDark && 'text-white/85')}>
              Full Name
            </label>
            <input
              id="contact_name"
              name="contact_name"
              type="text"
              value={values.contact_name}
              onChange={onChange}
              placeholder="Your name"
              className={cn(
                'input-base',
                isDark && 'bg-white/5 border-white/15 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20'
              )}
            />
          </div>
          <div>
            <label htmlFor="email" className={cn('label-base', isDark && 'text-white/85')}>
              Business Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={onChange}
              placeholder="[email protected]"
              className={cn(
                'input-base',
                isDark && 'bg-white/5 border-white/15 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20'
              )}
            />
          </div>
          <div>
            <label htmlFor="phone" className={cn('label-base', isDark && 'text-white/85')}>
              Phone / WhatsApp <span className={isDark ? 'text-white/50' : 'text-ink-muted'}>(optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={values.phone}
              onChange={onChange}
              placeholder="+1 555 123 4567"
              className={cn(
                'input-base',
                isDark && 'bg-white/5 border-white/15 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20'
              )}
            />
          </div>
          <div>
            <label htmlFor="country" className={cn('label-base', isDark && 'text-white/85')}>
              Country / Region
            </label>
            <input
              id="country"
              name="country"
              type="text"
              value={values.country}
              onChange={onChange}
              placeholder="United States"
              className={cn(
                'input-base',
                isDark && 'bg-white/5 border-white/15 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20'
              )}
            />
          </div>
          <div>
            <label htmlFor="product_category" className={cn('label-base', isDark && 'text-white/85')}>
              Product to Source
            </label>
            <input
              id="product_category"
              name="product_category"
              type="text"
              value={values.product_category}
              onChange={onChange}
              placeholder="e.g. stainless steel cookware"
              className={cn(
                'input-base',
                isDark && 'bg-white/5 border-white/15 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20'
              )}
            />
          </div>
          <div>
            <label htmlFor="target_quantity" className={cn('label-base', isDark && 'text-white/85')}>
              Estimated Quantity <span className={isDark ? 'text-white/50' : 'text-ink-muted'}>(optional)</span>
            </label>
            <input
              id="target_quantity"
              name="target_quantity"
              type="text"
              value={values.target_quantity}
              onChange={onChange}
              placeholder="500 / 1,000 / 5,000 units"
              className={cn(
                'input-base',
                isDark && 'bg-white/5 border-white/15 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20'
              )}
            />
          </div>
          <div>
            <label htmlFor="target_unit_price" className={cn('label-base', isDark && 'text-white/85')}>
              Target Unit Price <span className={isDark ? 'text-white/50' : 'text-ink-muted'}>(optional)</span>
            </label>
            <input
              id="target_unit_price"
              name="target_unit_price"
              type="text"
              value={values.target_unit_price}
              onChange={onChange}
              placeholder="USD 3.50 – 4.20"
              className={cn(
                'input-base',
                isDark && 'bg-white/5 border-white/15 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20'
              )}
            />
          </div>

          <div className="md:col-span-2">
            <span className={cn('label-base', isDark && 'text-white/85')}>Services Needed</span>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((s) => {
                const active = values.services_needed.includes(s.value)
                return (
                  <button
                    type="button"
                    key={s.value}
                    onClick={() => toggleService(s.value)}
                    className={cn(
                      'rounded-full px-3.5 py-1.5 text-sm font-medium border transition-colors',
                      active
                        ? isDark
                          ? 'bg-white text-brand-navy border-white'
                          : 'bg-primary text-white border-primary'
                        : isDark
                        ? 'bg-transparent text-white/80 border-white/20 hover:border-white/40'
                        : 'bg-white text-ink-soft border-hairline hover:border-hairline-hover'
                    )}
                  >
                    {s.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className={cn('label-base', isDark && 'text-white/85')}>
              Project Brief
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={onChange}
              placeholder="Tell us about specifications, target price, materials, certifications, deadlines, etc."
              className={cn(
                'input-base resize-y',
                isDark && 'bg-white/5 border-white/15 text-white placeholder:text-white/50 focus:border-white focus:ring-white/20'
              )}
            />
          </div>

          {error && status === 'error' && (
            <div
              className={cn(
                'md:col-span-2 rounded-lg p-3 flex items-start gap-2 text-sm',
                isDark ? 'bg-status-danger/20 text-white' : 'bg-status-danger/10 text-status-danger'
              )}
            >
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
            <p className={cn('text-xs', isDark ? 'text-white/60' : 'text-muted-ink')}>
              Your information is used only to reply to this inquiry. We do not
              share it with third parties.
            </p>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={cn(
                'btn-primary min-w-[200px] justify-center',
                isDark && 'bg-white text-brand-navy hover:bg-white/90',
                status === 'submitting' && 'opacity-80 cursor-not-allowed'
              )}
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending…
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
      )}
    </div>
  )
}
