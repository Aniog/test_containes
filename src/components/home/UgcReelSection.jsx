import { ugcReels } from '@/data/products.js'
import SectionIntro from '@/components/common/SectionIntro.jsx'
import ProductImage from '@/components/product/ProductImage.jsx'

const UgcReelSection = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Seen on You"
          title="A reel-inspired row of everyday glow"
          description="Soft, vertical moments that show how Velmora lives on the ear, along the collarbone, and inside daily rituals."
        />
        <div className="hide-scrollbar flex gap-5 overflow-x-auto pb-2">
          {ugcReels.map((reel) => (
            <article key={reel.id} className="group relative min-w-[230px] max-w-[230px] overflow-hidden rounded-[2rem] border border-hairline-dark bg-base-muted shadow-editorial sm:min-w-[280px] sm:max-w-[280px]">
              <ProductImage
                imageId={`${reel.id}-frame`}
                query={`[${reel.id}-desc] [${reel.id}-title]`}
                alt={reel.title}
                ratio="9x16"
                width="700"
                className="aspect-[9/16] h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-reel-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-foreground">
                <p id={`${reel.id}-title`} className="font-display text-3xl">{reel.title}</p>
                <p className="mt-2 text-sm leading-6 text-foreground/85">{reel.caption}</p>
                <p id={`${reel.id}-desc`} className="sr-only">{reel.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UgcReelSection
