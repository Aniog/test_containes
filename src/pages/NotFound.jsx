import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="page-fade min-h-screen pt-32 pb-24 bg-cream">
      <div className="mx-auto max-w-editorial px-5 md:px-10 flex flex-col items-center text-center gap-4">
        <span className="eyebrow text-champagne-dark">404</span>
        <h1 className="font-display text-5xl md:text-7xl text-ink">Not here yet.</h1>
        <p className="text-muted max-w-md">
          The page you were looking for has been moved or doesn't exist. The collection is still on the table.
        </p>
        <Link to="/" className="btn-base btn-primary mt-4">Back to home</Link>
      </div>
    </main>
  );
}
