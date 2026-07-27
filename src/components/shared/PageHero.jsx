import Container from "@/components/ui/Container"
import useStrkImages from "@/hooks/useStrkImages"

const PageHero = ({ eyebrow, title, subtitle, id = "page" }) => {
  const ref = useStrkImages([])
  return (
    <section
      ref={ref}
      className="relative bg-[#0B2545] text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-40"
        data-strk-bg-id={`${id}-bg-1c8d3e`}
        data-strk-bg={`[${id}-subtitle] [${id}-title]`}
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1800"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B2545]/85 via-[#0B2545]/80 to-[#0B2545]" />
      <Container className="relative z-10">
        <div className="py-16 md:py-24 max-w-3xl">
          {eyebrow && (
            <p className="uppercase tracking-wider text-xs font-semibold text-[#C9A227] mb-3">
              {eyebrow}
            </p>
          )}
          <h1
            id={`${id}-title`}
            className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight"
          >
            {title}
          </h1>
          {subtitle && (
            <p
              id={`${id}-subtitle`}
              className="mt-5 text-base md:text-lg text-white/80 leading-relaxed"
            >
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}

export default PageHero
