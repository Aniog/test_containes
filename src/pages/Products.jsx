import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHeader from "@/components/shared/PageHeader"
import { Section, Container } from "@/components/ui/section"
import { productCategories } from "@/data/content"
import CtaBanner from "@/components/shared/CtaBanner"

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Products we source"
        title="Categories we source and inspect"
        description="A broad range of consumer and industrial products. If your category isn't listed, ask us — sourcing principles transfer across product types."
      />

      <Section>
        <Container>
          <div
            ref={containerRef}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {productCategories.map((cat) => (
              <article
                key={cat.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 text-primary shadow-sm">
                    <cat.icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-5">
                  <h3 id={cat.titleId} className="text-base font-bold text-foreground">
                    {cat.title}
                  </h3>
                  <p id={cat.descId} className="mt-1.5 text-sm text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="Don't see your product category?"
        description="Tell us what you want to source. We'll confirm whether it's a fit and how we'd approach it."
      />
    </>
  )
}
