import { useRef } from 'react'
import SectionHeading from '@/components/home/SectionHeading'
import { imagePlaceholder } from '@/lib/media'
import { useStrkImages } from '@/lib/useStrkImages'

export default function UgcReelSection({ items }) {
  const containerRef = useRef(null)

  useStrkImages(containerRef, [items])

  return (
    <section className="bg-amber-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Seen On"
          title="A reel of golden everyday moments"
          description="Inspired by the intimacy of a saved post — warm light, soft tailoring, and jewelry that finishes the look without trying too hard."
        />

        <div
          ref={containerRef}
          className="mt-12 flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => (
            <article
              key={item.id}
              className="relative min-w-[220px] snap-start overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-950 shadow-[0_18px_44px_rgba(28,25,23,0.14)] sm:min-w-[250px]"
            >
              <img
                alt={item.title}
                className="aspect-[9/16] w-full object-cover"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [velmora-editorial-ugc]`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="700"
                src={imagePlaceholder}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(28,25,23,0.02)_20%,rgba(28,25,23,0.72)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-stone-50">
                <p id={item.titleId} className="font-[Cormorant_Garamond] text-3xl leading-none">
                  {item.title}
                </p>
                <p id={item.descId} className="mt-3 text-sm leading-6 text-stone-200">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p id="velmora-editorial-ugc" className="sr-only">
          Vertical editorial jewelry styling, warm luxury fashion content, close-up ear and necklace styling.
        </p>
      </div>
    </section>
  )
}
