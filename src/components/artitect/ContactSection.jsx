import React from 'react'
import { Mail, MessageSquareText, PhoneCall } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="bg-artitect-ivory px-5 py-24 text-artitect-ink sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-artitect-ink text-white shadow-elegant lg:grid lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[420px] p-8 sm:p-12">
          <div
            className="absolute inset-0 opacity-45"
            data-strk-bg-id="artitect-contact-bg-f03d9a"
            data-strk-bg="[contact-copy] [contact-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="1000"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-artitect-ink via-artitect-ink/88 to-artitect-graphite/58" />
          <div className="relative flex min-h-[340px] flex-col justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-artitect-brass">Request a quote</p>
              <h2 id="contact-title" className="mt-4 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Find the right folding machine for your production.
              </h2>
              <p id="contact-copy" className="mt-6 max-w-xl text-lg leading-8 text-white/80">
                Tell us what you fold, your material range, and your production goals. ARTITECT MACHINERY will help you select the right double folding machine or sheet metal folder.
              </p>
            </div>
            <div className="mt-10 grid gap-4 text-sm text-white/80 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <PhoneCall className="h-5 w-5 text-artitect-brass" aria-hidden="true" />
                Fast reply
              </span>
              <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <Mail className="h-5 w-5 text-artitect-brass" aria-hidden="true" />
                Quote support
              </span>
              <span className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
                <MessageSquareText className="h-5 w-5 text-artitect-brass" aria-hidden="true" />
                Clear advice
              </span>
            </div>
          </div>
        </div>

        <div className="bg-artitect-panel p-8 text-artitect-ink sm:p-12">
          <form className="grid gap-5" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-artitect-ink">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-artitect-line bg-white px-4 py-4 text-artitect-ink outline-none transition placeholder:text-artitect-steel focus:border-artitect-brass focus:ring-4 focus:ring-artitect-brass/20" />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-artitect-ink">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-artitect-line bg-white px-4 py-4 text-artitect-ink outline-none transition placeholder:text-artitect-steel focus:border-artitect-brass focus:ring-4 focus:ring-artitect-brass/20" />
            </div>
            <div>
              <label htmlFor="product" className="text-sm font-semibold text-artitect-ink">Product interest</label>
              <select id="product" name="product" className="mt-2 w-full rounded-2xl border border-artitect-line bg-white px-4 py-4 text-artitect-ink outline-none transition focus:border-artitect-brass focus:ring-4 focus:ring-artitect-brass/20">
                <option>Double folding machine</option>
                <option>Double folder</option>
                <option>Sheet metal folder</option>
                <option>Metal folding machine</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-artitect-ink">Project details</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us your material thickness, folding length, and production needs." className="mt-2 w-full resize-none rounded-2xl border border-artitect-line bg-white px-4 py-4 text-artitect-ink outline-none transition placeholder:text-artitect-steel focus:border-artitect-brass focus:ring-4 focus:ring-artitect-brass/20" />
            </div>
            <button type="submit" className="rounded-full bg-artitect-brass px-7 py-4 text-base font-bold text-artitect-ink shadow-soft transition hover:bg-artitect-brass-dark hover:text-white">
              Send Inquiry
            </button>
            <p className="text-center text-sm leading-6 text-artitect-steel">
              This demo form is ready for connection to your preferred email or CRM workflow.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
