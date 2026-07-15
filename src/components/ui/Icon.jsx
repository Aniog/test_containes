import React from 'react'
import { 
  Search, ShoppingBag, X, Plus, Minus, ChevronDown, ChevronUp, 
  ChevronLeft, ChevronRight, Star, Menu 
} from 'lucide-react'

export const Icons = {
  Search: (props) => <Search size={18} strokeWidth={1.5} {...props} />,
  Cart: (props) => <ShoppingBag size={18} strokeWidth={1.5} {...props} />,
  Close: (props) => <X size={18} strokeWidth={1.5} {...props} />,
  Plus: (props) => <Plus size={16} strokeWidth={1.5} {...props} />,
  Minus: (props) => <Minus size={16} strokeWidth={1.5} {...props} />,
  ChevronDown: (props) => <ChevronDown size={16} strokeWidth={1.5} {...props} />,
  ChevronUp: (props) => <ChevronUp size={16} strokeWidth={1.5} {...props} />,
  ChevronLeft: (props) => <ChevronLeft size={20} strokeWidth={1.5} {...props} />,
  ChevronRight: (props) => <ChevronRight size={20} strokeWidth={1.5} {...props} />,
  Star: (props) => <Star size={14} strokeWidth={1.5} {...props} />,
  Menu: (props) => <Menu size={20} strokeWidth={1.5} {...props} />,
}

export default Icons
