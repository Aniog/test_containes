import React from 'react'

export default function Newsletter() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-velmora-charcoal px-8 sm:px-14 py-12 sm:py-16">
          <h2 className="font-serif text-2xl sm:text-3xl text-velmora-ivory mb-3">
            Join for 10% off your first order
          </h2>
          <p className="text-sm text-velmora-mist mb-8 max-w-md mx-auto">
            Exclusive early access to new collections, styling tips, and member-only offers.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-velmora-graphite border border-velmora-stone/30 text-velmora-ivory placeholder:text-velmora-mist px-5 py-3.5 text-sm focus:outline-none focus:border-velmora-gold transition-colors"
            />
            <button
              type="submit"
              className="bg-velmora-gold text-white px-8 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
