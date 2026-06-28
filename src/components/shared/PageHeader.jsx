import { SectionContainer, Eyebrow } from "@/components/ui/Section"

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="border-b border-slate-200 bg-primary">
      <SectionContainer className="py-16 md:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <Eyebrow className="text-amber-300">{eyebrow}</Eyebrow>
          )}
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              {description}
            </p>
          )}
        </div>
      </SectionContainer>
    </section>
  )
}
