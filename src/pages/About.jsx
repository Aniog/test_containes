export default function About() {
  return (
    <div className="min-h-screen pt-20 md:pt-24 bg-cream-50">
      <div className="bg-cream-100 py-12 md:py-16 text-center">
        <p className="text-xs tracking-widest-xl uppercase text-gold-500 mb-3 font-medium">Our Philosophy</p>
        <h1 className="font-serif text-3xl md:text-5xl text-charcoal-800" style={{ fontWeight: 400 }}>
          About Velmora
        </h1>
        <div className="hairline max-w-24 mx-auto mt-6" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-800 mb-6" style={{ fontWeight: 400 }}>
              Jewelry Should Feel Like <em className="italic" style={{ fontWeight: 300 }}>You</em>
            </h2>
            <p className="text-charcoal-500 leading-relaxed max-w-2xl mx-auto">
              Velmora was created for the woman who wants her jewelry to feel effortless — pieces that she can reach for every morning without thinking, and that make her feel put-together whether she is in a blazer or a sundress.
            </p>
          </div>

          <div className="hairline" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Quality', text: '18K gold-plated sterling silver that stands the test of time. Hypoallergenic and water-resistant.' },
              { title: 'Craft', text: 'Designed in our studio with intention. Each piece goes through rigorous quality checks before reaching you.' },
              { title: 'Care', text: 'We believe luxury should be accessible. Premium materials and craftsmanship at prices that make sense.' },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-serif text-xl text-charcoal-800 mb-3" style={{ fontWeight: 500 }}>
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="hairline" />

          <div className="aspect-[16/7] bg-cream-200 overflow-hidden">
            <img
              data-strk-img-id="about-workshop"
              data-strk-img="artisan jewelry workshop gold crafting elegant"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora workshop"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
