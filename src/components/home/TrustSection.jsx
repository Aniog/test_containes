import { Container } from "@/components/ui/Container";
import { trustPoints } from "@/data/siteData";

export function TrustSection() {
  return (
    <section className="py-16 md:py-20 bg-blue-800">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {trustPoints.map((point) => (
            <div key={point.label}>
              <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {point.number}
              </p>
              <p className="text-blue-100 font-medium">{point.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
