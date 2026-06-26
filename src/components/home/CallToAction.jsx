import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CallToAction() {
  return (
    <section className="bg-slate-900 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to upgrade your folding capabilities?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
          Get in touch for a tailored quote, product demonstration, or technical
          consultation with our team.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
            <Link to="/contact">
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-slate-600 text-white hover:bg-slate-800 hover:text-white">
            <Link to="/products">Browse Machines</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
