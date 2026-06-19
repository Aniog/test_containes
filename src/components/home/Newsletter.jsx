import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 md:py-24 bg-[#2D2A24]">
      <div className="max-w-lg mx-auto px-5 text-center">
        <p className="font-sans text-[11px] tracking-[0.12em] uppercase text-[#C69C6D] mb-4">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-3">
          Get 10% Off<br />Your First Order
        </h2>
        <p className="font-sans text-sm text-[#8C867C] mb-8">
          Be the first to know about new collections, exclusive drops, and early access.
        </p>

        {submitted ? (
          <p className="font-sans text-sm text-[#E8D5B7]">
            Thank you! Check your inbox for your welcome code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-[#8C867C] text-white placeholder:text-[#8C867C] px-4 py-3 font-sans text-sm outline-none focus:border-[#C69C6D] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#C69C6D] text-white px-6 py-3 font-sans text-sm tracking-[0.08em] uppercase hover:bg-[#A67C4E] transition-colors flex items-center gap-1"
            >
              <ArrowRight size={16} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}