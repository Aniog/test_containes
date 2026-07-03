import JewelryImage from '@/components/JewelryImage';

export default function About() {
  return (
    <div className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      <div className="section-padding py-12 md:py-20 max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-stone mb-4">
          Our Story
        </p>
        <h1 className="font-serif text-3xl md:text-5xl font-light mb-8">
          Crafted with Intention
        </h1>
        <p className="font-sans text-sm md:text-base text-velmora-stone leading-relaxed mb-6">
          Velmora was founded on a simple belief: jewelry should feel as good as it looks. We design
          demi-fine pieces for women who move through the world with quiet confidence — pieces that
          transition seamlessly from morning coffee to evening plans, from boardrooms to weekends away.
        </p>
        <p className="font-sans text-sm md:text-base text-velmora-stone leading-relaxed mb-6">
          Every collection begins with a mood, a texture, a moment of inspiration. We work with skilled
          artisans to bring each design to life using 18K gold plating over hypoallergenic bases, ensuring
          beauty that lasts without the luxury markup.
        </p>
        <p className="font-sans text-sm md:text-base text-velmora-stone leading-relaxed">
          We are committed to responsible production, minimal waste, and packaging you will actually want to keep.
          This is jewelry designed to be treasured — by you, and by the planet.
        </p>
      </div>
      <div className="section-padding pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="aspect-[4/3] bg-velmora-ivory">
            <JewelryImage
              id="about-1"
              query="[about-title]"
              ratio="4x3"
              width={700}
              alt="Velmora studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] bg-velmora-ivory">
            <JewelryImage
              id="about-2"
              query="[about-title]"
              ratio="4x3"
              width={700}
              alt="Velmora craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
