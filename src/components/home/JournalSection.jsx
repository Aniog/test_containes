import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { journalEntries } from '@/data/products.js'
import SectionIntro from '@/components/common/SectionIntro.jsx'
import ProductImage from '@/components/product/ProductImage.jsx'

const JournalSection = () => {
  return (
    <section id="journal" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Journal"
          title="Editorial notes on gifting, layering, and keeping your glow"
          description="A soft companion to the collection — thoughtful guidance, styling inspiration, and care rituals for pieces made to last in your wardrobe."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article key={entry.slug} className="group rounded-[1.75rem] border border-hairline-dark bg-base-muted p-4 shadow-soft">
              <div className="overflow-hidden rounded-[1.4rem]">
                <ProductImage
                  imageId={`journal-${entry.slug}`}
                  query={`[journal-${entry.slug}-desc] [journal-${entry.slug}-title]`}
                  alt={entry.title}
                  className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="space-y-4 px-2 pb-2 pt-5">
                <h3 id={`journal-${entry.slug}-title`} className="font-display text-3xl text-foreground">
                  {entry.title}
                </h3>
                <p id={`journal-${entry.slug}-desc`} className="text-sm leading-7 text-muted">
                  {entry.excerpt}
                </p>
                <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent transition hover:text-accent-soft">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalSection
