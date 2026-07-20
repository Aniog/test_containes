import { useState } from 'react';
import Input from '../ui/Input';
import Button from '../ui/Button';

function Newsletter() {
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
    <section className="py-16 lg:py-24 bg-primary">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-text-light animate-fade-in">
            Join the Velmora Circle
          </h2>
          <p className="mt-4 text-text-light/70 animate-fade-in delay-100">
            Subscribe to receive 10% off your first order, plus exclusive access to new collections and special events.
          </p>

          {isSubmitted ? (
            <div className="mt-8 p-6 bg-accent/10 border border-accent/30 animate-fade-in">
              <p className="text-accent font-medium">
                Thank you for subscribing! Check your email for your discount code.
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row gap-3 animate-fade-in delay-200"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 !bg-text-light/10 !border-text-light/20 !text-text-light placeholder:!text-text-light/50"
              />
              <Button 
                type="submit" 
                variant="accent"
                size="md"
              >
                Subscribe
              </Button>
            </form>
          )}

          <p className="mt-4 text-xs text-text-light/50">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Velmora.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;