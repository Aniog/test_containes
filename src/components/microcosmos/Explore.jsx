import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const exploreCards = [
  {
    id: 'bacteria',
    titleId: 'explore-bacteria-title',
    descId: 'explore-bacteria-desc',
    title: 'Bacteria',
    description: 'The oldest and most abundant life forms on Earth. These single-celled organisms have shaped our planet for billions of years.',
    imgId: 'explore-bacteria-img-k9x2m4',
  },
  {
    id: 'protozoa',
    titleId: 'explore-protozoa-title',
    descId: 'explore-protozoa-desc',
    title: 'Protozoa',
    description: 'Complex single-celled organisms that hunt, glide, and pulse through freshwater and marine environments.',
    imgId: 'explore-protozoa-img-p3r7n5',
  },
  {
    id: 'algae',
    titleId: 'explore-algae-title',
    descId: 'explore-algae-desc',
    title: 'Algae',
    description: 'Photosynthetic microorganisms that produce much of Earth\'s oxygen and form the base of aquatic food chains.',
    imgId: 'explore-algae-img-j8t1w6',
  },
  {
    id: 'fungi',
    titleId: 'explore-fungi-title',
    descId: 'explore-fungi-desc',
    title: 'Fungi',
    description: 'From yeast to molds, these decomposers break down organic matter and form vast underground networks.',
    imgId: 'explore-fungi-img-v4c9b2',
  },
  {
    id: 'viruses',
    titleId: 'explore-viruses-title',
    descId: 'explore-viruses-desc',
    title: 'Viruses',
    description: 'At the boundary of life, these nanoscale entities hijack cells to replicate, driving evolution and shaping ecosystems.',
    imgId: 'explore-viruses-img-d6f8h1',
  },
  {
    id: 'tardigrades',
    titleId: 'explore-tardigrades-title',
    descId: 'explore-tardigrades-desc',
    title: 'Tardigrades',
    description: 'Microscopic "water bears" that can survive the vacuum of space, extreme radiation, and boiling temperatures.',
    imgId: 'explore-tardigrades-img-m2a5g7',
  },
]

const Explore = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} id="explore" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-cosmos-primary">Worlds Within</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4 text-cosmos-text">
            Explore the <span className="text-cosmos-secondary">Kingdoms</span>
          </h2>
          <div className="section-glow-line mb-6" />
          <p className="text-cosmos-muted max-w-2xl mx-auto text-lg">
            The microscopic world is divided into extraordinary kingdoms, each with unique survival strategies and beauty.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exploreCards.map((card) => (
            <article key={card.id} className="glow-card group cursor-pointer">
              <div className="img-overlay aspect-[4/3]">
                <img
                  data-strk-img-id={card.imgId}
                  data-strk-img={`[${card.descId}] [${card.titleId}] microscopic`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 id={card.titleId} className="text-xl font-bold text-cosmos-text mb-2 group-hover:text-cosmos-primary transition-colors">
                  {card.title}
                </h3>
                <p id={card.descId} className="text-cosmos-muted text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Explore
