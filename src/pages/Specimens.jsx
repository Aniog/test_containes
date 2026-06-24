import React, { useState } from 'react';
import { Info } from 'lucide-react';

const Specimens = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const specimens = [
    {
      id: 1,
      category: "Plant Histology",
      title: "Vascular Bundle Cross-Section",
      description: "Transverse section through a dicotyledonous stem revealing the arrangement of xylem and phloem tissues.",
      magnification: "100×",
      details: "The vascular bundle demonstrates the collateral arrangement characteristic of angiosperms, with xylem positioned centripetally and phloem centrifugally.",
      term: "xylem",
      termDef: "The water-conducting tissue of vascular plants, composed of tracheids and vessel elements.",
      image: "https://images.unsplash.com/photo-1618932260643-52ec2f0c6d66?w=800&q=80"
    },
    {
      id: 2,
      category: "Protists",
      title: "Amoeba proteus",
      description: "A freshwater amoeboid protist exhibiting pseudopodial locomotion and cytoplasmic streaming.",
      magnification: "400×",
      details: "The granular cytoplasm contains contractile vacuoles for osmoregulation and food vacuoles for digestion. The nucleus is clearly visible as a dense central structure.",
      term: "pseudopodia",
      termDef: "Temporary cytoplasmic projections used for locomotion and feeding in amoeboid organisms.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80"
    },
    {
      id: 3,
      category: "Human Cytology",
      title: "Epithelial Tissue",
      description: "Stratified squamous epithelium from human buccal mucosa demonstrating cellular morphology.",
      magnification: "400×",
      details: "The flattened, polygonal cells exhibit distinct nuclei and intercellular boundaries. This tissue type provides protection against mechanical stress and pathogens.",
      term: "epithelium",
      termDef: "A sheet of cells covering external surfaces or lining internal cavities, characterized by cellular polarity and basement membrane attachment.",
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80"
    },
    {
      id: 4,
      category: "Plant Histology",
      title: "Leaf Mesophyll",
      description: "Palisade and spongy mesophyll layers in a transverse section of a typical dicot leaf.",
      magnification: "200×",
      details: "The palisade mesophyll consists of elongated, chloroplast-rich cells optimized for photosynthesis. The spongy mesophyll below contains air spaces facilitating gas exchange.",
      term: "chloroplast",
      termDef: "Organelles containing chlorophyll responsible for photosynthesis in plant cells.",
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=800&q=80"
    },
    {
      id: 5,
      category: "Protists",
      title: "Paramecium caudatum",
      description: "A ciliated protozoan demonstrating the characteristic slipper-shaped body and oral groove.",
      magnification: "400×",
      details: "The pellicle exhibits metachronal ciliary waves. The macronucleus and micronucleus are visible, along with the contractile vacuoles at each pole.",
      term: "cilia",
      termDef: "Hair-like projections on cell surfaces that beat rhythmically to produce locomotion or fluid movement.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80"
    },
    {
      id: 6,
      category: "Human Cytology",
      title: "Blood Smear",
      description: "Peripheral blood film showing erythrocytes, leukocytes, and platelets in their native proportions.",
      magnification: "1000× (Oil Immersion)",
      details: "Erythrocytes appear as biconcave discs without nuclei. Neutrophils, lymphocytes, and monocytes are distinguishable by nuclear morphology and cytoplasmic characteristics.",
      term: "erythrocyte",
      termDef: "Red blood cells responsible for oxygen transport, lacking nuclei in mammals to maximize hemoglobin capacity.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-border-gray">
            <span className="text-sm font-medium tracking-wide text-text-gray">ARCHIVAL COLLECTION</span>
          </div>
          <h2 className="mb-6">Specimen Hub</h2>
          <p className="text-xl text-text-charcoal">
            Technical documentation of cellular structures across three kingdoms of life. 
            Each preparation represents decades of refined histological technique.
          </p>
        </div>

        {/* Z-Pattern Grid */}
        <div className="z-grid">
          {specimens.map((specimen, index) => (
            <div 
              key={specimen.id} 
              className={`specimen-card ${index % 2 === 1 ? 'md:mt-12' : ''}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-black">
                <img 
                  src={specimen.image} 
                  alt={specimen.title}
                  className="w-full h-full object-cover micrograph"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs tracking-[2px] uppercase text-text-gray font-medium">
                    {specimen.category}
                  </span>
                  <span className="text-sm font-mono text-text-charcoal">
                    {specimen.magnification}
                  </span>
                </div>

                <h3 className="mb-4">{specimen.title}</h3>
                
                <p className="text-text-charcoal mb-6 leading-relaxed">
                  {specimen.description}
                </p>

                <div className="pt-6 border-t border-border-gray">
                  <p className="text-sm text-text-charcoal mb-4 leading-relaxed">
                    {specimen.details}
                  </p>

                  {/* Glassmorphism Tooltip for Scientific Terminology */}
                  <div className="tooltip inline-block">
                    <button 
                      className="glass-button text-sm py-2 px-4 flex items-center gap-2"
                      onMouseEnter={() => setActiveTooltip(specimen.id)}
                      onMouseLeave={() => setActiveTooltip(null)}
                    >
                      <Info className="w-4 h-4" />
                      Define: <span className="font-serif italic">{specimen.term}</span>
                    </button>
                    <div className="tooltip-content">
                      {specimen.termDef}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specimens;