import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-cream px-6 pt-20 text-center">
      <p className="eyebrow">404</p>
      <h1 className="display-md mt-4 text-ink">This page wandered off.</h1>
      <p className="mt-4 max-w-md font-serif text-[16px] italic text-taupe">
        Even the best jewelry boxes lose a piece sometimes. Let&rsquo;s get you
        back to the collection.
      </p>
      <Link to="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
