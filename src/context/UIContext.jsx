import React, { createContext, useContext, useState, useCallback } from 'react';

const UIContext = createContext();

export function UIProvider({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState('idle'); // idle, submitting, success, error
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const openMobileMenu = useCallback(() => setIsMobileMenuOpen(true), []);
  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);
  const toggleMobileMenu = useCallback(() => setIsMobileMenuOpen(prev => !prev), []);

  const subscribeNewsletter = useCallback(async (email) => {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterStatus('error');
      setNewsletterMessage('Please enter a valid email address');
      return;
    }

    setNewsletterStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setNewsletterStatus('success');
    setNewsletterMessage('Welcome to Velmora! Check your inbox for 10% off.');
    setNewsletterEmail('');
  }, []);

  const resetNewsletter = useCallback(() => {
    setNewsletterStatus('idle');
    setNewsletterMessage('');
  }, []);

  const value = {
    isMobileMenuOpen,
    openMobileMenu,
    closeMobileMenu,
    toggleMobileMenu,
    newsletterEmail,
    setNewsletterEmail,
    newsletterStatus,
    newsletterMessage,
    subscribeNewsletter,
    resetNewsletter
  };

  return (
    <UIContext.Provider value={value}>
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}

export default UIContext;
