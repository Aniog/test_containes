import { Container } from "@/components/ui/Container";
import { trustItems } from "@/data/site";

export default function TrustBar() {
  return (
    <div className="border-y border-hairline bg-ivory">
      <Container className="py-4 md:py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 md:gap-x-14">
          {trustItems.map((item, i) => (
            <li
              key={item}
              className="flex items-center gap-3 text-[10px] md:text-[11px] font-medium uppercase tracking-ui text-taupe"
            >
              {i > 0 && <span aria-hidden className="hidden md:inline-block w-1 h-1 rounded-full bg-gold" />}
              <span className="md:hidden w-1 h-1 rounded-full bg-gold" />
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
