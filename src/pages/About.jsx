import React from 'react';

const About = () => {
  return (
    <div className="pt-20">
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="text-xs tracking-[0.2em] text-accent mb-4">EST. 2019</p>
        <h1 className="font-serif text-5xl mb-8">Our Story</h1>
        <div className="prose prose-lg text-muted-foreground space-y-6 text-left">
          <p>
            Velmora was founded with a simple belief: that fine jewelry should be accessible without 
            compromising on quality or craftsmanship. We create demi-fine pieces that bridge the gap 
            between everyday wear and heirloom treasures.
          </p>
          <p>
            Each piece in our collection is designed in our sunlit studio and brought to life by 
            skilled artisans who share our commitment to excellence. We source only the finest 
            materials—18K gold plating over hypoallergenic brass, ethically sourced crystals—and 
            finish every item by hand.
          </p>
          <p>
            Our aesthetic is one of quiet luxury: refined silhouettes, thoughtful details, and a 
            timeless quality that transcends trends. We believe jewelry should feel personal, 
            meaningful, and effortlessly wearable.
          </p>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="font-serif text-4xl mb-2">5</div>
            <p className="text-sm tracking-wider text-muted-foreground">COUNTRIES SHIPPED</p>
          </div>
          <div>
            <div className="font-serif text-4xl mb-2">12k+</div>
            <p className="text-sm tracking-wider text-muted-foreground">PIECES LOVED</p>
          </div>
          <div>
            <div className="font-serif text-4xl mb-2">98%</div>
            <p className="text-sm tracking-wider text-muted-foreground">RETURN CUSTOMERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
