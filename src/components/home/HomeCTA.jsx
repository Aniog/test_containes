import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const HomeCTA = () => {
  return (
    <section className="bg-ink text-bone py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="h-px w-10 bg-brass" />
          <span className="text-xs tracking-[0.25em] uppercase text-brass">
            Begin a Project
          </span>
          <span className="h-px w-10 bg-brass" />
        </div>
        <h2 className="font-serif font-light text-4xl md:text-6xl leading-tight mb-8">
          Bring us your most
          <br />
          <span className="italic text-brass">demanding bend.</span>
        </h2>
        <p className="text-bone/70 max-w-xl mx-auto leading-relaxed mb-10">
          Whether you&rsquo;re fitting out a single workshop or specifying a production
          line, our engineers will help you choose the right machine — or build one
          to your tolerances.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 bg-brass text-ink px-8 py-4 text-sm tracking-[0.25em] uppercase hover:bg-bone transition-colors"
        >
          Speak with an Engineer
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}

export default HomeCTA
