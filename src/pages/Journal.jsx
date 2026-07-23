import { Link } from "react-router-dom";
import Container from "@/components/ui/Container";
import StrkImageLoader from "@/components/ui/StrkImageLoader";

const posts = [
  {
    id: "how-to-layer",
    title: "How to layer necklaces without the tangle",
    excerpt: "A simple, four-piece formula for an effortless stack.",
    date: "July 14, 2026",
    query: "three delicate gold necklaces layered on a woman, soft portrait",
  },
  {
    id: "everyday-huggies",
    title: "The case for the everyday huggie",
    excerpt: "Why one pair of gold huggies is all you really need.",
    date: "June 28, 2026",
    query: "close up of woman wearing gold huggie earrings, natural light",
  },
  {
    id: "care-101",
    title: "Jewelry care, properly",
    excerpt: "Five small habits that keep demi-fine pieces looking new.",
    date: "June 04, 2026",
    query: "gold jewelry in a velvet pouch on linen, soft still life",
  },
];

export default function Journal() {
  return (
    <>
      <section className="pt-28 sm:pt-36 pb-16 bg-ivory">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow mb-4">The Journal</p>
            <h1 id="journal-title" className="font-serif text-5xl sm:text-6xl lg:text-7xl text-espresso font-light leading-[1.02]">
              Stories & guides
            </h1>
            <p id="journal-subtitle" className="mt-5 text-sm sm:text-base text-taupe">
              Notes on jewelry, gifting and the small rituals in between.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-24 bg-ivory">
        <Container>
          <StrkImageLoader className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
            {posts.map((p) => (
              <article key={p.id} className="group">
                <Link to="#" className="block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-ivory-200">
                    <div
                      className="absolute inset-0 transition-transform duration-[1200ms] ease-smooth group-hover:scale-105"
                      data-strk-bg-id={`journal-${p.id}`}
                      data-strk-bg={p.query}
                      data-strk-bg-ratio="4x5"
                      data-strk-bg-width="700"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-[10px] uppercase tracking-widest text-taupe">
                      {p.date}
                    </p>
                    <h2 className="mt-2 font-serif text-2xl text-espresso font-light leading-snug group-hover:text-gold-dark transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-2 text-sm text-taupe font-light">{p.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </StrkImageLoader>
        </Container>
      </section>
    </>
  );
}
