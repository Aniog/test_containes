import React, { useState } from "react"

const Newsletter = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thanks for subscribing! Check your inbox for 10% off.")
    setEmail("")
  }

  return (
    <section className="py-20 md:py-28 bg-stone-900 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl tracking-wide">Join the Velmora World</h2>
        <p className="mt-4 text-stone-300 max-w-md mx-auto">
          Sign up for exclusive access to new releases, styling tips, and 10% off your first order.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-stone-400 text-sm focus:outline-none focus:border-white/40 transition-colors"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-white text-stone-900 text-xs uppercase tracking-[0.15em] hover:bg-stone-100 transition-colors"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-xs text-stone-500">By subscribing, you agree to our Privacy Policy and consent to receive updates.</p>
      </div>
    </section>
  )
}

export default Newsletter
