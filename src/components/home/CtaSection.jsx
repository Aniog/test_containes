import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28 bg-blue-800">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to source from China with confidence?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Tell us about your product and we will respond within 24 hours with a free sourcing assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Get a Free Sourcing Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-blue-700 hover:text-white">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
