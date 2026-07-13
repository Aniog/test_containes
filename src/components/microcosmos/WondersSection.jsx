import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const wonders = [
  {
    id: 'butterfly-wing',
    title: 'Butterfly Wing Scales',
    desc: 'Thousands of tiny overlapping scales create iridescent colors through light diffraction',
    imgId: 'wonder-img-but4w2',
    titleId: 'wonder-butterfly-wing-title',
    descId: 'wonder-butterfly-wing-desc',
  },
  {
    id: 'snowflake',
    title: 'Snowflake Crystal',
    desc: 'Each snowflake forms a unique hexagonal crystal structure as water vapor freezes',
    imgId: 'wonder-img-sno7k5',
    titleId: 'wonder-snowflake-title',
    descId: 'wonder-snowflake-desc',
  },
  {
    id: 'moss',
    title: 'Moss Sporophyte',
    desc: 'Delicate spore-bearing structures rise from moss beds to release reproductive cells',
    imgId: 'wonder-img-mos1p8',
    titleId: 'wonder-moss-title',
    descId: 'wonder-moss-desc',
  },
  {
    id: 'salt-crystal',
    title: 'Salt Crystals',
    desc: 'Sodium chloride forms perfect cubic lattice structures visible under magnification',
    imgId: 'wonder-img-sal6r3',
    titleId: 'wonder-salt-crystal-title',
    descId: 'wonder-salt-crystal-desc',
  },
  {
    id: 'spider-silk',
    title: 'Spider Silk Threads',
    desc: 'Stronger than steel by weight, spider silk fibers show remarkable engineering at nanoscale',
    imgId: 'wonder-img-spi9t1',
    titleId: 'wonder-spider-silk-title',
    descId: 'wonder-spider-silk-desc',
  },
  {
    id: 'leaf-cell',
    title: 'Leaf Stomata',
    desc: 'Guard cells open and close stomata pores to regulate gas exchange in plants',
    imgId: 'wonder-img-lea2c6',
    titleId: 'wonder-leaf-cell-title',
    descId: 'wonder-leaf-cell-desc',
  },
]

const WondersSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 px-4 md:px-8 bg-cosmos-deeper">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-cosmos-pink font-medium text-sm uppercase tracking-widest mb-3">
            Natural Wonders
          </p>
          <h2
            id="wonders-section-title"
            className="font-heading text-3xl md:text-5xl font-bold text-cosmos-text tracking-tight mb-4"
          >
            Everyday Marvels Up Close
          </h2>
          <p
            id="wonders-section-subtitle"
            className="text-cosmos-muted text-base md:text-lg max-w-2xl mx-auto"
          >
            Familiar objects transformed into alien landscapes when viewed through the microscope.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {wonders.map((item) => (
            <div
              key={item.id}
              className="group relative h-64 md:h-80 rounded-2xl overflow-hidden border border-cosmos-border hover:border-cosmos-pink/30 transition-all duration-500"
            >
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}] [wonders-section-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 id={item.titleId} className="font-heading text-lg font-semibold text-cosmos-text mb-1">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-cosmos-muted text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WondersSection
