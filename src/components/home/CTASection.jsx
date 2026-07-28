import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function CTASection() {
  const containerRef = useImageLoader()

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-primary py-16 lg:py-24">
      <div
        className="absolute inset-0 opacity-10"
        data-strk-bg-id="cta-bg-d4e5f6"
        data-strk-bg="[cta-title] [cta-desc]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 id="cta-title" className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Ready to Source from China with Confidence?
        </h2>
        <p id="cta-desc" className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
          Tell us about your product and we will help you find the right supplier, control quality, and manage delivery.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="cta" size="lg" asChild className="bg-white text-primary hover:bg-gray-100">
            <Link to="/contact">Get a Free Sourcing Quote</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="border-white/40 text-white hover:bg-white/10 hover:text-white"
          >
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
