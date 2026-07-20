import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="flex min-h-[70vh] flex-col items-center justify-center bg-[#fbfaf9] px-5 text-center">
    <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-700">
      404
    </p>
    <h1 className="mt-3 font-serif text-4xl font-light text-stone-900 md:text-5xl">
      Page Not Found
    </h1>
    <p className="mt-4 max-w-sm text-stone-600">
      We couldn't find the page you were looking for. Let us help you find something beautiful.
    </p>
    <Link to="/shop" className="mt-8">
      <Button>Continue Shopping</Button>
    </Link>
  </div>
);

export default NotFound;
