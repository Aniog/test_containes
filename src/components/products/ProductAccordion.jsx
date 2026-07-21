import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

const ProductAccordion = ({ description, materialsAndCare, shippingAndReturns }) => {
  return (
    <Accordion type="single" collapsible className="w-full border-t border-brand-line">
      <AccordionItem value="description">
        <AccordionTrigger className="text-sm font-semibold uppercase tracking-widest text-brand-ink">
          Description
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm leading-relaxed text-brand-muted">{description}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="materials">
        <AccordionTrigger className="text-sm font-semibold uppercase tracking-widest text-brand-ink">
          Materials & Care
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm leading-relaxed text-brand-muted">{materialsAndCare}</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="shipping">
        <AccordionTrigger className="text-sm font-semibold uppercase tracking-widest text-brand-ink">
          Shipping & Returns
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm leading-relaxed text-brand-muted">{shippingAndReturns}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductAccordion;
