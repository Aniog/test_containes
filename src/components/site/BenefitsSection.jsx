import { benefits } from '@/data/siteContent'
import SectionHeader from '@/components/site/SectionHeader'

const BenefitsSection = () => {
  return (
    <section className="bg-stone-100 px-6 py-16 md:px-10 md:py-24 xl:px-16">
      <div className="mx-auto max-w-7xl space-y-12">
        <SectionHeader
          eyebrow="Why ARTITECT MACHINERY"
          title="A refined machinery experience from first impression to daily production"
          description="Every detail is positioned to feel professional and approachable, helping your team adopt high-performance folding equipment with confidence."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.75rem] border border-stone-200 bg-white p-8 text-slate-900 shadow-sm"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
