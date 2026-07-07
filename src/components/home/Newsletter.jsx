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
    <section className="bg-velmora-deep">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="font-serif text-2xl lg:text-3xl tracking-wide text-velmora-ivory mb-4">
            Join for 10% off your first order
          </h2>
          <p className="text-velmora-sand text-sm mb-8">
            Early access to new collections, exclusive offers, and styling inspiration — delivered with care.
          </p>

          {submitted ? (
            <p className="text-velmora-gold text-sm tracking-wider">
              Thank you — check your inbox for your welcome code.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-transparent border border-velmora-borderDark text-velmora-ivory placeholder:text-velmora-stone 
                  px-5 py-3 text-sm focus:outline-none focus:border-velmora-gold transition-colors rounded-sm"
              />
              <button type="submit" className="btn-primary whitespace-nowrap text-xs">
                Get 10% Off
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
