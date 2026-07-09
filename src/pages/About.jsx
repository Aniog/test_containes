import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.15em] text-[#8A8178] mb-3">ESTABLISHED 2019</p>
          <h1 className="heading-serif text-6xl tracking-[0.04em]">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none text-[#5C5651] leading-relaxed space-y-8">
          <p className="text-xl">Velmora was born from a simple belief: that beautiful, well-crafted jewelry should be accessible without compromise.</p>
          
          <p>Founded in 2019 by designer Elena Voss, Velmora began as a small studio in the heart of the city. What started as a passion project quickly grew into a beloved brand, known for its commitment to quality, thoughtful design, and the quiet luxury that defines demi-fine jewelry.</p>

          <div className="my-12 aspect-video bg-[#2C2825]">
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1400&q=80" 
              alt="Velmora Studio" 
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="heading-serif text-3xl tracking-[0.03em] text-[#2C2825] mt-12">The Velmora Difference</h2>
          
          <p>Every piece in our collection is designed with intention. We source only the finest materials—18K gold plating over solid brass, premium crystals, and hypoallergenic findings—to ensure our jewelry not only looks beautiful but feels beautiful too.</p>

          <p>Our artisans hand-finish each piece in small batches, paying close attention to every detail. This dedication to craftsmanship means that Velmora jewelry is made to last, becoming part of your story for years to come.</p>

          <div className="grid md:grid-cols-3 gap-8 my-12 pt-8 border-t border-[#E5E0D8]">
            {[
              { title: "Thoughtful Design", desc: "Each piece is designed to be versatile, timeless, and effortlessly wearable." },
              { title: "Premium Materials", desc: "18K gold plating, premium crystals, and hypoallergenic findings." },
              { title: "Hand-Finished", desc: "Small batch production ensures attention to every detail." },
            ].map((item, i) => (
              <div key={i}>
                <h4 className="font-medium mb-2 tracking-[0.05em]">{item.title}</h4>
                <p className="text-sm text-[#8A8178]">{item.desc}</p>
              </div>
            ))}
          </div>

          <p>Today, Velmora is worn by women around the world who appreciate the beauty of quiet luxury. From everyday staples to special occasion pieces, our collection is designed for the modern woman who values both elegance and ease.</p>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E0D8] text-center">
          <Link to="/shop" className="btn btn-accent">Explore the Collection</Link>
        </div>
      </div>
    </div>
  );
};

export default About;