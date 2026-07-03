import { Link, useParams } from "react-router-dom"
import { Truck, RotateCcw, Sparkles, Ruler, Mail } from "lucide-react"

const HELP = {
  shipping: {
    title: "Shipping",
    body: "We ship worldwide from our studio in Lisbon, with free standard shipping on orders over $75. Standard orders typically arrive in 4–7 business days; express orders in 2–4. You'll receive a tracking link by email the moment your order leaves the door.",
  },
  returns: {
    title: "Returns",
    body: "Not quite right? You have 30 days to return unworn pieces in their original packaging for a full refund. Sale items are final. To start a return, simply email us at hello@velmora.com with your order number.",
  },
  care: {
    title: "Jewelry Care",
    body: "To keep your pieces looking their best: remove before showering, sleeping and exercising; avoid contact with perfume, lotion and chlorine; store flat in the suede pouch provided; and wipe gently with a soft cloth to restore shine.",
  },
  sizing: {
    title: "Size Guide",
    body: "Our huggies and cuffs are one-size and designed to fit most ears comfortably. Our necklaces are adjustable to 16 or 18 inches. If you're unsure, the Majestic Flora and Royal Heirloom Set are the easiest places to start.",
  },
}

const TOPICS = [
  { id: "shipping", icon: Truck },
  { id: "returns", icon: RotateCcw },
  { id: "care", icon: Sparkles },
  { id: "sizing", icon: Ruler },
]

export default function HelpPage() {
  const { topic } = useParams()
  const current = HELP[topic] || {
    title: "Help Center",
    body: "How can we help? Choose a topic below or write to us — we usually reply within a few hours.",
  }

  return (
    <main className="pt-24 md:pt-28">
      <header className="container-site pb-10 border-b border-line">
        <p className="eyebrow">Help</p>
        <h1
          id="help-title"
          className="display text-4xl md:text-5xl mt-3"
        >
          {current.title}
        </h1>
      </header>

      <div className="container-site py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <aside className="md:col-span-4">
            <ul className="divide-y divide-line border-t border-b border-line">
              {TOPICS.map((t) => {
                const Icon = t.icon
                const entry = HELP[t.id]
                const active = topic === t.id
                return (
                  <li key={t.id}>
                    <Link
                      to={`/help/${t.id}`}
                      className={`flex items-center gap-4 py-4 transition-colors duration-300 ${
                        active
                          ? "text-accent"
                          : "text-ink-secondary hover:text-ink-primary"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                      <span className="text-sm">{entry.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className="mt-8 bg-surface border border-line p-6">
              <div className="flex items-center gap-3 text-ink-primary">
                <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} />
                <p className="text-sm font-medium">Still have questions?</p>
              </div>
              <p className="mt-2 text-sm text-ink-secondary">
                We reply to most messages within a few hours.
              </p>
              <a
                href="mailto:hello@velmora.com"
                className="mt-4 inline-block text-sm text-accent hover:text-accent-light"
              >
                hello@velmora.com
              </a>
            </div>
          </aside>

          <article
            id="help-body"
            className="md:col-span-8 prose prose-invert max-w-none"
          >
            <p className="text-ink-secondary text-base md:text-lg leading-relaxed max-w-prose">
              {current.body}
            </p>
            <div className="hairline my-10" />
            <p className="text-[11px] text-ink-muted tracking-wider2 uppercase">
              Need something specific? Email{" "}
              <a
                href="mailto:hello@velmora.com"
                className="text-accent normal-case tracking-normal"
              >
                hello@velmora.com
              </a>
              .
            </p>
          </article>
        </div>
      </div>
    </main>
  )
}
