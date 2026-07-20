import SectionHeading from '@/components/home/SectionHeading'
import JewelryVisual from '@/components/product/JewelryVisual'
import { getProductById } from '@/data/products'

const reels = [
  { id: 'morning-stack', caption: 'Morning gold, softly stacked', detail: 'Golden huggies and ear cuff worn in warm window light', productId: 'golden-sphere-huggies', variant: 'worn' },
  { id: 'dinner-glow', caption: 'A dinner-date shimmer', detail: 'Crystal necklace layered over silk in candlelight', productId: 'majestic-flora-nectar', variant: 'worn' },
  { id: 'gift-moment', caption: 'Gifted, opened, adored', detail: 'Velmora gift box with gold jewelry on neutral linen', productId: 'royal-heirloom-set', variant: 'packaging' },
  { id: 'everyday-neckline', caption: 'The everyday neckline', detail: 'Fine gold necklace styled with cream knitwear', productId: 'vivid-aura-jewels', variant: 'worn' },
  { id: 'quiet-sparkle', caption: 'Quiet sparkle, close up', detail: 'Gold earrings on model with refined soft makeup', productId: 'amber-lace-earrings', variant: 'worn' },
]

export default function UgcReels() {
  return (
    <section className="overflow-hidden bg-velmora-espresso px-5 py-16 text-velmora-ivory md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Seen in the everyday"
          title="Softly worn, beautifully kept"
          subtitle="A reel-inspired strip of luminous details from first light to evening plans."
          tone="dark"
        />
        <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reels.map((reel) => {
            const captionId = `reel-${reel.id}-caption`
            const detailId = `reel-${reel.id}-detail`
            return (
              <article key={reel.id} className="group relative h-[28rem] min-w-[17rem] snap-start overflow-hidden rounded-t-full bg-velmora-sand/20 md:h-[34rem] md:min-w-[20rem]">
                <JewelryVisual product={getProductById(reel.productId)} variant={reel.variant} className="absolute inset-0 transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-velmora-espresso/80 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-velmora-ivory">
                  <p id={captionId} className="font-serif text-2xl leading-tight">{reel.caption}</p>
                  <p id={detailId} className="sr-only">{reel.detail}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
