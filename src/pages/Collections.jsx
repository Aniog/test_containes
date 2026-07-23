import { Link } from "react-router-dom";

const collections = [
  {
    name: "The Heritage Edit",
    description: "Timeless pieces inspired by vintage craftsmanship",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop&q=80",
    slug: "heritage",
  },
  {
    name: "The Modernist",
    description: "Clean lines, bold silhouettes, contemporary gold",
    image:
      "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&auto=format&fit=crop&q=80",
    slug: "modernist",
  },
  {
    name: "The Flora Series",
    description: "Botanical motifs in precious metal and crystal",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=80",
    slug: "flora",
  },
];

export default function Collections() {
  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-16">
          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-[#1C1917] font-medium">
            Collections
          </h1>
          <div className="w-12 h-px bg-[#B8943C] mx-auto mt-4" />
        </div>

        <div className="space-y-16">
          {collections.map((col, i) => (
            <div
              key={col.slug}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={`${i % 2 === 1 ? "md:col-start-2" : ""}`}>
                <div className="aspect-[4/5] bg-[#E5DED5] rounded-sm overflow-hidden">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h2 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-[#1C1917] font-medium">
                  {col.name}
                </h2>
                <p className="text-[#6B6358] mt-4 leading-relaxed">
                  {col.description}
                </p>
                <Link
                  to="/shop"
                  className="inline-block mt-6 text-sm tracking-[0.1em] uppercase text-[#B8943C] font-medium hover:text-[#D4B96A] transition-colors"
                >
                  Explore Collection &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}