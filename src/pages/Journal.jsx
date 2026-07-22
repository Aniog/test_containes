import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { ImageHelper } from "@strikingly/sdk";
import strkImgConfig from "@/strk-img-config.json";

const articles = [
  {
    id: "care-guide",
    eyebrow: "Care guide",
    title: "How to make your gold-plated jewelry last",
    excerpt:
      "A short, honest guide to caring for demi-fine pieces — from our atelier bench to your everyday routine.",
    minutes: 4,
    featured: true,
  },
  {
    id: "stack-101",
    eyebrow: "Style",
    title: "The art of the quiet stack",
    excerpt: "Three rules our designers follow when layering demi-fine pieces.",
    minutes: 3,
  },
  {
    id: "gold-explained",
    eyebrow: "Materials",
    title: "Heavy-plated, explained",
    excerpt: "What '18K gold plated' actually means — and why we plate 2.5x standard.",
    minutes: 5,
  },
  {
    id: "size-guide",
    eyebrow: "Guide",
    title: "Finding your huggie size",
    excerpt: "Our atelier's rule of thumb for choosing the right hoop for your lobe.",
    minutes: 2,
  },
  {
    id: "sustainability",
    eyebrow: "Sustainability",
    title: "Small batches, slow craft",
    excerpt: "Why we still cast and finish every piece by hand, in our Lisbon studio.",
    minutes: 6,
  },
  {
    id: "gifting",
    eyebrow: "Gifting",
    title: "A gift that says: I know you",
    excerpt: "How to choose a piece that lands — for a sister, a friend, yourself.",
    minutes: 3,
  },
];

export default function Journal() {
  const ref = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!ref.current) return;
    return ImageHelper.loadImages(strkImgConfig, ref.current);
  }, []);

  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <main ref={ref} className="bg-cream min-h-screen">
      <section className="bg-ivory pt-32 md:pt-40 pb-12 md:pb-16">
        <div className="container-editorial">
          <p className="eyebrow mb-5">The Velmora Journal</p>
          <h1 className="display-1 text-balance max-w-3xl">
            Notes on quiet luxury, craft, and the pieces we live in.
          </h1>
        </div>
      </section>

      {/* Featured */}
      {featured && (
        <section className="bg-cream py-12 md:py-20">
          <div className="container-editorial">
            <Link
              to="#"
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              <div className="lg:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <img
                    alt={featured.title}
                    data-strk-img-id={`journal-${featured.id}`}
                    data-strk-img={`[journal-${featured.id}-title] [journal-${featured.id}-eyebrow]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <p
                  id={`journal-${featured.id}-eyebrow`}
                  className="eyebrow mb-4"
                >
                  {featured.eyebrow} · {featured.minutes} min read
                </p>
                <h2
                  id={`journal-${featured.id}-title`}
                  className="display-2 text-balance group-hover:text-accent-deep transition-colors"
                >
                  {featured.title}
                </h2>
                <p className="mt-5 text-[15px] leading-[1.85] text-ink-muted font-sans font-light">
                  {featured.excerpt}
                </p>
                <span className="mt-7 inline-flex items-center gap-2 text-[11px] uppercase tracking-widest-2 text-ink border-b border-ink pb-1">
                  Read article
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.6} />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Rest */}
      <section className="bg-cream pb-24 md:pb-32">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {rest.map((a) => (
              <Link
                to="#"
                key={a.id}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-sand mb-5">
                  <img
                    alt={a.title}
                    data-strk-img-id={`journal-${a.id}-thumb`}
                    data-strk-img={`[journal-${a.id}-title] [journal-${a.id}-eyebrow] editorial`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <p
                  id={`journal-${a.id}-eyebrow`}
                  className="eyebrow mb-3"
                >
                  {a.eyebrow} · {a.minutes} min
                </p>
                <h3
                  id={`journal-${a.id}-title`}
                  className="font-serif text-2xl md:text-[26px] text-ink leading-[1.2] group-hover:text-accent-deep transition-colors"
                >
                  {a.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-ink-muted font-sans font-light">
                  {a.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
