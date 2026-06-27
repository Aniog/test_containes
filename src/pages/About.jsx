import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="min-h-screen bg-velmora-ivory pt-28">
      <div className="mx-auto max-w-3xl px-5 py-16 text-center md:px-8 md:py-24">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-velmora-gold">
          Our Story
        </p>
        <h1 className="font-serif text-4xl font-light leading-tight tracking-wide text-velmora-espresso md:text-5xl">
          Designed with intention,
          <br />
          <span className="font-medium italic">worn with confidence</span>
        </h1>
        <div className="mt-10 space-y-6 text-left text-sm leading-relaxed text-velmora-warm-gray md:text-base">
          <p>
            Velmora was founded with a simple belief: that fine jewelry should not be reserved for
            special occasions alone. Every piece in our collection is designed to elevate the
            everyday — to make you feel polished, powerful, and unapologetically yourself.
          </p>
          <p>
            We partner with master artisans who specialize in 18K gold plating and hypoallergenic
            materials, ensuring each design is as enduring as it is beautiful. From initial sketch
            to final finishing, our process honors the tradition of fine jewelry while embracing
            modern wearability and accessible pricing.
          </p>
          <p>
            Our collections are inspired by the interplay of light and form — the way gold catches
            candlelight, the gentle curve of an ear cuff, the delicate bloom of a crystal flower.
            We create pieces that become part of your story, worn and treasured for years to come.
          </p>
        </div>
        <Link
          to="/shop"
          className="mt-10 inline-flex items-center rounded-full bg-velmora-espresso px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-velmora-charcoal"
        >
          Explore the Collection
        </Link>
      </div>
    </main>
  )
}
