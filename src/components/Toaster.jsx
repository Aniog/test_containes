import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

const Toaster = () => {
  return (
    <SonnerToaster 
      position="bottom-center"
      toastOptions={{
        className: 'toast',
        duration: 2000,
      }}
    />
  );
};

export default Toaster;
