import React, { useState } from 'react'
import { toast } from 'sonner'
import { ArrowRight } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast.success('Welcome to the Velmora family! Check your email for 10% off.')
    setEmail('')
    setIsSubmitting(false)
  }

  return (
    <section className="py-20 md:py-32 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join for 10% off your first order
          </h2>
          <p className="text-stone-400 mb-8">
            Be the first to know about new collections, exclusive offers, and styling inspiration.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-stone-800 border border-stone-700 text-white placeholder-stone-500 focus:outline-none focus:border-amber-600 transition-colors"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-8 py-4 text-sm tracking-widest uppercase font-medium hover:bg-amber-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <p className="text-stone-500 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
