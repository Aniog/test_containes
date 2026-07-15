import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button.jsx'
import { useStrkImages } from '@/hooks/useStrkImages.js'

export default function About() {
  const containerRef = useStrkImages([])

  return (
    <div className="bg-velmora-ivory" ref={containerRef}>
      <section className="bg-velmora-obsidian px-5 py-20 text-velmora-ivory sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">About Velmora</p>
            <h1 id="about-title" className="mt-5 font-serif text-6xl leading-none text-velmora-ivory">
              A quieter way to wear gold
            </h1>
            <p id="about-copy" className="mt-6 max-w-xl text-base leading-8 text-velmora-ivory/75">
              Velmora Fine Jewelry exists for women who want demi-fine pieces that feel considered, giftable, and beautiful in the everyday. We design with warmth, restraint, and long-term wearability in mind.
            </p>
            <div className="mt-8">
              <Button as={Link} to="/shop">Discover the collection</Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-luxe-xl shadow-velmora">
            <img
              alt="Velmora editorial portrait"
              className="h-full min-h-120 w-full object-cover"
              data-strk-img="[about-copy] [about-title]"
              data-strk-img-id="about-velmora-portrait-a912ce"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ['Premium finish', 'Gold-plated and vermeil pieces designed to feel polished, never disposable.'],
            ['Gift-ready details', 'Warm presentation, elevated packaging, and silhouettes that feel immediately personal.'],
            ['Everyday ease', 'Lightweight styling pieces intended to move between work, dinners, travel, and celebration.'],
          ].map(([title, copy]) => (
            <article className="rounded-luxe border border-velmora-mist bg-velmora-porcelain p-8 shadow-velmora" key={title}>
              <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">Value</p>
              <h2 className="mt-4 font-serif text-4xl text-velmora-ink">{title}</h2>
              <p className="mt-4 text-sm leading-7 text-velmora-taupe">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
