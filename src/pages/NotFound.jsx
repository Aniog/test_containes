import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-bone-100 pt-32 pb-32 min-h-screen">
      <div className="container-x text-center">
        <p className="text-[11px] font-medium uppercase tracking-widest2 text-espresso/55">
          Lost in the velvet box
        </p>
        <h1 className="display-serif mt-3 text-5xl sm:text-6xl">
          404
        </h1>
        <p className="mt-4 text-espresso/65 max-w-md mx-auto">
          We couldn't find the piece you were looking for. Let's get you back to the collection.
        </p>
        <Link to="/shop" className="btn btn-primary mt-8">
          Back to shop
        </Link>
      </div>
    </div>
  );
}
