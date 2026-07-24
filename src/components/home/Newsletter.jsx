import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 md:py-28 bg-[#2C2824]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#FAF8F5] mb-3">
            Join the Velmora Circle
          </h2>
          <p className="font-sans text-[#9A8F82] mb-8">
            Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>

          {isSubmitted ? (
            <div className="p-6 bg-[#C9A962]/10 border border-[#C9A962]/30">
              <p className="font-serif text-lg text-[#C9A962]">
                Thank you for joining! Check your email for your exclusive discount code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 bg-transparent border border-[#6B635A] text-[#FAF8F5] placeholder-[#6B635A] font-sans outline-none focus:border-[#C9A962] transition-colors"
                required
              />
              <button
                type="submit"
                className="btn btn-accent whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-[#6B635A]">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}