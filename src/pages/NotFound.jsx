import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="bg-cream min-h-[80vh] flex items-center justify-center pt-32 pb-20">
      <div className="container-editorial text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="display-1 text-balance max-w-2xl mx-auto">
          This page slipped between the trays.
        </h1>
        <p className="mt-6 text-ink-muted max-w-md mx-auto">
          The page you were looking for has either been tucked away or never
          existed. Let's get you back to the collection.
        </p>
        <div className="mt-10">
          <Link to="/" className="btn-accent">
            Back to home
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </main>
  );
}
