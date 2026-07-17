import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '@/components/shared/SectionHeading'

function StorySection({ stats }) {
  return (
    <section id="story" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="overflow-hidden rounded-luxe border border-pearl bg-velvet shadow-card">
          <img
            alt="Velmora atelier story"
            className="h-full min-h-[420px] w-full object-cover"
            data-strk-img-id="story-image-bf81d2"
            data-strk-img="[story-image-desc] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
          <span id="story-image-desc" className="sr-only">
            Warm editorial photograph of gold jewelry styled in an intimate atelier setting
          </span>
        </div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="Brand story"
            title="Jewelry that feels intimate, polished, and endlessly wearable"
            description="Velmora was created for the woman who wants a refined finishing touch without saving it for special occasions. Every piece is designed to flatter warm skin tones, layer with ease, and arrive beautifully gift-ready."
          />

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-luxe border border-pearl bg-white/70 p-5 shadow-soft">
                <p className="text-xs uppercase tracking-luxe text-smoke">{stat.label}</p>
                <p className="mt-3 font-serif text-3xl text-velvet">{stat.value}</p>
              </div>
            ))}
          </div>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-luxe text-velvet transition hover:text-champagne"
          >
            Our Story
            <ArrowRight className="h-4 w-4" />
          </Link>
          <span id="story-title" className="sr-only">Velmora Fine Jewelry Story</span>
        </div>
      </div>
    </section>
  )
}

export default StorySection
