import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useToast } from '@/context/ToastContext'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    toast('Welcome to Velmora — check your inbox for 10% off')
    setEmail('')
  }

  return (
    <section className="bg-gold py-20 md:py-24">
      <div className="mx-auto max-w-content px-6 text-center md:px-10 lg:px-16">
        <p className="text-[11px] uppercase tracking-widest3 text-cream-soft/80">Join Velmora</p>
        <h2 className="mt-3 font-serif text-4xl text-cream-soft md:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-cream-soft/85">
          Be the first to know about new collections, private sales, and styling notes. Sign up
          and we’ll send a little something to your inbox.
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
            placeholder="Your email address"
            className="flex-1 border border-cream-soft/40 bg-transparent px-5 py-3.5 text-sm text-cream-soft placeholder:text-cream-soft/60 focus:border-cream-soft focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-ink px-8 py-3.5 text-[11px] uppercase tracking-widest2 text-cream-soft transition-colors hover:bg-ink-soft"
          >
            Subscribe
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </form>
        <p className="mt-4 text-[11px] text-cream-soft/70">
          By subscribing you agree to our Privacy Policy.
        </p>
      </div>
    </section>
  )
}
