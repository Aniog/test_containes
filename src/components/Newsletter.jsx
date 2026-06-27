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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-velmora-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
          Join for 10% Off
        </h2>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Subscribe to receive exclusive offers, early access to new collections, 
          and jewelry care tips from our studio.
        </p>

        {isSubmitted ? (
          <div className="bg-green-900 bg-opacity-30 p-6 rounded">
            <p className="text-lg">Thank you for subscribing! Check your email for your discount code.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-3 bg-transparent border border-gray-600 text-white placeholder-gray-500 
                       focus:border-velmora-gold focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.
        </p>
      </div>
    </section>
  );
}
