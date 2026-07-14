import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

const DrawerContext = createContext(null);

export const useDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawer must be used within a DrawerProvider');
  }
  return context;
};

export const DrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openDrawer = useCallback((component) => {
    setContent(component);
    setIsOpen(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
    setContent(null);
  }, []);

  return (
    <DrawerContext.Provider value={{ isOpen, openDrawer, closeDrawer }}>
      {children}
      <DrawerContent isOpen={isOpen} onClose={closeDrawer}>
        {content}
      </DrawerContent>
    </DrawerContext.Provider>
  );
};

const DrawerContent = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out">
        <div className="flex items-center justify-between p-4 border-b border-[#e5e5e5]">
          <h2 className="font-serif text-lg text-[#1a1a1a]">Shopping Bag</h2>
          <button
            onClick={onClose}
            className="p-2 text-[#5c5c5c] hover:text-[#1a1a1a] transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="h-full overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
