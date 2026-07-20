import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // A small timeout ensures it scrolls after the route rendering is complete
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return null;
}