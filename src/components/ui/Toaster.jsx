import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

const Toaster = () => {
  return (
    <SonnerToaster
      position="bottom-center"
      closeButton
      richColors
      className="toaster"
      toastOptions={{
        style: {
          background: '#1C1917',
          color: '#F8F5F0',
          border: '1px solid #B8976A',
        },
      }}
    />
  );
};

export default Toaster;
