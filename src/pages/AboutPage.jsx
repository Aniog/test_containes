import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <main className="pt-8 pb-16">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=1920&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center text-white">
          <p className="label-uppercase text-xs tracking-[0.3em] mb-4 opacity-80">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">
            The Velmora Story
          </h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2 mb-6">Our Mission</h2>
            <p className="text-lg text-[#6B6560] leading-relaxed mb-6">
              We believe every woman deserves to wear beautiful, well-crafted jewelry. 
              Velmora was founded on the principle that luxury shouldn't come with a luxury price tag.
            </p>
            <p className="text-[#6B6560] leading-relaxed">
              We partner directly with skilled artisans who share our commitment to quality and ethical 
              production, allowing us to offer premium demi-fine pieces at accessible prices without 
              compromising on craftsmanship or materials.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section bg-[#FAF8F5]">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'Every piece is crafted with 18K gold plating over hypoallergenic metals, ensuring both beauty and comfort for everyday wear.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Ethical Production',
                description: 'We work with certified manufacturers who ensure fair wages and safe working conditions for all artisans in our supply chain.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Sustainable Packaging',
                description: 'Our signature gift boxes are made from recycled materials, because beautiful jewelry deserves beautiful (and responsible) packaging.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6" style={{ color: 'var(--color-gold)' }}>
                  {value.icon}
                </div>
                <h3 className="heading-3 mb-4">{value.title}</h3>
                <p className="text-[#6B6560] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-white">
        <div className="container text-center">
          <h2 className="heading-2 mb-6">Ready to Discover?</h2>
          <p className="text-[#6B6560] mb-8 max-w-xl mx-auto">
            Explore our collection of demi-fine jewelry and find your perfect piece today.
          </p>
          <Link to="/shop" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </section>
    </main>
  );
}
