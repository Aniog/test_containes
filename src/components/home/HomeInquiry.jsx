import { Clock, FileSearch, Route } from 'lucide-react'
import InquiryForm from '@/components/shared/InquiryForm'

const expectations = [
  {
    icon: Clock,
    title: 'Reply within one working day',
    desc: 'A sourcing specialist reviews your inquiry and responds with first questions or an initial assessment.',
  },
  {
    icon: FileSearch,
    title: 'Free initial assessment',
    desc: 'You receive a realistic price and MOQ indication plus a proposed approach — before you commit to anything.',
  },
  {
    icon: Route,
    title: 'Clear scope and fixed quote',
    desc: 'If you decide to proceed, we define the scope of work and quote it in writing. No surprises later.',
  },
]

const HomeInquiry = () => (
  <section className="bg-slate-50">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-800">Start here</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Get a free sourcing quote
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Tell us what you want to source. The more detail you share — specifications,
            target price, quantities — the more precise our first answer will be.
          </p>
          <ul className="mt-8 space-y-6">
            {expectations.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                  <item.icon className="h-5 w-5 text-blue-800" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <InquiryForm />
        </div>
      </div>
    </div>
  </section>
)

export default HomeInquiry
