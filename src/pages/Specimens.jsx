import { motion } from 'framer-motion'
import { specimens, glossary } from '@/data/catalog'
import SectionEyebrow from '@/components/SectionEyebrow'
import SpecimenCard from '@/components/SpecimenCard'
import GlassTooltip from '@/components/GlassTooltip'

// Add bracketed glossary terms inside the specimen summaries.
const enriched = specimens.map((s) => {
  let summary = s.summary
  if (s.id.startsWith('PH')) {
    summary = summary
      .replace('mesophyll', '[mesophyll]')
      .replace('stomatal apparatus', '[stomata]l apparatus')
      .replace('lignified', '[lignified]')
  }
  if (s.id.startsWith('PR')) {
    summary = summary
      .replace('pellicle', '[pellicle]')
      .replace('cilia', '[cilia]')
      .replace('cytostome', '[cytostome]')
  }
  if (s.id.startsWith('HC')) {
    summary = summary
      .replace('basophilic', '[basophilic]')
      .replace('squamous', '[squamous]')
  }
  return { ...s, summary }
})

const extendedGlossary = {
  ...glossary,
  lignified: 'Impregnated with lignin, conferring rigidity and waterproofing on plant cell walls, particularly in xylem.',
}

export default function Specimens() {
  return (
    <div>
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16">
        <SectionEyebrow index="Vol. I" label="Specimen Hub" />
        <div className="mt-6 grid lg:grid-cols-12 gap-8 items-end">
          <h1 className="lg:col-span-8 font-serif text-5xl lg:text-7xl leading-[0.98] tracking-tight text-ink">
            A registry of catalogued specimens, by kingdom and tissue.
          </h1>
          <p className="lg:col-span-4 text-charcoal/90 leading-relaxed">
            The following plates introduce the three principal subjects of this atlas. Hover any
            <GlassTooltip
              term="terminology"
              definition="Italicised, dotted-underlined words throughout the text reveal a glassy reading-card with the standard textbook definition."
            >
              {' '}underlined term{' '}
            </GlassTooltip>
            to consult the field glossary.
          </p>
        </div>

        <div className="mt-10 rule-double" />
      </section>

      {/* Z-pattern alternating cards */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 space-y-28 lg:space-y-40">
        {enriched.map((s, i) => (
          <SpecimenCard key={s.id} specimen={s} index={i} terms={extendedGlossary} />
        ))}
      </section>

      {/* Glossary block */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="rule-double mb-10" />
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <SectionEyebrow index="Appendix" label="Working Glossary" />
            <h2 className="mt-5 font-serif text-4xl text-ink leading-tight">
              Selected terms used throughout the volume.
            </h2>
          </div>
          <dl className="lg:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {Object.entries(extendedGlossary).map(([term, def]) => (
              <motion.div
                key={term}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <dt className="font-serif italic text-xl text-ink capitalize">{term}</dt>
                <dd className="mt-1 text-sm text-charcoal/90 leading-relaxed">{def}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  )
}
