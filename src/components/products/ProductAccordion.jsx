import React from 'react';
import { Accordion } from '@/components/ui/accordion';

const ProductAccordion = ({ description, materialsAndCare, shippingAndReturns }) => {
  return (
    <Accordion type="single" collapsible className="w-full border-t border-brand-line">
      <Accordion.Item value="description">
        <AccordionTrigger className="text-sm font-semibold uppercase tracking-widest text-brand-ink">
          Description
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm leading-relaxed text-brand-muted">{description}</p>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item value="materials">
        <AccordionTrigger className="text-sm font-semibold uppercase tracking-widest text-brand-ink">
          Materials & Care
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm leading-relaxed text-brand-muted">{materialsAndCare}</p>
        </AccordionContent>
      </Accordion.Item>
      <Accordion.Item value="shipping">
        <AccordionTrigger className="text-sm font-semibold uppercase tracking-widest text-brand-ink">
          Shipping & Returns
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-sm leading-relaxed text-brand-muted">{shippingAndReturns}</p>
        </AccordionContent>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProductAccordion;
