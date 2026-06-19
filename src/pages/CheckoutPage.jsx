import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <div className="pt-32 pb-20 text-center min-h-[60vh] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-serif mb-4">Checkout coming soon...</h1>
      <p className="text-muted-foreground mb-8">Checkout functionality will be integrated with a payment provider.</p>
      <Link to="/shop" className="text-primary hover:underline underline-offset-4 tracking-widest uppercase text-sm">
        Return to Shop
      </Link>
    </div>
  );
};

export default CheckoutPage;