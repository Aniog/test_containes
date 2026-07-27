import { Link } from 'react-router-dom'
import { ClipboardList, Search, FileCheck, PackageCheck, Ship, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    icon: ClipboardList,
    title: 'Submit Requirements',
    description: 'Tell us what product you need, target price, quantity, and any certification requirements.',
  },
  {
    icon: Search,
    title: 'Supplier Shortlist',
    description: 'We research and present 2-5 qualified suppliers with quotes and factory profiles.',
  },
  {
    icon: FileCheck,
    title: 'Verify & Sample',
    description: 'We verify factories and arrange samples so you can evaluate before production.',
  },
  {
    icon: PackageCheck,
    title: 'QC & Production',
    description: 'We monitor production and conduct inspections at key milestones.',
  },
  {
    icon: Ship,
    title: 'Ship & Deliver',
    description: 'We coordinate logistics, documents, and delivery to your destination.',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="process-title" className="text-3xl font-bold text-slate-900 md:text-4xl">
            How We Source for You
          </h2>
          <p id="process-subtitle" className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            A simple, transparent process designed to reduce risk and save time.
          </p>
        </div>

        <div className="mt-14">
          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-4 text-sm font-bold text-accent">Step {index + 1}</div>
                  <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-7 left-[60%] w-[80%] border-t-2 border-dashed border-slate-300" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <Link to="/how-it-works">
              Explore the Full Process <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
