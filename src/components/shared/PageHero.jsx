import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button.jsx'

export default function PageHero({ eyebrow, title, description, cta = true }) {
  return (
    <section className="bg-white py-16 text-sourcing-ink md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.2em] text-sourcing-blue">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-sourcing-navy md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-sourcing-muted">{description}</p>
          {cta && (
            <Button as={Link} to="/contact" className="mt-8 gap-2">
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
