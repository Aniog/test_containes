import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { ILLUSTRATIONS } from "@/components/illustrations/JewelryArt";

const POSTS = [
  {
    id: "stack-the-sphere",
    eyebrow: "Styling",
    title: "How to Stack the Golden Sphere",
    excerpt:
      "A short guide to layering the chunky huggies with our other pieces — the rules we break, and the ones we keep.",
    illustration: "sphereHuggies",
    date: "July 1, 2026",
  },
  {
    id: "care-guide",
    eyebrow: "Care",
    title: "Caring for Gold-Plated Jewelry",
    excerpt:
      "Five small habits that keep demi-fine pieces looking new for years. The list is shorter than you'd think.",
    illustration: "earCuff",
    date: "June 24, 2026",
  },
  {
    id: "atelier-portugal",
    eyebrow: "Behind the Scenes",
    title: "Notes from the Atelier in Porto",
    excerpt:
      "A morning with the family-run workshop that plates our 18K pieces by hand. Photos from the bench.",
    illustration: "floralNecklace",
    date: "June 12, 2026",
  },
];

const PostCard = ({ post }) => {
  const Illustration = ILLUSTRATIONS[post.illustration];
  return (
    <article className="group">
      <Link to="/journal" className="block">
        <div className="aspect-[4/5] bg-mocha overflow-hidden">
          {Illustration ? <Illustration /> : <div className="h-full w-full bg-mocha" />}
        </div>
        <div className="pt-6">
          <p className="text-[10px] uppercase tracking-eyebrow text-taupe mb-2">
            {post.eyebrow} · {post.date}
          </p>
          <h3 className="font-serif text-2xl md:text-3xl text-ink leading-snug group-hover:text-gold transition-colors">
            {post.title}
          </h3>
          <p className="mt-3 text-ink/70 leading-relaxed text-[15px] max-w-md">
            {post.excerpt}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-button text-ink border-b border-ink/30 group-hover:border-ink pb-1">
            Read more
            <ArrowRight size={12} strokeWidth={1.5} />
          </span>
        </div>
      </Link>
    </article>
  );
};

const JournalPage = () => {
  return (
    <main className="pt-20 md:pt-24 bg-ivory">
      <section className="border-b border-ink/10">
        <Container className="py-14 md:py-20 text-center">
          <p className="font-sans text-[10px] uppercase tracking-eyebrow text-taupe mb-4">
            The Journal
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-ink leading-[1.02]">
            Notes from the studio
          </h1>
        </Container>
      </section>
      <Section tone="ivory" size="lg">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {POSTS.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
};

export default JournalPage;
