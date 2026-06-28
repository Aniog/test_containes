import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import EditorialVisual from '@/components/ui/EditorialVisual'

export default function BrandStory() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-velmora-line bg-velmora-ivory p-4 shadow-velmora-soft lg:grid-cols-[1.1fr_0.9fr] lg:p-5">
        <div className="overflow-hidden rounded-[1.75rem] bg-velmora-noir">
          <EditorialVisual mood="gift" className="aspect-[4/5] rounded-none" />
        </div>
        <div className="flex items-center px-2 py-4 sm:px-6 lg:px-10">
          <div className="max-w-xl space-y-5">
            <p className="text-xs uppercase tracking-brand text-velmora-taupe">Our World</p>
            <h2 className="font-display text-5xl leading-none text-velmora-ink sm:text-6xl">
              Quiet luxury, made wearable.
            </h2>
            <p className="text-base leading-8 text-velmora-taupe sm:text-lg">
              Velmora began with a simple idea: jewelry should feel intimate, giftable,
              and deeply wearable. We pair sculptural forms with warm finishes so every
              piece feels elevated enough for special moments and effortless enough for the everyday.
            </p>
            <Link to="/about">
              <Button size="lg" variant="secondary">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
