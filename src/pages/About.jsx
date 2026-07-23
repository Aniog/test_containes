import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-8 pb-20">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
            About Us
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-[var(--color-charcoal)] mt-4 mb-8">
            Our Story
          </h1>
          
          <div className="prose prose-lg text-[var(--color-charcoal-light)]">
            <p className="mb-6">
              Founded in 2018, Velmora was born from a simple belief: every woman deserves jewelry that makes her feel extraordinary, without compromise.
            </p>
            
            <p className="mb-6">
              We craft each piece with intention, using only the finest materials and timeless designs that transcend seasonal trends. Our demi-fine jewelry is designed to be worn every day, becoming a part of your personal story.
            </p>
            
            <p className="mb-6">
              Based in Los Angeles, our team of skilled artisans brings decades of experience to every piece we create. We work with ethically sourced materials and partner with responsible manufacturers to ensure our jewelry is as kind to the planet as it is beautiful.
            </p>
            
            <p className="mb-6">
              We believe in the power of subtle elegance—the kind that catches the light and the eye in equal measure. Our pieces are designed to be layered, mixed, and matched, allowing you to express your unique style every day.
            </p>
            
            <p>
              Thank you for being part of the Velmora story. We hope our jewelry brings you as much joy as it brings us to create it.
            </p>
          </div>

          <div className="mt-12">
            <Link to="/shop" className="btn-primary">
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}