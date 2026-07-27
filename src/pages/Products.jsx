import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Search } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PRODUCT_CATEGORIES } from "@/data/content"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section, SectionHeader } from "@/components/shared/Section"

export default function Products() {
  const ref = useRef(null)
  const [query, setQuery] = useState("")

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const q = query.trim().toLowerCase()
  const filtered = q
    ? PRODUCT_CATEGORIES.filter(
        (c) =>
          c.title.toLowerCase().includes(q) ||
          c.items.some((i) => i.toLowerCase().includes(q)),
      )
    : PRODUCT_CATEGORIES

  return (
    <>
      <section className="bg-gradient-to-b from-white to-page">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow">Products we source</p>
          <h1
            id="products-h1"
            className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl"
          >
            The categories where we have real factory relationships
          </h1>
          <p
            id="products-sub"
            className="mt-4 max-w-2xl text-base text-ink-700 md:text-lg"
          >
            We focus on six verticals where we have a track record. If your
            product fits one of them, we will already know where to start
            looking.
          </p>

          <div className="mt-8 flex max-w-md items-center gap-2 rounded-lg border border-border-soft bg-white px-3 py-2 shadow-sm">
            <Search className="h-4 w-4 text-ink-400" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter by category or product…"
              className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-400 focus:outline-none"
              aria-label="Filter products"
            />
          </div>
        </div>
      </section>

      <Section className="bg-white" id="products-list">
        <div className="container-x" ref={ref}>
          {filtered.length === 0 ? (
            <div className="card p-10 text-center">
              <p className="text-base font-semibold text-ink-900">
                No exact match, but we can probably help.
              </p>
              <p className="mt-2 text-sm text-ink-700">
                Send a short description of your product and we will let you
                know if we can source it.
              </p>
              <div className="mt-4">
                <Link to="/contact" className="btn-primary">
                  Get a Free Sourcing Quote
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((cat) => (
                <article
                  key={cat.id}
                  id={`prod-${cat.id}`}
                  className="card flex flex-col overflow-hidden"
                >
                  <div
                    className="relative aspect-[16/10] bg-slate-100"
                    data-strk-bg-id={`prod-${cat.id}-bg-pg`}
                    data-strk-bg={`[prod-${cat.id}-title] [prod-${cat.id}-items] [products-h1]`}
                    data-strk-bg-ratio="16x10"
                    data-strk-bg-width="600"
                  >
                    <img
                      alt={cat.title}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`prod-${cat.id}-img-pg`}
                      data-strk-img={`[prod-${cat.id}-title] [prod-${cat.id}-items] [products-h1]`}
                      data-strk-img-ratio="16x10"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h2
                      id={`prod-${cat.id}-title`}
                      className="text-lg font-semibold text-ink-900"
                    >
                      {cat.title}
                    </h2>
                    <ul
                      id={`prod-${cat.id}-items`}
                      className="flex flex-wrap gap-1.5"
                    >
                      {cat.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-ink-700"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </Section>

      <Section className="bg-page">
        <div className="container-x">
          <SectionHeader
            eyebrow="Not on the list?"
            title="We can probably still help"
            subtitle="If your product is a physical good made in a factory, we can usually source it. Tell us what it is and we will tell you honestly if it is a fit."
          />
          <div className="mt-8 text-center">
            <Link to="/contact" className="btn-primary">
              Ask us about your product
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  )
}
