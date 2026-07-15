import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-velvet-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-sans font-semibold tracking-ultra-wide text-champagne uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-obsidian mb-6">
            Designed to be Treasured
          </h1>
          <p className="text-velvet-600 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Velmora was born from a simple belief: every woman deserves jewelry that makes her feel special, 
            without the luxury price tag.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&h=1000&fit=crop"
                alt="Velmora craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-obsidian mb-6">
                The Beginning
              </h2>
              <div className="space-y-4 text-velvet-700 font-sans leading-relaxed">
                <p>
                  Founded in 2019, Velmora started with a small collection of handcrafted earrings 
                  designed for everyday wear. Our founder, inspired by the timeless elegance of fine 
                  jewelry and the accessibility of modern fashion, set out to bridge the gap.
                </p>
                <p>
                  Each piece in our collection is thoughtfully designed with quality at its core. 
                  We use 18K gold plating over hypoallergenic metals, ensuring our jewelry is both 
                  beautiful and comfortable for everyday wear.
                </p>
                <p>
                  Today, Velmora serves customers worldwide, but our commitment remains the same: 
                  creating jewelry that you'll treasure for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-velvet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-obsidian mb-4">
              Our Values
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality First',
                description: 'Every piece undergoes strict quality control. We use premium materials that last.',
              },
              {
                title: 'Accessible Luxury',
                description: 'We believe elegance should be attainable. Our pricing makes luxury accessible.',
              },
              {
                title: 'Thoughtful Design',
                description: 'Each piece is designed to be versatile, taking you from day to night effortlessly.',
              },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-serif text-xl font-semibold text-obsidian mb-3">{value.title}</h3>
                <p className="text-velvet-600 font-sans">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-obsidian text-cream text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold mb-4">
            Ready to Discover Velmora?
          </h2>
          <Link to="/shop" className="btn-accent">
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
