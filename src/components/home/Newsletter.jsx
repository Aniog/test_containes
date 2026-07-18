import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container-max section-padding">
        <div className="bg-espresso text-warmwhite px-8 md:px-16 py-14 md:py-20 text-center max-w-3xl mx-auto">
          <p className="font-sans text-xs tracking-widest uppercase text-gold mb-4">Join Velmora</p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-wide mb-4">
            {submitted ? 'Welcome to the Family' : '10% Off Your First Order'}
          </h2>
          <p className="text-stone text-sm md:text-base max-w-md mx-auto mb-8">
            {submitted
              ? 'Your code has been sent to your inbox. Enjoy your first taste of Velmora.'
              : 'Sign up for early access to new collections, exclusive offers, and styling inspiration from our atelier.'}
          </p>

          {!submitted && (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-stone/40 text-warmwhite placeholder:text-stone px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
              />
              <button type="submit" className="btn-accent whitespace-nowrap">Subscribe</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
