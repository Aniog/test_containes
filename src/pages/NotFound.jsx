import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-cream min-h-[70svh] flex flex-col items-center justify-center text-center px-6">
      <p className="eyebrow text-ink-muted">404</p>
      <h1 className="font-serif text-4xl md:text-6xl text-ink font-light leading-[1.05] mt-4 max-w-xl">
        This page wandered off.
      </h1>
      <p className="font-sans text-base text-ink-muted max-w-md leading-relaxed mt-5">
        The page you are looking for has moved or no longer exists. Let us
        point you back to the collection.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to home
      </Link>
    </div>
  );
}
