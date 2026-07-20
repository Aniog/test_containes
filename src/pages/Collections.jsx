import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: "signature",
    name: "The Signature Collection",
    desc: "Our most iconic pieces, designed for everyday luxury.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=900&q=85",
    slug: "signature",
  },
  {
    id: "bridal",
    name: "The Bridal Edit",
    desc: "Heirloom-worthy pieces for your most special moments.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=85",
    slug: "bridal",
  },
  {
    id: "gift",
    name: "The Gift Collection",
    desc: "Beautifully boxed sets, ready to give.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=900&q=85",
    slug: "gift",
  },
];

export default function Collections() {
  return (
    <div className="pt-24 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="section-title">Collections</h1>
          <p className="section-subtitle">
            Curated edits for every occasion
          </p>
        </div>

        <div className="space-y-12 md:space-y-20">
          {collections.map((col, index) => (
            <div
              key={col.id}
              className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                index % 2 === 1 ? "md:direction-rtl" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="aspect-[4/5] bg-velmora-cream overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <h2 className="font-serif text-2xl md:text-3xl tracking-wider uppercase text-velmora-ebony">
                  {col.name}
                </h2>
                <p className="text-sm text-velmora-pewter mt-4 leading-relaxed font-sans">
                  {col.desc}
                </p>
                <Link
                  to={`/shop?collection=${col.slug}`}
                  className="mt-6 inline-flex items-center gap-2 btn-outline"
                >
                  View Collection
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}