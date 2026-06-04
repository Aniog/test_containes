import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ScrollReveal from "../shared/ScrollReveal";

const specimens = [
  {
    id: "dna-fern",
    category: "Fractal Geometry",
    title: "The Fern Spiral",
    subtitle: "Pteridium aquilinum",
    finding: "Fibonacci sequence",
    desc: "The unfurling frond of a fern follows the exact same mathematical spiral encoded in nautilus shells, galaxy arms, and the double helix of DNA. Nature uses one equation, written in infinite variations.",
    imgId: "lab-fern-spiral-o1p2q3",
    descId: "lab-fern-desc",
    descText: "fern frond spiral macro photography fibonacci sequence close up green",
    ratio: "1x1",
    width: "700",
    size: "large",
    color: "bg-forest-pale",
    labelColor: "text-forest-deep",
  },
  {
    id: "cell-wall",
    category: "Cellular Architecture",
    title: "The Cell Wall",
    subtitle: "Quercus robur",
    finding: "Hexagonal packing",
    desc: "Oak cell walls, viewed under electron microscopy, reveal the same hexagonal packing structure found in honeycombs and graphene — nature's most efficient use of space.",
    imgId: "lab-cell-wall-r4s5t6",
    descId: "lab-cell-desc",
    descText: "plant cell wall microscopy hexagonal structure oak wood cross section",
    ratio: "1x1",
    width: "500",
    size: "small",
    color: "bg-sky-pale",
    labelColor: "text-sky-deep",
  },
  {
    id: "mycelium",
    category: "Network Systems",
    title: "The Wood Wide Web",
    subtitle: "Mycorrhizal network",
    finding: "Neural mirroring",
    desc: "Mycelium networks beneath a forest floor are structurally indistinguishable from human neural networks. The forest thinks — it just thinks slowly.",
    imgId: "lab-mycelium-u7v8w9",
    descId: "lab-mycelium-desc",
    descText: "mycelium fungal network macro photography white threads forest floor",
    ratio: "1x1",
    width: "500",
    size: "small",
    color: "bg-mist",
    labelColor: "text-charcoal",
  },
  {
    id: "pollen",
    category: "Micro-Architecture",
    title: "Pollen Geometry",
    subtitle: "Helianthus annuus",
    finding: "Icosahedral symmetry",
    desc: "Sunflower pollen grains, magnified 500x, reveal perfect icosahedral symmetry — the same geometric form used in viral capsids and geodesic domes. Beauty and function are the same thing.",
    imgId: "lab-pollen-x1y2z3",
    descId: "lab-pollen-desc",
    descText: "pollen grain macro photography electron microscope sunflower geometric symmetry",
    ratio: "1x1",
    width: "700",
    size: "large",
    color: "bg-skin-light",
    labelColor: "text-skin-deep",
  },
  {
    id: "leaf-veins",
    category: "Vascular Systems",
    title: "The Leaf Network",
    subtitle: "Acer saccharum",
    finding: "Optimal transport",
    desc: "The vein network of a maple leaf solves the same optimization problem as city road planners and internet routing algorithms — maximum coverage with minimum material.",
    imgId: "lab-leaf-veins-a4b5c6",
    descId: "lab-leaf-desc",
    descText: "leaf veins macro photography backlit maple transparent network pattern",
    ratio: "4x3",
    width: "700",
    size: "wide",
    color: "bg-forest-pale",
    labelColor: "text-forest-deep",
  },
  {
    id: "crystal",
    category: "Mineral Patterns",
    title: "Ice Crystal",
    subtitle: "H₂O at −15°C",
    finding: "Six-fold symmetry",
    desc: "Every snowflake is unique, yet every snowflake has exactly six sides. The molecular geometry of water imposes a universal law on infinite variation — a metaphor for life itself.",
    imgId: "lab-ice-crystal-d7e8f9",
    descId: "lab-crystal-desc",
    descText: "snowflake ice crystal macro photography six fold symmetry close up",
    ratio: "1x1",
    width: "500",
    size: "small",
    color: "bg-sky-pale",
    labelColor: "text-sky-deep",
  },
];

function SpecimenCard({ item, delay }) {
  const [hovered, setHovered] = useState(false);

  const sizeClass =
    item.size === "large"
      ? "md:col-span-2 md:row-span-2"
      : item.size === "wide"
      ? "md:col-span-2"
      : "";

  return (
    <ScrollReveal delay={delay} className={sizeClass}>
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className={`${item.color} rounded-2xl overflow-hidden relative group h-full min-h-[280px]`}
      >
        {/* Image */}
        <div className="absolute inset-0">
          <motion.img
            data-strk-img-id={item.imgId}
            data-strk-img={`[${item.descId}]`}
            data-strk-img-ratio={item.ratio}
            data-strk-img-width={item.width}
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt={item.title}
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full object-cover"
          />
          <span id={item.descId} className="hidden">{item.descText}</span>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`font-inter text-xs uppercase tracking-widest ${item.labelColor} bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full`}>
            {item.category}
          </span>
        </div>

        {/* Finding badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="font-inter text-xs text-parchment/80 bg-charcoal/40 backdrop-blur-sm px-3 py-1 rounded-full">
            {item.finding}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <p className="font-inter text-xs text-parchment/60 italic mb-1">
            {item.subtitle}
          </p>
          <h3 className="font-playfair text-2xl text-parchment font-semibold mb-2">
            {item.title}
          </h3>

          <AnimatePresence>
            {hovered && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="font-inter text-sm text-parchment/80 leading-relaxed overflow-hidden"
              >
                {item.desc}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

export default function LabGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
    return cleanup;
  }, []);

  return (
    <section ref={containerRef} className="py-20 lg:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-inter text-xs uppercase tracking-[0.3em] text-forest-mid block mb-4">
              Six Specimens
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl text-charcoal mb-4">
              Nature's hidden
              <br />
              <em className="text-forest-mid">architecture</em>
            </h2>
            <p className="font-inter text-sm text-charcoal/50 max-w-lg mx-auto leading-relaxed">
              Hover over each specimen to reveal the scientific finding.
              Every pattern here exists at every scale — from the microscopic to the cosmic.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-[280px]">
          {specimens.map((item, i) => (
            <SpecimenCard key={item.id} item={item} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}
