import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] grid place-items-center text-center px-6 pt-24">
      <div>
        <p className="eyebrow mb-3">404</p>
        <h1 className="font-serif text-5xl md:text-7xl mb-4">Out of stock</h1>
        <p className="text-mocha max-w-md mx-auto mb-8">
          We couldn't find that page. The piece may have moved — or maybe you mistyped the link.
        </p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}
