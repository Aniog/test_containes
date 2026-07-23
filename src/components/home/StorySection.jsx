import { Link } from 'react-router-dom'

export default function StorySection() {
  return (
    <section id="story" className="bg-velmora-pearl py-16 text-velmora-ink md:py-24">
      <div className="velmora-container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden bg-velmora-mist shadow-soft">
          <div
            className="absolute inset-0"
            data-strk-bg-id="velmora-story-bg-91dd2a"
            data-strk-bg="[story-copy] [story-title] [story-kicker]"
            data-strk-bg-ratio="3x4"
            data-strk-bg-width="900"
          />
        </div>
        <div className="mx-auto max-w-xl lg:pl-8">
          <p id="story-kicker" className="eyebrow">Our point of view</p>
          <h2 id="story-title" className="serif-display mt-4 text-5xl text-velmora-ink md:text-7xl">Jewelry for the rituals between occasions.</h2>
          <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-clay">
            Velmora is made for women who want lasting shine without the showroom markup. We design warm, wearable demi-fine pieces with the polish of fine jewelry and the ease of everyday luxury.
          </p>
          <div className="mt-8 border-l border-velmora-gold pl-6 font-serif text-2xl leading-9 text-velmora-ink">
            Gold-toned keepsakes, thoughtfully priced, beautifully finished, and ready to become part of your daily language.
          </div>
          <Link to="/shop" className="btn-secondary mt-9">Our Story</Link>
        </div>
      </div>
    </section>
  )
}
