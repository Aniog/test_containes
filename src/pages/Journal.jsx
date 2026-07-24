import { Link } from "react-router-dom";
import Editorial from "@/components/home/Editorial";

export default function Journal() {
  return (
    <main className="pt-28 sm:pt-36 pb-20 bg-cream-100 min-h-screen">
      <div className="container-wide">
        <header className="mb-12 sm:mb-16">
          <p className="eyebrow mb-3">The Journal</p>
          <h1 className="font-display text-[48px] sm:text-[80px] leading-[1] text-onyx-800">
            Stories from the studio.
          </h1>
          <p className="font-display italic text-[20px] sm:text-[24px] text-mocha-500 mt-3 max-w-[60ch]">
            Slow letters on craft, care, and the women who wear our pieces.
          </p>
        </header>
        <Editorial />
        <div className="mt-16 text-center">
          <Link to="/" className="btn-outline">Back to home</Link>
        </div>
      </div>
    </main>
  );
}
