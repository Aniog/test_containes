import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'

export default function CtaBand() {
  return (
    <section className="bg-white px-4 py-12 text-sourcing-ink sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 rounded-3xl bg-sourcing-navy p-8 text-white shadow-b2b md:flex-row md:items-center md:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sourcing-sky">Ready to compare suppliers?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white">Send your product brief and get practical sourcing feedback.</h2>
        </div>
        <Button as={Link} to="/contact" variant="light" className="shrink-0 gap-2">
          Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}
