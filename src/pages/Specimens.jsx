import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SpecimenCard from '@/components/microcosmos/SpecimenCard'
import GlassTooltip from '@/components/microcosmos/GlassTooltip'
import { specimenGroups, glossary } from '@/data/specimens'

const findDef = (term) => glossary.find((g) => g.term === term)?.def || ''

// Inline body copy weaves GlassTooltip components over scientific terms.
function GroupBody({ id }) {
  if (id === 'plant') {
    return (
      <p className="text-charcoal text-lg leading-relaxed">
        From the rigid pillars of xylem to the luminous architecture of stomata, plant
        histology reveals a quiet, geometric order. Note especially the{' '}
        <GlassTooltip term="Endodermis" definition={findDef('Endodermis')} />, whose
        radial control of solute traffic depends upon the{' '}
        <GlassTooltip term="Casparian Strip" definition={findDef('Casparian Strip')} />.
        In the maize leaf, students should identify the diagnostic{' '}
        <GlassTooltip term="Kranz Anatomy" definition={findDef('Kranz Anatomy')} />.
      </p>
    )
  }
  if (id === 'protist') {
    return (
      <p className="text-charcoal text-lg leading-relaxed">
        These organisms are the cathedral builders of the microscopic seas. The silica{' '}
        <GlassTooltip term="Frustule" definition={findDef('Frustule')} /> of the diatom
        and the spheroidal skeleton of the{' '}
        <GlassTooltip term="Radiolarian" definition={findDef('Radiolarian')} /> survive
        for millions of years, forming the chalk and chert of entire continents.
      </p>
    )
  }
  return (
    <p className="text-charcoal text-lg leading-relaxed">
      The human body, observed at four hundred diameters, becomes a landscape of
      nuclei and cytoplasm. The{' '}
      <GlassTooltip term="Hepatocyte" definition={findDef('Hepatocyte')} /> is
      polygonal and densely packed; the pyramidal neuron — austere and elegant —
      ascends a single apical dendrite into the upper laminae of the cortex.
    </p>
  )
}

export default function Specimens() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Header banner ------------------------------------------------ */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20">
        <div className="flex items-end justify-between gap-6 border-b border-bone pb-6">
          <p className="small-caps text-graphite">Section · II</p>
          <p className="font-mono text-xs text-graphite">/specimens</p>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-serif text-6xl sm:text-7xl md:text-8xl text-ink mt-10 leading-[0.95] tracking-tight"
        >
          The Specimen<br /><span className="italic font-light">Hub.</span>
        </motion.h1>
        <p className="mt-8 max-w-2xl text-charcoal text-lg leading-relaxed">
          Three volumes of structured plates — plant tissues, single-celled architects
          of the plankton, and the cytology of the human body. Each entry is presented
          with magnification, a brief technical note, and a hover-defined glossary.
        </p>
        <div className="mt-12 flex items-center gap-3 small-caps text-graphite">
          <ArrowDown className="w-4 h-4" /> Begin the Catalogue
        </div>
      </section>

      {/* Z-pattern groups -------------------------------------------- */}
      {specimenGroups.map((group, idx) => {
        const reverse = idx % 2 === 1
        return (
          <section key={group.id} className="border-t border-bone">
            <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
              {/* Header */}
              <div className={`grid md:grid-cols-12 gap-10 items-end ${reverse ? 'md:[direction:rtl]' : ''}`}>
                <div className="md:col-span-5 [direction:ltr]">
                  <p className="small-caps text-graphite">{group.plate}</p>
                  <h2 className="font-serif text-5xl md:text-6xl text-ink mt-4 leading-[1.02]">
                    {group.title}
                  </h2>
                  <p className="mt-3 font-serif italic text-graphite text-xl">
                    {group.latin}
                  </p>
                </div>
                <div className="md:col-span-7 [direction:ltr]">
                  <p className="text-charcoal text-lg leading-relaxed">
                    {group.summary}
                  </p>
                  <div className="mt-6">
                    <GroupBody id={group.id} />
                  </div>
                </div>
              </div>

              {/* Asymmetrical Z-grid mosaic */}
              <div className={`mt-14 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 ${reverse ? 'md:[grid-auto-flow:dense]' : ''}`}>
                {/* Card 1 — large feature */}
                <div className={`md:col-span-7 ${reverse ? 'md:col-start-6' : ''}`}>
                  <SpecimenCard
                    item={group.items[0]}
                    ratio="3x2"
                    size="lg"
                    query={`[spec-${group.items[0].id}-name] black and white microscopy ${group.title}`}
                  />
                </div>
                {/* Card 2 — tall portrait */}
                <div className={`md:col-span-5 ${reverse ? 'md:col-start-1 md:row-span-2' : 'md:row-span-2'}`}>
                  <SpecimenCard
                    item={group.items[1]}
                    ratio="3x4"
                    size="md"
                    query={`[spec-${group.items[1].id}-name] black and white microscopy ${group.title}`}
                  />
                </div>
                {/* Card 3 — square */}
                <div className={`md:col-span-3 ${reverse ? '' : ''}`}>
                  <SpecimenCard
                    item={group.items[2]}
                    ratio="1x1"
                    query={`[spec-${group.items[2].id}-name] black and white microscopy ${group.title}`}
                  />
                </div>
                {/* Card 4 — wide */}
                <div className={`md:col-span-4`}>
                  <SpecimenCard
                    item={group.items[3]}
                    ratio="4x3"
                    query={`[spec-${group.items[3].id}-name] black and white microscopy ${group.title}`}
                  />
                </div>
              </div>

              {/* Hidden text tags so image queries can interpolate name */}
              <div className="sr-only">
                {group.items.map((it) => (
                  <span key={it.id} id={`spec-${it.id}-name`}>{it.name} {group.title}</span>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Glossary band ------------------------------------------------ */}
      <section className="border-t border-bone">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-10 border-b border-bone pb-6">
            <div>
              <p className="small-caps text-graphite">Apparatus</p>
              <h2 className="font-serif text-4xl text-ink mt-3">A Brief Glossary</h2>
            </div>
            <p className="font-mono text-xs text-graphite hidden sm:block">{glossary.length} entries</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {glossary.map((g) => (
              <div key={g.term} className="border-t border-bone/70 pt-4">
                <p className="font-serif text-xl text-ink">{g.term}</p>
                <p className="mt-2 text-charcoal leading-relaxed text-sm">{g.def}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
