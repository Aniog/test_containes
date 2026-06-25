import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HomeCTA = () => {
  return (
    <section className="bg-ink text-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28 grid gap-12 md:grid-cols-12 items-center">
        <div className="md:col-span-7">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-12 bg-accent" />
            <span className="text-xs uppercase tracking-[0.3em] text-accent">
              Begin a conversation
            </span>
          </div>
          <h2 className="font-serif font-light text-4xl md:text-6xl tracking-tight">
            Tell us about your part.
            <br />
            <span className="italic text-accent">We'll design the machine.</span>
          </h2>
          <p className="mt-8 max-w-xl text-mist leading-relaxed">
            Every ARTITECT folder is configured to a customer's working length, sheet
            thickness, and production rhythm. Send us a drawing or a sample — we'll come
            back with a recommendation, a quote, and an honest delivery date.
          </p>
        </div>
        <div className="md:col-span-5 md:justify-self-end w-full md:w-auto">
          <Link
            to="/contact"
            className="inline-flex items-center justify-between gap-6 w-full md:w-auto bg-paper text-ink px-8 py-6 hover:bg-accent hover:text-ink transition-colors group"
          >
            <span>
              <span className="block text-[10px] uppercase tracking-[0.3em] text-graphite group-hover:text-ink mb-1">
                Step 01
              </span>
              <span className="block font-serif text-2xl">Request a quote</span>
            </span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA
