import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velmora-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-velmora-text overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-9x8y7z"
              data-strk-img="[brand-story-title] [brand-story-body]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:py-8">
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-velmora-muted mb-4">
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-text tracking-wide leading-tight"
            >
              Quiet Luxury, Made to Last
            </h2>
            <div
              id="brand-story-body"
              className="mt-6 space-y-4 text-velmora-muted leading-relaxed"
            >
              <p>
                Velmora was born from a simple belief: jewelry should feel like a
                whisper, not a shout. Each piece is designed in-house and finished
                in 18k gold plate, made to move with you from morning coffee to
                midnight toasts.
              </p>
              <p>
                We source responsibly, design intentionally, and craft every piece
                to be treasured—by you, or by someone you love.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block mt-8 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-velmora-accent hover:text-velmora-accent-hover transition-colors border-b border-velmora-accent pb-1"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
