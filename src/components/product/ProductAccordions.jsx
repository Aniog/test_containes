import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ProductAccordions({ product }) {
  return (
    <Accordion type="multiple" defaultValue={["description"]} className="mt-10 md:mt-12">
      <AccordionItem value="description" className="border-b border-divider">
        <AccordionTrigger className="text-xs uppercase tracking-[0.15em] text-cream hover:text-champagne py-4">
          Description
        </AccordionTrigger>
        <AccordionContent className="text-cream-muted pb-4 leading-relaxed">
          {product.description}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="materials" className="border-b border-divider">
        <AccordionTrigger className="text-xs uppercase tracking-[0.15em] text-cream hover:text-champagne py-4">
          Materials & Care
        </AccordionTrigger>
        <AccordionContent className="text-cream-muted pb-4 leading-relaxed">
          <p className="mb-2"><strong className="text-cream">Materials:</strong> {product.materials}</p>
          <p><strong className="text-cream">Care:</strong> {product.care}</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="shipping" className="border-b border-divider">
        <AccordionTrigger className="text-xs uppercase tracking-[0.15em] text-cream hover:text-champagne py-4">
          Shipping & Returns
        </AccordionTrigger>
        <AccordionContent className="text-cream-muted pb-4 leading-relaxed">
          Free worldwide shipping on all orders. Orders are processed within 1-2
          business days and delivered in 5-10 business days depending on your
          location. Returns accepted within 30 days of delivery in original
          condition.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
