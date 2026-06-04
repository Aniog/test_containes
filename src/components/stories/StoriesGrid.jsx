import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";
import ScrollReveal from "../shared/ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

const stories = [
  {
    id: "kayapo",
    tribe: "Kayapó",
    region: "Amazon Basin, Brazil",
    quote: "The forest is not a resource. It is our ancestor.",
    body: "For the Kayapó people, the Amazon is not wilderness — it is a cultivated garden tended across millennia. Their intricate knowledge of medicinal plants, seasonal floods, and animal migration routes represents one of the most sophisticated ecological systems on Earth.",
    images: [
      {
        imgId: "kayapo-img-1-v1w2x3",
        descId: "kayapo-desc-1",
        descText: "Kayapo indigenous tribe Amazon Brazil portrait traditional face paint",
        ratio: "3x4",
        width: "600",
      },
      {
        imgId: "kayapo-img-2-y4z5a6",
        descId: "kayapo-desc-2",
        descText: "Amazon rainforest aerial view Brazil indigenous territory",
        ratio: "3x4",
        width: "600",
      },
      {
        imgId: "kayapo-img-3-b7c8d9",
        descId: "kayapo-desc-3",
        descText: "Kayapo ceremony ritual Amazon indigenous community",
        ratio: "3x4",
        width: "600",
      },
    ],
    color: "bg-forest-deep",
    accent: "text-forest-light",
  },
  {
    id: "sami",
    tribe: "Sámi",
    region: "Lapland, Northern Europe",
    quote: "We follow the reindeer. The reindeer follow the seasons. The seasons follow the stars.",
    body: "The Sámi people have herded reindeer across the Arctic tundra for thousands of years. Their language contains over 300 words for snow — each describing a different condition, a different danger, a different opportunity. Their survival depends on reading a landscape most would find unreadable.",
    images: [
      {
        imgId: "sami-img-1-e1f2g3",
        descId: "sami-desc-1",
        descText: "Sami indigenous people Lapland reindeer herding Arctic tundra",
        ratio: "3x4",
        width: "600",
      },
      {
        imgId: "sami-img-2-h4i5j6",
        descId: "sami-desc-2",
        descText: "Arctic tundra Lapland winter landscape snow reindeer migration",
        ratio: "3x4",
        width: "600",
      },
      {
        imgId: "sami-img-3-k7l8m9",
        descId: "sami-desc-3",
        descText: "Sami traditional clothing joik ceremony northern lights",
        ratio: "3x4",
        width: "600",
      },
    ],
    color: "bg-sky-deep",
    accent: "text-sky-light",
  },
  {
    id: "maasai",
    tribe: "Maasai",
    region: "Great Rift Valley, Kenya & Tanzania",
    quote: "The land does not belong to us. We belong to the land.",
    body: "The Maasai have coexisted with lions, elephants, and wildebeest on the East African savanna for centuries. Their semi-nomadic lifestyle, built around cattle herding, has shaped one of the most biodiverse ecosystems on the planet — a living testament to sustainable coexistence.",
    images: [
      {
        imgId: "maasai-img-1-n1o2p3",
        descId: "maasai-desc-1",
        descText: "Maasai warrior Kenya Tanzania portrait traditional red shuka",
        ratio: "3x4",
        width: "600",
      },
      {
        imgId: "maasai-img-2-q4r5s6",
        descId: "maasai-desc-2",
        descText: "African savanna Great Rift Valley Kenya wildlife landscape",
        ratio: "3x4",
        width: "600",
      },
      {
        imgId: "maasai-img-3-t7u8v9",
        descId: "maasai-desc-3",
        descText: "Maasai community cattle herding East Africa traditional life",
        ratio: "3x4",
        width: "600",
      },
    ],
    color: "bg-skin-deep",
    accent: "text-skin-light",
  },
  {
    id: "inuit",
    tribe: "Inuit",
    region: "Arctic Canada & Greenland",
    quote: "Ice is not empty. Ice is full of life, if you know how to listen.",
    body: "The Inuit have navigated the Arctic for over 4,000 years without maps, guided by wind patterns, star positions, and the texture of snow underfoot. As climate change reshapes their world, they are the first witnesses to a transformation that will eventually reach us all.",
    images: [
      {
        imgId: "inuit-img-1-w1x2y3",
        descId: "inuit-desc-1",
        descText: "Inuit indigenous people Arctic Canada Greenland portrait traditional",
        ratio: "3x4",
        width: "600",
      },
      {
        imgId: "inuit-img-2-z4a5b6",
        descId: "inuit-desc-2",
        descText: "Arctic ice landscape Greenland Canada glaciers climate",
        ratio: "3x4",
        width: "600",
      },
      {
        imgId: "inuit-img-3-c7d8e9",
        descId: "inuit-desc-3",
        descText: "Inuit hunting fishing Arctic traditional skills kayak",
        ratio: "3x4",
        width: "600",
      },
    ],
    color: "bg-forest-mid",
    accent: "text-forest-pale",
  },
];

function StoryCard({ story, index }) {
  const [imgIndex, setImgIndex] = useState(0);
  const isEven = index % 2 === 0;

  const nextImg = () => setImgIndex((p) => (p + 1) % story.images.length);
  const prevImg = () => setImgIndex((p) => (p - 1 + story.images.length) % story.images.length);

  const img = story.images[imgIndex];

  return (
    <ScrollReveal delay={0.05}>
      <article
        className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 rounded-3xl overflow-hidden shadow-lg`}
      >
        {/* Image panel */}
        <div className="relative w-full lg:w-1/2 aspect-[3/4] lg:aspect-auto lg:min-h-[560px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${story.id}-img-${imgIndex}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <img
                data-strk-img-id={img.imgId}
                data-strk-img={`[${img.descId}]`}
                data-strk-img-ratio={img.ratio}
                data-strk-img-width={img.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={img.descText}
                className="w-full h-full object-cover"
              />
              <span id={img.descId} className="hidden">{img.descText}</span>
            </motion.div>
          </AnimatePresence>

          {/* Image nav */}
          <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-3 z-10">
            <button
              onClick={prevImg}
              className="w-8 h-8 rounded-full bg-parchment/20 backdrop-blur-sm flex items-center justify-center text-parchment hover:bg-parchment/40 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {story.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setImgIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === imgIndex ? "w-4 h-1.5 bg-parchment" : "w-1.5 h-1.5 bg-parchment/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextImg}
              className="w-8 h-8 rounded-full bg-parchment/20 backdrop-blur-sm flex items-center justify-center text-parchment hover:bg-parchment/40 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Text panel */}
        <div className={`w-full lg:w-1/2 ${story.color} p-10 lg:p-14 flex flex-col justify-center`}>
          <span className={`font-inter text-xs uppercase tracking-[0.3em] ${story.accent} block mb-3`}>
            {story.region}
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl text-parchment font-bold mb-6 leading-tight">
            {story.tribe}
          </h2>
          <blockquote className={`font-dancing text-xl lg:text-2xl ${story.accent} italic leading-relaxed mb-8 border-l-2 border-current pl-5`}>
            "{story.quote}"
          </blockquote>
          <p className="font-inter text-sm text-parchment/70 leading-relaxed">
            {story.body}
          </p>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function StoriesGrid() {
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
              Four Communities
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl text-charcoal">
              Rooted in place,
              <br />
              <em className="text-forest-mid">shaped by land</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-12">
          {stories.map((story, i) => (
            <StoryCard key={story.id} story={story} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
