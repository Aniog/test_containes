import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionTitle from "@/components/ui/SectionTitle";

export default function NotFound() {
  return (
    <section className="bg-cream min-h-[70vh] flex items-center justify-center px-5 py-32 text-center">
      <div className="max-w-md">
        <Eyebrow>404</Eyebrow>
        <SectionTitle className="mt-3 text-3xl md:text-4xl">
          We couldn't find that&nbsp;page.
        </SectionTitle>
        <p className="mt-5 text-sm text-taupe">
          The link may be old, or the piece has been retired. Either way —
          let's get you back to something lovely.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <Button as={Link} to="/" size="lg">
            Back Home
          </Button>
          <Button as={Link} to="/shop" variant="ghost" size="lg">
            Shop All
          </Button>
        </div>
      </div>
    </section>
  );
}
