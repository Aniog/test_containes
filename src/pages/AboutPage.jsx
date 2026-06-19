export default function AboutPage() {
  return (
    <div className="pt-[var(--header-height)]">
      {/* Hero */}
      <section className="relative py-20 md:py-32 bg-[#F5F0E8]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[#C9A962] text-xs tracking-[0.2em] uppercase mb-4 block">
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-wide mb-6">
              Crafted with Intention
            </h1>
            <p className="text-[#6B6B6B] text-lg leading-relaxed">
              Velmora was born from a simple belief: beautiful jewelry should feel effortless, not extravagant.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 text-[#6B6B6B] leading-relaxed">
                <p>
                  Founded in 2020, Velmora began as a small studio with a big dream: to create jewelry that feels like a natural extension of the woman who wears it. We believed that luxury shouldn't mean complicated — it should mean quality, craftsmanship, and pieces that make you feel extraordinary in your daily life.
                </p>
                <p>
                  Each piece in our collection is designed in our studio and crafted with care by skilled artisans. We use only the finest materials — 18K gold plating over sterling silver — ensuring both beauty and durability without the premium price tag.
                </p>
                <p>
                  Our commitment to hypoallergenic materials means you can wear our jewelry from morning to night, without worry. We test every piece to ensure it meets our exacting standards for comfort and quality.
                </p>
                <p>
                  But more than anything, we believe in jewelry that tells a story — yours. Whether it's a gift for someone you love or a quiet treat for yourself, every Velmora piece is meant to be treasured.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="aspect-[4/5] bg-[#F5F0E8] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop"
                  alt="Velmora studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-[#F5F0E8]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'We use only the finest materials and craftsmanship to ensure each piece lasts a lifetime.'
              },
              {
                title: 'Sustainable Luxury',
                description: 'Our packaging is recyclable, our materials are responsibly sourced, and we minimize waste.'
              },
              {
                title: 'Customer Care',
                description: 'Every customer is family. We stand behind our products with exceptional service.'
              }
            ].map((value, index) => (
              <div key={index} className="text-center p-8 border border-[#E8E4DE]">
                <h3 className="font-serif text-xl tracking-wide mb-3">{value.title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}