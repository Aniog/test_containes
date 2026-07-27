import { CheckCircle2, ClipboardList, Factory, ShipWheel } from 'lucide-react'
import PageHero from '@/components/site/PageHero'
import InquiryForm from '@/components/site/InquiryForm'
import ContactInfoCard from '@/components/site/ContactInfoCard'

const nextSteps = [
  {
    title: 'Review the sourcing brief',
    description:
      'We check product type, quantity, destination, and the support scope you need before recommending next steps.',
    icon: ClipboardList,
  },
  {
    title: 'Confirm supplier and factory actions',
    description:
      'We align whether the request needs supplier search, verification, factory checks, or quality control support.',
    icon: Factory,
  },
  {
    title: 'Plan follow-up and shipment coordination',
    description:
      'If the project moves ahead, we coordinate the next actions clearly in English and around your delivery timeline.',
    icon: ShipWheel,
  },
]

const Contact = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start with your sourcing brief"
        description="Tell us what product you need to source, where it is going, and whether you need supplier search, verification, quality inspection, production follow-up, or shipping coordination."
        visual={
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-slate-100 shadow-sm">
            <div className="inline-flex rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              What happens next
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">
              A clear review process before any sourcing work starts
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
              We use your inquiry to understand sourcing fit, urgency, verification needs,
              and where local support in China can reduce risk.
            </p>
            <div className="mt-8 space-y-4">
              {nextSteps.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3 text-white">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="font-semibold">{item.title}</p>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="mt-6 flex items-start gap-3 rounded-3xl border border-teal-500/20 bg-teal-500/10 p-5 text-sm leading-7 text-teal-50">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-300" />
              <p>
                The more specific your brief is, the easier it is to assess suppliers,
                define inspection checkpoints, and plan shipment follow-up.
              </p>
            </div>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <InquiryForm />
          <ContactInfoCard />
        </div>
      </section>
    </>
  )
}

export default Contact
