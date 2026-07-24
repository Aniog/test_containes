import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-cream-100">
      <p className="font-display italic text-gold-500 text-[120px] sm:text-[200px] leading-none">
        404
      </p>
      <h1 className="font-display text-[36px] sm:text-[56px] leading-[1.05] text-onyx-800 mt-2">
        Lost in the atelier.
      </h1>
      <p className="mt-4 text-[15px] text-mocha-600 max-w-[40ch]">
        The page you're looking for has wandered off. Let's get you back to the
        jewelry.
      </p>
      <Link to="/" className="btn-primary mt-8">
        <ArrowLeft size={14} strokeWidth={1.5} /> Back to home
      </Link>
    </main>
  );
}
