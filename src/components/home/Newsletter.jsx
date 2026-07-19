import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/Buttons.jsx"
import strkImgConfig from "@/strk-img-config.json"

export default function Newsletter() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, sectionRef.current)
  }, [])

  return (
    <section ref={sectionRef} className="bg-velmora-cream px-5 py-16 text-velmora-ink sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden bg-velmora-espresso text-velmora-cream shadow-soft">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-bold uppercase tracking-widerLuxe text-velmora-gold">A private note</p>
            <h2 id="newsletter-heading" className="mt-4 font-serif text-5xl font-medium leading-none text-velmora-cream sm:text-6xl">
              Join for 10% off your first order
            </h2>
            <p id="newsletter-subtitle" className="mt-5 max-w-lg text-sm leading-7 text-velmora-linen">
              Receive early collection access, styling rituals, and considered gifting reminders.
            </p>
            <form className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Email address"
                className="focus-ring min-h-12 flex-1 rounded-full border border-velmora-champagne/30 bg-velmora-cream px-5 text-sm text-velmora-ink placeholder:text-velmora-clay"
              />
              <Button type="submit" className="min-h-12">
                Join
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
          <div
            className="min-h-80"
            data-strk-bg-id="newsletter-gift-box-gold-jewelry-l20f6a"
            data-strk-bg="[newsletter-subtitle] [newsletter-heading]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
          />
        </div>
      </div>
    </section>
  )
}
