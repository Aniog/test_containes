import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "@/components/ui/Container.jsx";
import { homeImagery } from "@/data/products.js";

const COLLECTIONS = [
  {
    id: "earrings",
    name: "Earrings",
    blurb: "Studs, huggies, and drops — for every ear, every day.",
    illo: homeImagery.categories.earrings,
  },
  {
    id: "necklaces",
    name: "Necklaces",
    blurb: "Layered or solo. Pendants, chains, and signature pieces.",
    illo: homeImagery.categories.necklaces,
  },
  {
    id: "huggies",
    name: "Huggies",
    blurb: "Our most-loved silhouettes. Sleek, sculptural, forever.",
    illo: homeImagery.categories.huggies,
  },
];

const CollectionsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-cream pt-32 pb-12">
        <Container>
          <p className="eyebrow">Collections</p>
          <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
            The <span className="italic font-light">edit</span>
          </h1>
        </Container>
      </section>
      <section className="bg-cream pb-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {COLLECTIONS.map((c) => (
              <button
                key={c.id}
                onClick={() => navigate(`/shop?cat=${c.id}`)}
                className="group text-left"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-ink">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                    {c.illo}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h2 className="font-serif text-3xl text-cream">{c.name}</h2>
                    <p className="mt-1 font-sans text-[0.9rem] text-cream/80">{c.blurb}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CollectionsPage;
