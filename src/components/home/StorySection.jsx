import { Link } from 'react-router-dom'

const StorySection = () => (
  <section id="story" className="bg-velmora-ivory px-4 py-20 text-velmora-ink sm:px-6 lg:px-8 lg:py-28">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
      <div className="relative overflow-hidden rounded-[2rem] bg-velmora-blush shadow-soft">
        <img
          alt="Velmora jewelry atelier with warm gold pieces"
          className="aspect-[4/5] h-full w-full object-cover"
          data-strk-img-id="story-atelier-gold-jewelry-vm90a"
          data-strk-img="[story-copy] [story-title]"
          data-strk-img-ratio="4x3"
          data-strk-img-width="1000"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
      </div>
      <div className="lg:pl-12">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Our point of view</p>
        <h2 id="story-title" className="mt-4 font-serif text-5xl leading-tight text-velmora-ink sm:text-6xl">
          Jewelry for the rituals you keep close.
        </h2>
        <p id="story-copy" className="mt-6 text-base leading-8 text-velmora-taupe">
          Velmora was created for women who want the feeling of fine jewelry without the preciousness of saving it for rare occasions. We work in warm gold finishes, considered silhouettes, and skin-friendly materials so every piece feels intimate, wearable, and quietly memorable.
        </p>
        <Link to="/shop" className="mt-8 inline-flex border-b border-velmora-gold pb-2 text-xs font-bold uppercase tracking-[0.3em] text-velmora-ink transition hover:text-velmora-gold">
          Our Story
        </Link>
      </div>
    </div>
  </section>
)

export default StorySection
