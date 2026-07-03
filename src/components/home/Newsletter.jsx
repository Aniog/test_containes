import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    alert('Thanks for subscribing! Check your inbox for 10% off.');
  };

  return (
    <section className="py-20 sm:py-28 bg-base">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-widest uppercase text-gold mb-3">Stay in touch</p>
          <h2 className="font-serif text-3xl sm:text-4xl tracking-wide text-white">Join for 10% off your first order</h2>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Be the first to know about new releases, exclusive offers, and journal stories.
          </p>
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-full bg-white/10 border border-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold transition-colors"
            />
            <button type="submit" className="rounded-full bg-gold text-base px-6 py-3 text-sm tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
