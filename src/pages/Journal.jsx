import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

const POSTS = [
  {
    id: "layering-101",
    title: "Layering, quietly: three necklaces that always work",
    excerpt:
      "The trick to a layered look that doesn't try too hard? Edit, edit, edit. Our three-step formula for everyday layering.",
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=85",
    tag: "Style Notes",
    readTime: "3 min",
  },
  {
    id: "care-guide",
    title: "How to make demi-fine last",
    excerpt:
      "A small ritual, repeated. Five habits that will keep your gold plated pieces glowing for years.",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=85",
    tag: "Care",
    readTime: "4 min",
  },
  {
    id: "gifting-edit",
    title: "The gift that doesn't feel like a gift",
    excerpt:
      "When you want to mark a moment without the show — our quiet, considered edit for the people you'd give anything to.",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=85",
    tag: "Gifting",
    readTime: "5 min",
  },
];

export default function Journal() {
  return (
    <main className="pt-32 pb-24">
      <section className="pb-12 md:pb-20">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>The Velmora Journal</Eyebrow>
            <h1 className="mt-4 font-serif font-light text-5xl sm:text-6xl md:text-7xl leading-[1.05] tracking-tight text-[var(--color-ink)]">
              Stories from the studio.
            </h1>
            <p className="mt-7 text-lg text-[var(--color-stone)] leading-relaxed max-w-xl">
              Quiet reads on style, care, and the small rituals behind a life well worn.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {POSTS.map((p) => (
              <li key={p.id}>
                <article className="group flex flex-col">
                  <Link to="#" className="block relative overflow-hidden bg-[var(--color-cream)] aspect-[4/5]">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="pt-5">
                    <div className="flex items-center gap-3 text-[0.65rem] uppercase tracking-eyebrow text-[var(--color-gold-deep)] font-medium">
                      <span>{p.tag}</span>
                      <span className="text-[var(--color-stone)]">·</span>
                      <span className="text-[var(--color-stone)]">{p.readTime} read</span>
                    </div>
                    <h2 className="mt-3 font-serif text-2xl text-[var(--color-ink)] leading-snug">
                      <Link to="#" className="hover:text-[var(--color-gold-deep)] transition-colors">
                        {p.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm text-[var(--color-stone)] leading-relaxed">{p.excerpt}</p>
                    <Link
                      to="#"
                      className="mt-5 inline-flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)] link-underline"
                    >
                      Read
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}