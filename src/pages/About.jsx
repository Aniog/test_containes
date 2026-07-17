export default function About() {
  return (
    <main className="pt-20 md:pt-24">
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1600&h=600&fit=crop&q=80"
            alt="About Velmora"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1A1A1A]/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="font-serif text-4xl md:text-5xl text-[#FAF8F5] mb-4">Our Story</h1>
          <div className="w-12 h-px bg-[#C5A572] mx-auto" />
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-sans text-base md:text-lg text-[#6B6560] leading-relaxed mb-6">
            Velmora was founded with a single mission: to make beautiful, high-quality jewelry accessible to every woman. We believe that luxury shouldn't come with an impossible price tag — it should be something you can wear every day, treasure for years, and feel wonderful in.
          </p>
          <p className="font-sans text-base md:text-lg text-[#6B6560] leading-relaxed mb-6">
            Every piece in our collection is crafted with 18K gold plating over surgical-grade stainless steel. This means our jewelry is hypoallergenic, tarnish-resistant, and built to last — at a fraction of what you'd pay at traditional luxury retailers.
          </p>
          <p className="font-sans text-base md:text-lg text-[#6B6560] leading-relaxed mb-6">
            We work directly with artisan workshops, cutting out the middlemen and retail markups that inflate jewelry prices. The savings go directly to you, without compromising on quality or craftsmanship.
          </p>
        </div>
      </section>

      <section className="bg-[#F2EDE7] py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { num: '100%', label: 'Hypoallergenic Materials' },
            { num: '30-Day', label: 'Hassle-Free Returns' },
            { num: '50K+', label: 'Happy Customers' },
          ].map(s => (
            <div key={s.label}>
              <p className="font-serif text-4xl text-[#C5A572] mb-2">{s.num}</p>
              <p className="font-sans text-sm uppercase tracking-[0.2em] text-[#6B6560]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-[#1A1A1A]">Our Values</h2>
            <div className="w-12 h-px bg-[#C5A572] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Accessible Luxury', text: 'Premium quality without the premium markup. We believe every woman deserves beautiful jewelry.' },
              { title: 'Thoughtful Design', text: 'Every piece is designed to be versatile, timeless, and perfect for both everyday wear and special occasions.' },
              { title: 'Sustainable Practice', text: 'We minimize waste through direct-to-consumer sales, recyclable packaging, and durable materials.' },
            ].map(v => (
              <div key={v.title} className="text-center p-6">
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-[#6B6560] leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
