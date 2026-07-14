import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="caption">Est. 2018</span>
          <h1 className="mt-2">Our Story</h1>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="body-text space-y-6 text-base">
            <p>
              Velmora was founded with a simple conviction: that fine jewelry should not be reserved 
              for rare occasions. We believe in pieces that become part of your everyday—worn to work, 
              to dinner, to the market. Jewelry that feels like an extension of yourself.
            </p>
            
            <p>
              Our name comes from the Latin "vel" (veil) and "mora" (delay)—a reminder to slow down 
              and appreciate the quiet moments. Each piece is designed to mark time, not just adorn it.
            </p>

            <div className="my-12 py-8 border-y border-[#e5e0d8]">
              <h3 className="font-serif text-xl mb-4">The Velmora Difference</h3>
              <ul className="space-y-3 text-sm">
                <li><strong>18K Gold Plating</strong> — We use a substantial layer of 18K gold over hypoallergenic brass, ensuring lasting beauty without the premium price.</li>
                <li><strong>Thoughtful Design</strong> — Every curve, every setting, every detail is considered. We design for longevity, not trends.</li>
                <li><strong>Ethical Sourcing</strong> — Our crystals are ethically sourced, and our production partners meet strict standards for fair labor.</li>
                <li><strong>Accessible Luxury</strong> — Demi-fine means you can build a collection without compromise. Most pieces are priced between $30 and $120.</li>
              </ul>
            </div>

            <p>
              We work with a small atelier in Portugal, where skilled artisans hand-finish each piece. 
              This partnership allows us to maintain quality while keeping our prices accessible. 
              We visit often, and many of our designs are born from conversations at their workbench.
            </p>

            <p>
              Thank you for choosing Velmora. We hope our pieces bring you as much joy in wearing 
              them as we find in making them.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e5e0d8] text-center">
          <Link to="/shop" className="btn btn-primary">
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
