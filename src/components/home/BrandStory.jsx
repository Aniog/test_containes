import ImageScope from '@/components/common/ImageScope'
import Button from '@/components/ui/Button'

export default function BrandStory() {
  return (
    <ImageScope>
      <section id="story" className="bg-velmora-porcelain px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative min-h-96 overflow-hidden bg-velmora-champagne shadow-card lg:min-h-screen">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-bg-f72a10"
              data-strk-bg="[story-copy] [story-title] [story-eyebrow]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="1000"
            />
          </div>
          <div className="lg:pl-12">
            <p id="story-eyebrow" className="text-xs font-bold uppercase tracking-label text-velmora-goldDark">Our Story</p>
            <h2 id="story-title" className="mt-4 font-serif text-5xl font-medium leading-tight text-velmora-ink lg:text-7xl">Made for the jewelry box you actually live in.</h2>
            <p id="story-copy" className="mt-6 text-lg leading-9 text-velmora-cocoa/80">Velmora began with a simple belief: everyday jewelry should feel considered, luminous, and personal without asking you to save it for special occasions. Each piece is designed in warm 18K gold plating with comfortable details and gift-ready finishing.</p>
            <div className="mt-8 grid gap-5 border-y border-velmora-sand py-6 sm:grid-cols-3">
              {['Designed in small edits', 'Premium plating', 'Gift-ready packaging'].map((item) => <p key={item} className="font-serif text-2xl text-velmora-ink">{item}</p>)}
            </div>
            <Button to="/shop" variant="outline" className="mt-8">Our Story</Button>
          </div>
        </div>
      </section>
    </ImageScope>
  )
}
