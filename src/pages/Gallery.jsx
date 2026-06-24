import React, { useState } from 'react';
import { X, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [selectedSlide, setSelectedSlide] = useState(null);

  const slides = [
    {
      id: 1,
      specimenId: "MC-1897-001",
      title: "Radiolarian Skeleton",
      magnification: "400×",
      collector: "E. Haeckel, Naples",
      date: "March 1897",
      notes: "Siliceous lattice structure of a polycystine radiolarian. The geometric regularity of the skeleton demonstrates the remarkable precision of biomineralization processes in single-celled organisms.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=90"
    },
    {
      id: 2,
      specimenId: "MC-1902-014",
      title: "Diatom Frustule",
      magnification: "1000×",
      collector: "F. Hustedt, Helgoland",
      date: "June 1902",
      notes: "Valve view of a centric diatom showing radial symmetry and areolae arrangement. The silica cell wall exhibits species-specific ornamentation used for taxonomic identification.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=90"
    },
    {
      id: 3,
      specimenId: "MC-1911-033",
      title: "Mitotic Chromosomes",
      magnification: "1000× (Oil)",
      collector: "W. Flemming, Kiel",
      date: "September 1911",
      notes: "Metaphase chromosomes from plant root tip meristem. The condensed chromatin reveals the characteristic morphology used in karyotype analysis and genetic studies.",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200&q=90"
    },
    {
      id: 4,
      specimenId: "MC-1923-007",
      title: "Volvox Colony",
      magnification: "200×",
      collector: "A. Pascher, Prague",
      date: "April 1923",
      notes: "A colonial green alga demonstrating cellular differentiation. Peripheral cells bear flagella for motility while interior cells specialize in reproduction.",
      image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=1200&q=90"
    },
    {
      id: 5,
      specimenId: "MC-1934-022",
      title: "Neuron Golgi Stain",
      magnification: "400×",
      collector: "R. Cajal, Madrid",
      date: "November 1934",
      notes: "Pyramidal neuron from cerebral cortex stained by Golgi's silver chromate method. The impregnation reveals the complete dendritic arborization and axonal projection.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=90"
    },
    {
      id: 6,
      specimenId: "MC-1948-019",
      title: "Pollen Grain",
      magnification: "800×",
      collector: "G. Erdtman, Stockholm",
      date: "August 1948",
      notes: "Acetolyzed pollen of a temperate angiosperm. Exine sculpturing patterns are diagnostic characters in palynology and provide evidence for plant phylogeny.",
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1200&q=90"
    },
    {
      id: 7,
      specimenId: "MC-1956-041",
      title: "Bacterial Colonies",
      magnification: "100×",
      collector: "J. Lederberg, Wisconsin",
      date: "February 1956",
      notes: "Streak plate of Escherichia coli demonstrating colonial morphology. Individual colonies arise from single cells, enabling isolation of pure cultures.",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=1200&q=90"
    },
    {
      id: 8,
      specimenId: "MC-1967-028",
      title: "Muscle Sarcomere",
      magnification: "2000× (EM)",
      collector: "H. Huxley, Cambridge",
      date: "October 1967",
      notes: "Electron micrograph of striated muscle showing the A-band, I-band, and Z-line. The sliding filament mechanism of contraction is visible in the overlapping actin-myosin arrays.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=90"
    },
    {
      id: 9,
      specimenId: "MC-1979-015",
      title: "Foraminiferan Test",
      magnification: "100×",
      collector: "J.J. Lee, New York",
      date: "May 1979",
      notes: "Calcareous test of a benthic foraminiferan. Chamber arrangement and wall composition provide critical data for paleoceanographic reconstruction.",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=1200&q=90"
    },
    {
      id: 10,
      specimenId: "MC-1988-009",
      title: "Chloroplast Ultrastructure",
      magnification: "5000× (EM)",
      collector: "J. Whatley, Oxford",
      date: "March 1988",
      notes: "Transmission electron micrograph revealing thylakoid membranes organized into grana. The internal membrane system is the site of photosynthetic electron transport.",
      image: "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=1200&q=90"
    },
    {
      id: 11,
      specimenId: "MC-1995-037",
      title: "Drosophila Salivary Gland",
      magnification: "400×",
      collector: "M. Ashburner, Cambridge",
      date: "July 1995",
      notes: "Polytene chromosomes from third instar larva. The banding pattern represents regions of differential chromatin condensation and is a model for gene regulation studies.",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&q=90"
    },
    {
      id: 12,
      specimenId: "MC-2004-003",
      title: "Diatom Chain",
      magnification: "200×",
      collector: "D. Mann, Edinburgh",
      date: "January 2004",
      notes: "Colonial chain of a pennate diatom species. The raphe system visible on each valve enables gliding motility across substrates.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=90"
    }
  ];

  const openLightbox = (slide) => {
    setSelectedSlide(slide);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedSlide(null);
    document.body.style.overflow = 'visible';
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-block px-3 py-1 mb-4 rounded-full bg-white border border-border-gray">
            <span className="text-sm font-medium tracking-wide text-text-gray">DIGITAL ARCHIVE</span>
          </div>
          <h2 className="mb-6">Interactive Slide Gallery</h2>
          <p className="text-xl text-text-charcoal">
            High-resolution preparations from the institutional collection. 
            Select any slide to examine specimen metadata and collector's observations.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {slides.map((slide) => (
            <div 
              key={slide.id} 
              className="masonry-item"
              onClick={() => openLightbox(slide)}
            >
              <div className="glass-card overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden bg-black">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover micrograph transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="text-white/60 text-xs font-mono tracking-widest mb-1">
                      {slide.specimenId}
                    </div>
                    <div className="text-white font-serif text-lg">
                      {slide.title}
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between text-sm">
                  <span className="text-text-gray font-mono">{slide.magnification}</span>
                  <span className="text-text-charcoal flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" /> View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Framer Motion */}
      <AnimatePresence>
        {selectedSlide && (
          <div 
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <motion.div 
              className="lightbox-content"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Section */}
              <div className="relative flex-1 bg-black min-h-[300px] lg:min-h-[500px]">
                <img 
                  src={selectedSlide.image} 
                  alt={selectedSlide.title}
                  className="w-full h-full object-contain micrograph"
                />
                <button 
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 glass-button p-3 rounded-full"
                  aria-label="Close lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Metadata Sidebar */}
              <div className="w-full lg:w-96 p-8 lg:p-10 flex flex-col">
                <div className="mb-auto">
                  <div className="font-mono text-xs tracking-[3px] text-text-gray mb-2">
                    {selectedSlide.specimenId}
                  </div>
                  
                  <h3 className="mb-6 pr-8">{selectedSlide.title}</h3>

                  <div className="space-y-6">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-text-gray mb-1">Magnification</div>
                      <div className="font-mono text-lg">{selectedSlide.magnification}</div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-widest text-text-gray mb-1">Collected By</div>
                      <div className="text-lg">{selectedSlide.collector}</div>
                    </div>

                    <div>
                      <div className="text-xs uppercase tracking-widest text-text-gray mb-1">Date</div>
                      <div className="text-lg">{selectedSlide.date}</div>
                    </div>

                    <div className="pt-4 border-t border-border-gray">
                      <div className="text-xs uppercase tracking-widest text-text-gray mb-3">Collector's Notes</div>
                      <p className="text-text-charcoal leading-relaxed">
                        {selectedSlide.notes}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border-gray">
                  <button 
                    onClick={closeLightbox}
                    className="glass-button w-full justify-center"
                  >
                    Close Archive
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;