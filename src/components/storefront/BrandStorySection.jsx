import { Link } from 'react-router-dom'

const BrandStorySection = () => {
  return (
    <section className="velmora-shell py-16 sm:py-20">
      <div className="grid overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-card shadow-velmora lg:grid-cols-[1.1fr_0.9fr]">
        <div className="min-h-[420px]" 
          data-strk-bg-id="brand-story-bg-a72e18"
          data-strk-bg="[brand-story-copy] [brand-story-title]"
          data-strk-bg-ratio="4x3"
          data-strk-bg-width="1200"
        />
        <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
          <p className="text-xs uppercase tracking-luxe text-velmora-gold">Velmora philosophy</p>
          <h2 id="brand-story-title" className="mt-5 font-display text-5xl text-velmora-ink">
            Modern keepsakes, thoughtfully made.
          </h2>
          <p id="brand-story-copy" className="mt-5 max-w-xl text-base leading-7 text-velmora-smoke">
            Velmora was created for women who want jewelry that feels polished, warm,
            and beautifully wearable. Each piece balances softness and structure so it
            slips easily into daily rituals, special gifting, and the moments in between.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex items-center text-sm uppercase tracking-widest text-velmora-ink transition duration-300 hover:text-velmora-gold"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection
