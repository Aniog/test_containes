import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="bg-[#252320] py-20 md:py-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 text-center">
        {!submitted ? (
          <>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[#C4952E] mb-4">
              The Velmora Edit
            </p>
            <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-white tracking-[0.03em] mb-4">
              Join for 10% off your first order
            </h2>
            <p className="text-[#A8A39C] mb-10 max-w-md mx-auto text-[15px]">
              Early access to new collections, exclusive offers, and styling inspiration — delivered with intention.
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 px-5 py-3 bg-white/10 border border-white/20 text-white text-sm placeholder:text-[#A8A39C] focus:outline-none focus:border-[#C4952E] transition-colors"
              />
              <button type="submit" className="btn-primary text-xs tracking-widest whitespace-nowrap">
                Sign Up
              </button>
            </form>
          </>
        ) : (
          <div className="animate-fade-in">
            <h2 className="font-serif text-[2rem] md:text-[2.5rem] text-white tracking-[0.03em] mb-4">
              You're on the list.
            </h2>
            <p className="text-[#A8A39C] text-[15px]">
              Check your inbox for your 10% welcome code.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
