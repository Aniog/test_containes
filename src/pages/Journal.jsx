import React from "react"
import { format, parseISO } from "date-fns"
import { ArrowUpRight } from "lucide-react"
import { StockImage } from "@/components/StockImage"
import { JOURNAL_POSTS } from "@/data/products"

export default function Journal() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-line bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent-deep">
            The Journal
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-foreground md:text-5xl">
            Notes on <span className="italic text-accent-deep">Gold</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Styling rituals, material guides, and quiet thoughts from the atelier.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {JOURNAL_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <StockImage
                  imgId={`journal-${post.id}-8a3c`}
                  query={`${post.title} ${post.excerpt} gold jewelry editorial photography warm neutral aesthetic`}
                  ratio="4x3"
                  width={720}
                  alt={post.title}
                  className="transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.24em] text-muted-foreground">
                {format(parseISO(post.date), "MMMM d, yyyy")}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-light leading-snug text-foreground transition-colors group-hover:text-accent-deep">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-[11px] font-medium uppercase tracking-[0.24em] text-foreground transition-colors group-hover:border-accent-deep group-hover:text-accent-deep">
                Read the Story
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
