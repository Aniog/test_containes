import { useState } from 'react'
import { toast } from 'sonner'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address')
      return
    }
    toast.success('Welcome to Velmora — your 10% off code is on the way!')
    setEmail('')
  }

  return (
    <section className="bg-velmora-accent py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.25em] text-velmora-base/80">
          Join the Inner Circle
        </p>
        <h2 className="font-serif text-3xl font-medium text-velmora-base md:text-4xl lg:text-5xl">
          10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-velmora-base/80">
          Be the first to know about new drops, styling notes, and member-only moments.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border-b-2 border-velmora-base/30 bg-transparent px-4 py-3 font-sans text-sm text-velmora-base placeholder:text-velmora-base/50 focus:border-velmora-base focus:outline-none sm:w-80"
          />
          <button
            type="submit"
            className="bg-velmora-base px-8 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-stone-800"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}
