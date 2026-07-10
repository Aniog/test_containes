import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const scrollToContent = () => {
    const trustBar = document.querySelector('.trust-bar');
    if (trustBar) {
      trustBar.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero__background">
        <img 
          src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1920&h=1080&fit=crop" 
          alt="Gold jewelry on model"
          className="hero__image"
        />
        <div className="hero__overlay" />
      </div>
      
      <div className="hero__content">
        <h1 className="hero__title">Crafted to be Treasured</h1>
        <p className="hero__subtitle">
          Demi-fine jewelry designed for the modern woman. 
          Elegant pieces that become part of your story.
        </p>
        <Link to="/shop" className="btn btn-accent hero__cta">
          Shop the Collection
        </Link>
      </div>

      <button 
        className="hero__scroll" 
        onClick={scrollToContent}
        aria-label="Scroll to content"
      >
        <ArrowDown size={20} strokeWidth={1.5} />
      </button>
    </section>
  );
}