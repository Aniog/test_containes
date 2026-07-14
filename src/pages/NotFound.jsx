import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-gold-600">404</p>
      <h1 className="mt-3 font-serif text-4xl md:text-6xl">Page Not Found</h1>
      <p className="mt-4 max-w-md text-espresso-600">
        We couldn't find the page you were looking for. Let's get you back to the collection.
      </p>
      <Button asChild className="mt-8">
        <Link to="/shop">Shop the Collection</Link>
      </Button>
    </div>
  );
}
