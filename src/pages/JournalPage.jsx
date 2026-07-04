import React from "react";
import Container from "@/components/ui/Container.jsx";
import { Link } from "react-router-dom";

const POSTS = [
  {
    id: "guide-stacking",
    title: "A short guide to ear stacking",
    excerpt:
      "Three rules for building an ear stack that looks considered, not crowded.",
    date: "May 2026",
    read: "4 min read",
  },
  {
    id: "demi-fine",
    title: "What does demi-fine actually mean?",
    excerpt:
      "The honest answer — and what to look for when you buy.",
    date: "April 2026",
    read: "6 min read",
  },
  {
    id: "care-guide",
    title: "Caring for gold-plated jewelry",
    excerpt:
      "A few small habits that will keep your pieces bright for years.",
    date: "March 2026",
    read: "3 min read",
  },
];

const JournalPage = () => (
  <>
    <section className="bg-cream pt-32 pb-12">
      <Container>
        <p className="eyebrow">Journal</p>
        <h1 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.05]">
          Notes from the <span className="italic font-light">atelier</span>
        </h1>
        <p className="mt-4 font-sans text-[0.98rem] text-mute max-w-xl">
          Quiet writing on jewelry, gifting, and the small details.
        </p>
      </Container>
    </section>

    <section className="bg-cream pb-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((p) => (
            <article key={p.id} className="group">
              <div className="aspect-[4/5] bg-gradient-to-br from-[#2A1C12] to-[#0E0805] rounded-sm flex items-center justify-center text-champagne font-serif text-2xl">
                {p.title.split(" ")[0]}
              </div>
              <p className="eyebrow mt-5">{p.date} · {p.read}</p>
              <h2 className="mt-2 font-serif text-2xl text-ink leading-snug group-hover:text-bronze">
                <Link to="/journal">{p.title}</Link>
              </h2>
              <p className="mt-2 font-sans text-[0.92rem] text-mute leading-relaxed">
                {p.excerpt}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  </>
);

export default JournalPage;
