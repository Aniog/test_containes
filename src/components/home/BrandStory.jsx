import { Link } from 'react-router-dom'

const BrandStory = () => (
  <section id="story" className="bg-velmora-ivory px-5 py-16 text-velmora-ink sm:px-8 lg:px-10 lg:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
      <div className="relative min-h-[520px] overflow-hidden bg-velmora-parchment shadow-soft">
        <div
          className="absolute inset-0 bg-cover bg-center"
          data-strk-bg-id="brand-story-bg-c02e71"
          data-strk-bg="[story-copy] [story-title]"
          data-strk-bg-ratio="3x4"
          data-strk-bg-width="1100"
        />
      </div>
      <div className="lg:pl-14">
        <p className="text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-bronze">Our point of view</p>
        <h2 id="story-title" className="mt-4 font-serif text-5xl font-medium leading-tight text-velmora-ink sm:text-6xl">
          Jewelry that feels intimate, not untouchable.
        </h2>
        <div id="story-copy" className="mt-7 space-y-5 text-base leading-8 text-velmora-espresso/75">
          <p>
            Velmora was created for women who buy jewelry as a memory marker: the first big presentation, the birthday dinner, the quiet promise to yourself.
          </p>
          <p>
            We design demi-fine gold pieces with refined proportions, warm finishes, and thoughtful comfort, then offer them direct so luxury feels beautifully within reach.
          </p>
        </div>
        <Link to="/shop" className="mt-8 inline-flex border-b border-velmora-champagne pb-2 text-xs font-extrabold uppercase tracking-luxe text-velmora-ink transition hover:text-velmora-bronze">
          Our Story
        </Link>
      </div>
    </div>
  </section>
)

export default BrandStory
