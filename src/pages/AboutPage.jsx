import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="bg-brand-espresso py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-5xl text-white tracking-wide">
            Our Story
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <div className="w-12 h-px bg-brand-gold mx-auto mb-8" />
          <p className="font-serif text-2xl md:text-3xl text-brand-charcoal leading-relaxed">
            Born from a belief that fine jewelry should be accessible, Velmora crafts each piece with the same care and attention as the world's top maisons.
          </p>
        </div>
        <div className="space-y-6 text-sm md:text-base text-brand-muted font-sans leading-relaxed">
          <p>
            Velmora was founded with a simple mission: to create demi-fine jewelry that looks and feels luxurious, without the luxury markup. We believe every woman deserves to own pieces that make her feel extraordinary — whether she's dressing up for a special occasion or adding a touch of elegance to her everyday.
          </p>
          <p>
            Each piece in our collection is designed in-house, drawing inspiration from architectural forms, natural textures, and the timeless beauty of gold. We work with skilled artisans who share our commitment to quality, using 18K gold plating over hypoallergenic stainless steel to ensure every piece is as comfortable as it is beautiful.
          </p>
          <p>
            From our studio to your jewelry box, every Velmora piece undergoes rigorous quality checks. We're proud to offer free worldwide shipping, 30-day returns, and a satisfaction guarantee — because we believe in our craft, and we believe you will too.
          </p>
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-brand-gold text-white px-10 py-3.5 text-xs font-sans font-semibold tracking-ultra-wide uppercase hover:bg-brand-gold-dark transition-colors duration-200"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
