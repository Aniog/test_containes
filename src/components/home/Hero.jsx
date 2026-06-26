import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Gauge, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const highlights = [
  { icon: ShieldCheck, text: 'CE-certified build quality' },
  { icon: Gauge, text: 'Hydraulic precision control' },
  { icon: Wrench, text: 'Full after-sales support' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        data-strk-bg-id="hero-bg-artitect-machinery"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="max-w-3xl">
          <Badge
            variant="outline"
            className="mb-6 border-primary/30 px-3 py-1 text-xs font-semibold text-primary"
          >
            Industrial Sheet Metal Folding
          </Badge>
          <h1
            id="hero-title"
            className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Precision Metal Folding Machines Built to Last
          </h1>
          <p
            id="hero-subtitle"
            className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Discover ARTITECT MACHINERY&apos;s range of double folding machines, sheet
            metal folders, and metal folding solutions engineered for accuracy,
            durability, and effortless operation.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <Link to="/products">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 rounded-xl border border-border bg-background/80 p-4 backdrop-blur-sm"
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
