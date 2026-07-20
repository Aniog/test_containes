import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-velmora-light py-16 md:py-24">
      <div className="container-velmora">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-velmora-gold px-6 py-14 text-center text-white md:px-16 md:py-20"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl">
            Join for 10% Off
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm font-light text-white/90 md:text-base">
            Subscribe for exclusive early access, styling notes, and 10% off your first order.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 border border-white/30 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 border border-white bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-velmora-gold transition hover:bg-white/90"
            >
              Subscribe
              <ArrowRight size={14} strokeWidth={1.5} />
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-white">
              Thank you. Your code is on its way.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}
