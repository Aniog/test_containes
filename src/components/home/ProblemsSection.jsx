import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import Icon from "@/components/ui/Icon"
import { PROBLEMS } from "@/data/site"

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-[#0B2545] text-white">
      <Container>
        <SectionHeader
          eyebrow="Problems we solve"
          title="The six things that go wrong on China orders, and how we prevent them"
          subtitle="Every buyer we've worked with has hit at least one of these. We have a concrete process for each one."
          align="center"
          light
          className="mb-10 md:mb-14"
        />

        <div className="grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="rounded-xl bg-white/5 border border-white/10 p-6 md:p-7"
            >
              <div className="w-11 h-11 rounded-lg bg-[#C9A227]/15 text-[#C9A227] flex items-center justify-center mb-5">
                <Icon name={p.icon} className="w-5 h-5" />
              </div>
              <h3 className="text-base md:text-lg font-bold mb-2 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-white/75 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ProblemsSection
