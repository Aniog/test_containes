import { useState } from 'react'
import { toast } from 'sonner'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) {
      toast.error('Please enter your email address')
      return
    }
    toast.success('Welcome to Velmora. Your 10% code is on the way.')
    setEmail('')
  }

  return (
    <section className="page-shell pb-16 md:pb-24">
      <div className="rounded-[2rem] bg-velmora-espresso bg-velmora-glow px-6 py-12 text-velmora-cream shadow-velmora md:px-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-goldSoft">Newsletter</p>
            <h2 className="mt-5 font-display text-5xl leading-none text-velmora-cream md:text-6xl">
              Join for 10% off your first order.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-velmora-cream/80">
              New arrivals, refined gift edits, and styling notes delivered with restraint.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="border-velmora-cream/20 bg-velmora-cream text-velmora-ink"
            />
            <Button type="submit" className="bg-velmora-gold text-velmora-cream hover:bg-velmora-cream hover:text-velmora-ink">
              Join
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
