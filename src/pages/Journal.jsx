import React from "react";
import { ArrowRight } from "lucide-react";
import StrkImg from "@/components/ui/StrkImg";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { toast } from "sonner";

const POSTS = [
  {
    id: "post-1",
    category: "Styling",
    title: "How to Layer Necklaces Like an Editor",
    excerpt: "The three rules our stylists swear by for an effortless, curated neckline.",
    date: "Jul 2026",
    query: "woman wearing layered gold necklaces, editorial fashion photography, elegant neckline close up",
  },
  {
    id: "post-2",
    category: "Care",
    title: "Making 18K Gold Plating Last for Years",
    excerpt: "A gentle routine that keeps your demi-fine pieces luminous, wear after wear.",
    date: "Jun 2026",
    query: "gold jewelry care, soft cloth polishing gold earrings, elegant flat lay photography",
  },
  {
    id: "post-3",
    category: "Gifting",
    title: "The Art of the Perfect Jewelry Gift",
    excerpt: "How to choose a piece that feels personal — for the women who have everything.",
    date: "May 2026",
    query: "elegant gold jewelry gift box with ribbon, luxury gifting editorial photography",
  },
];

export default function Journal() {
  const openPost = (e) => {
    e.preventDefault();
    toast.success("The Journal is coming soon — this is a design preview.");
  };

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 md:pt-32 lg:px-12">
      <SectionHeading
        align="left"
        eyebrow="The Journal"
        title="Stories from the Atelier"
        sub="Styling notes, care rituals, and the occasional love letter to gold."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {POSTS.map((post, i) => (
          <Reveal key={post.id} delay={i * 80}>
            <a href="#" onClick={openPost} className="group block">
              <div className="aspect-[4/3] overflow-hidden bg-sand">
                <StrkImg
                  imgId={`${post.id}-img`}
                  query={post.query}
                  ratio="4x3"
                  width={800}
                  alt={post.title}
                  className="transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
                />
              </div>
              <div className="pt-5">
                <div className="flex items-center gap-3">
                  <span className="font-body text-[10px] font-semibold uppercase tracking-mega text-gold-deep">
                    {post.category}
                  </span>
                  <span className="h-px w-6 bg-line" />
                  <span className="font-body text-[11px] text-cocoa/50">{post.date}</span>
                </div>
                <h2 className="mt-3 font-display text-2xl leading-snug text-espresso transition-colors duration-300 group-hover:text-gold-deep">
                  {post.title}
                </h2>
                <p className="mt-2 font-body text-sm leading-relaxed text-cocoa/70">{post.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-2 font-body text-[11px] font-semibold uppercase tracking-widest2 text-espresso">
                  <span className="link-underline">Read more</span>
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
