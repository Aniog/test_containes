import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HomeCTA = () => {
  return (
    <section className="bg-amber-500 text-neutral-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-900/70 mb-5">
              Talk to an engineer
            </p>
            <h2 className="font-serif font-light text-4xl md:text-5xl tracking-tight text-neutral-950">
              Tell us what you need to fold. We&rsquo;ll specify a machine.
            </h2>
            <p className="mt-6 text-lg text-neutral-900/80 max-w-2xl leading-relaxed">
              Share your material, thickness, and bend length. Within one business day you&rsquo;ll have a
              tailored proposal from one of our application engineers &mdash; not a sales script.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-neutral-950 text-neutral-50 px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-neutral-800 transition"
            >
              Start an inquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA
