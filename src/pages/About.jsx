import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="relative py-20 md:py-32" style={{ backgroundColor: 'var(--color-ivory)' }}>
        <div className="container mx-auto text-center px-6">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
            Our Story
          </h1>
          <p className="font-sans text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-muted)' }}>
            Crafting jewelry that becomes a part of your story since 2019
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: 'var(--color-muted)' }}>
              Velmora was born from a simple belief: every woman deserves jewelry that makes her feel 
              confident, elegant, and uniquely herself. Founded in 2019, we set out to create pieces 
              that bridge the gap between fine jewelry and fashion jewelry — what we call "demi-fine."
            </p>
            
            <p className="font-sans text-lg leading-relaxed mb-8" style={{ color: 'var(--color-muted)' }}>
              Our collections feature premium 18K gold plating over sterling silver, ensuring each piece 
              maintains its beauty for years to come. We believe in sustainable luxury — creating 
              accessible pieces that don't compromise on quality or design.
            </p>

            <p className="font-sans text-lg leading-relaxed mb-12" style={{ color: 'var(--color-muted)' }}>
              Every Velmora piece is designed in our studio and crafted with care. We work with skilled 
              artisans who share our commitment to quality and ethical practices. The result is jewelry 
              that's made to be worn, treasured, and passed down.
            </p>

            <div className="grid grid-cols-3 gap-8 text-center mb-12">
              <div>
                <span className="font-serif text-4xl block mb-2" style={{ color: 'var(--color-gold)' }}>5+</span>
                <span className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>Years of Craft</span>
              </div>
              <div>
                <span className="font-serif text-4xl block mb-2" style={{ color: 'var(--color-gold)' }}>50K+</span>
                <span className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>Happy Customers</span>
              </div>
              <div>
                <span className="font-serif text-4xl block mb-2" style={{ color: 'var(--color-gold)' }}>100+</span>
                <span className="font-sans text-sm" style={{ color: 'var(--color-muted)' }}>Unique Designs</span>
              </div>
            </div>

            <div className="text-center">
              <Link to="/shop" className="btn-primary inline-block">
                Shop the Collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}