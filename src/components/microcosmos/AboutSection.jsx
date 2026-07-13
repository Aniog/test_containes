import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const AboutSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-cosmos-cyan font-medium text-sm uppercase tracking-widest mb-3">
              About MicroCosmos
            </p>
            <h2
              id="about-title"
              className="font-heading text-3xl md:text-5xl font-bold text-cosmos-text tracking-tight mb-6"
            >
              A Universe Within a Drop of Water
            </h2>
            <p
              id="about-desc"
              className="text-cosmos-muted text-base md:text-lg leading-relaxed mb-6"
            >
              The microcosmos is a realm of extraordinary beauty and complexity that exists all around us, yet remains invisible to the naked eye. From the intricate structures of diatoms to the graceful movements of paramecia, this hidden world teems with life forms that have evolved over billions of years.
            </p>
            <p className="text-cosmos-muted text-base md:text-lg leading-relaxed">
              Through advanced microscopy techniques — including fluorescence, electron, and confocal imaging — we can now witness these microscopic marvels in stunning detail, revealing patterns and behaviors that rival anything found in the macroscopic world.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                alt="Microscopic diatom structures"
                data-strk-img-id="about-img1-f3k2m8"
                data-strk-img="[about-desc] [about-title] microscopic diatom"
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-2xl object-cover"
              />
              <img
                alt="Fluorescence microscopy of cells"
                data-strk-img-id="about-img2-p9w4n1"
                data-strk-img="[about-desc] [about-title] fluorescence microscopy cells"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-2xl object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                alt="Bacteria colony under microscope"
                data-strk-img-id="about-img3-q7t5x2"
                data-strk-img="[about-desc] [about-title] bacteria colony microscope"
                data-strk-img-ratio="1x1"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-2xl object-cover"
              />
              <img
                alt="Microscopic organisms in water"
                data-strk-img-id="about-img4-r2v8y6"
                data-strk-img="[about-desc] [about-title] microscopic organisms water"
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
