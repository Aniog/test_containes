import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || 'Something went wrong. Please try again.'
}

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return
    if (!/^\S+@\S+\.\S+$/.test(trimmed)) {
      setError('Please enter a valid email address.')
      return
    }

    setError(null)
    setStatus('submitting')

    try {
      const { data: response, error: insertError } = await client
        .from('NewsletterSubscriber')
        .insert({
          data: {
            email: trimmed,
            source: 'homepage',
            status: 'subscribed',
            subscribed_at: new Date().toISOString(),
          },
        })
        .select()
        .single()

      if (insertError || response?.success === false) {
        throw new Error(getErrorMessage(response, insertError))
      }

      setStatus('success')
      setEmail('')
    } catch (err) {
      console.error('Newsletter signup failed:', err)
      setError(err.message || 'Subscription failed. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section className="bg-champagne text-ivory">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-ivory/80 mb-5">
          Join the List
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-light max-w-2xl mx-auto leading-tight">
          Enjoy 10% off your first order
        </h2>
        <p className="mt-4 text-ivory/85 max-w-md mx-auto text-sm md:text-base">
          Be first to know about new collections, private sales, and styling
          notes from the studio.
        </p>

        {status === 'success' ? (
          <p className="mt-9 font-serif text-2xl">
            Welcome to Velmora. Check your inbox.
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mt-9 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              disabled={status === 'submitting'}
              className="flex-1 bg-ivory/15 border border-ivory/40 text-ivory placeholder-ivory/60 px-5 py-4 text-sm focus:outline-none focus:border-ivory transition-colors disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="bg-espresso text-ivory px-7 py-4 text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-ink transition-colors duration-300 disabled:opacity-60"
            >
              {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
              {status !== 'submitting' && <ArrowRight width={14} height={14} />}
            </button>
          </form>
        )}
        {status === 'error' && error && (
          <p role="alert" className="mt-4 text-sm text-ivory/90">
            {error}
          </p>
        )}
        <p className="mt-4 text-[11px] text-ivory/70">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
