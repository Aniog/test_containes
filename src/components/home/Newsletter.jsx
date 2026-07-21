import { useState } from 'react'
import { Button } from '../ui/Button'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle, submitting, success, error
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    setStatus('submitting')
    setError('')

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-16 lg:py-24 bg-charcoal-900">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Icon */}
        <div className="w-12 h-12 mx-auto mb-6 border border-gold-500 rounded-full flex items-center justify-center">
          <span className="text-gold-500 text-xl">✦</span>
        </div>

        <h2 className="font-serif text-2xl md:text-3xl text-cream-50 mb-4">
          Join the Velmora Circle
        </h2>
        <p className="text-warmgray-400 mb-8 max-w-md mx-auto">
          Subscribe for 10% off your first order and be the first to know about new collections, exclusive offers, and styling inspiration.
        </p>

        {status === 'success' ? (
          <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-6 animate-fade-in">
            <p className="text-gold-400 font-medium mb-2">Welcome to the Velmora Circle!</p>
            <p className="text-warmgray-400 text-sm">
              Check your inbox for your 10% discount code.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setError('')
                }}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-charcoal-800 border border-warmgray-700 rounded-lg text-cream-50 placeholder:text-warmgray-500 focus:outline-none focus:border-gold-500 transition-colors"
                aria-label="Email address"
                disabled={status === 'submitting'}
              />
              <Button
                type="submit"
                variant="accent"
                disabled={status === 'submitting'}
                loading={status === 'submitting'}
              >
                {status === 'submitting' ? 'Joining...' : 'Get 10% Off'}
              </Button>
            </div>
            
            {error && (
              <p className="text-red-400 text-sm">{error}</p>
            )}
            
            <p className="text-xs text-warmgray-600">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
