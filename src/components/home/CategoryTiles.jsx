import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { useImageHelper } from "@/hooks/useImageHelper"
import { useRef } from "react"
import StrkImage from "@/components/ui/StrkImage"
import { Container, Section, SectionHeader } from "@/components/ui/Section"
import { CATEGORY_TILES } from "@/data/content"

export default function CategoryTiles() {
  const ref = useRef(null)
  useImageHelper(ref)

  return (
    <Section background="paper" spacing="lg" ref={ref}>
      <Container>
        <SectionHeader
          eyebrow="Shop The Edit"
          heading={
            <span>
              Find your
              <br />
              <span className="italic font-light">everyday ritual</span>.
            </span>
          }
          description="Three silhouettes, hand-finished in 18K gold plate. Start with one, build a story."
          align="center"
          className="mx-auto text-center mb-14 md:mb-20"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORY_TILES.map((tile) => (
            <Link
              key={tile.id}
              to={`/shop?collection=${tile.id}`}
              className="group relative overflow-hidden block aspect-[3/4] bg-ink"
            >
              <StrkImage
                imgId={`cat-tile-${tile.id}`}
                query={`[cat-tile-label-${tile.id}] [cat-tile-sub-${tile.id}] ${tile.queryHint}`}
                ratio="3x4"
                width={900}
                alt={tile.label}
                className="absolute inset-0 h-full w-full"
                imgClassName="duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(29,22,17,0.1) 0%, rgba(29,22,17,0.6) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-9 text-paper">
                <p className="eyebrow text-paper/80 mb-2">
                  <span id={`cat-tile-sub-${tile.id}`}>{tile.sub}</span>
                </p>
                <div className="flex items-end justify-between">
                  <h3
                    id={`cat-tile-label-${tile.id}`}
                    className="font-serif text-3xl md:text-4xl text-paper"
                  >
                    {tile.label}
                  </h3>
                  <span className="w-10 h-10 rounded-full border border-paper/40 flex items-center justify-center transition-all duration-500 ease-editorial group-hover:bg-paper group-hover:text-ink group-hover:border-paper">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="transition-transform duration-500 ease-editorial group-hover:rotate-45"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  )
}
