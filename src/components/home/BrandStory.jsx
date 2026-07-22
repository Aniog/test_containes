import VelmoraButton from '@/components/common/VelmoraButton.jsx'
import EditorialVisual from '@/components/common/EditorialVisual.jsx'

export default function BrandStory() {
  return (
    <section id="story" className="bg-velmora-champagne px-5 py-16 text-velmora-espresso sm:px-8 md:py-24 lg:px-12">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative min-h-[520px] overflow-hidden bg-velmora-cacao">
          <EditorialVisual type="workshop" palette="dark" label="Velmora jewelry studio" className="absolute inset-0" />
          <div className="absolute inset-6 border border-velmora-ivory/35" />
        </div>
        <div className="lg:pl-12">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-burnished">Our Story</p>
          <h2 id="story-title" className="mt-4 font-serif text-5xl font-medium leading-tight text-velmora-espresso md:text-7xl">Jewelry for the rituals you return to.</h2>
          <p id="story-copy" className="mt-7 text-base leading-8 text-velmora-cacao/80 md:text-lg">
            Velmora was created around a simple belief: fine-feeling jewelry should be beautiful, wearable, and within reach. Each piece is selected for warm gold tone, skin-kind comfort, and a presence that feels personal rather than precious.
          </p>
          <VelmoraButton to="/shop" variant="outline" className="mt-9">Our Story</VelmoraButton>
        </div>
      </div>
    </section>
  )
}
