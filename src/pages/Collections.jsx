import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import StrkImg from '@/components/ui/StrkImg'
import Reveal from '@/components/ui/Reveal'
import { CATEGORY_TILES } from '@/data/products'

const EDITS = [
  {
    id: 'edit-golden-hour',
    title: 'The Golden Hour Edit',
    text: 'Warm domes, polished spheres and soft curves — pieces that glow at dusk.',
    category: 'Huggies',
    imgId: 'edit-golden-hour-img-7a8b9c',
    titleId: 'edit-golden-hour-title',
    textId: 'edit-golden-hour-text',
  },
  {
    id: 'edit-heirloom',
    title: 'The Heirloom Edit',
    text: 'Gift-boxed sets and keepsake pieces, made for the moments that matter.',
    category: 'Sets',
    imgId: 'edit-heirloom-img-0d1e2f',
    titleId: 'edit-heirloom-title',
    textId: 'edit-heirloom-text',
  },
]

export default function Collections() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="border-b border-line bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center md:px-10 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Curated Worlds</p>
          <h1 className="mt-3 font-display text-4xl font-light text-espresso md:text-5xl">Collections</h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-mocha">
            Three signatures, two seasonal edits — each piece chosen to be worn together.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-14 md:px-10 md:py-20">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {CATEGORY_TILES.map((tile, i) => (
            <Reveal key={tile.id} delay={i * 100}>
              <Link
                to={`/shop?category=${tile.id}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-sand"
              >
                <StrkImg
                  imgId={tile.imgId}
                  query={`[${tile.titleId}] gold jewelry editorial still life`}
                  ratio="4x5"
                  width={800}
                  alt={tile.id}
                  className="transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-espresso/20 transition-colors duration-500 group-hover:bg-espresso/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h2 id={tile.titleId} className="font-display text-3xl font-light text-ivory md:text-4xl">
                    {tile.id}
                  </h2>
                  <span className="mt-3 flex translate-y-2 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.28em] text-ivory/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-ivory">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-7xl space-y-14 px-5 md:px-10 md:space-y-20">
          {EDITS.map((edit, i) => (
            <Reveal key={edit.id}>
              <div className={`grid items-center gap-8 md:grid-cols-2 md:gap-14`}>
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="aspect-[4/3] overflow-hidden bg-sand">
                    <StrkImg
                      imgId={edit.imgId}
                      query={`[${edit.textId}] [${edit.titleId}] gold jewelry editorial`}
                      ratio="4x3"
                      width={1000}
                      alt={edit.title}
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-gold">Seasonal Edit</p>
                  <h2 id={edit.titleId} className="mt-4 font-display text-3xl font-light text-espresso md:text-4xl">
                    {edit.title}
                  </h2>
                  <p id={edit.textId} className="mt-4 max-w-md text-sm leading-relaxed text-mocha md:text-base">
                    {edit.text}
                  </p>
                  <Link
                    to={`/shop?category=${edit.category}`}
                    className="group mt-7 inline-flex items-center gap-3 border border-espresso/25 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-espresso transition-all duration-300 hover:bg-espresso hover:text-ivory"
                  >
                    Shop the Edit
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
