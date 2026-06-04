import { useRef, useEffect } from "react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ScrollReveal from "../shared/ScrollReveal";

const parallels = [
  {
    id: "roots-veins",
    human: "Blood vessels branch through the body like rivers through a delta.",
    nature: "Tree roots mirror the same fractal geometry underground.",
    humanImgId: "parallel-blood-vessels-x1y2z3",
    natureImgId: "parallel-tree-roots-a4b5c6",
    humanDescId: "parallel-human-desc-roots",
    natureDescId: "parallel-nature-desc-roots",
    humanDescText: "blood vessels branching fractal pattern macro photography",
    natureDescText: "tree roots branching underground fractal pattern macro photography",
  },
  {
    id: "lungs-forest",
    human: "The lungs expand and contract — breathing the world in.",
    nature: "A forest canopy breathes oxygen into the sky.",
    humanImgId: "parallel-lungs-d7e8f9",
    natureImgId: "parallel-canopy-g1h2i3",
    humanDescId: "parallel-human-desc-lungs",
    natureDescId: "parallel-nature-desc-lungs",
    humanDescText: "human lungs anatomy branching airways macro photography",
    natureDescText: "forest canopy aerial view green trees breathing nature",
  },
  {
    id: "fingerprint-sand",
    human: "Every fingerprint is a unique landscape, never repeated.",
    nature: "Wind sculpts sand into ridges — the earth's own fingerprint.",
    humanImgId: "parallel-fingerprint-j4k5l6",
    natureImgId: "parallel-sand-m7n8o9",
    humanDescId: "parallel-human-desc-finger",
    natureDescId: "parallel-nature-desc-finger",
    humanDescText: "fingerprint macro photography close up ridges texture",
    natureDescText: "sand dunes aerial view ridges patterns desert texture",
  },
];

export default function ParallelSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <section ref={containerRef} className="py-24 lg:py-36 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-forest-mid block mb-4">
              The Parallels
            </span>
            <h2 className="font-playfair text-4xl lg:text-6xl text-charcoal leading-tight">
              One pattern,
              <br />
              <em className="text-forest-mid">two worlds</em>
            </h2>
            <p className="font-inter text-base text-charcoal/60 mt-6 max-w-xl mx-auto leading-relaxed">
              Nature does not imitate us — we imitate it. The same geometries
              that govern galaxies govern the cells in your body.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-24">
          {parallels.map((item, i) => (
            <ScrollReveal key={item.id} delay={0.1}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-6 lg:gap-10 items-center`}
              >
                {/* Human image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative group">
                  <img
                    data-strk-img-id={item.humanImgId}
                    data-strk-img={`[${item.humanDescId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.human}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span id={item.humanDescId} className="hidden">
                    {item.humanDescText}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="font-inter text-xs uppercase tracking-widest text-skin-light/80">
                      Human
                    </span>
                  </div>
                </div>

                {/* Text bridge */}
                <div className="w-full lg:w-auto lg:min-w-[200px] flex flex-col items-center gap-4 py-4">
                  <div className="w-px h-12 bg-forest-mid/30 hidden lg:block" />
                  <div className="w-8 h-8 rounded-full border-2 border-forest-mid/40 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-skin-warm" />
                  </div>
                  <div className="w-px h-12 bg-forest-mid/30 hidden lg:block" />
                  <div className="lg:hidden w-12 h-px bg-forest-mid/30" />
                </div>

                {/* Nature image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative group">
                  <img
                    data-strk-img-id={item.natureImgId}
                    data-strk-img={`[${item.natureDescId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.nature}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span id={item.natureDescId} className="hidden">
                    {item.natureDescText}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/50 to-transparent" />
                  <div className="absolute bottom-5 left-5">
                    <span className="font-inter text-xs uppercase tracking-widest text-forest-light/80">
                      Nature
                    </span>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="mt-6 text-center max-w-2xl mx-auto">
                <p className="font-dancing text-xl text-forest-mid italic leading-relaxed">
                  "{item.human}"
                </p>
                <p className="font-inter text-sm text-charcoal/50 mt-2">
                  {item.nature}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
