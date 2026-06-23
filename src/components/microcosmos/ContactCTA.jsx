import { Mail, MapPin, Instagram } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl overflow-hidden border border-cosmos-line">
          <div
            className="absolute inset-0"
            data-strk-bg-id="contact-bg-cta-9z8y7x"
            data-strk-bg="[contact-title] [contact-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cosmos-bg via-cosmos-bg/85 to-cosmos-bg/40" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-14 lg:p-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-cosmos-accent">
                05 · Visit & Subscribe
              </p>
              <h2
                id="contact-title"
                className="mt-4 font-display text-3xl md:text-5xl font-medium tracking-tight text-cosmos-text"
              >
                Step into the lab.
              </h2>
              <p
                id="contact-subtitle"
                className="mt-6 max-w-md text-cosmos-muted leading-relaxed"
              >
                MicroCosmos is a free, rotating exhibition. Drop us a note for
                workshop dates, school visits, or to subscribe to the monthly
                specimen letter.
              </p>

              <ul className="mt-8 space-y-4 text-cosmos-text">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cosmos-accent mt-0.5" />
                  <span className="leading-relaxed">
                    Hall C, Old Optics Building
                    <br />
                    14 Lensmaker Lane, Lumen District
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cosmos-accent" />
                  <a
                    href="mailto:hello@microcosmos.show"
                    className="hover:text-cosmos-accent transition-colors"
                  >
                    hello@microcosmos.show
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Instagram className="w-5 h-5 text-cosmos-accent" />
                  <a
                    href="#"
                    className="hover:text-cosmos-accent transition-colors"
                  >
                    @microcosmos.show
                  </a>
                </li>
              </ul>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-cosmos-surface/80 backdrop-blur border border-cosmos-line rounded-2xl p-6 md:p-8 space-y-4 self-end"
            >
              <p className="font-display text-xl text-cosmos-text">
                The Specimen Letter
              </p>
              <p className="text-sm text-cosmos-muted leading-relaxed">
                One photograph and one short essay, the first Sunday of each
                month. No noise.
              </p>

              <div>
                <label
                  htmlFor="name"
                  className="block font-mono text-[11px] uppercase tracking-[0.25em] text-cosmos-muted mb-2"
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Marie Curie"
                  className="w-full bg-cosmos-bg border border-cosmos-line rounded-lg px-4 py-3 text-cosmos-text placeholder:text-cosmos-muted/60 focus:outline-none focus:border-cosmos-accent transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-[11px] uppercase tracking-[0.25em] text-cosmos-muted mb-2"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-cosmos-bg border border-cosmos-line rounded-lg px-4 py-3 text-cosmos-text placeholder:text-cosmos-muted/60 focus:outline-none focus:border-cosmos-accent transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 px-6 py-3 rounded-full bg-cosmos-accent text-cosmos-bg font-medium hover:bg-cosmos-accent/90 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
