import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion'

export default function AccordionInfo({ product }) {
  return (
    <Accordion type="single" collapsible defaultValue="description">
      <AccordionItem value="description">
        <AccordionTrigger>Description</AccordionTrigger>
        <AccordionContent>
          {product.description}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="materials">
        <AccordionTrigger>Materials & Care</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
          <p><strong>Care:</strong> {product.care}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="shipping">
        <AccordionTrigger>Shipping & Returns</AccordionTrigger>
        <AccordionContent>
          <p className="mb-2"><strong>Shipping:</strong> {product.shipping}</p>
          <p><strong>Returns:</strong> {product.returns}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
