import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { resolveImageUrl } from "@/lib/stockImages";

const TILES = [
  {
    slug: "earrings",
    title: "Earrings",
    subtitle: "Crystal cuffs, polished studs, filigree drops",
    img: "gold earrings editorial display warm jewelry",
    imgId: "cat-earrings-img",
  },
  {
    slug: "necklaces",
    title: "Necklaces",
    subtitle: "Floral crystals and delicate gold chains",
    img: "gold necklace pendant editorial warm display",
    imgId: "cat-necklaces-img",
  },
  {
    slug: "huggies",
    title: "Huggies",
    subtitle: "The everyday gold hoop, reimagined",
    img: "gold huggie hoop earrings editorial warm",
    imgId: "cat-huggies-img",
  },
];

// Resolve the final https URL for each tile so the bundle ships real
// images and no data:image/svg+xml placeholder.
TILES.forEach((t) => {
  t.imgUrl = resolveImageUrl(t.imgId);
});

export default function CategoryTiles() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="mb-10 md:mb-14 max-w-xl">
          <p className="eyebrow text-gold-deep mb-3">Shop by category</p>
          <h2 className="display-lg text-ink">Find your forever piece</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TILES.map((t) => {
            const titleId = `cat-${t.slug}-title`;
            const subtitleId = `cat-${t.slug}-subtitle`;
            return (
              <Link
                key={t.slug}
                to={`/shop?category=${t.slug}`}
                className="group relative block overflow-hidden aspect-[4/5] bg-ivory border border-line/70"
                id={`cat-tile-${t.slug}`}
              >
                <img
                  alt={t.title}
                  data-strk-img-id={t.imgId}
                  data-strk-img={`[${subtitleId}] [${titleId}] [categories-title] ${t.img}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src={t.imgUrl}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7 flex items-end justify-between">
                  <div>
                    <h3
                      id={titleId}
                      className="font-serif text-2xl md:text-[28px] text-cream leading-tight tracking-tight"
                    >
                      {t.title}
                    </h3>
                    <p
                      id={subtitleId}
                      className="text-cream/75 text-sm font-sans font-light mt-1.5 max-w-[80%]"
                    >
                      {t.subtitle}
                    </p>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-cream/95 text-ink flex items-center justify-center transition-transform duration-500 group-hover:rotate-45 shrink-0">
                    <ArrowUpRight strokeWidth={1.25} className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
        <span id="categories-title" className="sr-only">Shop by category</span>
      </div>
    </section>
  );
}
