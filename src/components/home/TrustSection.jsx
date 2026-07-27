import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import Icon from "@/components/ui/Icon"
import { TRUST_POINTS, TESTIMONIALS } from "@/data/site"
import useStrkImages from "@/hooks/useStrkImages"

const TrustSection = () => {
  const ref = useStrkImages([])

  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Why buyers trust us"
          title="A partner that works for you, not for the factory"
          subtitle="Independent sourcing means we are paid by you, the buyer. We disclose every commission and we put it in writing."
          align="center"
          className="mb-10 md:mb-14"
        />

        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_POINTS.map((t) => (
            <div
              key={t.title}
              className="rounded-xl border border-line bg-white p-6 md:p-7"
            >
              <div className="w-11 h-11 rounded-lg bg-[#0B2545] text-white flex items-center justify-center mb-5">
                <Icon name={t.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{t.title}</h3>
              <p className="text-sm text-ink-subtle leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div ref={ref} className="mt-16 md:mt-20">
          <SectionHeader
            eyebrow="What buyers say"
            title="Real feedback from real importers"
            align="center"
            className="mb-10"
          />
          <div className="grid gap-5 md:gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className="rounded-xl bg-[#F4F6F9] border border-line p-6 md:p-7"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 fill-[#C9A227]"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 1l2.928 6.07 6.658.97-4.814 4.69 1.136 6.624L10 16.347 4.092 19.354l1.136-6.624L.414 8.04l6.658-.97L10 1z" />
                    </svg>
                  ))}
                </div>
                <blockquote
                  id={`testimonial-${i}-quote`}
                  className="text-sm md:text-base text-ink leading-relaxed"
                >
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-line/80">
                  <div
                    id={`testimonial-${i}-name`}
                    className="text-sm font-bold text-[#0B2545]"
                  >
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-muted mt-0.5">
                    {t.role} · {t.industry}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TrustSection
