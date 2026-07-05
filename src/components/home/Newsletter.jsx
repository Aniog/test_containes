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
    <section className="py-20 bg-[#d4af37]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {submitted ? (
          <div className="animate-fadeIn">
            <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-4">
              Welcome to Velmora
            </h3>
            <p className="text-[#1a1a1a]/70">
              Check your inbox for your 10% off code.
            </p>
          </div>
        ) : (
          <>
            <span className="text-[#1a1a1a]/60 text-xs tracking-[0.3em] uppercase">
              Join the Family
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mt-3 mb-4">
              10% Off Your First Order
            </h2>
            <p className="text-[#1a1a1a]/70 mb-8">
              Subscribe for exclusive access to new collections, styling tips, 
              and special offers.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-5 py-3 bg-white text-[#1a1a1a] placeholder-[#1a1a1a]/50 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-[#1a1a1a] text-white text-sm tracking-[0.15em] uppercase hover:bg-[#333] transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[#1a1a1a]/50 text-xs mt-4">
              By subscribing, you agree to our Privacy Policy
            </p>
          </>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
