import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section className="bg-rose py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <p className="text-xs uppercase tracking-[0.25em] text-stone">
          Join the List
        </p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
          For 10% Off Your First Order
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-stone">
          Be the first to see new arrivals, styling notes, and members-only
          offers — delivered gently to your inbox.
        </p>

        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 border-b border-ink bg-transparent px-0 py-3 text-sm text-ink placeholder:text-stone focus:border-gold focus:outline-none"
          />
          <Button variant="primary" type="submit">
            Subscribe
          </Button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-ink">
            Welcome. Check your inbox for your welcome gift.
          </p>
        )}
      </div>
    </section>
  )
}
