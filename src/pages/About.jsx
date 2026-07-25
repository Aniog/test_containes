import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl md:text-5xl font-light mb-8 text-center">
          About Velmora
        </h1>
        
        <div className="hairline w-24 mx-auto mb-12" />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed mb-8 text-velmora-charcoal">
            At Velmora, we believe that jewelry should be more than just an accessory—it should be a 
            treasured companion in life's most precious moments.
          </p>

          <p className="mb-6 leading-relaxed text-velmora-warmGray">
            Founded with a passion for creating demi-fine jewelry that bridges the gap between luxury and 
            accessibility, each piece in our collection is thoughtfully designed and crafted using 18k gold 
            plating over high-quality brass. Our commitment to hypoallergenic materials ensures that every 
            piece is as comfortable as it is beautiful.
          </p>

          <p className="mb-6 leading-relaxed text-velmora-warmGray">
            We create jewelry for the modern woman who appreciates the finer things in life, but values 
            authenticity over pretense. Whether you're treating yourself or searching for the perfect gift, 
            Velmora offers pieces that celebrate individuality and timeless elegance.
          </p>

          <h2 className="font-serif text-3xl font-light mt-12 mb-6">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Quality',
                description: 'We use only the finest materials, including 18k gold plating and hypoallergenic bases.'
              },
              {
                title: 'Accessibility',
                description: 'Luxury should be accessible. We price our pieces fairly without compromising on quality.'
              },
              {
                title: 'Sustainability',
                description: 'We are committed to ethical sourcing and sustainable practices in our production.'
              }
            ].map((value) => (
              <div key={value.title} className="text-center p-6 bg-velmora-cream rounded-lg">
                <h3 className="font-serif text-xl mb-3">{value.title}</h3>
                <p className="text-sm text-velmora-warmGray">{value.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/shop" className="btn-primary inline-block">
              Explore Our Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
