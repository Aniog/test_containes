import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1000);
  };

  return (
    <section className="bg-charcoal py-16 md:py-24">
      <div className="container-wide">
        <div className="max-w-xl mx-auto text-center">
          {/* Content */}
          <span className="text-xs tracking-ultra-wide uppercase text-gold">
            Stay Connected
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ivory mt-2 mb-4">
            Join the Velmora Circle
          </h2>
          <p className="text-ivory/70 mb-8">
            Be the first to know about new collections, exclusive offers, and styling inspiration. 
            Receive 10% off your first order when you subscribe.
          </p>

          {/* Form */}
          {status === 'success' ? (
            <div className="bg-sage/20 border border-sage/30 p-6">
              <p className="text-sage font-medium">
                Welcome to the Velmora Circle!
              </p>
              <p className="text-ivory/70 text-sm mt-2">
                Check your inbox for your 10% off code.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-transparent border border-ivory/20 text-ivory placeholder:text-ivory/40 focus:outline-none focus:border-gold transition-colors"
                  disabled={status === 'submitting'}
                />
                {error && (
                  <p className="text-rose text-xs mt-2 text-left">{error}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-3 bg-gold text-white text-sm tracking-wider uppercase hover:bg-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'submitting' ? 'Subscribing...' : 'Get 10% Off'}
              </button>
            </form>
          )}

          {/* Privacy Note */}
          <p className="text-xs text-ivory/40 mt-4">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
