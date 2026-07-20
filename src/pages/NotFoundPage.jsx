import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <div className="container-shell flex min-h-[70vh] flex-col items-center justify-center pt-28 text-center">
    <p className="eyebrow">404</p>
    <h1 className="editorial-heading mt-4 text-5xl">The page you are looking for has slipped away.</h1>
    <p className="mt-4 max-w-xl text-base leading-8 text-stone-600">
      Return to the Velmora storefront to browse earrings, necklaces, and gifting sets.
    </p>
    <Link className="button-primary mt-8" to="/">
      Back to Home
    </Link>
  </div>
);

export default NotFoundPage;
