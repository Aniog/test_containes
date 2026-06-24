import { motion } from 'framer-motion'
import SpecimenCard from '@/components/SpecimenCard'
import Tooltip from '@/components/Tooltip'

const specimens = [
  {
    id: 'sp-001',
    title: 'Vascular Bundle Cross-Section',
    category: 'Plant Histology',
    magnification: '100x',
    description:
      'Transverse section of a dicotyledonous stem revealing xylem vessels, phloem sieve tubes, and cambium layer in precise detail.',
    tags: ['Xylem', 'Phloem', 'Dicot'],
  },
  {
    id: 'sp-002',
    title: 'Paramecium caudatum',
    category: 'Protists',
    magnification: '400x',
    description:
      'A ciliated protozoan demonstrating oral groove, contractile vacuole, and trichocyst discharge mechanism.',
    tags: ['Ciliata', 'Protozoa', 'Motility'],
  },
  {
    id: 'sp-003',
    title: 'Human Erythrocytes',
    category: 'Human Cytology',
    magnification: '1000x Oil',
    description:
      'Peripheral blood smear showing biconcave disc morphology of red blood cells. Wright-Giemsa stain preparation.',
    tags: ['Hematology', 'RBC', 'Staining'],
  },
  {
    id: 'sp-004',
    title: 'Stomatal Complex',
    category: 'Plant Histology',
    magnification: '400x',
    description:
      'Epidermal peel of Tradescantia showing guard cells, subsidiary cells, and stomatal aperture regulation.',
    tags: ['Epidermis', 'Guard Cells', 'Gas Exchange'],
  },
  {
    id: 'sp-005',
    title: 'Amoeba proteus',
    category: 'Protists',
    magnification: '100x',
    description:
      'Pseudopod extension and phagocytosis captured in a living specimen. Note the food vacuoles and contractile vacuole.',
    tags: ['Sarcodina', 'Phagocytosis', 'Locomotion'],
  },
  {
    id: 'sp-006',
    title: 'Neuron Smear Preparation',
    category: 'Human Cytology',
    magnification: '400x',
    description:
      'Silver-stained motor neurons from spinal cord showing Nissl bodies, axon hillock, and dendritic arborization.',
    tags: ['Nervous Tissue', 'Silver Stain', 'Dendrites'],
  },
]

const Specimens = () => {
  return (
    <div className="pt-24 pb-20 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <p className="font-mono text-xs text-slate uppercase tracking-[0.3em] mb-3">
          Collection Index
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-6">
          Specimen Hub
        </h1>
        <p className="text-charcoal text-lg leading-relaxed">
          A curated archive of microscopic preparations spanning three domains of study:{' '}
          <Tooltip
            term="Histology"
            definition="The study of the microscopic anatomy of cells and tissues of plants and animals."
          >
            Plant Histology
          </Tooltip>
          ,{' '}
          <Tooltip
            term="Protista"
            definition="A diverse kingdom of eukaryotic microorganisms including protozoa, algae, and slime molds."
          >
            Protists
          </Tooltip>
          , and{' '}
          <Tooltip
            term="Cytology"
            definition="The branch of biology concerned with the structure and function of plant and animal cells."
          >
            Human Cytology
          </Tooltip>
          .
        </p>
      </motion.header>

      {/* Z-Pattern Asymmetrical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {/* Row 1: Large card + small card */}
        <div className="md:col-span-2">
          <SpecimenCard specimen={specimens[0]} index={0} isLarge />
        </div>
        <div className="md:col-span-1">
          <SpecimenCard specimen={specimens[1]} index={1} />
        </div>

        {/* Row 2: Small card + Large card (Z-pattern reversal) */}
        <div className="md:col-span-1">
          <SpecimenCard specimen={specimens[2]} index={2} />
        </div>
        <div className="md:col-span-2">
          <SpecimenCard specimen={specimens[3]} index={3} isLarge />
        </div>

        {/* Row 3: Two equal cards */}
        <div className="md:col-span-1">
          <SpecimenCard specimen={specimens[4]} index={4} />
        </div>
        <div className="md:col-span-2">
          <SpecimenCard specimen={specimens[5]} index={5} isLarge />
        </div>
      </div>

      {/* Methodology Note */}
      <motion.aside
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 border-t border-silver/30 pt-12"
      >
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl font-semibold text-ink mb-4">
            Preparation Methodology
          </h2>
          <p className="text-charcoal text-sm leading-relaxed mb-4">
            All specimens are prepared using standard histological techniques including
            fixation in 10% neutral buffered formalin, paraffin embedding, and
            microtome sectioning at 5–7 μm thickness. Staining protocols include
            Hematoxylin & Eosin (H&E), Wright-Giemsa, and Golgi silver impregnation.
          </p>
          <p className="text-slate text-xs font-mono">
            Imaging: Olympus BX53 | Camera: DP74 CMOS | Software: cellSens Dimension
          </p>
        </div>
      </motion.aside>
    </div>
  )
}

export default Specimens
