import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const HomeCTA = () => {
  return (
    <section className="bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="border border-hairline bg-cloud p-10 md:p-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <div className="flex items-center gap-4 mb-5">
              <span className="h-px w-12 bg-accent" />
              <p className="text-xs uppercase tracking-[0.35em] text-accent">Speak with engineering</p>
            </div>
            <h2 className="font-serif font-light text-3xl md:text-5xl leading-tight text-graphite">
              Tell us what you fold —<br />
              we'll tell you which Artitect to choose.
            </h2>
            <p className="mt-5 text-muted-ink leading-relaxed max-w-2xl">
              Send us your typical sheet sizes, material grades and daily output.
              You'll receive a tailored machine proposal within two working days.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 bg-graphite text-bone px-7 py-4 text-sm uppercase tracking-[0.2em] rounded-sm hover:bg-steel transition-colors"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeCTA
