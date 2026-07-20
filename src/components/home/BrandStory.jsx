import { Link } from 'react-router-dom'
import JewelryImage from '@/components/common/JewelryImage.jsx'

const BrandStory = () => (
  <section id="story" className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
    <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
      <div className="relative">
        <div className="absolute -left-4 -top-4 hidden h-full w-full border border-velmora-gold/45 md:block" />
        <div className="relative aspect-[4/5] overflow-hidden bg-velmora-mist shadow-editorial">
          <JewelryImage
            imgId="brand-story-jewelry-maker-61f0"
            query="[story-copy] [story-title]"
            ratio="3x4"
            width="1000"
            alt="Velmora jewelry styling"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="lg:pl-12">
        <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.32em] text-velmora-goldDark">Our point of view</p>
        <h2 id="story-title" className="font-serif text-5xl font-medium leading-none text-velmora-espresso md:text-7xl">
          Fine feeling, made for real life.
        </h2>
        <p id="story-copy" className="mt-7 text-lg leading-9 text-velmora-taupe">
          Velmora was created for women who want jewelry that feels considered without being precious. Our demi-fine pieces pair warm gold finishes, skin-kind materials, and quietly distinctive shapes — designed to be worn often, gifted beautifully, and kept close.
        </p>
        <Link
          to="/shop"
          className="mt-9 inline-flex rounded-full border border-velmora-espresso px-7 py-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory"
        >
          Our Story
        </Link>
      </div>
    </div>
  </section>
)

export default BrandStory
