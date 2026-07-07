import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="bg-white/50 py-16 md:py-24">
      <div className="container-shell grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="overflow-hidden rounded-[2.5rem] bg-velmora-noir shadow-velvet">
          <img
            alt="Velmora brand story"
            className="h-full min-h-[22rem] w-full object-cover"
            data-strk-img-id="velmora-brand-story-image"
            data-strk-img="[story-copy] [story-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="1200"
            src="https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1644893748093-fc1aff047db9"
          />
        </div>
        <div className="max-w-xl space-y-6">
          <p className="section-eyebrow">Our story</p>
          <h2 id="story-title" className="section-title">
            Jewelry that feels heirloom-inspired, yet easy enough for every day
          </h2>
          <p id="story-copy" className="text-base leading-8 text-velmora-espresso/76 md:text-lg">
            Velmora was created for women who want refined polish without waiting for special occasions. We obsess over warm gold finishes, elegant silhouettes, and gift-worthy presentation that still feels personal.
          </p>
          <Link to="/about" className="premium-button-outline">
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
