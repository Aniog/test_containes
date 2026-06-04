import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SpecimenCard from '@/components/SpecimenCard';

const SPECIMENS = [
  {
    id: 'plant-histology',
    category: 'Plant Histology',
    title: 'Meristematic Cell Division',
    titleId: 'specimen-plant-histology-title',
    descId: 'specimen-plant-histology-desc',
    imgId: 'specimen-plant-histology-img-a1b2c3',
    description:
      'A longitudinal section through the apical meristem of Allium cepa, revealing the dense cytoplasmic matrix and prominent nuclei characteristic of actively dividing plant cells.',
    terms: [
      { word: 'Meristem', definition: 'A region of undifferentiated plant cells capable of continuous division and growth, found at root and shoot tips.' },
      { word: 'Cytoplasm', definition: 'The gel-like substance within a cell membrane that surrounds the nucleus and contains organelles.' },
      { word: 'Allium cepa', definition: 'The scientific name for the common onion, widely used as a model organism in plant cytology.' },
    ],
  },
  {
    id: 'protist-amoeba',
    category: 'Protist Kingdom',
    title: 'Amoeba proteus in Phase Contrast',
    titleId: 'specimen-protist-amoeba-title',
    descId: 'specimen-protist-amoeba-desc',
    imgId: 'specimen-protist-amoeba-img-d4e5f6',
    description:
      'A living specimen of Amoeba proteus captured under phase-contrast illumination, showcasing pseudopodial extension and cytoplasmic streaming in real time.',
    terms: [
      { word: 'Pseudopodia', definition: 'Temporary, foot-like extensions of the cell membrane used by amoebae for locomotion and engulfing food particles.' },
      { word: 'Phase Contrast', definition: 'A microscopy technique that converts phase shifts in light passing through a transparent specimen into brightness changes.' },
      { word: 'Cytoplasmic Streaming', definition: 'The directed flow of cytosol and organelles within a cell, driven by the cytoskeleton.' },
    ],
  },
  {
    id: 'human-cytology',
    category: 'Human Cytology',
    title: 'Human Erythrocytes & Leukocytes',
    titleId: 'specimen-human-cytology-title',
    descId: 'specimen-human-cytology-desc',
    imgId: 'specimen-human-cytology-img-g7h8i9',
    description:
      'A Wright-stained peripheral blood smear displaying the biconcave morphology of erythrocytes alongside a segmented neutrophil, captured at 1000x magnification.',
    terms: [
      { word: 'Erythrocytes', definition: 'Red blood cells — the most abundant cell type in human blood, responsible for oxygen transport via hemoglobin.' },
      { word: 'Leukocytes', definition: 'White blood cells that form a critical component of the immune system, defending against pathogens.' },
      { word: 'Neutrophil', definition: 'The most common type of granulocyte, characterized by a multi-lobed nucleus and fine cytoplasmic granules.' },
    ],
  },
  {
    id: 'plant-xylem',
    category: 'Plant Histology',
    title: 'Xylem Vessel Elements',
    titleId: 'specimen-plant-xylem-title',
    descId: 'specimen-plant-xylem-desc',
    imgId: 'specimen-plant-xylem-img-j0k1l2',
    description:
      'A transverse section of Helianthus stem showing lignified xylem vessel elements with characteristic annular and spiral thickening patterns.',
    terms: [
      { word: 'Xylem', definition: 'Vascular tissue in plants that conducts water and dissolved minerals upward from the roots to the leaves.' },
      { word: 'Lignification', definition: 'The process by which lignin is deposited in cell walls, providing structural rigidity and waterproofing.' },
      { word: 'Helianthus', definition: 'The sunflower genus, commonly used in botanical histology for its well-defined vascular bundles.' },
    ],
  },
  {
    id: 'protist-paramecium',
    category: 'Protist Kingdom',
    title: 'Paramecium caudatum',
    titleId: 'specimen-protist-paramecium-title',
    descId: 'specimen-protist-paramecium-desc',
    imgId: 'specimen-protist-paramecium-img-m3n4o5',
    description:
      'A silver-stained specimen of Paramecium caudatum revealing the intricate network of cilia, contractile vacuoles, and the dual-nucleus system.',
    terms: [
      { word: 'Cilia', definition: 'Hair-like organelles projecting from the cell surface that beat in coordinated waves for locomotion and feeding.' },
      { word: 'Contractile Vacuole', definition: 'An organelle that expels excess water from freshwater protists to maintain osmotic balance.' },
      { word: 'Macronucleus', definition: 'The larger of two nuclei in ciliates, responsible for regulating daily metabolic and developmental functions.' },
    ],
  },
  {
    id: 'human-neuron',
    category: 'Human Cytology',
    title: 'Motor Neuron — Spinal Cord',
    titleId: 'specimen-human-neuron-title',
    descId: 'specimen-human-neuron-desc',
    imgId: 'specimen-human-neuron-img-p6q7r8',
    description:
      'A Golgi-stained section of the anterior horn of the spinal cord displaying a large multipolar motor neuron with extensive dendritic arborization.',
    terms: [
      { word: 'Multipolar Neuron', definition: 'A neuron with a single axon and multiple dendrites, the most common structural type in the vertebrate CNS.' },
      { word: 'Dendrites', definition: 'Branching extensions of a neuron that receive electrochemical signals from other neurons.' },
      { word: 'Golgi Stain', definition: 'A silver impregnation technique developed by Camillo Golgi that randomly labels a small fraction of neurons in their entirety.' },
    ],
  },
];

export default function Specimens() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="border-b border-ink/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-ink-faint mb-3">
            Specimen Archive
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-ink mb-4">
            The Specimen Hub
          </h1>
          <p className="font-sans text-sm text-ink-muted max-w-2xl leading-relaxed">
            A technical catalogue of histological and cytological preparations
            spanning three kingdoms of life. Select a specimen card to reveal
            scientific terminology and annotations.
          </p>
        </div>
      </section>

      {/* Specimen Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SPECIMENS.map((specimen, idx) => (
            <div
              key={specimen.id}
              className={idx % 2 === 1 ? 'md:mt-12' : ''}
            >
              <SpecimenCard specimen={specimen} />
            </div>
          ))}
        </div>
      </section>

      {/* Technique Note */}
      <section className="border-t border-ink/10 py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint mb-2">
            Technical Note
          </p>
          <p className="font-serif italic text-sm text-ink-muted">
            All specimens were prepared using standard histological protocols,
            including formalin fixation, paraffin embedding, and microtome
            sectioning at 5–10 &mu;m thickness. Staining methods are noted on
            individual specimen records.
          </p>
        </div>
      </section>
    </div>
  );
}