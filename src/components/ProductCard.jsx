import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

const ProductCard = ({ title, description, specs, onRequestQuote }) => {
  return (
    <Card className="group h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-brand-steel/10">
      <CardHeader className="pb-4">
        <div className="h-1.5 w-12 bg-brand-bronze mb-4 rounded" />
        <CardTitle className="text-2xl tracking-tight group-hover:text-brand-bronze transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-base pt-2 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="space-y-2 mb-6 flex-1">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              <div className="mt-1.5 w-1 h-1 rounded-full bg-brand-bronze flex-shrink-0" />
              <span className="text-brand-charcoal/80">{spec}</span>
            </div>
          ))}
        </div>
        <Button 
          variant="outline" 
          className="w-full mt-auto group-hover:bg-brand-navy group-hover:text-white group-hover:border-brand-navy"
          onClick={onRequestQuote}
        >
          Request Quote
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
