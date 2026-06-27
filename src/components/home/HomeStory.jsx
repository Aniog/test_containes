import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";

export default function HomeStory() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-bone)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-cream)] order-1">
            <img
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1100&q=85"
              alt="Velmora atelier — a jeweler's bench at golden hour"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8 bg-[var(--color-bone)]/95 backdrop-blur-sm p-5 sm:p-6">
              <p className="font-serif italic text-[var(--color-ink-soft)] text-lg leading-snug">
                "We design the pieces we want to wear — quietly, on repeat."
              </p>
              <p className="mt-3 text-[0.65rem] uppercase tracking-eyebrow text-[var(--color-stone)]">
                — Mara Velmora, Founder
              </p>
            </div>
          </div>

          <div className="order-2 md:pl-6">
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 font-serif font-light text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] tracking-tight text-[var(--color-ink)]">
              Designed in small batches.
              <br />
              <em className="italic text-[var(--color-gold-deep)]">Made to last.</em>
            </h2>
            <div className="mt-7 space-y-5 text-[var(--color-stone)] text-[0.97rem] leading-relaxed max-w-md">
              <p>
                Velmora began at a single bench in a quiet studio, with a question
                we couldn't stop asking: <em className="italic text-[var(--color-ink)]">why does fine
                jewelry feel so far away?</em>
              </p>
              <p>
                So we made our own. Demi-fine, 18K gold-plated, designed for the
                everyday — and priced like an invitation, not a milestone.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 font-sans text-[0.72rem] uppercase tracking-eyebrow font-medium text-[var(--color-ink)] link-underline"
            >
              Read Our Story
              <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}