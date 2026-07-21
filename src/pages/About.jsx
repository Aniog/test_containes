import React from 'react';

export default function About() {
  return (
    <main className="pt-32 lg:pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="font-serif text-3xl lg:text-5xl mb-6">Our Story</h1>
          <div className="w-16 h-px bg-[#8B7355] mx-auto mb-8" />
          <p className="text-lg text-[#6B5E54] max-w-3xl mx-auto leading-relaxed">
            Velmora was born from a simple belief: jewelry should be treasured, not just worn.
          </p>
        </div>

        <div className="space-y-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-serif text-2xl lg:text-3xl mb-6">The Beginning</h2>
              <p className="text-[#6B5E54] leading-relaxed mb-4">
                Founded in 2020, Velmora started as a passion project between two friends
                who shared a love for demi-fine jewelry. We saw a gap in the market for
                high-quality, thoughtfully designed pieces that bridged the gap between
                costume and fine jewelry.
              </p>
              <p className="text-[#6B5E54] leading-relaxed">
                Our mission was simple: create beautiful, wearable art that people could
                afford to wear every day, without compromising on quality or design.
              </p>
            </div>
            <div className="order-1 lg:order-2 aspect-square bg-[#F5F0EB] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
                alt="Jewelry craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-[#F5F0EB] p-12 lg:p-20 text-center">
            <h2 className="font-serif text-2xl lg:text-3xl mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Quality',
                  description: 'We use only the finest materials and craftsmanship in every piece.'
                },
                {
                  title: 'Sustainability',
                  description: 'Ethical sourcing and eco-friendly packaging are at our core.'
                },
                {
                  title: 'Community',
                  description: 'We celebrate every person's unique style and story.'
                },
              ].map((value) => (
                <div key={value.title}>
                  <h3 className="font-serif text-xl mb-4 tracking-wider uppercase">
                    {value.title}
                  </h3>
                  <p className="text-[#6B5E54] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
