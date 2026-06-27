import { Link } from 'react-router-dom';

export default function PlaceholderPage({ title, description }) {
  return (
    <main className="pt-20 md:pt-24 pb-16 min-h-screen">
      <div className="container py-16 text-center">
        <h1 
          className="font-serif text-4xl text-[var(--color-charcoal)] mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          {title}
        </h1>
        <p className="text-[var(--color-warm-gray)] mb-8 max-w-md mx-auto">
          {description}
        </p>
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-[var(--color-gold)] hover:underline"
        >
          ← Return Home
        </Link>
      </div>
    </main>
  );
}
