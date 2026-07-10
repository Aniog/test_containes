import { useState } from 'react';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="newsletter section">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">Join the Velmora Circle</h2>
          <p className="newsletter__text">
            Subscribe and receive 10% off your first order, plus early access to new collections and exclusive offers.
          </p>
          
          {status === 'success' ? (
            <div className="newsletter__success">
              Thank you for subscribing!
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter__input"
                required
              />
              <button type="submit" className="btn btn-accent newsletter__button">
                Subscribe
              </button>
            </form>
          )}
          
          <p className="newsletter__privacy">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
}