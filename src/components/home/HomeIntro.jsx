import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const HomeIntro = () => {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5">
          <span className="block text-xs tracking-[0.3em] uppercase text-brass mb-5">
            About Artitect
          </span>
          <h2
            id="intro-title"
            className="font-serif font-light text-4xl md:text-5xl text-ink leading-[1.15]"
          >
            Where engineering meets the discipline of craft.
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <p
            id="intro-desc"
            className="text-lg text-steel leading-relaxed"
          >
            For over two decades, Artitect Machinery has refined the art of
            metal folding — building machines for fabricators, architects and
            manufacturers who treat every bend as a deliberate decision.
          </p>
          <p className="text-lg text-steel leading-relaxed">
            Our double folding machines and sheet metal folders are designed in
            partnership with the workshops that use them. Every detail, from
            the cast frame to the back gauge servo, is chosen for the long arc
            of production life — quiet, reliable, and beautifully precise.
          </p>

          <div className="pt-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase text-ink border-b border-ink pb-1 hover:text-brass hover:border-brass transition"
            >
              Our story
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeIntro
