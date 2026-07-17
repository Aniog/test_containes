export default function AboutPage() {
  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl lg:text-5xl tracking-widest uppercase text-espresso text-center">
            Our Story
          </h1>
          <div className="mt-6 mx-auto w-12 h-px bg-gold" />
          <div className="mt-12 space-y-6 text-warm text-sm leading-relaxed">
            <p>
              Velmora was founded with a quiet conviction: that fine jewelry should feel as effortless
              as it looks. We believe the pieces you reach for every day deserve the same care and
              craftsmanship as the ones locked away for special occasions.
            </p>
            <p>
              Each Velmora design begins as a sketch in our London studio, where our small team obsesses
              over proportion, weight, and how a piece moves with the body. From there, we work closely
              with a select group of master artisans who bring each design to life using time-honored
              techniques — lost-wax casting, hand-setting, and meticulous polishing.
            </p>
            <p>
              Our jewelry is made from 18K gold plated over brass, chosen for its warm, luminous tone
              and remarkable durability. Every piece is nickel-free and hypoallergenic, because luxury
              should never come at the cost of comfort.
            </p>
            <p>
              We&apos;re proud to be a direct-to-consumer brand — no middlemen, no retail markups, just
              beautiful jewelry at an honest price. Thank you for being part of our story.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { value: '5,000+', label: 'Happy Customers' },
              { value: '18K', label: 'Gold Plating' },
              { value: '30-Day', label: 'Returns' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl tracking-widest uppercase text-espresso">{stat.value}</p>
                <p className="text-xs text-warm mt-2 uppercase tracking-super">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
