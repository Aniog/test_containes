import Button from '@/components/ui/Button'
import ImageScope from '@/components/common/ImageScope'

export default function HeroSection() {
  return (
    <ImageScope>
      <section className="relative min-h-screen overflow-hidden bg-velmora-ink text-velmora-pearl">
        <div
          className="absolute inset-0 animate-slowDrift opacity-80"
          data-strk-bg-id="velmora-hero-bg-a91c2f"
          data-strk-bg="[hero-image-cue] [hero-subtitle] [hero-title] [hero-kicker]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1800"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-velmora-ink/35 via-velmora-ink/45 to-velmora-ink/78" />
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:px-10 lg:pb-24">
          <div className="max-w-3xl animate-fadeUp">
            <p id="hero-image-cue" className="sr-only">Warm-lit close-up of gold jewelry worn on a model, quiet luxury editorial neck and ear detail</p>
            <p id="hero-kicker" className="mb-5 text-xs font-bold uppercase tracking-label text-velmora-gold">Demi-fine jewelry for daily rituals</p>
            <h1 id="hero-title" className="font-serif text-6xl font-medium leading-none text-velmora-pearl sm:text-7xl lg:text-8xl">Crafted to be Treasured</h1>
            <p id="hero-subtitle" className="mt-6 max-w-2xl text-lg leading-8 text-velmora-pearl/86 sm:text-xl">Warm gold pieces, luminous crystals, and sculptural silhouettes designed to feel personal from the first wear.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to="/shop">Shop the Collection</Button>
              <Button to="/products/golden-sphere-huggies" variant="outline" className="border-velmora-pearl/45 text-velmora-pearl hover:bg-velmora-pearl hover:text-velmora-ink">View Bestsellers</Button>
            </div>
          </div>
        </div>
      </section>
    </ImageScope>
  )
}
