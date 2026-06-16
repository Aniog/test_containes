import { Cog, Handshake, SlidersHorizontal, Sparkles } from 'lucide-react'
import SectionHeading from './SectionHeading'

const advantages = [
  {
    title: 'Elegant industrial presentation',
    description:
      'The brand experience feels premium and clear, helping visitors trust the machinery before the first conversation.',
    icon: Sparkles,
  },
  {
    title: 'User-friendly product communication',
    description:
      'Each section explains the value of your machines in direct language that buyers and operators can follow easily.',
    icon: Handshake,
  },
  {
    title: 'Precision-led engineering message',
    description:
      'The site highlights control, consistency, and repeatable output without overwhelming users with dense technical detail.',
    icon: Cog,
  },
  {
    title: 'Balanced configuration story',
    description:
      'Your machinery can be presented as adaptable for varying sheet metal workflows and production environments.',
    icon: SlidersHorizontal,
  },
]

const AdvantageSection = () => {
  return (
    <section id="advantages" className="bg-brand-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why ARTITECT"
            title="A machinery brand presence that feels trustworthy, elevated, and easy to navigate"
            description="This website direction is intentionally elegant but user friendly, matching the premium nature of industrial machinery while staying comfortable for first-time visitors."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {advantages.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-brand-ink/10 bg-brand-ivory p-7"
              >
                <div className="inline-flex rounded-2xl bg-brand-white p-3 text-brand-bronze shadow-sm shadow-brand-ink/5">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-brand-ink">{title}</h3>
                <p className="mt-3 text-base leading-7 text-brand-slate">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdvantageSection
