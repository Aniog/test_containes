import React from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

const NewsletterSection = () => (
  <section id="journal" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
    <div className="overflow-hidden rounded-[2.5rem] border border-velmora-line bg-velmora-accent px-6 py-10 text-velmora-accent-foreground shadow-soft sm:px-10 lg:px-14 lg:py-14">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-velmora-accent-foreground/70">Journal & Offers</p>
          <h2 className="mt-4 text-4xl leading-tight text-velmora-accent-foreground sm:text-5xl">
            Join for 10% off your first order
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-8 text-velmora-accent-foreground/80 sm:text-base">
            Receive editorial styling notes, gifting edits, and first access to limited releases.
          </p>
        </div>

        <form
          className="grid gap-3 sm:grid-cols-[1fr_auto]"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Email address"
            className="h-14 rounded-full border border-velmora-accent-foreground/15 bg-white/70 px-5 text-sm text-velmora-accent-foreground outline-none placeholder:text-velmora-accent-foreground/60 focus:border-velmora-accent-foreground/40"
          />
          <Button variant="secondary" className="h-14 border-velmora-accent-foreground/20 bg-velmora-ink text-velmora-ivory hover:border-velmora-ink hover:bg-velmora-accent-foreground hover:text-velmora-ivory">
            Join Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  </section>
)

export default NewsletterSection
