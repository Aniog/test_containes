import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { sceneDataUri } from "@/lib/placeholders";

const POSTS = [
  {
    id: "how-to-layer",
    title: "How to layer without looking like you're trying.",
    excerpt:
      "Three rules the editors actually follow — and the chains we reach for to break them.",
    image: sceneDataUri({ scene: "neck", palette: "amber", width: 1200, height: 800, id: "j-1" }),
    readTime: "4 min read",
    category: "Styling",
  },
  {
    id: "what-demi-fine",
    title: "What demi-fine actually means — and why we chose it.",
    excerpt:
      "The case for jewelry that's substantial enough to feel like an heirloom, accessible enough to wear on a Tuesday.",
    image: sceneDataUri({ scene: "earStack", palette: "taupe", width: 1200, height: 800, id: "j-2" }),
    readTime: "6 min read",
    category: "Materials",
  },
  {
    id: "gift-without-fail",
    title: "The gift that never misses — and why the box matters.",
    excerpt:
      "An honest look at the packaging decisions behind every Velmora piece, and how to choose for someone who has everything.",
    image: sceneDataUri({ scene: "modelEar", palette: "umber", width: 1200, height: 800, id: "j-3" }),
    readTime: "5 min read",
    category: "Gifting",
  },
  {
    id: "care-routine",
    title: "A two-minute care routine for plated jewelry.",
    excerpt:
      "Four small habits that keep your favorite pieces glowing through season after season.",
    image: sceneDataUri({ scene: "neck", palette: "umber", width: 1200, height: 800, id: "j-4" }),
    readTime: "3 min read",
    category: "Care",
  },
];

export default function Journal() {
  return (
    <>
      <section className="bg-bone pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="container-velmora text-center">
          <p className="eyebrow mb-4">The Journal</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-[1.05] text-ink">
            Quiet
            <span className="italic"> dispatches.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-ink-soft max-w-xl mx-auto">
            Styling notes, material essays, and behind-the-scenes from the studio.
          </p>
        </div>
      </section>

      <section className="bg-bone pb-24 md:pb-32">
        <div className="container-velmora">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {POSTS.map((post, idx) => (
              <article
                key={post.id}
                className={idx === 0 ? "md:col-span-2" : ""}
              >
                <Link
                  to={`/journal/${post.id}`}
                  className="group block"
                >
                  <div
                    className={`relative overflow-hidden bg-cream ${
                      idx === 0 ? "aspect-[16/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-soft-out group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-6 md:pt-8">
                    <div className="flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-ink-soft">
                      <span className="text-gold-deep">{post.category}</span>
                      <span className="text-line">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2
                      className={`mt-3 font-serif font-light text-ink leading-[1.1] ${
                        idx === 0 ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                      }`}
                    >
                      {post.title}
                    </h2>
                    <p className="mt-4 text-base text-ink-soft leading-relaxed max-w-2xl">
                      {post.excerpt}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-product text-ink font-medium border-b border-ink pb-1 group-hover:text-ink-soft transition-colors">
                      Read the essay
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}