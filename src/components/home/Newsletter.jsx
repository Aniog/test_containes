import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <section className="py-16 md:py-24 bg-velmora-gold">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            Join for 10% Off
          </h2>
          <p className="mt-4 text-white/85 text-base md:text-lg">
            Subscribe for first access to new collections, styling notes, and
            exclusive offers.
          </p>

          {submitted ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-white">
              <Check size={20} />
              <span className="text-lg font-serif">Thank you for subscribing</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 bg-white/10 border-b-2 border-white/40 text-white placeholder:text-white/60 px-4 py-3 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="bg-velmora-deep text-velmora-cream px-8 py-3 uppercase text-xs tracking-widest-xl font-medium hover:bg-white hover:text-velmora-deep transition-colors flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
