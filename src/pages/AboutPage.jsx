import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <main className="pt-20 md:pt-24">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(26,23,20,0.4), rgba(26,23,20,0.6)), url(https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=1600&q=80)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-serif text-4xl md:text-6xl font-light">Our Story</h1>
          <p className="mt-4 text-white/80 font-light max-w-lg mx-auto">
            The quiet moments that inspired a jewelry brand
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-padding py-16 md:py-24">
        <div className="max-w-3xl mx-auto space-y-8 text-foreground/70 leading-relaxed">
          <p className="text-lg font-light">
            Velmora was born from a simple observation: the most beautiful jewelry isn't the kind 
            that sits in a velvet box waiting for a special occasion. It's the kind you reach for 
            every morning — the pieces that become part of your story.
          </p>
          <p>
            We set out to create demi-fine jewelry that bridges the gap between costume accessories 
            and luxury fine jewelry. Every piece is crafted in 18K gold plating over sterling silver, 
            offering the look and feel of luxury at a price that makes everyday elegance possible.
          </p>

          <div className="aspect-[16/9] bg-[#E8E2D9] rounded-sm overflow-hidden my-12">
            <div className="w-full h-full bg-gradient-to-br from-[#D4CFC7] to-[#E8E2D9] flex items-center justify-center">
              <span className="text-muted-foreground text-sm tracking-wider">Behind the Scenes</span>
            </div>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-foreground">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-lg mb-2 text-foreground">Quality First</h3>
              <p className="text-sm">
                Every piece undergoes rigorous quality checks. We use only the finest materials 
                and work with artisans who share our commitment to excellence.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-2 text-foreground">Accessible Luxury</h3>
              <p className="text-sm">
                We believe luxury should be accessible. Our direct-to-consumer model means 
                you get premium quality without the traditional markup.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg mb-2 text-foreground">Sustainable Practice</h3>
              <p className="text-sm">
                From recycled packaging to responsible sourcing, we're committed to reducing 
                our environmental footprint at every step.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
