export default function CraftSection() {
  return (
    <section className="bg-ink text-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] w-full overflow-hidden border border-graphite">
            <img
              alt="Operator at touchscreen of metal folding machine"
              className="w-full h-full object-cover"
              data-strk-img-id="craft-operator-7c11d4"
              data-strk-img="[craft-title] [craft-body] operator touchscreen metal folding machine workshop"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="text-xs uppercase tracking-[0.2em] text-mist mb-5">
            User friendly by design
          </p>
          <h2
            id="craft-title"
            className="font-serif text-3xl md:text-5xl font-medium leading-tight"
          >
            A machine an apprentice<br />
            can <span className="italic text-accent">master in a week.</span>
          </h2>
          <p
            id="craft-body"
            className="mt-6 text-base md:text-lg text-mist max-w-xl leading-relaxed"
          >
            We obsess over the operator. The HMI is laid out like a workshop
            bench, the foot pedal feels exactly where you expect, and every
            screw in the tooling is reachable without breaking your back.
            Elegance is when nothing is in the way.
          </p>

          <dl className="mt-12 grid sm:grid-cols-3 gap-y-8 gap-x-6">
            <Item label="Setup time" value="< 4 min" />
            <Item label="HMI languages" value="14" />
            <Item label="Onboarding" value="2 days" />
          </dl>
        </div>
      </div>
    </section>
  )
}

function Item({ label, value }) {
  return (
    <div className="border-l border-graphite pl-4">
      <dt className="text-xs uppercase tracking-[0.2em] text-mist">{label}</dt>
      <dd className="mt-2 font-serif text-3xl text-bone">{value}</dd>
    </div>
  )
}
