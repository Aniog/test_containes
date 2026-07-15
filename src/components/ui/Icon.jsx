import React from 'react';
import { Search, ShoppingBag, X, Plus, Minus, ChevronDown, ChevronUp, ArrowRight, Menu } from 'lucide-react';

export const Icons = {
  Search: (props) => <Search size={18} strokeWidth={1.5} {...props} />,
  Cart: (props) => <ShoppingBag size={18} strokeWidth={1.5} {...props} />,
  Close: (props) => <X size={18} strokeWidth={1.5} {...props} />,
  Plus: (props) => <Plus size={16} strokeWidth={1.5} {...props} />,
  Minus: (props) => <Minus size={16} strokeWidth={1.5} {...props} />,
  ChevronDown: (props) => <ChevronDown size={16} strokeWidth={1.5} {...props} />,
  ChevronUp: (props) => <ChevronUp size={16} strokeWidth={1.5} {...props} />,
  ArrowRight: (props) => <ArrowRight size={16} strokeWidth={1.5} {...props} />,
  Menu: (props) => <Menu size={18} strokeWidth={1.5} {...props} />,
};

export default Icons;
