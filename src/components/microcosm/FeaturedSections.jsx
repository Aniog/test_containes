import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const features = [
  {
    id: 'feat-1',
    accentColor: 'text-cyan-glow',
    borderColor: 'border-cyan-glow/20',
    glowClass: 'from-cyan-glow/10',
    tag: 'The Living World',
    titleId: 'feat-title-1',
    title: 'Cells: The Building Blocks of Life',
    description:
      'Every living organism — from the simplest bacterium to the most complex mammal — is built from cells. These microscopic units carry out thousands of chemical reactions every second, maintaining the delicate balance we call life.',
    detail:
      'A single human cell contains roughly 6 feet of DNA, packed into a nucleus just 6 micrometers wide. The machinery inside is more complex than any factory ever built.',
    imgId: 'feat-img-1a2b',
    imgQuery: '[feat-title-1] biology microscopy',
    imgRatio: '3x2',
    imgWidth: 700,
    reverse: false,
  },
  {
    id: 'feat-2',
    accentColor: 'text-violet-glow',
    borderColor: 'border-violet-glow/20',
    glowClass: 'from-violet-glow/10',
    tag: 'The Crystal Kingdom',
    titleId: 'feat-title-2',
    title: 'Crystals: Nature\'s Perfect Geometry',
    description:
      'Crystals form when atoms arrange themselves into repeating, highly ordered patterns. The result is some of nature\'s most stunning architecture — from the six-fold symmetry of snowflakes to the cubic perfection of salt.',
    detail:
      'Under polarized light, thin sections of minerals reveal a kaleidoscope of colors caused by the way crystals bend and split light waves — a phenomenon called birefringence.',
    imgId: 'feat-img-3c4d',
    imgQuery: '[feat-title-2] mineral crystal polarized light microscopy',
    imgRatio: '3x2',
    imgWidth: 700,
    reverse: true,
  },
  {
    id: 'feat-3',
    accentColor: 'text-neon-green',
    borderColor: 'border-neon-green/20',
    glowClass: 'from-neon-green/10',
    tag: 'The Water World',
    titleId: 'feat-title-3',
    title: 'Pond Water: An Ocean in a Drop',
    description:
      'A single drop of pond water can contain hundreds of species — algae, protozoa, rotifers, and bacteria — all living, feeding, and competing in a space smaller than a fingernail.',
    detail:
      'Antonie van Leeuwenhoek, the father of microbiology, was the first to observe these "animalcules" in 1674, forever changing our understanding of life on Earth.',
    imgId: 'feat-img-5e6f',
    imgQuery: '[feat-title-3] pond water microorganisms protozoa microscopy',
    imgRatio: '3x2',
    imgWidth: 700,
    reverse: false,
  },
]

export default function FeaturedSections() {
  const containerRef = useRef(null)

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-deep py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto space-y-28 md:space-y-36">
        {features.map((feat) => (
          <div
            key={feat.id}
            className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${feat.reverse ? 'md:[&>*:first-child]:order-2' : ''}`}
          >
            {/* Text */}
            <div>
              <p className={`${feat.accentColor} font-body text-sm uppercase tracking-[0.25em] mb-4 font-medium`}>
                {feat.tag}
              </p>
              <h3
                id={feat.titleId}
                className="font-display text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
              >
                {feat.title}
              </h3>
              <p className="font-body text-slate-300 text-base leading-relaxed mb-5">
                {feat.description}
              </p>
              <div className={`border-l-2 ${feat.borderColor} pl-4`}>
                <p className="font-body text-slate-400 text-sm leading-relaxed italic">
                  {feat.detail}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-br ${feat.glowClass} to-transparent blur-xl`} />
              <div className={`relative rounded-2xl overflow-hidden border ${feat.borderColor}`}>
                <img
                  alt={feat.title}
                  className="w-full h-72 md:h-80 object-cover"
                  data-strk-img-id={feat.imgId}
                  data-strk-img={feat.imgQuery}
                  data-strk-img-ratio={feat.imgRatio}
                  data-strk-img-width={feat.imgWidth}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
