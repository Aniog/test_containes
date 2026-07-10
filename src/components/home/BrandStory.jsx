import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './BrandStory.css';

export default function BrandStory() {
  return (
    <section className="brand-story section">
      <div className="brand-story__container">
        <div className="brand-story__image">
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=1000&fit=crop" 
            alt="Jewelry craftsmanship"
          />
        </div>
        
        <div className="brand-story__content">
          <span className="brand-story__label">Our Story</span>
          <h2 className="brand-story__title">
            Crafted with Intention, Worn with Love
          </h2>
          <p className="brand-story__text">
            At Velmora, we believe jewelry is more than an accessory—it's a memory, 
            a statement, a treasure. Each piece in our collection is thoughtfully 
            designed to bring joy for years to come.
          </p>
          <p className="brand-story__text">
            Our demi-fine jewelry bridges the gap between luxury and accessibility, 
            offering premium quality pieces that don't compromise on style or craftsmanship.
          </p>
          <Link to="/about" className="brand-story__link">
            Learn More About Us
            <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}