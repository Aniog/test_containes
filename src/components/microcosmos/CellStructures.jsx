import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const CellStructures = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-32 bg-cosmos-deeper/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2
            id="cells-section-title"
            className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cosmos-magenta to-cosmos-purple bg-clip-text text-transparent"
          >
            Inside the Cell
          </h2>
          <p
            id="cells-section-subtitle"
            className="text-lg md:text-xl font-light text-cosmos-muted max-w-2xl mx-auto"
          >
            The fundamental building blocks of all living things, revealed in stunning detail
          </p>
        </div>

        {/* Large featured image */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(224,64,251,0.1)]">
          <div className="aspect-[16/9] relative">
            <img
              alt="Cell division under electron microscope"
              data-strk-img-id="cell-featured-a1b2c3"
              data-strk-img="[cell-featured-desc] [cell-featured-title] [cells-section-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cosmos-dark/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <h3 id="cell-featured-title" className="text-2xl md:text-3xl font-bold text-cosmos-text mb-2">
                Cell Division — Mitosis
              </h3>
              <p id="cell-featured-desc" className="text-cosmos-muted text-sm md:text-base max-w-2xl">
                The miraculous process of cell division captured through fluorescence microscopy, showing chromosomes separating during mitosis
              </p>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-[3/2]">
              <img
                alt="Mitochondria"
                data-strk-img-id="cell-mito-d4e5f6"
                data-strk-img="[cell-mito-desc] [cell-mito-title] [cells-section-title]"
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 id="cell-mito-title" className="text-xl font-semibold text-cosmos-text mb-2">
                Mitochondria — Powerhouses of the Cell
              </h3>
              <p id="cell-mito-desc" className="text-cosmos-muted text-sm leading-relaxed">
                These double-membraned organelles generate most of the cell's supply of ATP, the molecular currency of energy transfer
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <div className="aspect-[3/2]">
              <img
                alt="Endoplasmic Reticulum"
                data-strk-img-id="cell-er-g7h8i9"
                data-strk-img="[cell-er-desc] [cell-er-title] [cells-section-title]"
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 id="cell-er-title" className="text-xl font-semibold text-cosmos-text mb-2">
                Endoplasmic Reticulum Network
              </h3>
              <p id="cell-er-desc" className="text-cosmos-muted text-sm leading-relaxed">
                A vast network of membranes that serves as the cell's manufacturing and packaging system for proteins and lipids
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CellStructures
