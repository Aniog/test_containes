import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const collections = [
  {
    id: "everyday-essentials",
    name: "Everyday Essentials",
    description: "Minimal, versatile pieces designed to be worn every single day.",
    query: "minimal gold jewelry everyday essentials",
  },
  {
    id: "evening-edit",
    name: "The Evening Edit",
    description: "Statement pieces for nights that deserve to be remembered.",
    query: "elegant evening gold jewelry dark background",
  },
  {
    id: "gift-collection",
    name: "Gift Collection",
    description: "Beautifully boxed sets that make gifting effortless.",
    query: "luxury jewelry gift box set gold",
  },
  {
    id: "new-arrivals",
    name: "New Arrivals",
    description: "The latest designs fresh from our studio.",
    query: "new gold jewelry collection modern elegant",
  },
];

export default function CollectionsPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-20">
      <div className="max-w-[1400px] mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="py-10 md:py-14 text-center">
          <p className="text-velmora-gold text-xs tracking-[0.3em] uppercase mb-3">
            Curated for You
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-velmora-cream font-light">
            Collections
          </h1>
          <div className="w-16 h-px bg-velmora-gold mx-auto mt-5" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
          {collections.map((col) => (
            <Link
              key={col.id}
              to={`/shop`}
              className="group relative aspect-[16/9] overflow-hidden"
            >
              <img
                data-strk-img-id={`collection-${col.id}`}
                data-strk-img={`[collection-name-${col.id}] [collection-desc-${col.id}] gold jewelry`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={col.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2
                  id={`collection-name-${col.id}`}
                  className="font-serif text-2xl md:text-3xl text-velmora-cream tracking-[0.06em] mb-2"
                >
                  {col.name}
                </h2>
                <p
                  id={`collection-desc-${col.id}`}
                  className="text-velmora-text-secondary text-sm max-w-sm"
                >
                  {col.description}
                </p>
                <span className="inline-block mt-4 text-xs tracking-[0.15em] uppercase text-velmora-gold border-b border-velmora-gold pb-0.5 group-hover:border-velmora-gold-light group-hover:text-velmora-gold-light transition-colors">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
