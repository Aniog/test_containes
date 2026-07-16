import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-velmora-charcoal py-20 md:py-28">
      <div className="max-w-2xl mx-auto px-6 lg:px-10 text-center">
        <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">
          Join the Circle
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
          {submitted ? 'Welcome to Velmora' : 'Join for 10% Off Your First Order'}
        </h2>
        <p className="font-sans text-sm text-velmora-mist mb-8 leading-relaxed">
          {submitted
            ? 'Check your inbox for your welcome gift. We\'re so glad you\'re here.'
            : 'Be the first to know about new collections, exclusive offers, and styling inspiration — delivered to your inbox.'}
        </p>

        {!submitted && (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-1 px-5 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-velmora-mist text-sm font-sans focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  )
}