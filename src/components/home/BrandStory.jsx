import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image placeholder */}
        <div className="aspect-[4/5] bg-velvet-200 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cream-200 via-velvet-300 to-velvet-400" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-serif italic text-velvet-700/40 text-xl">
              Our atelier
            </p>
          </div>
        </div>

        {/* Text */}
        <div className="max-w-md md:ml-auto">
          <p className="font-sans text-[10px] tracking-[0.35em] text-velvet-500 uppercase mb-4">
            The Velmora Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-velvet-950 font-medium tracking-tight leading-[1.15] mb-6">
            Jewelry that becomes<br />part of your story
          </h2>
          <div className="hairline-divider w-16 mb-6" />
          <p className="font-sans text-sm text-velvet-600 leading-relaxed mb-8">
            We believe in the quiet confidence that comes from wearing something
            truly beautiful. Each piece is designed in our Paris atelier and
            crafted with 18K gold plating — because luxury shouldn&apos;t whisper, but
            it should never shout.
          </p>
          <Link
            to="#"
            className="inline-flex items-center gap-2 font-sans text-xs tracking-[0.2em] text-velvet-900 uppercase border-b border-velvet-400 pb-1.5 hover:border-velvet-950 transition-colors"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
