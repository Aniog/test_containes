import { Link } from 'react-router-dom'
import SectionHeading from '@/components/ui/SectionHeading'

const BrandStorySection = () => {
  return (
    <section className="bg-[var(--color-surface-alt)] px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative overflow-hidden bg-[var(--color-ink)]">
          <div
            className="aspect-[4/5]"
            data-strk-bg-id="velmora-story-bg-8d23ca"
            data-strk-bg="[story-copy] [story-title]"
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="1200"
          />
        </div>
        <div className="space-y-8">
          <SectionHeading
            eyebrow="Our Story"
            title="Jewelry that feels intimate, effortless, and enduring"
            description="Velmora Fine Jewelry was created for women who want refined pieces that slip seamlessly into everyday life — elevated enough to gift, accessible enough to wear on repeat."
          />
          <p
            id="story-copy"
            className="max-w-xl border-l border-[var(--color-border-subtle)] pl-6 text-base leading-8 text-[var(--color-text-secondary)]"
          >
            Each silhouette is developed to flatter warm light, soft tailoring, and layered personal style, with premium finishing details and keepsake-worthy packaging throughout.
          </p>
          <Link
            id="story-title"
            to="/about"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.34em] text-[var(--color-text-primary)] transition hover:text-[var(--color-accent)]"
          >
            Our Story
            <span className="h-px w-12 bg-[var(--color-accent)]" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection
